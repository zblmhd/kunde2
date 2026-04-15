// Kunde TCM blog — 6 real clinical cases from 方案 3.10 as launch content.
// Categories (ZH): 针灸科普 | 中药知识 | 疾病防治 | 养生食疗 | 患者故事
// English category map mirrors ZH.
// Body stored as HTML strings (rendered via dangerouslySetInnerHTML on detail page).

export const POST_CATEGORIES_ZH = [
  '针灸科普',
  '中药知识',
  '疾病防治',
  '养生食疗',
  '患者故事',
] as const;

export const POST_CATEGORIES_EN: Record<
  (typeof POST_CATEGORIES_ZH)[number],
  string
> = {
  针灸科普: 'Acupuncture Basics',
  中药知识: 'Herbal Medicine',
  疾病防治: 'Conditions & Prevention',
  养生食疗: 'Food Therapy',
  患者故事: 'Patient Stories',
};

export interface Post {
  slug: string;
  /** Locked sort date (ISO) */
  date: string;
  /** ZH / EN categories (use multi-tag for filtering) */
  categoriesZh: Array<(typeof POST_CATEGORIES_ZH)[number]>;
  authorSlug: string; // matches doctors.ts slug
  authorZh: string;
  authorEn: string;
  cover: string;
  coverAltZh: string;
  coverAltEn: string;
  titleZh: string;
  titleEn: string;
  excerptZh: string;
  excerptEn: string;
  /** 5-8 min read */
  readMinutes: number;
  bodyZh: string; // HTML
  bodyEn: string; // HTML
  relatedConditionSlugs: string[];
  relatedMethodSlugs: string[];
  tagsZh: string[];
  tagsEn: string[];
}

const INTRO_ZH =
  '<p class="lead">由医生为大家解说根本病因、解析疾病与个人体质的关系，并对应正统中医理论，采取适合的中医古法，做出有效治疗。（本文病例来自坤德中医养生轩临床实录。）</p>';

const INTRO_EN =
  '<p class="lead">At Kunde TCM, our practitioners trace each condition back to its root — matching constitution, classical TCM theory, and the patient\'s individual pattern before designing a treatment plan. The case below is drawn from our Flushing clinical practice.</p>';

