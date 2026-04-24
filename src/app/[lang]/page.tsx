import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CTABanner } from '@/components/ui/CTABanner';
import { Hero } from '@/components/sections/Hero';
import { StatsSection } from '@/components/sections/StatsSection';
import { MethodsGrid } from '@/components/sections/MethodsGrid';
import { ConditionsGrid } from '@/components/sections/ConditionsGrid';
import { DoctorBookingSection } from '@/components/sections/DoctorBookingSection';
import { WhyChooseKunde } from '@/components/sections/WhyChooseKunde';
import { ClinicGallery } from '@/components/sections/ClinicGallery';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { JsonLd } from '@/components/seo/JsonLd';
import { locales, type Locale, dict } from '@/lib/i18n';
import {
  medicalBusinessSchema,
  breadcrumbSchema,
} from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

interface Props {
  params: { lang: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) return {};
  if (lang === 'zh') {
    return pageMetadata({
      lang,
      path: '/',
      title:
        '坤德中医养生轩 | 纽约中医诊所 · 纽约针灸诊所 | 法拉盛 · 曼哈顿',
      description:
        '坤德中医是纽约权威中医诊所与针灸诊所，法拉盛3家+曼哈顿+米德尔顿共5家分店，8位纽约州执照针灸师，提供针灸、中药、推拿、拔罐全科诊疗，接受主流保险。',
      keywords: [
        '纽约中医诊所',
        '纽约针灸诊所',
        '纽约中医',
        '纽约针灸',
        '法拉盛中医',
        '中医诊所',
        '针灸诊所',
        '法拉盛中医诊所',
      ],
      ogImage: '/images/hero-key.svg',
    });
  }
  return pageMetadata({
    lang,
    path: '/',
    title:
      'Kunde TCM | Acupuncture Clinic NYC · Chinese Medicine Clinic NYC | Flushing',
    description:
      "Looking for the best acupuncture in NYC? Kunde TCM is New York's trusted Chinese Medicine clinic — 5 locations in Flushing, Manhattan, and Middletown, 8 licensed acupuncturists, and most insurance accepted.",
    keywords: [
      'Acupuncture NYC',
      'Acupuncture Clinic NYC',
      'TCM Clinic',
      'TCM NYC',
      'Chinese Medicine NYC',
      'Chinese Medicine Clinic NYC',
      'Traditional Chinese Medicine Clinic',
      'Best Acupuncture NYC',
      'Acupuncture Flushing',
      'Herbal Medicine NYC',
    ],
    ogImage: '/images/hero-key.svg',
  });
}

export default function HomePage({ params }: Props) {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) notFound();
  const t = dict[lang].home;

  const breadcrumbs = [
    {
      label: lang === 'zh' ? '首页' : 'Home',
      href: `/${lang}`,
    },
  ];

  return (
    <>
      <JsonLd data={medicalBusinessSchema(lang)} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Hero locale={lang} />
      <StatsSection locale={lang} />
      <MethodsGrid locale={lang} />
      <ConditionsGrid locale={lang} />
      <DoctorBookingSection locale={lang} />
      <WhyChooseKunde locale={lang} />
      <ClinicGallery locale={lang} />
      <TestimonialsSection locale={lang} />
      <BlogPreview locale={lang} />

      <CTABanner
        title={t.ctaTitle}
        subtitle={t.ctaSub}
        primaryLabel={t.cta}
        primaryHref={`/${lang}/contact#booking`}
        secondaryLabel={t.ctaSecondaryLabel}
        secondaryHref={`/${lang}/contact#locations`}
      />
    </>
  );
}
