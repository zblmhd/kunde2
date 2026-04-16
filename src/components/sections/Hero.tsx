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
    <section className="relative overflow-hidden">
      {/* 全亮度背景图 */}
      <div className="absolute inset-0">
        <Image
          src="/images/clinic/reception-calligraphy.webp"
          alt={t.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* 左侧白色渐变，让玻璃卡片自然融入 */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/15 to-transparent" />

      <div className="relative container-kunde py-20 lg:py-28">
        {/* 磨砂玻璃卡片 */}
        <div className="max-w-[520px] bg-white/78 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-white/90 shadow-2xl">

          {/* 金色装饰线 + 位置标签 */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[color:var(--color-primary)] flex-shrink-0" />
            <span className="text-[color:var(--color-primary-dark)] text-xs font-semibold tracking-[0.18em] uppercase">
              {isZh ? '纽约 · 法拉盛 · 曼哈顿 · 扎根 20 余年' : 'New York · Flushing · Manhattan · 20+ Years'}
            </span>
          </div>

          {/* 格言 */}
          <p className="font-serif text-[color:var(--color-primary-dark)] text-base italic mb-4 leading-relaxed">
            {t.heroBanner}
          </p>

          {/* H1 主标题 */}
          <h1 className="font-serif text-3xl md:text-4xl leading-snug mb-5 text-[color:var(--color-text)]">
            {t.h1}
          </h1>

          {/* 副文字 */}
          <p className="text-[color:var(--color-text-muted)] text-[0.95rem] leading-relaxed mb-7">
            {t.subtitle}
          </p>

          {/* 行动按钮 */}
          <div className="flex flex-wrap gap-3">
            <Button href={`/${locale}/contact#booking`} size="lg">
              {t.cta}
            </Button>
            <Button
              href={`/${locale}/conditions`}
              variant="secondary"
              size="lg"
            >
              {t.ctaSecondary}
            </Button>
          </div>

          {/* 电话 */}
          <p className="mt-5 text-sm text-[color:var(--color-text-muted)]">
            {isZh
              ? '📞 (718) 888-9087 · 法拉盛 · 曼哈顿 · 米德尔顿'
              : '📞 (718) 888-9087 · Flushing · Manhattan · Middletown'}
          </p>
        </div>
      </div>
    </section>
  );
}
