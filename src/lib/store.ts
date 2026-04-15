// File-based post & media store for development (Step 5).
// Data lives in /data/posts.json and /data/media.json at project root.
// Production upgrade path: replace with Prisma + PostgreSQL in Step 6.
//
// This module runs only in the Node.js runtime (server actions / API routes).

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const DATA_DIR = join(process.cwd(), 'data');
const POSTS_FILE = join(DATA_DIR, 'cms-posts.json');
const MEDIA_FILE = join(DATA_DIR, 'cms-media.json');

function ensureDataDir() {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
}

// ────────────────────────────────────────────────────────────────
// Post store
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
  bodyZh: string; // HTML
  bodyEn: string; // HTML
  status: PostStatus;
  metaTitleZh?: string;
  metaDescZh?: string;
  metaTitleEn?: string;
  metaDescEn?: string;
  createdAt: string; // ISO
  updatedAt: string; // ISO
}

function readPosts(): CmsPost[] {
  ensureDataDir();
  if (!existsSync(POSTS_FILE)) return [];
  try {
    return JSON.parse(readFileSync(POSTS_FILE, 'utf-8')) as CmsPost[];
  } catch {
    return [];
  }
}

function writePosts(posts: CmsPost[]) {
  ensureDataDir();
  writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2), 'utf-8');
}

export function getAllCmsPosts(): CmsPost[] {
  return readPosts().sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function getCmsPost(id: string): CmsPost | undefined {
  return readPosts().find((p) => p.id === id);
}

export function createCmsPost(
  data: Omit<CmsPost, 'id' | 'createdAt' | 'updatedAt'>,
): CmsPost {
  const posts = readPosts();
  const now = new Date().toISOString();
  const post: CmsPost = {
    ...data,
    id: `post_${Date.now()}`,
    createdAt: now,
    updatedAt: now,
  };
  writePosts([...posts, post]);
  return post;
}

export function updateCmsPost(
  id: string,
  data: Partial<Omit<CmsPost, 'id' | 'createdAt'>>,
): CmsPost | null {
  const posts = readPosts();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  const updated = {
    ...posts[idx],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  posts[idx] = updated;
  writePosts(posts);
  return updated;
}

export function deleteCmsPost(id: string): boolean {
  const posts = readPosts();
  const filtered = posts.filter((p) => p.id !== id);
  if (filtered.length === posts.length) return false;
  writePosts(filtered);
  return true;
}

// ────────────────────────────────────────────────────────────────
// Media store
// ────────────────────────────────────────────────────────────────

export interface CmsMedia {
  id: string;
  filename: string;
  url: string; // relative to /public, e.g. /uploads/image.webp
  originalName: string;
  width: number;
  height: number;
  sizeBytes: number;
  uploadedAt: string;
}

function readMedia(): CmsMedia[] {
  ensureDataDir();
  if (!existsSync(MEDIA_FILE)) return [];
  try {
    return JSON.parse(readFileSync(MEDIA_FILE, 'utf-8')) as CmsMedia[];
  } catch {
    return [];
  }
}

function writeMedia(media: CmsMedia[]) {
  ensureDataDir();
  writeFileSync(MEDIA_FILE, JSON.stringify(media, null, 2), 'utf-8');
}

export function getAllCmsMedia(): CmsMedia[] {
  return readMedia().sort((a, b) => (a.uploadedAt < b.uploadedAt ? 1 : -1));
}

export function addCmsMedia(item: Omit<CmsMedia, 'id' | 'uploadedAt'>): CmsMedia {
  const all = readMedia();
  const entry: CmsMedia = {
    ...item,
    id: `media_${Date.now()}`,
    uploadedAt: new Date().toISOString(),
  };
  writeMedia([...all, entry]);
  return entry;
}

export function deleteCmsMedia(id: string): boolean {
  const all = readMedia();
  const filtered = all.filter((m) => m.id !== id);
  if (filtered.length === all.length) return false;
  writeMedia(filtered);
  return true;
}
