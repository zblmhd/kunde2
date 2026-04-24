import Image from 'next/image';
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
    <section className="kd-testimonials kd-section" aria-label={t.testimonialsTitle}>
      <div className="kd-container">
        <div className="kd-section__head">
          <span className="kd-eyebrow">{isZh ? '調養見證' : 'Testimonials'}</span>
          <h2>{t.testimonialsTitle}</h2>
          <p>{t.testimonialsSub}</p>
        </div>

        <div className="kd-testimonials__grid">
          {testimonials.map((item) => (
            <figure key={item.slug} className="kd-testimonial">
              <div className="kd-testimonial__head">
                <div className="relative w-[44px] h-[44px] shrink-0">
                  <Image
                    src={item.avatar}
                    alt={isZh ? item.nameZh : item.nameEn}
                    fill
                    sizes="44px"
                    className="kd-testimonial__avatar"
                  />
                </div>
                <figcaption>
                  <div className="kd-testimonial__name">
                    {isZh ? item.nameZh : item.nameEn}
                  </div>
                  <div className="kd-testimonial__meta">
                    {isZh ? item.treatmentZh : item.treatmentEn}
                  </div>
                </figcaption>
              </div>
              <blockquote className="kd-testimonial__quote">
                &ldquo;{isZh ? item.quoteZh : item.quoteEn}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
