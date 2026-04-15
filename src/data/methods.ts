// Full bilingual data for the 8 treatment methods (/[lang]/methods/[slug]).
// Chinese copy is adapted from scheme section 3.4 (ny-fsa.com source material).
// English copy is NOT a direct translation — it is rewritten for US Western
// audiences per the plan's §7 bilingual rule.
// No medical data is fabricated; claims follow what ny-fsa.com states publicly.

export interface FAQ {
  q: string;
  a: string;
}

export interface Method {
  slug: string;
  icon: string;
  image: string;

  nameZh: string;
  nameEn: string;
  taglineZh: string;
  taglineEn: string;

  /** Classical quote or brand opening — shown as pull-quote (Chinese only) */
  originQuoteZh?: string;
  /** Rendered introductory paragraph — below the quote */
  introZh: string;
  introEn: string;

  /** Principles / "What is" bullet list (2–5 items) */
  principlesZh: string[];
  principlesEn: string[];

  /** Applications / use-cases (each bullet may reference a condition slug) */
  applicationsZh: { title: string; body: string; conditionSlug?: string }[];
  applicationsEn: { title: string; body: string; conditionSlug?: string }[];

  /** Operation flow / procedure steps */
  procedureZh: string[];
  procedureEn: string[];

  faqZh: FAQ[];
  faqEn: FAQ[];

  /** Doctors (by slug) shown in "Related Practitioners" */
  relatedDoctors: string[];
  /** Condition slugs shown in "Best for" links */
  relatedConditions: string[];
}

