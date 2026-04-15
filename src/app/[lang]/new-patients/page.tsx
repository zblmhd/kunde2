import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/ui/CTABanner';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { locales, type Locale } from '@/lib/i18n';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { NewPatientsTabs } from './NewPatientsTabs';
import { InsuranceForm } from './InsuranceForm';

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
      path: '/new-patients',
      title: '新患者指南 | 初诊流程 · 保险覆盖 · 常见问题 | 坤德中医养生轩',
      description:
        '第一次看中医？坤德中医新患者指南 — 初诊流程、接受保险（UHC / Aetna / Cigna / Oxford / BlueCross / NYSHIP）、服务条款与 FAQ。免费保险验证，(718) 888-9087。',
      keywords: ['新患者指南', '中医保险', '法拉盛中医', '初诊流程', '坤德中医'],
    });
  }
  // EN — must hit "Insurance-Accepted Acupuncture NYC" per 4.1.1
  return pageMetadata({
    lang,
    path: '/new-patients',
    title:
      'Insurance-Accepted Acupuncture NYC | Kunde TCM New Patients Guide',
    description:
      'Acupuncture insurance accepted in NYC — Kunde TCM is in-network with UHC, Aetna, Cigna, Oxford, Empire BlueCross BlueShield, and NYSHIP. New patient guide with first-visit steps, pricing, and FAQs.',
    keywords: [
      'Insurance-Accepted Acupuncture NYC',
      'Acupuncture Insurance NYC',
      'UHC acupuncture NYC',
      'Aetna acupuncture NYC',
      'Best Acupuncture NYC',
    ],
  });
}

const INSURANCES = [
  'UHC (UnitedHealthcare)',
  'NYSHIP',
  'Empire BlueCross BlueShield',
  'Aetna',
  'Oxford',
  'Cigna',
];

const INTAKE_STEPS_ZH = [
  '在线或电话预约（提供预约链接与分店电话）',
  '填写初诊问卷（健康史、症状描述、保险信息）',
  '抵达诊所（请提前 15 分钟到达）',
  '与医生初诊（详细问诊，约 30–45 分钟）',
  '制定个性化治疗方案',
  '开始治疗（当日通常可进行首次治疗）',
  '随访与调整（根据效果微调疗程）',
];
const INTAKE_STEPS_EN = [
  'Book online or by phone (we offer both)',
  'Fill out your intake form — medical history, current symptoms, insurance details',
  'Arrive 15 minutes before your appointment',
  'Initial consultation with your practitioner (30–45 minutes of thorough evaluation)',
  'Personalized treatment plan designed around your pattern',
  'First treatment usually starts the same day',
  'Follow-up & adjustment as your plan progresses',
];

const TERMS_ZH = [
  { t: '预约政策', d: '请提前 24 小时取消或改期，否则可能收取取消费。' },
  { t: '迟到政策', d: '迟到超过 15 分钟可能需要重新安排预约。' },
  { t: '隐私政策', d: '所有医疗记录依据 HIPAA 法规严格保密。' },
  { t: '急诊处理', d: '我们不提供急诊服务，如有紧急情况请拨打 911。' },
  { t: '治疗知情同意', d: '首次就诊需签署知情同意书。' },
  { t: '付款条款', d: '治疗结束后当场结账。保险患者仅需支付 copay 及未覆盖部分。' },
];
const TERMS_EN = [
  { t: 'Cancellation', d: 'Please cancel or reschedule at least 24 hours in advance to avoid a cancellation fee.' },
  { t: 'Late Arrivals', d: 'Arriving more than 15 minutes late may require rescheduling.' },
  { t: 'Privacy & HIPAA', d: 'All medical records are kept strictly confidential under HIPAA.' },
  { t: 'Emergencies', d: 'We do not provide emergency services. Please call 911 in an emergency.' },
  { t: 'Informed Consent', d: 'First-time patients will sign a treatment informed-consent form.' },
  { t: 'Payment', d: 'Payment is collected at the end of each visit. Insured patients owe only copay plus any uncovered amount.' },
];

