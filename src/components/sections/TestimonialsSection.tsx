import Image from 'next/image';
import { Star } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';
import { testimonials } from '@/data/testimonials';

interface Props {
  locale: Locale;
}

export function TestimonialsSection({ locale }: Props) {
  const t = dict[locale].home;
  const isZh = locale === 'zh';
  return (
    <section className="bg-cream">
      <div className="container-kunde py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-h2 mb-3">{t.testimonialsTitle}</h2>
          <p className="text-[color:var(--color-text-muted)]">{t.testimonialsSub}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t2) => (
            <figure
              key={t2.slug}
              className="bg-white border border-border rounded-lg p-6 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-cream flex-shrink-0">
                  <Image
                    src={t2.avatar}
                    alt={
                      isZh
                        ? `${t2.nameZh} — 坤德中医患者证言`
                        : `${t2.nameEn} — Patient testimonial, Best Acupuncture NYC`
                    }
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <figcaption className="font-serif text-lg">
                    {isZh ? t2.nameZh : t2.nameEn}
                  </figcaption>
                  <p className="text-xs text-[color:var(--color-text-muted)]">
                    {isZh ? t2.treatmentZh : t2.treatmentEn} ·{' '}
                    {new Date(t2.date).toLocaleDateString(
                      isZh ? 'zh-CN' : 'en-US',
                      { year: 'numeric', month: 'short' },
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-primary fill-primary"
                    aria-hidden
                  />
                ))}
              </div>
              <blockquote className="text-sm text-[color:var(--color-text)]/90 leading-relaxed italic flex-1">
                &ldquo;{isZh ? t2.quoteZh : t2.quoteEn}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
