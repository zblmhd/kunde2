import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Phone, Mail, Clock, Star, Train } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/ui/CTABanner';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { locales, type Locale } from '@/lib/i18n';
import {
  breadcrumbSchema,
  clinicLocalBusinessSchema,
} from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { clinics } from '@/data/clinics';
import { LazyMap } from '@/components/ui/LazyMap';
import { BookingForm } from './BookingForm';
import { InsuranceForm } from '../new-patients/InsuranceForm';

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
      path: '/contact',
      title:
        '法拉盛中医诊所 · 法拉盛针灸 | 坤德中医 — 三福 / 37 大道 / 黄金大厦 / 曼哈顿 / 米德尔顿',
      description:
        '坤德中医在法拉盛共有 3 家分店（三福大道 · 37 大道 · 黄金大厦），加上曼哈顿与米德尔顿共 5 家，是纽约华人社区最便捷的法拉盛中医诊所。预约：(718) 888-9087 / (718) 489-1828。',
      keywords: [
        '法拉盛中医诊所',
        '法拉盛中医',
        '法拉盛针灸',
        '纽约中医诊所',
        '坤德中医联系方式',
      ],
    });
  }
  return pageMetadata({
    lang,
    path: '/contact',
    title:
      'Acupuncture Flushing · Chinese Medicine Clinic Flushing | Kunde TCM Locations',
    description:
      'Kunde TCM has 3 clinics in Flushing (Sanford Ave, 37th Ave, 41st Rd), plus Manhattan and Middletown. Find the nearest acupuncture Flushing location and book online or call (718) 888-9087.',
    keywords: [
      'Acupuncture Flushing',
      'Chinese Medicine Clinic Flushing',
      'Chinese Herbal Medicine Flushing',
      'Acupuncture Clinic NYC',
      'Kunde TCM Locations',
    ],
  });
}

