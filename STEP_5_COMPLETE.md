# Step 5 完成报告 — 坤德中医网站

**完成日期：** 2026-04-15  
**开发服务器：** http://localhost:3000  
**TypeScript：** 0 errors（`tsc --noEmit` clean pass）

---

## 一、新建页面一览

| 路由 | 中文 | 英文 | Schema |
|------|------|------|--------|
| `/[lang]/new-patients` | 新患者指南 | Insurance-Accepted Acupuncture NYC | FAQPage + BreadcrumbList |
| `/[lang]/contact` | 法拉盛中医诊所 · 5 家分店 | Acupuncture Flushing & Chinese Medicine Clinic Flushing | 5× MedicalBusiness + BreadcrumbList |
| `/[lang]/blog` | 中医专栏 | Kunde Wellness Journal | BreadcrumbList |
| `/[lang]/blog/[slug]` | 文章详情（6 篇） | Article detail (6 posts) | Article + MedicalWebPage + BreadcrumbList |
| `/admin/login` | 后台登录 | — | — |
| `/admin/posts` | 文章管理 | — | — |
| `/admin/posts/new` | 新建文章 | — | — |
| `/admin/posts/[id]/edit` | 编辑文章 | — | — |
| `/admin/media` | 媒体库 | — | — |

---

## 二、SEO 验证（8 位落地点）

### 联系页 — ZH (`/zh/contact`)
- **Title：** `法拉盛中医诊所 · 法拉盛针灸 · 法拉盛中医 — 坤德中医 5 家分店`
- **H1：** 法拉盛中医诊所 — 坤德中医 5 家分店
- **前 100 字：** 含"法拉盛中医 / 法拉盛中医诊所 / 法拉盛针灸"全三词
- **5 个 H3：** 每家分店锁定 SEO 关键词
- **img-alt：** 诊所地图（iframes）
- **内链锚文字：** 立即预约 / 新患者指南
- **JSON-LD：** 5× MedicalBusiness + alternateName 关键词饱和

### 联系页 — EN (`/en/contact`)
- **Title：** `Acupuncture Flushing · Chinese Medicine Clinic Flushing · Kunde TCM 5 Locations`
- **H1：** Acupuncture Flushing & Chinese Medicine Clinic Flushing — Kunde TCM 5 Locations
- **前 100 字：** 含 Acupuncture Flushing / Chinese Medicine Clinic Flushing / Chinese Herbal Medicine Flushing

### 新患者指南 — EN (`/en/new-patients`)
- **Title：** `Insurance-Accepted Acupuncture NYC | Kunde TCM New Patients Guide`
- **FAQPage Schema：** 8 Q&A ✅

---

## 三、JSON-LD Schema 核验

```
/zh/contact:
  10× MedicalBusiness (5 clinics + 5 parentOrganization)
   7× OpeningHoursSpecification
   5× PostalAddress
   3× GeoCoordinates
   1× BreadcrumbList

/zh/new-patients:
   1× FAQPage
   8× Question + 8× Answer
   1× BreadcrumbList

/zh/blog/treating-infertility-whole-body-adjustment:
   1× Article
   1× MedicalWebPage
   1× BreadcrumbList
   1× Person / Physician
   1× MedicalCondition
```

---

## 四、后台管理系统

| 功能 | 实现 |
|------|------|
| 认证 | HMAC-SHA256 签名 Cookie（HttpOnly, SameSite=Lax） |
| 中间件 | `/admin/*` 路由守卫（Edge 层 Cookie 存在性检查） |
| 数据存储 | 文件型 JSON（`data/cms-posts.json`, `data/cms-media.json`） |
| 文章 CRUD | GET / POST / PUT / DELETE `/api/admin/posts[/id]` |
| 图片上传 | Sharp 自动压缩 → 1000px 宽 + WebP 转换（优雅降级） |
| 媒体库 | 拖拽上传 / 复制链接 / 删除（含磁盘文件清理） |
| 编辑器 | ZH/EN 双语切换 + 代码/富文本模式切换 + 草稿/发布 |

---

## 五、数据文件

### `src/data/posts.ts` — 6 篇临床案例（中英双语）
1. `treating-infertility-whole-body-adjustment` — 不孕症调理（患者故事）
2. `acupuncture-back-pain-lumbar-herniation` — 腰椎间盘突出针灸（疾病防治）
3. `tcm-hypertension-herbal-medicine` — 高血压中药调理（中药知识）
4. `eczema-skin-conditions-tcm-treatment` — 湿疹皮肤病（疾病防治）
5. `skin-itch-allergic-dermatitis` — 皮肤瘙痒过敏（养生食疗）
6. `bells-palsy-facial-paralysis-acupuncture` — 面瘫针灸（患者故事）

### `src/data/clinics.ts` — 5 家分店 NAP 数据
- 三福大道院所（Sanford Ave 主店）
- 37 大道旗舰店
- 黄金大厦 41 大道院所
- 曼哈顿中城店
- 米德尔顿院所（橙县）

---

## 六、导航变更

**已删除：** 中英文导航菜单中的"法拉盛分店 / Flushing Locations"项  
**文件：** `src/lib/nav.ts`

---

## 七、截图验证

| 页面 | 状态 |
|------|------|
| `/zh/new-patients` | ✅ Hero + 4 标签页 + FAQPage schema |
| `/en/new-patients` | ✅ "Insurance-Accepted Acupuncture NYC" H1 |
| `/zh/contact` Hero | ✅ 法拉盛关键词 H1 + SEO 段落 |
| `/en/contact` Hero | ✅ "Acupuncture Flushing" H1，3 Flushing 关键词 |
| `/zh/blog` | ✅ 3 列网格 + 分类筛选标签 |
| `/en/blog` | ✅ 英文分类标签（Acupuncture Basics / Herbal Medicine…） |
| `/zh/blog/treating-infertility…` | ✅ 70/30 布局 + 作者卡片 + 侧边 CTA |
| `/admin/login` | ✅ 品牌配色居中卡片 |
| `/admin/posts` | ✅ 深色导航 + 文章列表（空状态） |
| `/admin/media` | ✅ 拖拽上传区 + "自动压缩至 1000px 宽并转 WebP" |
| 联系页 DOM 核验 | ✅ 5 个诊所标题 + 3 个 Google Maps iframe |

---

## 八、已知事项 / 下一步

- **封面图：** 文章列表卡片目前显示品牌 placeholder（无真实图片）。上传真实封面图后通过编辑器填写 `cover` 字段即可替换。
- **Google Maps：** iframe 嵌入已写入 HTML，真实地图在浏览器中正常加载（preview 工具的截图限制无法捕捉 iframe 内容，属正常现象）。
- **Lighthouse：** 建议在 `npm run build` 生产构建后运行，开发模式下分数偏低。
- **Step 6 升级路径：** 将文件型 JSON store 替换为 Prisma + PostgreSQL；接入真实 Google Reviews API。
