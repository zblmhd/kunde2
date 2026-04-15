import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Baby,
  ShieldAlert,
  HeartPulse,
  Brain,
  Scale,
  Bone,
  Sparkles,
  Wind,
  Gauge,
  Smile,
  Moon,
  Droplets,
  User,
  Soup,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/ui/CTABanner';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { locales, type Locale, dict } from '@/lib/i18n';
import {
  breadcrumbSchema,
  faqPageSchema,
  medicalConditionSchema,
} from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { conditions, getCondition } from '@/data/conditions';
import { methods } from '@/data/methods';
import { doctors } from '@/data/doctors';

const iconMap: Record<string, LucideIcon> = {
  Baby,
  ShieldAlert,
  HeartPulse,
  Brain,
  Scale,
  Bone,
  Sparkles,
  Wind,
  Gauge,
  Smile,
  Moon,
  Droplets,
  User,
  Soup,
  Stethoscope,
};

interface Props {
  params: { lang: string; slug: string };
}

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const c of conditions) {
      params.push({ lang, slug: c.slug });
    }
  }
  return params;
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) return {};
  const cond = getCondition(params.slug);
  if (!cond) return {};
  const isZh = lang === 'zh';
  const name = isZh ? cond.nameZh : cond.nameEn;
  return pageMetadata({
    lang,
    path: `/conditions/${cond.slug}`,
    title: isZh
      ? `${name} | 坤德中医养生轩 · 纽约中医诊所`
      : `${name} | Kunde TCM · Acupuncture Clinic NYC`,
    description: isZh ? cond.openingZh : cond.openingEn,
    keywords: isZh
      ? [name, '纽约中医', '针灸治疗', '法拉盛中医', '坤德中医']
      : [name, 'Acupuncture NYC', 'TCM NYC', 'Kunde TCM', 'Chinese Medicine'],
    ogImage: cond.image,
    ogType: 'article',
  });
}

