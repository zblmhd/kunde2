// Kunde TCM — 5 real clinic locations.
// Source: ny-fsa.com/en/locations/ ; NAP verbatim per 方案 3.9 + 4.8.
// DO NOT modify addresses / phones without re-verifying against 4.8 NAP spec.

export interface ClinicHours {
  // Used both as display string and OpeningHoursSpecification source.
  displayZh: string;
  displayEn: string;
  spec: Array<{ days: string[]; opens: string; closes: string }>;
}

export interface ClinicMap {
  /** Full iframe HTML — embed as-is per 方案 3.9. */
  iframe: string;
  placeId: string;
}

export interface Clinic {
  slug: string;
  /** SEO-locked H3 heading for ZH contact page (per 4.1.1 F). */
  cardH3Zh: string;
  /** SEO-locked H3 heading for EN contact page (per 4.1.1 F). */
  cardH3En: string;
  /** Short label used in forms / selectors. */
  shortZh: string;
  shortEn: string;
  /** Full business name (per 4.8 NAP spec). */
  nameEn: string;
  nameZh: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: 'US';
  };
  /** One-line address for display. */
  fullAddress: string;
  /** Optional entrance note (ZH/EN). */
  entranceZh?: string;
  entranceEn?: string;
  /** Primary phone (display formatted, +1 prefixed for Schema). */
  phoneDisplay: string;
  phoneSchema: string;
  email: string;
  hours: ClinicHours;
  /** Geo coordinates (from Google Place ID). */
  geo?: { latitude: number; longitude: number };
  /** Google Maps iframe (only 3 of 5 provided per 方案 3.9). */
  map?: ClinicMap;
  /** Transit tip for display. */
  transitZh?: string;
  transitEn?: string;
  /** alternateName arrays for LocalBusiness JSON-LD (per 4.1.1 F). */
  alternateNameZh: string[];
  alternateNameEn: string[];
}

