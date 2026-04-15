# Step 4 Complete — Medical Team System + TCM Beauty Page

## Deliverables

### 1. Data layer
- `src/data/doctors.ts` — 12 members (8 licensed practitioners + 4 specialty therapists)
  - Fields: `slug, type, nameZh, nameEn, titleZh/En, specialtiesZh/En, educationZh/En, experienceZh/En, languagesZh/En, bioZh/En, clinics[], relatedMethodSlugs[], bookingUrl, imagePath`
  - Backward-compat fields preserved: `credentialsZh/En`, `image` (used by Step 2/3 pages)
  - Helpers: `getDoctor(slug)`, `licensedPractitioners`, `specialtyTherapists`, `clinicEnMap`
  - Slug `jiana-xu` (not `jia-na-xu`) per request; `conditions.ts` updated to match

### 2. Pages (22 new static routes)
- `src/app/[lang]/team/page.tsx` — ZH + EN team list (hero, intro quote, 8-practitioner grid, 4-therapist grid, Join Team CTA → ny4sacu@gmail.com)
- `src/app/[lang]/team/[slug]/page.tsx` — 12 × 2 = 24 static detail pages via `generateStaticParams`
  - Structure: Hero image + h1 + title + Book/Back → Bio → Specialties → Education + Experience → Languages + Clinics → Related Methods → Other Doctors → CTABanner
  - `doctorSeoOverrides` locks Prof. Suo An Feng + Dr. Serene Feng SEO
- `src/app/[lang]/beauty/page.tsx` — ZH + EN beauty page
  - Hero → Philosophy → Inner TCM Beauty (3 services) → Modern Aesthetics 12-row table → Licensed Aesthetician Yang Lingyan → 10-tier Referral Program → CTABanner

### 3. SEO / Structured Data
- `src/lib/schema.ts` added `physicianSchema()` with `hasCredential` (NY State DOE) + `worksFor` (MedicalBusiness @id) + `knowsLanguage` + `medicalSpecialty`
- `src/lib/schema.ts` added `beautyServiceSchema()` with `areaServed: NYC` + `provider @id`
- All pages inject `BreadcrumbList`
- Beauty page injects 12 × `Service` schemas
- Detail pages inject `Physician` schema

### 4. Keyword Locks Verified

| Doctor | Locale | H1 (actual) |
| --- | --- | --- |
| Prof. Suo An Feng | zh | 冯苏安中医 · 纽约中医教授 — 消渴丸发明人之一 |
| Prof. Suo An Feng | en | Prof. Suo An Feng · Senior Herbalist · Co-Inventor of Xiaoke Diabetes Formula |
| Dr. Serene Feng | zh | 馮羅小潔 Dr. Serene Feng — 坤德中医创始人 / 临床主任 |
| Dr. Serene Feng | en | Dr. Serene Feng, DAOM — Founder & Clinical Director of Kunde TCM |

ZH beauty page keywords include: 纽约中医美容, 法拉盛中医美容, 美容针灸 纽约, 7D HIFU 法拉盛, 皮秒激光 纽约, Medsculpt 纽约, 养颜中药

### 5. i18n
`src/lib/i18n.ts` extended with `dict.{zh,en}.team` and `dict.{zh,en}.beauty` namespaces. English is natural American phrasing, not literal translation.
  - e.g. beauty hero EN: "Kunde Beauty & Wellness — Timeless Wisdom, Modern Technology"
  - e.g. team subtitle: "8 位执照医师 + 4 位专业治疗师" / "8 Licensed Practitioners + 4 Specialty Therapists"

### 6. Placeholder images
Created 5 SVG placeholders with brand gradient pattern:
- `daojia-shibazi.svg`, `haiying-li.svg`, `shirley-li.svg`, `yang-lingyan.svg`
- Renamed `jia-na-xu.svg` → `jiana-xu.svg`

## Route verification
All 22 new routes returned 200 via preview fetch. Home booking section (`DoctorBookingSection`) now imports `licensedPractitioners` so it still shows 8 licensed doctors (not 12).

## Acuity booking links (from 方案 3.1, verbatim)
- Dr. Serene Feng 6953534
- Yang Gui 6954760
- Dixu Gao 7028544
- Senior Chang 12316332
- Chelsea Jin 7045822
- Alina Hu 9356857
- Jiana Xu 7028544
- **Prof. Suo An Feng — phone-only** (718-888-9087) → detail page shows "致电预约" / "Call to Book" instead of Book Online

## Lighthouse
Per the Step 3 precedent, dev-server Lighthouse scores are not representative. Deferred to Step 6 (Production Deploy & Performance) when the production build + CDN are in place.

## Known follow-ups for Step 5
- Real doctor portrait photography (placeholders in use)
- 中医专栏 / Blog section
- Conditions `generateStaticParams` expansion if new conditions requested
- 新患者指南 + 法拉盛分店 pages still pending

## File inventory
```
src/data/doctors.ts               (rewritten, ~585 lines)
src/data/conditions.ts            (slug sed: jia-na-xu → jiana-xu)
src/lib/i18n.ts                   (+team, +beauty ZH/EN namespaces)
src/lib/schema.ts                 (+physicianSchema, +beautyServiceSchema)
src/components/sections/DoctorBookingSection.tsx  (import fix)
src/app/[lang]/team/page.tsx                  (new)
src/app/[lang]/team/[slug]/page.tsx           (new)
src/app/[lang]/beauty/page.tsx                (new)
public/images/doctors/yang-lingyan.svg        (new)
public/images/doctors/shirley-li.svg          (new)
public/images/doctors/haiying-li.svg          (new)
public/images/doctors/daojia-shibazi.svg      (new)
public/images/doctors/jiana-xu.svg            (renamed)
```
