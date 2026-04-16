import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Sparkles,
  Leaf,
  Flower2,
  ArrowRight,
  Gift,
  CalendarClock,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/ui/CTABanner';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { locales, type Locale, dict } from '@/lib/i18n';
import { breadcrumbSchema, beautyServiceSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { getDoctor } from '@/data/doctors';

interface Props {
  params: { lang: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) return {};
  if (lang === 'zh') {
    return pageMetadata({
      lang,
      path: '/beauty',
      title: '坤德中医美容美体 · 法拉盛中医美容诊所 | 坤德中医养生轩',
      description:
        '坤德中医美容美体 — 传统中医内调 + 7D HIFU · DPL · Medsculpt 等 12 项现代医美项目。面部针灸、养颜中药、韩式护肤，由执照美容师杨玲燕亲自操作。',
      keywords: [
        '纽约中医美容',
        '法拉盛中医美容',
        '美容针灸 纽约',
        '7D HIFU 法拉盛',
        '皮秒激光 纽约',
        'Medsculpt 纽约',
        '养颜中药',
      ],
      ogImage: '/images/conditions/herbal-beauty.svg',
    });
  }
  return pageMetadata({
    lang,
    path: '/beauty',
    title:
      'Kunde Beauty & Wellness · TCM Beauty Clinic in Flushing NYC | Kunde TCM',
    description:
      'Kunde Beauty & Wellness — TCM inner-beauty therapies plus 12 modern aesthetic services including 7D HIFU, DPL rejuvenation, Picosecond Laser and Medsculpt. Led by licensed aesthetician Yang Lingyan.',
    keywords: [
      'TCM Beauty NYC',
      'Facial Acupuncture NYC',
      '7D HIFU Flushing',
      'Picosecond Laser NYC',
      'Medsculpt NYC',
      'Korean Facial Flushing',
      'Chinese Medicine Beauty',
    ],
    ogImage: '/images/conditions/herbal-beauty.svg',
  });
}

export default function BeautyPage({ params }: Props) {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) notFound();
  const t = dict[lang].beauty;
  const isZh = lang === 'zh';

  const breadcrumbs = [
    { label: t.breadcrumbHome, href: `/${lang}` },
    { label: t.breadcrumbBeauty, href: `/${lang}/beauty` },
  ];

  const aesthetician = getDoctor('yang-lingyan');

  // Build Service JSON-LD for each modern aesthetic service
  const serviceSchemas = t.modernServices.map((row) =>
    beautyServiceSchema({
      locale: lang,
      name: row[0],
      description: row[1],
      category: isZh ? '中医美容服务' : 'TCM Beauty & Aesthetic Service',
    }),
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      {serviceSchemas.map((s, i) => (
        <JsonLd key={i} data={s} />
      ))}

      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/clinic/room-orchid.webp" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/10" />
        <div className="relative container-kunde py-16 lg:py-20">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />
          <h1 className="font-serif text-3xl md:text-display leading-tight mb-6 max-w-4xl">
            {t.h1}
          </h1>
          <p className="text-body-lg text-white/90 max-w-3xl mb-8">
            {t.heroSub}
          </p>
          <Button href={`/${lang}/contact#booking`} size="lg">
            {t.ctaBtn}
          </Button>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container-kunde py-12 lg:py-16 max-w-4xl text-center">
        <h2 className="font-serif text-h2 mb-5">{t.philosophyTitle}</h2>
        <p className="text-body-lg italic text-[color:var(--color-text-muted)] leading-relaxed">
          {t.philosophyBody}
        </p>
      </section>

      {/* Inner TCM beauty */}
      <section className="bg-cream border-y border-border">
        <div className="container-kunde py-16 lg:py-20">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <Leaf className="w-10 h-10 text-primary-dark mx-auto mb-4" />
            <h2 className="font-serif text-h2 mb-5">{t.innerTitle}</h2>
            <p className="text-[color:var(--color-text)]/85 leading-relaxed">
              {t.innerLead}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {t.innerServices.map((s) => (
              <article
                key={s.title}
                className="bg-white border border-border rounded-lg p-6 shadow-sm flex flex-col"
              >
                <Flower2 className="w-8 h-8 text-primary-dark mb-4" />
                <h3 className="font-serif text-xl mb-2">{s.title}</h3>
                <p className="text-xs text-primary-dark font-semibold uppercase tracking-wider mb-3">
                  {s.freq}
                </p>
                <p className="text-sm text-[color:var(--color-text)]/80 leading-relaxed flex-1">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
          <p className="text-center mt-10 text-sm text-[color:var(--color-text-muted)] italic max-w-3xl mx-auto">
            {t.innerUseCase}
          </p>
        </div>
      </section>

      {/* Modern aesthetics */}
      <section className="container-kunde py-16 lg:py-20">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <Sparkles className="w-10 h-10 text-primary-dark mx-auto mb-4" />
          <h2 className="font-serif text-h2 mb-5">{t.modernTitle}</h2>
          <p className="text-[color:var(--color-text)]/85 leading-relaxed mb-4">
            {t.modernLead}
          </p>
          <p className="text-sm font-semibold text-primary-dark">
            {t.modernPromise}
          </p>
        </div>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full min-w-[640px] border border-border bg-white text-sm">
            <thead className="bg-header text-white">
              <tr>
                {t.modernTableHeaders.map((h) => (
                  <th
                    key={h}
                    className="text-left font-serif font-semibold px-5 py-4"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.modernServices.map((row, i) => (
                <tr
                  key={row[0]}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-5 py-4 border-t border-border ${j === 0 ? 'font-semibold' : 'text-[color:var(--color-text)]/80'}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Aesthetician */}
      {aesthetician && (
        <section className="bg-cream border-y border-border">
          <div className="container-kunde py-16 max-w-4xl">
            <div className="grid gap-8 md:grid-cols-[auto_1fr] items-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden bg-white border-4 border-primary/40 mx-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={aesthetician.imagePath}
                  alt={
                    isZh
                      ? `${aesthetician.nameZh} ${aesthetician.nameEn} — 坤德中医执照美容师`
                      : `${aesthetician.nameEn} — Licensed Aesthetician at Kunde Beauty & Wellness`
                  }
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-h2 mb-4">{t.aestheticianTitle}</h2>
                <p className="text-[color:var(--color-text)]/85 leading-relaxed mb-5">
                  {t.aestheticianBody}
                </p>
                <Link
                  href={`/${lang}/team/${aesthetician.slug}`}
                  className="inline-flex items-center gap-1 text-primary-dark font-semibold hover:underline"
                >
                  {t.aestheticianCta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Referral Program */}
      <section className="container-kunde py-16 lg:py-20">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <Gift className="w-10 h-10 text-primary-dark mx-auto mb-4" />
          <h2 className="font-serif text-h2 mb-5">{t.referralTitle}</h2>
          <p className="text-[color:var(--color-text)]/85 leading-relaxed">
            {t.referralLead}
          </p>
        </div>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full min-w-[560px] border border-border bg-white text-sm">
            <thead className="bg-header text-white">
              <tr>
                {t.referralHeaders.map((h) => (
                  <th
                    key={h}
                    className="text-left font-serif font-semibold px-5 py-4"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.referralRows.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-5 py-4 border-t border-border ${j === 0 ? 'font-semibold' : 'text-[color:var(--color-text)]/80'}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-xs text-center text-[color:var(--color-text-muted)] italic">
            {t.referralNote}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        title={t.ctaTitle}
        subtitle={t.ctaSub}
        primaryLabel={t.ctaBtn}
        primaryHref={`/${lang}/contact#booking`}
        secondaryLabel={isZh ? '认识医疗团队' : 'Meet Our Team'}
        secondaryHref={`/${lang}/team`}
      />
    </>
  );
}
