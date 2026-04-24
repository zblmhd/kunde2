import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';
import { conditionsPreview } from '@/data/conditions-preview';

interface Props {
  locale: Locale;
}

export function ConditionsGrid({ locale }: Props) {
  const t = dict[locale].home;
  const isZh = locale === 'zh';

  return (
    <section className="kd-conditions kd-section" aria-label={t.conditionsTitle}>
      <div className="kd-container">
        <div className="kd-section__head">
          <span className="kd-eyebrow">{isZh ? '主治病症' : 'Conditions'}</span>
          <h2>{t.conditionsTitle}</h2>
          <p>{t.conditionsSub}</p>
          <Link href={`/${locale}/conditions`} className="kd-link-gold">
            {t.conditionsCta} →
          </Link>
        </div>

        <div className="kd-conditions__list">
          {conditionsPreview.map((c) => (
            <Link
              key={c.slug}
              href={`/${locale}/conditions/${c.slug}`}
              className="kd-condition"
            >
              <div className="kd-condition__name">{isZh ? c.nameZh : c.nameEn}</div>
              <div className="kd-condition__desc">{isZh ? c.blurbZh : c.blurbEn}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
