'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export function AnnouncementBar({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 60) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 5) {
        setVisible(false); // 向下滚动：隐藏
      } else if (currentY < lastScrollY.current - 5) {
        setVisible(true); // 向上滚动：显示
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'bg-header text-white text-sm overflow-hidden transition-all duration-300',
        visible ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0',
      )}
    >
      <div className="container-kunde flex items-center justify-center gap-3 py-2 text-center">
        <span className="hidden sm:inline text-white/90">{t.announcement}</span>
        <span className="sm:hidden text-white/90">
          {locale === 'zh'
            ? '5 家分店 · 接受主流保险'
            : '5 Locations · Insurance Accepted'}
        </span>
        <Link
          href={`/${locale}/contact#booking`}
          className="inline-flex items-center gap-1 text-primary hover:text-primary-light font-semibold whitespace-nowrap"
        >
          {t.announcementCta}
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
