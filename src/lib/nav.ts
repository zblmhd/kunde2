import type { Locale } from './i18n';
import { dict } from './i18n';

export function getNavItems(locale: Locale) {
  const t = dict[locale].nav;
  const prefix = `/${locale}`;
  return [
    { label: t.home, href: `${prefix}` },
    { label: t.about, href: `${prefix}/about` },
    { label: t.methods, href: `${prefix}/methods` },
    { label: t.conditions, href: `${prefix}/conditions` },
    { label: t.team, href: `${prefix}/team` },
    { label: t.beauty, href: `${prefix}/beauty` },
    { label: t.blog, href: `${prefix}/blog` },
    { label: t.newPatients, href: `${prefix}/new-patients` },
    // 4.1.1 C — top-level "法拉盛分店 / Flushing Locations" entry deep-links
    // to the Contact page anchor where the 5-clinic list lives.
    { label: t.locations, href: `${prefix}/contact#locations` },
    { label: t.contact, href: `${prefix}/contact` },
  ];
}
