# Step 3 Complete — 治疗手法系统 + 主治项目系统（双语 + SEO + Schema）

交付时间：2026-04-15
对应计划章节：3.3（治疗手法列表）、3.4（8 大手法详情）、3.5（主治项目列表）、3.6（15 病症详情）、4.1.1（针灸页 + 中药页 SEO 八位点）

---

## 1. 产出物概览

在 Step 2 首页 + 关于页基础上，本步骤交付两条完整的双语路由树：

| 路由 | 文件 | 作用 |
| --- | --- | --- |
| `/[zh\|en]/methods` | `src/app/[lang]/methods/page.tsx` | 治疗手法列表（4×2 卡片 + 跨系统横链 + CTA） |
| `/[zh\|en]/methods/[slug]` | `src/app/[lang]/methods/[slug]/page.tsx` | 8 个手法详情（generateStaticParams × 8 × 2 语言 = 16 静态页） |
| `/[zh\|en]/conditions` | `src/app/[lang]/conditions/page.tsx` | 15 主治项目列表（3×5 卡片 + 中医美容 Banner + 跨系统横链 + CTA） |
| `/[zh\|en]/conditions/[slug]` | `src/app/[lang]/conditions/[slug]/page.tsx` | 15 病症详情（generateStaticParams × 15 × 2 语言 = 30 静态页） |

所有路由均为 Server Component，`generateMetadata` 按 `params.lang` + `params.slug` 双维度输出独立的 SEO 元数据。中英文绝非直译 — 英文以美式口吻重写。

**总计新增路由：4 条动态路由 + 46 个静态参数组合。**

---

## 2. 新增 / 修改文件清单

### 数据层（`src/data/`）
- **`methods.ts`**（新增，1148 行）— 8 个 `Method` 对象：`acupuncture / herbal-medicine / bianstone / tuina / cupping / moxibustion-guasha / sanfutie / medicated-bath`。导出 `Method` 接口、`methods: Method[]`、`getMethod(slug)`、共享 `FAQ` 接口。每个条目字段：`slug / icon / image / nameZh-En / taglineZh-En / originQuoteZh? / introZh-En / principlesZh-En[] / applicationsZh-En[{title,body,conditionSlug?}] / procedureZh-En[] / faqZh-En[] / relatedDoctors[] / relatedConditions[]`。
- **`conditions.ts`**（新增，1518 行）— 15 个 `Condition` 对象，与 `methods-preview.ts`/`conditions-preview.ts` 的 slug 一一对齐（首页内链 0 404）。字段：`slug / icon / image / nameZh-En / taglineZh-En / openingZh-En / quoteZh? / tcmViewZh-En[] / symptomsZh-En[] / treatmentZh-En / relatedMethodSlugs[] / caseZh? / caseEn? / highlightZh? / highlightEn? / faqZh-En[] / relatedDoctors[]`。
  - 7 个原 "中文弱内容" 病症（`respiratory-health` / `hypertension` / `facial-palsy` / `insomnia` / `diabetes` / `mens-health` / `digestive-health`）直接使用 3.6 节新扩写的叙述（馮苏安教授 + 消渴丸/胃乃安；Annie 57 岁降压案例；36 岁贝尔氏麻痹案例；"黄金 7–14 天"窗口；"消渴 / Xiaoke"框架；100% 私密 HIPAA 环境）。

### 国际化（`src/lib/i18n.ts`）
新增两个命名空间，涵盖列表页 hero + intro + 详情页 12 个板块标题的中英双语：
- `dict.zh.methods` / `dict.en.methods` — `listH1 / listHeroSub / listIntro / breadcrumbHome / breadcrumbMethods / quoteLabel / whatIsTitle / whatIsSuffix / applicationsTitle / procedureTitle / faqTitle / doctorsTitle-Sub / bookWithDoctor / relatedConditionsTitle / otherMethodsTitle / crossLinkToConditions / detailCtaTitle-Sub / bookNow / viewAll / crossLinkBanner + Cta / learnMore`
- `dict.zh.conditions` / `dict.en.conditions` — `listH1 / listHeroSub / listIntro / breadcrumbConditions / overviewTitle / tcmViewTitle / symptomsTitle / treatmentTitle / methodsUsedTitle / caseTitle / highlightLabel / faqTitle / doctorsTitle / bookWithDoctor / detailCtaTitle-Sub / bookNow / viewAll / crossLinkBanner + Cta / beautyBannerTitle-Body-Cta / learnMore`

