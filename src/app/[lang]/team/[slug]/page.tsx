import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Phone,
  CalendarClock,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Languages,
  MapPin,
  Sparkles,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/ui/CTABanner';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { locales, type Locale, dict } from '@/lib/i18n';
import { breadcrumbSchema, physicianSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import {
  doctors,
  getDoctor,
  licensedPractitioners,
  clinicEnMap,
} from '@/data/doctors';
import { methods } from '@/data/methods';

interface Props {
  params: { lang: string; slug: string };
}

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const d of doctors) {
      params.push({ lang, slug: d.slug });
    }
  }
  return params;
}

// Physician SEO overrides — Prof. Suo An Feng is the flagship for
// "冯苏安中医 / 纽约中医教授" per brief.
const doctorSeoOverrides: Record<
  string,
  Partial<Record<Locale, { title: string; description: string; keywords: string[]; h1?: string }>>
> = {
  'suoan-feng': {
    zh: {
      title:
        '冯苏安中医 · 纽约中医教授 · 消渴丸发明人 | 坤德中医养生轩',
      description:
        '馮所安教授（冯苏安）— 纽约中医教授，消渴丸与胃乃安发明人之一，原广州白云山中医药公司院长。坤德中医法拉盛主店每周五出诊，专长三高、糖尿病、消化与不孕不育。',
      keywords: [
        '冯苏安中医',
        '纽约中医教授',
        '馮所安',
        '消渴丸',
        '糖尿病 中医',
        '法拉盛中药',
      ],
      h1: '冯苏安中医 · 纽约中医教授 — 消渴丸发明人之一',
    },
    en: {
      title:
        'Prof. Suo An Feng · Senior Herbalist · Co-Inventor of Xiaoke Diabetes Formula | Kunde TCM',
      description:
        'Prof. Suo An Feng is a senior Chinese herbalist at Kunde TCM and co-inventor of the nationally patented Xiaoke (diabetes) and Wei Nai An (digestive) formulas. See him every Friday at our Flushing flagship.',
      keywords: [
        'Prof. Suo An Feng',
        'Senior Chinese Herbalist NYC',
        'Xiaoke Diabetes Formula',
        'Chinese Herbal Medicine Flushing',
        'TCM Professor NYC',
        'Kunde TCM Herbalist',
      ],
      h1: 'Prof. Suo An Feng — Senior Herbalist & Co-Inventor of the Xiaoke Diabetes Formula',
    },
  },
  'serene-feng': {
    zh: {
      title:
        '馮羅小潔 Dr. Serene Feng · DAOM · 坤德中医诊所创办人兼院长',
      description:
        '馮羅小潔博士 — 针灸与东方医学博士（DAOM），坤德中医养生轩创办人兼院长，执业 20 余年，国际期刊 MERIDIANS 原创研究作者，专长不孕不育、妇科、疼痛管理。',
      keywords: [
        '馮羅小潔',
        'Dr. Serene Feng',
        '纽约针灸 博士',
        'DAOM 针灸师',
        '坤德中医 创办人',
        '纽约不孕不育 中医',
      ],
      h1: '馮羅小潔博士 — 坤德中医创办人兼院长 · 针灸与东方医学博士',
    },
    en: {
      title:
        'Dr. Serene Feng, DAOM · Founder & Clinical Director | Kunde TCM NYC',
      description:
        "Dr. Serene Feng is the founder and clinical director of Kunde TCM. With over 20 years of experience, a DAOM degree, and published MERIDIANS research, she specializes in fertility, women's health, and pain management.",
      keywords: [
        'Dr. Serene Feng',
        'DAOM NYC',
        'Licensed Acupuncturist NYC',
        'Fertility Acupuncture NYC',
        'Women\'s Health Acupuncture',
        'Kunde TCM Founder',
      ],
      h1: 'Dr. Serene Feng, DAOM — Founder & Clinical Director of Kunde TCM',
    },
  },
};

