// Lightweight session helper for the admin panel.
// Uses a signed cookie (HMAC-SHA256) so there are no database dependencies in dev.
// In production (Step 6) swap to jose/iron-session or NextAuth.
//
// ADMIN_PASSWORD is read from the environment at runtime.
// SESSION_SECRET must be at least 32 characters.

import { cookies } from 'next/headers';
import { createHmac } from 'crypto';

const SESSION_COOKIE = 'kunde_admin_session';
const SESSION_TTL_DAYS = 7;

function sign(value: string): string {
  const secret = process.env.SESSION_SECRET ?? 'dev-change-me-32-bytes-please!!';
  return createHmac('sha256', secret).update(value).digest('hex');
}

export function createSessionToken(): string {
  const payload = `authenticated:${Date.now()}`;
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string): boolean {
  const idx = token.lastIndexOf('.');
  if (idx === -1) return false;
  const payload = token.slice(0, idx);
  const sig = token.slice(idx + 1);
  return sig === sign(payload);
}

export function getAdminSession(): boolean {
  try {
    const store = cookies();
    const token = store.get(SESSION_COOKIE)?.value;
    if (!token) return false;
    return verifySessionToken(token);
  } catch {
    return false;
  }
}

export function setAdminCookie(token: string) {
  const store = cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * SESSION_TTL_DAYS,
    path: '/',
  });
}

export function clearAdminCookie() {
  const store = cookies();
  store.set(SESSION_COOKIE, '', {
    httpOnly: true,
    maxAge: 0,
    path: '/',
  });
}
