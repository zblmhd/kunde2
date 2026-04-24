import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyBookingButton } from '@/components/ui/StickyBookingButton';
import { locales, type Locale } from '@/lib/i18n';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface Props {
  children: React.ReactNode;
  params: { lang: string };
}

export default function LangLayout({ children, params }: Props) {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) notFound();

  return (
    <>
      <Header locale={lang} />
      <main className="min-h-[60vh]">{children}</main>
      <Footer locale={lang} />
      <StickyBookingButton locale={lang} />
    </>
  );
}