export function generateMetadata({ params }: Props): Metadata {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) return {};
  const d = getDoctor(params.slug);
  if (!d) return {};

  const override = doctorSeoOverrides[d.slug]?.[lang];
  const isZh = lang === 'zh';
  const fallbackTitle = isZh
    ? `${d.nameZh} ${d.nameEn} · ${d.credentialsZh} | 坤德中医养生轩`
    : `${d.nameEn} · ${d.credentialsEn} | Kunde TCM`;
  const fallbackDesc = isZh ? d.bioZh[0] : d.bioEn[0];

  return pageMetadata({
    lang,
    path: `/team/${d.slug}`,
    title: override?.title ?? fallbackTitle,
    description: override?.description ?? fallbackDesc,
    keywords:
      override?.keywords ??
      (isZh
        ? [d.nameZh, d.nameEn, '纽约针灸师', '坤德中医', '法拉盛中医师']
        : [d.nameEn, d.nameZh, 'Licensed Acupuncturist NYC', 'Kunde TCM']),
    ogImage: d.imagePath,
    ogType: 'article',
  });
}

export default function DoctorDetailPage({ params }: Props) {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) notFound();
  const d = getDoctor(params.slug);
  if (!d) notFound();

  const t = dict[lang].team;
  const isZh = lang === 'zh';
  const name = isZh ? d.nameZh : d.nameEn;
  const fullName = isZh ? `${d.nameZh} ${d.nameEn}` : d.nameEn;
  const credentials = isZh ? d.credentialsZh : d.credentialsEn;
  const title = isZh ? d.titleZh : d.titleEn;
  const specialties = isZh ? d.specialtiesZh : d.specialtiesEn;
  const education = isZh ? d.educationZh : d.educationEn;
  const experience = isZh ? d.experienceZh : d.experienceEn;
  const languages = isZh ? d.languagesZh : d.languagesEn;
  const bio = isZh ? d.bioZh : d.bioEn;

  const override = doctorSeoOverrides[d.slug]?.[lang];
  const h1 = override?.h1 ?? `${fullName} · ${credentials}`;

  const breadcrumbs = [
    { label: t.breadcrumbHome, href: `/${lang}` },
    { label: t.breadcrumbTeam, href: `/${lang}/team` },
    { label: name, href: `/${lang}/team/${d.slug}` },
  ];

  const physician = physicianSchema({
    locale: lang,
    slug: d.slug,
    name: fullName,
    alternateName: [d.nameEn, d.nameZh],
    description: bio[0],
    image: d.imagePath,
    credentials: isZh ? d.credentialsZh : d.credentialsEn,
    languages: languages,
    keywords: (override?.keywords ?? []).join(', '),
  });

  const relatedMethodObjs = methods.filter((m) =>
    d.relatedMethodSlugs.includes(m.slug),
  );
  const otherDoctors = licensedPractitioners
    .filter((x) => x.slug !== d.slug)
    .slice(0, 4);

  const clinics = isZh
    ? d.clinics
    : d.clinics.map((c) => clinicEnMap[c.label] ?? c);

  return (
    <>
      <JsonLd data={physician} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      {/* Hero */}
      <section className="relative bg-header text-white overflow-hidden">
        <div className="container-kunde py-16 lg:py-20">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />
          <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-12 items-start">
            <div className="relative w-[220px] h-[275px] lg:w-[260px] lg:h-[325px] rounded-lg overflow-hidden bg-cream mx-auto lg:mx-0 border-4 border-primary/40 shadow-lg">
              <Image
                src={d.imagePath}
                alt={
                  isZh
                    ? `${fullName} — 坤德中医养生轩 · 纽约州执照针灸师`
                    : `${fullName} — Kunde TCM · New York State Licensed Acupuncturist`
                }
                fill
                priority
                sizes="(max-width:1024px) 260px, 260px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-primary-light text-sm tracking-widest uppercase mb-3">
                {t.breadcrumbTeam}
              </p>
              <h1 className="font-serif text-3xl md:text-display leading-tight mb-4">
                {h1}
              </h1>
              <p className="text-body-lg text-white/90 mb-6">{title}</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  href={d.bookingUrl}
                  size="lg"
                  variant={d.phoneOnly ? 'secondary' : 'primary'}
                >
                  {d.phoneOnly ? (
                    <>
                      <Phone className="w-5 h-5" />
                      {t.callToBook}
                    </>
                  ) : (
                    <>
                      <CalendarClock className="w-5 h-5" />
                      {t.bookOnline}
                    </>
                  )}
                </Button>
                <Button
                  href={`/${lang}/team`}
                  variant="secondary"
                  size="lg"
                  className="!bg-transparent !text-white !border-white hover:!bg-white/10"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t.detailBackToTeam}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="container-kunde py-16 lg:py-20 max-w-4xl">
        <h2 className="font-serif text-h2 mb-6">{t.bioTitle}</h2>
        <div className="space-y-5 text-body-lg text-[color:var(--color-text)]/90 leading-relaxed">
          {bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-cream border-y border-border">
        <div className="container-kunde py-16 max-w-5xl">
          <h2 className="font-serif text-h2 mb-8 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-primary-dark" />
            {t.specialtiesTitle}
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {specialties.map((sp) => (
              <li
                key={sp}
                className="flex items-start gap-3 bg-white border border-border rounded-lg p-4 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                <span>{sp}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Education + Experience */}
      <section className="container-kunde py-16 lg:py-20 max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-h2 mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary-dark" />
              {t.educationTitle}
            </h2>
            <ul className="space-y-3">
              {education.map((e, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[color:var(--color-text)]/85"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-dark flex-shrink-0" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-h2 mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary-dark" />
              {t.experienceTitle}
            </h2>
            <ul className="space-y-3">
              {experience.map((e, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[color:var(--color-text)]/85"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-dark flex-shrink-0" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Languages + Clinics */}
      <section className="bg-cream border-y border-border">
        <div className="container-kunde py-16 max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-h2 mb-6 flex items-center gap-3">
                <Languages className="w-6 h-6 text-primary-dark" />
                {t.languagesTitle}
              </h2>
              <div className="flex flex-wrap gap-3">
                {languages.map((l) => (
                  <span
                    key={l}
                    className="px-4 py-2 bg-white border border-border rounded-full text-sm"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-serif text-h2 mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary-dark" />
                {t.clinicsTitle}
              </h2>
              <ul className="space-y-3">
                {clinics.map((c) => (
                  <li
                    key={c.label}
                    className="flex items-start gap-3 bg-white border border-border rounded-lg p-4 shadow-sm"
                  >
                    <MapPin className="w-4 h-4 text-primary-dark flex-shrink-0 mt-1" />
                    <span>{c.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Methods */}
      {relatedMethodObjs.length > 0 && (
        <section className="container-kunde py-16 max-w-5xl">
          <h2 className="font-serif text-h2 mb-8">{t.methodsTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedMethodObjs.map((m) => (
              <Link
                key={m.slug}
                href={`/${lang}/methods/${m.slug}`}
                className="group flex items-center justify-between gap-3 bg-white border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <span>
                  <span className="font-serif text-lg block">
                    {isZh ? m.nameZh : m.nameEn}
                  </span>
                  <span className="text-sm text-[color:var(--color-text-muted)]">
                    {isZh ? m.taglineZh : m.taglineEn}
                  </span>
                </span>
                <ArrowRight className="w-4 h-4 text-primary-dark group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Other Doctors */}
      <section className="bg-cream border-y border-border">
        <div className="container-kunde py-16">
          <h2 className="font-serif text-h2 mb-10 text-center">
            {t.otherDoctorsTitle}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherDoctors.map((x) => (
              <Link
                key={x.slug}
                href={`/${lang}/team/${x.slug}`}
                className="group bg-white border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-cream">
                  <Image
                    src={x.imagePath}
                    alt={isZh ? x.nameZh : x.nameEn}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-base mb-1 group-hover:text-primary-dark transition-colors">
                  {isZh ? x.nameZh : x.nameEn}
                </h3>
                <p className="text-xs text-[color:var(--color-text-muted)]">
                  {isZh ? x.credentialsZh : x.credentialsEn}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={t.detailCtaTitle}
        subtitle={t.detailCtaSub}
        primaryLabel={isZh ? '在线预约' : 'Book Online'}
        primaryHref={d.phoneOnly ? `/${lang}/contact#booking` : d.bookingUrl}
        secondaryLabel={isZh ? '返回医疗团队' : 'Back to the Team'}
        secondaryHref={`/${lang}/team`}
      />
    </>
  );
}
