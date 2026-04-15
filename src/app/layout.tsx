import type { Metadata } from 'next';
import { Noto_Serif_SC, Inter } from 'next/font/google';
import '@/styles/globals.css';
import {
  GoogleAnalytics,
  GscVerification,
} from '@/components/seo/Analytics';

const notoSerifSC = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-noto-serif-sc',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kunde-tcm.com',
  ),
  title: {
    default: '坤德中医养生轩 | Kunde TCM',
    template: '%s',
  },
  description:
    '坤德中医养生轩 — 纽约权威中医诊所与针灸诊所，法拉盛·曼哈顿·米德尔顿 5 家分店。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${notoSerifSC.variable} ${inter.variable}`}
    >
      <head>
        <GscVerification />
      </head>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
