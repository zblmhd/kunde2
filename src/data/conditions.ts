// Full bilingual data for the 15 primary conditions (/[lang]/conditions/[slug]).
// Chinese copy is adapted from scheme section 3.6 (ny-fsa.com source material),
// including the seven expanded narratives for respiratory / three-highs /
// facial-palsy / insomnia / diabetes / men's health / digestive health.
// English copy is rewritten for US Western audiences, NOT a direct translation.
// No medical data is fabricated; claims reflect what ny-fsa.com states publicly.

import type { FAQ } from './methods';

export interface Condition {
  slug: string;
  icon: string;
  image: string;

  nameZh: string;
  nameEn: string;
  taglineZh: string;
  taglineEn: string;

  /** Opening paragraph (200–300 chars) with both Western & TCM view */
  openingZh: string;
  openingEn: string;

  /** Classical quote (optional, zh only) */
  quoteZh?: string;

  /** TCM pattern understanding (辨证) — bullet list */
  tcmViewZh: string[];
  tcmViewEn: string[];

  /** Common symptoms / self-check list */
  symptomsZh: string[];
  symptomsEn: string[];

  /** How we treat — free paragraph + methods */
  treatmentZh: string;
  treatmentEn: string;

  /** Method slugs used for this condition (drives cross-links) */
  relatedMethodSlugs: string[];

  /** Optional short case study */
  caseZh?: string;
  caseEn?: string;

  /** Distinctive advantage / highlight */
  highlightZh?: string;
  highlightEn?: string;

  faqZh: FAQ[];
  faqEn: FAQ[];

  relatedDoctors: string[];
}

