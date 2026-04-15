import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { locales, type Locale } from '@/lib/i18n';
import { breadcrumbSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { getPostsSortedByDate } from '@/data/posts';
import { BlogCategoryFilter } from './CategoryFilter';

interface Props {
  params: { lang: string };
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) return {};
  if (lang === 'zh') {
    return pageMetadata({
      lang,
      path: '/blog',
      title: '中医专栏 | 坤德中医养生轩 — 针灸 · 中药 · 疾病防治 · 患者故事',
      description:
        '坤德中医专栏 — 由馮羅小潔 DAOM 与馮苏安教授主笔，分享针灸科普、中药知识、疾病防治案例与养生食疗，帮助您更好地了解中医。',
      keywords: ['中医专栏', '针灸科普', '中药知识', '法拉盛中医', '养生食疗'],
    });
  }
  return pageMetadata({
    lang,
    path: '/blog',
    title:
      'Kunde TCM Wellness Journal | Acupuncture, Herbal Medicine & Patient Stories',
    description:
      'Evidence-based TCM articles by licensed practitioners — acupuncture basics, herbal medicine, chronic condition management, and real patient case studies.',
    keywords: ['Acupuncture NYC blog', 'TCM wellness journal', 'Chinese medicine articles', 'patient stories acupuncture'],
  });
}

export default function BlogListPage({ params }: Props) {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) notFound();
  const isZh = lang === 'zh';

  const posts = getPostsSortedByDate();

  const breadcrumbs = isZh
    ? [
        { label: '首页', href: '/zh' },
        { label: '中医专栏', href: '/zh/blog' },
      ]
    : [
        { label: 'Home', href: '/en' },
        { label: 'Journal', href: '/en/blog' },
      ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      {/* Hero */}
      <section className="relative bg-header text-white">
        <div className="container-kunde py-14 lg:py-18 relative">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />
          <h1 className="font-serif text-3xl md:text-display leading-tight mb-4 max-w-3xl">
            {isZh
              ? '中医专栏 — 来自坤德中医专家的健康知识与养生智慧'
              : 'Kunde Wellness Journal — Evidence-Based TCM from Licensed Practitioners'}
          </h1>
          <p className="text-body-lg text-white/90 max-w-2xl">
            {isZh
              ? '由医生为大家解说根本病因、解析疾病与个人体质的关系，并对应正统中医理论，采取适合的中医古法，做出有效治疗。'
              : 'Each article is written or reviewed by a licensed practitioner at Kunde TCM. Real cases, real diagnoses, practical guidance.'}
          </p>
        </div>
      </section>

      {/* Posts grid + filter */}
      <section className="container-kunde py-16 lg:py-20">
        <BlogCategoryFilter locale={lang} posts={posts} />
      </section>
    </>
  );
}
