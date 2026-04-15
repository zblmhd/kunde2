// Centralized SEO helper — guarantees every page emits canonical, hreflang
// (zh / en / x-default), Open Graph and Twitter card metadata in one place.
//
// Usage in a page's generateMetadata():
//   return pageMetadata({
//     lang,
//     path: '/methods/acupuncture',
//     title: '...',
//     description: '...',
//     ogImage: '/images/methods/acupuncture.svg',
//   });
//
// `path` MUST start with a slash and MUST NOT include the /[lang] prefix.

import type { Metadata } from 'next';
import type { Locale } from './i18n';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kunde-tcm.com';

export const SITE_NAME_ZH = '坤德中医养生轩';
export const SITE_NAME_EN = 'Kunde TCM';

interface PageMetaInput {
  lang: Locale;
  /** Path *without* the lang prefix, starting with `/`. Empty string for home. */
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  /** If true, sets robots.noindex (for thank-you / preview pages). */
  noindex?: boolean;
}

export function pageMetadata(input: PageMetaInput): Metadata {
  const {
    lang,
    path,
    title,
    description,
    keywords,
    ogImage = '/images/hero-key.svg',
    ogType = 'website',
    noindex = false,
  } = input;

  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonical = `${SITE_URL}/${lang}${cleanPath === '/' ? '' : cleanPath}`;
  const zhUrl = `${SITE_URL}/zh${cleanPath === '/' ? '' : cleanPath}`;
  const enUrl = `${SITE_URL}/en${cleanPath === '/' ? '' : cleanPath}`;

  const siteName = lang === 'zh' ? SITE_NAME_ZH : SITE_NAME_EN;

  const meta: Metadata = {
    title,
    description,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    alternates: {
      canonical,
      languages: {
        zh: zhUrl,
        en: enUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      type: ogType,
      locale: lang === 'zh' ? 'zh_CN' : 'en_US',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };

  return meta;
}

/** Convenience for sitemap entries / internal absolute URLs. */
export function absUrl(lang: Locale, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}/${lang}${cleanPath === '/' ? '' : cleanPath}`;
}