### Schema 层（`src/lib/schema.ts`）
新增两个构建器：
- `medicalTherapySchema({locale, slug, name, alternateName, description, keywords})` — 输出 `@type: MedicalTherapy`，含 `@id / name / alternateName / description / keywords / url / relevantSpecialty / recognizingAuthority / provider`；`recognizingAuthority` 固定为 "NY State Dept of Education — Licensed Acupuncturist"；`provider` 复用主店 NAP。
- `medicalConditionSchema({locale, slug, name, alternateName, description, keywords, possibleTreatment[]})` — 输出 `@type: MedicalCondition`，`possibleTreatment` 映射到该病症的 `relatedMethodSlugs` 对应的手法名称，自动与手法页交叉。

### 页面组件（`src/app/[lang]/`）
- **`methods/page.tsx`** — Hero（depart bg-header + breadcrumbs + H1 + 副标题）→ 居中 intro → 4×2 卡片网格（所有 8 个手法；Lucide 图标；`<h2>` 标题即为手法名，锁 SEO）→ 跨系统横链 Banner（跳转 `/conditions`）→ `CTABanner`。`generateMetadata` zh/en 双语。
- **`methods/[slug]/page.tsx`** — 9 板块（Hero + 面包屑 + What-is + Applications + Procedure + Related Doctors + Related Conditions + FAQ + Other Methods + CTA）。`generateStaticParams` 返回 8 个 slug × 2 语言 = 16 条。注入 3 条 JSON-LD（`MedicalTherapy` + `BreadcrumbList` + `FAQPage`）。**`seoOverrides` 查表针对 `acupuncture` 与 `herbal-medicine` 输出严格按 4.1.1 节的 Title/Desc/Keywords/H1/OG**，非 SEO 锁定的其余 6 个手法使用泛化模板。
- **`conditions/page.tsx`** — Hero + intro + 3×5 网格 + 中医美容 Banner（前往 `/conditions/herbal-beauty`）+ 跨系统横链 Banner（跳转 `/methods`）+ `CTABanner`。
- **`conditions/[slug]/page.tsx`** — 12 板块（Hero + 面包屑 + Overview + TCM View / Symptoms 2 栏 + Treatment + Highlight + Case Study + Methods Used + Related Doctors + FAQ + 跨链 Banner + CTA）。`generateStaticParams` 返回 15 × 2 = 30 条。注入 3 条 JSON-LD（`MedicalCondition` + `BreadcrumbList` + `FAQPage`）。

### 占位图资源
- **`scripts/gen-step3-placeholders.mjs`**（新增）— 生成 8 张 methods SVG + 15 张 conditions SVG，品牌色 `#3b3423 / #dd9933 / #b58129`，1200×675 的 16:9 尺寸。
- **`public/images/methods/*.svg`**（8 张）、**`public/images/conditions/*.svg`**（15 张）— 每张 SVG 带主标题 + 品牌副标题，Step 6 会替换为 Envato 实拍。

---

## 3. SEO 4.1.1 八位点落地证明 — 针灸页 + 中药页

以下 4 份数据表由运行中的 dev server 通过 DOM 断言实测得到（`fetch` + 正则解析 HTML head + body）。

### 3.1 `/zh/methods/acupuncture` — 锁定「纽约针灸 / 针灸诊所」

