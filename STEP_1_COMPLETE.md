# Step 1 完成记录 — 项目初始化 + 设计系统 + 公共组件

> 日期：2026-04-15
> 下一步：Step 2 — 首页 + 关于我们页

## 1. 产出概览

一个可运行的 Next.js 14 App Router 项目，含完整双语路由骨架、品牌设计系统与全套公共组件。`npm run dev` 启动后 `/zh` 与 `/en` 均正常渲染，访问根 `/` 自动 307 跳转到 `/zh`。

**技术栈**：Next.js 14.2.15 · React 18 · TypeScript · Tailwind CSS 3.4 · lucide-react 图标 · next/font（Noto Serif SC + Inter）

## 2. 目录结构

```
kunde-tcm/
├── .claude/
│   └── launch.json              # 预览服务器配置（npm run dev on port 3000）
├── .env.example                 # 环境变量模板
├── .gitignore
├── next-env.d.ts
├── next.config.js               # Image 优化 + WebP
├── package.json
├── postcss.config.js
├── tailwind.config.ts           # CSS 变量映射为 theme
├── tsconfig.json
├── public/
│   └── images/                  # （Step 2 填充）
└── src/
    ├── app/
    │   ├── layout.tsx           # 根 layout：字体加载 + metadataBase
    │   ├── page.tsx             # 根路由 → 307 redirect to /zh
    │   └── [lang]/
    │       ├── layout.tsx       # 双语 layout：Header/Footer/StickyBookingButton + hreflang
    │       └── page.tsx         # 双语首页占位（带设计系统演示区）
    ├── components/
    │   ├── layout/
    │   │   ├── AnnouncementBar.tsx   # 深棕顶部公告栏
    │   │   ├── Header.tsx            # 双语切换 + 桌面/移动端导航
    │   │   └── Footer.tsx            # 品牌/联系/订阅/社交/法律 + SEO Keyword Bar
    │   └── ui/
    │       ├── Button.tsx            # primary / secondary / ghost × sm/md/lg
    │       ├── Card.tsx              # 通用卡片 + CardTitle + CardBody
    │       ├── CTABanner.tsx         # 深棕色全宽转化横幅
    │       └── StickyBookingButton.tsx  # 桌面右下浮动 + 移动端底部全宽条
    ├── lib/
    │   ├── i18n.ts              # Locale 类型 + 完整 zh/en 文案字典
    │   ├── nav.ts               # 10 项导航菜单生成器
    │   └── utils.ts             # cn() 类名合并
    └── styles/
        └── globals.css          # CSS 变量 + 基础排版
```

## 3. 设计系统落地清单（严格对齐方案 1.2 节）

### 配色（CSS 变量 → Tailwind theme）
| 变量 | 值 | Tailwind |
|---|---|---|
| `--color-primary` | `#dd9933` 暖金 | `primary` |
| `--color-primary-dark` | `#b58129` | `primary-dark` |
| `--color-primary-light` | `#d19900` | `primary-light` |
| `--color-header` | `#3b3423` 深棕 | `header` |
| `--color-footer` | `#3c3320` 深棕 | `footer` |
| `--color-text` | `#3a2415` 棕褐 | `text` |
| `--color-text-muted` | `#6b6b6b` | `text-muted` |
| `--color-bg-cream` | `#ecece0` 奶油白 | `cream` |
| `--color-border` | `#d4d4c8` | `border` |
| `--color-accent-blue` | `#005eed` | `accent` |

### 字体
- 标题：`Noto Serif SC`（weights 400/600/700，通过 `next/font/google` 预加载）
- 正文：`Inter`（通过 `next/font/google` 预加载）
- CSS 变量 `--font-noto-serif-sc` / `--font-inter` 在根 `<html>` 注入
- `display: swap` 避免 FOIT

### 字号系统
已在 `tailwind.config.ts` 定义 `text-display / text-h1 / text-h2 / text-h3 / text-body-lg`

## 4. 关键文件清单

