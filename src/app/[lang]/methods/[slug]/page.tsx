import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Activity,
  Leaf,
  Gem,
  Hand,
  Circle,
  Flame,
  Sun,
  Droplet,
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
  medicalTherapySchema,
} from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { methods, getMethod } from '@/data/methods';
import { conditions } from '@/data/conditions';
import { doctors } from '@/data/doctors';

const iconMap: Record<string, LucideIcon> = {
  Activity,
  Leaf,
  Gem,
  Hand,
  Circle,
  Flame,
  Sun,
  Droplet,
};

interface Props {
  params: { lang: string; slug: string };
}

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const m of methods) {
      params.push({ lang, slug: m.slug });
    }
  }
  return params;
}

// SEO overrides strictly per scheme 4.1.1 for the two flagship pages.
const seoOverrides: Record<
  string,
  Record<Locale, { title: string; description: string; keywords: string[]; h1: string; ogTitle: string; ogDesc: string }>
> = {
  acupuncture: {
    zh: {
      title: '纽约针灸 · 针灸诊所 | 坤德中医 — 法拉盛 · 曼哈顿',
      description:
        '坤德中医是纽约权威针灸诊所，8 位纽约州执照针灸师提供体针、耳针、电针，法拉盛·曼哈顿 5 家分店，涵盖疼痛管理、妇科、情志、面瘫等专科，接受主流保险。',
      keywords: [
        '纽约针灸',
        '针灸诊所',
        '纽约针灸诊所',
        '法拉盛针灸',
        '纽约针灸师',
        '中医针灸',
      ],
      h1: '纽约针灸 · 针灸诊所 — 坤德中医养生轩',
      ogTitle: '纽约针灸 · 针灸诊所 | 坤德中医',
      ogDesc:
        '坤德中医 — 纽约权威针灸诊所，8 位纽约州执照针灸师，体针 · 耳针 · 电针全科诊疗。',
    },
    en: {
      title:
        'Acupuncture NYC · Licensed Acupuncture Clinic | Kunde TCM Flushing',
      description:
        'Looking for acupuncture in NYC? Kunde TCM is a licensed acupuncture clinic NYC residents trust — 8 New York State-licensed acupuncturists, body, auricular & electro-acupuncture, 5 locations across Flushing and Manhattan.',
      keywords: [
        'Acupuncture NYC',
        'Acupuncture Clinic NYC',
        'Acupuncture Clinic',
        'Best Acupuncture NYC',
        'Acupuncture Flushing',
        'Licensed Acupuncturist NYC',
      ],
      h1: 'Acupuncture NYC · Licensed Acupuncture Clinic — Kunde TCM',
      ogTitle: 'Acupuncture NYC · Licensed Acupuncture Clinic | Kunde TCM',
      ogDesc:
        "NYC's trusted acupuncture clinic — 8 licensed acupuncturists, 5 locations, 20+ years of clinical experience.",
    },
  },
  'herbal-medicine': {
    zh: {
      title: '法拉盛中药调理 · 纽约中药诊所 | 坤德中医药膳食疗',
      description:
        '坤德中医 — 法拉盛中药调理专科诊所，院长与馮苏安教授亲自把关，水药、科学中药、代客煎煮真空包装，全美配送，辨证施治量身定制方剂。',
      keywords: [
        '法拉盛中药调理',
        '纽约中药',
        '纽约中药诊所',
        '中药调理',
        '法拉盛中药',
        '中药食疗',
      ],
      h1: '法拉盛中药调理 — 量身定制方剂 · 坤德中医养生轩',
      ogTitle: '法拉盛中药调理 · 纽约中药诊所 | 坤德中医',
      ogDesc:
        '坤德中医 — 法拉盛中药调理专科，真空包装、全美配送，院长与馮苏安教授亲自把关。',
    },
    en: {
      title:
        'Chinese Herbal Medicine Flushing · Herbal Medicine NYC | Kunde TCM',
      description:
        "Kunde TCM's Chinese Herbal Medicine practice in Flushing NYC — personalized formulas supervised by senior herbalist Prof. Suo An Feng, vacuum-sealed and shipped nationwide. Herbal medicine NYC patients trust.",
      keywords: [
        'Chinese Herbal Medicine Flushing',
        'Herbal Medicine NYC',
        'Chinese Herbal Medicine NYC',
        'TCM Herbalist NYC',
        'Custom Herbal Formulas',
      ],
      h1:
        'Chinese Herbal Medicine in Flushing — Custom Formulas, Shipped Nationwide',
      ogTitle: 'Chinese Herbal Medicine Flushing · Herbal Medicine NYC',
      ogDesc:
        "Custom Chinese herbal formulas prepared at Kunde TCM's Flushing pharmacy — shipped nationwide, supervised by our senior herbalist.",
    },
  },
};

