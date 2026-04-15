# Step 2 Complete — 首页 + 关于我们页（双语 + SEO + Schema）

交付时间：2026-04-15
对应计划章节：3.1（首页）、3.2（关于页）、4.1.1（SEO 八位点）、5.1–5.3（数据 / 国际化 / Schema）

---

## 1. 产出物概览

本步骤在 Step 1 骨架之上交付了两条完整的双语路由：

| 路由 | 文件 | 作用 |
| --- | --- | --- |
| `/zh`、`/en` | `src/app/[lang]/page.tsx` | 首页 9 大板块 + 3 条 JSON-LD + CTA Banner |
| `/zh/about`、`/en/about` | `src/app/[lang]/about/page.tsx` | 关于页 6 大板块 + 2 条 JSON-LD + CTA Banner |

两条路由均通过 Server Component 渲染，`generateMetadata` 根据 `params.lang` 输出独立的中英 `title / description / keywords / openGraph`，英文绝非中文直译。

---

## 2. 新增 / 修改文件清单

### 数据层（`src/data/`）
- `doctors.ts` — 8 位医师（院长馮羅小潔 DAOM + 馮素安教授 + 贵阳 + 高迪旭 + 张长松 + 金切尔西 + 胡阿琳娜 + 徐佳娜），含真实 Acuity Scheduling URL 及 `phoneOnly` 兜底电话。
- `methods-preview.ts` — 首页 8 法门卡片。
- `conditions-preview.ts` — 首页 15 主治病症（3×5）。
- `testimonials.ts` — 3 段真实案例（王小姐 / 李太太 / 郭先生）。
- `blog-preview.ts` — 3 篇博客卡片。

### 国际化（`src/lib/i18n.ts`）
大幅扩充 `home` 与 `about` 两个命名空间：
- `home`：`heroBanner / heroAlt / stats / methodsTitle-Sub-Cta / conditionsTitle-Sub-Cta / bookingTitle-Sub-LocationsHint-CallFallback-BookBtn-CallBtn / whyTitle-Sub-whyCards[4]-whyFooter / testimonialsTitle-Sub-Cta / blogTitle-Sub-Cta-readMore / faqTitle-faqs[3] / ctaTitle-ctaSub-ctaPhone-ctaSecondaryLabel`。
- `about`：`h1 / heroSub / breadcrumbs / introTitle / introBody[3] / missionTitle / missionBody / valueCards[4] / credTitle / credItems[5] / navCtaTitle / navLinks[4]`。

英文版坚持自然美式口吻，如 About 开篇 "Dr. Serene Feng founded Kunde TCM Wellness Center with a simple but powerful belief …"，非直译。

### Schema 层（`src/lib/schema.ts`）
四个构建器：`medicalBusinessSchema(locale)`、`faqPageSchema(faqs)`、`breadcrumbSchema(items)`、`aboutMedicalBusinessSchema(locale)`。

- `alternateName` 关键词堆砌：
  - zh：`['坤德中医养生轩','坤德中医','纽约中医诊所','纽约针灸诊所','法拉盛中医诊所']`
  - en：`['Kunde TCM','Acupuncture Clinic NYC','TCM Clinic NYC','Chinese Medicine Clinic NYC','Best Acupuncture NYC']`
- `address` / `geo` / `openingHours` / `telephone` / `email` 全部使用真实法拉盛主店 NAP。
- 关于页 Schema **不** 伪造 `aggregateRating`，页面底部留一行 italic 占位说明，待 Step 6 接入 Google Business Profile。

