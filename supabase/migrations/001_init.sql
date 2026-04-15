-- ============================================================
-- Kunde TCM — initial database schema
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================================

-- ── cms_posts ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS cms_posts (
  id            TEXT        PRIMARY KEY DEFAULT ('post_' || gen_random_uuid()::text),
  title_zh      TEXT        NOT NULL,
  title_en      TEXT        NOT NULL DEFAULT '',
  slug          TEXT        NOT NULL UNIQUE,
  category_zh   TEXT        NOT NULL DEFAULT '',
  author_zh     TEXT        NOT NULL DEFAULT '',
  author_en     TEXT        NOT NULL DEFAULT '',
  cover         TEXT        NOT NULL DEFAULT '',
  excerpt_zh    TEXT        NOT NULL DEFAULT '',
  excerpt_en    TEXT        NOT NULL DEFAULT '',
  body_zh       TEXT        NOT NULL DEFAULT '',
  body_en       TEXT        NOT NULL DEFAULT '',
  status        TEXT        NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  meta_title_zh TEXT,
  meta_desc_zh  TEXT,
  meta_title_en TEXT,
  meta_desc_en  TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_cms_posts_status     ON cms_posts (status);
CREATE INDEX IF NOT EXISTS idx_cms_posts_slug       ON cms_posts (slug);
CREATE INDEX IF NOT EXISTS idx_cms_posts_created_at ON cms_posts (created_at DESC);

-- Auto-update updated_at on every row update
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_cms_posts_updated_at ON cms_posts;
CREATE TRIGGER trg_cms_posts_updated_at
  BEFORE UPDATE ON cms_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ── cms_media ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS cms_media (
  id            TEXT        PRIMARY KEY DEFAULT ('media_' || gen_random_uuid()::text),
  filename      TEXT        NOT NULL,
  url           TEXT        NOT NULL,          -- Supabase Storage public URL
  original_name TEXT        NOT NULL DEFAULT '',
  width         INTEGER     NOT NULL DEFAULT 0,
  height        INTEGER     NOT NULL DEFAULT 0,
  size_bytes    INTEGER     NOT NULL DEFAULT 0,
  uploaded_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_cms_media_uploaded_at ON cms_media (uploaded_at DESC);

-- ── Row Level Security ─────────────────────────────────────
-- Both tables: NO public access. Only the service_role (used by
-- Next.js API routes via SUPABASE_SERVICE_ROLE_KEY) may read/write.
-- The anon key (NEXT_PUBLIC_SUPABASE_ANON_KEY) has NO privileges.

ALTER TABLE cms_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms_media ENABLE ROW LEVEL SECURITY;

-- Drop any existing policies first (idempotent re-run)
DROP POLICY IF EXISTS "service_role_all_posts" ON cms_posts;
DROP POLICY IF EXISTS "service_role_all_media" ON cms_media;

-- service_role bypasses RLS by default in Supabase — no explicit
-- policy needed. But we add a deny-all for anon/authenticated roles
-- so a leaked anon key cannot access CMS data.
CREATE POLICY "deny_anon_posts" ON cms_posts
  FOR ALL TO anon, authenticated
  USING (false);

CREATE POLICY "deny_anon_media" ON cms_media
  FOR ALL TO anon, authenticated
  USING (false);

-- ── Storage bucket ─────────────────────────────────────────
-- Create via Supabase Dashboard → Storage → New Bucket
-- Name: "media", Public: true (images served publicly)
-- Or run via supabase CLI: supabase storage buckets create media --public
-- (Cannot create buckets via SQL — use Dashboard or CLI)
