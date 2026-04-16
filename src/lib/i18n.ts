export type Locale = 'zh' | 'en';

export const locales: Locale[] = ['zh', 'en'];
export const defaultLocale: Locale = 'zh';

export const dict = {
  zh: {
    // Announcement bar
    announcement: '接受主流保险 · 纽约中医诊所 · 法拉盛·曼哈顿 5 家分店',
    announcementCta: '立即预约',

    // Nav
    nav: {
      home: '首页',
      about: '关于我们',
      methods: '治疗手法',
      conditions: '主治项目',
      team: '医疗团队',
      beauty: '中医美容',
      blog: '中医专栏',
      newPatients: '新患者指南',
      locations: '法拉盛分店',
      contact: '联系我们',
    },

    // Home
    home: {
      // Hero — SEO 4.1.1 8-point deployment
      h1: '纽约中医针灸诊所 · 坤德中医养生轩',
      heroBanner:
        '从望、闻、问、切、诊到辨证论治、汤剂调理，我们致力于以心以术为每位患者提供无与伦比的中医药体验。',
      // First 100 words — keyword lock (from 4.1.1)
      subtitle:
        '坤德中医是一家扎根纽约 20 余年的中医诊所与针灸诊所，我们在法拉盛、曼哈顿、米德尔顿共设 5 家分店，8 位纽约州执照针灸师，以针灸、中药等正统古法为纽约华人与西人社区提供个性化诊疗。',
      cta: '立即预约',
      ctaSecondary: '了解我们的专科',
      heroAlt:
        '坤德中医养生轩 — 纽约中医诊所 · 纽约针灸诊所 · 法拉盛主店诊所实景',

      // Stats
      statsTitle: '20 余年纽约中医经验 · 服务华人与西人社区',
      stats: [
        { value: '20+', label: '年综合临床经验' },
        { value: '5', label: '家纽约分店' },
        { value: '8', label: '位执照医师团队' },
        { value: '6', label: '大主流保险接受' },
      ],

      // Methods section
      methodsTitle: '我们的治疗手法 — 8 大经典中医手法',
      methodsSub: '针灸、中药、拔罐、艾灸…… 因人制宜，精准施治',
      methodsCta: '查看全部治疗手法',

      // Conditions section
      conditionsTitle: '主治病症 — 15 大专科诊疗',
      conditionsSub:
        '从疼痛管理到不孕不育，从妇科调理到情志疾病，覆盖华人最关心的健康课题',
      conditionsCta: '查看全部主治项目',

      // Online booking section
      bookingTitle: '线上预约我们的执照医师',
      bookingSub:
        '8 位纽约州执照针灸师，均在各自专科领域拥有丰富经验。请先选择医师，再选择时段。',
      bookingLocationsHint: '主要出诊地点：法拉盛主店 · 曼哈顿 · 37 大道',
      bookingCallFallback: '或致电预约：(718) 888-9087 · (718) 489-1828',
      bookBtn: '立即预约',
      callBtn: '致电预约',

      // Why Kunde — 方案 3.1
      whyTitle: '为何纽约人选择坤德中医',
      whySub:
        '扎根法拉盛 20 余年，融合正统中医古法与现代循证医学，以母亲般的关怀陪伴每一位患者走完整个疗程。',
      whyCards: [
        {
          icon: 'ShieldCheck',
          title: '执照医师团队 · 学术与临床双重保障',
          body: '8 位医师全部持有纽约州针灸师执照（L.Ac.），多位拥有中医博士学位与 NCCAOM 认证。院长馮羅小潔为针灸与东方医学博士（DAOM），于国际期刊《MERIDIANS》发表原创临床研究；冯苏安教授为消渴丸、胃乃安发明人之一，获国家专利优秀奖。',
        },
        {
          icon: 'Infinity',
          title: '遵古法 · 用今论 — 中西融合诊疗',
          body: '我们既遵循《黄帝内经》的整体观念与辨证论治，也与您的西医主治医师协同工作。针灸可配合 IVF/IUI 生育治疗增效，中药与西药可安全协同，为您提供真正"1+1 > 2"的整合方案。',
        },
        {
          icon: 'HandCoins',
          title: '接受 6 大主流保险 · 免费保险验证',
          body: '我们接受 UHC、NYSHIP、Empire BlueCross BlueShield、Aetna、Oxford、Cigna 等主流保险计划。不确定是否覆盖？填写表单即可免费为您验证，无需任何承诺。',
          subCtaLabel: '免费验证我的保险',
          subCtaHref: '/zh/new-patients#insurance',
        },
        {
          icon: 'MapPin',
          title: '法拉盛 3 店 + 曼哈顿 + 米德尔顿',
          body: '无论您在皇后区、曼哈顿中城，还是橙县 Middletown，坤德中医都有一家就在您身边。法拉盛 3 家分店彼此相距不足 10 分钟步行，覆盖主要地铁 7 号线与华人生活圈。',
          subCtaLabel: '查看最近的分店',
          subCtaHref: '/zh/contact#locations',
        },
      ],
      whyFooter: '了解我们这家纽约中医诊所的理念与团队',

      // Testimonials
      testimonialsTitle: '调养见证 — 患者真实反馈',
      testimonialsSub: '来自法拉盛华人社区的真实故事，纪录每一段调养旅程',
      testimonialsCta: '查看更多调养见证',

      // Blog preview
      blogTitle: '中医专栏 — 养生知识',
      blogSub: '针灸、中药、情志养生、季节调理 …… 每月精选',
      blogCta: '进入中医专栏',
      readMore: '阅读更多',

      // FAQ (GEO — 4.1.1 E)
      faqTitle: '常见问题 — 高意图查询',
      faqs: [
        {
          q: '纽约最好的中医诊所在哪？',
          a: '坤德中医养生轩是纽约历史悠久的中医诊所之一，法拉盛 3 家 + 曼哈顿 + 米德尔顿共 5 家分店，8 位纽约州执照针灸师坐诊，涵盖针灸、中药、推拿、拔罐、艾灸等全科治疗，广受华人与西人社区好评。',
        },
        {
          q: '法拉盛中医诊所哪家好？',
          a: '坤德中医在法拉盛设有三福大道、37 大道、黄金大厦 3 家分店，8 位纽约州执照针灸师团队，擅长疼痛管理、不孕不育、妇科调理、焦虑抑郁等专科，接受 UHC/Aetna/EBCBS 等主流保险。',
        },
        {
          q: '纽约针灸诊所接受保险吗？',
          a: '坤德中医作为纽约针灸诊所接受 UHC、NYSHIP、Empire BlueCross BlueShield、Aetna、Oxford、Cigna 等 6 大主流保险计划。我们提供免费保险验证服务，确认福利后再就诊，无任何预付或承诺。',
        },
      ],

      // Final CTA banner
      ctaTitle: '立即开始您的健康之旅',
      ctaSub:
        '我们提供电话咨询和线上预约，欢迎与我们联系。我们接受大多数保险计划。',
      ctaPhone: '电话咨询：(718) 888-9087',
      ctaSecondaryLabel: '查看各分店地址',
    },

    // About page
    about: {
      h1: '关于坤德中医养生轩 — 扎根纽约 20 余年的中医诊所',
      heroAlt:
        '坤德中医养生轩 — 纽约中医诊所团队合影，法拉盛主店门面',
      heroSub:
        '扎根纽约 20 余年，以医者仁心服务华人与西人社区。坤德中医（New York Four Seasons Acupuncture PC）由馮羅小潔院长创立，8 位纽约州执照针灸师共同组成诊疗团队。',
      breadcrumbs: [
        { label: '首页', href: '/zh' },
        { label: '关于我们', href: '/zh/about' },
      ],

      // 诊所简介
      introTitle: '诊所简介 — 从共租诊间到 5 家分店',
      introBody: [
        '创办人馮羅小潔医师自幼喜爱中医，受家庭教育重视品格与助人精神的熏陶。她考取了广东中山医学院，深受传统中医价值观影响。馮医师特别推崇唐代药王孙思邈的"大医精诚"理念，将其作为行医生涯的最高指导原则。',
        '经过多年行医实践，馮羅小潔院长与认同此理念的中医师们共同创立了坤德中医养生轩（New York Four Seasons Acupuncture PC），从共租诊间发展至目前拥有多间诊所的规模。从法拉盛起步，逐步扩展至纽约 5 大分店（法拉盛 3 处 + 曼哈顿 + 米德尔顿）。',
        '我们的服务理念是"遵古法，用今论"—— 遵循中医经络养生智慧，将针灸、药草、拔罐、刮痧等正统古法，融入适合现代人生活习惯与步调的治疗方案，以母亲般的包容坚定之爱为患者调养身心灵。',
      ],

      // 使命与理念
      missionTitle: '使命与理念',
      missionBody:
        '"我们看待每一位病患为独一无二的个体，藉由个别的中医所长，相互合作，帮助人们回归身、心、灵健康。"',
      valueCards: [
        {
          icon: 'Circle',
          title: '整体观念',
          body: '身心同治，标本兼顾 — 不只看症状，更看到症状背后的整体系统',
        },
        {
          icon: 'Compass',
          title: '辨证论治',
          body: '因人制宜，个性化方案 — 两个人同一个症状，治法可能完全不同',
        },
        {
          icon: 'ShieldCheck',
          title: '预防为主',
          body: '未病先防，已病防变 — 上医治未病，我们陪您走长线',
        },
        {
          icon: 'GitMerge',
          title: '中西融合',
          body: '取长补短，科学施治 — 与您的西医主治医师协同工作',
        },
      ],

      // 资质
      credTitle: '资质与认证',
      credItems: [
        '纽约州执照针灸师（Licensed Acupuncturist, L.Ac.）— 全体医师均持证',
        '美国国家中医资格认证委员会（NCCAOM）认证',
        '参与 UHC · NYSHIP · Empire BlueCross BlueShield · Aetna · Oxford · Cigna 六大主流保险',
        '院长馮羅小潔发表于国际期刊《MERIDIANS》的原创针灸临床研究',
        '馮苏安教授参与研发的消渴丸、胃乃安获中国国家专利优秀奖',
      ],

      // 内部导航
      navCtaTitle: '继续了解坤德中医',
      navLinks: [
        { label: '认识我们的医疗团队', href: '/zh/team' },
        { label: '了解 8 大治疗手法', href: '/zh/methods' },
        { label: '查看 15 项主治项目', href: '/zh/conditions' },
        { label: '新患者指南 · 首次就诊', href: '/zh/new-patients' },
      ],
    },

    // Methods (list + detail)
    methods: {
      listH1: '治疗手法 — 8 大经典中医疗法',
      listHeroSub:
        '针灸、中药、拔罐、艾灸、刮痧 …… 坤德中医养生轩以 8 大正统古法，为纽约华人与西人社区提供个性化诊疗。',
      listIntro:
        '每一种手法都经过千年临床验证。我们的 8 位纽约州执照针灸师会根据您的体质与证型，灵活组合适合您的方案。',
      learnMore: '了解详情',
      breadcrumbHome: '首页',
      breadcrumbMethods: '治疗手法',
      // Detail page section titles
      quoteLabel: '经典之声',
      whatIsTitle: '什么是',
      whatIsSuffix: '？',
      applicationsTitle: '主要应用',
      procedureTitle: '治疗流程',
      faqTitle: '常见问题',
      doctorsTitle: '相关医师',
      doctorsSub: '为您安排最适合的执照针灸师',
      bookWithDoctor: '在线预约',
      relatedConditionsTitle: '此疗法擅长调理',
      otherMethodsTitle: '其他治疗手法',
      crossLinkToConditions: '查看全部 15 项主治项目',
      detailCtaTitle: '准备好开始您的疗程了吗？',
      detailCtaSub:
        '立即预约或免费保险验证 — 我们在法拉盛、曼哈顿、米德尔顿的 5 家分店随时欢迎您。',
      bookNow: '立即预约',
      viewAll: '查看全部 8 大手法',
      crossLinkBanner:
        '想知道这些疗法适合哪些病症？',
      crossLinkBannerCta: '查看 15 项主治项目 →',
    },

    // Conditions (list + detail)
    conditions: {
      listH1: '主治项目 — 15 大专科诊疗',
      listHeroSub:
        '从疼痛管理到不孕不育，从妇科调理到情志疾病 — 坤德中医用针灸、中药等整合方案，覆盖纽约华人社区最关心的 15 大健康课题。',
      listIntro:
        '每一位患者都是独特的个体。我们会根据您的证型定制方案，而非套用模板。',
      learnMore: '了解更多',
      breadcrumbHome: '首页',
      breadcrumbConditions: '主治项目',
      // Detail page section titles
      overviewTitle: '概述',
      tcmViewTitle: '中医辨证',
      symptomsTitle: '常见症状',
      treatmentTitle: '坤德中医治疗方案',
      methodsUsedTitle: '我们使用的治疗手法',
      caseTitle: '真实案例',
      highlightLabel: '坤德优势',
      faqTitle: '常见问题',
      doctorsTitle: '此病症的相关医师',
      bookWithDoctor: '在线预约',
      detailCtaTitle: '为您的健康迈出第一步',
      detailCtaSub: '8 位纽约州执照针灸师，为您的独特情况量身定制方案。',
      bookNow: '立即预约',
      viewAll: '查看全部 15 项主治',
      crossLinkBanner: '想了解我们使用的治疗手法？',
      crossLinkBannerCta: '查看 8 大治疗手法 →',
      beautyBannerTitle: '中医美容 — 法拉盛首家中西医结合美容诊所',
      beautyBannerBody:
        '由院长馮羅小潔 DAOM 与高迪旭医生共同主理，为您打造面部针灸、中药美容内调与养颜药膳的整合方案。',
      beautyBannerCta: '了解中医美容',
    },

    // Team pages
    team: {
      listH1: '医疗团队 — 8 位执照医师 + 4 位专业治疗师',
      listHeroSub:
        '每一位执照针灸师与资深草药师都有自己的专科方向，从不孕不育、中风康复到痛症、情志调理，为您匹配最合适的医师。',
      breadcrumbHome: '首页',
      breadcrumbTeam: '医疗团队',
      intro:
        '我们看待每一位病患为独一无二的个体，藉由个别的中医所长，相互合作，帮助人们回归身、心、灵健康。',
      practitionersTitle: '执照医师团队 · 8 位纽约州执照针灸师与资深草药师',
      practitionersSub:
        '从诊所创始人馮羅小潔博士到资深中草药师馮所安教授 — 每一位医师都有自己的临床专科与治疗风格。',
      therapistsTitle: '专业治疗师团队 · 4 位经络推拿与美容师',
      therapistsSub:
        '经络推拿、传统艾灸、刮痧、三伏贴、汉方美颜 — 由经验丰富的专业治疗师亲自操作。',
      viewProfile: '查看个人主页',
      bookOnline: '立即预约',
      callToBook: '致电预约',
      joinTitle: '加入坤德中医团队',
      joinBody:
        '坤德中医正在招募志同道合的优秀中医人才。如果您持有纽约州针灸师执照或资深中草药经验，欢迎将个人简介与执业证明发送至我们的招募信箱。',
      joinCta: '发送简历至 ny4sacu@gmail.com',
      // Detail page
      detailBackToTeam: '返回医疗团队',
      specialtiesTitle: '擅长领域',
      educationTitle: '教育背景 · 执照资质',
      experienceTitle: '职业经历',
      languagesTitle: '语言',
      clinicsTitle: '出诊分店',
      methodsTitle: '相关治疗手法',
      bioTitle: '个人简介',
      otherDoctorsTitle: '其他执照医师',
      detailCtaTitle: '准备好开始您的疗程了吗？',
      detailCtaSub:
        '在线预约或致电诊所，我们会为您安排最合适的医师与时段。',
    },

    // Beauty page
    beauty: {
      h1: '坤德中医美容美体 — 传统内在调和 + 高科技美容美体',
      heroSub:
        '由内而外，根本调养。我们结合中医的针灸、中药、膳食、经络推拿，与 7D HIFU、DPL 嫩肤、Medsculpt 等高科技设备，为您量身定制专属美容方案。',
      breadcrumbHome: '首页',
      breadcrumbBeauty: '中医美容',
      philosophyTitle: '我们的理念',
      philosophyBody:
        '"因应体质、年龄大小、个人当下状况以中医角度给予诊断" — 所有项目均在医师评估后施作，绝不推销不适合您的方案。',
      innerTitle: '中医内调 — 由内而外焕颜',
      innerLead:
        '再昂贵的护肤品，也比不上气血调和的自然光泽。坤德中医的美容之道，从「内调」开始 — 我们相信健康的身体才是最高级的护肤品。以下三项中医内调美容服务，是所有外在美容疗程的「根本底子」。',
      innerServices: [
        {
          title: '美容针灸',
          freq: '建议每周一次',
          body: '「宣通气血，疏通经络，刺激胶原蛋白增生」— 用极细无菌针灸刺激面部经络与穴位，促进微循环与胶原再生，达到提升、紧致、改善暗沉的效果。无填充、无创、无恢复期。',
        },
        {
          title: '养颜中药',
          freq: '个性化配方',
          body: '根据体质定制补气养血、抗衰护肤中药方，真空包装熟药，可邮寄全美。针对气虚型暗沉、血虚型干燥、肝郁型色斑、肾虚型老化分别配方。',
        },
        {
          title: '养生美颜茶',
          freq: '日常饮用',
          body: '依体质推荐的天然花草茶方。坤德珍馔系列精选药膳茶，例如玫瑰红枣美颜茶、山楂荷叶消脂茶等。',
        },
      ],
      innerUseCase:
        '适用皮肤问题：色斑 · 毛孔粗大 · 细纹 · 皮肤松弛 · 痤疮 · 肤色不均 · 油脂问题 · 敏感泛红',
      modernTitle: '现代医美 — 科技加持的美颜方案',
      modernLead:
        '在中医内调打好「根基」之后，我们用最前沿的医美科技为您做「加分」。从韩国引进的换肤技术、皮秒激光、7D HIFU 提升到 Medsculpt 增肌减脂 — 坤德中医美容部 12 项现代医美项目均由执照美容师杨玲燕亲自操作，产品来自韩国与台湾正规中医草本品牌。',
      modernPromise:
        '所有项目均在医师评估后施作，绝不推销不适合您的方案。',
      modernTableHeaders: ['项目', '功效说明', '建议频率'],
      modernServices: [
        ['美容针灸（Acupuncture for Beauty）', '宣通气血，刺激胶原蛋白', '每周一次'],
        ['微针美容（Microneedling）', '美白、祛皱、痤疮疤痕修复', '每月一次'],
        ['Medsculpt 系统', '增肌减脂', '每周一次'],
        ['皮秒激光祛斑（Picosecond Laser）', '美白焕肤', '每月一次（代谢慢者 40–50 天）'],
        ['光子嫩肤（Photon Rejuvenation）', '祛斑嫩肤', '每月一次'],
        ['太空智能美容舱', 'LPE 光疗 + 近红外 + 负离子清洁提升 + 头皮护理', '视情况'],
        ['碧波庭生物疗法（Biotherapy）', '胸部护理、丰胸、提臀', '每周一次'],
        ['红血丝去除', '去红改善毛细血管', '每月一次'],
        ['黑脸娃娃（Black Doll）', '控油 + 毛孔收细', '每月一次'],
        ['日式大泡泡（Japanese Large Bubble）', '深层清洁、补水、美白', '视情况'],
        ['永久无痛脱毛', '无痛激光脱毛', '每月一次或更长'],
        ['韩式皮肤护理（Korean Facial）', '基础护肤', '视情况'],
      ],
      aestheticianTitle: '执照美容师 · 杨玲燕',
      aestheticianBody:
        '坤德中医美容部所有现代医美项目均由执照美容师杨玲燕亲自操作。她持专业执照，与院长馮羅小潔博士紧密协作，采用韩国与台湾中医草本护肤品牌的专业级产品。',
      aestheticianCta: '查看杨玲燕老师详情',
      referralTitle: '推荐好友奖励计划',
      referralLead:
        '由老客推荐来的新客，消费满 $120 可获赠基础皮肤护理一次（含小费）。老客则依累计推荐人数享受如下奖励：',
      referralHeaders: ['推荐人数', '老客奖励', '价值参考'],
      referralRows: [
        ['1 位', '$25 店内积分', '—'],
        ['2 位', '$50 店内积分', '—'],
        ['3 位', '韩式皮肤护理一次', '约 $160'],
        ['4 位', '日式大泡泡 / 碧波庭疗法一次', '约 $199'],
        ['5 位', '光子嫩肤 / 黑脸娃娃 / 红血丝治疗任选一次', '约 $299'],
        ['6 位', '皮秒激光治疗一次', '约 $399'],
        ['7 位', 'Medsculpt 增肌减脂两次', '约 $599'],
        ['8 位', '7D 提升一次', '约 $799'],
        ['9 位', '任意两项治疗', '最高约 $1,398'],
        ['10 位', '全年韩式护肤（每月一次，最短间隔一月）', '约 $1,920'],
      ],
      referralNote:
        '积分仅限兑换美容 / 医美服务，不适用于产品。',
      ctaTitle: '预约美容咨询',
      ctaSub:
        '由中医师先评估您的体质与当前状况，再为您量身搭配中医内调与现代医美方案。',
      ctaBtn: '立即预约美容咨询',
    },

    // Buttons
    bookNow: '立即预约',
    learnMore: '了解更多',
    callNow: '电话预约',

    // Footer
    footer: {
      brand: '坤德中医养生轩 · New York Four Seasons Acupuncture PC',
      tagline: '扎根法拉盛 20 余年，8 位纽约州执照针灸师，5 家分店遍布纽约',
      motto: '"遵古法，用今论" — 以母亲般的关怀陪伴您的健康之旅',
      contactTitle: '快速联系',
      hotline: '免费咨询热线',
      flagship: '法拉盛主店',
      hours: '营业时间：周一至周日 9:30 AM – 6:30 PM',
      newsletterTitle: '订阅坤德中医健康资讯',
      newsletterSub:
        '每月 1 封精选邮件 — 养生小贴士、季节调理、患者问答，不做广告、随时退订',
      newsletterPlaceholder: '您的邮箱地址',
      newsletterBtn: '免费订阅',
      newsletterPrivacy: '我们严格保护您的邮箱，绝不外泄或用于其他用途',
      socialTitle: '关注我们',
      legalTitle: '法律声明',
      legalLinks: [
        '隐私政策',
        '服务条款',
        'HIPAA 合规声明',
        '医疗免责声明',
      ],
      copyright:
        '© 2026 坤德中医养生轩 · New York Four Seasons Acupuncture PC',
      disclaimer:
        '本网站所有中医治疗内容仅供参考，不构成西医诊断；具体疗效因人而异，请以医师诊断为准。',
      seoBarLabel: '快速导航',
      seoLinks: [
        { label: '纽约中医诊所', href: '/zh' },
        { label: '纽约针灸诊所', href: '/zh/methods/acupuncture' },
        { label: '法拉盛中医诊所', href: '/zh/contact' },
        { label: '法拉盛中药调理', href: '/zh/methods/herbal-medicine' },
        { label: '纽约针灸师', href: '/zh/team' },
      ],
    },
  },

  en: {
    announcement:
      'Insurance Accepted · Acupuncture Clinic NYC · 5 Flushing & Manhattan Locations',
    announcementCta: 'Book Now',

    nav: {
      home: 'Home',
      about: 'About',
      methods: 'Treatments',
      conditions: 'Conditions',
      team: 'Our Doctors',
      beauty: 'TCM Beauty',
      blog: 'Blog',
      newPatients: 'New Patients',
      locations: 'Flushing Locations',
      contact: 'Contact',
    },

    home: {
      h1: 'Acupuncture Clinic NYC · Traditional Chinese Medicine Clinic — Kunde TCM',
      heroBanner:
        "New York's Trusted Acupuncture & Traditional Chinese Medicine Practice",
      subtitle:
        "Kunde TCM is New York City's trusted acupuncture clinic and Chinese Medicine practice. With 5 convenient locations across Flushing, Manhattan, and the Hudson Valley, 8 licensed practitioners, and 20+ years of experience, we combine time-tested TCM with modern patient care.",
      cta: 'Book Your Appointment',
      ctaSecondary: 'Explore Our Specialties',
      heroAlt:
        'Kunde TCM — Acupuncture Clinic NYC · Traditional Chinese Medicine Clinic in Flushing, New York',

      statsTitle: '20+ Years of Caring for New Yorkers',
      stats: [
        { value: '20+', label: 'Years of Clinical Experience' },
        { value: '5', label: 'NYC-Area Locations' },
        { value: '8', label: 'Licensed Practitioners' },
        { value: '6', label: 'Major Insurance Plans' },
      ],

      methodsTitle: 'Our Treatments — 8 Time-Tested Therapies',
      methodsSub:
        'Acupuncture, herbal medicine, cupping, moxibustion and more — personalized to your body, not a template',
      methodsCta: 'Explore All Treatments',

      conditionsTitle: 'Conditions We Treat — 15 Specialized Areas',
      conditionsSub:
        'From chronic pain to fertility support, from hormonal balance to stress — we care for what matters to you',
      conditionsCta: 'See All Conditions',

      bookingTitle: 'Book Online with Our Licensed Practitioners',
      bookingSub:
        'Eight New York State-licensed acupuncturists, each with deep expertise in their own clinical focus. Select your practitioner, then pick a time.',
      bookingLocationsHint:
        'Primary locations: Sanford Ave Flagship · Midtown Manhattan · 37th Ave Flushing',
      bookingCallFallback:
        'Or call to book: (718) 888-9087 · (718) 489-1828',
      bookBtn: 'Book Online',
      callBtn: 'Call to Book',

      whyTitle: 'Why New Yorkers Trust Kunde TCM',
      whySub:
        'Rooted in Flushing for over 20 years, we blend authentic Chinese Medicine with modern, evidence-based care — supporting every patient through their full healing journey.',
      whyCards: [
        {
          icon: 'ShieldCheck',
          title: 'Licensed & Academically Credentialed',
          body: 'Every practitioner on our team holds a New York State acupuncture license. Dr. Serene Feng holds a Doctor of Acupuncture & Oriental Medicine (DAOM) degree and has published original clinical research in MERIDIANS. Prof. Suo An Feng, our senior herbalist, co-invented formulas that received China\'s National Patent Excellence Award.',
        },
        {
          icon: 'Infinity',
          title: 'Ancient Wisdom Meets Modern Medicine',
          body: 'We respect both traditions. Our acupuncture can complement IVF and IUI cycles to improve outcomes, and our herbal prescriptions are carefully coordinated with any medications prescribed by your primary care doctor — giving you the best of both worlds.',
        },
        {
          icon: 'HandCoins',
          title: 'Most Major Insurance Accepted',
          body: "We accept UHC, Aetna, Cigna, Oxford, Empire BlueCross BlueShield, and NYSHIP. Not sure if your plan covers acupuncture? We'll verify your benefits — for free, with no commitment required.",
          subCtaLabel: 'Verify My Insurance (Free)',
          subCtaHref: '/en/new-patients#insurance',
        },
        {
          icon: 'MapPin',
          title: '5 Convenient Locations Across NY',
          body: "Whether you live in Queens, Midtown Manhattan, or Orange County, there's a Kunde TCM location nearby. Our three Flushing clinics are all within a 10-minute walk of each other, anchored around the 7 train and the heart of the Chinese community.",
          subCtaLabel: 'Find the Nearest Clinic',
          subCtaHref: '/en/contact#locations',
        },
      ],
      whyFooter: 'Learn about our Acupuncture Clinic NYC and the team behind it',

      testimonialsTitle: 'Patient Stories',
      testimonialsSub:
        'Real experiences from patients across our Flushing and Manhattan locations',
      testimonialsCta: 'Read More Stories',

      blogTitle: 'Kunde Wellness Journal',
      blogSub:
        'Acupuncture, herbal medicine, seasonal care and lifestyle tips — curated monthly',
      blogCta: 'Visit the Journal',
      readMore: 'Read More',

      faqTitle: 'Frequently Asked Questions',
      faqs: [
        {
          q: 'What is the best acupuncture clinic in NYC?',
          a: 'Kunde TCM is among the most established acupuncture clinics in NYC, with 5 locations across Flushing, Manhattan, and Middletown. Our team of 8 New York State-licensed acupuncturists provides the full spectrum of Traditional Chinese Medicine, from acupuncture and herbal prescriptions to cupping and Tui Na, with 20+ years of clinical experience.',
        },
        {
          q: 'Where can I find an acupuncture clinic in Flushing?',
          a: 'Kunde TCM operates 3 acupuncture Flushing locations: Sanford Ave (our flagship), 37th Ave, and the Golden Office on 41st Road. All three are within a 10-minute walk of each other, right next to the 7 train and the heart of downtown Flushing.',
        },
        {
          q: 'Does Kunde TCM accept insurance for acupuncture in NYC?',
          a: 'Yes — we accept UHC, Aetna, Cigna, Oxford, Empire BlueCross BlueShield, and NYSHIP for acupuncture treatments at all our NYC locations. We offer free insurance verification before your first visit, so you know exactly what is covered with no surprises.',
        },
      ],

      ctaTitle: 'Ready to Start Your Healing Journey?',
      ctaSub:
        'We offer phone consultations and online booking. Most major insurance plans accepted.',
      ctaPhone: 'Call us: (718) 888-9087',
      ctaSecondaryLabel: 'View All Locations',
    },

    about: {
      h1: 'About Kunde TCM — Among the Best Acupuncture Clinics in NYC',
      heroAlt:
        'Kunde TCM team — licensed acupuncturists at our Flushing flagship location',
      heroSub:
        "For more than 20 years, Kunde TCM (New York Four Seasons Acupuncture PC) has been one of NYC's most trusted Chinese Medicine practices. Founded by Dr. Serene Feng, we are a team of 8 New York State-licensed acupuncturists serving patients across Flushing, Manhattan, and the Hudson Valley.",
      breadcrumbs: [
        { label: 'Home', href: '/en' },
        { label: 'About', href: '/en/about' },
      ],

      introTitle: 'Our Story — From a Shared Clinic to 5 Locations',
      introBody: [
        "Dr. Serene Feng founded Kunde TCM Wellness Center with a simple but powerful belief — that authentic Traditional Chinese Medicine, practiced with integrity and compassion, can transform lives. Raised in a family that valued character and service, she went on to train at Sun Yat-sen University of Medical Sciences in Guangzhou, where classical TCM became the foundation of her practice.",
        "Dr. Feng has always been guided by the principle of \"Great Medicine, Sincere Heart\" — a phrase attributed to the Tang-dynasty physician Sun Simiao — which she still considers the highest standard for anyone who practices medicine. Over time, she gathered a group of like-minded practitioners who shared that same commitment, and together they founded Kunde TCM. What began as a shared clinic space in Flushing has grown into five locations across the New York metro area — three in Flushing, one in Midtown Manhattan, and one in Middletown.",
        'Our practice philosophy is simple: "Honor the ancient. Use the modern." We practice the classical forms of Chinese Medicine — acupuncture, herbal medicine, cupping, Gua Sha — while adapting every treatment plan to how real New Yorkers actually live and work today. Every patient, we believe, deserves the kind of steady, attentive care you\'d expect from someone who truly sees you as a whole person.',
      ],

      missionTitle: 'Our Mission & Philosophy',
      missionBody:
        '"We see every patient as a unique individual. By drawing on each practitioner\'s specialized expertise and working as a collaborative team, we help people restore balance in body, mind, and spirit."',
      valueCards: [
        {
          icon: 'Circle',
          title: 'Treat the Whole Person',
          body: 'We look beyond the symptom to the system that produced it — because the body is never just one part in isolation.',
        },
        {
          icon: 'Compass',
          title: 'Personalized, Not Templated',
          body: 'Two patients with the same complaint can need completely different treatments. We design every plan around you.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Prevention First',
          body: "The highest form of medicine keeps you from getting sick in the first place. We're here for the long game.",
        },
        {
          icon: 'GitMerge',
          title: 'Works With Your Doctor',
          body: 'We coordinate with your primary care team — integrating TCM with modern medicine safely and transparently.',
        },
      ],

      credTitle: 'Credentials & Accreditation',
      credItems: [
        'New York State Licensed Acupuncturists (L.Ac.) — every practitioner on our team',
        'NCCAOM-certified (National Certification Commission for Acupuncture and Oriental Medicine)',
        'In-network with UHC · NYSHIP · Empire BlueCross BlueShield · Aetna · Oxford · Cigna',
        'Original clinical acupuncture research by Dr. Serene Feng, published in MERIDIANS',
        "Prof. Suo An Feng is a co-developer of herbal formulas that received China's National Patent Excellence Award",
      ],

      navCtaTitle: 'Explore Kunde TCM',
      navLinks: [
        { label: 'Meet Our Licensed Practitioners', href: '/en/team' },
        { label: 'Explore Our 8 Treatment Methods', href: '/en/methods' },
        { label: 'See the 15 Conditions We Treat', href: '/en/conditions' },
        { label: 'New Patient Guide & First Visit', href: '/en/new-patients' },
      ],
    },

    methods: {
      listH1: 'Our Treatments — 8 Time-Tested Chinese Medicine Therapies',
      listHeroSub:
        'Acupuncture, herbal medicine, cupping, moxibustion, Gua Sha and more. At Kunde TCM, our 8 licensed practitioners combine classical methods with modern patient care across our NYC locations.',
      listIntro:
        'Every therapy on this page has stood the test of thousands of years of clinical practice. Our practitioners will choose the right combination for your specific constitution — not a template.',
      learnMore: 'Learn more',
      breadcrumbHome: 'Home',
      breadcrumbMethods: 'Treatments',
      quoteLabel: 'Classical Wisdom',
      whatIsTitle: 'What is',
      whatIsSuffix: '?',
      applicationsTitle: 'What We Treat With It',
      procedureTitle: 'What to Expect',
      faqTitle: 'Frequently Asked Questions',
      doctorsTitle: 'Practitioners Who Specialize in This',
      doctorsSub: "We'll match you with the right licensed acupuncturist for your case.",
      bookWithDoctor: 'Book Online',
      relatedConditionsTitle: 'Conditions Best Treated with This Method',
      otherMethodsTitle: 'Other Treatment Methods',
      crossLinkToConditions: 'Browse All 15 Conditions We Treat',
      detailCtaTitle: 'Ready to Experience This Treatment?',
      detailCtaSub:
        'Book online or request a free insurance verification. We welcome you at any of our 5 locations across Flushing, Manhattan, and the Hudson Valley.',
      bookNow: 'Book Now',
      viewAll: 'See All 8 Treatments',
      crossLinkBanner: 'Curious which conditions this therapy is best for?',
      crossLinkBannerCta: 'See the 15 Conditions We Treat →',
    },

    conditions: {
      listH1: 'Conditions We Treat — 15 Specialized Clinical Focus Areas',
      listHeroSub:
        "From chronic pain to fertility support, from hormonal balance to sleep and digestive health — Kunde TCM's team of 8 licensed acupuncturists cares for the 15 conditions that matter most to New Yorkers.",
      listIntro:
        'Every patient is different. We take the time to understand your TCM pattern, then build a personalized plan around your symptoms and your life.',
      learnMore: 'Learn more',
      breadcrumbHome: 'Home',
      breadcrumbConditions: 'Conditions',
      overviewTitle: 'Overview',
      tcmViewTitle: 'The TCM Perspective',
      symptomsTitle: 'Common Symptoms',
      treatmentTitle: 'How We Treat It at Kunde TCM',
      methodsUsedTitle: 'Treatment Methods We Use',
      caseTitle: 'A Patient Story',
      highlightLabel: 'Why Kunde',
      faqTitle: 'Frequently Asked Questions',
      doctorsTitle: 'Practitioners Who Treat This Condition',
      bookWithDoctor: 'Book Online',
      detailCtaTitle: 'Take the First Step Toward Feeling Better',
      detailCtaSub:
        'Our 8 New York State-licensed acupuncturists will build a plan around you — not a template.',
      bookNow: 'Book Now',
      viewAll: 'View All 15 Conditions',
      crossLinkBanner: 'Want to know what therapies we use?',
      crossLinkBannerCta: 'Explore Our 8 Treatments →',
      beautyBannerTitle: 'TCM Beauty — The First Integrative Beauty Clinic in Flushing',
      beautyBannerBody:
        'Led by Dr. Serene Feng, DAOM and Dr. Dixu Gao — facial acupuncture, herbal beauty protocols, and nourishing food therapy, all in one integrative plan.',
      beautyBannerCta: 'Explore TCM Beauty',
    },

    team: {
      listH1: 'Meet Our Team — 8 Licensed Practitioners + 4 Specialty Therapists',
      listHeroSub:
        "Every patient is unique — and so is our approach. Our team of licensed practitioners brings together diverse specialties in acupuncture, herbal medicine, orthopedics, and wellness therapy. By collaborating across disciplines, we provide truly personalized care that addresses the whole person.",
      breadcrumbHome: 'Home',
      breadcrumbTeam: 'Our Doctors',
      intro:
        'Every patient is unique — and so is our approach. Our team of licensed practitioners brings together diverse specialties in acupuncture, herbal medicine, orthopedics, and wellness therapy. By collaborating across disciplines, we provide truly personalized care that addresses the whole person.',
      practitionersTitle:
        'Licensed Practitioners — 8 New York State-Licensed Acupuncturists & Senior Herbalists',
      practitionersSub:
        'From our founder Dr. Serene Feng (DAOM) to senior herbalist Prof. Suo An Feng — every practitioner brings a distinct clinical focus and treatment style.',
      therapistsTitle:
        'Specialty Therapists — 4 Tui Na & Beauty Experts',
      therapistsSub:
        'Meridian Tui Na, traditional moxibustion, Gua Sha, San Fu Tie, TCM-infused facial treatments — all delivered by experienced specialists.',
      viewProfile: 'View Profile',
      bookOnline: 'Book Online',
      callToBook: 'Call to Book',
      joinTitle: 'Join the Kunde TCM Team',
      joinBody:
        "Kunde TCM is always looking for like-minded practitioners. If you are a New York State Licensed Acupuncturist or a senior herbalist who shares our philosophy, we'd love to hear from you.",
      joinCta: 'Email Us at ny4sacu@gmail.com',
      detailBackToTeam: 'Back to the Team',
      specialtiesTitle: 'Clinical Focus',
      educationTitle: 'Education & Credentials',
      experienceTitle: 'Experience',
      languagesTitle: 'Languages',
      clinicsTitle: 'Clinics',
      methodsTitle: 'Related Treatment Methods',
      bioTitle: 'About',
      otherDoctorsTitle: 'Other Licensed Practitioners',
      detailCtaTitle: 'Ready to Book Your Appointment?',
      detailCtaSub:
        'Book online, or call us and we will pair you with the right practitioner for your case.',
    },

    beauty: {
      h1: 'Kunde Beauty & Wellness — Timeless Wisdom, Modern Technology',
      heroSub:
        'At Kunde Beauty & Wellness, we combine the healing principles of Traditional Chinese Medicine with state-of-the-art aesthetic technology. Our personalized treatments address your skin at its source — through herbal medicine, acupuncture, nutrition, and therapeutic massage — complemented by advanced tools like 7D HIFU, DPL rejuvenation, and body sculpting systems.',
      breadcrumbHome: 'Home',
      breadcrumbBeauty: 'TCM Beauty',
      philosophyTitle: 'Our Philosophy',
      philosophyBody:
        'Every service starts with a TCM consultation. We only recommend what truly suits your constitution, your age, and your current condition — and we will happily tell you when a treatment is not a good fit.',
      innerTitle: 'Inner Beauty — Glow From Within',
      innerLead:
        'No serum, no matter how expensive, can replace the natural glow of balanced internal health. At Kunde Beauty, we believe true skincare starts from within — healthy skin is a reflection of a healthy body. Our three signature inner-beauty therapies form the foundation beneath every external treatment we offer.',
      innerServices: [
        {
          title: 'Facial Acupuncture',
          freq: 'Weekly',
          body: 'Ultra-fine sterile needles stimulate facial meridians and acupoints to promote microcirculation and collagen production — a non-invasive alternative to fillers with no downtime.',
        },
        {
          title: 'Herbal Beauty Formulas',
          freq: 'Fully Personalized',
          body: 'Custom Chinese herbal prescriptions for radiance, anti-aging, and skin repair. Vacuum-sealed and shipped nationwide. Different formulas for Qi-deficient dullness, blood-deficient dryness, liver-stagnation pigmentation, and kidney-deficient aging.',
        },
        {
          title: 'Wellness Beauty Tea',
          freq: 'Daily',
          body: 'Constitution-based herbal teas from our Kunde Kitchen collection — such as rose-jujube beauty tea and hawthorn-lotus slimming tea.',
        },
      ],
      innerUseCase:
        'Conditions we address: pigmentation · enlarged pores · fine lines · loss of firmness · acne · uneven tone · excess oil · sensitivity and redness',
      modernTitle: 'Modern Aesthetics — TCM-Guided Technology',
      modernLead:
        'Once internal balance is restored, we bring in the most advanced cosmetic technology to enhance your results. From Korean facial treatments and picosecond laser to 7D HIFU lifting and body sculpting, our 12 modern aesthetic services are all performed by licensed aesthetician Yang Lingyan, using professional-grade products from trusted Korean and Taiwanese TCM-based beauty brands. Every treatment is preceded by a practitioner evaluation — we only recommend what truly suits you.',
      modernPromise:
        'Every service is preceded by a practitioner evaluation — we only recommend what truly suits you.',
      modernTableHeaders: ['Service', 'Benefits', 'Recommended Frequency'],
      modernServices: [
        ['Acupuncture for Beauty', 'Improves circulation & stimulates collagen', 'Weekly'],
        ['Microneedling', 'Brightening, fine-line & acne-scar repair', 'Monthly'],
        ['Medsculpt System', 'Muscle toning + fat reduction', 'Weekly'],
        ['Picosecond Laser for Pigmentation', 'Brightening & pigmentation correction', 'Monthly (40–50 days for slower skin)'],
        ['Photon Rejuvenation (IPL)', 'Pigmentation & skin renewal', 'Monthly'],
        ['Smart Beauty Capsule', 'LPE light + near-infrared + negative-ion cleanse + scalp care', 'As needed'],
        ['Biotherapy (Chest & Body Care)', 'Chest toning, shaping & lifting', 'Weekly'],
        ['Redness & Capillary Treatment', 'Reduces visible capillaries and redness', 'Monthly'],
        ['Black Doll Facial', 'Oil control + pore refining', 'Monthly'],
        ['Japanese Bubble Facial', 'Deep cleanse, hydration & brightening', 'As needed'],
        ['Permanent Pain-Free Laser Hair Removal', 'Painless laser hair removal', 'Monthly or longer intervals'],
        ['Korean Facial', 'Foundational skincare routine', 'As needed'],
      ],
      aestheticianTitle: 'Licensed Aesthetician · Yang Lingyan',
      aestheticianBody:
        'Every modern aesthetic service at Kunde Beauty & Wellness is performed personally by our licensed aesthetician, Yang Lingyan. She works in close collaboration with Dr. Serene Feng and uses professional-grade TCM skincare products from trusted Korean and Taiwanese brands.',
      aestheticianCta: 'View Yang Lingyan’s Profile',
      referralTitle: 'Refer-a-Friend Rewards Program',
      referralLead:
        'New clients referred by an existing patient receive a complimentary basic facial (tip included) on a purchase of $120 or more. Existing clients earn tiered rewards based on cumulative referrals:',
      referralHeaders: ['Referrals', 'Reward', 'Approx. Value'],
      referralRows: [
        ['1', '$25 in-store credit', '—'],
        ['2', '$50 in-store credit', '—'],
        ['3', 'One Korean Facial', '~ $160'],
        ['4', 'One Japanese Bubble Facial or Biotherapy', '~ $199'],
        ['5', 'Photon / Black Doll / Redness Treatment (any one)', '~ $299'],
        ['6', 'One Picosecond Laser Session', '~ $399'],
        ['7', 'Two Medsculpt Sessions', '~ $599'],
        ['8', 'One 7D HIFU Lifting Session', '~ $799'],
        ['9', 'Any Two Treatments', 'up to ~ $1,398'],
        ['10', 'One Full Year of Korean Facial (Monthly, min. one-month gap)', '~ $1,920'],
      ],
      referralNote:
        'Rewards credit is redeemable for beauty / aesthetic services only and does not apply to retail products.',
      ctaTitle: 'Book a Beauty Consultation',
      ctaSub:
        'We start with a TCM consultation to understand your constitution, then build a personalized plan combining inner TCM care with modern aesthetic technology.',
      ctaBtn: 'Book a Beauty Consultation',
    },

    bookNow: 'Book Now',
    learnMore: 'Learn More',
    callNow: 'Call to Book',

    footer: {
      brand: 'Kunde TCM · New York Four Seasons Acupuncture PC',
      tagline:
        'Rooted in Flushing for 20+ years. 8 New York State-licensed acupuncturists. 5 locations across the New York metro area.',
      motto:
        '"Honor the ancient. Use the modern." — Compassionate care for your healing journey.',
      contactTitle: 'Quick Contact',
      hotline: 'Free Consultation Hotline',
      flagship: 'Flushing Flagship',
      hours: 'Hours: Mon–Sun, 9:30 AM – 6:30 PM',
      newsletterTitle: 'Join the Kunde Wellness Letter',
      newsletterSub:
        'One thoughtfully curated email per month — wellness tips, seasonal guidance, patient Q&As. No spam. Unsubscribe anytime.',
      newsletterPlaceholder: 'Your email address',
      newsletterBtn: 'Subscribe (Free)',
      newsletterPrivacy:
        'We will never share or sell your email. Read our Privacy Policy.',
      socialTitle: 'Follow Us',
      legalTitle: 'Legal',
      legalLinks: [
        'Privacy Policy',
        'Terms of Service',
        'HIPAA Notice',
        'Medical Disclaimer',
      ],
      copyright: '© 2026 Kunde TCM · New York Four Seasons Acupuncture PC',
      disclaimer:
        'The information on this website is for educational purposes only and is not intended as a substitute for professional medical diagnosis or treatment. Individual results may vary.',
      seoBarLabel: 'Quick Links',
      seoLinks: [
        { label: 'Acupuncture Clinic NYC', href: '/en' },
        { label: 'Acupuncture NYC', href: '/en/methods/acupuncture' },
        { label: 'Acupuncture Flushing', href: '/en/contact' },
        {
          label: 'Chinese Herbal Medicine Flushing',
          href: '/en/methods/herbal-medicine',
        },
        { label: 'Best Acupuncture NYC', href: '/en/about' },
      ],
    },
  },
} as const;

export function getDict(locale: Locale) {
  return dict[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'zh' ? 'en' : 'zh';
}
