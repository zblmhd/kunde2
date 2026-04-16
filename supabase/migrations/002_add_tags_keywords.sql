-- ============================================================
-- Migration 002: Add category_en, tags, keywords to cms_posts
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================================

ALTER TABLE cms_posts
  ADD COLUMN IF NOT EXISTS category_en   TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS tags_zh       TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS tags_en       TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS keywords_zh   TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS keywords_en   TEXT NOT NULL DEFAULT '';