export const methods: Method[] = [
  // ────────────────────────────────────────────────────────────────────
  // 1. ACUPUNCTURE — SEO killer page (see 4.1.1)
  // ────────────────────────────────────────────────────────────────────
  {
    slug: 'acupuncture',
    icon: 'Activity',
    image: '/images/methods/acupuncture.svg',
    nameZh: '针灸',
    nameEn: 'Acupuncture',
    taglineZh: '纽约针灸 · 针灸诊所 — 体针 · 耳针 · 电针，调和气血',
    taglineEn:
      'Body, auricular & electro-acupuncture at our licensed NYC acupuncture clinic',
    originQuoteZh:
      '"刺之要，气至而有效。" — 从保养预防到诊治疾病，透过针灸手法能让你体验快速、显著、无副作用的疗效。',
    introZh:
      '坤德中医是一家扎根纽约 20 余年的针灸诊所，我们的纽约针灸服务由 8 位纽约州执照针灸师提供，涵盖体针、耳针、电针三大手法，通过刺激经络穴位、调和气血，从保养预防到治疗疑难病症，为法拉盛、曼哈顿及米德尔顿的患者提供个性化诊疗。',
    introEn:
      'Kunde TCM is a trusted acupuncture clinic in NYC, with 5 locations across Flushing and Manhattan. Our 8 New York State-licensed acupuncturists deliver body, auricular, and electro-acupuncture treatments rooted in 20+ years of clinical experience. Every session begins with a full TCM diagnosis and a personalized point prescription — no two treatments are ever the same.',
    principlesZh: [
      '体针：刺激全身经络腧穴，调节脏腑功能与气血运行。',
      '耳针：耳廓反射全身，多用于戒断、镇痛与情志调节。',
      '电针：在毫针基础上加入低频脉冲，强化穴位刺激，常用于面瘫、神经病变。',
      '全部使用无菌一次性毫针，严格遵守 NCCAOM 与 NY State 无菌规程。',
    ],
    principlesEn: [
      'Body acupuncture stimulates meridian points across the torso and limbs to rebalance organ function and circulation.',
      'Auricular (ear) acupuncture targets microsystem points on the ear — widely used for addiction recovery, pain, and mood.',
      'Electro-acupuncture adds gentle low-frequency pulses through sterile needles, ideal for Bell\'s palsy, nerve recovery, and stubborn pain.',
      'Every needle is single-use, pre-sterilized, and disposed of according to NY State and NCCAOM standards.',
    ],
    applicationsZh: [
      {
        title: '疼痛管理',
        body: '针对头痛、偏头痛、腰背痛、颈肩痛、术后痛、运动损伤与慢性疼痛。',
        conditionSlug: 'pain-management',
      },
      {
        title: '安稳神经系统',
        body: '改善疼痛、酸胀、麻木与自主神经失调，帮助缓解神经病变。',
        conditionSlug: 'facial-palsy',
      },
      {
        title: '平衡荷尔蒙 · 减压',
        body: '调节压力反应，改善失眠、焦虑与更年期症状。',
        conditionSlug: 'insomnia',
      },
      {
        title: '纾解情绪困扰',
        body: '针对焦虑、低潮、创伤后应激反应（PTSD）等情志问题。',
        conditionSlug: 'anxiety-depression',
      },
      {
        title: '辅助肿瘤治疗',
        body: '缓解化疗放疗副作用，NIH 认可的补充疗法之一。',
        conditionSlug: 'complex-conditions',
      },
      {
        title: '妇科诸症',
        body: '从受孕、月经不调到更年期调理；可与 IVF/IUI 疗程协同。',
        conditionSlug: 'fertility',
      },
      {
        title: '美容养颜',
        body: '调节气血与内分泌，改善面色与皮肤状态。',
        conditionSlug: 'herbal-beauty',
      },
    ],
    applicationsEn: [
      {
        title: 'Pain Relief',
        body: 'Migraines, tension headaches, back pain, neck and shoulder tightness, post-surgical pain, sports injuries, and chronic pain conditions.',
        conditionSlug: 'pain-management',
      },
      {
        title: 'Neurological Support',
        body: 'Nerve-related numbness and tingling, Bell\'s palsy recovery, post-stroke rehabilitation, and autonomic nervous system balance.',
        conditionSlug: 'facial-palsy',
      },
      {
        title: 'Stress & Hormonal Balance',
        body: 'Insomnia, anxiety-related sleep issues, perimenopause and menopause symptom relief.',
        conditionSlug: 'insomnia',
      },
      {
        title: 'Emotional Well-being',
        body: 'Anxiety, low mood, and trauma-related conditions such as PTSD — acupuncture calms the nervous system without medication.',
        conditionSlug: 'anxiety-depression',
      },
      {
        title: 'Cancer Supportive Care',
        body: 'Recognized by the NIH as a complementary therapy for chemotherapy-induced nausea, fatigue, and neuropathy.',
        conditionSlug: 'complex-conditions',
      },
      {
        title: 'Fertility & Women\'s Health',
        body: 'From natural conception and IVF/IUI support to menstrual regulation and menopausal care.',
        conditionSlug: 'fertility',
      },
      {
        title: 'Facial & Cosmetic Acupuncture',
        body: 'Internal balance that reflects on the skin — improving tone, circulation, and overall complexion.',
        conditionSlug: 'herbal-beauty',
      },
    ],
    procedureZh: [
      '初诊评估 — 望、闻、问、切四诊合参，确定体质与证型。',
      '辨证取穴 — 根据证型与主诉精选 8–15 个穴位。',
      '进针 — 使用无菌一次性毫针，轻快进针，得气为度。',
      '留针 — 通常 30–45 分钟，部分方案加电针或 TDP 红外。',
      '出针与建议 — 起针后给予居家保健建议与复诊计划。',
    ],
    procedureEn: [
      'Intake & TCM diagnosis — a full history, pulse and tongue assessment to map your pattern of imbalance.',
      'Point selection — your practitioner chooses 8 to 15 acupoints based on both your symptoms and your constitutional pattern.',
      'Needling — single-use sterile needles are inserted quickly and shallowly; most patients feel only a dull "heaviness" called de qi.',
      'Retention — needles typically remain for 30 to 45 minutes, sometimes paired with electro-stimulation or TDP infrared.',
      'Removal & aftercare — the practitioner reviews at-home guidance and plans your follow-up schedule.',
    ],
    faqZh: [
      {
        q: '纽约针灸诊所的针灸痛吗？',
        a: '坤德中医使用极细的一次性毫针（直径仅 0.18–0.25mm），进针迅速，大多数患者感受到的只是轻微酸胀或温热感（中医称"得气"），远非打针的疼痛。',
      },
      {
        q: '针灸需要多少次疗程才有效？',
        a: '急性疼痛一般 2–4 次可见缓解；慢性病、妇科与不孕不育通常建议每周 1–2 次、连续 3 个月为一疗程。坤德中医会根据您的情况定制具体方案。',
      },
      {
        q: '坤德的纽约针灸诊所接受保险吗？',
        a: '是的，我们接受 UHC、Aetna、Cigna、Oxford、Empire BlueCross BlueShield、NYSHIP 6 大主流保险。初诊前可填写保险验证表，免费确认您的针灸福利。',
      },
      {
        q: '针灸可以配合西医治疗吗？',
        a: '完全可以。针灸与大多数西药、物理治疗、IVF/IUI 生育治疗不冲突。我们鼓励患者如实告知所有在服药物与正在进行的治疗，以便协同配合。',
      },
      {
        q: '第一次针灸需要注意什么？',
        a: '建议穿宽松衣物便于穴位暴露、就诊前吃点东西（避免空腹）、不要大量运动或饮酒。初诊约 60 分钟，后续复诊约 45 分钟。',
      },
      {
        q: '针灸治疗面瘫有效吗？',
        a: '针灸治疗面瘫（贝尔氏麻痹）已有大量临床证据支持，尤其在发病后 7–14 天内介入效果最佳。坤德中医面瘫专科由张长松医生与金切尔西医生主诊。',
      },
    ],
    faqEn: [
      {
        q: 'Does acupuncture hurt?',
        a: 'Most patients are surprised by how painless it is. Our single-use needles are extremely thin (0.18–0.25 mm) — far thinner than the needles used for injections. You may feel a mild ache or warmth around the point, which practitioners call de qi.',
      },
      {
        q: 'How many sessions will I need?',
        a: 'Acute pain often improves within 2–4 sessions. Chronic conditions, fertility care, and women\'s health typically benefit from once or twice weekly treatments over a 3-month course. We\'ll design a plan that fits your goals after your first visit.',
      },
      {
        q: 'Does Kunde TCM accept insurance for acupuncture in NYC?',
        a: 'Yes — we accept UHC, Aetna, Cigna, Oxford, Empire BlueCross BlueShield, and NYSHIP. Before your first visit you can submit a free benefits-verification form and we\'ll confirm exactly what is covered.',
      },
      {
        q: 'Can acupuncture be combined with Western medicine?',
        a: 'Absolutely. Acupuncture is compatible with most prescription medications, physical therapy, and fertility protocols including IVF and IUI. We always coordinate care — please bring a list of your current medications to your first visit.',
      },
      {
        q: 'What should I do before my first appointment?',
        a: 'Wear loose, comfortable clothing, eat something light beforehand (never come on an empty stomach), and avoid strenuous exercise or alcohol that day. Initial visits take about 60 minutes; follow-ups are usually 45.',
      },
      {
        q: 'Is acupuncture effective for Bell\'s palsy?',
        a: 'Yes — acupuncture for Bell\'s palsy is one of the most well-documented TCM applications. Outcomes are significantly better when treatment begins within the first 7–14 days of symptom onset.',
      },
    ],
    relatedDoctors: ['serene-feng', 'yang-gui', 'chelsea-jin', 'alina-hu'],
    relatedConditions: [
      'pain-management',
      'fertility',
      'insomnia',
      'facial-palsy',
      'anxiety-depression',
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  // 2. HERBAL MEDICINE — SEO killer page (see 4.1.1)
  // ────────────────────────────────────────────────────────────────────
  {
    slug: 'herbal-medicine',
    icon: 'Leaf',
    image: '/images/methods/herbal-medicine.svg',
    nameZh: '中药与药膳食疗',
    nameEn: 'Chinese Herbal Medicine',
    taglineZh: '法拉盛中药调理 — 量身定制方剂，真空包装配送全美',
    taglineEn:
      'Chinese Herbal Medicine in Flushing — custom formulas, vacuum-sealed, shipped nationwide',
    originQuoteZh:
      '"空腹食之为食物，患者食之为药物。" —《黄帝内经》药食同源，食物与药物皆可防治疾病。',
    introZh:
      '坤德中医是法拉盛中药调理的专科诊所，我们的中药服务根据您的体质辨证个性化配方，由院长与资深中药师馮苏安教授亲自把关，提供水药、科学中药与代客煎煮三种形式，真空无菌包装、全美配送，让您在家就能安心服用道地药材。',
    introEn:
      'At Kunde TCM we practice Chinese herbal medicine the way it was meant to be practiced — personalized formulas, carefully sourced ingredients, and preparation supervised by our senior herbalist Prof. Suo An Feng. Each prescription is built around your constitution, your symptoms, and your current medications, then vacuum-sealed for easy at-home use. We ship nationwide from our Flushing pharmacy.',
    principlesZh: [
      '辨证施治 — 根据您的体质（四性：寒热温凉）与经络理论配制复方，而非标准化成药。',
      '多种剂型 — 水药、科学中药颗粒、代客煎煮真空包装，按您的生活节奏选择。',
      '道地药材 — 院长与馮苏安教授亲自挑选产地与批次，严格品控。',
      '可与西药协同 — 需告知所有在服西药，我们会避开已知相互作用。',
    ],
    principlesEn: [
      'Pattern-based prescribing — formulas are designed from your unique constitution and symptom pattern, not from one-size-fits-all pills.',
      'Multiple formats — raw decoction, granule concentrates, and pre-cooked vacuum-sealed packets you can warm in minutes.',
      'Sourcing you can trust — every herb is batch-selected by our senior herbalist, with documented origin and quality controls.',
      'Coordinated with your prescriptions — tell us everything you take and we will design around known drug-herb interactions.',
    ],
    applicationsZh: [
      {
        title: '慢性病调理',
        body: '糖尿病、三高、慢性胃炎、慢性呼吸道疾病的辅助调理。',
        conditionSlug: 'diabetes',
      },
      {
        title: '免疫与呼吸道',
        body: '反复感冒、过敏、长新冠后遗症、哮喘辅助。',
        conditionSlug: 'respiratory-health',
      },
      {
        title: '妇科与不孕',
        body: '月经不调、痛经、备孕、习惯性流产、更年期综合症。',
        conditionSlug: 'womens-health',
      },
      {
        title: '胃肠调理',
        body: 'IBS、胃食管反流、慢性便秘、腹胀与消化不良。',
        conditionSlug: 'digestive-health',
      },
      {
        title: '药膳食疗',
        body: '坤德珍馔系列 — 当归羊肉羹、山楂荷叶消脂茶、四君子汤等，真空包装配送。',
      },
    ],
    applicationsEn: [
      {
        title: 'Chronic Condition Support',
        body: 'Complementary support for type-2 diabetes, blood pressure, cholesterol, chronic gastritis, and long-standing respiratory issues.',
        conditionSlug: 'diabetes',
      },
      {
        title: 'Immunity & Respiratory Health',
        body: 'Frequent colds, seasonal allergies, lingering post-COVID symptoms, and asthma support.',
        conditionSlug: 'respiratory-health',
      },
      {
        title: 'Women\'s Health & Fertility',
        body: 'Menstrual irregularities, period pain, preconception care, recurrent miscarriage support, and menopausal symptom relief.',
        conditionSlug: 'womens-health',
      },
      {
        title: 'Digestive Care',
        body: 'IBS, GERD, chronic constipation, bloating, and functional digestive complaints.',
        conditionSlug: 'digestive-health',
      },
      {
        title: 'Medicinal Cuisine (Yao Shan)',
        body: 'Our Kunde Zhen Zhuan line — ready-to-heat dishes and teas like angelica lamb stew, hawthorn-lotus slimming tea, and Si Jun Zi Tang — all vacuum-sealed for home use.',
      },
    ],
    procedureZh: [
      '初诊辨证 — 望闻问切 + 必要时参考您的西医化验单，确立证型。',
      '配方开立 — 院长或资深中药师开具复方并记录所用药材。',
      '煎煮或发药 — 代客煎煮并真空包装，或直接发放科学中药颗粒。',
      '服药指导 — 给予温度、时辰、饮食禁忌与回诊建议。',
      '定期调整 — 一般每 2–4 周调整一次方剂，随病情演变加减。',
    ],
    procedureEn: [
      'Intake & pattern diagnosis — a full TCM assessment plus review of any recent bloodwork or imaging you choose to share.',
      'Formula design — your prescription is written and documented by our lead herbalist, with every ingredient logged.',
      'Preparation — choose raw decoction (we can cook and vacuum-seal it for you), granules, or ready-to-heat packets.',
      'Dosing guidance — you\'ll receive written instructions on timing, temperature, and food interactions.',
      'Follow-up adjustments — formulas are re-evaluated every 2–4 weeks as your condition evolves.',
    ],
    faqZh: [
      {
        q: '法拉盛中药调理的中药可以和西药一起吃吗？',
        a: '大多数情况下可以。我们会要求您提供完整的在服西药清单，避开已知的药草-药物相互作用。服药时间通常建议间隔 1–2 小时。',
      },
      {
        q: '真空包装的中药可以放多久？',
        a: '冷藏 4°C 可保存 3–4 周，冷冻可保存 3 个月。食用时微波或隔水加热即可，不破坏药效。',
      },
      {
        q: '中药味道很苦吗？',
        a: '部分方剂确实偏苦，但我们可以选择科学中药颗粒或加入少量蜂蜜（非糖尿病患者）改善口感。我们也提供药膳食疗作为更温和的替代。',
      },
      {
        q: '你们会把中药寄到纽约以外的州吗？',
        a: '会。所有真空包装产品均可快递配送全美，订购电话 (718) 888-9087。',
      },
      {
        q: '坤德中药是谁把关的？',
        a: '由院长馮羅小潔 DAOM 与资深中药师馮苏安教授亲自挑选药材与配方。馮教授是国家专利消渴丸与胃乃安联合发明人之一。',
      },
    ],
    faqEn: [
      {
        q: 'Can I take Chinese herbs alongside my prescription medications?',
        a: 'In most cases, yes — but please share a complete medication list with us first. Our herbalists screen every formula against known drug-herb interactions and typically space dosing 1–2 hours apart from your prescriptions.',
      },
      {
        q: 'How long do the vacuum-sealed herbal packets last?',
        a: 'Refrigerated at 4°C they keep for 3–4 weeks; frozen, they last up to 3 months. Just warm the packet in the microwave or a pot of water before drinking.',
      },
      {
        q: 'How bitter are Chinese herbs?',
        a: 'Some formulas are genuinely bitter — it is part of how they work. If taste is an issue we can switch you to granules or add a small amount of honey (when appropriate). Our medicinal cuisine line is a gentler alternative.',
      },
      {
        q: 'Do you ship herbs outside New York?',
        a: 'Yes. All vacuum-sealed formulas and medicinal cuisine products can be shipped anywhere in the US. Call (718) 888-9087 to place an order.',
      },
      {
        q: 'Who supervises the herbal pharmacy at Kunde TCM?',
        a: 'Our pharmacy is supervised by Dr. Serene Feng, DAOM, and senior herbalist Prof. Suo An Feng — a co-inventor of the nationally patented Xiaoke Wan (for diabetes) and Weinaian (for stomach disorders) formulas.',
      },
    ],
    relatedDoctors: ['serene-feng', 'suoan-feng', 'senior-chang'],
    relatedConditions: [
      'diabetes',
      'digestive-health',
      'womens-health',
      'respiratory-health',
      'complex-conditions',
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  // 3. BIANSTONE
  // ────────────────────────────────────────────────────────────────────
  {
    slug: 'bianstone',
    icon: 'Gem',
    image: '/images/methods/bianstone.svg',
    nameZh: '砭石热石疗法',
    nameEn: 'Bianstone & Hot Stone Therapy',
    taglineZh: '天地人合一的石疗法，治痛 · 去郁 · 放松',
    taglineEn: 'Volcanic bianstone therapy that eases pain and deep tension',
    originQuoteZh:
      '"天地人合一的石疗法" — 我们用吸收天地之气的石头，搭配中医经络穴位，为你治痛、去郁、放松。',
    introZh:
      '砭石热石疗法是坤德中医结合天然矿石与经络理论的独特身心调理方案。砭石采用天然泗滨石，热石采用火山玄武岩，两种石头都蕴含丰富的矿物微量元素，配合中医穴位手法，唤醒疲惫身体、激活淋巴与血液循环。',
    introEn:
      'Bianstone therapy harnesses the healing power of ancient volcanic minerals, combined with the precision of acupressure point mapping. Using 28 specialized techniques — from warm stone placement to gentle scraping — this therapy activates your lymphatic and circulatory systems, eases pain, releases deep tension, and promotes the kind of relaxation most patients describe as "a reset".',
    principlesZh: [
      '砭石：天然泗滨砭石，含多种对人体有益矿物微量元素。',
      '热石：火山玄武岩，耐热至 145°F，按部位调整温度。',
      '28 种手法：温、凉、感、扭、划、刮、扣等，循经络点穴施治。',
    ],
    principlesEn: [
      'Bianstone is a naturally-formed mineral stone traditionally used in Chinese medicine for over two thousand years.',
      'Hot stones are volcanic basalt — dense enough to retain therapeutic heat up to 145°F, adjusted by body region.',
      '28 hands-on techniques map to acupressure points along the meridians, turning the stones into extensions of the therapist\'s hands.',
    ],
    applicationsZh: [
      {
        title: '缓解疼痛',
        body: '尤其针对纤维肌痛等自身免疫相关疼痛。',
        conditionSlug: 'pain-management',
      },
      {
        title: '减压与焦虑',
        body: '温热传导帮助副交感神经激活，缓解长期压力。',
        conditionSlug: 'anxiety-depression',
      },
      { title: '关节灵活度', body: '改善肩颈腰腿僵硬，恢复活动幅度。' },
      {
        title: '胃肠蠕动',
        body: '改善消化不良与便秘，温补脾胃。',
        conditionSlug: 'digestive-health',
      },
      {
        title: '改善睡眠',
        body: '研究显示热石按摩可减少焦虑、促进入睡。',
        conditionSlug: 'insomnia',
      },
    ],
    applicationsEn: [
      {
        title: 'Pain Relief',
        body: 'Especially helpful for fibromyalgia and other autoimmune-related pain syndromes.',
        conditionSlug: 'pain-management',
      },
      {
        title: 'Stress & Anxiety',
        body: 'Radiant warmth activates the parasympathetic nervous system — the body\'s natural "rest and digest" mode.',
        conditionSlug: 'anxiety-depression',
      },
      { title: 'Joint Mobility', body: 'Restores range of motion in stiff shoulders, neck, and lower back.' },
      {
        title: 'Digestive Support',
        body: 'Gentle abdominal placement eases bloating, constipation, and sluggish digestion.',
        conditionSlug: 'digestive-health',
      },
      {
        title: 'Better Sleep',
        body: 'Clinical studies on hot stone massage show reductions in anxiety and improvements in sleep onset.',
        conditionSlug: 'insomnia',
      },
    ],
    procedureZh: [
      '评估体质与敏感度，选择手法组合。',
      '加热砭石/热石至合适温度。',
      '沿督脉、膀胱经等主要经络放置或滑行。',
      '重点穴位以点、刮、扣等 28 种手法施治。',
      '结束后补充温水，建议休息 10–15 分钟再外出。',
    ],
    procedureEn: [
      'Initial assessment of constitution and heat tolerance.',
      'Stones are warmed to a safe, individualized temperature.',
      'Placement along the Du and Bladder meridians on the back.',
      'Targeted work on priority acupressure points using the 28-technique system.',
      'Warm water, gentle rest for 10–15 minutes, and light aftercare guidance.',
    ],
    faqZh: [
      {
        q: '砭石疗法会烫伤吗？',
        a: '不会。我们严格控制温度，并随时与您沟通舒适度。敏感部位使用较低温度。',
      },
      {
        q: '多久做一次比较合适？',
        a: '一般每周 1 次或每两周 1 次，连续 4–6 次为一疗程。慢性痛症可能需要更长疗程。',
      },
      {
        q: '可以与针灸同日进行吗？',
        a: '可以。多数情况下我们会先针灸再砭石，或根据当日目标灵活安排。',
      },
      {
        q: '孕妇可以做吗？',
        a: '孕早期与高风险孕妇不建议。其他时期需医师评估后，避开腰腹部与特定穴位。',
      },
      {
        q: '需要提前预约吗？',
        a: '需要。舒压房数量有限，请拨打 (718) 888-9087 预约。',
      },
    ],
    faqEn: [
      {
        q: 'Is there any risk of burning?',
        a: 'No. Our therapists carefully monitor stone temperature and check in with you throughout the session. Sensitive areas receive cooler stones.',
      },
      {
        q: 'How often should I come?',
        a: 'Most patients do best with weekly or biweekly sessions over a 4–6 visit course. Chronic pain may require longer treatment plans.',
      },
      {
        q: 'Can I combine this with acupuncture in the same visit?',
        a: 'Yes — many patients do. We typically do acupuncture first, followed by stone work, or the order can be adjusted based on your goals that day.',
      },
      {
        q: 'Is bianstone safe during pregnancy?',
        a: 'We do not recommend stone therapy in the first trimester or for high-risk pregnancies. Later in pregnancy, sessions are possible with modifications and avoidance of the lower back and abdomen.',
      },
      {
        q: 'Do I need to book ahead?',
        a: 'Yes — stone therapy rooms are limited. Call (718) 888-9087 to reserve your time.',
      },
    ],
    relatedDoctors: ['serene-feng', 'yang-gui'],
    relatedConditions: [
      'pain-management',
      'muscle-tendon',
      'insomnia',
      'anxiety-depression',
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  // 4. TUI NA
  // ────────────────────────────────────────────────────────────────────
  {
    slug: 'tuina',
    icon: 'Hand',
    image: '/images/methods/tuina.svg',
    nameZh: '经络推拿与踩背按摩',
    nameEn: 'Tui Na & Back-Trampling Massage',
    taglineZh: '循行经络腧穴，从全身脉络一关关疏通，解除你的痛点',
    taglineEn: 'Meridian-based Chinese medical massage that treats pain at its source',
    originQuoteZh:
      '"我们的推拿师有深厚的中医理论基础，循行经络与穴位，从全身脉络一关关疏通，解除你的痛点。"',
    introZh:
      '经络推拿不同于一般的放松按摩，它依循中医经络腧穴学理论，通过按、揉、滚、推、点、拍等手法，疏通气血、去除毒素堵塞、放松筋骨、缓解痉挛。踩背按摩则由经验丰富的推拿师以点、踩、揉、按、挫、滑、顶等方式施力，需经中医师评估后再安排。',
    introEn:
      'Unlike conventional massage, Tui Na targets specific acupressure points and energy meridians to restore the flow of Qi throughout your body. Our therapists are trained in TCM theory and use a combination of pressing, rolling, kneading, and thumb techniques to address pain at its source — not just the surface. Back-trampling, our most advanced technique, is performed only after a Chinese medicine evaluation and is best suited for deep-tissue work on strong, healthy patients.',
    principlesZh: [
      '手法循经：沿十二经络与任督二脉走向推按。',
      '点穴疏通：重点按压气结、筋结与阿是穴。',
      '踩背：用脚的体重代替手的力量，适合深层筋膜松解。',
      '踩背前必须经中医师辨证评估适宜性。',
    ],
    principlesEn: [
      'Meridian-guided technique — therapists work along the twelve main meridians and the Ren/Du vessels.',
      'Point-based release — key trigger points and acupressure points are held, pressed, and kneaded to clear blockages.',
      'Back-trampling uses the therapist\'s body weight instead of hand pressure for deep fascial release.',
      'Trampling is only offered after a TCM evaluation confirms it is appropriate for your body.',
    ],
    applicationsZh: [
      {
        title: '疏通经络 · 去毒素',
        body: '长期气血运行不畅、肩颈僵硬、久坐族群。',
        conditionSlug: 'pain-management',
      },
      {
        title: '调理气血',
        body: '提高免疫力、抗炎退热、纾解痉挛。',
        conditionSlug: 'muscle-tendon',
      },
      { title: '放松筋骨', body: '运动后恢复、睡眠质量改善。' },
      {
        title: '情绪纾缓',
        body: '缓解因长期压力导致的躯体化症状。',
        conditionSlug: 'anxiety-depression',
      },
    ],
    applicationsEn: [
      {
        title: 'Meridian Release',
        body: 'For desk-workers, chronic shoulder and neck tension, and sluggish circulation.',
        conditionSlug: 'pain-management',
      },
      {
        title: 'Qi & Blood Regulation',
        body: 'Supports immunity, eases muscle spasm, and helps relieve mild fevers.',
        conditionSlug: 'muscle-tendon',
      },
      { title: 'Post-Workout Recovery', body: 'Faster recovery after training and improved sleep quality.' },
      {
        title: 'Stress Somatization',
        body: 'Releases the physical tension that long-term stress lays down in the body.',
        conditionSlug: 'anxiety-depression',
      },
    ],
    procedureZh: [
      '中医师辨证，确定主要经络与痛点。',
      '患者俯卧或仰卧，以舒适为原则。',
      '推拿师沿经络手法施治，重点穴位停留。',
      '如适合踩背，将切换至专用踩背椅辅助。',
      '结束后饮用温水，建议 24 小时内不做剧烈运动。',
    ],
    procedureEn: [
      'Diagnostic consultation to confirm meridians of focus and pain points.',
      'You lie prone or supine on a comfortable padded table.',
      'Hands-on work along meridians, with longer holds on priority acupoints.',
      'If cleared for trampling, you will be moved to a specialized support bar for deep pressure work.',
      'Warm water and a short rest afterward — avoid intense exercise for 24 hours.',
    ],
    faqZh: [
      {
        q: '推拿和一般按摩有什么不同？',
        a: '经络推拿以中医辨证为基础，手法沿经络走向，目的是调气血、治病痛；一般按摩侧重肌肉放松。推拿师均有中医理论训练。',
      },
      {
        q: '踩背安全吗？',
        a: '由经验丰富的推拿师操作，且必须经中医师评估适宜性后才安排。不适合骨质疏松、严重椎间盘突出、高龄及孕妇。',
      },
      {
        q: '推拿后酸胀正常吗？',
        a: '部分患者在首次推拿后 24 小时内会有轻微酸胀，这是组织修复的正常反应。建议多喝温水、适度休息。',
      },
      {
        q: '多久做一次？',
        a: '保健一般每 2–4 周 1 次；治疗性推拿一般每周 1–2 次、持续 4–6 周。',
      },
      {
        q: '需要提前预约吗？',
        a: '需要，舒压房数量有限。请致电 (718) 888-9087。',
      },
    ],
    faqEn: [
      {
        q: 'How is Tui Na different from regular massage?',
        a: 'Tui Na is rooted in TCM diagnostic theory — every technique is chosen to move Qi and blood along specific meridians, not just to relax muscles. Our therapists are trained in Chinese medicine, not just massage.',
      },
      {
        q: 'Is back-trampling safe?',
        a: 'When performed by an experienced practitioner and after a proper evaluation, yes. It is not suitable for people with osteoporosis, severe disc herniation, advanced age, or during pregnancy.',
      },
      {
        q: 'Is it normal to feel sore afterward?',
        a: 'Some patients feel mild soreness for up to 24 hours after their first Tui Na session — this is a normal tissue-response reaction. Drink plenty of warm water and rest.',
      },
      {
        q: 'How often should I come?',
        a: 'For general wellness, every 2–4 weeks. For treatment of a specific problem, weekly or twice weekly for 4–6 weeks.',
      },
      {
        q: 'Do I need to book ahead?',
        a: 'Yes — Tui Na rooms are limited. Please call (718) 888-9087.',
      },
    ],
    relatedDoctors: ['yang-gui', 'alina-hu'],
    relatedConditions: ['pain-management', 'muscle-tendon', 'insomnia'],
  },

  // ────────────────────────────────────────────────────────────────────
  // 5. CUPPING
  // ────────────────────────────────────────────────────────────────────
  {
    slug: 'cupping',
    icon: 'Circle',
    image: '/images/methods/cupping.svg',
    nameZh: '拔罐',
    nameEn: 'Cupping Therapy',
    taglineZh: '以杯罐为工具，借负压促进循环、排毒、解痛',
    taglineEn: 'Ancient suction therapy loved by Olympic athletes',
    originQuoteZh:
      '"拔罐是中医经络养生手法之一，以杯罐为工具，借热力排去空气产生负压。"',
    introZh:
      '拔罐是中医经络养生的经典手法之一。通过杯罐内的负压刺激肌肉与筋膜，促进血液循环、加速新陈代谢、排除代谢毒素，并舒缓局部紧张与疼痛。坤德中医提供气罐、火罐与中药竹筒罐三种方式，根据您的证型选用。',
    introEn:
      'You may have first seen cupping marks on Olympic athletes — but this therapy has been a cornerstone of Chinese Medicine for thousands of years. By creating gentle suction on the skin\'s surface, cupping stimulates blood flow, releases toxins, and relieves muscle tension in ways that complement acupuncture and massage beautifully. At Kunde TCM we offer three styles — air, fire, and herbal bamboo — each chosen for your specific pattern.',
    principlesZh: [
      '气罐：机械抽气形成负压，稳定可控，适合敏感患者。',
      '火罐：燃烧酒精瞬间产生负压，温热刺激，适合风寒病症。',
      '中药竹筒罐：用中药材浸泡的竹罐，适合风湿、咳嗽、胃炎等。',
      '常见手法：闪罐、留罐、推罐（走罐）、刺络拔罐。',
    ],
    principlesEn: [
      'Air cups use a mechanical pump to create controlled suction — gentle and ideal for first-time or sensitive patients.',
      'Fire cups use a brief flame to create heat-based suction, adding a warming effect useful for cold-pattern conditions.',
      'Bamboo herbal cups are pre-soaked in medicinal decoctions — used for dampness, cough, and rheumatic patterns.',
      'Common techniques include flash cupping, stationary cupping, sliding cupping, and bleeding cupping.',
    ],
    applicationsZh: [
      {
        title: '疼痛与紧张',
        body: '落枕、肩颈背腰痛、运动后紧绷。',
        conditionSlug: 'pain-management',
      },
      {
        title: '风寒感冒',
        body: '受风后头痛身痛、恶寒流涕。',
        conditionSlug: 'respiratory-health',
      },
      { title: '排毒通络', body: '长期熬夜、代谢缓慢、局部气血不畅。' },
      {
        title: '运动恢复',
        body: '赛前预热、赛后修复、乳酸代谢。',
        conditionSlug: 'muscle-tendon',
      },
    ],
    applicationsEn: [
      {
        title: 'Pain & Tension',
        body: 'Neck strain, frozen shoulder, lower back pain, post-workout tightness.',
        conditionSlug: 'pain-management',
      },
      {
        title: 'Cold & Flu Onset',
        body: 'Early-stage colds marked by chills, body aches, and stuffy nose.',
        conditionSlug: 'respiratory-health',
      },
      { title: 'Detox & Circulation', body: 'For chronic fatigue, poor circulation, and sluggish metabolism.' },
      {
        title: 'Athletic Recovery',
        body: 'Pre-event warm-up, post-event recovery, and lactic acid clearance.',
        conditionSlug: 'muscle-tendon',
      },
    ],
    procedureZh: [
      '医师评估选用罐型与穴位。',
      '皮肤涂上薄薄一层介质（如少量凡士林）。',
      '拔罐 — 留罐一般 5–15 分钟。',
      '起罐 — 轻轻释放负压，检查皮肤反应。',
      '术后建议：避风寒、不立即洗澡、24 小时内不宜剧烈运动。',
    ],
    procedureEn: [
      'Evaluation to choose the appropriate cup type and placement.',
      'Your skin receives a thin layer of cream to aid suction and protect the surface.',
      'Cups remain in place for 5 to 15 minutes.',
      'Gentle removal with a check of the skin response.',
      'Aftercare: stay warm, avoid immediate showers, and skip vigorous exercise for 24 hours.',
    ],
    faqZh: [
      {
        q: '拔罐会留下痕迹吗？多久消退？',
        a: '会留下圆形印记，颜色从粉红到深紫不等，代表局部气血淤滞程度。一般 3–10 天内自行消退，不会影响健康。',
      },
      {
        q: '拔罐会痛吗？',
        a: '主要是紧绷感，大多数人描述为"舒服的深压感"。若过敏或皮肤薄弱处可能略有不适，请及时告知医师。',
      },
      {
        q: '多久做一次？',
        a: '治疗性拔罐每周 1–2 次，保健性拔罐 2–4 周 1 次。连续做需间隔皮肤恢复时间。',
      },
      {
        q: '哪些人不适合拔罐？',
        a: '皮肤有破损、严重过敏、凝血障碍、孕妇腰腹部、严重心脏病患者不宜。',
      },
      {
        q: '拔罐可以和针灸一起做吗？',
        a: '可以，通常先针灸再拔罐。也可搭配刮痧、砭石、药浴协同使用。',
      },
    ],
    faqEn: [
      {
        q: 'Will cupping leave marks? How long do they last?',
        a: 'Yes — cupping leaves circular marks ranging from pink to deep purple, which reflect the degree of stagnation at that point. They typically fade within 3–10 days and do not harm the skin.',
      },
      {
        q: 'Is cupping painful?',
        a: 'Most people describe it as a satisfying, deep-pressure sensation. If a particular spot feels uncomfortable, tell your practitioner right away.',
      },
      {
        q: 'How often should I do cupping?',
        a: 'Therapeutic cupping: once or twice a week. Wellness maintenance: every 2–4 weeks. Consecutive sessions should allow time for the skin to recover.',
      },
      {
        q: 'Who should avoid cupping?',
        a: 'People with broken or severely irritated skin, bleeding disorders, pregnant patients (lower back/abdomen), and those with serious cardiac conditions should skip cupping.',
      },
      {
        q: 'Can I combine cupping with acupuncture?',
        a: 'Yes. Acupuncture and cupping are frequently done in the same visit — typically needles first, cups second. Cupping also pairs well with Gua Sha and medicated baths.',
      },
    ],
    relatedDoctors: ['yang-gui', 'alina-hu'],
    relatedConditions: [
      'pain-management',
      'muscle-tendon',
      'respiratory-health',
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  // 6. MOXIBUSTION & GUA SHA
  // ────────────────────────────────────────────────────────────────────
  {
    slug: 'moxibustion-guasha',
    icon: 'Flame',
    image: '/images/methods/moxibustion-guasha.svg',
    nameZh: '艾灸与刮痧',
    nameEn: 'Moxibustion & Gua Sha',
    taglineZh: '艾灸补虚人，刮痧治壮汉',
    taglineEn: 'Moxa to warm what is cold; Gua Sha to release what is stuck',
    originQuoteZh:
      '"艾灸补虚人，刮痧治壮汉。" — 我们从根本诊察，用最立竿见影的手法，祛除你身体的不适。',
    introZh:
      '艾灸与刮痧是中医最具标志性的两种外治法。艾灸借艾草的温热药性补阳益气，适合虚寒体质；刮痧则通过特定工具刮拭皮肤，排出"痧"（体内淤积的气血），适合实证壮汉。两者都立竿见影，坤德中医根据辨证选用。',
    introEn:
      'Moxibustion and Gua Sha are two of TCM\'s most effective hands-on therapies. Moxibustion uses the warming properties of dried mugwort to boost yang energy and improve circulation — especially helpful for fatigue, edema, and menstrual pain. Gua Sha involves gentle scraping to release stagnant blood and toxins, providing fast relief for muscle soreness, headaches, and early-stage colds. Your practitioner chooses the right method for your constitution.',
    principlesZh: [
      '艾灸：点燃艾条或艾柱，悬灸或隔物灸于穴位上。',
      '艾草具活血化瘀作用，结合火的热性补阳益气。',
      '刮痧：以刮痧板沿经络或肌肉方向刮拭，排出淤血。',
      '"痧" — 出痧程度反映体内气血淤积的程度。',
    ],
    principlesEn: [
      'Moxibustion warms specific acupoints with burning mugwort — either held above the skin or placed on a protective layer.',
      'Mugwort has circulation-boosting, warming properties that are especially effective for cold and deficient patterns.',
      'Gua Sha uses a smooth scraping tool drawn along the skin following the muscle and meridian direction.',
      'The redness ("sha") that appears reflects how much stagnation was cleared — it fades within a few days.',
    ],
    applicationsZh: [
      {
        title: '虚寒体质（艾灸）',
        body: '容易疲劳、四肢无力、水肿、哮喘、腹痛腹胀、经痛、小儿消瘦。',
        conditionSlug: 'womens-health',
      },
      {
        title: '气血淤积（刮痧）',
        body: '纾缓疲劳、止痛、头痛、高血压、中暑、落枕、减重去脂。',
        conditionSlug: 'pain-management',
      },
      {
        title: '初期感冒',
        body: '刮痧可快速缓解风寒感冒的恶寒、肌肉酸痛。',
        conditionSlug: 'respiratory-health',
      },
    ],
    applicationsEn: [
      {
        title: 'Cold & Deficiency Patterns (Moxa)',
        body: 'Fatigue, cold limbs, edema, menstrual cramping, digestive coldness, and asthma support.',
        conditionSlug: 'womens-health',
      },
      {
        title: 'Stagnation Patterns (Gua Sha)',
        body: 'Muscle pain, tension headaches, early-stage colds, heat stroke, and stiff neck.',
        conditionSlug: 'pain-management',
      },
      {
        title: 'Onset of Illness',
        body: 'Gua Sha is especially effective in the first 24–48 hours of a cold, helping to shorten its course.',
        conditionSlug: 'respiratory-health',
      },
    ],
    procedureZh: [
      '辨证选法 — 虚寒用艾灸，实热气滞用刮痧。',
      '艾灸：温和灸、隔姜灸、隔盐灸等手法按需选择。',
      '刮痧：选用牛角或砭石板，沿经络刮拭至轻微出痧。',
      '术后保暖，避免风寒 6–12 小时。',
      '最佳效果：连续 3–6 个月的阶段性治疗。',
    ],
    procedureEn: [
      'Diagnostic step — moxa for cold/deficiency, Gua Sha for heat/stagnation.',
      'Moxa techniques include indirect moxa, ginger-mediated moxa, and salt-based moxa depending on point.',
      'Gua Sha is performed with a smooth horn or stone tool until a light, even "sha" appears.',
      'Stay warm and out of drafts for 6–12 hours after treatment.',
      'Best results come from a 3–6 month course of scheduled sessions.',
    ],
    faqZh: [
      {
        q: '刮痧的红印需要多久消退？',
        a: '一般 3–7 天自行消退，颜色深浅反映淤积程度，不会留疤。',
      },
      {
        q: '艾灸会不会烫伤？',
        a: '正确操作下非常安全。我们使用温和灸与隔物灸，随时与您沟通温度感受。',
      },
      {
        q: '艾灸的烟味大吗？',
        a: '坤德中医使用低烟艾条并配合专业排烟，烟味轻微且对呼吸系统无害。',
      },
      {
        q: '孕妇可以刮痧或艾灸吗？',
        a: '孕妇部分穴位禁忌（如合谷、三阴交），需由中医师评估选择安全部位。',
      },
      {
        q: '艾灸与刮痧可以自己在家做吗？',
        a: '简单保健性操作可以，但治疗性使用建议在医师指导下进行，避免灼伤或出痧过度。',
      },
    ],
    faqEn: [
      {
        q: 'How long do the red Gua Sha marks last?',
        a: 'Typically 3–7 days, with no scarring. The depth of color simply reflects how much stagnation was cleared.',
      },
      {
        q: 'Can moxibustion burn the skin?',
        a: 'When done correctly, it is very safe. We use indirect and mediated moxa and check in on temperature comfort throughout.',
      },
      {
        q: 'Is the moxa smoke strong?',
        a: 'We use low-smoke mugwort and professional ventilation, so the scent is mild and safe for most patients.',
      },
      {
        q: 'Can pregnant women receive these therapies?',
        a: 'Several points are contraindicated during pregnancy (Hegu, Sanyinjiao, etc.). We will choose safe points only after a TCM assessment.',
      },
      {
        q: 'Can I do moxa or Gua Sha at home?',
        a: 'Gentle wellness routines are safe at home, but treatment-level work should be done under practitioner guidance to avoid burns or over-scraping.',
      },
    ],
    relatedDoctors: ['serene-feng', 'alina-hu'],
    relatedConditions: [
      'womens-health',
      'pain-management',
      'respiratory-health',
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  // 7. SANFUTIE
  // ────────────────────────────────────────────────────────────────────
  {
    slug: 'sanfutie',
    icon: 'Sun',
    image: '/images/methods/sanfutie.svg',
    nameZh: '三伏贴',
    nameEn: 'Sanfutie Summer Patches',
    taglineZh: '一年只要三天，冬病夏治',
    taglineEn: 'Treating winter diseases in the summer heat — just three days a year',
    originQuoteZh:
      '"一年中只要这三天使用三伏贴，就可以改善虚弱体质，把恼人的过敏气喘咳嗽通通丢掉。"',
    introZh:
      '三伏贴是中医"冬病夏治"的代表疗法。每年最炎热的三伏天，人体阳气最旺、经络最通，将辛温药草敷贴在背部特定穴位，借天阳之气引药入络，预防并调理秋冬易发的慢性呼吸道与过敏疾病。坤德中医每年夏季三伏天受理预约。',
    introEn:
      'Sanfutie is a centuries-old seasonal therapy based on the principle of "treating winter diseases in summer." During the hottest days of the year — when your body\'s energy channels are most open — herbal patches are applied to specific acupuncture points on the back, allowing medicinal compounds to penetrate deeply. This is especially effective for chronic respiratory conditions, allergies, and weakened immunity.',
    principlesZh: [
      '三伏天 — 夏至后第三、第四个庚日及立秋后第一个庚日。',
      '药物：白芥子、延胡索、甘遂、细辛等辛温药草，以姜汁调配。',
      '穴位：大椎、风门、肺俞、脾俞、肾俞等背部要穴。',
      '原理：借天时与穴位通道，把药性送入经络脏腑。',
    ],
    principlesEn: [
      'Sanfu days fall on specific Geng days after summer solstice and the first Geng day after fall begins.',
      'Herbs used include white mustard seed, Corydalis, Euphorbia, and wild ginger, mixed with fresh ginger juice.',
      'Classic points: Dazhui, Fengmen, Feishu, Pishu, and Shenshu — all on the upper back.',
      'The premise: when summer heat opens the body\'s channels, herbal compounds move more easily to the lungs and deep interior.',
    ],
    applicationsZh: [
      {
        title: '反复感冒与过敏',
        body: '年年秋冬感冒不断、过敏性鼻炎、哮喘。',
        conditionSlug: 'respiratory-health',
      },
      { title: '慢性支气管炎', body: '长期咳嗽、咳痰、气喘。' },
      { title: '长期抽烟肺功能差', body: '辅助改善肺卫之气。' },
      {
        title: '慢性阻塞性肺病 (COPD)',
        body: '辅助控制咳嗽、咳痰、气喘。',
        conditionSlug: 'respiratory-health',
      },
    ],
    applicationsEn: [
      {
        title: 'Frequent Colds & Allergies',
        body: 'For people who catch every seasonal bug and struggle with allergic rhinitis or mild asthma.',
        conditionSlug: 'respiratory-health',
      },
      { title: 'Chronic Bronchitis', body: 'Long-standing cough, phlegm, and wheezing.' },
      { title: 'Long-term Smokers', body: 'Supportive care to strengthen compromised lung Qi.' },
      {
        title: 'COPD Support',
        body: 'Complementary care for chronic cough, phlegm, and shortness of breath.',
        conditionSlug: 'respiratory-health',
      },
    ],
    procedureZh: [
      '辨证评估确定适合三伏贴。',
      '背部大椎、风门、肺俞等穴位定位。',
      '药草与姜汁现场调和成膏，贴于穴位。',
      '成人贴敷 3–4 小时（最长 6 小时），老人儿童敏感者不超过 2 小时。',
      '疗程：每年三伏各贴一次，连续 3 年以上效果最佳。',
    ],
    procedureEn: [
      'A TCM assessment confirms Sanfutie is suitable for you.',
      'Points Dazhui, Fengmen, Feishu, and others are located on the back.',
      'Herbs are blended with fresh ginger juice on the spot and applied as a patch.',
      'Adults wear the patch 3–4 hours (6 maximum); elderly, children, and sensitive patients wear up to 2 hours.',
      'A full course runs once on each Sanfu day of the summer, repeated for at least 3 consecutive years.',
    ],
    faqZh: [
      {
        q: '三伏贴会烫伤或起水泡吗？',
        a: '部分人贴敷处会发红、轻微发热、甚至起小水泡，属正常反应。若出现大水泡或剧烈灼痛，立即取下并告知医师。',
      },
      {
        q: '敷贴期间有什么忌口？',
        a: '避免激烈运动、冷水浴、冷饮；禁吃生冷、辛辣、海鲜及油炸食物；避免接触过敏原。',
      },
      {
        q: '儿童可以贴吗？',
        a: '3 岁以上、哮喘或反复感冒的儿童可贴，时间缩短至 1–2 小时，家长陪同监护。',
      },
      {
        q: '如果错过某一伏怎么办？',
        a: '可就近的三伏天补贴一次，但效果略逊。建议尽量按原计划完成三贴。',
      },
      {
        q: '如何预约三伏贴？',
        a: '每年夏季三伏日程确定后开放预约，请致电 (718) 888-9087。',
      },
    ],
    faqEn: [
      {
        q: 'Can Sanfutie burn or blister the skin?',
        a: 'Mild redness, warmth, or even small blisters are considered a normal reaction. Large blisters or sharp burning pain are not — remove the patch immediately and tell your practitioner.',
      },
      {
        q: 'Are there any lifestyle restrictions on patch days?',
        a: 'Yes — avoid intense exercise, cold showers, cold drinks, raw and spicy foods, seafood, and deep-fried foods. Try to stay away from known allergens that day.',
      },
      {
        q: 'Can children receive Sanfutie?',
        a: 'Children over age 3 with asthma or frequent colds may benefit. Patch time is shortened to 1–2 hours, with a parent present.',
      },
      {
        q: 'What if I miss one of the three days?',
        a: 'You can make it up on the closest Sanfu day, though the effect is slightly reduced. We recommend planning ahead to get all three.',
      },
      {
        q: 'How do I book Sanfutie?',
        a: 'We open bookings once the summer Sanfu dates are confirmed each year. Call (718) 888-9087 for the current calendar.',
      },
    ],
    relatedDoctors: ['serene-feng', 'suoan-feng'],
    relatedConditions: ['respiratory-health', 'complex-conditions'],
  },

  // ────────────────────────────────────────────────────────────────────
  // 8. MEDICATED BATH
  // ────────────────────────────────────────────────────────────────────
  {
    slug: 'medicated-bath',
    icon: 'Droplet',
    image: '/images/methods/medicated-bath.svg',
    nameZh: '药浴',
    nameEn: 'Medicated Herbal Bath',
    taglineZh: '热疗 + 水疗 + 草药精华，全身经皮吸收',
    taglineEn: 'Herbal immersion combining heat, hydrotherapy, and botanicals',
    introZh:
      '药浴结合"热冲击能量 + 水疗 + 草药精华"，浸泡时皮肤、经络、穴位同时受到刺激，药效经皮肤吸收进入经络。处方与内服中药一样因人辨证，适合运动损伤、慢性关节病、中风后恢复等需要深度温通的病症。',
    introEn:
      'A medicated bath combines the thermal, hydrotherapeutic, and botanical layers of TCM into a single immersive treatment. While you soak, your skin, meridians, and acupressure points are stimulated simultaneously, allowing herbal compounds to reach tissues that oral herbs cannot. Formulas are pattern-matched just like oral prescriptions, and are especially helpful for post-injury recovery, arthritis, and post-stroke rehabilitation.',
    principlesZh: [
      '热效应 — 温水扩张毛孔与微循环。',
      '水疗 — 浮力减压，释放关节负担。',
      '经皮吸收 — 有效成分经皮进入经络与血液。',
      '辨证选方 — 与内服方剂相同的寒热虚实分型原则。',
    ],
    principlesEn: [
      'Heat opens pores and boosts microcirculation in the skin and muscles.',
      'Hydrotherapy offloads weight from joints and muscles, making it ideal for rehab.',
      'Transdermal absorption delivers active compounds directly to local tissues.',
      'Formulas follow the same hot/cold/excess/deficiency framework as oral prescriptions.',
    ],
    applicationsZh: [
      {
        title: '运动损伤后遗症',
        body: '韧带、肌肉与关节的慢性后遗症。',
        conditionSlug: 'muscle-tendon',
      },
      { title: '肌肉酸痛', body: '长期久坐或高强度训练后的僵痛。' },
      {
        title: '退变性关节炎',
        body: '膝、髋、腰椎等关节退化性疼痛。',
        conditionSlug: 'pain-management',
      },
      { title: '强直性脊柱炎', body: '辅助缓解晨僵与活动受限。' },
      { title: '中风后恢复', body: '改善肢体循环，辅助肢体功能恢复。' },
    ],
    applicationsEn: [
      {
        title: 'Sports Injury Recovery',
        body: 'Chronic issues involving ligaments, muscles, or joint rehab.',
        conditionSlug: 'muscle-tendon',
      },
      { title: 'Muscle Soreness', body: 'For desk-workers and after high-intensity training.' },
      {
        title: 'Osteoarthritis',
        body: 'Degenerative joint pain in knees, hips, and lumbar spine.',
        conditionSlug: 'pain-management',
      },
      { title: 'Ankylosing Spondylitis', body: 'Supportive care for morning stiffness and reduced mobility.' },
      { title: 'Post-Stroke Rehab', body: 'Improved peripheral circulation and supportive limb recovery.' },
    ],
    procedureZh: [
      '医师评估体质与禁忌，开具药浴方。',
      '药草煎煮后兑入专用浴池，温度约 38–42°C。',
      '浸泡 20–30 分钟，全程有工作人员监护。',
      '起浴后饮温水、保暖、休息 15 分钟。',
      '一般每周 1–2 次、连续 4–6 周为一疗程。',
    ],
    procedureEn: [
      'Initial assessment of your constitution, contraindications, and formula design.',
      'Herbs are decocted and added to a purpose-built bath at 38–42°C.',
      '20–30 minutes of immersion with a trained attendant nearby.',
      'Warm water, wrap up, and rest for 15 minutes afterward.',
      'A typical course is 1–2 baths per week for 4–6 weeks.',
    ],
    faqZh: [
      {
        q: '药浴和温泉有什么不同？',
        a: '药浴是辨证施治的治疗方案，每一次配方都针对您的证型，而非固定矿物成分。温泉是矿物质泡浴，属一般放松。',
      },
      {
        q: '哪些人不适合药浴？',
        a: '高血压未控制者、严重心脏病、孕妇早期、皮肤大面积破损、发热急性期不宜。',
      },
      {
        q: '一次泡多久？',
        a: '一般 20–30 分钟，视体质与证型调整。过长反而会耗气伤津。',
      },
      {
        q: '可以和针灸、推拿同日做吗？',
        a: '可以，但建议先针灸或推拿、再药浴，给身体一个循序渐进的过程。',
      },
      {
        q: '需要提前预约吗？',
        a: '需要，药浴房数量有限且需提前备药。请致电 (718) 888-9087。',
      },
    ],
    faqEn: [
      {
        q: 'How is a medicated bath different from a regular spa bath?',
        a: 'A medicated bath is a prescribed treatment — the formula is selected for your pattern that day. Spa mineral baths are general wellness soaks without the individualized diagnosis.',
      },
      {
        q: 'Who should avoid medicated baths?',
        a: 'People with uncontrolled high blood pressure, serious cardiac disease, early pregnancy, extensive broken skin, or an active fever should skip this therapy.',
      },
      {
        q: 'How long does each soak last?',
        a: 'Typically 20–30 minutes. Longer is not better — too much heat can deplete Qi and fluids.',
      },
      {
        q: 'Can I combine a bath with acupuncture or Tui Na?',
        a: 'Yes. Most patients do needles or massage first, then the bath — easing the body into each layer of treatment.',
      },
      {
        q: 'Do I need to book ahead?',
        a: 'Yes — bath rooms are limited and herbs need to be prepared in advance. Call (718) 888-9087 to schedule.',
      },
    ],
    relatedDoctors: ['yang-gui', 'dixu-gao'],
    relatedConditions: ['muscle-tendon', 'pain-management', 'complex-conditions'],
  },
];

export function getMethod(slug: string): Method | undefined {
  return methods.find((m) => m.slug === slug);
}
