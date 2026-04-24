import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';
import { NewsletterForm } from '@/components/layout/NewsletterForm';

interface FooterProps {
  locale: Locale;
}

export function FooterMobile({ locale }: FooterProps) {
  const t = dict[locale].footer;

  return (
    <footer className="bg-footer text-white/90 mt-0 pb-20 md:pb-0">
      {/* Footer SEO Keyword Bar */}
      <div className="border-b border-white/10">
        <div className="container-kunde py-4">
          <nav
            aria-label={t.seoBarLabel}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"
          >
            <span className="text-white/60">{t.seoBarLabel}:</span>
            {t.seoLinks.map((l, i) => (
              <span key={l.href} className="flex items-center gap-4">
                <Link
                  href={l.href}
                  className="text-primary hover:text-primary-light"
                >
                  {l.label}
                </Link>
                {i < t.seoLinks.length - 1 && (
                  <span className="text-white/30">·</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      <div className="container-kunde py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Image
            src="/images/logo/kunde-logo.png"
            alt="坤德中医养生轩"
            width={160}
            height={44}
            className="h-10 w-auto mb-4 brightness-0 invert"
          />
          <p className="text-sm text-white/70 mb-2">{t.tagline}</p>
          <p className="text-sm text-white/60 italic">{t.motto}</p>
        </div>

        {/* Quick contact */}
        <div>
          <h4 className="font-serif text-lg text-white mb-4">
            {t.contactTitle}
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-primary" />
              <span>
                {t.hotline}
                <br />
                <a
                  href="tel:+18882514088"
                  className="hover:text-primary-light"
                >
                  (888) 251-4088
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-primary" />
              <span>
                {t.flagship}
                <br />
                <a
                  href="tel:+17188889087"
                  className="hover:text-primary-light"
                >
                  (718) 888-9087
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-primary" />
              <a
                href="mailto:ny4sacu@gmail.com"
                className="hover:text-primary-light"
              >
                ny4sacu@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-0.5 text-primary" />
              <span>{t.hours}</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-serif text-lg text-white mb-2">
            {t.newsletterTitle}
          </h4>
          <p className="text-sm text-white/70 mb-4">{t.newsletterSub}</p>
          <NewsletterForm
            locale={locale}
            placeholder={t.newsletterPlaceholder}
            btnText={t.newsletterBtn}
          />
          <p className="text-xs text-white/50 mt-2">{t.newsletterPrivacy}</p>
        </div>

        {/* Social + Legal */}
        <div>
          <h4 className="font-serif text-lg text-white mb-4">
            {t.socialTitle}
          </h4>
          <div className="flex gap-3 mb-6">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <h4 className="font-serif text-lg text-white mb-3">{t.legalTitle}</h4>
          <ul className="space-y-1 text-sm text-white/70">
            {t.legalLinks.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-primary-light">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-kunde py-6 text-xs text-white/60 space-y-2">
          <p>{t.copyright}</p>
          <p className="max-w-4xl">{t.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