const FAQS_ZH = [
  { q: '针灸第一次会痛吗？', a: '大多数患者只感受到轻微酸胀感，而非疼痛。我们使用极细的无菌一次性针具，入针时感觉接近蚊虫叮咬，很多患者在治疗中直接放松入睡。' },
  { q: '我需要带什么来就诊？', a: '保险卡、身份证件（驾照或护照）、近期化验或影像报告（如有）、正在服用的药物清单。' },
  { q: '一个疗程需要几次治疗？', a: '因病情而异。一般建议初始疗程为每周 1–2 次、共 6–10 次，之后根据疗效调整。慢性病疗程更长，急性病通常更短。' },
  { q: '中医能和西医同时进行吗？', a: '完全可以。中医是绝佳的补充治疗，我们鼓励您与西医主治医师保持沟通，我们也乐于与您的 PCP 协同工作。' },
  { q: '停车方便吗？', a: '各分店停车情况不同。法拉盛三家分店周边有多个公共停车场；曼哈顿店建议乘地铁；Middletown 店有自带停车场。详见联系页。' },
  { q: '你们有中文服务吗？', a: '是的，全体医师与前台均提供中英文双语服务。部分医师还会讲粤语、闽南语或西班牙语。' },
  { q: '取消预约需要多提前通知？', a: '请至少提前 24 小时通知我们取消或更改预约。' },
  { q: '首次预约后多久能开始治疗？', a: '通常初诊当天即可进行第一次治疗。初诊时长约 30–45 分钟，首次治疗约 45–60 分钟。' },
];

const FAQS_EN = [
  { q: 'Does Kunde TCM accept insurance for acupuncture in NYC?', a: 'Yes — Kunde TCM is in-network with UHC, Aetna, Cigna, Oxford, Empire BlueCross BlueShield, and NYSHIP for acupuncture in NYC. We also offer free benefits verification before your first visit, so there are no surprises at checkout.' },
  { q: 'Does the first acupuncture session hurt?', a: 'Most patients feel only a faint dull ache — never sharp pain. We use ultra-fine, sterile, single-use needles. Many patients relax so deeply during treatment that they fall asleep.' },
  { q: 'What do I need to bring to my first visit?', a: 'Your insurance card, a photo ID, any recent lab or imaging reports, and a list of any medications or supplements you are currently taking.' },
  { q: 'How many sessions does a typical course take?', a: 'It depends on the condition. Most patients start with 1–2 visits per week for 6–10 sessions, then adjust based on how the body responds. Chronic conditions usually need longer courses; acute conditions often resolve faster.' },
  { q: 'Can I combine TCM with the care I already get from my regular doctor?', a: 'Absolutely. TCM works beautifully alongside Western medicine. We encourage you to keep your PCP informed, and we are happy to coordinate care with them.' },
  { q: 'Is parking available?', a: 'It depends on the location. Our three Flushing clinics are near several public garages; Midtown is best reached by subway; the Middletown clinic has its own parking lot. See our Contact page for details.' },
  { q: 'Do you offer Chinese-language services?', a: 'Yes. All our practitioners and front desk staff are bilingual in Mandarin and English. Several also speak Cantonese, Taiwanese, or Spanish.' },
  { q: 'How much notice is needed to cancel?', a: 'Please cancel or reschedule at least 24 hours in advance.' },
];

