// Latest 3 blog articles for home-page preview. Full blog system arrives in Step 5.
// Slugs are stable placeholders that the blog module will wire up later.

export interface BlogPreview {
  slug: string;
  titleZh: string;
  titleEn: string;
  excerptZh: string;
  excerptEn: string;
  category: string;
  date: string;
  cover: string;
}

export const blogPreview: BlogPreview[] = [
  {
    slug: 'acupuncture-for-ivf-support',
    titleZh: '针灸如何辅助 IVF/IUI — 坤德生育门诊真实案例',
    titleEn: 'How Acupuncture Supports IVF & IUI Cycles',
    excerptZh:
      '结合馮羅小潔院长 20 余年临床经验，解析针灸在促排、取卵、移植各阶段如何协同西医生殖医学提高成功率。',
    excerptEn:
      'Drawing on Dr. Serene Feng’s 20+ years of clinical experience, we explain how acupuncture works alongside reproductive medicine at every stage of the cycle.',
    category: '生育健康 · Fertility',
    date: '2026-03-18',
    cover: '/images/blog/ivf-support.svg',
  },
  {
    slug: 'flushing-herbal-pharmacy-behind-the-scenes',
    titleZh: '走进坤德中药房 — 冯所安教授如何为您配药',
    titleEn: 'Inside the Kunde Herbal Pharmacy — Meet Prof. Suo An Feng',
    excerptZh:
      '从药材采购到真空包装煎煮，院长亲自把关每一味药。我们带您走进法拉盛中药房幕后。',
    excerptEn:
      'From sourcing premium herbs to vacuum-sealing ready-to-drink decoctions, every step is personally supervised by our senior herbalist. Take a look inside.',
    category: '中药与药膳 · Herbal Medicine',
    date: '2026-03-04',
    cover: '/images/blog/herbal-pharmacy.svg',
  },
  {
    slug: 'chronic-pain-back-neck-relief',
    titleZh: '纽约上班族的颈腰疼痛 — 针灸 + 推拿组合怎么治',
    titleEn: 'Desk-Job Neck & Back Pain — The Acupuncture + Tui Na Combo',
    excerptZh:
      '长时间伏案工作导致的颈椎、腰椎不适，在坤德如何通过针灸与推拿的组合快速缓解。',
    excerptEn:
      'Eight hours at a desk wrecks your neck and lower back. Here’s how we combine acupuncture and Tui Na massage to get lasting relief — not just a temporary fix.',
    category: '疼痛管理 · Pain Relief',
    date: '2026-02-22',
    cover: '/images/blog/back-pain.svg',
  },
];
