'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ButtonMobile as Button } from './ButtonMobile';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';

interface Props {
  locale: Locale;
}

const heroImages = [
  '/images/hero/hero-home-1.jpg',
  '/images/hero/hero-home-2.jpg',
  '/images/hero/hero-home-3.jpg',
];

/**
 * Home-page Hero with image carousel.
 * - 3 images auto-rotate every 6 seconds with crossfade.
 * - H1 locked to SEO keyword phrase (zh / en).
 * - LCP image: priority on first slide.
 */
export function HeroMobile({ locale }: Props) {
  const t = dict[locale].home;
  const isZh = locale === 'zh';

  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* 轮播背景图片 */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={t.heroAlt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* 渐变遮罩 — 确保文字在任何图片上都清晰可读 */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 md:from-black/85 md:via-black/60 md:to-black/20" />

      <div className="relative container-kunde py-16 lg:py-24 w-full">
        <div className="max-w-[580px]">

          {/* ━━ 纽约 · 法拉盛 · 曼哈顿 ━━ 短横线 */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[color:var(--color-primary)]" />
            <span className="text-[color:var(--color-primary)] text-[10px] font-bold tracking-[0.22em] uppercase whitespace-nowrap px-1">
              {isZh ? '纽约 · 法拉盛 · 曼哈顿 · 20 余年' : 'NY · FLUSHING · MANHATTAN · 20+ YRS'}
            </span>
            <div className="h-px w-10 bg-[color:var(--color-primary)]" />
          </div>

          {/* 格言 */}
          <p className="font-serif text-[color:var(--color-primary-light)] text-sm sm:text-base italic mb-5 leading-relaxed">
            {t.heroBanner}
          </p>

          {/* H1 主标题 */}
          <h1
            className="font-serif text-[1.9rem] sm:text-[2.4rem] md:text-[2.9rem] lg:text-[3.4rem] font-bold leading-tight mb-5 text-white"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
          >
            {t.h1}
          </h1>

          {/* 副文字 */}
          <p className="text-white/70 text-sm sm:text-[0.95rem] leading-relaxed mb-8 max-w-[460px]">
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

      {/* 轮播指示器 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-[color:var(--color-primary)] w-6'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
