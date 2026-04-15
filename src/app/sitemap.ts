import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { locales } from '@/lib/i18n';
import { methods } from '@/data/methods';
import { conditions } from '@/data/conditions';
import { doctors } from '@/data/doctors';
import { posts } from '@/data/posts';

// Route → priority/changeFreq policy. /admin and /api are intentionally
// excluded from the sitemap (also blocked in robots.ts).
const STATIC_PATHS: ReadonlyArray<{
  path: string;
  priority: number;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
}> = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/methods', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/conditions', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/team', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/beauty', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/new-patients', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of locales) {
    // 1. Static high-level pages
    for (const item of STATIC_PATHS) {
      entries.push({
        url: `${SITE_URL}/${lang}${item.path}`,
        lastModified: now,
        changeFrequency: item.changeFrequency,
        priority: item.priority,
        alternates: {
          languages: {
            zh: `${SITE_URL}/zh${item.path}`,
            en: `${SITE_URL}/en${item.path}`,
            'x-default': `${SITE_URL}/en${item.path}`,
          },
        },
      });
    }

    // 2. Methods detail
    for (const m of methods) {
      entries.push({
        url: `${SITE_URL}/${lang}/methods/${m.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.85,
        alternates: {
          languages: {
            zh: `${SITE_URL}/zh/methods/${m.slug}`,
            en: `${SITE_URL}/en/methods/${m.slug}`,
            'x-default': `${SITE_URL}/en/methods/${m.slug}`,
          },
        },
      });
    }

    // 3. Conditions detail
    for (const c of conditions) {
      entries.push({
        url: `${SITE_URL}/${lang}/conditions/${c.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.85,
        alternates: {
          languages: {
            zh: `${SITE_URL}/zh/conditions/${c.slug}`,
            en: `${SITE_URL}/en/conditions/${c.slug}`,
            'x-default': `${SITE_URL}/en/conditions/${c.slug}`,
          },
        },
      });
    }

    // 4. Doctor profile pages
    for (const d of doctors) {
      entries.push({
        url: `${SITE_URL}/${lang}/team/${d.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            zh: `${SITE_URL}/zh/team/${d.slug}`,
            en: `${SITE_URL}/en/team/${d.slug}`,
            'x-default': `${SITE_URL}/en/team/${d.slug}`,
          },
        },
      });
    }

    // 5. Blog posts
    for (const p of posts) {
      entries.push({
        url: `${SITE_URL}/${lang}/blog/${p.slug}`,
        lastModified: new Date(p.date),
        changeFrequency: 'monthly',
        priority: 0.75,
        alternates: {
          languages: {
            zh: `${SITE_URL}/zh/blog/${p.slug}`,
            en: `${SITE_URL}/en/blog/${p.slug}`,
            'x-default': `${SITE_URL}/en/blog/${p.slug}`,
          },
        },
      });
    }
  }

  return entries;
}
