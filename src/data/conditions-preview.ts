// 15 conditions preview data for home page grid (3 cols x 5 rows)
// Full detail pages arrive in Step 3.

export interface ConditionPreview {
  slug: string;
  nameZh: string;
  nameEn: string;
  blurbZh: string;
  blurbEn: string;
  icon: string;
}

export const conditionsPreview: ConditionPreview[] = [
  {
    slug: 'fertility',
    nameZh: '不孕不育',
    nameEn: 'Fertility Support',
    blurbZh: '辅助 IVF/IUI，调经助孕',
    blurbEn: 'Acupuncture support for IVF, IUI & natural conception',
    icon: 'Baby',
  },
  {
    slug: 'pain-management',
    nameZh: '疼痛管理',
    nameEn: 'Pain Management',
    blurbZh: '颈肩腰腿痛、慢性疼痛',
    blurbEn: 'Chronic back, neck, joint and post-injury pain',
    icon: 'ShieldAlert',
  },
  {
    slug: 'womens-health',
    nameZh: '妇科调理',
    nameEn: "Women's Health",
    blurbZh: '月经不调、更年期、盆腔',
    blurbEn: 'Menstrual irregularities, menopause & pelvic health',
    icon: 'HeartPulse',
  },
  {
    slug: 'anxiety-depression',
    nameZh: '焦虑抑郁',
    nameEn: 'Anxiety & Depression',
    blurbZh: '情绪调节、失眠、压力',
    blurbEn: 'Mood balance, stress relief and emotional support',
    icon: 'Brain',
  },
  {
    slug: 'weight-loss',
    nameZh: '减重瘦身',
    nameEn: 'Weight Loss',
    blurbZh: '代谢调理、脂肪消解',
    blurbEn: 'Metabolic balance and sustainable weight management',
    icon: 'Scale',
  },
  {
    slug: 'muscle-tendon',
    nameZh: '筋骨伤痛',
    nameEn: 'Muscle & Tendon',
    blurbZh: '肌肉劳损、关节伤',
    blurbEn: 'Muscle strain, sprains and tendon recovery',
    icon: 'Bone',
  },
  {
    slug: 'herbal-beauty',
    nameZh: '汉方美容',
    nameEn: 'Herbal Beauty',
    blurbZh: '美颜针灸、内调外养',
    blurbEn: 'Facial acupuncture and inside-out skin rejuvenation',
    icon: 'Sparkles',
  },
  {
    slug: 'respiratory-health',
    nameZh: '呼吸道健康',
    nameEn: 'Respiratory Health',
    blurbZh: '肺炎预防、过敏气喘',
    blurbEn: 'Allergy, asthma and respiratory resilience',
    icon: 'Wind',
  },
  {
    slug: 'hypertension',
    nameZh: '三高调理',
    nameEn: 'Blood Pressure & Sugar',
    blurbZh: '高血压、高血脂、高血糖',
    blurbEn: 'Blood pressure, cholesterol and glucose balance',
    icon: 'Gauge',
  },
  {
    slug: 'facial-palsy',
    nameZh: '面瘫',
    nameEn: "Bell's Palsy",
    blurbZh: '面部神经麻痹康复',
    blurbEn: 'Facial nerve paralysis recovery with acupuncture',
    icon: 'Smile',
  },
  {
    slug: 'insomnia',
    nameZh: '失眠',
    nameEn: 'Insomnia',
    blurbZh: '安神助眠、调整作息',
    blurbEn: 'Sleep support, calming the mind and resetting rhythm',
    icon: 'Moon',
  },
  {
    slug: 'diabetes',
    nameZh: '糖尿病',
    nameEn: 'Diabetes Support',
    blurbZh: '血糖控制 · 并发症预防',
    blurbEn: 'Glucose support and complication prevention',
    icon: 'Droplets',
  },
  {
    slug: 'mens-health',
    nameZh: '男科健康',
    nameEn: "Men's Health",
    blurbZh: '前列腺、精力、亚健康',
    blurbEn: 'Prostate, vitality and sub-health recovery',
    icon: 'User',
  },
  {
    slug: 'digestive-health',
    nameZh: '胃肠调理',
    nameEn: 'Digestive Health',
    blurbZh: '胃炎、IBS、消化紊乱',
    blurbEn: 'Gastritis, IBS and digestive regulation',
    icon: 'Soup',
  },
  {
    slug: 'complex-conditions',
    nameZh: '疑难杂症',
    nameEn: 'Complex Conditions',
    blurbZh: '慢性疑难、多科会诊',
    blurbEn: 'Hard-to-treat and multi-system conditions',
    icon: 'Stethoscope',
  },
];
