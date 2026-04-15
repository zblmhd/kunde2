// Generate SVG placeholder images for Step 2.
// Real Envato photos replace these in Step 6.
//
// Run: node scripts/gen-placeholders.mjs

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images');

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

// Hero
writeSvg(
  'hero-key.svg',
  1600,
  900,
  '#3b3423',
  '#dd9933',
  '坤德中医养生轩',
  'Kunde TCM · Flushing · Manhattan · Middletown',
);

// About hero
writeSvg(
  'about-hero.svg',
  1600,
  700,
  '#b58129',
  '#3b3423',
  'About Kunde TCM',
  'Rooted in Flushing for 20+ years',
);

// Doctors
const doctors = [
  ['serene-feng', 'Dr. Serene Feng'],
  ['suoan-feng', 'Prof. Suo An Feng'],
  ['yang-gui', 'Dr. Yang Gui'],
  ['dixu-gao', 'Dr. Dixu Gao'],
  ['senior-chang', 'Senior Chang'],
  ['chelsea-jin', 'Dr. Chelsea Jin'],
  ['alina-hu', 'Dr. Alina Hu'],
  ['jia-na-xu', 'Dr. Jia Na Xu'],
];
for (const [slug, name] of doctors) {
  writeSvg(
    `doctors/${slug}.svg`,
    400,
    500,
    '#dd9933',
    '#b58129',
    name,
    'L.Ac. · Kunde TCM',
  );
}

// Testimonials
for (const [slug, name] of [
  ['ms-wang', 'Ms. Wang'],
  ['mrs-li', 'Mrs. Li'],
  ['mr-guo', 'Mr. Guo'],
]) {
  writeSvg(`testimonials/${slug}.svg`, 160, 160, '#d4d4c8', '#b58129', name);
}

// Blog covers
for (const [slug, title] of [
  ['ivf-support', 'IVF Support'],
  ['herbal-pharmacy', 'Herbal Pharmacy'],
  ['back-pain', 'Back Pain Relief'],
]) {
  writeSvg(`blog/${slug}.svg`, 800, 500, '#3b3423', '#dd9933', title, 'Kunde TCM Journal');
}

console.log('done.');
