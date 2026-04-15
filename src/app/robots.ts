import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

// Strict implementation of plan §4.7 — GEO + AI crawler friendly.
// Allows Google-Extended / OAI-SearchBot / PerplexityBot / ClaudeBot.
// Blocks /admin/, /api/, /_next/.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/'],
      },
      // AI search crawlers — explicitly permitted for GEO indexing.
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
