import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';

interface Props {
  locale: Locale;
}

/**
 * Home-page Hero.
 * - H1 locked to 4.1.1 keyword phrase (zh / en).
 * - LCP image: priority + width/height + alt containing core keywords.
 * - First 100 words of body copy contain the locked keywords.
 */
export function Hero({ locale }: Props) {
  const t = dict[locale].home;
  const isZh = locale === 'zh';

  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* 高清背景大图 */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-home.jpg"
          alt={t.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {/* 左深右淡渐变，确保文字清晰可读 */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/60 to-black/15" />

      <div className="relative container-kunde py-16 lg:py-24 w-full">
        <div className="max-w-[580px]">

          {/* ━━━━━ 纽约 · 法拉盛 · 曼哈顿 ━━━━━ 居中双横线 */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-[color:var(--color-primary)]" />
            <span className="text-[color:var(--color-primary)] text-[10px] font-bold tracking-[0.22em] uppercase whitespace-nowrap px-1">
              {isZh ? '纽约 · 法拉盛 · 曼哈顿 · 20 余年' : 'NY · FLUSHING · MANHATTAN · 20+ YRS'}
            </span>
            <div className="h-px flex-1 bg-[color:var(--color-primary)]" />
          </div>

          {/* 格言 */}
          <p className="font-serif text-[color:var(--color-primary-light)] text-sm sm:text-base italic mb-5 leading-relaxed">
            {t.heroBanner}
          </p>

          {/* H1 主标题 */}
          <h1
            className="font-serif text-[1.9rem] sm:text-[2.4rem] md:text-[2.9rem] lg:text-[3.4rem] font-bold leading-tight mb-5 text-white"
          >
            {t.h1}
          </h1>

          {/* 副文字 */}
          <p className="text-white/65 text-sm sm:text-[0.95rem] leading-relaxed mb-7 max-w-[460px]">
            {t.subtitle}
          </p>

          {/* 精致小分割符 ◆ */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[color:var(--color-primary)]/50" />
            <span className="text-[color:var(--color-primary)] text-[9px]">◆</span>
            <div className="h-px w-8 bg-[color:var(--color-primary)]/50" />
          </div>

          {/* 行动按钮 */}
          <div className="flex flex-wrap gap-3">
            <Button href={`/${locale}/contact#booking`} size="lg">
              {t.cta}
            </Button>
            <Button
              href={`/${locale}/conditions`}
              variant="secondary"
              size="lg"
              className="!bg-white/10 !text-white !border-white/40 hover:!bg-white/20"
            >
              {t.ctaSecondary}
            </Button>
          </div>

          <p className="mt-6 text-xs text-white/45">
            📞 {isZh ? '(718) 888-9087 · 法拉盛 · 曼哈顿 · 米德尔顿' : '(718) 888-9087 · Flushing · Manhattan · Middletown'}
          </p>
        </div>
      </div>
    </section>
  );
}