### Section 组件（`src/components/sections/`）
- `Hero.tsx` — 深棕 Hero，真实中文 banner 小字、优先加载背景图、双 CTA、底部真实电话 NAP。
- `StatsSection.tsx` — 20+/5/8/6 四宫格。
- `MethodsGrid.tsx` — 8 法门卡片（Lucide 图标映射 Activity/Leaf/Gem/Hand/Circle/Flame/Sun/Droplet）。
- `ConditionsGrid.tsx` — 15 主治病症 3 列卡片。
- `DoctorBookingSection.tsx` — `<section id="booking">`，8 张医师卡 + 真 Acuity URL，`phoneOnly` 者跳转 `tel:`。
- `WhyChooseKunde.tsx` — 2×2 亮点卡片（ShieldCheck / Infinity / HandCoins / MapPin 图标）。
- `TestimonialsSection.tsx` — 3 张推荐卡。
- `BlogPreview.tsx` — 16:10 封面 + 摘要。
- `FAQSection.tsx` — 3 条高意图问答（dl/dt/dd）。
- `Breadcrumbs.tsx` — 供 Hero 深色背景使用的白色 breadcrumb。

### SEO 组件
- `src/components/seo/JsonLd.tsx` — 内联 `<script type="application/ld+json">`，字符转义防 XSS。

### 页面
- `src/app/[lang]/page.tsx` — 注入 3 条 JSON-LD + 渲染 9 段 + CTABanner。
- `src/app/[lang]/about/page.tsx` — 注入 2 条 JSON-LD + Hero + Intro + Mission + Credentials + Nav CTA + CTABanner。

### 资源
- `scripts/gen-placeholders.mjs` + `public/images/**` — 16 张品牌化 SVG 占位图（hero-key / about-hero / 8 doctor / 3 testimonial / 3 blog cover）。
- `next.config.js` — 打开 `dangerouslyAllowSVG` 并设置 CSP，让 `next/image` 消化 SVG 占位。

---

## 3. SEO 4.1.1 八位点落地证明

以下数据由运行中的 dev server 通过 DOM 断言实测得到：

### 首页 `/zh`
| # | 位点 | 实测值 |
| --- | --- | --- |
| 1 | Title | `坤德中医养生轩 \| 纽约中医诊所 · 纽约针灸诊所 \| 法拉盛 · 曼哈顿` |
| 2 | H1 | `纽约中医诊所 · 纽约针灸诊所 — 坤德中医养生轩` |
| 3 | Meta description | 包含「纽约权威中医诊所与针灸诊所」「法拉盛3家+曼哈顿+米德尔顿共5家分店」 |
| 4 | 首 100 字 | 「坤德中医是一家扎根纽约 20 余年的中医诊所与针灸诊所……」核心词密度达标 |
| 5 | H2 关键词变体 | 9 个 H2，含「为何纽约人选择坤德中医」「线上预约我们的执照医师」「15 大主治病症」等 |
| 6 | 图片 alt | Hero alt = `坤德中医养生轩 — 纽约中医诊所 · 纽约针灸诊所 · 法拉盛主店诊所实景` |
| 7 | 内链锚文本 | Footer Quick Links 含「纽约中医诊所 / 纽约针灸诊所 / 法拉盛中医诊所 / 法拉盛中医调理 / 纽约针灸师」 |
| 8 | JSON-LD | 页面注入 3 条 + Layout 级 1 条，含 `MedicalBusiness` / `FAQPage` / `BreadcrumbList`，`alternateName` 堆砌核心词 |

### 首页 `/en`
| # | 位点 | 实测值 |
| --- | --- | --- |
| 1 | Title | `Kunde TCM \| Acupuncture Clinic NYC · Chinese Medicine Clinic NYC \| Flushing` |
| 2 | H1 | `Acupuncture Clinic NYC · Traditional Chinese Medicine Clinic — Kunde TCM` |
| 3 | Meta description | 含 "Looking for the best acupuncture in NYC? … 5 locations in Flushing, Manhattan, and Middletown, 8 licensed acupuncturists" |
| 4 | 首 100 词 | "Kunde TCM is a trusted Chinese Medicine clinic and acupuncture clinic in NYC…" 首段锁核心词 |
| 5 | H2 变体 | "Why New Yorkers Choose Kunde TCM", "Book Online with Our Licensed Acupuncturists", "15 Conditions We Treat" 等 9 个 |
| 6 | Hero alt | `Kunde TCM — Acupuncture Clinic NYC · Traditional Chinese Medicine Clinic in Flushing, New York` |
| 7 | 内链锚文本 | Footer Quick Links 含 "Acupuncture Clinic NYC / Acupuncture NYC / Acupuncture Flushing / Chinese Herbal Medicine Flushing / Best Acupuncture NYC" |
| 8 | JSON-LD | 3 条，含 `MedicalBusiness`/`FAQPage`/`BreadcrumbList`；`keywords` 字段含 "Best Acupuncture NYC" |

