'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';
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
  const t = dict[locale];
  const other = otherLocale(locale);

  return (
    <header className="sticky top-0 z-30">
      <AnnouncementBar locale={locale} />

      <div className="bg-white border-b border-border shadow-sm">
        <div className="container-kunde flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 font-serif text-xl font-bold text-[color:var(--color-text)] hover:text-primary"
          >
            <Image
              src="/images/logo/kunde-logo.png"
              alt="坤德中医养生轩 · New York Four Seasons Acupuncture PC"
              width={180}
              height={49}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-[color:var(--color-text)] hover:text-primary whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link
              href={`/${other}`}
              className="hidden sm:inline-flex items-center gap-1 text-sm text-[color:var(--color-text)] hover:text-primary border border-border px-3 py-1.5 rounded-md"
              aria-label={`Switch to ${other === 'zh' ? '中文' : 'English'}`}
            >
              <Globe className="h-4 w-4" />
              <span>{other === 'zh' ? '中文' : 'EN'}</span>
            </Link>

            <button
              type="button"
              className="lg:hidden p-2 text-[color:var(--color-text)]"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'lg:hidden border-t border-border bg-white overflow-hidden transition-[max-height] duration-300',
            open ? 'max-h-[600px]' : 'max-h-0',
          )}
        >
          <nav className="container-kunde py-3 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-border/60 text-[color:var(--color-text)] hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`/${other}`}
              onClick={() => setOpen(false)}
              className="py-3 mt-2 inline-flex items-center gap-2 text-primary font-semibold"
            >
              <Globe className="h-4 w-4" />
              {other === 'zh' ? '切换到中文' : 'Switch to English'}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
