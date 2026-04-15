import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';

interface Props {
  locale: Locale;
}

export function StickyBookingButton({ locale }: Props) {
  const t = dict[locale];
  const bookingHref = `/${locale}/contact#booking`;

  return (
    <>
      {/* Desktop: floating right-bottom pill */}
      <Link
        href={bookingHref}
        className="hidden md:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 h-12 rounded-full shadow-lg transition-colors"
        aria-label={t.bookNow}
      >
        <Calendar className="h-5 w-5" />
        <span>{t.bookNow}</span>
      </Link>

      {/* Mobile: full-width bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 border-t border-border bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <a
          href="tel:+17188889087"
          className="flex items-center justify-center gap-2 h-14 text-[color:var(--color-text)] font-semibold border-r border-border"
          aria-label={t.callNow}
        >
          <Phone className="h-5 w-5" />
          <span>{t.callNow}</span>
        </a>
        <Link
          href={bookingHref}
          className="flex items-center justify-center gap-2 h-14 bg-primary text-white font-semibold"
          aria-label={t.bookNow}
        >
          <Calendar className="h-5 w-5" />
          <span>{t.bookNow}</span>
        </Link>
      </div>
    </>
  );
}