### 关于页
- `/zh/about` — Title `关于坤德中医养生轩 \| 纽约中医诊所 20 余年 · 法拉盛主店`，H1 `关于坤德中医养生轩 — 扎根纽约 20 余年的中医诊所`。
- `/en/about` — **Title 含 "Best Acupuncture NYC"**（计划 4.1.1 必中项）：`About Kunde TCM | Best Acupuncture NYC · Licensed TCM Clinic in Flushing`；H1 `About Kunde TCM — Among the Best Acupuncture Clinics in NYC`。
- 两条路由各注入 `aboutMedicalBusinessSchema` + `BreadcrumbList`；不伪造评分。

---

## 4. 验证结果

- ✅ Dev server (`kunde-tcm` on :3000) 启动无编译错误、无 console 错误（`preview_logs` / `preview_console_logs` 均空）。
- ✅ 四条路由实测返回 200 且 DOM 包含预期 H1 / title / meta / JSON-LD。
- ✅ 全页宽 1280 截图已捕获：
  - `/zh` 首页：Hero → Stats → 8 方法 → 15 病症 → 医师预约（下半截由于 8843 px 过长分段捕获）
  - `/en` 首页：同上
  - `/zh/about`：Hero → 诊所简介 → 使命与理念 → 资质与认证 → Nav CTA → Dark CTA Banner，总高 3417 px
  - `/en/about`：Hero → Our Story → Mission & Philosophy → Credentials → Explore Kunde TCM → Dark CTA Banner，总高 3832 px
- ⚠️ Lighthouse 未在本轮执行。Dev server 下跑 Lighthouse 不能反映生产分数；建议在 Step 6 走 `next build && next start` 之后再统一出报告。

---

## 5. 已知遗留（Step 6 前必须处理）

1. **Envato 真图替换**：`public/images/**` 当前是品牌化 SVG 占位（关于页 Hero 上透过 25% 透明度可见占位文字 "About Kunde TCM"）。Step 6 用真实照片替换后，可关闭 `next.config.js` 的 `dangerouslyAllowSVG`。
2. **aggregateRating**：关于页有 italic 占位说明，Step 6 对接 Google Business Profile 后接回 Schema `aggregateRating`。
3. **Lighthouse 正式报告**：Step 6 生产构建后跑 `lhci` 一次性出首页 + 关于 + 医师 + 分店四页的报告。
4. **真实 OG 图**：目前 `openGraph.images` 指向 `/images/hero-key.svg`，正式上线前替换为 1200×630 JPG。

---

## 6. Step 3 交接接口

Step 3（治疗手法、主治病症、医师团队 3 个列表/详情路由）可直接基于本步骤的约定继续：

- **数据源**：`src/data/doctors.ts` / `methods-preview.ts` / `conditions-preview.ts` 的 slug 已与 `<Link href="/${locale}/methods/${slug}">` 锚定，Step 3 新建的 `src/data/methods.ts`（完整版）与 `src/data/conditions.ts` 需保持 slug 一致，否则首页内链 404。
- **i18n 命名空间**：Step 3 会新增 `dict[lang].methods` / `conditions` / `doctors`，无需动 `home` / `about`。
- **Schema 复用**：`src/lib/schema.ts` 已暴露 `breadcrumbSchema`，Step 3 三类列表/详情直接套用；医师详情可额外插入 `Person` schema。
- **布局**：Header / Footer / CTABanner 已稳定，Step 3 只关心 `page.tsx` 主体。

---

交付完毕，等待确认后开始 Step 3。
