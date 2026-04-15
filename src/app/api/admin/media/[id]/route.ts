import { NextResponse, type NextRequest } from 'next/server';
import { verifySessionToken } from '@/lib/auth';
import { getAllCmsMedia, deleteCmsMedia } from '@/lib/store';
import { db } from '@/lib/db';

function authed(req: NextRequest) {
  const token = req.cookies.get('kunde_admin_session')?.value;
  return token ? verifySessionToken(token) : false;
}

const STORAGE_BUCKET = 'media';

export async function GET(req: NextRequest) {
  if (!authed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(await getAllCmsMedia());
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  if (!authed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const all = await getAllCmsMedia();
  const item = all.find((m) => m.id === params.id);
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  // Delete from Supabase Storage (filename is the storage path)
  try {
    await db.storage.from(STORAGE_BUCKET).remove([item.filename]);
  } catch { /* ignore storage errors — record still deleted */ }

  const ok = await deleteCmsMedia(params.id);
  if (!ok) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
