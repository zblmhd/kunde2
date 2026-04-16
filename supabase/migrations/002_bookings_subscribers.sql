-- ============================================================
-- Kunde TCM — bookings + subscribers + insurance_verifications tables
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================================

-- ── bookings ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS bookings (
  id            TEXT        PRIMARY KEY DEFAULT ('bk_' || gen_random_uuid()::text),
  name          TEXT        NOT NULL,
  phone         TEXT        NOT NULL,
  email         TEXT        NOT NULL DEFAULT '',
  clinic        TEXT        NOT NULL DEFAULT '',
  symptoms      TEXT        NOT NULL DEFAULT '',
  preferred_date TEXT       NOT NULL DEFAULT '',
  preferred_time TEXT       NOT NULL DEFAULT '',
  status        TEXT        NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_status     ON bookings (status);

-- ── subscribers ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS subscribers (
  id            TEXT        PRIMARY KEY DEFAULT ('sub_' || gen_random_uuid()::text),
  email         TEXT        NOT NULL UNIQUE,
  subscribed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  active        BOOLEAN     NOT NULL DEFAULT true
);

CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers (email);

-- ── insurance_verifications ───────────────────────────────
CREATE TABLE IF NOT EXISTS insurance_verifications (
  id             TEXT        PRIMARY KEY DEFAULT ('ins_' || gen_random_uuid()::text),
  name           TEXT        NOT NULL,
  phone          TEXT        NOT NULL,
  email          TEXT        NOT NULL DEFAULT '',
  date_of_birth  TEXT        NOT NULL DEFAULT '',
  insurance_company TEXT     NOT NULL DEFAULT '',
  member_id      TEXT        NOT NULL DEFAULT '',
  group_number   TEXT        NOT NULL DEFAULT '',
  notes          TEXT        NOT NULL DEFAULT '',
  status         TEXT        NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'verified', 'denied')),
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_insurance_verifications_created_at ON insurance_verifications (created_at DESC);

-- ── Row Level Security ─────────────────────────────────────
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE insurance_verifications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "deny_anon_bookings" ON bookings;
DROP POLICY IF EXISTS "deny_anon_subscribers" ON subscribers;
DROP POLICY IF EXISTS "deny_anon_insurance" ON insurance_verifications;

CREATE POLICY "deny_anon_bookings" ON bookings
  FOR ALL TO anon, authenticated USING (false);

CREATE POLICY "deny_anon_subscribers" ON subscribers
  FOR ALL TO anon, authenticated USING (false);

CREATE POLICY "deny_anon_insurance" ON insurance_verifications
  FOR ALL TO anon, authenticated USING (false);

-- ── Additional security hardening ──────────────────────────
REVOKE ALL ON TABLE bookings FROM anon, authenticated;
REVOKE ALL ON TABLE subscribers FROM anon, authenticated;
REVOKE ALL ON TABLE insurance_verifications FROM anon, authenticated;
REVOKE ALL ON TABLE cms_posts FROM anon, authenticated;
REVOKE ALL ON TABLE cms_media FROM anon, authenticated;

GRANT ALL ON TABLE bookings TO service_role;
GRANT ALL ON TABLE subscribers TO service_role;
GRANT ALL ON TABLE insurance_verifications TO service_role;
GRANT ALL ON TABLE cms_posts TO service_role;
GRANT ALL ON TABLE cms_media TO service_role;
