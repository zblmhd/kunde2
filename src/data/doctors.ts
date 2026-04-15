// Kunde TCM medical team — 8 licensed practitioners + 4 specialty therapists.
// All credentials, education, and experience facts are sourced from ny-fsa.com
// and kept verbatim from 方案 3.6.  Booking URLs are the REAL Acuity Scheduling
// links per 方案 3.1 — do NOT substitute.

export type DoctorType = 'practitioner' | 'therapist';

export interface DoctorClinic {
  label: string;
  href: string;
}

export interface Doctor {
  slug: string;
  type: DoctorType;
  nameEn: string;
  nameZh: string;
  /** Title / credential string (credentialsZh/En kept as aliases) */
  credentialsEn: string;
  credentialsZh: string;
  titleZh: string;
  titleEn: string;
  specialtiesZh: string[];
  specialtiesEn: string[];
  educationZh: string[];
  educationEn: string[];
  experienceZh: string[];
  experienceEn: string[];
  languagesZh: string[];
  languagesEn: string[];
  /** Image path — doubles as `image` for DoctorBookingSection. */
  image: string;
  imagePath: string;
  /** Acuity scheduling URL or tel: link */
  bookingUrl: string;
  phoneOnly?: boolean;
  bioZh: string[];
  bioEn: string[];
  /** Clinics the doctor regularly practices at */
  clinics: DoctorClinic[];
  /** Signature techniques — linked to /methods/[slug] where applicable */
  relatedMethodSlugs: string[];
}

const FLUSHING_SANFORD: DoctorClinic = {
  label: '法拉盛 Sanford Ave 主店 · 143-07 Sanford Ave, #1A',
  href: '#sanford',
};
const FLUSHING_37TH: DoctorClinic = {
  label: '法拉盛 37th Ave 店 · 143-36 37th Ave, Suite 1',
  href: '#37th-ave',
};
const MANHATTAN: DoctorClinic = {
  label: '曼哈顿 · 150 E 55th Street',
  href: '#manhattan',
};

const FLUSHING_SANFORD_EN: DoctorClinic = {
  label: 'Flushing Flagship — 143-07 Sanford Ave, #1A',
  href: '#sanford',
};
const FLUSHING_37TH_EN: DoctorClinic = {
  label: 'Flushing 37th Ave — 143-36 37th Ave, Suite 1',
  href: '#37th-ave',
};
const MANHATTAN_EN: DoctorClinic = {
  label: 'Midtown Manhattan — 150 E 55th Street',
  href: '#manhattan',
};

// We store clinic labels as the Chinese version on the object and let the
// detail page choose English versions via a lookup helper below.
export const clinicEnMap: Record<string, DoctorClinic> = {
  [FLUSHING_SANFORD.label]: FLUSHING_SANFORD_EN,
  [FLUSHING_37TH.label]: FLUSHING_37TH_EN,
  [MANHATTAN.label]: MANHATTAN_EN,
};