export const conditions: Condition[] = [
  // ── 1. Fertility ────────────────────────────────────────────────
  {
    slug: 'fertility',
    icon: 'Baby',
    image: '/images/conditions/fertility.svg',
    nameZh: '不孕、不育',
    nameEn: 'Fertility & Reproductive Health',
    taglineZh: '把身体调养好，你可以很自然地怀上宝宝',
    taglineEn: 'Prepare your body — conception often follows naturally',
    openingZh:
      '"把身体调养好，妳可以很自然怀上宝宝。" 这是馮羅小潔院长常对患者说的一句话。中医强调调理脾胃、月经、血气循环对怀孕的重要性，我们针对肾精不足、气血两虚、宫寒宫热、肝郁气滞等不同证型个性化用药，同时可与西医 IVF/IUI 疗程协同增效。夫妻共同治疗，效果更佳。',
    openingEn:
      'Struggling to conceive — whether naturally or through IVF — can be one of life\'s most stressful experiences. At Kunde TCM, we take a whole-body approach to fertility, using acupuncture, herbal medicine, and dietary therapy to optimize your reproductive health. Many of our patients have achieved successful pregnancies after integrating TCM with their existing fertility treatments, and we always welcome both partners into care.',
    tcmViewZh: [
      '肾精不足 — 先天禀赋或年久亏损',
      '气血两虚 — 月经量少色淡、面色萎黄',
      '宫寒 / 宫热 — 寒热失衡影响着床',
      '肝郁气滞 — 压力导致排卵与周期紊乱',
    ],
    tcmViewEn: [
      'Kidney essence deficiency — either constitutional or worn down over time',
      'Qi and blood deficiency — pale complexion and scanty periods',
      '"Cold" or "hot" womb — imbalances that disrupt implantation',
      'Liver Qi stagnation — stress-driven ovulation and cycle irregularity',
    ],
    symptomsZh: [
      '闭经或月经稀发',
      '卵巢储备减少、FSH 升高',
      '子宫内膜异位症',
      '月经不调、荷尔蒙失调',
      '免疫性或过敏性不孕',
      '习惯性流产',
      '男性精子质量差、活力低',
    ],
    symptomsEn: [
      'Amenorrhea or irregular cycles',
      'Diminished ovarian reserve (elevated FSH)',
      'Endometriosis and pelvic pain',
      'Hormonal imbalance and anovulation',
      'Immune or allergy-related fertility issues',
      'Recurrent miscarriage',
      'Low sperm count, motility, or morphology',
    ],
    treatmentZh:
      '我们以针灸促进盆腔气血循环，搭配个性化中药调理脾肾与冲任二脉，辅以药膳食疗稳定基础体温。对于正在做 IVF/IUI 的患者，我们会根据您的促排、取卵、移植时间表安排协同针灸方案。疗程一般以 3 个月为一周期，完整调养常需 6–12 个月。',
    treatmentEn:
      'We combine acupuncture for pelvic circulation, personalized herbal formulas to support Spleen and Kidney function, and dietary therapy to stabilize basal body temperature. For patients in an IVF or IUI cycle, we coordinate treatment around your stimulation, retrieval, and transfer schedule. A typical course runs three months, with deeper preparation often taking six to twelve months.',
    relatedMethodSlugs: ['acupuncture', 'herbal-medicine', 'moxibustion-guasha'],
    highlightZh:
      '院长馮羅小潔 DAOM 为女性生殖健康专科方向，有大量临床证据支持针灸辅助 IVF 的增效作用。',
    highlightEn:
      'Led by Dr. Serene Feng, DAOM — a fertility-focused practitioner whose published research supports acupuncture as a complement to IVF.',
    faqZh: [
      {
        q: '针灸真的能提高 IVF 成功率吗？',
        a: '多项国际研究显示，针灸可改善子宫血流、降低压力激素，有助提高 IVF 着床率。坤德中医建议在 IVF 周期前 3 个月开始调理，至移植后继续一段时间。',
      },
      {
        q: '男性也需要调理吗？',
        a: '需要。男方因素约占不孕案例的 40–50%。我们为男性提供精子质量调理方案，包括针灸、中药与生活方式指导。',
      },
      {
        q: '中药会影响激素检测吗？',
        a: '不会影响激素检测本身，但请提前告知您的生殖科医生您正在服用中药，以便协同配合。',
      },
      {
        q: '需要多久才能怀孕？',
        a: '因人而异。部分患者 2–3 个月即有反馈，部分需要半年到一年。我们会根据每次月经反馈调整方案。',
      },
      {
        q: '已经在做 IVF 还能做针灸吗？',
        a: '可以，而且我们非常欢迎。针灸时间会特别配合您的 IVF 流程，尤其是取卵前后与移植前后。',
      },
    ],
    faqEn: [
      {
        q: 'Does acupuncture really improve IVF success rates?',
        a: 'Research suggests acupuncture can improve uterine blood flow and reduce stress hormones, contributing to better implantation rates. We typically recommend starting acupuncture 3 months before an IVF cycle and continuing past transfer.',
      },
      {
        q: 'Should my partner come in too?',
        a: 'Yes. Male factors account for 40–50% of fertility cases. We offer acupuncture and herbal support for sperm quality, along with lifestyle guidance.',
      },
      {
        q: 'Will Chinese herbs interfere with hormone testing?',
        a: 'No — herbs do not affect the tests themselves, but always let your reproductive endocrinologist know exactly what you are taking so everyone can coordinate.',
      },
      {
        q: 'How long before I can get pregnant?',
        a: 'It varies. Some patients see changes within 2–3 months; others need 6–12 months of deeper preparation. We adjust your plan each cycle based on how your body responds.',
      },
      {
        q: 'Can I continue acupuncture during an active IVF cycle?',
        a: 'Yes — and we actively coordinate with your IVF timeline, especially before and after retrieval and around embryo transfer.',
      },
    ],
    relatedDoctors: ['serene-feng', 'senior-chang'],
  },

  // ── 2. Pain Management ────────────────────────────────────────────
  {
    slug: 'pain-management',
    icon: 'ShieldAlert',
    image: '/images/conditions/pain-management.svg',
    nameZh: '各类痛症纾解',
    nameEn: 'Pain Relief & Management',
    taglineZh: '不通则痛，不荣则痛 — 从根本疏通气血',
    taglineEn: 'A drug-free path to lasting pain relief',
    openingZh:
      '"不通则痛，不荣则痛" — 中医认为疼痛源于经络气血阻滞或不足。透过把脉问诊、针灸、药草等整合性治疗，我们针对不同痛症原因和个人体质提供服务。从头痛、颈肩腰背痛、关节炎到运动损伤、女性经期疼痛，不依赖止痛药，也不必承受手术风险。',
    openingEn:
      'Whether it\'s chronic back pain from years at a desk, a sports injury that won\'t heal, or migraines that disrupt your daily life — acupuncture and TCM offer a drug-free path to lasting relief. Our practitioners identify the root cause of your pain through traditional pulse diagnosis and create a personalized treatment plan combining acupuncture, herbal medicine, cupping, and therapeutic massage.',
    quoteZh: '"不通则痛，不荣则痛" —《黄帝内经》',
    tcmViewZh: [
      '气滞血瘀 — 经络不通所致的刺痛、固定痛',
      '寒湿痹阻 — 阴雨天加重的酸胀冷痛',
      '肾虚骨弱 — 年久劳损的腰膝酸软',
      '肝郁气结 — 压力型头痛与颈肩紧绷',
    ],
    tcmViewEn: [
      'Qi and blood stagnation — sharp, fixed pain from blocked meridians',
      'Cold-damp obstruction — aches that flare in cold or damp weather',
      'Kidney and bone weakness — wear-and-tear pain in the lower back and knees',
      'Liver Qi stagnation — stress-triggered headaches and tight shoulders',
    ],
    symptomsZh: [
      '头痛 — 紧张性、偏头痛、丛集性头痛',
      '颈椎病 · 肩周炎（五十肩）',
      '腰椎间盘突出 · 坐骨神经痛',
      '网球肘 · 高尔夫球肘',
      '膝关节炎 · 运动损伤',
      '慢性腰痛 · 下背痛',
      '女性经期疼痛',
      '神经性疼痛（灼热、刺痛、麻痹感）',
    ],
    symptomsEn: [
      'Headaches — tension, migraine, and cluster types',
      'Neck pain, frozen shoulder, and cervical issues',
      'Herniated discs and sciatica',
      'Tennis and golfer\'s elbow',
      'Knee osteoarthritis and sports injuries',
      'Chronic lower back pain',
      'Menstrual cramping and pelvic pain',
      'Nerve pain — burning, tingling, or numbness',
    ],
    treatmentZh:
      '我们综合使用针灸、刮痧、拔罐、中药熏蒸、热敷与居家保健动作，针对痛点的根源而非仅止痛。对慢性疼痛患者，通常建议 4–8 周的连续治疗作为第一疗程，之后视情况转为保健频次。可与西医物理治疗并行。',
    treatmentEn:
      'We combine acupuncture, Gua Sha, cupping, herbal compresses, and guided home exercises to treat the root cause of your pain — not just mask it. Chronic pain patients typically benefit most from a 4–8 week initial course, followed by maintenance visits as needed. Our care works alongside conventional physical therapy.',
    relatedMethodSlugs: [
      'acupuncture',
      'cupping',
      'tuina',
      'moxibustion-guasha',
      'medicated-bath',
    ],
    highlightZh: '无药物副作用，可与西医物理治疗并行',
    highlightEn: 'Drug-free, works alongside physical therapy',
    faqZh: [
      {
        q: '针灸止痛的效果能持续多久？',
        a: '急性痛症一次治疗后常能持续数天至一周；慢性痛症建议持续治疗 4–8 周，效果可维持数月至长期。',
      },
      {
        q: '坐骨神经痛针灸有效吗？',
        a: '有效。针灸配合拔罐与中药熏蒸是坤德中医治疗坐骨神经痛的经典组合，多数患者 2–4 周内可见明显改善。',
      },
      {
        q: '膝关节炎适合针灸吗？',
        a: '适合。研究显示针灸可缓解膝关节炎疼痛并改善关节功能，我们常配合艾灸与药浴增强效果。',
      },
      {
        q: '可以同时吃止痛药吗？',
        a: '可以。针灸与西药不冲突，我们的目标是让您逐步减少对止痛药的依赖。',
      },
      {
        q: '一般需要多少次才能感觉改善？',
        a: '多数患者在 3–6 次治疗后就能感受到明显改善，完整疗程通常需要 8–12 次。',
      },
    ],
    faqEn: [
      {
        q: 'How long does acupuncture pain relief last?',
        a: 'Acute pain relief can last several days to a week per session. For chronic pain, a 4–8 week course often produces relief that lasts for months at a time.',
      },
      {
        q: 'Is acupuncture effective for sciatica?',
        a: 'Yes — the combination of acupuncture, cupping, and herbal compresses is one of our most successful protocols. Most patients feel improvement within 2–4 weeks.',
      },
      {
        q: 'Can acupuncture help knee osteoarthritis?',
        a: 'Yes. Studies support acupuncture for knee OA pain and function. We often add moxibustion and medicated baths for a deeper warming effect.',
      },
      {
        q: 'Can I keep taking my pain medication?',
        a: 'Yes. Acupuncture does not interfere with pain medications. Our goal is to gradually reduce how much you need, not to have you stop cold.',
      },
      {
        q: 'How many sessions until I feel better?',
        a: 'Most patients notice meaningful improvement by the 3rd–6th session, with full courses typically running 8–12 visits.',
      },
    ],
    relatedDoctors: ['yang-gui', 'alina-hu', 'chelsea-jin'],
  },

  // ── 3. Women's Health ─────────────────────────────────────────────
  {
    slug: 'womens-health',
    icon: 'HeartPulse',
    image: '/images/conditions/womens-health.svg',
    nameZh: '妇科调理',
    nameEn: "Women's Health & Gynecology",
    taglineZh: '从绽放到渐收，中医陪伴女性每一个阶段',
    taglineEn: 'Gentle TCM care through every life stage',
    openingZh:
      '"女性的身体如美丽的花朵，从绽放到渐收，我们用中医温和有效地顾好妳每个阶段。" 从转骨、月经调养、备孕、怀孕、哺乳到前更年期与更年期，坤德中医根据《黄帝内经》对女子生理周期七个阶段的描述，提供贯穿一生的纯天然调理方案。',
    openingEn:
      'From puberty through menopause and every stage in between, a woman\'s body undergoes constant change. Our women\'s health program addresses the full spectrum — irregular periods, fertility preparation, pregnancy support, postpartum recovery, and menopausal symptom relief — using gentle, hormone-free TCM therapies tailored to your life stage.',
    quoteZh: '引《黄帝内经》对女子七七之数的生理描述',
    tcmViewZh: [
      '冲任失调 — 月经周期与量色异常',
      '肝郁气滞 — 经前情绪波动、乳胀',
      '脾肾两虚 — 宫寒、带下、产后虚弱',
    ],
    tcmViewEn: [
      'Chong and Ren vessel imbalance — cycle irregularity and flow changes',
      'Liver Qi stagnation — PMS, breast tenderness, mood swings',
      'Spleen and Kidney deficiency — cold womb, postpartum fatigue, low energy',
    ],
    symptomsZh: [
      '月经不调 · 痛经 · 经前综合症',
      '更年期综合症（潮热、盗汗、失眠）',
      '多囊卵巢综合症 (PCOS)',
      '子宫肌瘤 · 子宫内膜异位',
      '产后恢复 · 哺乳困难',
      '闭经 · 功能性子宫出血',
    ],
    symptomsEn: [
      'Irregular or painful periods and PMS',
      'Menopausal hot flashes, night sweats, and insomnia',
      'Polycystic ovary syndrome (PCOS)',
      'Fibroids and endometriosis support',
      'Postpartum recovery and breastfeeding challenges',
      'Amenorrhea and functional uterine bleeding',
    ],
    treatmentZh:
      '根据您所在的生命阶段，我们提供针灸、中药、艾灸、食疗等组合方案。例如备孕期的四种体质调理、怀孕期的逐月养胎、哺乳期的通乳催乳、更年期的滋阴清热。全程纯天然，无激素副作用，适合长期保健。',
    treatmentEn:
      'We design care around your current life stage. Fertility preparation uses one of four constitutional protocols; pregnancy care follows a monthly support model; lactation support helps new mothers who are struggling; perimenopause and menopause care uses gentle yin-nourishing formulas. Every plan is hormone-free and designed for the long haul.',
    relatedMethodSlugs: [
      'acupuncture',
      'herbal-medicine',
      'moxibustion-guasha',
    ],
    faqZh: [
      {
        q: '更年期症状中医能帮上忙吗？',
        a: '能。针灸可缓解潮热盗汗与情绪波动，中药可滋阴清热调理根本，是激素替代疗法之外的安全选择。',
      },
      {
        q: '痛经几次能见效？',
        a: '一般持续治疗 2–3 个月经周期后疼痛可显著减轻，部分患者首个周期即有感受。',
      },
      {
        q: '产后可以做针灸吗？',
        a: '可以。产后第 7 天起即可开始温和的调理方案，重点在补气血、通乳、恢复骨盆。',
      },
      {
        q: 'PCOS 能治吗？',
        a: '中医以整体调理角度帮助 PCOS 患者恢复月经周期、改善胰岛素敏感性，常需与内分泌科协同。',
      },
      {
        q: '备孕从什么时候开始调理？',
        a: '建议至少提前 3 个月，因为卵子发育需要约 90 天，足够的调理时间才能显效。',
      },
    ],
    faqEn: [
      {
        q: 'Can TCM help with menopause symptoms?',
        a: 'Yes. Acupuncture can significantly reduce hot flashes, night sweats, and mood swings, while herbal formulas work on the underlying yin deficiency — a safe alternative or complement to HRT.',
      },
      {
        q: 'How many cycles before period pain improves?',
        a: 'Most patients feel meaningful relief within 2–3 menstrual cycles, and some notice a difference in the very first cycle.',
      },
      {
        q: 'Is acupuncture safe postpartum?',
        a: 'Yes — we can begin gentle postpartum recovery work around day 7, focusing on blood and Qi replenishment, lactation, and pelvic healing.',
      },
      {
        q: 'Can TCM help with PCOS?',
        a: 'TCM supports cycle regulation and insulin sensitivity as part of a whole-body approach, usually in coordination with your endocrinologist.',
      },
      {
        q: 'When should I start fertility preparation?',
        a: 'We recommend starting at least 3 months ahead — egg development takes about 90 days, and that window matters for meaningful improvement.',
      },
    ],
    relatedDoctors: ['serene-feng', 'alina-hu', 'senior-chang'],
  },

  // ── 4. Anxiety & Depression ──────────────────────────────────────
  {
    slug: 'anxiety-depression',
    icon: 'Brain',
    image: '/images/conditions/anxiety-depression.svg',
    nameZh: '焦虑、低潮、忧郁',
    nameEn: 'Anxiety, Depression & Low Mood',
    taglineZh: '身心同治，找回情绪的稳定与活力',
    taglineEn: 'Calm the nervous system and restore your inner rhythm',
    openingZh:
      '"气血冲和，万病不生，一有怫郁，诸病生焉。" — 中医认为情志与五脏紧密相关，肝郁气滞、心神失养是焦虑低潮最常见的根源。我们不是"心理辅导"的替代，而是通过针灸、中药与经络推拿给您的神经系统一个物理层面的"重置"，让您重新拥有入睡的能力、稳定的情绪和往日的元气。',
    openingEn:
      'Anxiety and depression affect every part of your life — your sleep, your energy, your relationships. In Chinese Medicine, emotional well-being is deeply connected to the health of your internal organs. Our approach uses acupuncture to calm the nervous system, herbal formulas to nourish depleted energy, and therapeutic massage to release physical tension — helping you feel like yourself again.',
    quoteZh:
      '"气血冲和，万病不生，一有怫郁，诸病生焉。" —《丹溪心法·六郁》',
    tcmViewZh: [
      '肝郁气滞 — 情绪郁结、胸胁胀满、易怒',
      '心脾两虚 — 疲倦健忘、睡眠浅',
      '心肾不交 — 心烦失眠、盗汗',
      '痰热扰心 — 烦躁易惊、口苦',
    ],
    tcmViewEn: [
      'Liver Qi stagnation — emotional "stuckness", irritability, chest tightness',
      'Heart and Spleen deficiency — fatigue, poor memory, shallow sleep',
      'Heart-Kidney disharmony — restless insomnia with night sweats',
      'Phlegm-heat disturbing the Heart — anxiety, agitation, bitter taste',
    ],
    symptomsZh: [
      '负面情绪持续围绕',
      '生活缺乏乐趣',
      '容易感到疲劳、食欲不振',
      '失眠或嗜睡',
      '对原本喜爱的事物失去兴趣',
      '无法专心 · 记忆力下降',
    ],
    symptomsEn: [
      'Persistent low mood or worry',
      'Loss of joy in everyday life',
      'Fatigue and appetite changes',
      'Insomnia or oversleeping',
      'Loss of interest in things you used to enjoy',
      'Trouble concentrating or remembering things',
    ],
    treatmentZh:
      '治疗目标是睡得好、情绪稳定、放松、回复元气、免疫力增强。我们综合使用针灸（神门、印堂、百会、太冲等）、经络推拿、足疗、汤药与药膳食疗。身心灵和谐，可与心理咨询、西医治疗并行。',
    treatmentEn:
      'Our goals are simple: sleep well, feel steady, relax, regain your energy, and rebuild immunity. We combine acupuncture at calming points (Shenmen, Yintang, Baihui, Taichong), Tui Na massage, foot therapy, herbal decoctions, and medicinal cuisine. This work is fully compatible with talk therapy and psychiatric care.',
    relatedMethodSlugs: ['acupuncture', 'tuina', 'herbal-medicine'],
    faqZh: [
      {
        q: '针灸能替代抗抑郁药吗？',
        a: '不建议自行停药。针灸可作为辅助疗法，很多患者在持续治疗后在精神科医生指导下逐步减量。绝不建议自行停药。',
      },
      {
        q: '几次能见效？',
        a: '多数患者在 4–6 次治疗后感受到明显放松与入睡改善，完整调理通常需要 8–12 周。',
      },
      {
        q: '可以同时做心理咨询吗？',
        a: '非常鼓励。针灸调节神经系统的物理层面，心理咨询处理认知层面，两者协同效果最佳。',
      },
      {
        q: 'PTSD 适合针灸吗？',
        a: '适合。耳针（NADA 方案）是美国退伍军人事务部认可的 PTSD 辅助治疗方法之一。',
      },
      {
        q: '儿童青少年可以做吗？',
        a: '12 岁以上可以。我们会使用更温和的手法，家长可陪同。',
      },
    ],
    faqEn: [
      {
        q: 'Can acupuncture replace antidepressants?',
        a: 'Never stop medication on your own. Acupuncture works well as a complement, and many patients are eventually able to reduce their dose in coordination with their psychiatrist.',
      },
      {
        q: 'How many sessions until I feel better?',
        a: 'Most patients feel noticeably calmer and sleep better within 4–6 visits. A full course usually spans 8–12 weeks.',
      },
      {
        q: 'Can I do acupuncture alongside therapy?',
        a: 'Absolutely — we encourage it. Acupuncture works on the physical nervous system, while therapy works on the cognitive layer. The combination is powerful.',
      },
      {
        q: 'Is acupuncture appropriate for PTSD?',
        a: 'Yes. Auricular acupuncture (the NADA protocol) is recognized by the US Veterans Affairs system as a supportive therapy for PTSD.',
      },
      {
        q: 'Can children and teens receive acupuncture?',
        a: 'Yes, for patients 12 and older. We use gentler techniques and welcome a parent in the room.',
      },
    ],
    relatedDoctors: ['serene-feng', 'jiana-xu', 'alina-hu'],
  },

  // ── 5. Weight Loss ──────────────────────────────────────────────
  {
    slug: 'weight-loss',
    icon: 'Scale',
    image: '/images/conditions/weight-loss.svg',
    nameZh: '瘦身 · 减重',
    nameEn: 'Weight Loss & Body Slimming',
    taglineZh: '五合一全方位减重疗程 — 瘦得健康、不反弹',
    taglineEn: 'A 5-in-1 program that takes the weight off — and keeps it off',
    openingZh:
      '"我们的药针五合一全方位减重疗程，减重快速又养生，让你瘦得健康、体重稳定不反弹。" 过量饮食习惯、压力进食、精致食品与油炸食物让纽约人身负肥胖困扰，而肥胖会增加糖尿病、心血管疾病、肿瘤风险。中医从体质辨证入手，不搞"一刀切"的节食，而是针对您的肥胖类型量身制定方案。',
    openingEn:
      'Losing weight isn\'t just about eating less — it\'s about understanding why your body holds onto weight in the first place. TCM identifies three distinct body types that respond to different approaches. Our 5-in-1 weight loss program combines acupuncture, targeted fat reduction, laser lipolysis, personalized herbal formulas, and dietary guidance to help you lose weight safely and keep it off.',
    tcmViewZh: [
      '气血虚弱（脂肪型 / 虚胖）— 容易疲劳、浮肿、面色苍白',
      '脾虚湿阻（水肿型）— 水肿明显、舌苔厚腻',
      '胃火旺盛（肌肉型）— 易饥饿、口臭、便秘',
    ],
    tcmViewEn: [
      'Qi and blood deficiency ("soft fat") — tiredness, puffiness, pale complexion',
      'Spleen deficiency with dampness ("water retention") — swelling, thick coated tongue',
      'Stomach heat ("hard fat") — constant hunger, bad breath, constipation',
    ],
    symptomsZh: [
      '腰腹部脂肪堆积',
      '代谢缓慢、易疲劳',
      '水肿型肥胖 · 局部臃肿',
      '压力型暴食',
      '产后恢复期肥胖',
      '减肥后反弹',
    ],
    symptomsEn: [
      'Stubborn belly and waist fat',
      'Sluggish metabolism and fatigue',
      'Water retention and localized puffiness',
      'Stress-driven binge eating',
      'Postpartum weight that won\'t budge',
      'Yo-yo weight cycles',
    ],
    treatmentZh:
      '坤德五合一方案：① 针灸调节食欲与代谢 ② 局部推脂 ③ 激光溶脂仪 ④ 个体化中药配方 ⑤ 减脂药膳食疗。根据您的体质辨证量身搭配，快速而健康，不搞极端节食。',
    treatmentEn:
      'Our 5-in-1 approach: ① acupuncture to regulate appetite and metabolism, ② targeted fat-reduction massage, ③ laser lipolysis for problem areas, ④ custom herbal formulas for your constitutional type, and ⑤ medicinal meal guidance. Your plan is built around which of the three body types fits you — no crash dieting involved.',
    relatedMethodSlugs: ['acupuncture', 'herbal-medicine', 'tuina'],
    faqZh: [
      {
        q: '一个月能瘦多少？',
        a: '健康减重速度一般每月 4–8 磅。快速减重反而容易反弹，我们更注重代谢与体质的长期改善。',
      },
      {
        q: '耳针减肥真的有效吗？',
        a: '耳针可抑制饥饿感、调节代谢，是我们方案的一部分，但单独使用效果有限，建议综合方案。',
      },
      {
        q: '激光溶脂仪是什么？',
        a: '低能量激光针对局部脂肪细胞（腰腹、大腿），非手术非侵入，坤德中医作为综合方案的一环使用。',
      },
      {
        q: '孕妇和哺乳期能做吗？',
        a: '不建议。孕期与哺乳期不宜减重，我们建议先完成这两个阶段再启动减重方案。',
      },
      {
        q: '需要节食吗？',
        a: '不需要极端节食。我们提供减脂药膳食谱，吃对比吃少更重要。',
      },
    ],
    faqEn: [
      {
        q: 'How much weight can I lose in a month?',
        a: '4–8 pounds per month is a healthy pace. Fast weight loss tends to bounce back — we prioritize metabolic and constitutional changes that last.',
      },
      {
        q: 'Does ear acupuncture really work for weight loss?',
        a: 'It can reduce cravings and support metabolism as part of a full program, but on its own the effects are modest. Best combined with the rest of the plan.',
      },
      {
        q: 'What is laser lipolysis?',
        a: 'A low-energy laser treatment targeting stubborn fat in areas like the waist and thighs. It\'s non-surgical and non-invasive, and we use it as one component of the 5-in-1 protocol.',
      },
      {
        q: 'Is it safe during pregnancy or breastfeeding?',
        a: 'No — weight loss programs are not recommended during pregnancy or breastfeeding. We suggest waiting until those stages are complete.',
      },
      {
        q: 'Do I have to diet strictly?',
        a: 'No extreme dieting. We provide medicinal meal plans — eating the right foods matters more than simply eating less.',
      },
    ],
    relatedDoctors: ['serene-feng', 'alina-hu'],
  },

  // ── 6. Muscle & Tendon ───────────────────────────────────────────
  {
    slug: 'muscle-tendon',
    icon: 'Bone',
    image: '/images/conditions/muscle-tendon.svg',
    nameZh: '肌肉肌腱损伤',
    nameEn: 'Muscle & Tendon Injuries',
    taglineZh: '柔性温和治愈肌筋伤痛，让你起床不再酸痛',
    taglineEn: 'Heal the injury, retrain the movement, prevent the relapse',
    openingZh:
      '"想像一下，每天你起床时不再肌肉酸痛，筋骨紧绷。" 我们采用传统中医方式，柔性温和地治愈您的肌筋伤痛。《黄帝内经》有言"肝主筋"，筋主控关节屈伸与肢体运动，而筋的状态与肝血密切相关。',
    openingEn:
      'Imagine waking up without stiffness, soreness, or that nagging pain in your shoulder. Whether your injury comes from repetitive desk work, athletic overuse, or a sudden fall, our TCM approach treats the root cause — not just the symptoms. We combine acupuncture, herbal compresses, cupping, and guided home exercises to restore mobility and prevent re-injury.',
    tcmViewZh: [
      '肝主筋 — 筋的强弱与肝血充足与否相关',
      '气滞血瘀 — 急性扭伤与慢性劳损都可能有',
      '寒湿阻络 — 天气变化时加重',
    ],
    tcmViewEn: [
      'In TCM the Liver governs the sinews — tendon strength mirrors Liver blood',
      'Qi and blood stagnation underlies both acute sprains and chronic overuse',
      'Cold and damp obstruction — why your old injury flares in bad weather',
    ],
    symptomsZh: [
      '过度使用 — 妈妈手、五十肩、网球肘',
      '运动伤害 — 高尔夫球肘、体操伤',
      '长期姿势不良 — 低头族、久坐族',
      '精神压力 — 落枕、紧张性颈痛',
      '突然暴力 — 扭伤、闪到腰、跌伤',
    ],
    symptomsEn: [
      'Repetitive strain — "mother\'s thumb", frozen shoulder, tennis elbow',
      'Sports injuries — golfer\'s elbow, gymnastic strains',
      'Posture-related issues — "tech neck", prolonged sitting',
      'Stress-related tension — stiff neck, muscle guarding',
      'Acute injuries — sprains, sudden back seizures, falls',
    ],
    treatmentZh:
      '药草内服外敷、针灸与穴位按摩、刮痧、火罐、中药熏蒸与热敷，并教导居家保健动作以达舒经止痛、预防复发之目的。',
    treatmentEn:
      'We combine internal herbal formulas, external herbal compresses, acupuncture, acupressure, Gua Sha, cupping, herbal steaming, and targeted heat therapy. Equally important: every patient leaves with a short list of home exercises designed to prevent the injury from coming back.',
    relatedMethodSlugs: ['acupuncture', 'cupping', 'tuina', 'medicated-bath'],
    faqZh: [
      {
        q: '急性扭伤可以立刻针灸吗？',
        a: '急性期 24 小时内以冷敷与制动为主，24 小时后针灸、艾灸、拔罐都是有效的恢复手段。',
      },
      {
        q: '五十肩多久能治好？',
        a: '冰冻期（剧痛期）2–4 周针灸可明显缓解疼痛，解冻期（功能恢复期）通常需要 2–3 个月。',
      },
      {
        q: '可以同时做物理治疗吗？',
        a: '可以，而且效果更好。针灸消除疼痛，物理治疗恢复功能，两者互补。',
      },
      {
        q: '妈妈手能治吗？',
        a: '能。针灸与局部药浴对新手妈妈的腕管综合症效果良好，疗程一般 4–6 周。',
      },
      {
        q: '家里能做什么帮助恢复？',
        a: '我们会根据您的问题教授 3–5 个简单的家用动作，每天 10 分钟，效果显著。',
      },
    ],
    faqEn: [
      {
        q: 'Can I get acupuncture immediately after an acute sprain?',
        a: 'In the first 24 hours we recommend ice and rest. After that, acupuncture, moxibustion, and cupping become valuable tools for recovery.',
      },
      {
        q: 'How long does frozen shoulder take to heal?',
        a: 'The painful "freezing" phase usually responds within 2–4 weeks of acupuncture. The "thawing" phase for full mobility can take 2–3 months of work.',
      },
      {
        q: 'Can I combine this with physical therapy?',
        a: 'Yes — and the combination works better than either alone. Acupuncture reduces pain; PT restores function.',
      },
      {
        q: 'Can TCM help with "mother\'s thumb"?',
        a: 'Yes. Acupuncture plus localized herbal soaks is effective for new mothers with De Quervain\'s tendinitis, typically in a 4–6 week course.',
      },
      {
        q: 'What can I do at home?',
        a: 'We\'ll send you home with 3–5 simple exercises tailored to your injury — 10 minutes a day makes a real difference.',
      },
    ],
    relatedDoctors: ['yang-gui', 'alina-hu'],
  },

  // ── 7. Herbal Beauty ─────────────────────────────────────────────
  {
    slug: 'herbal-beauty',
    icon: 'Sparkles',
    image: '/images/conditions/herbal-beauty.svg',
    nameZh: '汉方美容',
    nameEn: 'Herbal Beauty (TCM Cosmetics)',
    taglineZh: '养于内，美于外 — 肌肤从根本绽放光采',
    taglineEn: 'Radiance from the inside out',
    openingZh:
      '"养于内，美于外。我们运用中医智慧以穴位美容搭配药草，让妳的肌肤一天一天绽放美丽光采。" 汉方美容始于相信"人以天地之气生"，从孕育万物的大地发现生命之美。由内而外从根本去呵护，修复肌肤细胞，回到皮肤最初的健康本质。本条目是"汉方内调美容"，与美容页的现代医美项目互为补充。',
    openingEn:
      'True beauty starts from within. Our herbal beauty program combines ancient TCM wisdom with modern skincare techniques to address skin concerns at their source — not just on the surface. Through acupuncture facials, customized herbal formulas, and dietary guidance, we help restore your skin\'s natural radiance, reduce signs of aging, and achieve a healthy, lasting glow.',
    tcmViewZh: [
      '气血双亏 — 面色萎黄、皮肤干燥',
      '肝郁气滞 — 黄褐斑、痤疮',
      '脾虚湿盛 — 油性肌肤、毛孔粗大',
      '肾阴不足 — 早衰、细纹',
    ],
    tcmViewEn: [
      'Qi and blood deficiency — dull, sallow complexion and dry skin',
      'Liver Qi stagnation — melasma and hormonal acne',
      'Spleen deficiency with dampness — oily skin and enlarged pores',
      'Kidney yin deficiency — premature aging and fine lines',
    ],
    symptomsZh: [
      '色斑、黯沉、肤色不均',
      '毛孔粗大 · 油性肌肤',
      '细纹 · 皱纹',
      '肌肉松弛',
      '青春痘 · 痤疮',
      '干燥敏感肌',
    ],
    symptomsEn: [
      'Pigmentation, dullness, and uneven tone',
      'Enlarged pores and oily skin',
      'Fine lines and wrinkles',
      'Loss of facial firmness',
      'Acne and breakouts',
      'Dry, sensitive skin',
    ],
    treatmentZh:
      '汉方美白淡斑、修复毛孔、淡化皱纹、紧实肌肤、痘肌护理、均匀肤色 — 每一个都从内调与外治两条路径入手：内服个体化中药、外敷天然面膜、面部针灸与穴位按摩。与现代医美项目（美容页）可互补。',
    treatmentEn:
      'Our program targets pigmentation, pore size, fine lines, firmness, acne, and tone — each concern addressed through both internal herbal support and external treatment. Sessions combine facial acupuncture, acupressure, and natural herbal masks, and can complement modern aesthetic treatments offered on our beauty page.',
    relatedMethodSlugs: ['acupuncture', 'herbal-medicine'],
    faqZh: [
      {
        q: '面部针灸和微针有什么不同？',
        a: '面部针灸使用传统毫针刺激穴位，目的是通过经络调节；微针是西医美容技术。两者原理不同但可互补。',
      },
      {
        q: '多久能看到效果？',
        a: '肌肤状态一般在 4–6 次治疗后有明显改善，色斑、皱纹等需要 2–3 个月的持续调理。',
      },
      {
        q: '会留下针痕吗？',
        a: '使用极细的美容针，针后可能有短暂红点，几小时内消失，不会留痕。',
      },
      {
        q: '可以和医美同时做吗？',
        a: '可以。建议医美项目间歇期做汉方调理，整体效果更好、恢复更快。',
      },
      {
        q: '孕妇能做面部针灸吗？',
        a: '孕期有部分穴位禁忌，需先评估。一般建议孕 12 周后由中医师评估。',
      },
    ],
    faqEn: [
      {
        q: 'How is facial acupuncture different from microneedling?',
        a: 'Facial acupuncture uses classical needles on meridian points to regulate the whole body\'s effect on the skin. Microneedling is a surface aesthetic treatment. They work differently but can complement each other.',
      },
      {
        q: 'When will I see results?',
        a: 'Skin tone and texture usually improve within 4–6 visits. Pigmentation and fine lines require a longer 2–3 month course.',
      },
      {
        q: 'Will the needles leave marks?',
        a: 'We use extremely fine cosmetic needles. You may see tiny red dots for a few hours afterward, but no lasting marks.',
      },
      {
        q: 'Can I combine this with aesthetic procedures?',
        a: 'Yes — many patients schedule herbal beauty sessions between aesthetic treatments for better overall results and faster recovery.',
      },
      {
        q: 'Is facial acupuncture safe during pregnancy?',
        a: 'Several points are contraindicated in pregnancy. We recommend starting after 12 weeks and only after a TCM assessment.',
      },
    ],
    relatedDoctors: ['serene-feng', 'alina-hu'],
  },

  // ── 8. Respiratory Health ───────────────────────────────────────
  {
    slug: 'respiratory-health',
    icon: 'Wind',
    image: '/images/conditions/respiratory-health.svg',
    nameZh: '肺炎防治',
    nameEn: 'Respiratory Health & Prevention',
    taglineZh: '扶正祛邪，增强呼吸系统防御力',
    taglineEn: 'Strengthen your lungs, build long-term resilience',
    openingZh:
      '反复感冒、咳嗽不愈、换季就喘？这些信号都在告诉您："肺卫不固"。中医认为，肺主气、司呼吸，外邪最容易从肺入侵。坤德中医以扶正祛邪为核心，帮助您从根本上增强呼吸系统的防御力。特别是三伏贴这样的"冬病夏治"王牌，每年夏季受理预约。',
    openingEn:
      'If you catch every cold going around, battle seasonal allergies each year, or struggle with lingering cough after COVID — your immune defense may be weaker than you think. In TCM, the lungs are your body\'s first line of defense against external pathogens. Our approach strengthens that defense from within — combining acupuncture, custom herbal formulas, and the traditional Sanfutie summer patches to build long-term respiratory resilience.',
    tcmViewZh: [
      '肺卫不固 — 抵抗力弱，外邪易侵',
      '风寒束表 — 受风即感冒',
      '痰热壅肺 — 黄痰难咳',
      '肺肾两虚 — 慢性哮喘、咳喘日久',
    ],
    tcmViewEn: [
      'Weak defensive Qi — easily catches colds and allergies',
      'Wind-cold invasion — colds triggered by drafts and weather',
      'Phlegm-heat in the lungs — thick yellow sputum and stubborn cough',
      'Lung-Kidney deficiency — chronic asthma and long-standing cough',
    ],
    symptomsZh: [
      '慢性咳嗽 · 哮喘辅助',
      '过敏性鼻炎 · 慢性鼻炎',
      'COVID-19 后遗症（长新冠）',
      '反复感冒 · 支气管炎',
      '季节性过敏',
      '儿童反复呼吸道感染',
    ],
    symptomsEn: [
      'Chronic cough and asthma support',
      'Allergic and chronic rhinitis',
      'Long COVID symptoms',
      'Frequent colds and bronchitis',
      'Seasonal allergies',
      'Recurrent respiratory infections in children',
    ],
    treatmentZh:
      '针灸（肺俞、合谷、足三里等扶正穴位）+ 中药补肺固表 + 三伏贴（伏天贴敷，全年预防）。三伏贴是我们的王牌项目，"冬病夏治"原理每年夏季三伏天受理预约。急性期 1–2 周即可见缓解，慢性反复者建议连续 3 年贴敷。',
    treatmentEn:
      'We combine acupuncture at immune-supporting points (Feishu, Hegu, Zusanli), custom herbal formulas to strengthen lung and defensive Qi, and the summertime Sanfutie patches. Sanfutie is our signature seasonal therapy — "treat winter disease in summer". Acute flare-ups often improve in 1–2 weeks; for chronic, recurring patterns we recommend a 3-year Sanfutie course for lasting change.',
    relatedMethodSlugs: [
      'acupuncture',
      'herbal-medicine',
      'sanfutie',
      'moxibustion-guasha',
    ],
    highlightZh: '三伏贴"冬病夏治"是我们的王牌项目，每年夏季受理预约',
    highlightEn: 'Our signature Sanfutie program runs each summer — book early',
    faqZh: [
      {
        q: '长新冠后遗症中医能调吗？',
        a: '能。中医将长新冠常见的疲劳、气短、脑雾归为"肺脾两虚 + 痰瘀阻络"，针灸与补气方剂效果良好。',
      },
      {
        q: '儿童反复感冒适合中医吗？',
        a: '非常适合。小儿推拿、药膳食疗、必要时的三伏贴组合对增强小儿体质效果显著。',
      },
      {
        q: '哮喘能完全治好吗？',
        a: '中医无法"治愈"哮喘，但可显著减少发作频率和用药依赖。绝不建议自行停西药。',
      },
      {
        q: '三伏贴什么时候开始？',
        a: '每年夏至后第三个庚日起的三伏天（通常在 7 月中下旬到 8 月下旬），我们会提前一个月开放预约。',
      },
      {
        q: '过敏季节前什么时候开始调理？',
        a: '建议提前 2–3 个月。例如春季花粉过敏，冬季就可以开始扶正调理。',
      },
    ],
    faqEn: [
      {
        q: 'Can TCM help with long COVID?',
        a: 'Yes. We typically treat long COVID as a Lung-Spleen deficiency with residual phlegm — acupuncture plus Qi-tonifying formulas often improve fatigue, shortness of breath, and brain fog.',
      },
      {
        q: 'Is TCM good for kids who catch every cold?',
        a: 'Very much so. Pediatric Tui Na, gentle herbal teas, and age-appropriate Sanfutie can strengthen a child\'s constitution significantly.',
      },
      {
        q: 'Can TCM cure asthma?',
        a: 'TCM cannot cure asthma, but it can meaningfully reduce how often flare-ups happen and how much rescue medication you need. Never stop prescribed medications without your physician\'s guidance.',
      },
      {
        q: 'When does Sanfutie season start?',
        a: 'Each year\'s Sanfu days fall in mid-July through late August. We open bookings about a month ahead — call to get on the list.',
      },
      {
        q: 'When should I start preparing for allergy season?',
        a: '2–3 months before your usual flare. For spring pollen sufferers, that means starting in winter.',
      },
    ],
    relatedDoctors: ['serene-feng', 'suoan-feng'],
  },

  // ── 9. Hypertension / Three Highs ───────────────────────────────
  {
    slug: 'hypertension',
    icon: 'Gauge',
    image: '/images/conditions/hypertension.svg',
    nameZh: '三高治疗',
    nameEn: 'Blood Pressure, Cholesterol & Blood Sugar',
    taglineZh: '冯苏安教授亲诊三高专科',
    taglineEn: 'Led by Prof. Suo An Feng — coordinated with your primary care',
    openingZh:
      '血压、血脂、血糖 — 这"三高"是现代都市人最普遍的慢性病，也是心梗、中风、糖尿病并发症的温床。中医不仅能帮助您稳住指标，更能从体质根本上化解问题。坤德中医的三高专科由消渴丸发明人之一冯苏安教授亲自主诊，30 余年临床经验。',
    openingEn:
      'High blood pressure, high cholesterol, high blood sugar — the "three highs" quietly raise your risk of heart attack, stroke, and diabetes complications every single day. At Kunde TCM, our three-highs specialty is led by Prof. Suo An Feng, one of the original inventors of the nationally patented Xiaoke Wan formula. We don\'t just manage your numbers — we address the underlying constitutional imbalance that caused them in the first place, always in coordination with your primary care doctor.',
    tcmViewZh: [
      '肝阳上亢 — 高血压伴头晕、后脑胀',
      '痰湿内阻 — 高血脂、体重超标',
      '气阴两虚 — 糖尿病前期、疲劳口干',
      '肾虚肝旺 — 三高多合并出现',
    ],
    tcmViewEn: [
      'Liver yang rising — hypertension with dizziness and back-of-head tightness',
      'Phlegm-dampness — high cholesterol, weight issues',
      'Qi and yin deficiency — pre-diabetes, fatigue, dry mouth',
      'Kidney deficiency with Liver excess — when all three "highs" appear together',
    ],
    symptomsZh: [
      '高血压 — 头晕、后脑胀、面赤',
      '高血脂',
      '高血糖 / 前驱糖尿病',
      '代谢综合症',
      '长期头痛',
      '夜尿频繁',
    ],
    symptomsEn: [
      'High blood pressure — dizziness, head tightness, flushing',
      'High cholesterol',
      'High blood sugar / prediabetes',
      'Metabolic syndrome',
      'Chronic headaches',
      'Frequent nighttime urination',
    ],
    treatmentZh:
      '针灸（太冲、太溪、足三里等穴位，对降压有明确效果）+ 冯教授个性化中药（含消渴丸系列研究成果）+ 食疗指导（如芹菜汁配方）。可与西药协同，在医生指导下逐步调整用药，绝不建议患者自行停西药。',
    treatmentEn:
      'Acupuncture at points with documented blood-pressure benefits (Taichong, Taixi, Zusanli), personalized herbal formulas drawing on Prof. Feng\'s Xiaoke Wan research, and medicinal dietary guidance. Our program runs alongside your Western medications — we never ask patients to stop prescriptions on their own.',
    relatedMethodSlugs: ['acupuncture', 'herbal-medicine'],
    caseZh:
      '真实案例：57 岁护士长 Annie，血压 179/110，在坤德治疗 3 周内降至 154/87（详见博客"高血压案例分享"）。',
    caseEn:
      'Patient story: Annie, a 57-year-old head nurse, came to us with blood pressure of 179/110. Within three weeks of treatment her readings had dropped to 154/87. (Full story on our blog.)',
    highlightZh:
      '冯苏安教授 — 消渴丸发明人之一，获国家知识产权局"中国专利优秀奖"（2015）',
    highlightEn:
      'Prof. Suo An Feng — co-inventor of the nationally patented Xiaoke Wan formula, recipient of China\'s National Patent Excellence Award (2015).',
    faqZh: [
      {
        q: '中医可以替代降压药吗？',
        a: '不建议自行停药。我们的目标是帮助您稳定血压、减少副作用，并在您的医生指导下逐步调整西药用量。',
      },
      {
        q: '多久能看到血压改善？',
        a: '针灸一般 2–4 周可见明显改善，中药调理通常需要 1–3 个月才能体现体质层面的变化。',
      },
      {
        q: '家里需要监测吗？',
        a: '强烈建议。我们会让您每日记录血压，根据走势调整治疗方案。',
      },
      {
        q: '三高能一起治吗？',
        a: '可以，而且常常需要一起治。因为三高往往有共同的体质根源。',
      },
      {
        q: '冯教授一定能亲自看到吗？',
        a: '冯教授每周固定出诊日接诊三高与糖尿病专科患者，预约时请注明。',
      },
    ],
    faqEn: [
      {
        q: 'Can TCM replace my blood pressure medication?',
        a: 'Never stop medication on your own. Our goal is to help stabilize your readings and minimize side effects, then coordinate any reductions with your prescribing physician.',
      },
      {
        q: 'How soon will my blood pressure improve?',
        a: 'Acupuncture often produces noticeable changes within 2–4 weeks. Deeper herbal constitutional work takes 1–3 months to show clearly.',
      },
      {
        q: 'Should I monitor at home?',
        a: 'Strongly recommended. We ask patients to log daily readings so we can adjust treatment based on trends.',
      },
      {
        q: 'Can all three "highs" be treated together?',
        a: 'Yes — and they often should be, because they typically share the same underlying constitutional imbalance.',
      },
      {
        q: 'Can I see Prof. Feng directly?',
        a: 'Prof. Feng holds dedicated three-highs and diabetes clinic days each week. Please mention him when booking to make sure your appointment is scheduled correctly.',
      },
    ],
    relatedDoctors: ['suoan-feng', 'dixu-gao'],
  },

  // ── 10. Facial Palsy ────────────────────────────────────────────
  {
    slug: 'facial-palsy',
    icon: 'Smile',
    image: '/images/conditions/facial-palsy.svg',
    nameZh: '面瘫',
    nameEn: "Bell's Palsy & Facial Paralysis",
    taglineZh: '针药并用 · 黄金恢复期内找回对称的笑容',
    taglineEn: 'Time-sensitive recovery — start within the first two weeks',
    openingZh:
      '一觉醒来，一侧脸"垮"了下来 — 眼睛闭不上、嘴角歪斜、喝水漏水、吃饭漏饭。面瘫（贝尔氏麻痹）虽然突如其来，但及时治疗大多数可完全恢复。坤德中医治疗面瘫历史悠久，针药并用、电针辅助，在黄金恢复期内帮助您找回对称的笑容。',
    openingEn:
      'Waking up one morning to find half your face has "dropped" — an eye that won\'t close, a drooping mouth, water spilling from your lip — Bell\'s Palsy is terrifying. But here\'s the good news: with prompt treatment, most patients fully recover. Acupuncture for Bell\'s Palsy is one of TCM\'s most well-documented success stories, with extensive clinical research supporting its effectiveness. The key is timing — starting treatment within the first two weeks gives you the best possible recovery.',
    tcmViewZh: [
      '风邪入络 — 多因熬夜受风、体虚外感',
      '经气阻滞 — 面部经络气血不通',
      '面肌失养 — 肌肉失去气血濡养',
    ],
    tcmViewEn: [
      'Wind invasion — often triggered by exhaustion, drafts, or a recent viral illness',
      'Meridian obstruction — Qi and blood fail to reach the facial muscles',
      'Muscle undernourishment — facial tissues lose their circulatory support',
    ],
    symptomsZh: [
      '贝尔氏麻痹 · 面神经炎',
      '中风后面瘫',
      '外伤性面瘫',
      '口眼歪斜',
      '眼睑闭合不全',
      '额纹消失 · 抬眉不能',
      '味觉或听觉异常',
    ],
    symptomsEn: [
      "Bell's palsy and facial neuritis",
      'Post-stroke facial paralysis',
      'Traumatic facial nerve injury',
      'Drooping mouth or crooked smile',
      'Inability to fully close one eye',
      'Loss of forehead wrinkles and inability to raise the eyebrow',
      'Altered taste or hyperacusis',
    ],
    treatmentZh:
      '针灸（面部穴位 + 远端穴位）+ 电针（加强神经传导刺激）+ 推拿指压拨筋 + 艾灸温经散寒 + 中药内服。疗程分期：急性期（1–2 周 · 控制发展）→ 恢复期（4–8 周 · 功能回复）→ 后遗症期（3 个月以上 · 修复残留）。',
    treatmentEn:
      'Acupuncture at both local facial points and distal points, paired with electro-acupuncture to stimulate nerve signaling, targeted facial massage, warming moxa, and internal herbal formulas. Treatment phases: acute (1–2 weeks, halt progression) → recovery (4–8 weeks, restore function) → residual (3+ months, polish lingering asymmetry).',
    relatedMethodSlugs: ['acupuncture', 'moxibustion-guasha', 'herbal-medicine'],
    caseZh:
      '真实案例：36 岁男性患者，面瘫 5 天即就诊，一周两次针灸，第 4 周痊愈（详见博客"针药并用治疗面瘫"）。',
    caseEn:
      'Patient story: A 36-year-old man came in just 5 days after his Bell\'s palsy began. With twice-weekly acupuncture, he had regained full facial function by week 4. (Full case on our blog.)',
    highlightZh: '黄金治疗期：发病后 7–14 天内介入效果最佳',
    highlightEn: 'Golden window: outcomes are best when treatment starts within 7–14 days of onset',
    faqZh: [
      {
        q: '面瘫几天就诊最好？',
        a: '发病后 7 天内介入最佳，7–14 天仍是黄金恢复期。超过 3 个月进入后遗症期，治疗难度显著增加但仍可改善。',
      },
      {
        q: '电针会痛吗？',
        a: '电针是低频脉冲，大多数患者描述为轻微跳动感或温热感，不是痛感。',
      },
      {
        q: '西医抗病毒药还要吃吗？',
        a: '要。针灸与西医抗病毒 + 激素 + 维生素 B 方案完全不冲突，建议协同使用。',
      },
      {
        q: '会完全恢复吗？',
        a: '在黄金期开始治疗的贝尔氏麻痹患者多数可完全恢复。但每个案例不同，具体以复诊评估为准。',
      },
      {
        q: '一周几次针灸？',
        a: '急性期与恢复期建议每周 2–3 次，后遗症期可减少至每周 1 次。',
      },
    ],
    faqEn: [
      {
        q: 'When should I start treatment after Bell\'s palsy hits?',
        a: 'The first 7 days are ideal, and the first 7–14 days are the "golden window." After 3 months you enter the residual phase — treatment is still helpful but progress is slower.',
      },
      {
        q: 'Does electro-acupuncture hurt?',
        a: 'No — most patients feel a mild pulsing or warming sensation, not pain.',
      },
      {
        q: 'Should I continue my antiviral and steroid medications?',
        a: 'Yes. Acupuncture is fully compatible with the standard antiviral + steroid + vitamin B protocol, and the combination typically produces the best outcomes.',
      },
      {
        q: 'Will I fully recover?',
        a: 'Most Bell\'s palsy patients who begin treatment in the golden window fully recover. Every case is different — your practitioner will give you an individualized prognosis.',
      },
      {
        q: 'How often should I come in?',
        a: 'During the acute and recovery phases, 2–3 visits per week. In the residual phase, once a week is usually enough.',
      },
    ],
    relatedDoctors: ['chelsea-jin', 'serene-feng'],
  },

  // ── 11. Insomnia ────────────────────────────────────────────────
  {
    slug: 'insomnia',
    icon: 'Moon',
    image: '/images/conditions/insomnia.svg',
    nameZh: '失眠',
    nameEn: 'Insomnia & Sleep Disorders',
    taglineZh: '不靠药，重新拥有自然深沉的睡眠',
    taglineEn: 'Rebuild natural, medication-free sleep',
    openingZh:
      '凌晨三点，您又一次望着天花板数羊。安眠药吃了又怕依赖，不吃又彻夜难眠 — 这是无数纽约都市人每天的真实处境。中医不靠"强制镇静"，而是找出您睡不着的真正原因：是心神太盛？肝气郁结？心脾两虚？还是阴虚内热？辨证清楚，一针一药精准调理，让您重新拥有自然、深沉、不靠药的睡眠。',
    openingEn:
      'It\'s 3 AM and you\'re staring at the ceiling — again. Sleeping pills leave you groggy and worried about dependency; without them, you\'re wide awake. You\'re not alone. Chronic insomnia affects millions of New Yorkers, and at Kunde TCM we see it every day. Instead of forcing your body to shut down, we identify the root cause of your sleeplessness — whether it\'s overactive thoughts, hormonal imbalance, or deep exhaustion — and restore your natural ability to fall and stay asleep, without medication.',
    tcmViewZh: [
      '心神不宁 — 易惊醒、多梦纷纷',
      '肝郁化火 — 入睡困难、烦躁易怒',
      '心脾两虚 — 疲倦却睡不深、白天没精神',
      '阴虚火旺 — 手心脚心热、夜间盗汗、早醒',
    ],
    tcmViewEn: [
      'Restless spirit — light sleep, frequent waking, vivid dreams',
      'Liver fire — trouble falling asleep, irritability, frustration',
      'Heart-Spleen deficiency — exhausted but sleep feels shallow, daytime fatigue',
      'Yin deficiency with heat — warm palms and soles, night sweats, early waking',
    ],
    symptomsZh: [
      '入睡困难（>30 分钟）',
      '夜间频醒',
      '早醒无法再睡',
      '多梦 · 醒后不解乏',
      '白天疲倦 · 情绪低落',
      '对安眠药产生依赖',
    ],
    symptomsEn: [
      'Trouble falling asleep (more than 30 minutes)',
      'Frequent nighttime waking',
      'Waking too early and not getting back to sleep',
      'Dream-disturbed, unrefreshing sleep',
      'Daytime fatigue and low mood',
      'Growing dependence on sleeping pills',
    ],
    treatmentZh:
      '针灸（神门、三阴交、百会、印堂等安神要穴）+ 中药（酸枣仁汤、甘麦大枣汤等经典方加减）+ 经络推拿 + 足疗。一般 4–6 周可见明显改善，连续 2–3 个月可显著恢复自然睡眠。无依赖性、无次日宿醉感，目标是每晚 6–8 小时的深度自然睡眠。',
    treatmentEn:
      'Acupuncture at spirit-calming points (Shenmen, Sanyinjiao, Baihui, Yintang), classical herbal formulas such as Suan Zao Ren Tang or Gan Mai Da Zao Tang adapted to your pattern, Tui Na massage, and foot therapy. Most patients see meaningful improvement within 4–6 weeks, and a 2–3 month course usually restores deep, natural sleep — without dependency or next-day grogginess.',
    relatedMethodSlugs: ['acupuncture', 'herbal-medicine', 'tuina'],
    highlightZh: '无依赖性、无次日宿醉感，改善根本睡眠质量',
    highlightEn: 'No dependency, no morning grogginess, a fundamental reset of sleep quality',
    faqZh: [
      {
        q: '已经吃安眠药很多年还能调吗？',
        a: '可以，但需要更长时间。我们先帮助您建立自然睡眠基础，再在医生指导下逐步减药。绝不建议自行停药。',
      },
      {
        q: '几次能见效？',
        a: '多数患者在 4–6 次治疗后感受到明显的入睡改善，完整恢复通常需要 8–12 周。',
      },
      {
        q: '中药会让人昏昏欲睡吗？',
        a: '不会。我们的安神方剂调节的是神经系统的平衡，不是强制镇静，白天精神反而更好。',
      },
      {
        q: '针灸前后要注意什么？',
        a: '治疗当天避免咖啡因与酒精，建议安排在傍晚，治疗后尽早休息效果最佳。',
      },
      {
        q: '更年期失眠也能治吗？',
        a: '可以，而且效果很好。我们会同时调理潮热盗汗，配合滋阴清热方剂。',
      },
    ],
    faqEn: [
      {
        q: 'Can I still be helped if I\'ve been on sleeping pills for years?',
        a: 'Yes, though it takes longer. We first rebuild your natural sleep capacity, then work with your physician to gradually reduce medication. Never stop on your own.',
      },
      {
        q: 'How long before I sleep better?',
        a: 'Most patients feel clear improvement in sleep onset within 4–6 visits. Full restoration typically spans 8–12 weeks of treatment.',
      },
      {
        q: 'Will the herbs make me drowsy during the day?',
        a: 'No — our sleep formulas work by rebalancing the nervous system, not by sedating you. Most patients actually feel more alert during the day.',
      },
      {
        q: 'Is there anything to do before or after a session?',
        a: 'Avoid caffeine and alcohol on treatment days. Evening appointments work well — go to bed shortly after.',
      },
      {
        q: 'Can TCM help with menopausal insomnia?',
        a: 'Yes, and it\'s one of our most rewarding areas. We treat the hot flashes and night sweats at the same time using yin-nourishing herbs.',
      },
    ],
    relatedDoctors: ['serene-feng', 'jiana-xu', 'alina-hu'],
  },

  // ── 12. Diabetes ────────────────────────────────────────────────
  {
    slug: 'diabetes',
    icon: 'Droplets',
    image: '/images/conditions/diabetes.svg',
    nameZh: '糖尿病',
    nameEn: 'Diabetes Management',
    taglineZh: '冯苏安教授 — 消渴丸发明人之一亲诊',
    taglineEn: 'Led by Prof. Suo An Feng, co-inventor of Xiaoke Wan',
    openingZh:
      '糖尿病在中医里有个古老的名字 — "消渴"，早在两千年前就已被详细记载。坤德中医的冯苏安教授是国家专利药"消渴丸"的联合发明人之一，他将毕生研究带到纽约，为 2 型糖尿病、糖尿病神经病变、血糖波动等患者提供独到的中西结合方案。我们的目标不是替代胰岛素或二甲双胍，而是帮您稳住血糖、减少并发症、提升生活质量。',
    openingEn:
      'In Chinese Medicine, diabetes has been studied for over 2,000 years under the classical name Xiaoke — "wasting-thirst disease." At Kunde TCM, our diabetes specialty is led by Prof. Suo An Feng, co-inventor of the nationally patented Xiaoke Wan formula. His decades of research and clinical experience are now available to patients right here in New York. Our goal isn\'t to replace your insulin or metformin — it\'s to work alongside your primary care doctor to stabilize your blood sugar, reduce complications, and help you feel better day-to-day.',
    tcmViewZh: [
      '上消 — 肺胃燥热，口干多饮',
      '中消 — 胃热炽盛，多食易饥',
      '下消 — 肾阴不足，多尿腰酸',
      '糖尿病后期多为脾肾两虚',
    ],
    tcmViewEn: [
      'Upper Xiaoke — lung and stomach dryness with thirst',
      'Middle Xiaoke — stomach fire with excessive hunger',
      'Lower Xiaoke — kidney yin deficiency with frequent urination and low back ache',
      'Later-stage diabetes typically involves Spleen and Kidney deficiency',
    ],
    symptomsZh: [
      '2 型糖尿病',
      '糖尿病周围神经病变（手脚麻木刺痛）',
      '糖尿病肾病早期（蛋白尿）',
      '血糖波动难以稳定',
      '糖尿病足前期',
      '口干多饮多尿',
      '视力模糊',
    ],
    symptomsEn: [
      'Type-2 diabetes',
      'Diabetic peripheral neuropathy (numb, tingling hands/feet)',
      'Early diabetic nephropathy (proteinuria)',
      'Unstable blood sugar readings',
      'Early-stage diabetic foot',
      'Excessive thirst and urination',
      'Blurred vision',
    ],
    treatmentZh:
      '针灸（胰俞、脾俞、足三里、三阴交）+ 个性化中药（含消渴丸系列研究成果，由冯教授亲自配方）+ 食疗方案（定制减糖药膳）。中西医协同治疗，绝不要求患者停用西药。中医可改善血糖控制效果、减轻西药副作用、延缓并发症进展。',
    treatmentEn:
      'Acupuncture at pancreas-supporting points (Yishu, Pishu, Zusanli, Sanyinjiao), personalized herbal formulas drawing on Prof. Feng\'s Xiaoke Wan research, and individualized low-glycemic dietary therapy. We work alongside — never instead of — your primary care team. TCM cannot replace insulin or metformin, but it can meaningfully improve blood sugar control, reduce side effects of medications, and slow the progression of complications.',
    relatedMethodSlugs: ['acupuncture', 'herbal-medicine'],
    highlightZh:
      '冯苏安教授 — 消渴丸联合发明人，获国家专利优秀奖（2015）',
    highlightEn:
      'Prof. Suo An Feng — co-inventor of Xiaoke Wan, recipient of China\'s National Patent Excellence Award (2015).',
    faqZh: [
      {
        q: '中医能治愈糖尿病吗？',
        a: '不能"治愈"。但可以显著改善血糖控制、减少并发症、降低对西药的依赖。我们追求的是"稳住指标、延缓进展、提升生活质量"。',
      },
      {
        q: '可以停二甲双胍或胰岛素吗？',
        a: '绝不建议自行停药。任何西药调整都必须在您的内分泌科医生指导下进行。',
      },
      {
        q: '糖尿病神经病变针灸有效吗？',
        a: '有效。针灸对改善手脚麻木刺痛有良好临床证据，一般 6–8 周可见明显改善。',
      },
      {
        q: '中药会影响血糖吗？',
        a: '部分调理方剂可能轻微影响血糖（通常是降低），我们会要求您加强监测并与内分泌医生保持沟通。',
      },
      {
        q: '多久来一次？',
        a: '初期建议每周 1–2 次，稳定后每 2–4 周维持。',
      },
    ],
    faqEn: [
      {
        q: 'Can TCM cure diabetes?',
        a: 'No — TCM cannot cure diabetes. But it can meaningfully improve blood sugar control, reduce complications, and lower your reliance on certain medications. Our goal is stability, slower progression, and better quality of life.',
      },
      {
        q: 'Can I stop metformin or insulin?',
        a: 'Never on your own. Any medication adjustment must be made with your endocrinologist.',
      },
      {
        q: 'Is acupuncture helpful for diabetic neuropathy?',
        a: 'Yes. There is good clinical evidence for acupuncture reducing the numbness and tingling of peripheral neuropathy — most patients improve within 6–8 weeks.',
      },
      {
        q: 'Will Chinese herbs affect my blood sugar?',
        a: 'Some formulas can mildly lower blood sugar. We\'ll ask you to monitor more frequently and stay in close contact with your endocrinologist.',
      },
      {
        q: 'How often should I come?',
        a: '1–2 visits per week initially, then every 2–4 weeks for maintenance once stable.',
      },
    ],
    relatedDoctors: ['suoan-feng', 'dixu-gao'],
  },

  // ── 13. Men's Health ───────────────────────────────────────────
  {
    slug: 'mens-health',
    icon: 'User',
    image: '/images/conditions/mens-health.svg',
    nameZh: '男科调理',
    nameEn: "Men's Health",
    taglineZh: '100% 私密就诊环境 · 专业保密的男科诊疗',
    taglineEn: 'Completely private, HIPAA-compliant men\'s health care',
    openingZh:
      '男科问题是许多男士"说不出口的痛" — 其实，这些问题比您想象的更普遍，也比您想象的更可治。中医两千年来积累了完整的男科理论体系，从肾虚、湿热到气滞血瘀，每一种失衡都有对应的调理之道。坤德中医为您提供绝对私密的就诊环境和专业保密的医疗流程，帮您把健康找回来。',
    openingEn:
      'Men\'s health issues — from erectile dysfunction to chronic prostatitis to low sperm count — are far more common than most men realize, and far more treatable than most men expect. Chinese Medicine has studied these conditions for over 2,000 years, developing a comprehensive understanding of how kidney energy, circulation, and overall vitality affect male reproductive and sexual health. At Kunde TCM, we offer a fully private clinical environment and a professional, confidential approach — so you can focus on getting better, not on embarrassment.',
    tcmViewZh: [
      '肾虚精亏 — 先天或年久虚损',
      '湿热下注 — 前列腺炎症相关',
      '气滞血瘀 — 压力型性功能问题',
      '命门火衰 — 阳痿、畏寒',
    ],
    tcmViewEn: [
      'Kidney essence deficiency — constitutional or long-term depletion',
      'Damp-heat in the lower burner — associated with prostatitis',
      'Qi and blood stagnation — stress-related sexual dysfunction',
      'Mingmen fire decline — erectile dysfunction, sensitivity to cold',
    ],
    symptomsZh: [
      '阳痿 · 早泄 · 勃起功能障碍',
      '前列腺炎（慢性 / 急性）',
      '前列腺增生',
      '精子质量差（活力低、形态异常）',
      '男性不育',
      '性功能减退',
      '腰膝酸软 · 夜尿频繁',
      '疲倦乏力',
    ],
    symptomsEn: [
      'Erectile dysfunction and premature ejaculation',
      'Chronic or acute prostatitis',
      'Benign prostatic hyperplasia (BPH)',
      'Poor sperm quality — motility, morphology, count',
      'Male-factor infertility',
      'Reduced libido',
      'Low-back weakness and frequent nighttime urination',
      'Persistent fatigue',
    ],
    treatmentZh:
      '针灸（关元、气海、肾俞、三阴交等）+ 中药（补肾益精、清热利湿等个性化方剂）+ 艾灸（命门、神阙温补肾阳）。对于不孕不育夫妇，我们主张男女双方同时调理。疗程一般 3 个月为一个疗程，精子质量改善需配合生活方式调整。',
    treatmentEn:
      'Acupuncture at Guanyuan, Qihai, Shenshu, and Sanyinjiao; personalized herbal formulas for kidney support or damp-heat clearing; and warming moxibustion on Mingmen and Shenque. For fertility-seeking couples, we strongly recommend both partners receive care together. A standard course runs about 3 months, with sperm-quality improvements requiring lifestyle adjustments as well.',
    relatedMethodSlugs: ['acupuncture', 'herbal-medicine', 'moxibustion-guasha'],
    highlightZh: '100% 私密就诊环境，病历严格遵守 HIPAA 法规',
    highlightEn: '100% private consultation rooms, fully HIPAA-compliant records',
    faqZh: [
      {
        q: '就诊会很尴尬吗？',
        a: '我们为男科患者提供单独诊室、单独出入通道，接诊医师均经专项培训，严格保密。绝不会在公共区域讨论您的具体情况。',
      },
      {
        q: '慢性前列腺炎能治好吗？',
        a: '慢性前列腺炎比较棘手，但针灸配合中药的整合方案常能显著改善症状。一般需要 2–3 个月的持续治疗。',
      },
      {
        q: '针灸会扎在敏感部位吗？',
        a: '不会。我们使用的是腹部、腰部、四肢等远端穴位，完全无需暴露敏感部位。',
      },
      {
        q: '精子质量多久能改善？',
        a: '精子生成周期约 72–90 天，所以至少需要 3 个月才能看到明显的精液分析改善。',
      },
      {
        q: '可以和西医药物同时使用吗？',
        a: '可以。我们与您的泌尿科或男科医生协同工作，告知所有在服药物即可。',
      },
    ],
    faqEn: [
      {
        q: 'Will my visit be awkward or exposed?',
        a: 'No. We offer fully private treatment rooms, discreet entry, and practitioners trained in men\'s health. Your records and conversations are strictly confidential under HIPAA.',
      },
      {
        q: 'Can chronic prostatitis be cured?',
        a: 'Chronic prostatitis is stubborn, but our acupuncture + herbal protocol often produces meaningful symptom relief over a 2–3 month course of care.',
      },
      {
        q: 'Will the needles go anywhere sensitive?',
        a: 'No. We use points on the abdomen, lower back, and extremities. There is no need to expose sensitive areas.',
      },
      {
        q: 'How long does sperm quality take to improve?',
        a: 'Sperm cells mature over 72–90 days, so meaningful changes on a semen analysis typically take at least 3 months of treatment and lifestyle work.',
      },
      {
        q: 'Can I take TCM alongside my urologist\'s prescriptions?',
        a: 'Yes. We coordinate care with your urologist or men\'s health physician — just bring a list of your current medications.',
      },
    ],
    relatedDoctors: ['suoan-feng', 'dixu-gao'],
  },

  // ── 14. Digestive Health ───────────────────────────────────────
  {
    slug: 'digestive-health',
    icon: 'Soup',
    image: '/images/conditions/digestive-health.svg',
    nameZh: '胃肠道不适',
    nameEn: 'Gastrointestinal Disorders',
    taglineZh: '脾胃为后天之本 — 找回"吃什么都香"的感觉',
    taglineEn: 'Rebuild your "root of acquired Qi" — the digestive system',
    openingZh:
      '吃什么都胀、稍微紧张就胃疼、便秘与腹泻轮流来 — 胃肠问题看似小事，却实实在在地偷走您每天的生活质量。中医称"脾胃为后天之本" — 吃得好、消化得好，气血才能生化，身体才能强壮。坤德中医的胃肠专科由冯苏安教授（胃乃安发明人之一）及常医生联合主诊，为您找回那种"吃什么都香"的感觉。',
    openingEn:
      'Bloating after every meal. Stomach pain triggered by stress. Constipation one week, diarrhea the next. Digestive issues seem minor until they start stealing your quality of life — one uncomfortable day at a time. In TCM, digestive health is the foundation of overall wellness — "the Spleen and Stomach are the root of postnatal energy." At Kunde TCM, our digestive specialty is led by Prof. Suo An Feng, co-inventor of the Weinaian formula for stomach disorders, and Senior Chang, a veteran in both adult and pediatric digestive care. We specialize in the functional digestive conditions — IBS, GERD, chronic bloating — that often slip through the cracks of conventional medicine.',
    tcmViewZh: [
      '脾胃不和 — 腹胀、食欲差',
      '肝气犯胃 — 压力型胃痛、嗳气',
      '脾胃虚寒 — 受凉即腹泻',
      '胃阴不足 — 口干、灼热、反酸',
      '湿热蕴脾 — 口苦、大便黏腻',
    ],
    tcmViewEn: [
      'Spleen and Stomach disharmony — bloating and poor appetite',
      'Liver Qi invading the Stomach — stress-induced stomach pain and belching',
      'Spleen-Stomach cold deficiency — diarrhea triggered by cold food or weather',
      'Stomach yin deficiency — dry mouth, burning, and reflux',
      'Damp-heat in the Spleen — bitter taste and sticky stools',
    ],
    symptomsZh: [
      '慢性胃炎',
      '胃食管反流 (GERD)',
      '胃溃疡 · 十二指肠溃疡',
      '肠易激综合症 (IBS)',
      '功能性消化不良',
      '慢性便秘 · 慢性腹泻',
      '腹胀嗳气',
      '结肠炎',
      '幽门螺杆菌相关胃病（中西结合辅助）',
    ],
    symptomsEn: [
      'Chronic gastritis',
      'GERD (acid reflux)',
      'Gastric and duodenal ulcers',
      'IBS (irritable bowel syndrome)',
      'Functional dyspepsia',
      'Chronic constipation and chronic diarrhea',
      'Bloating and belching',
      'Colitis',
      'H. pylori support (alongside Western treatment)',
    ],
    treatmentZh:
      '针灸（足三里、中脘、天枢、内关等胃肠要穴）+ 中药（根据寒热虚实个性化配方，含胃乃安系列研究成果）+ 推拿腹部手法（助运化）+ 食疗指导。常医生擅长小儿厌食、消化不良、便秘等儿科胃肠问题。',
    treatmentEn:
      'Acupuncture at key digestive points (Zusanli, Zhongwan, Tianshu, Neiguan), personalized herbal formulas drawing on Prof. Feng\'s Weinaian research, abdominal Tui Na to support peristalsis, and individualized dietary guidance. Senior Chang is especially skilled with pediatric digestive issues — childhood appetite loss, slow digestion, and constipation.',
    relatedMethodSlugs: ['acupuncture', 'herbal-medicine', 'tuina'],
    highlightZh:
      '针对 IBS、GERD 等"西医难治"的功能性胃肠病有显著疗效',
    highlightEn:
      'Particularly effective for IBS, GERD, and other functional GI conditions that slip through conventional care',
    faqZh: [
      {
        q: 'IBS 中医真的能治吗？',
        a: '能。IBS 在西医中常被归类为"功能性"难治病，但中医通过辨证（脾虚、肝郁、湿热等）能找到根本原因并调理，多数患者 2–3 个月明显改善。',
      },
      {
        q: '胃食管反流可以调理吗？',
        a: '可以。针灸降胃气、中药清胃热或和胃降逆，配合饮食调整效果良好。严重者仍需配合西医药物。',
      },
      {
        q: '小孩厌食能看吗？',
        a: '常医生专长儿科胃肠，3 岁以上儿童可就诊，使用小儿推拿与温和中药。',
      },
      {
        q: '需要忌口吗？',
        a: '会根据您的证型给出饮食建议。一般避免生冷、油腻、辛辣、过甜食物。',
      },
      {
        q: '幽门螺杆菌中医能杀吗？',
        a: '中药无法替代抗生素根除幽门螺杆菌，但可作为辅助，减轻抗生素副作用与复发。',
      },
    ],
    faqEn: [
      {
        q: 'Can TCM really help IBS?',
        a: 'Yes. IBS is often labeled "functional" in Western medicine, but TCM diagnoses patterns (Spleen deficiency, Liver stagnation, damp-heat) and treats the root cause. Most patients see meaningful improvement within 2–3 months.',
      },
      {
        q: 'What about GERD / acid reflux?',
        a: 'Yes. Acupuncture helps "descend" stomach Qi and herbal formulas clear stomach heat. For severe cases we work alongside your prescribed PPI or H2 blocker.',
      },
      {
        q: 'Do you treat children with digestive issues?',
        a: 'Senior Chang specializes in pediatric GI care. We see children over 3 using pediatric Tui Na and gentle herbal formulas.',
      },
      {
        q: 'Will I need to change my diet?',
        a: 'Yes — we give personalized dietary guidance based on your pattern. Most patients do best avoiding cold, greasy, spicy, and very sweet foods.',
      },
      {
        q: 'Can TCM eradicate H. pylori?',
        a: 'Chinese herbs cannot replace antibiotics for H. pylori eradication, but they can reduce antibiotic side effects and lower the chance of recurrence.',
      },
    ],
    relatedDoctors: ['suoan-feng', 'senior-chang'],
  },

  // ── 15. Complex Conditions ────────────────────────────────────
  {
    slug: 'complex-conditions',
    icon: 'Stethoscope',
    image: '/images/conditions/complex-conditions.svg',
    nameZh: '疑难病症',
    nameEn: 'Complex & Rare Conditions',
    taglineZh: '从瘀论治，是中医学的亮点之一',
    taglineEn: 'Where Western medicine plateaus, TCM offers a different lens',
    openingZh:
      '"对疑难病症从瘀论治，是中医学的亮点之一，既有特色又显神奇。" 对于常规西医处理效果有限的慢性复杂病症，中医以辨证论治的整体框架入手，常能找到被忽视的根本环节。坤德中医由冯苏安教授亲诊疑难杂症，可与您的西医主治医师协同。',
    openingEn:
      'When conventional treatments haven\'t provided the answers you need, Traditional Chinese Medicine offers a different perspective. Our experienced practitioners specialize in complex, chronic conditions — using a combination of acupuncture, herbal medicine, and holistic assessment to address what Western medicine may have overlooked. At Kunde TCM these cases are led by Prof. Suo An Feng in close coordination with your primary medical team.',
    tcmViewZh: [
      '久病多瘀 — 慢性病常见气血瘀阻',
      '久病入络 — 病邪深入经络与血分',
      '扶正祛邪 — 兼顾正气与病邪',
    ],
    tcmViewEn: [
      '"Long illness, much stasis" — chronic disease typically shows Qi and blood stagnation',
      '"Long illness enters the collaterals" — pathogens penetrate deeper meridian layers',
      'Support the upright, expel the pathogen — treatment addresses both sides',
    ],
    symptomsZh: [
      '自身免疫病辅助（类风湿、狼疮等）',
      '肿瘤放化疗副作用缓解',
      '慢性疲劳综合症',
      '纤维肌痛',
      '慢性皮肤病（湿疹、皮肤瘙痒）',
      '不明原因的疼痛或乏力',
    ],
    symptomsEn: [
      'Support for autoimmune conditions (RA, lupus)',
      'Relief from chemotherapy and radiation side effects',
      'Chronic fatigue syndrome',
      'Fibromyalgia',
      'Stubborn skin conditions (eczema, itching)',
      'Unexplained pain or persistent fatigue',
    ],
    treatmentZh:
      '综合方案，因人制宜。冯苏安教授会根据具体病情调配个性化中药方剂，配合针灸调气血、艾灸扶阳气、食疗补虚损。我们始终与您的西医主治医师协同，而不是替代。',
    treatmentEn:
      'Every complex case gets a custom protocol built by Prof. Feng. We combine personalized herbal formulas, acupuncture to move Qi and blood, moxibustion to support yang, and dietary therapy for deficiency. We always work in coordination with — never in place of — your primary medical team.',
    relatedMethodSlugs: ['acupuncture', 'herbal-medicine', 'moxibustion-guasha'],
    faqZh: [
      {
        q: '我的病情西医都没办法，中医有希望吗？',
        a: '中医的思路与西医不同，有时能在西医看似"无解"的病例中找到调理方向。具体效果需要初诊评估后才能说明，我们不会许下不切实际的承诺。',
      },
      {
        q: '正在做化疗可以做针灸吗？',
        a: '可以。针灸是 NIH 认可的化疗辅助疗法之一，能帮助缓解恶心、疲劳、神经病变等副作用。',
      },
      {
        q: '慢性疲劳综合症多久能好？',
        a: '慢性疲劳属于长期体质问题，通常需要 3–6 个月持续调理，效果因人而异。',
      },
      {
        q: '自身免疫病中医能治吗？',
        a: '中医无法"治愈"自身免疫病，但作为辅助可改善症状、减少激素用量、降低发作频率。',
      },
      {
        q: '多久看到改善？',
        a: '疑难病症改善较慢，一般需要 2–3 个月的持续治疗才能做出初步评估。',
      },
    ],
    faqEn: [
      {
        q: 'If Western medicine has no answer, can TCM really help?',
        a: 'TCM uses a different framework, and sometimes finds a treatment direction where Western medicine has plateaued. We\'ll give you an honest assessment after your first visit rather than making unrealistic promises.',
      },
      {
        q: 'Can I get acupuncture during chemotherapy?',
        a: 'Yes. Acupuncture is recognized by the NIH as a complementary therapy for chemo-induced nausea, fatigue, and peripheral neuropathy.',
      },
      {
        q: 'How long for chronic fatigue syndrome?',
        a: 'CFS is a long-standing constitutional issue and generally takes 3–6 months of consistent treatment. Results vary by case.',
      },
      {
        q: 'Can TCM treat autoimmune disease?',
        a: 'TCM cannot cure autoimmune conditions, but it can meaningfully reduce symptoms, lower flare frequency, and support a reduction in steroid dependence over time.',
      },
      {
        q: 'How long until I see results?',
        a: 'Complex cases improve slowly. We typically re-evaluate after 2–3 months of consistent treatment.',
      },
    ],
    relatedDoctors: ['suoan-feng', 'dixu-gao'],
  },
];

export function getCondition(slug: string): Condition | undefined {
  return conditions.find((c) => c.slug === slug);
}