export const clinics: Clinic[] = [
  // ───────────── Clinic 1 — Sanford Ave (Flagship) ─────────────
  {
    slug: 'sanford',
    cardH3Zh: '三福大道院所 — 法拉盛中医诊所（Sanford Ave 主店）',
    cardH3En: 'Sanford Ave — Our Flagship Chinese Medicine Clinic Flushing',
    shortZh: '法拉盛 · 三福大道主店',
    shortEn: 'Flushing — Sanford Ave (Flagship)',
    nameEn: 'New York Four Seasons Acupuncture PC — Sanford Ave',
    nameZh: '坤德中医养生轩 · 三福大道店',
    address: {
      streetAddress: '143-07 Sanford Ave., #1A',
      addressLocality: 'Flushing',
      addressRegion: 'NY',
      postalCode: '11355',
      addressCountry: 'US',
    },
    fullAddress: '143-07 Sanford Ave., #1A, Flushing, NY 11355',
    entranceZh: '入口在 Bowne Street',
    entranceEn: 'Entrance on Bowne Street',
    phoneDisplay: '(718) 888-9087',
    phoneSchema: '+1-718-888-9087',
    email: 'ny4sacu@gmail.com',
    hours: {
      displayZh: '周一至周日 · 9:30 AM – 6:30 PM',
      displayEn: 'Monday – Sunday · 9:30 AM – 6:30 PM',
      spec: [
        {
          days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          opens: '09:30',
          closes: '18:30',
        },
      ],
    },
    geo: { latitude: 40.7585664, longitude: -73.8253212 },
    map: {
      iframe:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1572333857625!2d-73.82532122397195!3d40.75856637138667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26116087f22dd%3A0xefe1c3bc608145b!2z5Z2k5b635Lit5Yy75YW755Sf6L2pICjkuInnpo_lupcpIHwgTlkgRm91ciBTZWFzb25zIEFjdXB1bmN0dXJl!5e0!3m2!1szh-CN!2sus!4v1776244595296!5m2!1szh-CN!2sus" width="100%" height="360" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      placeId: '0x89c26116087f22dd:0xefe1c3bc608145b',
    },
    transitZh: '近 7 号线 Main St – Flushing 站，步行 8 分钟',
    transitEn: '8-min walk from the 7 train at Main St – Flushing',
    alternateNameZh: [
      '坤德中医养生轩 · 三福大道店',
      '法拉盛中医诊所',
      '法拉盛中医',
      '法拉盛针灸',
      '纽约中医诊所',
    ],
    alternateNameEn: [
      'Kunde TCM — Sanford Ave',
      'Acupuncture Flushing',
      'Chinese Medicine Clinic Flushing',
      'Chinese Herbal Medicine Flushing',
      'TCM Clinic NYC',
    ],
  },

  // ───────────── Clinic 2 — 37th Ave (New Flagship) ─────────────
  {
    slug: '37th-ave',
    cardH3Zh: '37 大道旗舰店 — 法拉盛针灸诊所',
    cardH3En: '37th Ave — Acupuncture Flushing (New Flagship)',
    shortZh: '法拉盛 · 37 大道旗舰店',
    shortEn: 'Flushing — 37th Ave (New Flagship)',
    nameEn: 'New York Four Seasons Acupuncture PC — 37th Ave Flagship',
    nameZh: '坤德中医养生轩 · 37 大道旗舰店',
    address: {
      streetAddress: '14336 37th Ave., Suite 1',
      addressLocality: 'Flushing',
      addressRegion: 'NY',
      postalCode: '11354',
      addressCountry: 'US',
    },
    fullAddress: '14336 37th Ave., Suite 1, Flushing, NY 11354',
    phoneDisplay: '(718) 489-1828',
    phoneSchema: '+1-718-489-1828',
    email: 'ny4sacu@gmail.com',
    hours: {
      displayZh: '一周七日 · 9:30 AM – 6:30 PM',
      displayEn: 'Seven days a week · 9:30 AM – 6:30 PM',
      spec: [
        {
          days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          opens: '09:30',
          closes: '18:30',
        },
      ],
    },
    geo: { latitude: 40.759365, longitude: -73.831856 },
    map: {
      iframe:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.2418170016535!2d-73.83185578130677!3d40.759365361731746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26016c2427543%3A0x7c58da036afd4b0!2z5Z2k5b635Lit5Yy75YW755Sf6L2p5LioTmV3IFlvcmsgRm91ciBTZWFzb25zIEFjdXB1bmN0dXJlIFBD!5e0!3m2!1szh-CN!2sus!4v1776244631207!5m2!1szh-CN!2sus" width="100%" height="360" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      placeId: '0x89c26016c2427543:0x7c58da036afd4b0',
    },
    transitZh: '近 7 号线 Main St – Flushing 站，步行 5 分钟',
    transitEn: '5-min walk from the 7 train at Main St – Flushing',
    alternateNameZh: [
      '坤德中医养生轩 · 37 大道旗舰店',
      '法拉盛针灸诊所',
      '法拉盛针灸',
      '法拉盛中医',
      '纽约针灸诊所',
    ],
    alternateNameEn: [
      'Kunde TCM — 37th Ave Flagship',
      'Acupuncture Flushing',
      'Chinese Medicine Clinic Flushing',
      'Acupuncture Clinic NYC',
      'Chinese Herbal Medicine Flushing',
    ],
  },

  // ───────────── Clinic 3 — Golden Office (41st Rd) ─────────────
  {
    slug: 'golden',
    cardH3Zh: '黄金大厦院所 — 41 大道法拉盛中医',
    cardH3En: 'Golden Office — Chinese Herbal Medicine Flushing on 41st Rd',
    shortZh: '法拉盛 · 黄金大厦（41 大道）',
    shortEn: 'Flushing — Golden Office (41st Rd)',
    nameEn: 'New York Four Seasons Acupuncture PC — Golden Office',
    nameZh: '坤德中医养生轩 · 黄金大厦店',
    address: {
      streetAddress: '133-38 41st Road CS8',
      addressLocality: 'Flushing',
      addressRegion: 'NY',
      postalCode: '11355',
      addressCountry: 'US',
    },
    fullAddress: '133-38 41st Road CS8, Flushing, NY 11355',
    entranceZh: '入口在 41st Road',
    entranceEn: 'Entrance on 41st Road',
    phoneDisplay: '(646) 320-9278',
    phoneSchema: '+1-646-320-9278',
    email: 'ny4sacu@gmail.com',
    hours: {
      displayZh: '周一至周日 · 9:30 AM – 6:30 PM',
      displayEn: 'Monday – Sunday · 9:30 AM – 6:30 PM',
      spec: [
        {
          days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          opens: '09:30',
          closes: '18:30',
        },
      ],
    },
    transitZh: '近 7 号线 Main St – Flushing 站，步行 6 分钟',
    transitEn: '6-min walk from the 7 train at Main St – Flushing',
    alternateNameZh: [
      '坤德中医养生轩 · 黄金大厦店',
      '法拉盛中医',
      '法拉盛中医诊所',
      '法拉盛中药调理',
      '法拉盛针灸',
    ],
    alternateNameEn: [
      'Kunde TCM — Golden Office',
      'Chinese Herbal Medicine Flushing',
      'Chinese Medicine Clinic Flushing',
      'Acupuncture Flushing',
      'Herbal Medicine NYC',
    ],
  },

  // ───────────── Clinic 4 — Manhattan Midtown ─────────────
  {
    slug: 'manhattan',
    cardH3Zh: '曼哈顿中城店 — 曼哈顿针灸诊所',
    cardH3En: 'Midtown Manhattan — Acupuncture Clinic NYC',
    shortZh: '曼哈顿中城店',
    shortEn: 'Midtown Manhattan',
    nameEn: 'New York Four Seasons Acupuncture PC — Midtown Manhattan',
    nameZh: '坤德中医养生轩 · 曼哈顿中城店',
    address: {
      streetAddress: '150 E 55th Street',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10022',
      addressCountry: 'US',
    },
    fullAddress: '150 E 55th Street, Manhattan, NY 10022',
    phoneDisplay: '(888) 234-1588',
    phoneSchema: '+1-888-234-1588',
    email: 'ny4sacu@gmail.com',
    hours: {
      displayZh:
        '周六–周一 9:00 AM – 7:00 PM · 周二 & 周五 8:00 AM – 9:00 PM · 周三 & 周四 9:00 AM – 9:00 PM',
      displayEn:
        'Sat–Mon 9:00 AM – 7:00 PM · Tue & Fri 8:00 AM – 9:00 PM · Wed & Thu 9:00 AM – 9:00 PM',
      spec: [
        { days: ['Sa', 'Su', 'Mo'], opens: '09:00', closes: '19:00' },
        { days: ['Tu', 'Fr'], opens: '08:00', closes: '21:00' },
        { days: ['We', 'Th'], opens: '09:00', closes: '21:00' },
      ],
    },
    transitZh: '近 E / M / 6 号线 Lexington Ave / 51 St 站',
    transitEn: 'Near the E / M / 6 trains at Lexington Ave / 51 St',
    alternateNameZh: [
      '坤德中医养生轩 · 曼哈顿中城店',
      '曼哈顿针灸诊所',
      '曼哈顿针灸',
      '纽约中医诊所',
      '纽约针灸诊所',
    ],
    alternateNameEn: [
      'Kunde TCM — Midtown Manhattan',
      'Acupuncture Clinic NYC',
      'Manhattan Acupuncture Midtown',
      'Chinese Medicine Clinic NYC',
      'Best Acupuncture NYC',
    ],
  },

  // ───────────── Clinic 5 — Middletown (Orange County) ─────────────
  {
    slug: 'middletown',
    cardH3Zh: '米德尔顿院所 — 橙县纽约中医',
    cardH3En: 'Middletown — Orange County Chinese Medicine Clinic',
    shortZh: '米德尔顿（橙县）',
    shortEn: 'Middletown (Orange County)',
    nameEn: 'New York Four Seasons Acupuncture PC — Middletown',
    nameZh: '坤德中医养生轩 · 米德尔顿院所',
    address: {
      streetAddress: '285 Rte 211 W, Suite 3',
      addressLocality: 'Middletown',
      addressRegion: 'NY',
      postalCode: '10940',
      addressCountry: 'US',
    },
    fullAddress: '285 Rte 211 W, Suite 3, Middletown, NY 10940',
    phoneDisplay: '(845) 239-4866',
    phoneSchema: '+1-845-239-4866',
    email: 'orange@phoenixcarehealth.com',
    hours: {
      displayZh: '一周七日 · 9:30 AM – 6:30 PM',
      displayEn: 'Seven days a week · 9:30 AM – 6:30 PM',
      spec: [
        {
          days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          opens: '09:30',
          closes: '18:30',
        },
      ],
    },
    geo: { latitude: 41.459324, longitude: -74.443594 },
    map: {
      iframe:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.0733738865406!2d-74.44359438783741!3d41.45932389140949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c333e92afb1abf%3A0x242750d704f6b758!2sNew%20York%20Four%20Seasons%20Acupuncture%20PC!5e0!3m2!1szh-CN!2sus!4v1776244733872!5m2!1szh-CN!2sus" width="100%" height="360" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      placeId: '0x89c333e92afb1abf:0x242750d704f6b758',
    },
    transitZh: '自驾或近 Middletown Transit Center，Route 211 交叉口',
    transitEn: 'Drive or transit via the Middletown Transit Center on Rte 211',
    alternateNameZh: [
      '坤德中医养生轩 · 米德尔顿院所',
      '橙县中医诊所',
      '米德尔顿针灸',
      '纽约中医',
      '纽约针灸',
    ],
    alternateNameEn: [
      'Kunde TCM — Middletown',
      'Orange County Chinese Medicine Clinic',
      'Middletown Acupuncture',
      'Acupuncture Clinic NYC',
      'TCM Clinic NYC',
    ],
  },
];

export function getClinic(slug: string): Clinic | undefined {
  return clinics.find((c) => c.slug === slug);
}
