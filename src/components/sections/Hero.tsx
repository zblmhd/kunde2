import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';

interface Props {
  locale: Locale;
}

/**
 * Home-page Hero.
 * - H1 locked to 4.1.1 keyword phrase (zh / en).
 * - LCP image: priority + width/height + alt containing core keywords.
 * - First 100 words of body copy contain the locked keywords.
 */
export function Hero({ locale }: Props) {
  const t = dict[locale].home;
  const isZh = locale === 'zh';

  return (
    <section className="relative text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/clinic/reception-calligraphy.webp"
          alt={t.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/10" />
      <div className="relative container-kunde py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="font-serif text-primary text-lg md:text-xl mb-4 italic">
            {t.heroBanner}
          </p>
          <h1 className="font-serif text-3xl md:text-display leading-tight mb-6 text-white">
            {t.h1}
          </h1>
          <p className="text-body-lg text-white/90 mb-8">{t.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Button href={`/${locale}/contact#booking`} size="lg">
              {t.cta}
            </Button>
            <Button
              href={`/${locale}/conditions`}
              variant="secondary"
              size="lg"
              className="bg-white/10 text-white border-white hover:bg-white hover:text-header"
            >
              {t.ctaSecondary}
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/70">
            {isZh
              ? '📞 (718) 888-9087 · 143-07 Sanford Ave., Flushing NY 11355'
              : '📞 (718) 888-9087 · 143-07 Sanford Ave., Flushing NY 11355'}
          </p>
        </div>
      </div>
    </section>
  );
}
