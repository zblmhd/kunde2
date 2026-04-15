import { NextResponse, type NextRequest } from 'next/server';
import { createSessionToken, setAdminCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const password: string = body?.password ?? '';

  const envPassword = process.env.ADMIN_PASSWORD ?? '';
  if (!envPassword || password !== envPassword) {
    return NextResponse.json(
      { error: 'Invalid password' },
      { status: 401 },
    );
  }

  const token = createSessionToken();
  const response = NextResponse.json({ ok: true });
  // Write session cookie into the response
  response.cookies.set('kunde_admin_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
  return response;
}
