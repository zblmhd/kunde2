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
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/ui/CTABanner';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { locales, type Locale, dict } from '@/lib/i18n';
import { breadcrumbSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { methods } from '@/data/methods';

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
  params: { lang: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) return {};
  if (lang === 'zh') {
    return pageMetadata({
      lang,
      path: '/methods',
      title: '8 大治疗手法 | 纽约针灸 · 法拉盛中药调理 · 坤德中医养生轩',
      description:
        '坤德中医养生轩 8 大正统中医治疗手法 — 针灸、中药调理、拔罐、艾灸刮痧、三伏贴、砭石热石、经络推拿、药浴。纽约州执照针灸师亲诊，法拉盛·曼哈顿 5 家分店。',
      keywords: [
        '纽约中医治疗',
        '纽约针灸手法',
        '法拉盛中药调理',
        '纽约针灸诊所',
        '中医疗法',
        '针灸 中药 拔罐 艾灸',
      ],
      ogImage: '/images/methods/acupuncture.svg',
    });
  }
  return pageMetadata({
    lang,
    path: '/methods',
    title:
      'Our Treatments — 8 Chinese Medicine Therapies | Acupuncture NYC · Kunde TCM',
    description:
      "Explore Kunde TCM's 8 treatment methods — acupuncture, Chinese herbal medicine, cupping, moxibustion, Gua Sha, Tui Na, and more. Licensed practitioners, 5 NYC locations.",
    keywords: [
      'Acupuncture NYC',
      'Chinese Medicine Treatments',
      'Herbal Medicine NYC',
      'TCM Clinic NYC',
      'Cupping NYC',
      'Moxibustion NYC',
    ],
    ogImage: '/images/methods/acupuncture.svg',
  });
}

export default function MethodsListPage({ params }: Props) {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) notFound();
  const t = dict[lang].methods;
  const isZh = lang === 'zh';

  const breadcrumbs = [
    { label: t.breadcrumbHome, href: `/${lang}` },
    { label: t.breadcrumbMethods, href: `/${lang}/methods` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <Image src="/images/hero-methods-list.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
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

      {/* 4×2 grid */}
      <section className="container-kunde pb-16 lg:pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((m) => {
            const Icon = iconMap[m.icon] ?? Activity;
            return (
              <Link
                key={m.slug}
                href={`/${lang}/methods/${m.slug}`}
                className="group block bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary-dark" />
                </div>
                <h2 className="font-serif text-xl mb-2">
                  {isZh ? m.nameZh : m.nameEn}
                </h2>
                <p className="text-sm text-[color:var(--color-text-muted)] mb-3">
                  {isZh ? m.taglineZh : m.taglineEn}
                </p>
                <span className="text-sm text-primary-dark font-semibold inline-flex items-center gap-1">
                  {t.learnMore}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Cross-link banner → Conditions */}
      <section className="bg-cream border-y border-border">
        <div className="container-kunde py-12 text-center">
          <p className="font-serif text-h3 mb-4">{t.crossLinkBanner}</p>
          <Button href={`/${lang}/conditions`} variant="secondary" size="lg">
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
