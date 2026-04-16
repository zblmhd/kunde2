'use client';

// Shared editor component used by /admin/posts/new and /admin/posts/[id]/edit
// Supports two body modes: "rich text" (textarea + preview) and "code" (raw HTML/Markdown).

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { CmsPost } from '@/lib/store';
import { POST_CATEGORIES_ZH, POST_CATEGORIES_EN } from '@/data/posts';

type Mode = 'rich' | 'code';
type Lang = 'zh' | 'en';

interface Props {
  /** Existing post for edit mode; undefined = create mode */
  post?: CmsPost;
}

export function PostEditor({ post }: Props) {
  const router = useRouter();
  const isEdit = !!post;

  const [lang, setLang] = useState<Lang>('zh');
  const [mode, setMode] = useState<Mode>('code');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    titleZh: post?.titleZh ?? '',
    titleEn: post?.titleEn ?? '',
    slug: post?.slug ?? '',
    categoryZh: post?.categoryZh ?? '患者故事',
    categoryEn: post?.categoryEn ?? 'Patient Stories',
    tagsZh: post?.tagsZh ?? '',
    tagsEn: post?.tagsEn ?? '',
    keywordsZh: post?.keywordsZh ?? '',
    keywordsEn: post?.keywordsEn ?? '',
    authorZh: post?.authorZh ?? '馮羅小潔 医生',
    authorEn: post?.authorEn ?? 'Dr. Serene Feng, DAOM',
    cover: post?.cover ?? '/images/about-hero.svg',
    excerptZh: post?.excerptZh ?? '',
    excerptEn: post?.excerptEn ?? '',
    bodyZh: post?.bodyZh ?? '',
    bodyEn: post?.bodyEn ?? '',
    status: (post?.status ?? 'draft') as 'draft' | 'published',
    metaTitleZh: post?.metaTitleZh ?? '',
    metaDescZh: post?.metaDescZh ?? '',
    metaTitleEn: post?.metaTitleEn ?? '',
    metaDescEn: post?.metaDescEn ?? '',
  });

  /** 选择中文分类时自动填入对应英文分类 */
  function handleCategoryZhChange(zh: string) {
    setForm((f) => ({
      ...f,
      categoryZh: zh,
      categoryEn: POST_CATEGORIES_EN[zh as keyof typeof POST_CATEGORIES_EN] ?? f.categoryEn,
    }));
  }

  function set(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSave(status: 'draft' | 'published') {
    setSaving(true);
    setError('');
    try {
      const url = isEdit
        ? `/api/admin/posts/${post!.id}`
        : '/api/admin/posts';
      const method = isEdit ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, status }),
      });
      if (!res.ok) throw new Error(await res.text());
      router.push('/admin/posts');
      router.refresh();
    } catch (e: unknown) {
      setError(String(e));
    } finally {
      setSaving(false);
    }
  }

  const bodyKey = lang === 'zh' ? 'bodyZh' : 'bodyEn';

  return (
    <div className="space-y-6">
      {/* Basic fields */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm space-y-4">
        <h2 className="font-bold text-base border-b pb-2">基本信息</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <F label="标题（中文）">
            <input
              className="admin-input"
              value={form.titleZh}
              onChange={(e) => set('titleZh', e.target.value)}
              placeholder="中文标题"
            />
          </F>
          <F label="Title (EN)">
            <input
              className="admin-input"
              value={form.titleEn}
              onChange={(e) => set('titleEn', e.target.value)}
              placeholder="English title"
            />
          </F>
          <F label="Slug（URL）">
            <input
              className="admin-input"
              value={form.slug}
              onChange={(e) => set('slug', e.target.value)}
              placeholder="my-article-slug"
            />
          </F>
          <F label="分类（中文）">
            <input
              className="admin-input"
              list="categories-zh-list"
              value={form.categoryZh}
              onChange={(e) => handleCategoryZhChange(e.target.value)}
              placeholder="选择或输入自定义分类"
            />
            <datalist id="categories-zh-list">
              {POST_CATEGORIES_ZH.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </F>
          <F label="Category (EN)">
            <input
              className="admin-input"
              list="categories-en-list"
              value={form.categoryEn}
              onChange={(e) => set('categoryEn', e.target.value)}
              placeholder="Select or enter custom category"
            />
            <datalist id="categories-en-list">
              {Object.values(POST_CATEGORIES_EN).map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </F>
          <F label="作者（中文）">
            <input
              className="admin-input"
              value={form.authorZh}
              onChange={(e) => set('authorZh', e.target.value)}
            />
          </F>
          <F label="Author (EN)">
            <input
              className="admin-input"
              value={form.authorEn}
              onChange={(e) => set('authorEn', e.target.value)}
            />
          </F>
          <F label="封面图路径（/uploads/xxx.webp 或 /images/xxx）">
            <input
              className="admin-input"
              value={form.cover}
              onChange={(e) => set('cover', e.target.value)}
              placeholder="/uploads/..."
            />
          </F>
        </div>
      </div>

      {/* Tags & Keywords */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm space-y-4">
        <h2 className="font-bold text-base border-b pb-2">标签 &amp; 关键词</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <F label="标签（中文，多个用英文逗号分开）">
            <input
              className="admin-input"
              value={form.tagsZh}
              onChange={(e) => set('tagsZh', e.target.value)}
              placeholder="针灸,失眠,中医"
            />
          </F>
          <F label="Tags (EN, separate with commas)">
            <input
              className="admin-input"
              value={form.tagsEn}
              onChange={(e) => set('tagsEn', e.target.value)}
              placeholder="acupuncture,insomnia,TCM"
            />
          </F>
          <F label="关键词（中文，多个用英文逗号分开）">
            <input
              className="admin-input"
              value={form.keywordsZh}
              onChange={(e) => set('keywordsZh', e.target.value)}
              placeholder="针灸治疗失眠,温哥华中医"
            />
          </F>
          <F label="Keywords (EN, separate with commas)">
            <input
              className="admin-input"
              value={form.keywordsEn}
              onChange={(e) => set('keywordsEn', e.target.value)}
              placeholder="acupuncture for insomnia,Vancouver TCM"
            />
          </F>
        </div>
      </div>

      {/* Excerpt */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm space-y-4">
        <h2 className="font-bold text-base border-b pb-2">摘要</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <F label="摘要（中文）">
            <textarea
              className="admin-input"
              rows={3}
              value={form.excerptZh}
              onChange={(e) => set('excerptZh', e.target.value)}
            />
          </F>
          <F label="Excerpt (EN)">
            <textarea
              className="admin-input"
              rows={3}
              value={form.excerptEn}
              onChange={(e) => set('excerptEn', e.target.value)}
            />
          </F>
        </div>
      </div>

      {/* Body editor */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-3 mb-4">
          <h2 className="font-bold text-base">文章正文</h2>
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <div className="flex rounded-md overflow-hidden border border-gray-200 text-sm">
              {(['zh', 'en'] as Lang[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 font-semibold transition-colors ${
                    lang === l
                      ? 'bg-[#dd9933] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {l === 'zh' ? '中文' : 'English'}
                </button>
              ))}
            </div>
            {/* Mode toggle */}
            <div className="flex rounded-md overflow-hidden border border-gray-200 text-sm">
              {(['rich', 'code'] as Mode[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`px-3 py-1.5 font-semibold transition-colors ${
                    mode === m
                      ? 'bg-[#3b3423] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {m === 'rich' ? '可视化' : '代码模式'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {mode === 'code' ? (
          <textarea
            className="admin-input font-mono text-sm leading-relaxed"
            rows={24}
            value={form[bodyKey]}
            onChange={(e) => set(bodyKey, e.target.value)}
            placeholder="粘贴 HTML 或 Markdown..."
          />
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400 mb-1">编辑 HTML</p>
              <textarea
                className="admin-input font-mono text-sm leading-relaxed"
                rows={20}
                value={form[bodyKey]}
                onChange={(e) => set(bodyKey, e.target.value)}
              />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">预览</p>
              <div
                className="blog-content border border-gray-100 rounded-md p-4 min-h-48 overflow-y-auto text-sm"
                dangerouslySetInnerHTML={{ __html: form[bodyKey] }}
              />
            </div>
          </div>
        )}
      </div>

      {/* SEO */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm space-y-4">
        <h2 className="font-bold text-base border-b pb-2">SEO 设置（可选）</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <F label="Meta 标题（中文）">
            <input
              className="admin-input"
              value={form.metaTitleZh}
              onChange={(e) => set('metaTitleZh', e.target.value)}
            />
          </F>
          <F label="Meta Title (EN)">
            <input
              className="admin-input"
              value={form.metaTitleEn}
              onChange={(e) => set('metaTitleEn', e.target.value)}
            />
          </F>
          <F label="Meta 描述（中文）">
            <textarea
              className="admin-input"
              rows={2}
              value={form.metaDescZh}
              onChange={(e) => set('metaDescZh', e.target.value)}
            />
          </F>
          <F label="Meta Description (EN)">
            <textarea
              className="admin-input"
              rows={2}
              value={form.metaDescEn}
              onChange={(e) => set('metaDescEn', e.target.value)}
            />
          </F>
        </div>
      </div>

      {/* Actions */}
      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          disabled={saving}
          onClick={() => handleSave('draft')}
          className="h-11 px-6 bg-white border border-gray-300 rounded-md font-semibold text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
        >
          {saving ? '保存中…' : '保存为草稿'}
        </button>
        <button
          type="button"
          disabled={saving}
          onClick={() => handleSave('published')}
          className="h-11 px-6 bg-[#dd9933] text-white rounded-md font-semibold hover:bg-[#b58129] transition-colors disabled:opacity-50"
        >
          {saving ? '发布中…' : '发布'}
        </button>
      </div>
    </div>
  );
}

function F({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-gray-600 mb-1">{label}</span>
      {children}
    </label>
  );
}
