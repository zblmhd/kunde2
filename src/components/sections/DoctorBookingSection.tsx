import Image from 'next/image';
import Link from 'next/link';
import { Phone, CalendarClock } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';
import { licensedPractitioners as doctors } from '@/data/doctors';

interface Props {
  locale: Locale;
}

export function DoctorBookingSection({ locale }: Props) {
  const t = dict[locale].home;
  const isZh = locale === 'zh';

  return (
    <section id="booking" className="kd-team kd-section" aria-label={isZh ? '醫療團隊' : 'Team'}>
      <div className="kd-container">
        <div className="kd-section__head">
          <span className="kd-eyebrow">{isZh ? '醫療團隊' : 'Our Team'}</span>
          <h2>{t.bookingTitle}</h2>
          <p>{t.bookingSub}</p>
          <p
            style={{
              marginTop: 6,
              color: 'var(--gold-900)',
              fontWeight: 600,
              fontSize: 13.5,
              letterSpacing: '0.05em',
            }}
          >
            {t.bookingLocationsHint}
          </p>
        </div>

        <div className="kd-team__grid">
          {doctors.map((d) => (
            <article key={d.slug} className="kd-doc-card">
              <div className="kd-doc-card__media">
                <Image
                  src={d.image}
                  alt={
                    isZh
                      ? `${d.nameZh} ${d.nameEn} — 坤德中醫紐約州執照針灸師`
                      : `${d.nameEn} — Licensed Acupuncturist at Kunde TCM`
                  }
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
                />
              </div>
              <div className="kd-doc-card__body">
                <div className="kd-doc-card__name">
                  {isZh ? `${d.nameZh}` : d.nameEn}
                  {isZh && d.nameEn ? (
                    <span
                      style={{
                        marginLeft: 6,
                        fontSize: 12,
                        color: 'var(--ink-600)',
                        fontWeight: 400,
                      }}
                    >
                      {d.nameEn}
                    </span>
                  ) : null}
                </div>
                <div className="kd-doc-card__cred">
                  {isZh ? d.credentialsZh : d.credentialsEn}
                </div>
                <ul
                  className="kd-doc-card__spec"
                  style={{ listStyle: 'none', padding: 0, margin: 0 }}
                >
                  {(isZh ? d.specialtiesZh : d.specialtiesEn).slice(0, 3).map((sp) => (
                    <li key={sp} style={{ position: 'relative', paddingLeft: 14 }}>
                      <span
                        aria-hidden
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 10,
                          width: 6,
                          height: 1,
                          background: 'var(--gold-700)',
                        }}
                      />
                      {sp}
                    </li>
                  ))}
                </ul>
                <Link
                  href={d.bookingUrl}
                  className={
                    d.phoneOnly ? 'kd-doc-card__cta kd-doc-card__cta--outline' : 'kd-doc-card__cta'
                  }
                >
                  {d.phoneOnly ? (
                    <>
                      <Phone className="h-4 w-4" />
                      {t.callBtn}
                    </>
                  ) : (
                    <>
                      <CalendarClock className="h-4 w-4" />
                      {t.bookBtn}
                    </>
                  )}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p
          style={{
            textAlign: 'center',
            marginTop: 28,
            fontSize: 13,
            color: 'var(--ink-600)',
          }}
        >
          {t.bookingCallFallback}
        </p>
      </div>
    </section>
  );
}
