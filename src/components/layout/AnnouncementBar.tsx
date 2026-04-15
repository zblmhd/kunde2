import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';

export function AnnouncementBar({ locale }: { locale: Locale }) {
  const t = dict[locale];
  return (
    <div className="bg-header text-white text-sm">
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