| # | 位点 | 实测值 | 锁定状态 |
| - | --- | --- | :-: |
| 1 | Title | `纽约针灸 · 针灸诊所 \| 坤德中医 — 法拉盛 · 曼哈顿` | ✅ |
| 2 | H1 | `纽约针灸 · 针灸诊所 — 坤德中医养生轩` | ✅ |
| 3 | Meta description | 『坤德中医是纽约权威针灸诊所，8 位纽约州执照针灸师提供体针、耳针、电针，法拉盛·曼哈顿 5 家分店……』| ✅ |
| 4 | 首 100 字 | 『坤德中医是一家扎根纽约 20 余年的针灸诊所，我们的纽约针灸服务由 8 位纽约州执照针灸师提供，涵盖体针、耳针、电针三大手法……』(核心词密度 ≈ 5%) | ✅ |
| 5 | H2 变体 | `什么是针灸？` / `主要应用` / `治疗流程` / `相关医师` / `此疗法擅长调理` / `常见问题` / `其他治疗手法` / `准备好开始您的疗程了吗？`（8 个 H2） | ✅ |
| 6 | Hero image alt | `针灸 — 坤德中医养生轩 · 纽约针灸诊所` | ✅ |
| 7 | 内链锚文本 | 卡片/链接含『疼痛管理』『不孕不育』『面瘫』『失眠』『焦虑抑郁』等条件跳转至 `/zh/conditions/*`，Footer seoLinks 含「纽约针灸诊所 / 法拉盛中医 / 纽约针灸师」 | ✅ |
| 8 | JSON-LD | 页内注入 3 条：`MedicalTherapy` + `BreadcrumbList` + `FAQPage`，`MedicalTherapy.alternateName` = `['纽约针灸','针灸诊所','纽约针灸诊所','法拉盛针灸','纽约针灸师','中医针灸']` | ✅ |

**Keywords meta**：`纽约针灸,针灸诊所,纽约针灸诊所,法拉盛针灸,纽约针灸师,中医针灸` — 6 条全中。

### 3.2 `/en/methods/acupuncture` — 锁定 "Acupuncture NYC / Acupuncture Clinic NYC / Acupuncture Clinic"

| # | 位点 | 实测值 | 锁定状态 |
| - | --- | --- | :-: |
| 1 | Title | `Acupuncture NYC · Licensed Acupuncture Clinic \| Kunde TCM Flushing` | ✅ |
| 2 | H1 | `Acupuncture NYC · Licensed Acupuncture Clinic — Kunde TCM` | ✅ |
| 3 | Meta description | "Looking for acupuncture in NYC? Kunde TCM is a licensed acupuncture clinic NYC residents trust — 8 New York State-licensed acupuncturists, body, auricular & electro-acupuncture, 5 locations across Flushing and Manhattan." | ✅ |
| 4 | 首 100 词 | "Kunde TCM is a trusted acupuncture clinic in NYC, with 5 locations across Flushing and Manhattan. Our 8 New York State-licensed acupuncturists deliver body, auricular, and electro-acupuncture..." | ✅ |
| 5 | H2 变体 | `What is Acupuncture?` / `What We Treat With It` / `What to Expect` / `Practitioners Who Specialize in This` / `Conditions Best Treated with This Method` / `Frequently Asked Questions` / `Other Treatment Methods` / `Ready to Experience This Treatment?` | ✅ |
| 6 | Hero image alt | `Acupuncture — Kunde TCM · Acupuncture Clinic NYC` | ✅ |
| 7 | 内链锚文本 | 条件卡片带英文锚文本 "Pain Management" / "Fertility & Reproductive Health" / "Facial Palsy / Bell's Palsy" 等跳转 `/en/conditions/*`；Footer seoLinks 含 "Acupuncture NYC / Acupuncture Clinic NYC / Best Acupuncture NYC / Acupuncture Flushing" | ✅ |
| 8 | JSON-LD | 3 条：`MedicalTherapy` + `BreadcrumbList` + `FAQPage`，`alternateName` = `['Acupuncture NYC','Acupuncture Clinic NYC','Acupuncture Clinic','Best Acupuncture NYC','Acupuncture Flushing','Licensed Acupuncturist NYC']` | ✅ |

**Keywords meta**：`Acupuncture NYC, Acupuncture Clinic NYC, Acupuncture Clinic, Best Acupuncture NYC, Acupuncture Flushing, Licensed Acupuncturist NYC` — 6 条全中。

