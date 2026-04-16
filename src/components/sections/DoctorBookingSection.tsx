import Image from 'next/image';
import { Phone, CalendarClock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
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
    <section id="booking" className="container-kunde py-16 lg:py-20">
      <div className="text-center mb-4">
        <h2 className="font-serif text-h2 mb-3">{t.bookingTitle}</h2>
        <p className="text-[color:var(--color-text-muted)] max-w-2xl mx-auto">
          {t.bookingSub}
        </p>
        <p className="mt-3 text-sm text-primary-dark font-semibold">
          {t.bookingLocationsHint}
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.map((d) => (
          <article
            key={d.slug}
            className="bg-white border border-border rounded-lg overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow"
          >
            <div className="relative bg-cream aspect-[4/5]">
              <Image
                src={d.image}
                alt={
                  isZh
                    ? `${d.nameZh} ${d.nameEn} — 坤德中医纽约州执照针灸师`
                    : `${d.nameEn} — New York State Licensed Acupuncturist at Kunde TCM`
                }
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-serif text-lg mb-1">
                {isZh ? `${d.nameZh} ${d.nameEn}` : d.nameEn}
              </h3>
              <p className="text-xs text-primary-dark font-semibold mb-3">
                {isZh ? d.credentialsZh : d.credentialsEn}
              </p>
              <ul className="text-sm text-[color:var(--color-text-muted)] space-y-1 mb-4 flex-1">
                {(isZh ? d.specialtiesZh : d.specialtiesEn).map((sp) => (
                  <li key={sp}>· {sp}</li>
                ))}
              </ul>
              <Button
                href={d.bookingUrl}
                size="sm"
                className="w-full"
                variant={d.phoneOnly ? 'secondary' : 'primary'}
              >
                {d.phoneOnly ? (
                  <>
                    <Phone className="w-4 h-4" />
                    {t.callBtn}
                  </>
                ) : (
                  <>
                    <CalendarClock className="w-4 h-4" />
                    {t.bookBtn}
                  </>
                )}
              </Button>
            </div>
          </article>
        ))}
      </div>

      <p className="text-center mt-10 text-sm text-[color:var(--color-text-muted)]">
        {t.bookingCallFallback}
      </p>
    </section>
  );
}
