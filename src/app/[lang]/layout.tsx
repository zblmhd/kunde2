import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeaderMobile } from '@/components/mobile/HeaderMobile';
import { FooterMobile } from '@/components/mobile/FooterMobile';
import { StickyBookingButton } from '@/components/ui/StickyBookingButton';
import { locales, type Locale } from '@/lib/i18n';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface Props {
  children: React.ReactNode;
  params: { lang: string };
}

// NOTE: page-level generateMetadata() in each route emits its own
// canonical + hreflang alternates via lib/seo.ts → pageMetadata().
// We intentionally do NOT set alternates here (would otherwise force
// every nested route to inherit the bare /[lang] canonical).

export default function LangLayout({ children, params }: Props) {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) notFound();

  return (
    <>
      {/* Header components self-toggle via `hidden lg:block` / `lg:hidden`
          on the <header> element itself — NOT wrapped, so `position: sticky`
          works against the document, not a short wrapper. */}
      <Header locale={lang} />
      <HeaderMobile locale={lang} />

      <main className="min-h-[60vh]">{children}</main>

      {/* Desktop footer (≥ lg) */}
      <div className="hidden lg:block">
        <Footer locale={lang} />
      </div>
      {/* Mobile footer (< lg) — original site design */}
      <div className="lg:hidden">
        <FooterMobile locale={lang} />
      </div>

      <StickyBookingButton locale={lang} />
    </>
  );
}
