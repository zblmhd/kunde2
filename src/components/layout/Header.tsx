'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Globe } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { dict, otherLocale } from '@/lib/i18n';
import { getNavItems } from '@/lib/nav';
import { AnnouncementBar } from './AnnouncementBar';
import { cn } from '@/lib/utils';

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const navItems = getNavItems(locale);
  const other = otherLocale(locale);

  return (
    <header className="sticky top-0 z-30">
      <AnnouncementBar locale={locale} />

      <div className="kd-header">
        <div className="kd-container">
          <div className="kd-header-row">
            <Link href={`/${locale}`} className="kd-brand" aria-label="坤德中醫養生軒">
              <Image
                src="/images/logo/kunde-logo.png"
                alt="坤德中醫養生軒 · New York Four Seasons Acupuncture PC"
                width={1393}
                height={382}
                priority
                className="kd-brand-logo"
              />
            </Link>

            <nav className="kd-nav hidden lg:flex" aria-label="主導航">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 shrink-0">
              {/* Phone button — desktop only */}
              <Link
                href={`/${locale}/contact#booking`}
                className="kd-btn kd-btn--gold kd-btn--sm kd-phone-btn"
              >
                <Phone className="h-3.5 w-3.5" />
                (718) 888-9087
              </Link>

              {/* CN/EN toggle — always visible (mobile replaces the phone button with this) */}
              <Link
                href={`/${other}`}
                className="inline-flex items-center gap-1.5 h-[38px] px-3 text-[12px] text-[color:var(--ink-800)] border border-[color:var(--gold-700)] rounded-full hover:bg-[color:var(--gold-700)]/10 font-sans"
                aria-label={`Switch to ${other === 'zh' ? '中文' : 'English'}`}
              >
                <Globe className="h-3.5 w-3.5" />
                {other === 'zh' ? '中文' : 'EN'}
              </Link>

              <button
                type="button"
                className="lg:hidden p-2 text-[color:var(--ink-900)]"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={cn(
            'lg:hidden bg-[color:var(--bg-warm)] border-t border-[color:var(--line-warm)] overflow-hidden transition-[max-height] duration-300',
            open ? 'max-h-[600px]' : 'max-h-0',
          )}
        >
          <nav className="kd-container py-3 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-[color:var(--line-soft)] text-[color:var(--ink-800)] text-sm font-serif"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
