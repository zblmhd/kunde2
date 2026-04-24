'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export function AnnouncementBar({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);
  // Cooldown after toggling — prevents the layout-shift feedback loop
  // (collapsing the bar changes document height, which fires another
  // scroll event, which would otherwise toggle again).
  const cooldownUntil = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    setVisible(window.scrollY < 60);

    const evaluate = () => {
      ticking.current = false;
      const now = Date.now();
      if (now < cooldownUntil.current) return;

      const y = window.scrollY;
      const delta = y - lastY.current;

      if (y < 60) {
        setVisible((prev) => {
          if (!prev) cooldownUntil.current = now + 450;
          return true;
        });
      } else if (delta > 20) {
        setVisible((prev) => {
          if (prev) cooldownUntil.current = now + 450;
          return false;
        });
        lastY.current = y;
      } else if (delta < -20) {
        setVisible((prev) => {
          if (!prev) cooldownUntil.current = now + 450;
          return true;
        });
        lastY.current = y;
      }
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(evaluate);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={cn(
        'kd-announcement overflow-hidden transition-all duration-300 ease-out',
        visible ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0',
      )}
    >
      <div className="kd-container flex items-center justify-center gap-3 text-center">
        <span>{t.announcement}</span>
        <Link href={`/${locale}/contact#booking`}>
          {t.announcementCta} →
        </Link>
      </div>
    </div>
  );
}
