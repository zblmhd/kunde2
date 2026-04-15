import { NextResponse, type NextRequest } from 'next/server';
import { verifySessionToken } from '@/lib/auth';
import { getCmsPost, updateCmsPost, deleteCmsPost } from '@/lib/store';

function authed(req: NextRequest) {
  const token = req.cookies.get('kunde_admin_session')?.value;
  return token ? verifySessionToken(token) : false;
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  if (!authed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const post = await getCmsPost(params.id);
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  if (!authed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await req.json();
  const updated = await updateCmsPost(params.id, body);
  if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  if (!authed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const ok = await deleteCmsPost(params.id);
  if (!ok) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
