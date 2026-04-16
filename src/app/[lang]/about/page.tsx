import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Circle,
  Compass,
  ShieldCheck,
  GitMerge,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/ui/CTABanner';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { locales, type Locale, dict } from '@/lib/i18n';
import {
  aboutMedicalBusinessSchema,
  breadcrumbSchema,
} from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

interface Props {
  params: { lang: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) return {};
  if (lang === 'zh') {
    return pageMetadata({
      lang,
      path: '/about',
      title: '关于坤德中医养生轩 | 纽约中医诊所 20 余年 · 法拉盛主店',
      description:
        '坤德中医（New York Four Seasons Acupuncture PC）扎根纽约 20 余年，法拉盛 3 家 + 曼哈顿 + 米德尔顿共 5 家分店，8 位纽约州执照针灸师，院长馮羅小潔 DAOM 亲自坐诊。',
      keywords: ['纽约中医诊所', '坤德中医', '馮羅小潔', '法拉盛中医', '中医诊所'],
      ogImage: '/images/about-hero.svg',
    });
  }
  // EN must contain "Best Acupuncture NYC" per plan 4.1.1
  return pageMetadata({
    lang,
    path: '/about',
    title:
      'About Kunde TCM | Best Acupuncture NYC · Licensed TCM Clinic in Flushing',
    description:
      'Meet Kunde TCM — among the Best Acupuncture NYC clinics for 20+ years. Founded by Dr. Serene Feng, DAOM, with 8 New York State-licensed acupuncturists, 5 locations across Flushing, Manhattan, and the Hudson Valley.',
    keywords: ['Best Acupuncture NYC', 'Acupuncture Clinic NYC', 'TCM Clinic NYC', 'Dr. Serene Feng'],
    ogImage: '/images/about-hero.svg',
  });
}

const valueIconMap: Record<string, LucideIcon> = {
  Circle,
  Compass,
  ShieldCheck,
  GitMerge,
};

export default function AboutPage({ params }: Props) {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) notFound();
  const t = dict[lang].about;
  const isZh = lang === 'zh';

  return (
    <>
      <JsonLd data={aboutMedicalBusinessSchema(lang)} />
      <JsonLd data={breadcrumbSchema(t.breadcrumbs)} />

      {/* Hero */}
      <section className="relative bg-header text-white overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <Image
            src="/images/clinic/waiting-room.webp"
            alt={t.heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative container-kunde py-16 lg:py-20">
          <Breadcrumbs items={t.breadcrumbs} className="mb-6" />
          <h1 className="font-serif text-3xl md:text-display leading-tight mb-6 max-w-4xl">
            {t.h1}
          </h1>
          <p className="text-body-lg text-white/90 max-w-3xl">{t.heroSub}</p>
          <div className="mt-8">
            <Button href={`/${lang}/contact#booking`} size="lg">
              {isZh ? '预约咨询' : 'Book a Consultation'}
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-kunde py-16 lg:py-20 max-w-4xl">
        <h2 className="font-serif text-h2 mb-8">{t.introTitle}</h2>
        <div className="space-y-5 text-[color:var(--color-text)]/90 leading-relaxed">
          {t.introBody.map((p, i) => (
            <p key={i} className="text-body-lg">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Clinic Gallery */}
      <section className="border-b border-border">
        <div className="container-kunde py-12 lg:py-16">
          <h2 className="font-serif text-h2 text-center mb-8">
            {isZh ? '诊所环境' : 'Our Clinic'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: '/images/clinic/reception-calligraphy.webp', alt: isZh ? '前台大医精诚' : 'Reception with calligraphy wall' },
              { src: '/images/clinic/waiting-room.webp', alt: isZh ? '候诊区' : 'Waiting area' },
              { src: '/images/clinic/entrance-sign.webp', alt: isZh ? '坤德中医养生轩招牌' : 'Kunde TCM entrance sign' },
              { src: '/images/clinic/corridor-plants.webp', alt: isZh ? '走廊绿植' : 'Corridor with plants' },
              { src: '/images/clinic/treatment-room-1.webp', alt: isZh ? '治疗室' : 'Treatment room' },
              { src: '/images/clinic/herbal-shelf.webp', alt: isZh ? '中药展示柜' : 'Herbal medicine display' },
              { src: '/images/clinic/front-desk.webp', alt: isZh ? '前台' : 'Front desk' },
              { src: '/images/clinic/hallway-art.webp', alt: isZh ? '走廊艺术装饰' : 'Hallway with artwork' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-cream border-y border-border">
        <div className="container-kunde py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-h2 mb-6">{t.missionTitle}</h2>
            <p className="text-body-lg italic text-[color:var(--color-text)]/90">
              {t.missionBody}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.valueCards.map((c) => {
              const Icon = valueIconMap[c.icon] ?? Circle;
              return (
                <div
                  key={c.title}
                  className="bg-white border border-border rounded-lg p-6 shadow-sm text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-dark" />
                  </div>
                  <h3 className="font-serif text-lg mb-2">{c.title}</h3>
                  <p className="text-sm text-[color:var(--color-text-muted)]">
                    {c.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="container-kunde py-16 lg:py-20 max-w-4xl">
        <h2 className="font-serif text-h2 mb-8 text-center">{t.credTitle}</h2>
        <ul className="space-y-4">
          {t.credItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 bg-white border border-border rounded-lg p-5 shadow-sm"
            >
              <ShieldCheck className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
              <span className="text-[color:var(--color-text)]/90">{item}</span>
            </li>
          ))}
        </ul>
        {/* AggregateRating placeholder — will be wired in Step 6 after Google Business pull */}
        <p className="mt-6 text-xs text-[color:var(--color-text-muted)] italic text-center">
          {isZh
            ? '* 患者评分将于上线后对接 Google Business Profile 实时显示'
            : '* Aggregate patient ratings will be connected to Google Business Profile at launch.'}
        </p>
      </section>

      {/* Nav CTA */}
      <section className="bg-cream border-t border-border">
        <div className="container-kunde py-16 lg:py-20 max-w-5xl">
          <h2 className="font-serif text-h2 text-center mb-10">
            {t.navCtaTitle}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between gap-3 bg-white border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-serif text-lg text-[color:var(--color-text)]">
                  {link.label}
                </span>
                <ArrowRight className="w-5 h-5 text-primary-dark group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={
          isZh
            ? '立即开始您的健康之旅'
            : 'Ready to Start Your Healing Journey?'
        }
        subtitle={
          isZh
            ? '我们提供电话咨询和线上预约，欢迎与我们联系。我们接受大多数保险计划。'
            : 'We offer phone consultations and online booking. Most major insurance plans accepted.'
        }
        primaryLabel={isZh ? '立即预约' : 'Book Now'}
        primaryHref={`/${lang}/contact#booking`}
        secondaryLabel={isZh ? '查看各分店地址' : 'View All Locations'}
        secondaryHref={`/${lang}/contact#locations`}
      />
    </>
  );
}