export function generateMetadata({ params }: Props): Metadata {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) return {};
  const method = getMethod(params.slug);
  if (!method) return {};

  const override = seoOverrides[method.slug]?.[lang];
  if (override) {
    return pageMetadata({
      lang,
      path: `/methods/${method.slug}`,
      title: override.title,
      description: override.description,
      keywords: override.keywords,
      ogImage: method.image,
      ogType: 'article',
    });
  }

  const isZh = lang === 'zh';
  const name = isZh ? method.nameZh : method.nameEn;
  return pageMetadata({
    lang,
    path: `/methods/${method.slug}`,
    title: isZh
      ? `${name} | 坤德中医养生轩 · 纽约针灸诊所`
      : `${name} | Kunde TCM · Acupuncture Clinic NYC`,
    description: isZh ? method.introZh : method.introEn,
    ogImage: method.image,
    ogType: 'article',
  });
}

export default function MethodDetailPage({ params }: Props) {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) notFound();
  const method = getMethod(params.slug);
  if (!method) notFound();

  const t = dict[lang].methods;
  const isZh = lang === 'zh';
  const name = isZh ? method.nameZh : method.nameEn;
  const tagline = isZh ? method.taglineZh : method.taglineEn;
  const intro = isZh ? method.introZh : method.introEn;
  const principles = isZh ? method.principlesZh : method.principlesEn;
  const applications = isZh ? method.applicationsZh : method.applicationsEn;
  const procedure = isZh ? method.procedureZh : method.procedureEn;
  const faqs = isZh ? method.faqZh : method.faqEn;

  const override = seoOverrides[method.slug]?.[lang];
  const h1 = override?.h1 ?? (isZh ? `${name} — 坤德中医养生轩` : `${name} at Kunde TCM`);

  const breadcrumbs = [
    { label: t.breadcrumbHome, href: `/${lang}` },
    { label: t.breadcrumbMethods, href: `/${lang}/methods` },
    { label: name, href: `/${lang}/methods/${method.slug}` },
  ];

  const therapySchema = medicalTherapySchema({
    locale: lang,
    slug: method.slug,
    name,
    alternateName:
      override?.keywords ??
      (isZh
        ? [method.nameZh, method.nameEn, '坤德中医', '纽约针灸诊所']
        : [method.nameEn, method.nameZh, 'Kunde TCM', 'Acupuncture Clinic NYC']),
    description: intro,
    keywords: (override?.keywords ?? []).join(', '),
  });

  const relatedDoctorObjs = doctors.filter((d) =>
    method.relatedDoctors.includes(d.slug),
  );
  const relatedConditionObjs = conditions.filter((c) =>
    method.relatedConditions.includes(c.slug),
  );
  const otherMethods = methods.filter((m) => m.slug !== method.slug).slice(0, 4);

  const Icon = iconMap[method.icon] ?? Activity;

  return (
    <>
      <JsonLd data={therapySchema} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqPageSchema(faqs)} />

      {/* Hero */}
      <section className="relative bg-header text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={method.image}
            alt={`${name} — ${isZh ? '坤德中医养生轩 · 纽约针灸诊所' : 'Kunde TCM · Acupuncture Clinic NYC'}`}
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
              {t.breadcrumbMethods}
            </p>
          </div>
          <h1 className="font-serif text-3xl md:text-display leading-tight mb-6 max-w-4xl">
            {h1}
          </h1>
          <p className="text-body-lg text-white/90 max-w-3xl mb-8">{tagline}</p>
          <div className="flex flex-wrap gap-4">
            <Button href={`/${lang}/contact#booking`} size="lg">
              {t.bookNow}
            </Button>
            <Button
              href={`/${lang}/methods`}
              variant="secondary"
              size="lg"
              className="!bg-transparent !text-white !border-white hover:!bg-white/10"
            >
              {t.viewAll}
            </Button>
          </div>
        </div>
      </section>

      {/* What is + Quote + Intro (first 100 words keyword lock) */}
      <section className="container-kunde py-16 lg:py-20 max-w-4xl">
        <h2 className="font-serif text-h2 mb-6">
          {t.whatIsTitle}
          {isZh ? '' : ' '}
          {name}
          {t.whatIsSuffix}
        </h2>
        {isZh && method.originQuoteZh && (
          <blockquote className="border-l-4 border-primary pl-5 italic text-[color:var(--color-text-muted)] mb-6">
            {method.originQuoteZh}
          </blockquote>
        )}
        <p className="text-body-lg text-[color:var(--color-text)]/90 leading-relaxed mb-6">
          {intro}
        </p>
        <ul className="space-y-3 mt-6">
          {principles.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-dark flex-shrink-0 mt-1" />
              <span className="text-[color:var(--color-text)]/85">{p}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Applications */}
      <section className="bg-cream border-y border-border">
        <div className="container-kunde py-16 lg:py-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 mb-3">{t.applicationsTitle}</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app, i) => {
              const linkedCondition = app.conditionSlug
                ? conditions.find((c) => c.slug === app.conditionSlug)
                : undefined;
              return (
                <div
                  key={i}
                  className="bg-white border border-border rounded-lg p-6 shadow-sm"
                >
                  <h3 className="font-serif text-lg mb-2">{app.title}</h3>
                  <p className="text-sm text-[color:var(--color-text)]/80 mb-3 leading-relaxed">
                    {app.body}
                  </p>
                  {linkedCondition && (
                    <Link
                      href={`/${lang}/conditions/${linkedCondition.slug}`}
                      className="text-sm text-primary-dark font-semibold inline-flex items-center gap-1 hover:underline"
                    >
                      {isZh ? linkedCondition.nameZh : linkedCondition.nameEn}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Procedure */}
      <section className="container-kunde py-16 lg:py-20 max-w-4xl">
        <h2 className="font-serif text-h2 mb-8 text-center">
          {t.procedureTitle}
        </h2>
        <ol className="space-y-5">
          {procedure.map((step, i) => (
            <li
              key={i}
              className="flex gap-5 bg-white border border-border rounded-lg p-5 shadow-sm"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white font-serif text-lg flex items-center justify-center">
                {i + 1}
              </div>
              <p className="text-[color:var(--color-text)]/90 leading-relaxed">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Related Doctors */}
      {relatedDoctorObjs.length > 0 && (
        <section className="bg-cream border-y border-border">
          <div className="container-kunde py-16 lg:py-20">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="font-serif text-h2 mb-3">{t.doctorsTitle}</h2>
              <p className="text-[color:var(--color-text-muted)]">
                {t.doctorsSub}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          </div>
        </section>
      )}

      {/* Related Conditions — internal anchor text SEO */}
      {relatedConditionObjs.length > 0 && (
        <section className="container-kunde py-16 lg:py-20 max-w-5xl">
          <h2 className="font-serif text-h2 mb-8 text-center">
            {t.relatedConditionsTitle}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedConditionObjs.map((c) => (
              <Link
                key={c.slug}
                href={`/${lang}/conditions/${c.slug}`}
                className="group flex items-center justify-between gap-3 bg-white border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="font-serif text-lg mb-1">
                    {isZh ? c.nameZh : c.nameEn}
                  </h3>
                  <p className="text-sm text-[color:var(--color-text-muted)]">
                    {isZh ? c.taglineZh : c.taglineEn}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-primary-dark group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link
              href={`/${lang}/conditions`}
              className="text-primary-dark font-semibold inline-flex items-center gap-1 hover:underline"
            >
              {t.crossLinkToConditions}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
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
                <dt className="font-serif text-lg mb-2 text-[color:var(--color-text)]">
                  {f.q}
                </dt>
                <dd className="text-[color:var(--color-text)]/85 leading-relaxed">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Other Methods */}
      <section className="container-kunde py-16 lg:py-20">
        <h2 className="font-serif text-h2 mb-8 text-center">
          {t.otherMethodsTitle}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {otherMethods.map((m) => {
            const MIcon = iconMap[m.icon] ?? Activity;
            return (
              <Link
                key={m.slug}
                href={`/${lang}/methods/${m.slug}`}
                className="group block bg-white border border-border rounded-lg p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                  <MIcon className="w-5 h-5 text-primary-dark" />
                </div>
                <h3 className="font-serif text-base mb-1">
                  {isZh ? m.nameZh : m.nameEn}
                </h3>
                <p className="text-xs text-[color:var(--color-text-muted)]">
                  {isZh ? m.taglineZh : m.taglineEn}
                </p>
              </Link>
            );
          })}
        </div>
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
