// Protects all /admin/* routes except /admin/login.
// Cookie presence check only — HMAC verification happens in Node.js
// API routes and server pages (crypto is not available in Edge Runtime).

import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only guard /admin paths
  if (!pathname.startsWith('/admin')) return NextResponse.next();

  // Login page is always accessible
  if (pathname === '/admin/login') return NextResponse.next();

  const token = request.cookies.get('kunde_admin_session')?.value;

  if (!token) {
    const loginUrl = new URL('/admin/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
