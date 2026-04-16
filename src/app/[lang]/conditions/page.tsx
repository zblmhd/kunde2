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
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/ui/CTABanner';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { locales, type Locale, dict } from '@/lib/i18n';
import { breadcrumbSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { conditions } from '@/data/conditions';

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
  params: { lang: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) return {};
  if (lang === 'zh') {
    return pageMetadata({
      lang,
      path: '/conditions',
      title: '15 大主治项目 | 纽约中医诊所 · 坤德中医养生轩',
      description:
        '坤德中医 15 大主治项目 — 不孕不育、疼痛管理、妇科调理、焦虑抑郁、失眠、三高、面瘫、男科、消化等，8 位纽约州执照针灸师为您量身定制治疗方案。',
      keywords: [
        '纽约中医主治',
        '法拉盛中医调理',
        '纽约针灸主治',
        '中医专科',
        '不孕不育 纽约',
        '疼痛管理 纽约',
      ],
      ogImage: '/images/conditions/fertility.svg',
    });
  }
  return pageMetadata({
    lang,
    path: '/conditions',
    title:
      'Conditions We Treat — 15 Specialized Focus Areas | Kunde TCM NYC',
    description:
      'From chronic pain to fertility, from sleep to digestive health — Kunde TCM treats 15 specialized clinical conditions at our Flushing and Manhattan NYC locations.',
    keywords: [
      'Acupuncture for Pain NYC',
      'Fertility Acupuncture NYC',
      "Women's Health TCM",
      'Insomnia Acupuncture NYC',
      "Bell's Palsy Acupuncture",
    ],
    ogImage: '/images/conditions/fertility.svg',
  });
}

export default function ConditionsListPage({ params }: Props) {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) notFound();
  const t = dict[lang].conditions;
  const isZh = lang === 'zh';

  const breadcrumbs = [
    { label: t.breadcrumbHome, href: `/${lang}` },
    { label: t.breadcrumbConditions, href: `/${lang}/conditions` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <Image src="/images/hero-conditions.jpg" alt="" fill sizes="100vw" className="object-cover" />
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

      {/* Intro */}
      <section className="container-kunde py-12 lg:py-16 max-w-4xl text-center">
        <p className="text-body-lg text-[color:var(--color-text)]/85 leading-relaxed">
          {t.listIntro}
        </p>
      </section>

      {/* 3×5 grid */}
      <section className="container-kunde pb-16 lg:pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((c) => {
            const Icon = iconMap[c.icon] ?? Stethoscope;
            return (
              <Link
                key={c.slug}
                href={`/${lang}/conditions/${c.slug}`}
                className="group flex items-start gap-4 bg-white border border-border rounded-lg p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-dark" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif text-lg mb-1">
                    {isZh ? c.nameZh : c.nameEn}
                  </h2>
                  <p className="text-sm text-[color:var(--color-text-muted)] mb-2">
                    {isZh ? c.taglineZh : c.taglineEn}
                  </p>
                  <span className="text-xs text-primary-dark font-semibold inline-flex items-center gap-1">
                    {t.learnMore}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* TCM Beauty banner */}
      <section className="bg-gradient-to-r from-primary/10 to-cream border-y border-border">
        <div className="container-kunde py-14 text-center max-w-3xl">
          <Sparkles className="w-10 h-10 mx-auto mb-4 text-primary-dark" />
          <h2 className="font-serif text-h2 mb-4">{t.beautyBannerTitle}</h2>
          <p className="text-body-lg text-[color:var(--color-text)]/85 mb-6">
            {t.beautyBannerBody}
          </p>
          <Button href={`/${lang}/conditions/herbal-beauty`} size="lg">
            {t.beautyBannerCta}
          </Button>
        </div>
      </section>

      {/* Cross-link banner → Methods */}
      <section className="bg-cream border-b border-border">
        <div className="container-kunde py-12 text-center">
          <p className="font-serif text-h3 mb-4">{t.crossLinkBanner}</p>
          <Button href={`/${lang}/methods`} variant="secondary" size="lg">
            {t.crossLinkBannerCta}
          </Button>
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
