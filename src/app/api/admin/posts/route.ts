import { NextResponse, type NextRequest } from 'next/server';
import { verifySessionToken } from '@/lib/auth';
import { getAllCmsPosts, createCmsPost } from '@/lib/store';

function authed(req: NextRequest) {
  const token = req.cookies.get('kunde_admin_session')?.value;
  return token ? verifySessionToken(token) : false;
}

export async function GET(req: NextRequest) {
  if (!authed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(await getAllCmsPosts());
}

export async function POST(req: NextRequest) {
  if (!authed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await req.json();
  const post = await createCmsPost({
    titleZh: body.titleZh ?? '',
    titleEn: body.titleEn ?? '',
    slug: body.slug ?? `post-${Date.now()}`,
    categoryZh: body.categoryZh ?? '患者故事',
    authorZh: body.authorZh ?? '馮羅小潔 医生',
    authorEn: body.authorEn ?? 'Dr. Serene Feng, DAOM',
    cover: body.cover ?? '/images/about-hero.svg',
    excerptZh: body.excerptZh ?? '',
    excerptEn: body.excerptEn ?? '',
    bodyZh: body.bodyZh ?? '',
    bodyEn: body.bodyEn ?? '',
    status: body.status ?? 'draft',
    metaTitleZh: body.metaTitleZh,
    metaDescZh: body.metaDescZh,
    metaTitleEn: body.metaTitleEn,
    metaDescEn: body.metaDescEn,
  });
  return NextResponse.json(post, { status: 201 });
}
