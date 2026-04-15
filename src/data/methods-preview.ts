// 8 treatment methods preview data for home page grid
// Full detail pages arrive in Step 3.

export interface MethodPreview {
  slug: string;
  nameZh: string;
  nameEn: string;
  taglineZh: string;
  taglineEn: string;
  /** Lucide icon name */
  icon: string;
}

export const methodsPreview: MethodPreview[] = [
  {
    slug: 'acupuncture',
    nameZh: '针灸',
    nameEn: 'Acupuncture',
    taglineZh: '体针 · 耳针 · 电针，疏通经络、调和气血',
    taglineEn: 'Body, auricular & electro-acupuncture to restore balance',
    icon: 'Activity',
  },
  {
    slug: 'herbal-medicine',
    nameZh: '中药与药膳食疗',
    nameEn: 'Chinese Herbal Medicine',
    taglineZh: '量身定制汤剂，真空包装便捷服用',
    taglineEn: 'Custom herbal formulas, vacuum-sealed for convenience',
    icon: 'Leaf',
  },
  {
    slug: 'bianstone',
    nameZh: '砭石热石疗法',
    nameEn: 'Bianstone & Hot Stone',
    taglineZh: '天然泗滨砭石 + 火山岩，舒缓深层紧张',
    taglineEn: 'Volcanic minerals that ease pain and deep tension',
    icon: 'Gem',
  },
  {
    slug: 'tuina',
    nameZh: '经络推拿与踩背',
    nameEn: 'Tui Na Massage',
    taglineZh: '循行经络腧穴，疏通气血、解除痛点',
    taglineEn: 'Meridian-based massage that targets pain at its source',
    icon: 'Hand',
  },
  {
    slug: 'cupping',
    nameZh: '拔罐',
    nameEn: 'Cupping Therapy',
    taglineZh: '气罐 · 火罐 · 药罐，促进循环、祛除风寒',
    taglineEn: 'Gentle suction to boost circulation and release tension',
    icon: 'Circle',
  },
  {
    slug: 'moxibustion-guasha',
    nameZh: '艾灸与刮痧',
    nameEn: 'Moxibustion & Gua Sha',
    taglineZh: '艾灸补阳益气 · 刮痧排毒去淤',
    taglineEn: 'Warming moxa and gentle scraping for fast relief',
    icon: 'Flame',
  },
  {
    slug: 'sanfutie',
    nameZh: '三伏贴',
    nameEn: 'Sanfutie Stickers',
    taglineZh: '冬病夏治，改善过敏与呼吸道宿疾',
    taglineEn: 'Seasonal herbal patches for allergies & respiratory health',
    icon: 'Sun',
  },
  {
    slug: 'medicated-bath',
    nameZh: '药浴',
    nameEn: 'Medicated Herbal Bath',
    taglineZh: '热疗 + 水疗 + 草药，全身经皮吸收',
    taglineEn: 'Herbal immersion combining heat, hydrotherapy & botanicals',
    icon: 'Droplet',
  },
];
