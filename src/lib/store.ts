// Supabase-backed CMS store (Step 6 upgrade from file-based store).
// All reads/writes go to Postgres via the service_role client in lib/db.ts.
// The public API (function signatures and return types) is unchanged so all
// admin pages and API routes continue to work without modification.
//
// DB row ↔ camelCase mapping is handled inside each function.

import { db } from './db';

// ────────────────────────────────────────────────────────────────
// Types (unchanged from Step 5 so callers need no edits)
// ────────────────────────────────────────────────────────────────

export type PostStatus = 'draft' | 'published';

export interface CmsPost {
  id: string;
  titleZh: string;
  titleEn: string;
  slug: string;
  categoryZh: string;
  authorZh: string;
  authorEn: string;
  cover: string;
  excerptZh: string;
  excerptEn: string;
  bodyZh: string;
  bodyEn: string;
  status: PostStatus;
  metaTitleZh?: string;
  metaDescZh?: string;
  metaTitleEn?: string;
  metaDescEn?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CmsMedia {
  id: string;
  filename: string;
  url: string;
  originalName: string;
  width: number;
  height: number;
  sizeBytes: number;
  uploadedAt: string;
}

// ────────────────────────────────────────────────────────────────
// Row mappers  (snake_case DB → camelCase TS)
// ────────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToPost(r: any): CmsPost {
  return {
    id: r.id,
    titleZh: r.title_zh,
    titleEn: r.title_en,
    slug: r.slug,
    categoryZh: r.category_zh,
    authorZh: r.author_zh,
    authorEn: r.author_en,
    cover: r.cover,
    excerptZh: r.excerpt_zh,
    excerptEn: r.excerpt_en,
    bodyZh: r.body_zh,
    bodyEn: r.body_en,
    status: r.status,
    metaTitleZh: r.meta_title_zh ?? undefined,
    metaDescZh: r.meta_desc_zh ?? undefined,
    metaTitleEn: r.meta_title_en ?? undefined,
    metaDescEn: r.meta_desc_en ?? undefined,
    createdAt: r.created_at,
    updatedAt: r.updated_at,
  };
}

function postToRow(p: Partial<CmsPost>) {
  const row: Record<string, unknown> = {};
  if (p.titleZh !== undefined) row.title_zh = p.titleZh;
  if (p.titleEn !== undefined) row.title_en = p.titleEn;
  if (p.slug !== undefined) row.slug = p.slug;
  if (p.categoryZh !== undefined) row.category_zh = p.categoryZh;
  if (p.authorZh !== undefined) row.author_zh = p.authorZh;
  if (p.authorEn !== undefined) row.author_en = p.authorEn;
  if (p.cover !== undefined) row.cover = p.cover;
  if (p.excerptZh !== undefined) row.excerpt_zh = p.excerptZh;
  if (p.excerptEn !== undefined) row.excerpt_en = p.excerptEn;
  if (p.bodyZh !== undefined) row.body_zh = p.bodyZh;
  if (p.bodyEn !== undefined) row.body_en = p.bodyEn;
  if (p.status !== undefined) row.status = p.status;
  if (p.metaTitleZh !== undefined) row.meta_title_zh = p.metaTitleZh;
  if (p.metaDescZh !== undefined) row.meta_desc_zh = p.metaDescZh;
  if (p.metaTitleEn !== undefined) row.meta_title_en = p.metaTitleEn;
  if (p.metaDescEn !== undefined) row.meta_desc_en = p.metaDescEn;
  return row;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToMedia(r: any): CmsMedia {
  return {
    id: r.id,
    filename: r.filename,
    url: r.url,
    originalName: r.original_name,
    width: r.width,
    height: r.height,
    sizeBytes: r.size_bytes,
    uploadedAt: r.uploaded_at,
  };
}

// ────────────────────────────────────────────────────────────────
// Post store
// ────────────────────────────────────────────────────────────────

export async function getAllCmsPosts(): Promise<CmsPost[]> {
  const { data, error } = await db
    .from('cms_posts')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw new Error(`getAllCmsPosts: ${error.message}`);
  return (data ?? []).map(rowToPost);
}

export async function getCmsPost(id: string): Promise<CmsPost | undefined> {
  const { data, error } = await db
    .from('cms_posts')
    .select('*')
    .eq('id', id)
    .maybeSingle();
  if (error) throw new Error(`getCmsPost: ${error.message}`);
  return data ? rowToPost(data) : undefined;
}

export async function createCmsPost(
  data: Omit<CmsPost, 'id' | 'createdAt' | 'updatedAt'>,
): Promise<CmsPost> {
  const row = postToRow(data);
  const { data: inserted, error } = await db
    .from('cms_posts')
    .insert(row)
    .select()
    .single();
  if (error) throw new Error(`createCmsPost: ${error.message}`);
  return rowToPost(inserted);
}

export async function updateCmsPost(
  id: string,
  data: Partial<Omit<CmsPost, 'id' | 'createdAt'>>,
): Promise<CmsPost | null> {
  const row = postToRow(data);
  const { data: updated, error } = await db
    .from('cms_posts')
    .update(row)
    .eq('id', id)
    .select()
    .maybeSingle();
  if (error) throw new Error(`updateCmsPost: ${error.message}`);
  return updated ? rowToPost(updated) : null;
}

export async function deleteCmsPost(id: string): Promise<boolean> {
  const { error, count } = await db
    .from('cms_posts')
    .delete({ count: 'exact' })
    .eq('id', id);
  if (error) throw new Error(`deleteCmsPost: ${error.message}`);
  return (count ?? 0) > 0;
}

// ────────────────────────────────────────────────────────────────
// Media store
// ────────────────────────────────────────────────────────────────

export async function getAllCmsMedia(): Promise<CmsMedia[]> {
  const { data, error } = await db
    .from('cms_media')
    .select('*')
    .order('uploaded_at', { ascending: false });
  if (error) throw new Error(`getAllCmsMedia: ${error.message}`);
  return (data ?? []).map(rowToMedia);
}

export async function addCmsMedia(
  item: Omit<CmsMedia, 'id' | 'uploadedAt'>,
): Promise<CmsMedia> {
  const { data, error } = await db
    .from('cms_media')
    .insert({
      filename: item.filename,
      url: item.url,
      original_name: item.originalName,
      width: item.width,
      height: item.height,
      size_bytes: item.sizeBytes,
    })
    .select()
    .single();
  if (error) throw new Error(`addCmsMedia: ${error.message}`);
  return rowToMedia(data);
}

export async function deleteCmsMedia(id: string): Promise<boolean> {
  const { error, count } = await db
    .from('cms_media')
    .delete({ count: 'exact' })
    .eq('id', id);
  if (error) throw new Error(`deleteCmsMedia: ${error.message}`);
  return (count ?? 0) > 0;
}
