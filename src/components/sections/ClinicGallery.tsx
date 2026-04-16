'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

const photos = [
  { src: '/images/clinic/reception-calligraphy.webp', alt: { zh: '前台大医精诚', en: 'Reception with calligraphy' } },
  { src: '/images/clinic/waiting-room.webp', alt: { zh: '候诊区', en: 'Waiting area' } },
  { src: '/images/clinic/reception-overview.webp', alt: { zh: '前台全景', en: 'Reception overview' } },
  { src: '/images/clinic/treatment-room-1.webp', alt: { zh: '治疗室', en: 'Treatment room' } },
  { src: '/images/clinic/treatment-room-2.webp', alt: { zh: '治疗室 2', en: 'Treatment room 2' } },
  { src: '/images/clinic/treatment-room-3.webp', alt: { zh: '治疗室 3', en: 'Treatment room 3' } },
  { src: '/images/clinic/herbal-shelf.webp', alt: { zh: '中药展示柜', en: 'Herbal medicine display' } },
  { src: '/images/clinic/entrance-sign.webp', alt: { zh: '坤德中医招牌', en: 'Entrance sign' } },
  { src: '/images/clinic/corridor-plants.webp', alt: { zh: '走廊绿植', en: 'Corridor with plants' } },
  { src: '/images/clinic/front-desk.webp', alt: { zh: '前台服务台', en: 'Front desk' } },
  { src: '/images/clinic/hallway-art.webp', alt: { zh: '走廊艺术装饰', en: 'Hallway artwork' } },
  { src: '/images/clinic/room-orchid.webp', alt: { zh: '兰花治疗室', en: 'Treatment room with orchid' } },
  { src: '/images/clinic/lounge-certs.webp', alt: { zh: '资质证书展示', en: 'Certificates display' } },
  { src: '/images/clinic/waiting-area-wide.webp', alt: { zh: '候诊区全景', en: 'Waiting area wide view' } },
  { src: '/images/clinic/entrance-lobby.webp', alt: { zh: '入口大厅', en: 'Entrance lobby' } },
  { src: '/images/clinic/gallery-wall.webp', alt: { zh: '艺术展示墙', en: 'Gallery wall' } },
];

export function ClinicGallery({ locale }: { locale: Locale }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevPhoto = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null));
  }, []);

  const nextPhoto = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % photos.length : null));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, prevPhoto, nextPhoto]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -380, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 380, behavior: 'smooth' });
  };

  return (
    <>
      <section className="py-12 lg:py-16 border-y border-border bg-white">
        <div className="container-kunde">
          <h2 className="font-serif text-h2 text-center mb-8">
            {locale === 'zh' ? '诊所实景' : 'Inside Our Clinic'}
          </h2>

          <div className="relative px-8">
            {/* 左滚动按钮 */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-border flex items-center justify-center hover:bg-[color:var(--color-bg-cream)] transition-colors"
              aria-label={locale === 'zh' ? '向左滚动' : 'Scroll left'}
            >
              <ChevronLeft className="w-5 h-5 text-[color:var(--color-primary-dark)]" />
            </button>

            {/* 横向滚动图片条 */}
            <div
              ref={scrollRef}
              className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide pb-1"
            >
              {photos.map((p, i) => (
                <button
                  key={p.src}
                  onClick={() => openLightbox(i)}
                  className="relative flex-shrink-0 w-44 h-44 lg:w-52 lg:h-52 rounded-lg overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] group"
                  aria-label={p.alt[locale]}
                >
                  <Image
                    src={p.src}
                    alt={p.alt[locale]}
                    fill
                    sizes="(max-width: 1024px) 176px, 208px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                </button>
              ))}
            </div>

            {/* 右滚动按钮 */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-border flex items-center justify-center hover:bg-[color:var(--color-bg-cream)] transition-colors"
              aria-label={locale === 'zh' ? '向右滚动' : 'Scroll right'}
            >
              <ChevronRight className="w-5 h-5 text-[color:var(--color-primary-dark)]" />
            </button>
          </div>

          <p className="text-center text-xs text-[color:var(--color-text-muted)] mt-4">
            {locale === 'zh' ? '点击图片查看大图 · 左右按钮滚动浏览' : 'Click to enlarge · Use arrows to scroll'}
          </p>
        </div>
      </section>

      {/* 灯箱 Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* 关闭按钮 */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors"
            aria-label={locale === 'zh' ? '关闭' : 'Close'}
          >
            <X className="w-6 h-6" />
          </button>

          {/* 上一张 */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors"
            aria-label={locale === 'zh' ? '上一张' : 'Previous'}
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* 大图 */}
          <div
            className="relative h-[80vh] w-full max-w-5xl mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt[locale]}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-contain"
              priority
            />
          </div>

          {/* 下一张 */}
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors"
            aria-label={locale === 'zh' ? '下一张' : 'Next'}
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* 计数器 */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {photos.length}
          </div>

          {/* 图片说明 */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/80 text-sm font-serif">
            {photos[lightboxIndex].alt[locale]}
          </div>
        </div>
      )}
    </>
  );
}