| 路径 | 作用 |
|---|---|
| `src/styles/globals.css` | CSS 变量 + 基础排版 + `.container-kunde` 1200px 容器 |
| `src/lib/i18n.ts` | zh/en 文案字典：announcement/nav/home/footer，`otherLocale()` 切换函数 |
| `src/lib/nav.ts` | 10 项一级导航（含方案 4.1.1 的"法拉盛分店/Flushing Locations"一级入口） |
| `src/components/layout/AnnouncementBar.tsx` | 深棕色公告条："接受主流保险 · 纽约中医诊所 · 法拉盛·曼哈顿 5 家分店 → 立即预约" |
| `src/components/layout/Header.tsx` | sticky + 双语切换（Globe 图标）+ 桌面横向导航 + 移动汉堡 |
| `src/components/layout/Footer.tsx` | 严格按方案 5.3 节：Brand/Contact/Newsletter/Social+Legal 四栏 + 顶部 SEO Keyword Bar（方案 4.1.1 全站杀手锏 A）+ 免责声明 |
| `src/components/ui/Button.tsx` | 三变体三尺寸，同时支持 `<button>` 与 `<Link>` / 外链 |
| `src/components/ui/Card.tsx` | 悬浮提升效果的通用卡片 + CardTitle + CardBody |
| `src/components/ui/CTABanner.tsx` | 深棕色全宽横幅 + 主副 CTA |
| `src/components/ui/StickyBookingButton.tsx` | 桌面右下浮动药丸 / 移动端底部 2 列固定条（电话 + 预约） |
| `src/app/layout.tsx` | next/font 加载 + metadataBase + 根 metadata |
| `src/app/page.tsx` | `redirect('/zh')` |
| `src/app/[lang]/layout.tsx` | `generateStaticParams` + Header/Footer/Sticky + hreflang 三向互指 |
| `src/app/[lang]/page.tsx` | 首页占位：Hero + 设计系统演示 3 卡片 + CTABanner；双语 metadata 已按方案 4.2 节填写 |

## 5. 路由与双语

- `src/app/[lang]/layout.tsx` 使用 `generateStaticParams()` 输出 `zh` 和 `en`；非法 locale 触发 `notFound()`
- `generateMetadata` 输出 `alternates.languages`：`zh` / `en` / `x-default`（均指向 `NEXT_PUBLIC_SITE_URL`）
- Next.js 渲染为 `<link rel="alternate" hrefLang="..." />`（浏览器将 `hrefLang` 规范化为 `hreflang`，符合标准）

## 6. Dev Server 验证结果

```
✓ npm install 完成（108 包）
✓ Next.js 14.2.15 Ready in 4.4s
✓ Compiled / in 3.5s
✓ Compiled /[lang] in 3s
GET /  → 307 → /zh         (根路由重定向)
GET /zh → 200               (中文首页)
GET /en → 200               (英文首页)
```

**浏览器验证**：
- ✓ `/zh` H1 = "纽约中医诊所 · 纽约针灸诊所 — 坤德中医养生轩"
- ✓ `/en` H1 = "Acupuncture Clinic NYC · Traditional Chinese Medicine Clinic — Kunde TCM"
- ✓ 顶部公告栏、Header Logo、双语切换按钮全部可见
- ✓ 桌面端 10 项横向导航完整显示
- ✓ 移动端汉堡菜单 + 底部全宽预约固定条
- ✓ 深棕色 CTABanner 渲染正确
- ✓ 页脚 SEO Keyword Bar 含 5 个核心锚文本链接
- ✓ Footer 四栏（Brand/Contact/Newsletter/Social+Legal）齐全
- ✓ hreflang zh/en/x-default 三向互指已生效
- ✓ 无编译错误、无运行时警告

## 7. 预览访问方式

```bash
cd /Users/nazhang/Desktop/小白写作输出/坤德网站/kunde-tcm
npm run dev
# → http://localhost:3000/      （自动跳转 /zh）
# → http://localhost:3000/zh
# → http://localhost:3000/en
```

或使用 Claude Code Preview：`.claude/launch.json` 已配置 `kunde-tcm` server name。

## 8. 移交给 Step 2 的接口

Step 2 只需要专注于首页与关于我们页的**内容填充**，基础设施已就绪：

- **字典扩展**：在 `src/lib/i18n.ts` 的 `home` 对象中追加 Hero/Stats/Why/Testimonials 等字段即可
- **数据文件**：尚未创建 `src/data/*.ts`（Step 2–5 各自创建）
- **图片**：`/public/images/` 已建空目录；Step 2 需从方案 6.1 节的清单（`dr-serene-feng.png` 等）拷入真实图片
- **组件复用**：Header / Footer / Button / Card / CTABanner / StickyBookingButton 均已可用
- **新增组件**：Step 2 可能需要 `Hero.tsx`、`StatsSection.tsx`、`TestimonialCard.tsx` 等，放入 `src/components/sections/`

## 9. 已知待办（非 Step 1 阻塞项）

- `public/images/` 为空目录 → Step 2 开始拷贝
- `next.config.js` 的 `images.remotePatterns` 为空 → 若接入 Acuity/Google 头像等远程图片需要在对应 Step 配置
- Step 5 才会接入后台与数据库，当前无 `src/app/admin/`
- Step 6 才会启用 `sitemap.ts` / `robots.ts`

---
*Step 1 完成。待用户确认后进入 Step 2。*
