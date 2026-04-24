import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';

interface Props {
  locale: Locale;
}

export function Hero({ locale }: Props) {
  const t = dict[locale].home;
  const isZh = locale === 'zh';

  // Split the H1 into two display lines at " · " while preserving original content.
  const titleParts = t.h1.split(/\s?·\s?/);

  const pillars = [
    {
      glyph: '醫',
      title: isZh ? '名醫坐診' : 'Doctors',
      sub: isZh ? '20+ 年臨床' : '20+ yrs',
    },
    {
      glyph: '辨',
      title: isZh ? '辨體調理' : 'Tailored',
      sub: isZh ? '個體化方案' : 'Personalized',
    },
    {
      glyph: '本',
      title: isZh ? '內外兼治' : 'Holistic',
      sub: isZh ? '標本同治' : 'Root & branch',
    },
  ];

  return (
    <section className="kd-hero" aria-label={t.heroAlt}>
      <div className="kd-hero__bg">
        <Image
          src="/images/hero/hero-song-mountain.png"
          alt={t.heroAlt}
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="kd-hero__wash" />

      {/* Right-edge vertical couplet */}
      <div className="kd-hero__couplet" aria-hidden>
        <span>{isZh ? '遵古法' : 'ANCIENT'}</span>
        <span className="kd-hero__couplet-dot">·</span>
        <span>{isZh ? '用今論' : 'MODERN'}</span>
      </div>

      <div className="kd-container">
        <div className="kd-hero__inner">
          <div className="kd-hero__text">
            <span className="kd-eyebrow">
              {isZh ? '紐約 · 法拉盛 · 20 餘年' : 'NY · Flushing · 20+ yrs'}
            </span>

            <div className="kd-hero__title-row">
              <h1 className="kd-h1 kd-hero__title">
                {titleParts.map((p, i) => (
                  <span key={i} className="line">{p}</span>
                ))}
              </h1>
            </div>

            <p className="kd-hero__sub">{t.heroBanner}</p>

            <ul className="kd-hero__pillars">
              {pillars.map((p) => (
                <li key={p.title} className="kd-pillar">
                  <span className="kd-pillar__icon" aria-hidden>{p.glyph}</span>
                  <span>
                    <span className="kd-pillar__title">{p.title}</span>
                    <span className="kd-pillar__sub">{p.sub}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="kd-hero__actions">
              <Link href={`/${locale}/contact#booking`} className="kd-btn kd-btn--primary">
                {t.cta}
                <span aria-hidden>→</span>
              </Link>
              <Link href={`/${locale}/conditions`} className="kd-btn kd-btn--ghost">
                {t.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Right column is intentionally empty — the bg image reveals the meditation scene */}
          <div />
        </div>
      </div>
    </section>
  );
}
