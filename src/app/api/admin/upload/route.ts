import { NextResponse, type NextRequest } from 'next/server';
import { verifySessionToken } from '@/lib/auth';
import { addCmsMedia } from '@/lib/store';
import { db } from '@/lib/db';

function authed(req: NextRequest) {
  const token = req.cookies.get('kunde_admin_session')?.value;
  return token ? verifySessionToken(token) : false;
}

const ALLOWED_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/svg+xml',
];

const STORAGE_BUCKET = 'media';

export async function POST(req: NextRequest) {
  if (!authed(req))
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get('file') as File | null;
  if (!file)
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });

  if (!ALLOWED_TYPES.includes(file.type))
    return NextResponse.json(
      { error: 'File type not allowed' },
      { status: 400 },
    );

  const bytes = await file.arrayBuffer();
  let buffer = Buffer.from(new Uint8Array(bytes));

  const timestamp = Date.now();
  const baseName = file.name
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, '-')
    .slice(0, 60);

  let finalExt = file.name.match(/\.[^.]+$/)?.[0] ?? '.jpg';
  let width = 0;
  let height = 0;
  let mimeType = file.type;

  // Compress non-SVG images with Sharp if available
  if (file.type !== 'image/svg+xml') {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const sharp = require('sharp') as typeof import('sharp');
      const result = await sharp(buffer)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toBuffer({ resolveWithObject: true });
      buffer = Buffer.from(result.data) as Buffer<ArrayBuffer>;
      finalExt = '.webp';
      mimeType = 'image/webp';
      width = result.info.width;
      height = result.info.height;
    } catch {
      // Sharp not available — upload original
    }
  }

  const filename = `${timestamp}-${baseName}${finalExt}`;
  const storagePath = filename; // flat structure in the bucket

  // Upload to Supabase Storage
  const { error: uploadError } = await db.storage
    .from(STORAGE_BUCKET)
    .upload(storagePath, buffer, {
      contentType: mimeType,
      upsert: false,
    });

  if (uploadError) {
    console.error('Storage upload error:', uploadError);
    return NextResponse.json(
      { error: `Upload failed: ${uploadError.message}` },
      { status: 500 },
    );
  }

  // Get the public URL
  const {
    data: { publicUrl },
  } = db.storage.from(STORAGE_BUCKET).getPublicUrl(storagePath);

  const mediaItem = await addCmsMedia({
    filename,
    url: publicUrl,
    originalName: file.name,
    width,
    height,
    sizeBytes: buffer.length,
  });

  return NextResponse.json(mediaItem, { status: 201 });
}

