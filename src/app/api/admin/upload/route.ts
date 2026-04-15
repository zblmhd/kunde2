import { NextResponse, type NextRequest } from 'next/server';
import { verifySessionToken } from '@/lib/auth';
import { addCmsMedia } from '@/lib/store';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, extname } from 'path';

function authed(req: NextRequest) {
  const token = req.cookies.get('kunde_admin_session')?.value;
  return token ? verifySessionToken(token) : false;
}

export async function POST(req: NextRequest) {
  if (!authed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get('file') as File | null;
  if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 });

  const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
  if (!ALLOWED.includes(file.type)) {
    return NextResponse.json({ error: 'File type not allowed' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(new Uint8Array(bytes));

  // Prepare upload dir
  const uploadDir = join(process.cwd(), 'public', 'uploads');
  if (!existsSync(uploadDir)) await mkdir(uploadDir, { recursive: true });

  const timestamp = Date.now();
  const ext = extname(file.name) || '.jpg';
  const baseName = file.name
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, '-')
    .slice(0, 60);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let finalBuffer: any = buffer;
  let finalExt = ext;
  let width = 0;
  let height = 0;

  // Attempt Sharp compression (optional — degrades gracefully if not installed)
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const sharp = require('sharp') as typeof import('sharp');
    if (file.type !== 'image/svg+xml') {
      const result = await sharp(buffer)
        .resize({ width: 1000, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toBuffer({ resolveWithObject: true });
      finalBuffer = result.data;
      finalExt = '.webp';
      width = result.info.width;
      height = result.info.height;
    }
  } catch {
    // Sharp not installed — save original
  }

  const filename = `${timestamp}-${baseName}${finalExt}`;
  const filePath = join(uploadDir, filename);
  await writeFile(filePath, finalBuffer);

  const url = `/uploads/${filename}`;
  const mediaItem = addCmsMedia({
    filename,
    url,
    originalName: file.name,
    width,
    height,
    sizeBytes: finalBuffer.length,
  });

  return NextResponse.json(mediaItem, { status: 201 });
}

export const config = {
  api: { bodyParser: false },
};
