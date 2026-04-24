import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';

interface Props {
  locale: Locale;
}

export function WhyChooseKunde({ locale }: Props) {
  const t = dict[locale].home;
  const isZh = locale === 'zh';
  return (
    <section className="kd-why kd-section" aria-label={t.whyTitle}>
      <div className="kd-container">
        <div className="kd-section__head">
          <span className="kd-eyebrow">{isZh ? '為何選擇坤德' : 'Why Kunde'}</span>
          <h2>{t.whyTitle}</h2>
          <p>{t.whySub}</p>
        </div>

        <div className="kd-why__grid">
          {t.whyCards.map((card) => (
            <div key={card.title} className="kd-why__card">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              {'subCtaLabel' in card && card.subCtaLabel ? (
                <Link
                  href={card.subCtaHref}
                  className="kd-link-gold"
                  style={{ marginTop: 12, display: 'inline-block' }}
                >
                  {card.subCtaLabel} →
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
