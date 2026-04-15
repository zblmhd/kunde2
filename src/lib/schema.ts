// JSON-LD schema builders — strictly real NAP per 4.1.1 & 4.8 of the spec.
// Do NOT add unverified sameAs URLs (Google Business / Yelp / FB) until they
// are confirmed after launch (R08 principle in the plan).

import type { Locale } from './i18n';
import type { Clinic } from '@/data/clinics';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kunde-tcm.com';

/** Home-page MedicalBusiness (Sanford Ave flagship). */
export function medicalBusinessSchema(locale: Locale) {
  const zh = locale === 'zh';
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${SITE_URL}/${locale}#medicalbusiness`,
    name: 'New York Four Seasons Acupuncture PC',
    alternateName: zh
      ? [
          '坤德中医养生轩',
          '坤德中医',
          '纽约中医诊所',
          '纽约针灸诊所',
          '法拉盛中医诊所',
        ]
      : [
          'Kunde TCM',
          'Acupuncture Clinic NYC',
          'TCM Clinic NYC',
          'Chinese Medicine Clinic NYC',
          'Best Acupuncture NYC',
        ],
    description: zh
      ? '坤德中医是纽约权威中医诊所与针灸诊所，法拉盛3家+曼哈顿+米德尔顿共5家分店，8位纽约州执照针灸师，提供针灸、中药、推拿、拔罐全科诊疗，接受主流保险。'
      : "Kunde TCM is New York's trusted Chinese Medicine clinic — 5 locations in Flushing, Manhattan, and Middletown, 8 NY State-licensed acupuncturists, and most insurance accepted.",
    url: `${SITE_URL}/${locale}`,
    telephone: '+1-718-888-9087',
    email: 'ny4sacu@gmail.com',
    medicalSpecialty: ['Acupuncture', 'TraditionalChineseMedicine'],
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Insurance, Cash, Credit Card',
    keywords: zh
      ? '纽约中医诊所, 纽约针灸诊所, 纽约中医, 纽约针灸, 法拉盛中医, 中医诊所, 针灸诊所, 法拉盛中医诊所'
      : 'Acupuncture NYC, Acupuncture Clinic NYC, TCM Clinic, TCM NYC, Chinese Medicine NYC, Chinese Medicine Clinic NYC, Traditional Chinese Medicine Clinic, Best Acupuncture NYC, Acupuncture Flushing, Herbal Medicine NYC',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:30',
      closes: '18:30',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '143-07 Sanford Ave., #1A',
      addressLocality: 'Flushing',
      addressRegion: 'NY',
      postalCode: '11355',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7585664,
      longitude: -73.8253212,
    },
  };
}

/** FAQPage schema — feeds ChatGPT/Perplexity/SGE directly. */
export function faqPageSchema(
  faqs: ReadonlyArray<{ q: string; a: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

/** BreadcrumbList schema — used on every non-home page. */
export function breadcrumbSchema(
  items: ReadonlyArray<{ label: string; href: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

/** MedicalTherapy schema for /[lang]/methods/[slug] detail pages. */
export function medicalTherapySchema(params: {
  locale: Locale;
  slug: string;
  name: string;
  alternateName: string[];
  description: string;
  keywords: string;
}) {
  const { locale, slug, name, alternateName, description, keywords } = params;
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    '@id': `${SITE_URL}/${locale}/methods/${slug}#therapy`,
    name,
    alternateName,
    description,
    keywords,
    url: `${SITE_URL}/${locale}/methods/${slug}`,
    relevantSpecialty: ['Acupuncture', 'TraditionalChineseMedicine'],
    recognizingAuthority: {
      '@type': 'Organization',
      name: 'New York State Department of Education — Licensed Acupuncturist',
    },
    provider: {
      '@type': 'MedicalBusiness',
      name: 'New York Four Seasons Acupuncture PC',
      url: `${SITE_URL}/${locale}`,
      telephone: '+1-718-888-9087',
    },
  };
}

/** MedicalCondition schema for /[lang]/conditions/[slug] detail pages. */
export function medicalConditionSchema(params: {
  locale: Locale;
  slug: string;
  name: string;
  alternateName: string[];
  description: string;
  keywords: string;
  possibleTreatment?: string[];
}) {
  const {
    locale,
    slug,
    name,
    alternateName,
    description,
    keywords,
    possibleTreatment = [],
  } = params;
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    '@id': `${SITE_URL}/${locale}/conditions/${slug}#condition`,
    name,
    alternateName,
    description,
    keywords,
    url: `${SITE_URL}/${locale}/conditions/${slug}`,
    possibleTreatment: possibleTreatment.map((t) => ({
      '@type': 'MedicalTherapy',
      name: t,
    })),
    associatedAnatomy: undefined,
  };
}

/** Physician schema for /[lang]/team/[slug] detail pages. */
export function physicianSchema(params: {
  locale: Locale;
  slug: string;
  name: string;
  alternateName?: string[];
  description: string;
  image: string;
  credentials: string;
  languages: string[];
  medicalSpecialty?: string[];
  keywords?: string;
}) {
  const {
    locale,
    slug,
    name,
    alternateName = [],
    description,
    image,
    credentials,
    languages,
    medicalSpecialty = ['Acupuncture', 'TraditionalChineseMedicine'],
    keywords,
  } = params;
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${SITE_URL}/${locale}/team/${slug}#physician`,
    name,
    alternateName,
    description,
    image: image.startsWith('http') ? image : `${SITE_URL}${image}`,
    url: `${SITE_URL}/${locale}/team/${slug}`,
    medicalSpecialty,
    knowsLanguage: languages,
    keywords,
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: credentials,
        recognizedBy: {
          '@type': 'Organization',
          name: 'New York State Department of Education — Licensed Acupuncturist',
        },
      },
    ],
    worksFor: {
      '@type': 'MedicalBusiness',
      '@id': `${SITE_URL}/${locale}#medicalbusiness`,
      name: 'New York Four Seasons Acupuncture PC',
      url: `${SITE_URL}/${locale}`,
      telephone: '+1-718-888-9087',
    },
  };
}