export default function NewPatientsPage({ params }: Props) {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) notFound();
  const isZh = lang === 'zh';

  const breadcrumbs = isZh
    ? [
        { label: '首页', href: '/zh' },
        { label: '新患者指南', href: '/zh/new-patients' },
      ]
    : [
        { label: 'Home', href: '/en' },
        { label: 'New Patients', href: '/en/new-patients' },
      ];

  const faqs = isZh ? FAQS_ZH : FAQS_EN;

  const tabs = [
    {
      id: 'intake',
      label: isZh ? '初诊流程' : 'First Visit',
      content: (
        <div>
          <h2 className="font-serif text-h2 mb-4">
            {isZh ? '您的初诊 7 步流程' : 'Your First Visit — A 7-Step Walkthrough'}
          </h2>
          <p className="text-[color:var(--color-text-muted)] mb-8 text-body-lg">
            {isZh
              ? '我们希望您的第一次中医之旅清晰、安心。以下 7 步是绝大多数新患者的标准流程。'
              : 'We want your first TCM visit to feel calm and completely clear. Here\'s exactly what to expect.'}
          </p>
          <ol className="space-y-4">
            {(isZh ? INTAKE_STEPS_ZH : INTAKE_STEPS_EN).map((step, i) => (
              <li
                key={step}
                className="flex gap-4 bg-white border border-border rounded-lg p-5 shadow-sm"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <p className="text-[color:var(--color-text)]/90 leading-relaxed pt-1.5">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      ),
    },
    {
      id: 'insurance',
      label: isZh ? '费用与保险' : 'Pricing & Insurance',
      content: (
        <div id="insurance">
          <h2 className="font-serif text-h2 mb-4">
            {isZh ? '接受的 6 大主流保险计划' : 'We Are In-Network with 6 Major Plans'}
          </h2>
          <p className="text-[color:var(--color-text-muted)] mb-6 text-body-lg">
            {isZh
              ? '坤德中医作为纽约针灸诊所接受 6 大主流保险计划。我们提供免费保险验证服务 — 确认福利后再就诊，无任何预付或承诺。'
              : 'Acupuncture insurance accepted in NYC — Kunde TCM is in-network with the following six major plans. We verify your benefits for free before your first visit, so you know exactly what\'s covered.'}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
            {INSURANCES.map((ins) => (
              <div
                key={ins}
                className="flex items-center gap-3 bg-cream border border-border rounded-md p-4"
              >
                <ShieldCheck className="w-5 h-5 text-primary-dark flex-shrink-0" />
                <span className="font-semibold">{ins}</span>
              </div>
            ))}
          </div>

          <div className="bg-cream border-l-4 border-primary p-5 mb-10 rounded-r-md">
            <p className="italic text-body-lg text-[color:var(--color-text)]/90">
              {isZh
                ? '"We accept most major insurance plans." — 官方声明来自 ny-fsa.com'
                : '"We accept most major insurance plans." — from ny-fsa.com'}
            </p>
            <p className="mt-3 text-sm text-[color:var(--color-text-muted)]">
              {isZh
                ? '其他保险：致电确认 (718) 888-9087 / (718) 489-1828 · 网站未公开具体价格，接受大多数主流保险可大幅降低自费金额。'
                : 'Other plans? Call us at (718) 888-9087 / (718) 489-1828. We do not publish out-of-pocket pricing online — insurance coverage usually reduces what you pay significantly.'}
            </p>
          </div>

          <h3 className="font-serif text-h3 mb-4">
            {isZh ? '免费保险验证' : 'Free Insurance Verification'}
          </h3>
          <p className="text-[color:var(--color-text-muted)] mb-6">
            {isZh
              ? '请提交您的保险信息，我们将尽快查询您的保险受益情况并与您联络。所有字段均为必填。'
              : "Not sure if your insurance covers acupuncture? We'll check for you — free of charge. Just share your insurance details below and our team will verify your benefits and get back to you promptly. We accept most major plans including UHC, Aetna, Cigna, Oxford, Empire BlueCross BlueShield, and NYSHIP."}
          </p>
          <InsuranceForm locale={lang} />
        </div>
      ),
    },
    {
      id: 'terms',
      label: isZh ? '服务条款' : 'Policies',
      content: (
        <div>
          <h2 className="font-serif text-h2 mb-6">
            {isZh ? '服务条款' : 'Clinic Policies'}
          </h2>
          <ul className="space-y-4">
            {(isZh ? TERMS_ZH : TERMS_EN).map((term) => (
              <li
                key={term.t}
                className="bg-white border border-border rounded-lg p-5 shadow-sm"
              >
                <h3 className="font-serif text-lg mb-2 text-primary-dark">
                  {term.t}
                </h3>
                <p className="text-[color:var(--color-text)]/90">{term.d}</p>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'faq',
      label: isZh ? '常见问题' : 'FAQ',
      content: (
        <div>
          <h2 className="font-serif text-h2 mb-6">
            {isZh ? '8 个新患者最常问的问题' : '8 Questions New Patients Ask Most'}
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="bg-white border border-border rounded-lg p-5 shadow-sm group"
              >
                <summary className="font-serif text-lg cursor-pointer list-none flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-dark flex-shrink-0 mt-1" />
                  <span>{f.q}</span>
                </summary>
                <p className="mt-4 pl-8 text-[color:var(--color-text)]/90 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqPageSchema(faqs)} />

      {/* Hero */}
      <section className="relative bg-header text-white">
        <div className="relative container-kunde py-16 lg:py-20">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />
          <h1 className="font-serif text-3xl md:text-display leading-tight mb-6 max-w-4xl">
            {isZh
              ? '新患者指南 — 接受主流保险的纽约中医诊所'
              : 'Acupuncture Insurance Accepted in NYC — New Patient Guide'}
          </h1>
          <p className="text-body-lg text-white/90 max-w-3xl mb-4">
            {isZh
              ? '第一次看中医？别担心，我们陪您把每一步走清楚。'
              : 'First time visiting a Chinese Medicine clinic? Don\'t worry — we\'ll walk you through every step.'}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`/${lang}/contact#booking`} size="lg">
              {isZh ? '立即预约' : 'Book Your First Visit'}
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

      {/* Opening Paragraph — SEO lock */}
      <section className="bg-cream border-b border-border">
        <div className="container-kunde py-10 max-w-4xl">
          <p className="text-body-lg text-[color:var(--color-text)]/90 leading-relaxed">
            {isZh
              ? '很多新患者在第一次走进中医诊所前都会有点紧张 — 针扎会不会痛？中药苦不苦？一个疗程要多久？保险覆盖吗？这些问题我们在坤德中医听了 20 多年，每一个我们都认真回答。无论您是纽约本地华人、第二代 ABC，还是完全不懂中文的西人朋友，我们都会用您听得懂的方式，把您的治疗讲清楚。'
              : "Visiting a Chinese Medicine clinic for the first time can feel unfamiliar — do the needles hurt? Is the herbal medicine bitter? How many sessions will I need? Does my insurance cover this? We've been answering these questions for over 20 years, and we take every single one seriously. Whether you're Chinese American, a lifelong New Yorker exploring TCM for the first time, or somewhere in between, we'll walk you through your treatment in a language and style you're comfortable with — no jargon, no mystery."}
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="container-kunde py-16 lg:py-20 max-w-5xl">
        <NewPatientsTabs tabs={tabs} />
      </section>

      {/* Internal nav */}
      <section className="bg-cream border-t border-border">
        <div className="container-kunde py-12 max-w-4xl">
          <h2 className="font-serif text-h3 text-center mb-6">
            {isZh ? '继续探索坤德' : 'Keep Exploring Kunde'}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {(isZh
              ? [
                  { label: '查看我们的医疗团队', href: '/zh/team' },
                  { label: '联系我们预约', href: '/zh/contact#booking' },
                  { label: '8 大治疗手法', href: '/zh/methods' },
                  { label: '15 项主治项目', href: '/zh/conditions' },
                ]
              : [
                  { label: 'Meet Our Licensed Practitioners', href: '/en/team' },
                  { label: 'Contact & Book', href: '/en/contact#booking' },
                  { label: '8 Treatment Methods', href: '/en/methods' },
                  { label: '15 Conditions We Treat', href: '/en/conditions' },
                ]
            ).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={isZh ? '立即开始您的健康之旅' : 'Ready to Start Your Healing Journey?'}
        subtitle={
          isZh
            ? '我们提供电话咨询和线上预约，欢迎与我们联系。我们接受大多数保险计划。'
            : 'We offer phone consultations and online booking. Most major insurance plans accepted.'
        }
        primaryLabel={isZh ? '立即预约' : 'Book Now'}
        primaryHref={`/${lang}/contact#booking`}
        secondaryLabel={isZh ? '查看各分店' : 'View All Locations'}
        secondaryHref={`/${lang}/contact#locations`}
      />
    </>
  );
}