export const doctors: Doctor[] = [
  // ───────── 8 Licensed Practitioners ─────────
  {
    slug: 'serene-feng',
    type: 'practitioner',
    nameEn: 'Dr. Serene Feng',
    nameZh: '馮羅小潔',
    credentialsEn: 'DAOM, L.Ac.',
    credentialsZh: 'DAOM · L.Ac.（院长）',
    titleZh: '针灸与东方医学博士 · 诊所创始人兼院长',
    titleEn:
      'Doctor of Acupuncture & Oriental Medicine — Founder & Clinical Director',
    specialtiesZh: [
      '不孕不育 · 妇科调理',
      '疼痛管理',
      '焦虑抑郁 · 情志调理',
      '慢性疲劳综合症',
    ],
    specialtiesEn: [
      'Fertility & Women’s Health',
      'Pain Management',
      'Anxiety, Depression & Emotional Wellness',
      'Chronic Fatigue Syndrome',
    ],
    educationZh: [
      '2017 · 针灸与东方医学博士（DAOM）— Atlantic Institute of Oriental Medicine（ATOM）',
      '2015 · 东方医学硕士 — New York College of TCM（以最高荣誉 Summa Cum Laude 毕业）',
      '1999 · 东方医学学士 — Royal Melbourne Institute of Technology（澳大利亚）',
      '1993 · 卫生教育学士 — 中山大学医学院（广东）',
    ],
    educationEn: [
      '2017 — Doctor of Acupuncture & Oriental Medicine (DAOM), Atlantic Institute of Oriental Medicine (ATOM)',
      '2015 — Master of Oriental Medicine, New York College of TCM (graduated Summa Cum Laude)',
      '1999 — Bachelor of Oriental Medicine, Royal Melbourne Institute of Technology (Australia)',
      '1993 — Bachelor of Health Education, Sun Yat-sen University of Medical Sciences (Guangzhou)',
    ],
    experienceZh: [
      '执业 20 余年（澳大利亚 + 美国），纽约州执照针灸师',
      '2016 年创立 New York Four Seasons Acupuncture PC（坤德中医养生轩）',
      '2018 年于国际期刊《MERIDIANS》发表原创论文「坤德消纤方治疗子宫肌瘤效果」',
      '20 余年气功冥想修习者 · 中国茶艺师',
    ],
    experienceEn: [
      'Over 20 years of clinical experience between Australia and the United States',
      'Founded New York Four Seasons Acupuncture PC (Kunde TCM) in 2016',
      'Published original clinical research on fibroid treatment in the peer-reviewed journal MERIDIANS (2018)',
      'Lifelong Qi Gong meditation practitioner and certified Chinese tea master',
    ],
    languagesZh: ['英语', '普通话', '粤语'],
    languagesEn: ['English', 'Mandarin', 'Cantonese'],
    image: '/images/doctors/serene-feng.svg',
    imagePath: '/images/doctors/serene-feng.svg',
    bookingUrl:
      'https://acuityscheduling.com/schedule.php?owner=26514875&calendarID=6953534',
    bioZh: [
      '馮羅小潔博士是坤德中医养生轩（New York Four Seasons Acupuncture PC）的创办人兼院长。她自 1993 年起行医，跨越澳大利亚与美国两大洲 20 余年，擅长以针灸与中药整合方案调理不孕不育、妇科疾病、慢性疼痛与情志疾病。',
      '2015 年她以 Summa Cum Laude 最高荣誉毕业于 New York College of TCM，两年后获得 Atlantic Institute of Oriental Medicine 的针灸与东方医学博士学位（DAOM）。2018 年她于国际期刊《MERIDIANS》发表坤德消纤方治疗子宫肌瘤的原创临床研究，成为少数在主流学术期刊发表原创研究的华人中医师之一。',
      '馮博士还是一位有 20 余年修行经验的气功冥想者与中国茶艺师。她坚信「大医精诚」— 每一位病患都值得被视为独一无二的个体，在身、心、灵三个维度同时被照顾。',
    ],
    bioEn: [
      'Dr. Serene Feng is the founder and clinical director of Kunde TCM (New York Four Seasons Acupuncture PC). Over two decades of clinical practice — first in Australia and then in the United States — she has become one of New York’s most trusted voices in fertility care, women’s health, pain management, and emotional wellness.',
      'She graduated Summa Cum Laude from the New York College of TCM in 2015 and went on to earn her Doctor of Acupuncture & Oriental Medicine (DAOM) from the Atlantic Institute of Oriental Medicine. In 2018 her original clinical research on fibroid treatment was published in the peer-reviewed journal MERIDIANS — a rare distinction for a practicing TCM physician in the U.S.',
      'Outside the clinic, Dr. Feng is a lifelong Qi Gong meditation practitioner and a certified Chinese tea master. Her guiding principle is the Tang-dynasty physician Sun Simiao’s ideal of “great medicine, sincere heart” — every patient deserves to be seen as a whole person, body, mind, and spirit.',
    ],
    clinics: [FLUSHING_SANFORD, FLUSHING_37TH, MANHATTAN],
    relatedMethodSlugs: ['acupuncture', 'herbal-medicine'],
  },

  {
    slug: 'suoan-feng',
    type: 'practitioner',
    nameEn: 'Prof. Suo An Feng',
    nameZh: '馮所安',
    credentialsEn: 'Senior Herbalist · Chief TCM Physician',
    credentialsZh: '资深中草药师 · 主任中医师',
    titleZh: '资深中草药师 · 教授 · 消渴丸发明人之一',
    titleEn:
      'Senior Herbalist & Professor · Co-Inventor of the Xiaoke (Diabetes) Herbal Formula',
    specialtiesZh: [
      '三高治疗（糖尿病 · 高血压 · 高血脂）',
      '消化科（胃病 · 胃乃安发明人）',
      '皮肤科 · 不孕不育',
      '各类痛症 · 慢性病调理',
    ],
    specialtiesEn: [
      'Diabetes & Metabolic Syndrome',
      'Digestive Disorders (Co-inventor of the Wei Nai An Formula)',
      'Dermatology · Fertility',
      'Chronic Pain & Long-term Condition Management',
    ],
    educationZh: [
      '广州中医药大学毕业',
      '原广州中医药大学附属中医制药厂研究负责人',
    ],
    educationEn: [
      'Guangzhou University of Chinese Medicine',
      'Former Head of Research at the Guangzhou University of Chinese Medicine affiliated pharmaceutical institute',
    ],
    experienceZh: [
      '与罗元凯、邓铁涛同辈的中草药研究学者',
      '胃乃安、消渴丸发明人之一',
      '1983–2015 任广州白云山中医药公司院长，主导多项中药研发',
      '1986 / 1987 / 1995 三度获得广东省科研奖',
      '2013 年消渴丸获中国中医科学院「科学技术奖」',
      '2015 年消渴丸获国家知识产权局「中国专利优秀奖」',
      '2010 年移民美国 · 2019 年 5 月加入坤德中医',
      '法拉盛主店每周五出诊，不定期至曼哈顿分店',
    ],
    experienceEn: [
      'A peer of the late TCM masters Luo Yuankai and Deng Tietao',
      'Co-inventor of the Wei Nai An (stomach-soothing) and Xiaoke (diabetes) herbal formulas',
      '1983–2015 · President of the Guangzhou Baiyunshan TCM Pharmaceutical Company, leading multiple herbal-formula R&D programs',
      'Three-time recipient of the Guangdong Provincial Science Award (1986, 1987, 1995)',
      '2013 — Xiaoke formula received the Science & Technology Award from the China Academy of Chinese Medical Sciences',
      '2015 — Xiaoke formula received the National Patent Excellence Award from China’s State Intellectual Property Office',
      'Immigrated to the U.S. in 2010 and joined Kunde TCM in May 2019',
      'Sees patients every Friday at the Flushing flagship, with rotating hours at Manhattan',
    ],
    languagesZh: ['普通话', '粤语'],
    languagesEn: ['Mandarin', 'Cantonese'],
    image: '/images/doctors/suoan-feng.svg',
    imagePath: '/images/doctors/suoan-feng.svg',
    bookingUrl: 'tel:+17188889087',
    phoneOnly: true,
    bioZh: [
      '馮所安教授是坤德中医的镇店之宝 — 一位受过系统训练、行医逾 40 年的资深中草药师，也是消渴丸与胃乃安两个中国国家级专利中药方的发明人之一。他与广州中医药大学罗元凯、邓铁涛等老一辈中医宗师同属一个学术谱系。',
      '1983 至 2015 年间，冯教授任广州白云山中医药公司院长，主导了多项中药研发项目。他研发的消渴丸先后获得 2013 年中国中医科学院「科学技术奖」与 2015 年国家知识产权局「中国专利优秀奖」— 是极少数进入国家专利名录的华人中药方之一。他本人也三度（1986 · 1987 · 1995）获得广东省科研奖。',
      '2010 年冯教授移民美国，2019 年 5 月加入坤德中医，专长为糖尿病、高血压、高血脂等三高慢性病的中医调理，以及消化科、皮肤科与各类痛症。他目前在法拉盛主店每周五出诊，并不定期至曼哈顿分店，接受中医长期调理的患者需致电 718-888-9087 提前预约。',
    ],
    bioEn: [
      'Prof. Suo An Feng is the senior herbalist at Kunde TCM — a classically trained TCM physician with over four decades of clinical practice and the co-inventor of two nationally patented Chinese herbal formulas: Wei Nai An (for digestive disorders) and Xiaoke (for diabetes).',
      'From 1983 to 2015, Prof. Feng served as president of the Guangzhou Baiyunshan TCM Pharmaceutical Company, where he led the R&D of multiple herbal formulas. His Xiaoke formula received the Science & Technology Award from the China Academy of Chinese Medical Sciences in 2013, followed by the National Patent Excellence Award from China’s State Intellectual Property Office in 2015 — an unusually rare distinction for a traditional Chinese herbal formula. He himself was three times awarded the Guangdong Provincial Science Award (1986, 1987, 1995).',
      'Prof. Feng immigrated to the United States in 2010 and joined Kunde TCM in May 2019. His clinical focus includes the TCM management of metabolic syndrome (diabetes, hypertension, high cholesterol), digestive disorders, dermatology, fertility, and chronic pain. He sees patients at the Flushing flagship every Friday, with rotating hours at our Manhattan clinic. To schedule with Prof. Feng, please call 718-888-9087 in advance.',
    ],
    clinics: [FLUSHING_SANFORD, MANHATTAN],
    relatedMethodSlugs: ['herbal-medicine'],
  },

  {
    slug: 'yang-gui',
    type: 'practitioner',
    nameEn: 'Dr. Yang Gui',
    nameZh: '桂陽',
    credentialsEn: 'L.Ac., M.S. in Acupuncture',
    credentialsZh: '纽约州执照针灸师 · 针灸硕士',
    titleZh: '脊椎与运动医学专科针灸师',
    titleEn: 'Licensed Acupuncturist · Spine & Sports-Medicine Specialist',
    specialtiesZh: [
      '脊椎矫正 · 脊椎排列',
      '肌肉关节损伤',
      '运动损伤 · 急慢性疼痛',
      '职业劳损与意外伤痛',
    ],
    specialtiesEn: [
      'Spinal Alignment & Orthopedic Acupuncture',
      'Muscle & Joint Injury',
      'Sports Injury & Chronic Pain',
      'Workplace & Accident Injury Recovery',
    ],
    educationZh: [
      '北京首都医科大学毕业 · 针灸硕士',
      '中日友好北京友谊医院任职经历',
      '来自中医世家 — 师从多位正骨与中药大师',
    ],
    educationEn: [
      'Capital Medical University, Beijing — Master of Acupuncture',
      'Former physician at the China-Japan Friendship Hospital, Beijing',
      'Born into a TCM family — apprenticed under multiple masters of orthopedics and herbal medicine',
    ],
    experienceZh: [
      '专精中西医结合的骨科与运动医学手法',
      '擅长脊椎排列、关节康复、职业伤害与意外伤痛的整合治疗',
    ],
    experienceEn: [
      'Integrates Chinese and Western orthopedic techniques',
      'Specializes in spinal alignment, joint rehabilitation, workplace injury recovery, and accident-related chronic pain',
    ],
    languagesZh: ['普通话', '英语'],
    languagesEn: ['Mandarin', 'English'],
    image: '/images/doctors/yang-gui.svg',
    imagePath: '/images/doctors/yang-gui.svg',
    bookingUrl:
      'https://acuityscheduling.com/schedule.php?owner=26514875&calendarID=6954760',
    bioZh: [
      '桂阳医生是坤德中医的脊椎与运动医学专科针灸师。他来自中医世家，自幼师从多位正骨与中药大师，后考取北京首都医科大学针灸硕士，并在中日友好北京友谊医院任职多年。',
      '桂医生擅长将西医的解剖学认知与中医的经络理论结合，以精准的毫针、电针与推拿手法处理脊椎错位、肩颈腰腿痛、运动伤害、职业劳损与意外后遗症。他的患者中不乏长期坐办公室的白领、职业运动员与意外康复期的患者。',
    ],
    bioEn: [
      'Dr. Yang Gui is the spine and sports-medicine specialist at Kunde TCM. Born into a TCM family, he was trained from a young age by multiple masters in orthopedics and herbal medicine, later earning his Master of Acupuncture at Capital Medical University in Beijing and serving for years at the China-Japan Friendship Hospital.',
      'Dr. Gui is known for combining Western anatomical precision with TCM meridian theory. He treats spinal misalignment, neck and back pain, sports injuries, occupational strain, and post-accident recovery using filiform needles, electro-acupuncture, and orthopedic Tui Na. His patients range from desk-bound office workers and professional athletes to patients in post-accident rehabilitation.',
    ],
    clinics: [FLUSHING_SANFORD, FLUSHING_37TH],
    relatedMethodSlugs: ['acupuncture', 'tuina'],
  },

  {
    slug: 'dixu-gao',
    type: 'practitioner',
    nameEn: 'Dr. Dixu Gao',
    nameZh: '高迪旭',
    credentialsEn: 'L.Ac.',
    credentialsZh: '纽约州执照针灸师',
    titleZh: '中风康复与心脑血管专科医师',
    titleEn:
      'Licensed Acupuncturist · Stroke Recovery & Cardiovascular Specialist',
    specialtiesZh: [
      '中风偏瘫康复',
      '泌尿生殖系统疾病',
      '心脑血管疾病',
      '疼痛管理',
    ],
    specialtiesEn: [
      'Stroke & Hemiplegia Rehabilitation',
      'Urogenital Disorders',
      'Cardiovascular & Cerebrovascular Conditions',
      'Pain Management',
    ],
    educationZh: [
      '1977 年就读山东中医药大学 · 1975 年起跟师学习',
      '曾就职青岛中医医院',
      '曾就职莫斯科医疗中心及纽约多家中医诊所',
    ],
    educationEn: [
      'Shandong University of Traditional Chinese Medicine (enrolled 1977); apprenticeship began in 1975',
      'Former physician at the Qingdao TCM Hospital',
      'Practiced at a Moscow medical center and multiple TCM clinics across New York',
    ],
    experienceZh: [
      '46 年以上临床经验 · 来自中医家族',
      '发表多篇中医专业学术文章',
      '以针药并用处理中风后遗症与心脑血管疾病见长',
    ],
    experienceEn: [
      'Over 46 years of clinical experience, born into a family of TCM physicians',
      'Published multiple professional research articles on Chinese Medicine',
      'Recognized for combining acupuncture and herbal medicine in stroke and cardiovascular rehabilitation',
    ],
    languagesZh: ['普通话', '英语', '俄语'],
    languagesEn: ['Mandarin', 'English', 'Russian'],
    image: '/images/doctors/dixu-gao.svg',
    imagePath: '/images/doctors/dixu-gao.svg',
    bookingUrl:
      'https://acuityscheduling.com/schedule.php?owner=26514875&calendarID=7028544',
    bioZh: [
      '高迪旭医生来自中医世家，自 1975 年起跟师学习中医，1977 年考入山东中医药大学。他的临床生涯横跨青岛中医医院、莫斯科医疗中心与纽约多家中医诊所，累计 46 年以上的执业经验。',
      '高医生擅长中风偏瘫的针灸康复、泌尿生殖系统疾病以及心脑血管慢性病的长期调理。他坚持针药并用，对每一位中风后遗症患者制定从急性期到康复期的完整方案，并发表过多篇中医专业学术文章。',
    ],
    bioEn: [
      'Dr. Dixu Gao was born into a family of TCM practitioners and began his apprenticeship in 1975, later entering Shandong University of Traditional Chinese Medicine in 1977. His clinical career spans the Qingdao TCM Hospital, a Moscow medical center, and multiple TCM clinics across New York — over 46 years of continuous practice.',
      'Dr. Gao specializes in stroke and hemiplegia rehabilitation, urogenital disorders, and the long-term management of cardiovascular conditions. He is known for combining acupuncture and herbal medicine in full-spectrum stroke recovery plans from the acute phase through rehabilitation, and has published numerous professional research articles.',
    ],
    clinics: [FLUSHING_SANFORD, MANHATTAN],
    relatedMethodSlugs: ['acupuncture', 'herbal-medicine'],
  },

  {
    slug: 'senior-chang',
    type: 'practitioner',
    nameEn: 'Senior Chang',
    nameZh: '常醫生',
    credentialsEn: 'Senior Herbalist',
    credentialsZh: '资深中草药师',
    titleZh: '资深中草药师 · 内科与妇儿科专科',
    titleEn: 'Senior Herbalist · Internal, Pediatric & Women’s Health',
    specialtiesZh: [
      '内科消化系统',
      '小儿消化调理',
      '妇科调理',
      '不孕不育',
    ],
    specialtiesEn: [
      'Internal & Digestive Medicine',
      'Pediatric Digestive Care',
      'Women’s Health',
      'Fertility & Reproductive Health',
    ],
    educationZh: [
      '系统的中医药学训练 · 数十年临床经验',
    ],
    educationEn: [
      'Decades of formal TCM training and clinical practice',
    ],
    experienceZh: [
      '擅长以中药为主轴，配合温和针灸，调理胃肠、小儿与妇科疾病',
    ],
    experienceEn: [
      'Uses herbal medicine as the primary modality, complemented by gentle acupuncture for digestive, pediatric, and women’s health conditions',
    ],
    languagesZh: ['普通话'],
    languagesEn: ['Mandarin'],
    image: '/images/doctors/senior-chang.svg',
    imagePath: '/images/doctors/senior-chang.svg',
    bookingUrl:
      'https://acuityscheduling.com/schedule.php?owner=26514875&calendarID=12316332',
    bioZh: [
      '常医生是坤德中医的资深中草药师，专长为内科消化系统疾病、小儿消化调理、妇科调理以及不孕不育。她以中药为主轴，善用温和的针灸作为辅助，为慢性胃病、挑食瘦弱的小朋友、月经不调与备孕女性提供长期调理方案。',
      '许多患者因为体质弱、畏针的原因被推荐到常医生门下 — 她常说：「慢性病不是打一针就好的，调理是一场长跑。」',
    ],
    bioEn: [
      'Senior Chang is one of Kunde TCM’s experienced herbalists, focusing on internal and digestive medicine, pediatric digestive care, women’s health, and fertility. She primarily uses Chinese herbal medicine, complemented by gentle acupuncture, to build long-term care plans for chronic gastric conditions, underweight children, menstrual irregularities, and women preparing for pregnancy.',
      'Many patients find their way to Senior Chang because they are needle-shy or have fragile constitutions. As she often reminds her patients, “Chronic conditions aren’t fixed with one needle — healing is a long-distance run.”',
    ],
    clinics: [FLUSHING_SANFORD],
    relatedMethodSlugs: ['herbal-medicine', 'acupuncture'],
  },

  {
    slug: 'chelsea-jin',
    type: 'practitioner',
    nameEn: 'Dr. Chelsea Jin',
    nameZh: '金雪太',
    credentialsEn: 'L.Ac., Dipl.C.H.',
    credentialsZh: '纽约州执照针灸师 · 执照中药师',
    titleZh: '「醒脑开窍」针刺法传人 · 脑血管专科',
    titleEn:
      'Licensed Acupuncturist & Herbalist · "Xing Nao Kai Qiao" Method Practitioner',
    specialtiesZh: [
      '脑血管疾病 · 中风 · 偏瘫',
      '偏头痛 · 面瘫',
      '胃肠道疾病',
      '焦虑 · 失眠 · 颈肩背痛',
    ],
    specialtiesEn: [
      'Cerebrovascular Disorders · Stroke · Hemiplegia',
      'Migraine & Facial Palsy',
      'Gastrointestinal Conditions',
      'Anxiety, Insomnia & Musculoskeletal Pain',
    ],
    educationZh: [
      '天津中医药大学 · 针灸硕士',
      '成都中医药大学 · 本科',
      '曾任辽宁奉天中医医院针灸门诊主任',
    ],
    educationEn: [
      'Master of Acupuncture — Tianjin University of Traditional Chinese Medicine',
      'Bachelor of TCM — Chengdu University of Traditional Chinese Medicine',
      'Former Director of the Acupuncture Department at Shenyang Fengtian TCM Hospital',
    ],
    experienceZh: [
      '特色技法：「醒脑开窍」针刺法',
      '坚持针药并用 · 数千例中风后遗症门诊经验',
    ],
    experienceEn: [
      'Signature technique: Xing Nao Kai Qiao ("Awaken the Brain") acupuncture method',
      'Integrates acupuncture with herbal medicine; thousands of post-stroke rehabilitation cases',
    ],
    languagesZh: ['普通话', '韩语', '英语'],
    languagesEn: ['Mandarin', 'Korean', 'English'],
    image: '/images/doctors/chelsea-jin.svg',
    imagePath: '/images/doctors/chelsea-jin.svg',
    bookingUrl:
      'https://acuityscheduling.com/schedule.php?owner=26514875&calendarID=7045822',
    bioZh: [
      '金雪太医生毕业于成都中医药大学，后在天津中医药大学取得针灸硕士学位。她最具代表性的技法是「醒脑开窍」针刺法 — 由天津中医药大学石学敏院士所创，专门用于中风后遗症、偏瘫、偏头痛与面瘫的针灸治疗。',
      '金医生曾任辽宁奉天中医医院针灸门诊主任，积累了数千例中风后遗症临床经验。除脑血管疾病外，她对胃肠道疾病、焦虑、失眠与颈肩背痛也有深厚造诣，坚持针药并用，为每一位患者同时开出针灸方案与中药方。',
    ],
    bioEn: [
      'Dr. Chelsea Jin graduated from Chengdu University of Traditional Chinese Medicine and went on to earn her Master of Acupuncture at Tianjin University of TCM. Her signature technique is the Xing Nao Kai Qiao ("Awaken the Brain") acupuncture method — developed by Academician Shi Xuemin at Tianjin — which is used specifically for stroke rehabilitation, hemiplegia, migraine, and facial palsy.',
      'Before joining Kunde TCM, Dr. Jin served as Director of the Acupuncture Department at Shenyang Fengtian TCM Hospital, where she treated thousands of post-stroke cases. Beyond cerebrovascular disease, she is highly regarded for her work with gastrointestinal disorders, anxiety, insomnia, and musculoskeletal pain, and always pairs acupuncture with a custom herbal prescription.',
    ],
    clinics: [FLUSHING_SANFORD, FLUSHING_37TH],
    relatedMethodSlugs: ['acupuncture', 'herbal-medicine'],
  },

  {
    slug: 'alina-hu',
    type: 'practitioner',
    nameEn: 'Dr. Alina Hu',
    nameZh: '任謙',
    credentialsEn: 'L.Ac.',
    credentialsZh: '纽约州执照针灸师 · 中国执照中医师',
    titleZh: '治未病专科 · 妇科与情志调理',
    titleEn:
      'Licensed Acupuncturist · Preventive Medicine, Women’s Health & Emotional Wellness',
    specialtiesZh: [
      '妇科调理 · 更年期综合症',
      '失眠 · 焦虑 · 亚健康',
      '胃肠功能调节',
      '各类痛症 · 慢性疲劳',
    ],
    specialtiesEn: [
      'Women’s Health & Menopause',
      'Insomnia, Anxiety & Sub-health',
      'Digestive & Functional GI Conditions',
      'Chronic Pain & Chronic Fatigue Syndrome',
    ],
    educationZh: [
      '湖北中医药大学毕业',
      '曾任职湖北省中医医院',
      '师从全国针灸重点专科李家康教授',
      '后赴明尼苏达中国中医学院执业',
      '师从北京西苑医院针灸科主任任卓玲',
    ],
    educationEn: [
      'Hubei University of Chinese Medicine',
      'Former physician at Hubei Provincial TCM Hospital',
      'Trained under Prof. Li Jiakang, head of the national key acupuncture specialty program',
      'Later practiced at the China Institute of TCM in Minnesota',
      'Apprenticed under Prof. Ren Zhuoling, head of acupuncture at Beijing Xiyuan Hospital',
    ],
    experienceZh: [
      '擅长治未病 — 预防医学与体质调理',
      '特长：慢性疲劳综合症的多维度干预',
    ],
    experienceEn: [
      'Specializes in "treating disease before it arises" — preventive medicine and constitutional balancing',
      'Known for multi-layered intervention in chronic fatigue syndrome',
    ],
    languagesZh: ['普通话', '英语'],
    languagesEn: ['Mandarin', 'English'],
    image: '/images/doctors/alina-hu.svg',
    imagePath: '/images/doctors/alina-hu.svg',
    bookingUrl:
      'https://acuityscheduling.com/schedule.php?owner=26514875&calendarID=9356857',
    bioZh: [
      '任谦医生（Alina Hu）毕业于湖北中医药大学，曾任职湖北省中医医院，师从全国针灸重点专科李家康教授。她后来赴美执业于明尼苏达中国中医学院，并师从北京西苑医院针灸科主任任卓玲教授。',
      '任医生的门诊主题是「治未病」— 她相信预防永远胜于治疗。她擅长调理更年期综合症、失眠焦虑、慢性疲劳以及长期处于「亚健康」状态的上班族。她的诊疗节奏温和，每一次问诊都会花足时间，而不是急着扎针。',
    ],
    bioEn: [
      'Dr. Alina Hu (任谦) graduated from Hubei University of Chinese Medicine and practiced at the Hubei Provincial TCM Hospital, where she trained under Prof. Li Jiakang of the national key acupuncture specialty program. She later practiced at the China Institute of TCM in Minnesota and apprenticed under Prof. Ren Zhuoling, head of acupuncture at Beijing Xiyuan Hospital.',
      'Dr. Hu’s clinical philosophy is rooted in the ancient TCM principle of "treating disease before it arises" — she believes prevention is always stronger than cure. Her focus areas include menopause, insomnia and anxiety, chronic fatigue, and the kind of “sub-health” fatigue common among New York’s long-hours professionals. Her pace is deliberately unhurried; she will spend time listening before she ever picks up a needle.',
    ],
    clinics: [FLUSHING_37TH, MANHATTAN],
    relatedMethodSlugs: ['acupuncture', 'herbal-medicine'],
  },

  {
    slug: 'jiana-xu',
    type: 'practitioner',
    nameEn: 'Dr. Jia Na Xu',
    nameZh: '徐家納',
    credentialsEn: 'L.Ac., M.S. in Acupuncture & TCM',
    credentialsZh: '纽约州执照针灸师 · 针灸与中医硕士',
    titleZh: '痛症与情志专科针灸师',
    titleEn: 'Licensed Acupuncturist · Pain & Emotional Wellness',
    specialtiesZh: [
      '颈肩腰背痛 · 坐骨神经痛',
      '压力 · 焦虑 · 抑郁',
      '湿疹 · 花粉过敏',
      '减重 · 不孕不育',
    ],
    specialtiesEn: [
      'Neck, Shoulder & Back Pain · Sciatica',
      'Stress, Anxiety & Depression',
      'Eczema & Seasonal Allergies',
      'Weight Management & Fertility',
    ],
    educationZh: [
      '上海第二医科大学毕业',
      '曾于上海第二医科大学附属瑞金医院工作多年',
      '后在美国取得针灸与中医硕士学位',
    ],
    educationEn: [
      'Shanghai Second Medical University',
      'Former physician at Ruijin Hospital, Shanghai Second Medical University affiliate',
      'Later earned a Master’s degree in Acupuncture and Chinese Medicine in the United States',
    ],
    experienceZh: [
      '西医背景 + 中医训练 · 擅长中西整合思路',
      '专注于慢性痛症与情志疾病的长期调理',
    ],
    experienceEn: [
      'Dual training in Western medicine and Chinese Medicine — brings an integrative clinical perspective',
      'Long-term care for chronic pain and emotional wellness',
    ],
    languagesZh: ['普通话', '上海话', '英语'],
    languagesEn: ['Mandarin', 'Shanghainese', 'English'],
    image: '/images/doctors/jiana-xu.svg',
    imagePath: '/images/doctors/jiana-xu.svg',
    bookingUrl:
      'https://acuityscheduling.com/schedule.php?owner=26514875&calendarID=7028544',
    bioZh: [
      '徐家纳医生毕业于上海第二医科大学，早年在上海瑞金医院工作多年，累积了扎实的西医临床基础。她赴美后再攻读针灸与中医硕士学位，成为为数不多的中西医双重训练背景的针灸师。',
      '徐医生擅长处理颈肩腰背痛、坐骨神经痛、压力与焦虑、抑郁、湿疹、花粉过敏、减重以及不孕不育。她的诊疗风格融合了瑞金医院严谨的病历思维与中医的整体观念 — 每一位患者都会得到一份像西医病历一样清晰的 TCM 治疗计划。',
    ],
    bioEn: [
      'Dr. Jia Na Xu is one of the few practitioners on our team with formal training in both Western medicine and Traditional Chinese Medicine. She graduated from Shanghai Second Medical University and spent years at Ruijin Hospital before moving to the United States, where she earned a Master’s degree in Acupuncture and Chinese Medicine.',
      'Her clinical focus includes neck, shoulder, and lower back pain, sciatica, stress and anxiety, depression, eczema, seasonal allergies, weight management, and fertility. Patients often remark that Dr. Xu’s plans feel like a precise Western medical workup wrapped inside a TCM framework — every case gets a clear, documented treatment plan.',
    ],
    clinics: [FLUSHING_SANFORD, FLUSHING_37TH],
    relatedMethodSlugs: ['acupuncture', 'herbal-medicine'],
  },

  // ───────── 4 Specialty Therapists ─────────
  {
    slug: 'daojia-shibazi',
    type: 'therapist',
    nameEn: 'Daojia Shibazi',
    nameZh: '道家十八紫',
    credentialsEn: 'Meridian Tui Na Therapist',
    credentialsZh: '经络推拿师',
    titleZh: '筋肌康复与痛症专科推拿师',
    titleEn: 'Meridian Tui Na · Musculoskeletal & Pain Recovery',
    specialtiesZh: ['筋肌康复', '痛症治疗'],
    specialtiesEn: ['Musculoskeletal Recovery', 'Pain Management'],
    educationZh: ['系统的经络推拿训练'],
    educationEn: ['Classical meridian Tui Na training'],
    experienceZh: [
      '治疗手法：经络推拿 · 中药竹筒拔罐 · 砭石疗法 · 热石疗法',
    ],
    experienceEn: [
      'Techniques: meridian Tui Na, herbal bamboo cupping, Bian stone therapy, hot stone therapy',
    ],
    languagesZh: ['普通话'],
    languagesEn: ['Mandarin'],
    image: '/images/doctors/daojia-shibazi.svg',
    imagePath: '/images/doctors/daojia-shibazi.svg',
    bookingUrl: 'tel:+17188889087',
    phoneOnly: true,
    bioZh: [
      '道家十八紫老师是坤德中医的资深经络推拿师，主治筋肌康复与痛症治疗。她的招牌手法是经络推拿配合中药竹筒拔罐、砭石与热石疗法 — 这套组合拳尤其适合长期伏案、气血瘀滞的上班族。',
    ],
    bioEn: [
      'Daojia Shibazi is one of Kunde TCM’s senior meridian Tui Na therapists, focusing on musculoskeletal recovery and pain management. Her signature protocol layers meridian Tui Na with herbal bamboo cupping, Bian stone therapy, and hot stone therapy — a combination especially effective for desk-bound professionals carrying long-term Qi and blood stagnation.',
    ],
    clinics: [FLUSHING_SANFORD],
    relatedMethodSlugs: ['tuina', 'cupping', 'bianstone'],
  },

  {
    slug: 'haiying-li',
    type: 'therapist',
    nameEn: 'Haiying Li',
    nameZh: '李海鹰',
    credentialsEn: 'Meridian Tui Na Therapist',
    credentialsZh: '经络推拿师',
    titleZh: '痛症与情志调理推拿师',
    titleEn: 'Meridian Tui Na · Pain & Emotional Wellness',
    specialtiesZh: ['痛症治疗', '焦虑抑郁'],
    specialtiesEn: ['Pain Management', 'Anxiety & Depression'],
    educationZh: ['系统的经络推拿与灸疗训练'],
    educationEn: ['Formal training in meridian Tui Na and moxibustion'],
    experienceZh: [
      '治疗手法：经络推拿 · 火罐 · 气罐 · 传统艾灸 · 刮痧 · 三伏贴',
    ],
    experienceEn: [
      'Techniques: meridian Tui Na, fire cupping, vacuum cupping, traditional moxibustion, Gua Sha, San Fu Tie',
    ],
    languagesZh: ['普通话'],
    languagesEn: ['Mandarin'],
    image: '/images/doctors/haiying-li.svg',
    imagePath: '/images/doctors/haiying-li.svg',
    bookingUrl: 'tel:+17188889087',
    phoneOnly: true,
    bioZh: [
      '李海鹰老师是坤德中医的经络推拿师，主治痛症治疗与焦虑抑郁等情志疾病。她的手法齐全 — 火罐、气罐、传统艾灸、刮痧、三伏贴样样精通。许多患者是被她的艾灸疗程「暖好的」：既松了身体，也松了情绪。',
    ],
    bioEn: [
      'Haiying Li is a meridian Tui Na therapist at Kunde TCM, with a focus on pain management and emotional wellness conditions such as anxiety and depression. Her toolkit is wide — fire cupping, vacuum cupping, traditional moxibustion, Gua Sha, and San Fu Tie. Many patients describe her moxibustion sessions as “warming the body and the mood at the same time.”',
    ],
    clinics: [FLUSHING_37TH],
    relatedMethodSlugs: ['tuina', 'cupping', 'moxibustion-guasha', 'sanfutie'],
  },

  {
    slug: 'shirley-li',
    type: 'therapist',
    nameEn: 'Shirley Li',
    nameZh: '雪丽',
    credentialsEn: 'Meridian Tui Na Therapist',
    credentialsZh: '经络推拿师',
    titleZh: '痛症与妇科调理推拿师',
    titleEn: 'Meridian Tui Na · Pain & Women’s Health',
    specialtiesZh: ['痛症治疗', '妇科诸症'],
    specialtiesEn: ['Pain Management', 'Women’s Health'],
    educationZh: ['系统的经络推拿与灸疗训练'],
    educationEn: ['Formal training in meridian Tui Na and moxibustion'],
    experienceZh: [
      '治疗手法：经络推拿 · 踩背按摩 · 传统艾灸 · 刮痧',
    ],
    experienceEn: [
      'Techniques: meridian Tui Na, back-walking massage, traditional moxibustion, Gua Sha',
    ],
    languagesZh: ['普通话'],
    languagesEn: ['Mandarin'],
    image: '/images/doctors/shirley-li.svg',
    imagePath: '/images/doctors/shirley-li.svg',
    bookingUrl: 'tel:+17188889087',
    phoneOnly: true,
    bioZh: [
      '雪丽老师（Shirley Li）是坤德中医的资深经络推拿师，专长痛症治疗与妇科诸症。她的经典项目是传统的踩背按摩 — 这是一种讲究医师手足并用的推拿技艺，尤其适合深层肌肉紧绷、普通按摩按不开的情况。',
    ],
    bioEn: [
      'Shirley Li is one of Kunde TCM’s senior meridian Tui Na therapists, specializing in pain management and women’s health conditions. Her signature offering is traditional back-walking massage — a Tui Na technique that uses both the therapist’s hands and feet, particularly effective for deep muscle tension that ordinary massage cannot reach.',
    ],
    clinics: [FLUSHING_SANFORD],
    relatedMethodSlugs: ['tuina', 'moxibustion-guasha'],
  },

  {
    slug: 'yang-lingyan',
    type: 'therapist',
    nameEn: 'Yang Lingyan',
    nameZh: '楊玲燕',
    credentialsEn: 'Licensed Aesthetician',
    credentialsZh: '执照美容师',
    titleZh: '汉方美颜 · 坤德中医美容部主理',
    titleEn: 'Licensed Aesthetician · Lead of Kunde Beauty & Wellness',
    specialtiesZh: [
      '汉方美颜',
      '7D HIFU · DPL 嫩肤',
      '皮秒激光 · 光子嫩肤',
      'Medsculpt 增肌减脂',
    ],
    specialtiesEn: [
      'TCM-Infused Facial Treatments',
      '7D HIFU · DPL Skin Rejuvenation',
      'Picosecond Laser · Photon Rejuvenation',
      'Medsculpt Body Sculpting',
    ],
    educationZh: [
      '持专业美容师执照',
      '采用韩国与台湾中医草本护肤品牌',
    ],
    educationEn: [
      'Licensed aesthetician',
      'Works exclusively with Korean and Taiwanese TCM-based professional skincare brands',
    ],
    experienceZh: [
      '坤德中医美容部 12 项现代医美项目均由她亲自操作',
    ],
    experienceEn: [
      'Personally performs all 12 modern aesthetic services in the Kunde Beauty & Wellness program',
    ],
    languagesZh: ['普通话', '英语'],
    languagesEn: ['Mandarin', 'English'],
    image: '/images/doctors/yang-lingyan.svg',
    imagePath: '/images/doctors/yang-lingyan.svg',
    bookingUrl: 'tel:+17188889087',
    phoneOnly: true,
    bioZh: [
      '杨玲燕老师是坤德中医美容部的执照美容师，持专业执照，亲自操作坤德中医美容部的全部 12 项现代医美项目 — 从 7D HIFU 提升、DPL 嫩肤、皮秒激光到 Medsculpt 增肌减脂。',
      '她坚持使用韩国与台湾中医草本品牌的专业护肤产品，并与院长馮羅小潔博士、执照针灸师团队密切协作 — 每一位美容患者都会先经过中医体质评估，再决定做什么项目、不做什么项目。',
    ],
    bioEn: [
      'Yang Lingyan is the licensed aesthetician leading Kunde Beauty & Wellness. She personally performs all 12 modern aesthetic services in the program — from 7D HIFU lifting and DPL skin rejuvenation to picosecond laser and Medsculpt body sculpting.',
      'Her tools of choice are professional TCM-based skincare products from trusted Korean and Taiwanese brands. She works in close collaboration with Dr. Serene Feng and the licensed acupuncturist team — every beauty patient is first assessed from a TCM constitutional perspective before deciding what to treat and what not to treat.',
    ],
    clinics: [FLUSHING_SANFORD],
    relatedMethodSlugs: ['acupuncture'],
  },
];

export function getDoctor(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}

export const licensedPractitioners = doctors.filter(
  (d) => d.type === 'practitioner',
);
export const specialtyTherapists = doctors.filter(
  (d) => d.type === 'therapist',
);
