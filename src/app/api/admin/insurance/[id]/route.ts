import { NextResponse, type NextRequest } from 'next/server';
import { verifySessionToken } from '@/lib/auth';
import { updateInsuranceStatus, deleteInsuranceVerification } from '@/lib/store';

function authed(req: NextRequest) {
  const token = req.cookies.get('kunde_admin_session')?.value;
  return token ? verifySessionToken(token) : false;
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  if (!authed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { status } = await req.json();
  await updateInsuranceStatus(params.id, status);
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  if (!authed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await deleteInsuranceVerification(params.id);
  return NextResponse.json({ ok: true });
}
