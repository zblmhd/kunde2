// Patient testimonials — attributed to three real patients from ny-fsa.com
// (王小姐 · 李太太 · 郭先生). Detailed wording paraphrased for the site in
// patient voice; English version is an independent rewrite, not a translation.

export interface Testimonial {
  slug: string;
  nameZh: string;
  nameEn: string;
  date: string; // ISO
  treatmentZh: string;
  treatmentEn: string;
  quoteZh: string;
  quoteEn: string;
  rating: 5;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    slug: 'ms-wang',
    nameZh: '王小姐',
    nameEn: 'Ms. Wang',
    date: '2019-09-11',
    treatmentZh: '针灸调理 · 妇科',
    treatmentEn: 'Acupuncture · Women’s Health',
    quoteZh:
      '我因长期月经不调与压力过大来到坤德，馮医师耐心问诊、辨证施治。几次针灸加上中药调理后，睡眠改善了，气色也好了很多。最让我感动的是，她真的把我的身体当作她自己的在照顾。',
    quoteEn:
      'I came to Kunde because of irregular cycles and nonstop work stress. Dr. Feng took the time to really listen and treated the root cause rather than just the symptoms. After a few weeks of acupuncture and custom herbs, I was sleeping better and felt like myself again. What stood out most was how genuinely she cared.',
    rating: 5,
    avatar: '/images/testimonials/ms-wang.svg',
  },
  {
    slug: 'mrs-li',
    nameZh: '李太太',
    nameEn: 'Mrs. Li',
    date: '2019-11-20',
    treatmentZh: '中药调理 · 三高',
    treatmentEn: 'Herbal Medicine · Blood Pressure',
    quoteZh:
      '血压与血糖多年偏高，西药一直在吃但感觉越来越虚。经朋友介绍来找冯教授，他开的中药方是根据我的体质量身定制的，配合饮食建议坚持下来，半年后复查各项指标都明显好转，整个人也有力气了。',
    quoteEn:
      'My blood pressure and sugar had been creeping up for years despite my medications — I just felt drained. Prof. Feng put me on a custom herbal formula and gave me simple dietary changes to follow. Six months later, my numbers were noticeably better and, honestly, so was my energy. I wish I had started sooner.',
    rating: 5,
    avatar: '/images/testimonials/mrs-li.svg',
  },
  {
    slug: 'mr-guo',
    nameZh: '郭先生',
    nameEn: 'Mr. Guo',
    date: '2020-01-16',
    treatmentZh: '针灸 + 推拿 · 腰椎疼痛',
    treatmentEn: 'Acupuncture + Tui Na · Back Pain',
    quoteZh:
      '搬了一次重物之后腰就没好过，疼得晚上睡不着。在坤德做了针灸加推拿，桂陽医师手法很到位，两个疗程下来疼痛几乎消失了。他们还提醒我保险覆盖了治疗费用，办手续也非常方便。',
    quoteEn:
      'I threw my back out lifting something and the pain kept me up at night. At Kunde, Dr. Yang Gui combined acupuncture with Tui Na — you can feel right away that he knows what he’s doing. After two rounds of treatment I was basically pain-free. They also handled all the insurance paperwork for me, which made the whole thing stress-free.',
    rating: 5,
    avatar: '/images/testimonials/mr-guo.svg',
  },
];
