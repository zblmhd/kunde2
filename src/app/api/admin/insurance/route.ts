import { NextResponse, type NextRequest } from 'next/server';
import { verifySessionToken } from '@/lib/auth';
import { getAllInsuranceVerifications } from '@/lib/store';

function authed(req: NextRequest) {
  const token = req.cookies.get('kunde_admin_session')?.value;
  return token ? verifySessionToken(token) : false;
}

export async function GET(req: NextRequest) {
  if (!authed(req))
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(await getAllInsuranceVerifications());
}
