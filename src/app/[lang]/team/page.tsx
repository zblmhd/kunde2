import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, CalendarClock, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/ui/CTABanner';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { locales, type Locale, dict } from '@/lib/i18n';
import { breadcrumbSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import {
  licensedPractitioners,
  specialtyTherapists,
} from '@/data/doctors';

interface Props {
  params: { lang: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) return {};
  if (lang === 'zh') {
    return pageMetadata({
      lang,
      path: '/team',
      title:
        '医疗团队 · 8 位纽约州执照针灸师 + 4 位专业治疗师 | 坤德中医养生轩',
      description:
        '坤德中医医疗团队 — 8 位纽约州执照针灸师（含馮羅小潔院长 DAOM、馮苏安教授）+ 4 位专业治疗师。法拉盛 · 曼哈顿 5 家分店，线上预约。',
      keywords: [
        '纽约中医师',
        '纽约针灸师',
        '法拉盛中医诊所 医师团队',
        '馮羅小潔',
        '馮苏安教授',
        '坤德中医团队',
      ],
      ogImage: '/images/doctors/serene-feng.svg',
    });
  }
  return pageMetadata({
    lang,
    path: '/team',
    title:
      'Meet Our Team · 8 Licensed Practitioners + 4 Specialty Therapists | Kunde TCM',
    description:
      "Meet the Kunde TCM team — 8 New York State-licensed acupuncturists (including founder Dr. Serene Feng, DAOM, and senior herbalist Prof. Suo An Feng) and 4 specialty therapists serving our 5 NYC locations.",
    keywords: [
      'NYC Acupuncturists',
      'New York State Licensed Acupuncturist',
      'Kunde TCM Team',
      'Dr. Serene Feng',
      'Prof. Suo An Feng',
      'TCM Practitioners Flushing',
    ],
    ogImage: '/images/doctors/serene-feng.svg',
  });
}

export default function TeamListPage({ params }: Props) {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) notFound();
  const t = dict[lang].team;
  const isZh = lang === 'zh';

  const breadcrumbs = [
    { label: t.breadcrumbHome, href: `/${lang}` },
    { label: t.breadcrumbTeam, href: `/${lang}/team` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-team.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/10" />
        <div className="relative container-kunde pb-12 pt-28 w-full">
          <Breadcrumbs items={breadcrumbs} className="mb-5" />
          <div className="h-px w-12 bg-[color:var(--color-primary)] mb-4" />
          <h1
            className="font-serif text-[1.6rem] sm:text-3xl md:text-display font-bold leading-tight mb-3 text-white max-w-4xl"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}
          >
            {t.listH1}
          </h1>
          <p className="text-body-lg text-white/90 max-w-3xl">
            {t.listHeroSub}
          </p>
        </div>
      </section>

      {/* Intro quote */}
      <section className="container-kunde py-12 lg:py-16 max-w-4xl text-center">
        <blockquote className="font-serif text-h3 text-[color:var(--color-text)]/85 leading-relaxed italic">
          {`“${t.intro}”`}
        </blockquote>
      </section>

      {/* Licensed Practitioners — large cards */}
      <section className="container-kunde pb-8">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="font-serif text-h2 mb-3">{t.practitionersTitle}</h2>
          <p className="text-[color:var(--color-text-muted)]">
            {t.practitionersSub}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {licensedPractitioners.map((d) => (
            <article
              key={d.slug}
              className="bg-white border border-border rounded-lg overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow"
            >
              <Link href={`/${lang}/team/${d.slug}`} className="block">
                <div className="relative bg-cream aspect-[4/5]">
                  <Image
                    src={d.imagePath}
                    alt={
                      isZh
                        ? `${d.nameZh} ${d.nameEn} — 坤德中医纽约州执照针灸师`
                        : `${d.nameEn} — New York State Licensed Acupuncturist at Kunde TCM`
                    }
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-5 flex-1 flex flex-col">
                <Link href={`/${lang}/team/${d.slug}`}>
                  <h3 className="font-serif text-lg mb-1 hover:text-primary-dark transition-colors">
                    {isZh ? `${d.nameZh} ${d.nameEn}` : d.nameEn}
                  </h3>
                </Link>
                <p className="text-xs text-primary-dark font-semibold mb-3">
                  {isZh ? d.credentialsZh : d.credentialsEn}
                </p>
                <ul className="text-sm text-[color:var(--color-text-muted)] space-y-1 mb-4 flex-1">
                  {(isZh ? d.specialtiesZh : d.specialtiesEn)
                    .slice(0, 3)
                    .map((sp) => (
                      <li key={sp}>· {sp}</li>
                    ))}
                </ul>
                <div className="flex flex-col gap-2">
                  <Button
                    href={d.bookingUrl}
                    size="sm"
                    className="w-full"
                    variant={d.phoneOnly ? 'secondary' : 'primary'}
                  >
                    {d.phoneOnly ? (
                      <>
                        <Phone className="w-4 h-4" />
                        {t.callToBook}
                      </>
                    ) : (
                      <>
                        <CalendarClock className="w-4 h-4" />
                        {t.bookOnline}
                      </>
                    )}
                  </Button>
                  <Link
                    href={`/${lang}/team/${d.slug}`}
                    className="text-xs text-center text-primary-dark font-semibold inline-flex items-center justify-center gap-1 hover:underline"
                  >
                    {t.viewProfile}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Specialty Therapists — smaller cards */}
      <section className="container-kunde py-16">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="font-serif text-h2 mb-3">{t.therapistsTitle}</h2>
          <p className="text-[color:var(--color-text-muted)]">
            {t.therapistsSub}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specialtyTherapists.map((d) => (
            <article
              key={d.slug}
              className="bg-cream border border-border rounded-lg p-5 flex flex-col text-center"
            >
              <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-white">
                <Image
                  src={d.imagePath}
                  alt={isZh ? d.nameZh : d.nameEn}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-base mb-1">
                {isZh ? `${d.nameZh} ${d.nameEn}` : d.nameEn}
              </h3>
              <p className="text-xs text-primary-dark font-semibold mb-3">
                {isZh ? d.credentialsZh : d.credentialsEn}
              </p>
              <ul className="text-xs text-[color:var(--color-text-muted)] space-y-1 mb-4 flex-1">
                {(isZh ? d.specialtiesZh : d.specialtiesEn).map((sp) => (
                  <li key={sp}>· {sp}</li>
                ))}
              </ul>
              <Link
                href={`/${lang}/team/${d.slug}`}
                className="text-xs text-primary-dark font-semibold inline-flex items-center justify-center gap-1 hover:underline"
              >
                {t.viewProfile}
                <ArrowRight className="w-3 h-3" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Join team CTA */}
      <section className="bg-cream border-y border-border">
        <div className="container-kunde py-16 text-center max-w-3xl">
          <h2 className="font-serif text-h2 mb-4">{t.joinTitle}</h2>
          <p className="text-[color:var(--color-text-muted)] leading-relaxed mb-8">
            {t.joinBody}
          </p>
          <Button href="mailto:ny4sacu@gmail.com" size="lg">
            <Mail className="w-4 h-4" />
            {t.joinCta}
          </Button>
        </div>
      </section>

      <CTABanner
        title={t.detailCtaTitle}
        subtitle={t.detailCtaSub}
        primaryLabel={isZh ? '立即预约' : 'Book Now'}
        primaryHref={`/${lang}/contact#booking`}
        secondaryLabel={isZh ? '查看各分店地址' : 'View All Locations'}
        secondaryHref={`/${lang}/contact#locations`}
      />
    </>
  );
}