/** Service schema for /[lang]/beauty service table entries. */
export function beautyServiceSchema(params: {
  locale: Locale;
  name: string;
  description: string;
  category?: string;
}) {
  const { locale, name, description, category = 'Beauty & Aesthetic Service' } = params;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType: category,
    category,
    areaServed: {
      '@type': 'City',
      name: 'New York City',
    },
    provider: {
      '@type': 'MedicalBusiness',
      '@id': `${SITE_URL}/${locale}#medicalbusiness`,
      name: 'New York Four Seasons Acupuncture PC',
      url: `${SITE_URL}/${locale}`,
      telephone: '+1-718-888-9087',
    },
  };
}

/**
 * LocalBusiness (MedicalBusiness) schema for an individual clinic.
 * Per 方案 4.1.1 F — each of the 5 clinics must emit its own JSON-LD
 * with alternateName arrays saturated with local keywords.
 */
export function clinicLocalBusinessSchema(params: {
  locale: Locale;
  clinic: Clinic;
}) {
  const { locale, clinic } = params;
  const zh = locale === 'zh';
  const dayMap: Record<string, string> = {
    Mo: 'Monday',
    Tu: 'Tuesday',
    We: 'Wednesday',
    Th: 'Thursday',
    Fr: 'Friday',
    Sa: 'Saturday',
    Su: 'Sunday',
  };
  const openingHours = clinic.hours.spec.map((s) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: s.days.map((d) => dayMap[d]),
    opens: s.opens,
    closes: s.closes,
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${SITE_URL}/${locale}/contact#clinic-${clinic.slug}`,
    name: zh ? clinic.nameZh : clinic.nameEn,
    alternateName: zh ? clinic.alternateNameZh : clinic.alternateNameEn,
    description: zh
      ? `坤德中医 ${clinic.shortZh} — 法拉盛/曼哈顿/米德尔顿 5 家分店之一，8 位纽约州执照针灸师，针灸、中药、推拿、拔罐全科诊疗，接受主流保险。`
      : `Kunde TCM ${clinic.shortEn} — one of 5 locations across Flushing, Manhattan, and the Hudson Valley, staffed by NY State-licensed acupuncturists. Most major insurance accepted.`,
    url: `${SITE_URL}/${locale}/contact#${clinic.slug}`,
    telephone: clinic.phoneSchema,
    email: clinic.email,
    medicalSpecialty: ['Acupuncture', 'TraditionalChineseMedicine'],
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Insurance, Cash, Credit Card',
    keywords: zh
      ? '法拉盛中医诊所, 法拉盛中医, 法拉盛针灸, 纽约中医诊所, 纽约针灸诊所, 法拉盛中药调理'
      : 'Acupuncture Flushing, Chinese Medicine Clinic Flushing, Chinese Herbal Medicine Flushing, Acupuncture Clinic NYC, TCM Clinic NYC, Best Acupuncture NYC',
    address: {
      '@type': 'PostalAddress',
      ...clinic.address,
    },
    ...(clinic.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: clinic.geo.latitude,
        longitude: clinic.geo.longitude,
      },
    }),
    openingHoursSpecification: openingHours,
    parentOrganization: {
      '@type': 'MedicalBusiness',
      '@id': `${SITE_URL}/${locale}#medicalbusiness`,
      name: 'New York Four Seasons Acupuncture PC',
    },
  };
}

/** Article + MedicalWebPage schema for /[lang]/blog/[slug] */
export function articleSchema(params: {
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  image: string;
  authorName: string;
  datePublished: string;
  keywords: string;
}) {
  const {
    locale,
    slug,
    title,
    description,
    image,
    authorName,
    datePublished,
    keywords,
  } = params;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${SITE_URL}/${locale}/blog/${slug}#article`,
      headline: title,
      description,
      image: image.startsWith('http') ? image : `${SITE_URL}${image}`,
      datePublished,
      dateModified: datePublished,
      author: {
        '@type': 'Person',
        name: authorName,
      },
      publisher: {
        '@type': 'MedicalBusiness',
        '@id': `${SITE_URL}/${locale}#medicalbusiness`,
        name: 'New York Four Seasons Acupuncture PC',
      },
      mainEntityOfPage: `${SITE_URL}/${locale}/blog/${slug}`,
      keywords,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      '@id': `${SITE_URL}/${locale}/blog/${slug}#medicalwebpage`,
      name: title,
      description,
      url: `${SITE_URL}/${locale}/blog/${slug}`,
      about: {
        '@type': 'MedicalCondition',
        name: keywords,
      },
      audience: {
        '@type': 'MedicalAudience',
        audienceType: 'Patient',
      },
      lastReviewed: datePublished,
      reviewedBy: {
        '@type': 'Physician',
        name: authorName,
      },
    },
  ];
}

/**
 * About page — AggregateRating placeholder (4.1.1 E-E-A-T).
 * Filled with real Google Business values after launch.
 * For now we publish the MedicalBusiness entity without aggregateRating
 * (we do NOT fabricate ratings per the R08 principle).
 */
export function aboutMedicalBusinessSchema(locale: Locale) {
  const base = medicalBusinessSchema(locale);
  return {
    ...base,
    '@id': `${SITE_URL}/${locale}/about#medicalbusiness`,
    url: `${SITE_URL}/${locale}/about`,
    // aggregateRating will be added once Google reviews are pulled in Step 6.
  };
}