export default function ContactPage({ params }: Props) {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) notFound();
  const isZh = lang === 'zh';

  const breadcrumbs = isZh
    ? [
        { label: '首页', href: '/zh' },
        { label: '联系我们', href: '/zh/contact' },
      ]
    : [
        { label: 'Home', href: '/en' },
        { label: 'Contact', href: '/en/contact' },
      ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      {/* 5 independent LocalBusiness schemas per 方案 4.1.1 F */}
      {clinics.map((c) => (
        <JsonLd
          key={c.slug}
          data={clinicLocalBusinessSchema({ locale: lang, clinic: c })}
        />
      ))}

      {/* Hero — SEO lock per 4.1.1 */}
      <section className="relative overflow-hidden min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <Image src="/images/clinic/storefront.webp" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative container-kunde pb-12 pt-28 w-full">
          <Breadcrumbs items={breadcrumbs} className="mb-5" />
          <div className="h-px w-12 bg-[color:var(--color-primary)] mb-4" />
          <h1
            className="font-serif text-[1.6rem] sm:text-3xl md:text-display font-bold leading-tight mb-3 text-white max-w-4xl"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}
          >
            {isZh
              ? '法拉盛中医诊所 — 坤德中医 5 家分店'
              : 'Acupuncture Flushing & Chinese Medicine Clinic Flushing — Kunde TCM 5 Locations'}
          </h1>
          <p className="text-sm sm:text-body-lg text-white/75 max-w-3xl mb-5">
            {isZh
              ? '5 家分店遍布纽约，总有一家在您身边'
              : '5 locations across New York City and the Hudson Valley — one near you'}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#booking" size="lg">
              {isZh ? '立即预约' : 'Book Online'}
            </Button>
            <Button
              href="tel:+17188889087"
              variant="secondary"
              size="lg"
              className="!bg-transparent !text-white !border-white hover:!bg-white/10"
            >
              <Phone className="w-4 h-4" />
              (718) 888-9087
            </Button>
          </div>
        </div>
      </section>

      {/* SEO lock opening paragraph */}
      <section className="bg-cream border-b border-border">
        <div className="container-kunde py-10 max-w-4xl">
          <p className="text-body-lg text-[color:var(--color-text)]/90 leading-relaxed">
            {isZh
              ? '坤德中医在法拉盛共设 3 家分店 — 三福大道主店、37 大道旗舰店、黄金大厦 41 大道店 — 加上曼哈顿中城店与米德尔顿（橙县）院所，共 5 家分店。作为法拉盛中医诊所的首选之一，我们的法拉盛中医与法拉盛针灸专科由 8 位纽约州执照针灸师团队提供，接受 UHC、Aetna、BlueCross 等 6 大主流保险。'
              : 'Kunde TCM operates 3 acupuncture Flushing locations — Sanford Ave, 37th Ave, and Golden Office on 41st Road — plus a Midtown Manhattan clinic and a Middletown clinic in the Hudson Valley, for 5 locations in total. As one of the most accessible Chinese Medicine Clinic Flushing options for New Yorkers, our Flushing acupuncture team includes 8 New York State-licensed practitioners, and we accept UHC, Aetna, Cigna, Oxford, Empire BlueCross BlueShield, and NYSHIP.'}
          </p>
        </div>
      </section>

      {/* Online Booking Section */}
      <section id="booking" className="container-kunde py-16 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-h2 mb-3 text-center">
            {isZh ? '在线预约' : 'Book Your Appointment'}
          </h2>
          <p className="text-center text-[color:var(--color-text-muted)] mb-10 max-w-2xl mx-auto">
            {isZh
              ? '3 种预约方式，任选其一 — 我们的团队会在 24 小时内与您确认。'
              : 'Three easy ways to book — our team will confirm within 24 hours.'}
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-white border border-border rounded-lg p-5 shadow-sm">
              <h3 className="font-serif text-lg mb-2">
                {isZh ? '方式 1：选择医生直接预约' : 'Option 1: Choose a Practitioner'}
              </h3>
              <p className="text-sm text-[color:var(--color-text-muted)] mb-3">
                {isZh
                  ? '查看 8 位执照针灸师的专长，直接进入各自 Acuity 在线预约页。'
                  : 'Pick from our 8 licensed practitioners and book directly on their Acuity scheduling page.'}
              </p>
              <Button
                href={`/${lang}/team`}
                variant="secondary"
                size="sm"
              >
                {isZh ? '查看医师团队' : 'Meet the Team'}
              </Button>
            </div>
            <div className="bg-white border border-border rounded-lg p-5 shadow-sm">
              <h3 className="font-serif text-lg mb-2">
                {isZh ? '方式 2：填写预约表单' : 'Option 2: Fill Out the Form'}
              </h3>
              <p className="text-sm text-[color:var(--color-text-muted)] mb-3">
                {isZh
                  ? '告诉我们您的症状和希望就诊的分店，团队会回电确认。'
                  : 'Tell us about your symptoms and preferred clinic — we\'ll call to confirm.'}
              </p>
              <a
                href="#booking-form"
                className="text-primary-dark font-semibold text-sm hover:underline"
              >
                {isZh ? '跳到预约表单 ↓' : 'Jump to the form ↓'}
              </a>
            </div>
            <div className="bg-white border border-border rounded-lg p-5 shadow-sm">
              <h3 className="font-serif text-lg mb-2">
                {isZh ? '方式 3：电话预约' : 'Option 3: Call Us'}
              </h3>
              <p className="text-sm text-[color:var(--color-text-muted)] mb-3">
                {isZh
                  ? '直接致电您附近的分店，或拨打免费咨询热线。'
                  : 'Call the clinic closest to you, or our free consultation hotline.'}
              </p>
              <p className="text-sm font-semibold text-primary-dark">
                {isZh ? '免费咨询：888-251-4088' : 'Free hotline: 888-251-4088'}
              </p>
            </div>
          </div>

          <div id="booking-form" className="bg-cream border border-border rounded-lg p-6 md:p-8">
            <h3 className="font-serif text-h3 mb-5">
              {isZh ? '预约表单' : 'Appointment Request Form'}
            </h3>
            <BookingForm locale={lang} />
          </div>
        </div>
      </section>

      {/* Clinics Section */}
      <section id="locations" className="bg-cream border-y border-border">
        <div className="container-kunde py-16 lg:py-20">
          <h2 className="font-serif text-h2 mb-3 text-center">
            {isZh ? '5 家分店信息' : 'Our 5 Locations'}
          </h2>
          <p className="text-center text-[color:var(--color-text-muted)] mb-12 max-w-2xl mx-auto">
            {isZh
              ? '坤德中医在法拉盛共设 3 家分店，是法拉盛中医诊所的首选之一。'
              : 'Kunde TCM operates 3 acupuncture Flushing locations, making us one of the most accessible Chinese Medicine clinics in Flushing, Queens.'}
          </p>

          <div className="space-y-10">
            {clinics.map((clinic) => (
              <article
                key={clinic.slug}
                id={clinic.slug}
                className="bg-white border border-border rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-xl md:text-2xl mb-4 text-primary-dark leading-snug">
                    {isZh ? clinic.cardH3Zh : clinic.cardH3En}
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2 mb-6">
                    <InfoRow
                      icon={<MapPin className="w-4 h-4" />}
                      label={isZh ? '地址' : 'Address'}
                    >
                      {clinic.fullAddress}
                      {clinic.entranceZh && (
                        <span className="block text-xs text-[color:var(--color-text-muted)] mt-0.5">
                          {isZh ? clinic.entranceZh : clinic.entranceEn}
                        </span>
                      )}
                    </InfoRow>
                    <InfoRow
                      icon={<Phone className="w-4 h-4" />}
                      label={isZh ? '电话' : 'Phone'}
                    >
                      <a
                        href={`tel:${clinic.phoneSchema}`}
                        className="text-primary-dark hover:underline"
                      >
                        {clinic.phoneDisplay}
                      </a>
                    </InfoRow>
                    <InfoRow
                      icon={<Mail className="w-4 h-4" />}
                      label={isZh ? '邮箱' : 'Email'}
                    >
                      <a
                        href={`mailto:${clinic.email}`}
                        className="text-primary-dark hover:underline break-all"
                      >
                        {clinic.email}
                      </a>
                    </InfoRow>
                    <InfoRow
                      icon={<Clock className="w-4 h-4" />}
                      label={isZh ? '营业时间' : 'Hours'}
                    >
                      {isZh ? clinic.hours.displayZh : clinic.hours.displayEn}
                    </InfoRow>
                    {clinic.transitZh && (
                      <InfoRow
                        icon={<Train className="w-4 h-4" />}
                        label={isZh ? '交通' : 'Transit'}
                      >
                        {isZh ? clinic.transitZh : clinic.transitEn}
                      </InfoRow>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button href={`tel:${clinic.phoneSchema}`} size="sm">
                      <Phone className="w-4 h-4" />
                      {isZh ? '致电预约' : 'Call to Book'}
                    </Button>
                    <Button href="#booking-form" variant="secondary" size="sm">
                      {isZh ? '填写预约表' : 'Request Appointment'}
                    </Button>
                  </div>
                </div>

                {/* Map iframe — lazy-loaded for §4.9 INP/LCP gains */}
                {clinic.map && (
                  <LazyMap
                    html={clinic.map.iframe}
                    className="aspect-video md:aspect-[21/9] bg-cream border-t border-border"
                    placeholderLabel={
                      isZh ? '地图加载中…' : 'Loading map…'
                    }
                  />
                )}

                {/* Google reviews placeholder — to be wired to Google Places API in Step 6 */}
                <div className="bg-cream/60 border-t border-border p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <h4 className="font-serif font-semibold">
                      {isZh ? 'Google 评价' : 'Google Reviews'}
                    </h4>
                  </div>
                  <p className="text-sm text-[color:var(--color-text-muted)]">
                    {isZh
                      ? '本分店的 Google 真实评价将于上线后通过 Google Places API 实时显示（Place ID 已嵌入 Schema）。'
                      : "Live Google reviews for this clinic will be wired to our front-end via the Google Places API at launch. Place ID is already embedded in our LocalBusiness schema."}
                  </p>
                  {clinic.map?.placeId && (
                    <p className="text-xs text-[color:var(--color-text-muted)] mt-2 font-mono">
                      Place ID: {clinic.map.placeId}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance form */}
      <section className="container-kunde py-16 lg:py-20 max-w-4xl">
        <h2 className="font-serif text-h2 mb-3 text-center">
          {isZh ? '免费保险验证' : 'Free Insurance Verification'}
        </h2>
        <p className="text-center text-[color:var(--color-text-muted)] mb-8 max-w-2xl mx-auto">
          {isZh
            ? '请提交您的保险信息，留下您的联络方式，我们将尽快查询您的保险受益情况并与您联络。联络电话：(718) 888-9087 · (718) 489-1828'
            : "Not sure if your insurance covers acupuncture? We'll check for you — free of charge. Just share your insurance details below and our team will verify your benefits and get back to you promptly."}
        </p>
        <InsuranceForm locale={lang} />
      </section>

      {/* Social */}
      <section className="bg-cream border-y border-border">
        <div className="container-kunde py-12 max-w-4xl text-center">
          <h2 className="font-serif text-h3 mb-3">
            {isZh ? '关注我们' : 'Follow Us'}
          </h2>
          <p className="text-[color:var(--color-text-muted)] mb-5">
            {isZh
              ? '微信 · Facebook · Instagram · 免费咨询热线 888-251-4088'
              : 'WeChat · Facebook · Instagram · Free hotline 888-251-4088'}
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link href={`/${lang}/team`} className="underline">
              {isZh ? '医疗团队' : 'Our Team'}
            </Link>
            <span className="text-border">·</span>
            <Link href={`/${lang}/new-patients`} className="underline">
              {isZh ? '新患者指南' : 'New Patients'}
            </Link>
            <span className="text-border">·</span>
            <Link href={`/${lang}/blog`} className="underline">
              {isZh ? '中医专栏' : 'Journal'}
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title={isZh ? '立即开始您的健康之旅' : 'Ready to Start Your Healing Journey?'}
        subtitle={
          isZh
            ? '8 位纽约州执照针灸师，为您的独特情况量身定制方案。'
            : 'Our 8 NY State-licensed practitioners are ready to build a plan around you.'
        }
        primaryLabel={isZh ? '立即预约' : 'Book Now'}
        primaryHref="#booking"
        secondaryLabel={isZh ? '查看医疗团队' : 'Meet the Team'}
        secondaryHref={`/${lang}/team`}
      />
    </>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark mt-0.5">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold text-[color:var(--color-text-muted)] uppercase tracking-wide mb-0.5">
          {label}
        </div>
        <div className="text-sm text-[color:var(--color-text)]/90">
          {children}
        </div>
      </div>
    </div>
  );
}
