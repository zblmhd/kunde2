import { NextResponse, type NextRequest } from 'next/server';
import { verifySessionToken } from '@/lib/auth';
import { getAllCmsMedia, deleteCmsMedia } from '@/lib/store';
import { unlink } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';

function authed(req: NextRequest) {
  const token = req.cookies.get('kunde_admin_session')?.value;
  return token ? verifySessionToken(token) : false;
}

export async function GET(req: NextRequest) {
  if (!authed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(getAllCmsMedia());
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  if (!authed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const all = getAllCmsMedia();
  const item = all.find((m) => m.id === params.id);
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  // Delete file from disk
  try {
    const filePath = join(process.cwd(), 'public', item.url);
    if (existsSync(filePath)) await unlink(filePath);
  } catch { /* ignore disk errors */ }

  const ok = deleteCmsMedia(params.id);
  if (!ok) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
