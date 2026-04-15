// Generate SVG placeholder images for Step 3 — methods + conditions.
// Real Envato photos replace these in Step 6.
//
// Run: node scripts/gen-step3-placeholders.mjs

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  'public',
  'images',
);

function ensure(p) {
  mkdirSync(dirname(p), { recursive: true });
}

function writeSvg(rel, w, h, bg, fg, label, subtitle = '') {
  const path = join(root, rel);
  ensure(path);
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bg}"/>
      <stop offset="100%" stop-color="${fg}"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <g font-family="Georgia, 'Noto Serif SC', serif" fill="#ffffff" text-anchor="middle">
    <text x="${w / 2}" y="${h / 2 - 10}" font-size="${Math.round(h / 10)}" font-weight="700">${label}</text>
    ${subtitle ? `<text x="${w / 2}" y="${h / 2 + Math.round(h / 14)}" font-size="${Math.round(h / 22)}" opacity="0.85">${subtitle}</text>` : ''}
  </g>
</svg>`;
  writeFileSync(path, svg);
  console.log('wrote', rel);
}

// Methods (8)
const methods = [
  ['acupuncture', 'Acupuncture', '针灸'],
  ['herbal-medicine', 'Chinese Herbal Medicine', '中药调理'],
  ['bianstone', 'Bianstone & Hot Stone', '砭石热石'],
  ['tuina', 'Tui Na Massage', '经络推拿'],
  ['cupping', 'Cupping Therapy', '拔罐'],
  ['moxibustion-guasha', 'Moxibustion & Gua Sha', '艾灸刮痧'],
  ['sanfutie', 'Sanfutie Stickers', '三伏贴'],
  ['medicated-bath', 'Medicated Herbal Bath', '药浴'],
];
for (const [slug, en, zh] of methods) {
  writeSvg(
    `methods/${slug}.svg`,
    1200,
    675,
    '#3b3423',
    '#dd9933',
    en,
    `坤德中医 · ${zh}`,
  );
}

// Conditions (15)
const conditions = [
  ['fertility', 'Fertility Care', '不孕不育'],
  ['pain-management', 'Pain Management', '疼痛管理'],
  ['womens-health', "Women's Health", '妇科调理'],
  ['anxiety-depression', 'Anxiety & Depression', '焦虑抑郁'],
  ['weight-loss', 'Weight Management', '体重管理'],
  ['muscle-tendon', 'Muscle & Tendon Care', '筋骨调理'],
  ['herbal-beauty', 'TCM Beauty', '中医美容'],
  ['respiratory-health', 'Respiratory Health', '呼吸系统'],
  ['hypertension', 'Hypertension & Three Highs', '三高调理'],
  ['facial-palsy', "Facial Palsy / Bell's Palsy", '面瘫'],
  ['insomnia', 'Insomnia & Sleep', '失眠安神'],
  ['diabetes', 'Diabetes / Xiaoke', '消渴糖尿'],
  ['mens-health', "Men's Health", '男科'],
  ['digestive-health', 'Digestive Health', '脾胃调理'],
  ['complex-conditions', 'Complex & Chronic', '疑难杂症'],
];
for (const [slug, en, zh] of conditions) {
  writeSvg(
    `conditions/${slug}.svg`,
    1200,
    675,
    '#b58129',
    '#3b3423',
    en,
    `Kunde TCM · ${zh}`,
  );
}

console.log('done.');
