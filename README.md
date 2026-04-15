# Kunde TCM — 坤德中医养生轩

Bilingual (中文 / English) marketing + light CMS site for Kunde TCM, a
multi-clinic acupuncture & herbal medicine practice in the New York City
area. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and a
file-system content store under `/data`.

## Local development

```bash
npm install
cp .env.example .env.local   # then edit values
npm run dev                  # http://localhost:3000
```

Routes:

- `/` — language landing (redirects to `/zh` or `/en`)
- `/zh/...`, `/en/...` — public site
- `/admin` — content editor (protected by `ADMIN_PASSWORD`)
- `/sitemap.xml`, `/robots.txt` — auto-generated

## Environment variables

See [`.env.example`](./.env.example). All variables prefixed with
`NEXT_PUBLIC_` are exposed to the browser bundle; everything else is
server-only.

| Var | Required | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | yes (prod) | Used by metadata, sitemap, JSON-LD |
| `ADMIN_PASSWORD` | yes | Login password for `/admin` |
| `SESSION_SECRET` | yes | HMAC secret for admin session cookies |
| `DATABASE_URL` | no | Optional Postgres; falls back to `/data` JSON |
| `NEXT_PUBLIC_GA_ID` | recommended | GA4 measurement ID (`G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_GSC_VERIFICATION` | recommended | Google Search Console token |

## Deploying to Vercel

1. **Import the repo** in Vercel → New Project. Framework auto-detects as
   Next.js. No build-command override needed (`vercel.json` already pins
   `next build`).
2. **Set environment variables** (Settings → Environment Variables) for
   *Production* and *Preview*. At minimum:
   - `NEXT_PUBLIC_SITE_URL=https://kundetcm.com`
   - `ADMIN_PASSWORD` (strong random)
   - `SESSION_SECRET` (32+ random bytes hex)
   - `NEXT_PUBLIC_GA_ID`
   - `NEXT_PUBLIC_GSC_VERIFICATION`
3. **Add the production domain.** Recommended primary:
   `kundetcm.com` (cleaner, no hyphen, matches existing brand). Add the
   apex + `www.` and let Vercel issue SSL. Configure DNS:
   - `A` record `@` → Vercel's IP (Vercel will show it)
   - `CNAME` record `www` → `cname.vercel-dns.com.`
4. **Verify Search Console** at <https://search.google.com/search-console>
   using the meta-tag method, paste the token into
   `NEXT_PUBLIC_GSC_VERIFICATION`, redeploy, then submit
   `https://kundetcm.com/sitemap.xml`.
5. **GA4** — create a property at <https://analytics.google.com>, copy the
   measurement ID into `NEXT_PUBLIC_GA_ID`, redeploy. Verify in the
   *Realtime* report by visiting the live site.

`vercel.json` is committed and configures:

- Region: `iad1` (US East, closest to NYC clinics)
- Long-lived cache headers for `/images/*` and `/_next/static/*`
- Security headers: HSTS, X-Frame-Options, Referrer-Policy, etc.
- Permanent redirects for `/home` and `/index` → `/`

## Project structure

```
src/
  app/
    [lang]/              # public bilingual pages
    admin/               # CMS (Step 5)
    sitemap.ts           # auto-generated XML sitemap
    robots.ts            # robots.txt with GEO crawler allow-list
    not-found.tsx        # bilingual 404
  components/            # UI + sections + SEO helpers
  data/                  # types
  lib/
    seo.ts               # pageMetadata() helper
    schema.ts            # JSON-LD builders
    analytics.ts         # GA4 event helper
    nav.ts, i18n.ts      # navigation + dictionaries
data/
  clinics.ts, doctors.ts, methods.ts, conditions.ts, posts/...
public/images/           # SVG illustrations
```

## Content editing

Most content lives as TypeScript files under `/data` and is editable via
`/admin` (login with `ADMIN_PASSWORD`). Blog posts are markdown files
under `/data/posts/`.

## SEO & performance

The site implements the full SEO checklist from the master plan
(see [`STEP_6_COMPLETE.md`](./STEP_6_COMPLETE.md) for the audit):

- Per-page `generateMetadata()` with canonical + hreflang (zh/en/x-default)
- JSON-LD: `MedicalBusiness`, `MedicalTherapy`, `MedicalCondition`,
  `Physician`, `FAQPage`, `BreadcrumbList`, `Article`
- Sitemap covers all bilingual routes with `alternates.languages`
- `robots.txt` allow-lists generative AI crawlers (Google-Extended,
  OAI-SearchBot, PerplexityBot, ClaudeBot)
- `next/font` (Noto Serif SC + Inter) with `display: swap`
- `LazyMap` defers Google Maps iframes via IntersectionObserver

## License

Proprietary © Kunde TCM. All rights reserved.