export default function ConditionDetailPage({ params }: Props) {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) notFound();
  const cond = getCondition(params.slug);
  if (!cond) notFound();

  const t = dict[lang].conditions;
  const isZh = lang === 'zh';
  const name = isZh ? cond.nameZh : cond.nameEn;
  const tagline = isZh ? cond.taglineZh : cond.taglineEn;
  const opening = isZh ? cond.openingZh : cond.openingEn;
  const tcmView = isZh ? cond.tcmViewZh : cond.tcmViewEn;
  const symptoms = isZh ? cond.symptomsZh : cond.symptomsEn;
  const treatment = isZh ? cond.treatmentZh : cond.treatmentEn;
  const faqs = isZh ? cond.faqZh : cond.faqEn;
  const highlight = isZh ? cond.highlightZh : cond.highlightEn;
  const caseStudy = isZh ? cond.caseZh : cond.caseEn;

  const breadcrumbs = [
    { label: t.breadcrumbHome, href: `/${lang}` },
    { label: t.breadcrumbConditions, href: `/${lang}/conditions` },
    { label: name, href: `/${lang}/conditions/${cond.slug}` },
  ];

  const relatedMethodObjs = methods.filter((m) =>
    cond.relatedMethodSlugs.includes(m.slug),
  );
  const relatedDoctorObjs = doctors.filter((d) =>
    cond.relatedDoctors.includes(d.slug),
  );

  const conditionSchema = medicalConditionSchema({
    locale: lang,
    slug: cond.slug,
    name,
    alternateName: [cond.nameZh, cond.nameEn],
    description: opening,
    keywords: isZh
      ? `${name}, 纽约中医, 法拉盛中医, 针灸治疗, 坤德中医`
      : `${name}, Acupuncture NYC, Kunde TCM, Chinese Medicine NYC`,
    possibleTreatment: relatedMethodObjs.map((m) =>
      isZh ? m.nameZh : m.nameEn,
    ),
  });

  const Icon = iconMap[cond.icon] ?? Stethoscope;

  return (
    <>
      <JsonLd data={conditionSchema} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqPageSchema(faqs)} />

      {/* Hero */}
      <section className="relative bg-header text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={cond.image}
            alt={`${name} — ${isZh ? '坤德中医养生轩 · 纽约中医诊所' : 'Kunde TCM · Acupuncture Clinic NYC'}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative container-kunde py-16 lg:py-20">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-primary/25 flex items-center justify-center">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <p className="text-primary-light text-sm tracking-widest uppercase">
              {t.breadcrumbConditions}
            </p>
          </div>
          <h1 className="font-serif text-3xl md:text-display leading-tight mb-6 max-w-4xl">
            {name}
          </h1>
          <p className="text-body-lg text-white/90 max-w-3xl mb-8 italic">
            {tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href={`/${lang}/contact#booking`} size="lg">
              {t.bookNow}
            </Button>
            <Button
              href={`/${lang}/conditions`}
              variant="secondary"
              size="lg"
              className="!bg-transparent !text-white !border-white hover:!bg-white/10"
            >
              {t.viewAll}
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="container-kunde py-16 lg:py-20 max-w-4xl">
        <h2 className="font-serif text-h2 mb-6">{t.overviewTitle}</h2>
        {isZh && cond.quoteZh && (
          <blockquote className="border-l-4 border-primary pl-5 italic text-[color:var(--color-text-muted)] mb-6">
            {cond.quoteZh}
          </blockquote>
        )}
        <p className="text-body-lg text-[color:var(--color-text)]/90 leading-relaxed">
          {opening}
        </p>
      </section>

      {/* TCM View + Symptoms side-by-side */}
      <section className="bg-cream border-y border-border">
        <div className="container-kunde py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 max-w-5xl mx-auto">
            <div>
              <h2 className="font-serif text-h2 mb-6">{t.tcmViewTitle}</h2>
              <ul className="space-y-3">
                {tcmView.map((v, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-dark flex-shrink-0 mt-1" />
                    <span className="text-[color:var(--color-text)]/85">
                      {v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-h2 mb-6">{t.symptomsTitle}</h2>
              <ul className="space-y-3">
                {symptoms.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-dark flex-shrink-0 mt-1" />
                    <span className="text-[color:var(--color-text)]/85">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment */}
      <section className="container-kunde py-16 lg:py-20 max-w-4xl">
        <h2 className="font-serif text-h2 mb-6">{t.treatmentTitle}</h2>
        <p className="text-body-lg text-[color:var(--color-text)]/90 leading-relaxed mb-8">
          {treatment}
        </p>

        {highlight && (
          <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-5 mb-8">
            <p className="text-sm uppercase tracking-widest text-primary-dark font-semibold mb-2">
              {t.highlightLabel}
            </p>
            <p className="text-[color:var(--color-text)]/90 leading-relaxed">
              {highlight}
            </p>
          </div>
        )}

        {caseStudy && (
          <div className="bg-white border border-border rounded-lg p-6 shadow-sm mb-8">
            <h3 className="font-serif text-lg mb-3">{t.caseTitle}</h3>
            <p className="text-sm text-[color:var(--color-text)]/85 leading-relaxed italic">
              {caseStudy}
            </p>
          </div>
        )}
      </section>

      {/* Methods Used — cross-link to methods */}
      {relatedMethodObjs.length > 0 && (
        <section className="bg-cream border-y border-border">
          <div className="container-kunde py-16 lg:py-20 max-w-5xl">
            <h2 className="font-serif text-h2 mb-8 text-center">
              {t.methodsUsedTitle}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedMethodObjs.map((m) => (
                <Link
                  key={m.slug}
                  href={`/${lang}/methods/${m.slug}`}
                  className="group flex items-center justify-between gap-3 bg-white border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div>
                    <h3 className="font-serif text-lg mb-1">
                      {isZh ? m.nameZh : m.nameEn}
                    </h3>
                    <p className="text-sm text-[color:var(--color-text-muted)]">
                      {isZh ? m.taglineZh : m.taglineEn}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary-dark group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Doctors */}
      {relatedDoctorObjs.length > 0 && (
        <section className="container-kunde py-16 lg:py-20">
          <h2 className="font-serif text-h2 mb-8 text-center">
            {t.doctorsTitle}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {relatedDoctorObjs.map((d) => (
              <div
                key={d.slug}
                className="bg-white border border-border rounded-lg p-5 shadow-sm text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-primary/10">
                  <Image
                    src={d.image}
                    alt={isZh ? d.nameZh : d.nameEn}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-lg mb-1">
                  {isZh ? d.nameZh : d.nameEn}
                </h3>
                <p className="text-xs text-[color:var(--color-text-muted)] mb-3">
                  {isZh ? d.credentialsZh : d.credentialsEn}
                </p>
                <Button
                  href={d.bookingUrl}
                  size="sm"
                  variant={d.phoneOnly ? 'secondary' : 'primary'}
                >
                  {d.phoneOnly
                    ? isZh
                      ? '致电预约'
                      : 'Call to Book'
                    : t.bookWithDoctor}
                </Button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-cream border-y border-border">
        <div className="container-kunde py-16 lg:py-20 max-w-4xl">
          <h2 className="font-serif text-h2 mb-8 text-center">{t.faqTitle}</h2>
          <dl className="space-y-5">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-lg p-6 shadow-sm"
              >
                <dt className="font-serif text-lg mb-2">{f.q}</dt>
                <dd className="text-[color:var(--color-text)]/85 leading-relaxed">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Cross-link to methods */}
      <section className="container-kunde py-12 text-center">
        <p className="font-serif text-h3 mb-4">{t.crossLinkBanner}</p>
        <Button href={`/${lang}/methods`} variant="secondary" size="lg">
          {t.crossLinkBannerCta}
        </Button>
      </section>

      <CTABanner
        title={t.detailCtaTitle}
        subtitle={t.detailCtaSub}
        primaryLabel={t.bookNow}
        primaryHref={`/${lang}/contact#booking`}
        secondaryLabel={isZh ? '查看各分店地址' : 'View All Locations'}
        secondaryHref={`/${lang}/contact#locations`}
      />
    </>
  );
}