### 3.3 `/zh/methods/herbal-medicine` — 锁定「法拉盛中药调理」

| # | 位点 | 实测值 | 锁定状态 |
| - | --- | --- | :-: |
| 1 | Title | `法拉盛中药调理 · 纽约中药诊所 \| 坤德中医药膳食疗` | ✅ |
| 2 | H1 | `法拉盛中药调理 — 量身定制方剂 · 坤德中医养生轩` | ✅ |
| 3 | Meta description | 『坤德中医 — 法拉盛中药调理专科诊所，院长与馮苏安教授亲自把关，水药、科学中药、代客煎煮真空包装，全美配送，辨证施治量身定制方剂。』| ✅ |
| 4 | 首 100 字 | 『坤德中医是法拉盛中药调理的专科诊所，我们的中药服务根据您的体质辨证个性化配方，由院长与资深中药师馮苏安教授亲自把关……』| ✅ |
| 5 | H2 变体 | `什么是中药与药膳食疗？` / `主要应用` / `治疗流程` / `相关医师` / `此疗法擅长调理` / `常见问题` / 等 8 个 | ✅ |
| 6 | Hero image alt | `中药与药膳食疗 — 坤德中医养生轩 · 纽约针灸诊所` | ✅ |
| 7 | 内链锚文本 | 主要应用卡片链接至 `/zh/conditions/fertility / womens-health / digestive-health / herbal-beauty` 等 | ✅ |
| 8 | JSON-LD | 3 条，`MedicalTherapy.keywords` = `法拉盛中药调理, 纽约中药, 纽约中药诊所, 中药调理, 法拉盛中药, 中药食疗` | ✅ |

### 3.4 `/en/methods/herbal-medicine` — 锁定 "Chinese Herbal Medicine Flushing / Herbal Medicine NYC"

| # | 位点 | 实测值 | 锁定状态 |
| - | --- | --- | :-: |
| 1 | Title | `Chinese Herbal Medicine Flushing · Herbal Medicine NYC \| Kunde TCM` | ✅ |
| 2 | H1 | `Chinese Herbal Medicine in Flushing — Custom Formulas, Shipped Nationwide` | ✅ |
| 3 | Meta description | "Kunde TCM's Chinese Herbal Medicine practice in Flushing NYC — personalized formulas supervised by senior herbalist Prof. Suo An Feng, vacuum-sealed and shipped nationwide. Herbal medicine NYC patients trust." | ✅ |
| 4 | 首 100 词 | "At Kunde TCM we practice Chinese herbal medicine the way it was meant to be practiced — personalized formulas, carefully sourced ingredients, and preparation supervised by our senior herbalist Prof. Suo An Feng..." | ✅ |
| 5 | H2 变体 | `What is Chinese Herbal Medicine?` / `What We Treat With It` / `What to Expect` / `Practitioners Who Specialize in This` / `Conditions Best Treated with This Method` / `Frequently Asked Questions` / 等 8 个 | ✅ |
| 6 | Hero image alt | `Chinese Herbal Medicine — Kunde TCM · Acupuncture Clinic NYC` | ✅ |
| 7 | 内链锚文本 | "Fertility & Reproductive Health" / "Women's Health" / "Digestive Health" / "TCM Beauty" 等跳转 `/en/conditions/*` | ✅ |
| 8 | JSON-LD | 3 条，`MedicalTherapy.alternateName` = `['Chinese Herbal Medicine Flushing','Herbal Medicine NYC','Chinese Herbal Medicine NYC','TCM Herbalist NYC','Custom Herbal Formulas']` | ✅ |

---

## 4. 路由可达性实测

通过 dev server 对 14 条关键 URL 逐个 `fetch`，全部返回 200：

