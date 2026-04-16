# 坤德中医养生轩网站 — 部署完成报告

**日期：** 2026-04-15  
**完成人：** Claude Opus 4.6  

---

## 一、上线地址

| 环境 | URL |
|------|-----|
| 正式网站（Vercel） | **https://kunde.vercel.app** |
| 中文首页 | https://kunde.vercel.app/zh |
| 英文首页 | https://kunde.vercel.app/en |
| 后台管理 | https://kunde.vercel.app/admin |

> 后续购买自定义域名后，在 Vercel → Domains 页面绑定即可，无需其他改动。

---

## 二、基础设施

### GitHub 仓库
- **地址：** https://github.com/zblmhd/kunde
- **分支：** `main`
- **最新提交：** `5822727` chore: trigger redeploy with correct git author email

### Supabase 数据库
- **项目：** `qdatsbsgcmkmijfsjhjt`
- **地区：** us-east-1
- **数据库表：**
  - `cms_posts` — 文章管理（含 RLS 拒绝匿名访问）
  - `cms_media` — 媒体库（含 RLS 拒绝匿名访问）
- **Storage Bucket：** `media`（公开，10 MB 限制，仅 `image/*`）
- **迁移文件：** `supabase/migrations/001_init.sql`

### Vercel 项目
- **项目名：** `kunde`
- **团队：** dayu's projects (Hobby)
- **框架：** Next.js 14 (自动检测)
- **构建时长：** ~1 分钟

---

## 三、环境变量配置（已在 Vercel 设置）

| 变量名 | 说明 |
|--------|------|
| `NEXT_PUBLIC_SITE_URL` | `https://kunde.vercel.app` |
| `ADMIN_PASSWORD` | 后台登录密码 |
| `SESSION_SECRET` | 32字节HMAC密钥（随机生成） |
| `SUPABASE_URL` | `https://qdatsbsgcmkmijfsjhjt.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase 服务端密钥（服务器端专用） |

---

## 四、数据库安全配置

### Row Level Security (RLS)
- **启用：** `cms_posts` 和 `cms_media` 两张表均已开启 RLS
- **策略：** `deny_anon_posts` / `deny_anon_media` — `USING (false)`
  - 匿名用户（anon role）和已登录用户（authenticated role）**完全无法**读写
  - 仅 `service_role`（服务端密钥）可绕过 RLS 访问数据
- **效果：** 即使有人拿到 anon key，也无法读取或篡改任何 CMS 数据

### Storage 安全
- Bucket `media` 设为公开（允许访问已上传图片 URL）
- 上传接口 `/api/admin/upload` 需要管理员 session cookie 验证
- 文件类型限制：仅 `image/*`，最大 10 MB

### 管理后台
- 路径：`/admin`（需登录）
- Session 使用 HMAC 签名 cookie，密钥为随机 32 字节十六进制
- 所有管理 API 路由均验证 `kunde_admin_session` cookie

---

## 五、网站功能清单

### 前台页面（双语 zh/en）
- [x] 首页（Hero、统计、服务、团队、评价、CTA）
- [x] 关于我们
- [x] 治疗手法（6 项：针灸、推拿、中药、火罐、艾灸、TDP）
- [x] 主治项目（8 项：疼痛、妇科、内科等）
- [x] 医疗团队
- [x] 中医美容
- [x] 中医专栏（CMS 博客）
- [x] 新患者指南（含 FAQ）
- [x] 法拉盛分店页面
- [x] 联系我们（含懒加载地图）

### 后台 CMS
- [x] 文章管理（新建、编辑、删除、发布/草稿）
- [x] 媒体库（上传至 Supabase Storage，Sharp WebP 压缩）
- [x] 富文本编辑器（Monaco / TipTap）

### SEO
- [x] `generateMetadata()` — 全页面 OG/Twitter 标签
- [x] `alternates.canonical` + hreflang (zh/en)
- [x] `sitemap.ts` — 自动生成站点地图
- [x] `robots.ts` — 爬虫规则
- [x] JSON-LD 结构化数据（MedicalBusiness、FAQ、BreadcrumbList）
- [x] GA4 埋点接口（填入 `NEXT_PUBLIC_GA_ID` 即生效）
- [x] Google Search Console 验证接口

### 性能 & 安全（vercel.json）
- [x] HSTS、X-Frame-Options、Referrer-Policy、Permissions-Policy
- [x] 静态资源 `Cache-Control: immutable`
- [x] 懒加载 Google Maps iframe

---

## 六、Git 提交历史

```
5822727  chore: trigger redeploy with correct git author email
5a256c9  fix: remove deprecated Page config export from upload route
956db43  feat: migrate CMS store and uploads to Supabase
62c32de  Initial commit: Kunde TCM bilingual website (Steps 1–6)
```

---

## 七、后续待办（可选）

1. **绑定自定义域名** — Vercel → Domains → 输入购买的域名
2. **更新 `NEXT_PUBLIC_SITE_URL`** — 改为正式域名后重新部署
3. **填写 GA4 测量 ID** — 在 Vercel 环境变量中添加 `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
4. **Google Search Console 验证** — 添加 `NEXT_PUBLIC_GSC_VERIFICATION` token
5. **补全 anon key** — 在 Supabase Dashboard → Settings → API → Legacy Keys 取得真正的 anon key，更新 `NEXT_PUBLIC_SUPABASE_ANON_KEY`（目前未使用，不影响功能）

---

## 八、本地开发

```bash
# 1. 复制环境变量
cp .env.example .env.local
# 填入 .env.local 中各项值

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev
# → http://localhost:3000/zh
```

---

*所有配置已完成，网站已成功部署上线。*
