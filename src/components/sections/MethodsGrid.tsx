import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';
import { methodsPreview } from '@/data/methods-preview';

interface Props {
  locale: Locale;
}

export function MethodsGrid({ locale }: Props) {
  const t = dict[locale].home;
  const isZh = locale === 'zh';

  return (
    <section className="kd-services kd-section" aria-label={isZh ? '傳統中醫特色療法' : 'Treatments'}>
      <div className="kd-container">
        <div className="kd-section__head kd-section__head--dark">
          <span className="kd-eyebrow" style={{ color: 'var(--gold-500)' }}>
            {isZh ? '治療方法' : 'Treatments'}
          </span>
          <h2>{isZh ? '傳統中醫特色療法' : 'Classical Therapies'}</h2>
          <p>{t.methodsSub}</p>
          <Link
            href={`/${locale}/methods`}
            className="kd-link-gold"
            style={{ color: 'var(--gold-400)', borderColor: 'var(--gold-600)' }}
          >
            {t.methodsCta} →
          </Link>
        </div>

        <div className="kd-services__grid">
          {methodsPreview.map((m) => (
            <Link
              key={m.slug}
              href={`/${locale}/methods/${m.slug}`}
              className="kd-service-card"
              aria-label={isZh ? m.nameZh : m.nameEn}
            >
              <Image
                src={`/images/methods/${m.slug}.jpg`}
                alt=""
                fill
                sizes="(max-width: 900px) 50vw, 22vw"
                className="kd-service-card__img"
              />
              <div className="kd-service-card__veil" />
              <div className="kd-service-card__body">
                <h3 className="kd-service-card__title">{isZh ? m.nameZh : m.nameEn}</h3>
                <p className="kd-service-card__desc">{isZh ? m.taglineZh : m.taglineEn}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