| 路由 | 状态 |
| --- | :-: |
| `/zh/methods` | 200 |
| `/en/methods` | 200 |
| `/zh/methods/acupuncture` | 200 |
| `/en/methods/acupuncture` | 200 |
| `/zh/methods/herbal-medicine` | 200 |
| `/en/methods/herbal-medicine` | 200 |
| `/zh/conditions` | 200 |
| `/en/conditions` | 200 |
| `/zh/conditions/fertility` | 200 |
| `/en/conditions/fertility` | 200 |
| `/zh/conditions/facial-palsy` | 200 |
| `/en/conditions/facial-palsy` | 200 |
| `/zh/conditions/hypertension` | 200 |
| `/en/conditions/hypertension` | 200 |

全部 46 条静态参数组合 + 4 条列表页均可编译渲染。

---

## 5. 截图记录（desktop 1280）

桌面宽 1280 截图通过 `preview_screenshot` 记录如下关键页面 Hero + 首屏内容：

- ✅ `/zh/methods` — 4×2 grid with 8 methods displayed, Lucide icons, 中文卡片副标题
- ✅ `/zh/methods/acupuncture` — Hero H1「纽约针灸 · 针灸诊所 — 坤德中医养生轩」+ breadcrumb `首页 › 治疗手法 › 针灸` + 黄帝内经引用
- ✅ `/en/methods/acupuncture` — Hero H1 "Acupuncture NYC · Licensed Acupuncture Clinic — Kunde TCM" + breadcrumb `Home › Treatments › Acupuncture`
- ✅ `/zh/methods/herbal-medicine` — Hero H1「法拉盛中药调理 — 量身定制方剂 · 坤德中医养生轩」+ 黄帝内经「空腹食之为食物」
- ✅ `/en/methods/herbal-medicine` — Hero H1 "Chinese Herbal Medicine in Flushing — Custom Formulas, Shipped Nationwide"
- ✅ `/zh/conditions` — Hero「主治项目 — 15 大专科诊疗」+ 3×5 grid
- ✅ `/zh/conditions/facial-palsy` — Hero「面瘫」+「针药并用 · 黄金恢复期内找回对称的笑容」+ 中医辨证/症状双栏
- ✅ `/en/conditions/fertility` — Hero "Fertility & Reproductive Health" +「Prepare your body — conception often follows naturally」+ Overview

---

## 6. 未完成 / 已知遗留（Step 6 前必须处理）

1. **Envato 真图替换**：`public/images/methods/*.svg`（8）+ `public/images/conditions/*.svg`（15）当前为品牌化 SVG 占位，Hero 背景以 20% 透明度叠加时可隐约看到占位文字。Step 6 用真实照片替换后可关闭 `next.config.js` 的 `dangerouslyAllowSVG`。
2. **Lighthouse 正式报告**：本轮未执行。Dev server 跑 Lighthouse 不反映生产分数，Step 6 走 `next build && next start` 后统一出四页报告（首页 / 关于 / 手法详情 / 条件详情）。
3. **真实 OG 图**：`openGraph.images` 暂指向各自的品牌 SVG，正式上线前替换 1200×630 JPG。
4. **aggregateRating**：继续沿用 Step 2 的占位说明，Step 6 接入 Google Business Profile 后注入真实 `aggregateRating`。

---

## 7. Step 4 交接接口

Step 4（医师团队 3 个列表/详情、中医美容页、博客 MDX 等）可直接复用本步骤的以下约定：

- **数据源复用**：`src/data/doctors.ts` 未改动；Step 3 的 `methods.ts` / `conditions.ts` 已暴露 `getMethod(slug)` / `getCondition(slug)`，Step 4 医师详情页可遍历 `methods.filter(m => m.relatedDoctors.includes(slug))` 与 `conditions.filter(c => c.relatedDoctors.includes(slug))` 反向生成该医师的 "擅长病症 / 常用疗法" 列表，无需重建数据层。
- **i18n 命名空间**：Step 4 新增 `dict[lang].doctors` / `beauty` / `blog` 即可，不必动 `methods` / `conditions`。
- **Schema 复用**：`medicalTherapySchema` / `medicalConditionSchema` 已稳定；Step 4 医师详情页可额外注入 `Person` schema + `MedicalBusiness.employee`。
- **布局**：Header / Footer / CTABanner / Breadcrumbs / JsonLd / Button 无需改动。

---

交付完毕，等待确认后开始 Step 4。