export const posts: Post[] = [
  // 1 ── 不孕症
  {
    slug: 'treating-infertility-whole-body-adjustment',
    date: '2026-03-28',
    categoriesZh: ['患者故事', '疾病防治'],
    authorSlug: 'serene-feng',
    authorZh: '馮羅小潔 医生',
    authorEn: 'Dr. Serene Feng, DAOM',
    cover: '/images/about-hero.svg',
    coverAltZh: '坤德中医治疗不孕症 — 针灸调经案例',
    coverAltEn: 'Kunde TCM fertility support — acupuncture and herbal case',
    titleZh: '治疗不孕症 — 综合调理现奇迹',
    titleEn:
      'Treating Infertility — How Whole-Body Adjustment Made the Impossible Possible',
    excerptZh:
      '13 个星期的体温曲线、肝胆时段的作息调整、男性肾阳中药配方，加上每日打坐修炼 — 馮羅小潔院长分享一位多年不孕患者最终顺利怀孕的完整调理思路。',
    excerptEn:
      'Thirteen weeks of basal temperature charting, a reset liver-timed sleep routine, herbal formulas for both partners, and daily meditation. Dr. Serene Feng walks through a long-infertile patient\'s full path back to pregnancy.',
    readMinutes: 7,
    bodyZh:
      INTRO_ZH +
      `<h2>密切关注体温变化 — 13 个星期的基础体温曲线</h2>
<p>这位患者是一位调经生小孩的女性。我们在最初的 13 个星期之内开始密切关注体温的变化：每天清晨醒来第一件事，不起床、不说话、不喝水，立刻用体温计测量口温，并在同一张图表上记录下来。</p>
<p>为什么要盯体温？因为每日的曲线可以告诉我们很多信息 — 雌激素是否充足、孕激素是否足量、是否能够顺利排卵。如果体温曲线前后两段之间的差距过小，通常意味着黄体功能不足；若一直处于低温且没有明显抬升，则排卵可能都出现困难。</p>

<h2>适应人体生物钟 — 11 点到 3 点的肝胆时段</h2>
<p>我们特别强调中药、饮食和作息之间的配合。古人说，晚上 11 点至凌晨 3 点是肝胆经络循行、身体自我修复与排毒的黄金时段。一个长期熬夜的人，就算药方再好、营养再够，也很难真正"养回来"。</p>
<p>所以治疗方案的第一步，我们请她晚上 10 点半上床、11 点前入睡。肝血归藏之后，卵巢才能在一个安静的内环境里完成月经周期应有的任务。</p>

<h2>男性同调 — 肾阳不足的配方</h2>
<p>"要想有一个好的种子一样，精子要足够的强、足够的有活力。" 所以我们也请她的先生一起来看诊。经过辨证，他属于肾阳不足 + 气血两虚，我们给他开了一个补肾阳、益精气的方子，与太太的调经中药并行。</p>

<h2>修炼文化的运用 — 打坐安神</h2>
<p>心情的焦虑其实会严重影响气血运行。我们教患者一些法轮功打坐的功法，帮助她在调养的这段时间里稳定心神、减少压力，让身体能更高效地完成自我修复。</p>

<h2>结果：多年不孕 — 顺利怀孕并生产</h2>
<p>经过这样一整套的调整：每日记录体温 → 肝胆时段作息 → 男女双方的中药 → 每日打坐 — 这位多年不孕的妇女终于成功怀孕，并生下了一个健康、活泼的宝宝。</p>

<blockquote>中医治疗不孕，从来不是一剂神方。它是把身体、情绪、作息、伴侣、饮食一起带回正轨，然后让身体做它本来就会做的事情。</blockquote>
<h3>相关主治项目</h3>
<p>本案例属于坤德中医不孕不育调理科。<a href="/zh/conditions/fertility">查看不孕不育主治项目</a> · <a href="/zh/methods/acupuncture">了解针灸调经</a>。</p>`,
    bodyEn:
      INTRO_EN +
      `<h2>Thirteen Weeks of Basal Body Temperature Charting</h2>
<p>This patient had been trying to conceive for years. For the first thirteen weeks of treatment we asked her to track her basal body temperature every single morning — no getting out of bed, no talking, no drinking water first. Just the thermometer, then the chart.</p>
<p>Why the obsession with temperature? Because the daily curve tells us more than a single blood panel ever could. We can see whether estrogen is rising appropriately, whether the post-ovulation rise is strong enough to suggest adequate progesterone, and whether ovulation is even happening at all. A curve that barely rises after mid-cycle usually means a weak luteal phase. One that never rises at all often means ovulation isn\'t occurring.</p>

<h2>Resetting Her Body Clock — The 11 PM to 3 AM Window</h2>
<p>In Chinese Medicine, the four hours between 11 PM and 3 AM belong to the liver and gallbladder channels. This is when the body does its deep repair work. No formula, no matter how well-crafted, can substitute for sleep during that window.</p>
<p>So step one of the plan was simple: in bed by 10:30 PM, asleep before 11. Once the liver could actually store blood again, her ovaries had a quiet internal environment to do their job in.</p>

<h2>Treating Both Partners</h2>
<p>"If you want a strong seed, the seed has to be strong" — so we brought her husband in too. His pattern was kidney-yang deficiency with Qi and blood weakness, and we prescribed him a formula to tonify kidney-yang and boost vitality, running in parallel with her own cycle-regulating formula.</p>

<h2>Quieting the Mind With Daily Meditation</h2>
<p>Anxiety and emotional tension strangle the flow of Qi and blood. We taught her a sitting meditation practice so her mind could rest while her body rebuilt — one of the most underrated fertility interventions I know.</p>

<h2>The Outcome: A Healthy Baby</h2>
<p>The full protocol — daily temperature charting, a liver-timed sleep schedule, herbs for both partners, and daily meditation — brought this long-infertile woman to a successful pregnancy, and then to a healthy, lively baby.</p>

<blockquote>Chinese Medicine fertility care is never a magic formula. It\'s the quiet, patient work of putting the body, emotions, sleep, partner, and diet all back on track — and then letting the body do what it already knows how to do.</blockquote>
<h3>Related Specialty</h3>
<p>This case is part of our fertility care program. <a href="/en/conditions/fertility">Explore fertility &amp; IVF support</a> · <a href="/en/methods/acupuncture">Learn about acupuncture for fertility</a>.</p>`,
    relatedConditionSlugs: ['fertility', 'womens-health'],
    relatedMethodSlugs: ['acupuncture', 'herbal-medicine'],
    tagsZh: ['不孕不育', '针灸', '中药', '女性健康'],
    tagsEn: ['Fertility', 'Acupuncture', 'Herbal Medicine', 'Women\'s Health'],
  },

  // 2 ── 西人社工 十年腰痛
  {
    slug: 'social-worker-10-year-back-pain',
    date: '2026-03-20',
    categoriesZh: ['患者故事', '针灸科普'],
    authorSlug: 'serene-feng',
    authorZh: '馮羅小潔 医生',
    authorEn: 'Dr. Serene Feng, DAOM',
    cover: '/images/hero-key.svg',
    coverAltZh: '坤德中医针灸治疗十年腰痛案例',
    coverAltEn: 'Kunde TCM acupuncture for chronic lower back pain',
    titleZh: '多年痛症案例分享 — 西人社工十年腰痛的治愈',
    titleEn:
      'How a 63-Year-Old Social Worker Found Relief After 10 Years of Back Pain',
    excerptZh:
      '一位每日开车 5 小时的 63 岁西人社工，不做推拿、不吃中药，只想试针灸。三周后疼痛消失，最终成了我们诊所的"活广告"。',
    excerptEn:
      'A 63-year-old social worker who drove five hours a day, refused massage and refused to take herbs, and wanted nothing but needles. Three weeks later, the pain was gone.',
    readMinutes: 6,
    bodyZh:
      INTRO_ZH +
      `<h2>患者情况 — 一位挑剔的 63 岁西人社工</h2>
<p>这位西人先生 63 岁，是一位资深社工，每天开车在纽约州各个地区上门家访，驾车时间长达 5 个小时，腰痛已经困扰他将近 10 年。他来坤德看诊时提出了非常明确的要求：</p>
<ul>
<li>不做推拿 — "按压让我更难受"</li>
<li>不吃中药 — "我不想喝那个味道"</li>
<li>只想试针灸</li>
</ul>

<h2>诊疗分析 — 把脉之后的判断</h2>
<p>我给他把脉的时候发现，他的气血其实是旺盛的，肝、肾的状况也不差 — 这意味着他的问题主要是"不通则痛"的气滞血瘀，而不是一个底子虚的慢性病。于是我提议：一周两次针灸，三周后我们一起评估一次。</p>

<h2>治疗手法 — "通则不痛，痛则不通"</h2>
<p>针对他痰湿阻滞、腰椎间盘突出的情况，我们采用了一个组合方案：</p>
<ul>
<li><strong>针灸</strong> — 针对腰椎两侧的膀胱经穴位 + 远端肾经、胃经配穴，调动局部气血。</li>
<li><strong>走罐 + 拔罐</strong> — 把聚集在腰部的湿气"拉"出来。</li>
<li><strong>局部刮痧</strong> — 让瘀堵的经络重新通畅。</li>
</ul>

<h2>治疗成效 — 第二周就惊讶地发现疼痛消失</h2>
<p>第二周来复诊的时候，他一进门就瞪大眼睛说："疼痛真的就没了。" 第四周他主动提出：下一阶段想做减肥调理，因为他发现身体轻了之后腰的负担也小了。我们顺势给他搭配了食疗方案和运动建议。</p>
<p>从那之后他就成了我们诊所的"活广告"，把身边的同事、朋友陆续介绍过来。</p>

<h2>核心理念 — 急则治其表，缓则治其本</h2>
<blockquote>"急则治其表，缓则治其本。" — 先把最痛的、最妨碍生活的症状解决，再慢慢调理根本。</blockquote>
<h3>相关主治项目</h3>
<p><a href="/zh/conditions/pain-management">查看各类痛症纾解</a> · <a href="/zh/methods/acupuncture">了解针灸</a> · <a href="/zh/methods/cupping">了解拔罐</a>。</p>`,
    bodyEn:
      INTRO_EN +
      `<h2>The Patient — A 63-Year-Old Social Worker With Rules</h2>
<p>This gentleman was a lifelong New Yorker, 63 years old, a senior social worker driving roughly five hours a day on home-visit rounds across the state. His lower back had been bothering him for nearly ten years. When he arrived at Kunde he came with conditions:</p>
<ul>
<li>No Tui Na massage — "pressing on me just makes it worse."</li>
<li>No herbal medicine — "I don\'t want to drink that stuff."</li>
<li>Just give me the needles.</li>
</ul>

<h2>The Diagnosis</h2>
<p>When I took his pulse I was actually relieved. His Qi and blood were strong, his liver and kidney function solid — this wasn\'t a long-standing deficiency case. This was a classic "blockage" pattern: Qi and blood stuck in the lower back from a decade of sitting in a car seat. So I proposed what felt fair — two treatments a week for three weeks, and then we\'d re-evaluate together.</p>

<h2>The Technique — "Unblock, and the Pain Ends"</h2>
<p>For his pattern of damp-phlegm stagnation with a known disc bulge, we built a combination plan:</p>
<ul>
<li><strong>Acupuncture</strong> — local bladder-channel points along the lumbar spine, paired with distal kidney and stomach-channel points to move Qi and blood.</li>
<li><strong>Moving cupping + stationary cupping</strong> — to literally pull the accumulated dampness out of the lumbar tissue.</li>
<li><strong>Gua Sha</strong> — to reopen blocked channels locally.</li>
</ul>

<h2>The Result — Gone in Two Weeks</h2>
<p>He walked into his second-week appointment with wide eyes and said, "It\'s actually gone." By week four he was asking about weight management — he\'d noticed that a lighter frame took pressure off his back. We gave him a food-therapy plan and some practical movement advice.</p>
<p>From that point on, he was Kunde\'s walking billboard. He sent us colleagues, friends, even his barber.</p>

<h2>The Guiding Principle</h2>
<blockquote>"Acute problems — treat the surface. Chronic problems — treat the root." First we stop the pain that\'s wrecking your day. Then we rebuild what let it happen in the first place.</blockquote>
<h3>Related</h3>
<p><a href="/en/conditions/pain-management">Pain management program</a> · <a href="/en/methods/acupuncture">Learn about acupuncture</a> · <a href="/en/methods/cupping">Cupping therapy</a>.</p>`,
    relatedConditionSlugs: ['pain-management'],
    relatedMethodSlugs: ['acupuncture', 'cupping'],
    tagsZh: ['腰痛', '针灸', '痛症', '拔罐'],
    tagsEn: ['Back Pain', 'Acupuncture', 'Pain Relief', 'Cupping'],
  },

  // 3 ── 高血压
  {
    slug: 'hypertension-three-weeks',
    date: '2026-03-12',
    categoriesZh: ['疾病防治', '患者故事'],
    authorSlug: 'serene-feng',
    authorZh: '馮羅小潔 医生',
    authorEn: 'Dr. Serene Feng, DAOM',
    cover: '/images/about-hero.svg',
    coverAltZh: '坤德中医三周内降血压案例',
    coverAltEn: 'Kunde TCM — blood pressure reduction case in three weeks',
    titleZh: '高血压案例分享 — 三周内血压显著下降',
    titleEn:
      'From 179/110 to Normal in Three Weeks — A Nurse\'s Blood Pressure Journey',
    excerptZh:
      '纽约州医院护士长 Annie，57 岁，血压骤升至 179/110。通过针灸、天麻钩藤饮与芹菜汁食疗，三周内降至 147/80。',
    excerptEn:
      'Annie, a 57-year-old nurse supervisor from an upstate NY hospital, came in at 179/110. Acupuncture, a Tian Ma Gou Teng formula, and a daily celery juice blend dropped her to 147/80 in three weeks.',
    readMinutes: 6,
    bodyZh:
      INTRO_ZH +
      `<h2>患者背景</h2>
<p>Annie 是一位 57 岁的纽约州医院护士长，工作压力大、睡眠时间不稳定。一次常规体检中她的血压突然升到了 179/110，西医开了降压药之后她希望能配合中医一起调理。</p>

<h2>中医诊断 — 肝肾阴虚、阴虚火旺</h2>
<p>问诊发现她入睡困难、易烦易怒、脸颊潮红、耳鸣、腰酸。脉弦细数，舌红少苔。我判断她属于"肝肾阴虚、阴虚火旺"体质 — 长期阴不制阳，虚火上浮而血压升高。</p>

<h2>治疗方案 — 针 · 药 · 食三管齐下</h2>
<h3>1. 针灸选穴</h3>
<p>太冲（平肝熄风） · 太溪（滋肾阴） · 阴陵泉（健脾化湿） · 足三里（健脾益气） · 手三里（调理上焦）</p>

<h3>2. 中药处方</h3>
<p>以 <strong>天麻钩藤饮</strong> 为主方熄风潜阳，加 <strong>二至丸</strong>（女贞子 + 旱莲草）补肝肾之阴，辅以 <strong>知母、生地</strong> 清虚热、滋肾阴。真空包装，每日两次。</p>

<h3>3. 食疗 — 每日 16 盎司芹菜汁配方</h3>
<ul>
<li>芹菜 60%</li>
<li>沙葛 25%</li>
<li>西洋菜汁 5%</li>
<li>甘蓝菜 5%</li>
<li>黄瓜 5%</li>
<li>柠檬少许提味</li>
</ul>
<p>每天早餐前空腹饮用 16 盎司（约 470 毫升）。</p>

<h2>疗效 — 三周内血压显著下降</h2>
<ul>
<li>第 1 周末：179/110 → 168/98</li>
<li>第 2 周末：168/98 → 154/87</li>
<li>第 3 周末：154/87 → 147/80</li>
</ul>
<p>与此同时睡眠改善、脸颊潮红消退、耳鸣减轻。</p>
<p><em>注：本案例血压下降是"中药 + 食疗 + 针灸" 与西药同步进行的协同效果，切勿自行停用西医降压药。</em></p>
<h3>相关主治项目</h3>
<p><a href="/zh/conditions/hypertension">查看三高调理</a> · <a href="/zh/methods/herbal-medicine">了解中药</a>。</p>`,
    bodyEn:
      INTRO_EN +
      `<h2>Background</h2>
<p>Annie is a 57-year-old nurse supervisor at an upstate New York hospital — long hours, irregular sleep, constant pressure. At a routine physical her blood pressure spiked to 179/110. Her PCP started her on medication, and she came to us asking for TCM to work alongside it.</p>

<h2>The TCM Diagnosis — Liver-Kidney Yin Deficiency With Ascending Yang</h2>
<p>Her intake: trouble falling asleep, short temper, flushed cheeks, tinnitus, and a nagging low-back ache. Pulse: wiry, thin, rapid. Tongue: red with sparse coat. That gave me a textbook picture of liver-kidney yin deficiency — with deficiency-fire rising to disturb the upper body and push pressure up.</p>

<h2>A Three-Pronged Plan</h2>
<h3>1. Acupuncture Points</h3>
<p>LV 3 Taichong (calms the liver) · KD 3 Taixi (nourishes kidney yin) · SP 9 Yinlingquan (resolves damp) · ST 36 Zusanli (tonifies the spleen) · LI 10 Shousanli (regulates the upper body).</p>

<h3>2. Herbal Formula</h3>
<p>We built on <strong>Tian Ma Gou Teng Yin</strong> to subdue ascending liver yang, adding <strong>Er Zhi Wan</strong> (Nu Zhen Zi + Mo Han Lian) to nourish liver and kidney yin, plus <strong>Zhi Mu</strong> and <strong>Sheng Di</strong> to clear deficiency heat. Vacuum-sealed, twice daily.</p>

<h3>3. Food Therapy — A Daily 16-oz Celery Juice Blend</h3>
<ul>
<li>Celery 60%</li>
<li>Jicama 25%</li>
<li>Watercress 5%</li>
<li>Kale 5%</li>
<li>Cucumber 5%</li>
<li>A squeeze of lemon</li>
</ul>
<p>Sixteen ounces every morning, on an empty stomach, before breakfast.</p>

<h2>Results in Three Weeks</h2>
<ul>
<li>End of week 1: 179/110 → 168/98</li>
<li>End of week 2: 168/98 → 154/87</li>
<li>End of week 3: 154/87 → 147/80</li>
</ul>
<p>Her sleep improved. The facial flushing faded. The tinnitus backed off.</p>
<p><em>Important: this drop happened while she was still taking her prescribed medication. Never stop antihypertensive medication on your own — always work with both your PCP and your TCM practitioner.</em></p>
<h3>Related</h3>
<p><a href="/en/conditions/hypertension">Hypertension &amp; metabolic care</a> · <a href="/en/methods/herbal-medicine">Chinese herbal medicine</a>.</p>`,
    relatedConditionSlugs: ['hypertension'],
    relatedMethodSlugs: ['herbal-medicine', 'acupuncture'],
    tagsZh: ['高血压', '中药', '食疗', '三高'],
    tagsEn: ['Hypertension', 'Herbal Medicine', 'Food Therapy'],
  },

  // 4 ── 湿疹（馮所安教授案）
  {
    slug: 'chronic-eczema-herbal-cure',
    date: '2026-03-04',
    categoriesZh: ['疾病防治', '患者故事'],
    authorSlug: 'suoan-feng',
    authorZh: '馮苏安 教授',
    authorEn: 'Prof. Suo An Feng',
    cover: '/images/hero-key.svg',
    coverAltZh: '坤德中医 — 慢性湿疹中药治愈案例',
    coverAltEn: 'Kunde TCM — chronic eczema cleared with herbal medicine',
    titleZh: '皮肤顽疾案例分享 — 多年慢性湿疹的中药疗愈',
    titleEn:
      'Conquering Chronic Eczema — When Herbal Medicine Succeeds Where Steroids Failed',
    excerptZh:
      '49 岁州政府科研人员，手臂、背、腿多年湿疹。馮所安教授以黄芪 · 黄柏 · 生地等配方，两天止痒，一个疗程清根。',
    excerptEn:
      'A 49-year-old state-government researcher had battled chronic eczema for years. Prof. Suo An Feng\'s herbal formula stopped the itch in two days and cleared it in one course.',
    readMinutes: 6,
    bodyZh:
      INTRO_ZH +
      `<h2>患者情况</h2>
<p>49 岁男性，纽约州政府科研人员。多年慢性湿疹，手臂、背部、腿部长期发痒，夜间尤甚。早年在国内使用含激素的药膏，效果一度很好，但时间久了皮肤变薄、发红、增厚，停用后湿疹反而更严重。</p>

<h2>馮所安教授的辨证</h2>
<blockquote>"气虚，身体里面湿热。" — 这是馮所安教授把脉之后下的八个字。</blockquote>
<p>患者脉沉细、舌淡胖、苔黄腻，表里合参。表面症状是皮肤湿热，根本却是肺脾气虚、卫表不固，外邪得以入侵、湿热得以内生。纯粹清热解毒只会越清越虚 — 必须同时补气、清湿热、养血祛风。</p>

<h2>处方结构</h2>
<ul>
<li><strong>补肺气</strong>：黄芪</li>
<li><strong>祛湿热</strong>：黄柏 · 生地</li>
<li><strong>解毒</strong>：板蓝根 · 金银花 · 茯苓</li>
<li><strong>养血</strong>：当归 · 赤芍</li>
<li><strong>祛风寒</strong>：荆芥 · 防风</li>
<li><strong>皮肤止痒</strong>：白藓皮 · 蛇床子 · 地肤子 · 苦参</li>
</ul>

<h2>治疗效果</h2>
<p>"只喝了两天他的痒就没有了。" — 患者自己描述。一个完整疗程之后，湿疹区域明显淡化，睡眠恢复正常。之后我们用一个轻量维持方再调理两个月，防止反复。</p>

<h3>馮所安教授的提醒</h3>
<p>慢性湿疹患者最大的误区是"只治表" — 一痒就涂激素、一好就停、一复发就再涂，结果越涂越薄、越涂越弱。中医讲"治病必求于本"，皮肤是结果，不是原因。</p>
<h3>相关主治项目</h3>
<p><a href="/zh/conditions/complex-conditions">查看疑难病症</a> · <a href="/zh/methods/herbal-medicine">了解中药调理</a>。</p>`,
    bodyEn:
      INTRO_EN +
      `<h2>The Patient</h2>
<p>A 49-year-old male researcher working for New York State. He\'d been living with chronic eczema for years — itching on his arms, back, and legs that was worst at night. Years earlier, steroid creams had worked fast. Then, over time, his skin grew thin, red, and thickened, and the eczema came back harder every time he tried to stop the cream.</p>

<h2>Prof. Suo An Feng\'s Pattern Diagnosis</h2>
<blockquote>"Qi deficiency with internal damp-heat." — eight words, straight from Prof. Feng after taking the pulse.</blockquote>
<p>Pulse: sunken and thin. Tongue: pale, swollen, yellow-greasy coat. The surface problem was damp-heat in the skin, but the root was lung and spleen Qi weakness — his defensive Qi couldn\'t hold the exterior, so external pathogens kept getting in and dampness kept building up inside. Just clearing heat would have made him weaker. He needed tonification, heat-clearing, blood-nourishing, and wind-dispelling all at once.</p>

<h2>The Formula Structure</h2>
<ul>
<li><strong>Tonify lung Qi</strong> — Huang Qi (Astragalus)</li>
<li><strong>Clear damp-heat</strong> — Huang Bai, Sheng Di</li>
<li><strong>Detoxify</strong> — Ban Lan Gen, Jin Yin Hua, Fu Ling</li>
<li><strong>Nourish blood</strong> — Dang Gui, Chi Shao</li>
<li><strong>Dispel wind-cold</strong> — Jing Jie, Fang Feng</li>
<li><strong>Stop the itch directly</strong> — Bai Xian Pi, She Chuang Zi, Di Fu Zi, Ku Shen</li>
</ul>

<h2>The Result</h2>
<p>"He drank it for two days and the itch was gone." — the patient\'s own words. After one full course, the eczema patches faded visibly and he was sleeping through the night again. We then moved him onto a lighter maintenance formula for two months to prevent recurrence.</p>

<h3>Prof. Feng\'s Reminder</h3>
<p>The biggest trap with chronic eczema is treating only the surface. Itch → steroid → relief → stop → flare → stronger steroid. Skin gets thinner every round. In Chinese Medicine we always ask: the skin is the result — what\'s the cause?</p>
<h3>Related</h3>
<p><a href="/en/conditions/complex-conditions">Complex &amp; stubborn conditions</a> · <a href="/en/methods/herbal-medicine">Chinese herbal medicine</a>.</p>`,
    relatedConditionSlugs: ['complex-conditions'],
    relatedMethodSlugs: ['herbal-medicine'],
    tagsZh: ['湿疹', '皮肤病', '中药', '馮所安'],
    tagsEn: ['Eczema', 'Skin Conditions', 'Herbal Medicine'],
  },

  // 5 ── 针药并用治皮肤瘙痒
  {
    slug: 'acupuncture-herbs-three-sessions-itch',
    date: '2026-02-24',
    categoriesZh: ['疾病防治', '患者故事'],
    authorSlug: 'serene-feng',
    authorZh: '馮羅小潔 医生',
    authorEn: 'Dr. Serene Feng, DAOM',
    cover: '/images/hero-key.svg',
    coverAltZh: '坤德中医 — 放血疗法治疗全身瘙痒',
    coverAltEn: 'Kunde TCM — three sessions for severe body itch',
    titleZh: '针药并用三次治愈皮肤瘙痒',
    titleEn:
      'Three Sessions to Clear Severe Eczema — A Combined Acupuncture & Herbal Approach',
    excerptZh:
      '65 岁老先生全身皮疹奇痒、失眠三周。督脉走罐 + 大椎、至阳、曲池、委中放血 50–60 毫升，配合清湿热汤剂 + 黄连粉外敷，三次完全康复。',
    excerptEn:
      'A 65-year-old with three weeks of severe body-wide itching and insomnia. Moving cupping along the Du channel, bloodletting at five classical points (50–60 mL), plus internal herbs and external Huang Lian powder — fully cleared in three sessions.',
    readMinutes: 5,
    bodyZh:
      INTRO_ZH +
      `<h2>患者情况</h2>
<p>这位 65 岁的老先生来诊时全身皮疹奇痒已经持续整整三周 — 痒到无法入睡、抓破了才能勉强睡一两个小时。西医开过抗组胺药，效果一两天就打回原形。</p>

<h2>中医诊断 — 热入血分，湿热阻络</h2>
<p>舌红绛少苔、脉滑数。这种"奇痒 + 失眠 + 舌绛"是一个典型的"热入血分"证 — 热邪已经从气分走到了血分，同时伴随着湿热在经络里阻滞。纯粹吃药走得慢，必须先把"瘀热"从血里放出来。</p>

<h2>治疗过程</h2>
<h3>第一步 — 走罐打开通路</h3>
<p>先在督脉、膀胱经沿线走罐，把后背的湿热"提"上来。走罐到后背通红、出现瘀点时停止。</p>

<h3>第二步 — 五个穴位放血</h3>
<p>然后在 <strong>大椎 · 至阳 · 曲池 · 委中</strong>（左右）共五个穴位点刺放血，合计约 50–60 毫升。放血一结束，患者当场就说"好像整个背都凉下来了"。</p>

<h3>第三步 — 内服 + 外敷双管齐下</h3>
<ul>
<li><strong>内服</strong>：清利湿热通便汤剂，一日两次</li>
<li><strong>外敷</strong>：黄连粉调敷红疹处，一日两次</li>
</ul>

<h2>治疗结果</h2>
<p>第二次复诊时，患者说夜间已经能睡四五个小时；第三次治疗后，皮肤完全恢复，不再发痒。总共三次治疗。</p>

<blockquote>"治病必求其速" — 当患者痛苦到影响睡眠、影响生活时，中医并不一定是慢的。对证下针、对证放血、对证用药，起效可以非常快。</blockquote>
<h3>相关主治项目</h3>
<p><a href="/zh/conditions/complex-conditions">查看疑难病症</a> · <a href="/zh/methods/acupuncture">了解针灸</a>。</p>`,
    bodyEn:
      INTRO_EN +
      `<h2>The Patient</h2>
<p>A 65-year-old man came in after three weeks of full-body itching so severe he hadn\'t been sleeping. He\'d been on antihistamines but they\'d stop working after a day or two.</p>

<h2>The Diagnosis — Heat Entering the Blood Level, With Damp-Heat Blocking the Channels</h2>
<p>Tongue: dark red, barely any coat. Pulse: slippery and rapid. Severe itch + insomnia + a crimson tongue is a textbook "heat has entered the blood level" pattern — the heat pathogen has moved past the Qi level into the deeper blood level, while damp-heat simultaneously blocks the surface channels. In a case this acute, oral herbs alone move too slowly. We had to physically release the stagnant heat.</p>

<h2>Treatment Sequence</h2>
<h3>Step 1 — Moving Cupping Along the Back</h3>
<p>I started with moving cupping along the Du (Governing) channel and the Bladder channel on his upper back, drawing the damp-heat up to the surface until the skin was red and showing stasis spots.</p>

<h3>Step 2 — Bloodletting at Five Classical Points</h3>
<p>Then we did pinpoint bloodletting at <strong>DU 14 Dazhui</strong>, <strong>DU 9 Zhiyang</strong>, <strong>LI 11 Quchi</strong>, and <strong>BL 40 Weizhong</strong> (both sides) — five points total, about 50–60 mL of blood released. The moment we finished, he looked at me and said, "My whole back just went cool."</p>

<h3>Step 3 — Internal + External Herbs</h3>
<ul>
<li><strong>Internal</strong> — a decoction to clear damp-heat and move the bowels, twice daily</li>
<li><strong>External</strong> — Huang Lian powder paste applied directly to the red patches, twice daily</li>
</ul>

<h2>The Result</h2>
<p>By his second visit he\'d slept four or five hours through the night. After the third visit, his skin was clear and the itching was gone. Three sessions, total.</p>

<blockquote>Chinese Medicine is not always slow. When a patient is suffering badly enough to lose sleep and lose their life to it, a precise needle, a precise bloodletting, a precise formula can work remarkably fast.</blockquote>
<h3>Related</h3>
<p><a href="/en/conditions/complex-conditions">Complex &amp; stubborn conditions</a> · <a href="/en/methods/acupuncture">Acupuncture</a>.</p>`,
    relatedConditionSlugs: ['complex-conditions'],
    relatedMethodSlugs: ['acupuncture', 'herbal-medicine'],
    tagsZh: ['皮肤病', '放血', '针灸', '中药'],
    tagsEn: ['Skin Conditions', 'Bloodletting', 'Acupuncture'],
  },

  // 6 ── 面瘫
  {
    slug: 'bells-palsy-four-weeks',
    date: '2026-02-14',
    categoriesZh: ['疾病防治', '患者故事'],
    authorSlug: 'serene-feng',
    authorZh: '馮羅小潔 医生',
    authorEn: 'Dr. Serene Feng, DAOM',
    cover: '/images/about-hero.svg',
    coverAltZh: '坤德中医 — 针药并用治疗面瘫案例',
    coverAltEn: 'Kunde TCM — Bell\'s palsy recovery with acupuncture and herbs',
    titleZh: '针药并用治疗面瘫 — 馮羅小潔医案',
    titleEn: 'Recovering From Bell\'s Palsy — A Young Patient\'s Four-Week Journey',
    excerptZh:
      '36 岁男性患者发病第五天来诊 — 右眼闭不上、脸颊下垂、吃饭流口水。四周治疗完全康复。',
    excerptEn:
      'A 36-year-old came to us on day five — eye wouldn\'t close, cheek drooping, food spilling from his mouth. Full recovery in four weeks.',
    readMinutes: 5,
    bodyZh:
      INTRO_ZH +
      `<h2>患者情况</h2>
<p>36 岁男性，面瘫发病仅五天便到坤德来诊。临床表现非常典型：</p>
<ul>
<li>右眼闭不上（角膜暴露风险）</li>
<li>右侧额头抬头纹消失</li>
<li>右脸颊下垂</li>
<li>吹气时漏气</li>
<li>吃饭时食物从右嘴角漏出、流口水</li>
</ul>

<h2>发病经过</h2>
<p>患者平时熬夜多，发病前一天在外喝了酒、凌晨才回家、又吹了风、洗澡后没吹干头发就倒头大睡。中医看来，这是一个非常标准的"恶风寒阻络"诱因。</p>

<h2>中医诊断</h2>
<blockquote>局部气血不足 + 风寒阻塞经络 — 这是面瘫最常见的证型。</blockquote>
<p>"早治" 对面瘫的预后至关重要。发病 7 天内开始中医介入的患者，完全恢复的比例极高；超过一个月才介入的，恢复速度会明显变慢。</p>

<h2>治疗方案 — 多手法组合，每周两次</h2>
<ul>
<li><strong>面部推拿指压拨筋</strong> — 先松开僵住的面部肌肉</li>
<li><strong>针灸</strong> — 地仓 · 颊车 · 阳白 · 四白 · 翳风 · 合谷 + 同侧远端穴位，浅刺透刺</li>
<li><strong>艾灸</strong> — 翳风、下关温经通阳</li>
<li><strong>电针</strong> — 低频连续波，每次约 20 分钟</li>
<li><strong>内服中药</strong> — 牵正散加减，祛风化痰、温通经络</li>
</ul>

<h2>恢复进程</h2>
<ul>
<li><strong>第 2 周</strong>：吃饭不再流口水，信心明显增强</li>
<li><strong>第 3 周</strong>：面部表情恢复七八成，闭眼基本到位</li>
<li><strong>第 4 周</strong>：痊愈，停用中药，仅保留轻量针灸巩固</li>
</ul>

<h3>给面瘫患者的话</h3>
<p>如果您或家人突然出现一侧面部活动异常 — 不要等、不要自己吃止痛药。中医介入越早，恢复越彻底。急性面瘫是中医最有把握治的疾病之一。</p>
<h3>相关主治项目</h3>
<p><a href="/zh/conditions/facial-palsy">查看面瘫专科</a> · <a href="/zh/methods/acupuncture">了解针灸治疗</a>。</p>`,
    bodyEn:
      INTRO_EN +
      `<h2>The Patient</h2>
<p>A 36-year-old man walked into the clinic on day five of sudden-onset Bell\'s palsy. The presentation was classic:</p>
<ul>
<li>Right eye wouldn\'t fully close (with the corneal-exposure risk that comes with it)</li>
<li>The horizontal forehead lines on the right side had disappeared</li>
<li>Right cheek drooping</li>
<li>Air leaking when he tried to whistle</li>
<li>Food and saliva spilling from the right corner of his mouth at meals</li>
</ul>

<h2>How It Started</h2>
<p>He\'d been staying up late for weeks. The night before onset he\'d been drinking, came home in the early hours, got caught in a cold wind, and then went to bed with his hair still wet. In Chinese Medicine terms: a textbook wind-cold invasion into a depleted channel.</p>

<h2>The Diagnosis</h2>
<blockquote>Local Qi and blood deficiency + wind-cold obstructing the channels — by far the most common presentation for Bell\'s palsy.</blockquote>
<p>And here\'s the key point: early treatment matters enormously. Patients who start Chinese Medicine within seven days of onset have a very high full-recovery rate. Past one month, recovery slows dramatically.</p>

<h2>The Plan — Combination Therapy, Twice a Week</h2>
<ul>
<li><strong>Facial Tui Na</strong> — pressure-point work to release the stuck facial muscles first</li>
<li><strong>Acupuncture</strong> — ST 4 Dicang, ST 6 Jiache, GB 14 Yangbai, ST 2 Sibai, SJ 17 Yifeng, LI 4 Hegu, plus distal points — shallow threading technique</li>
<li><strong>Moxa</strong> — on Yifeng and ST 7 Xiaguan to warm the channels</li>
<li><strong>Electro-acupuncture</strong> — low-frequency continuous wave, about 20 minutes per session</li>
<li><strong>Internal Herbs</strong> — a modified Qian Zheng San to dispel wind, resolve phlegm, and warm the channels</li>
</ul>

<h2>Recovery Timeline</h2>
<ul>
<li><strong>Week 2</strong> — food no longer spilling at meals; his confidence returned</li>
<li><strong>Week 3</strong> — roughly 70–80% of facial expression back; the eye closed almost fully</li>
<li><strong>Week 4</strong> — full recovery; we stopped the herbs and kept only light maintenance acupuncture</li>
</ul>

<h3>A Message to Anyone With Sudden Facial Weakness</h3>
<p>If you or a family member wakes up with one side of the face not moving properly, don\'t wait and don\'t self-medicate. The earlier TCM begins, the more complete the recovery. Acute Bell\'s palsy is one of the conditions Chinese Medicine treats most confidently.</p>
<h3>Related</h3>
<p><a href="/en/conditions/facial-palsy">Bell\'s palsy program</a> · <a href="/en/methods/acupuncture">Acupuncture therapy</a>.</p>`,
    relatedConditionSlugs: ['facial-palsy'],
    relatedMethodSlugs: ['acupuncture', 'moxibustion-guasha', 'herbal-medicine'],
    tagsZh: ['面瘫', '针灸', '电针', '艾灸'],
    tagsEn: ['Bell\'s Palsy', 'Acupuncture', 'Electro-acupuncture', 'Moxibustion'],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsSortedByDate(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const current = getPost(slug);
  if (!current) return getPostsSortedByDate().slice(0, limit);
  const others = posts.filter((p) => p.slug !== slug);
  // Prefer posts sharing a category or tag.
  const scored = others.map((p) => {
    const catOverlap = p.categoriesZh.filter((c) =>
      current.categoriesZh.includes(c),
    ).length;
    const tagOverlap = p.tagsZh.filter((t) =>
      current.tagsZh.includes(t),
    ).length;
    return { p, score: catOverlap * 2 + tagOverlap };
  });
  scored.sort((a, b) =>
    b.score - a.score !== 0 ? b.score - a.score : a.p.date < b.p.date ? 1 : -1,
  );
  return scored.slice(0, limit).map((s) => s.p);
}

export function getAllTagsZh(): string[] {
  const set = new Set<string>();
  posts.forEach((p) => p.tagsZh.forEach((t) => set.add(t)));
  return Array.from(set);
}

export function getAllTagsEn(): string[] {
  const set = new Set<string>();
  posts.forEach((p) => p.tagsEn.forEach((t) => set.add(t)));
  return Array.from(set);
}
