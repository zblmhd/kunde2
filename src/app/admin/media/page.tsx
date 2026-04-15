import type { Metadata } from 'next';
import { AdminNav } from '../AdminNav';
import { MediaLibrary } from './MediaLibrary';
import { getAllCmsMedia } from '@/lib/store';

export const metadata: Metadata = { title: '媒体库' };
export const dynamic = 'force-dynamic';

export default async function AdminMediaPage() {
  const media = await getAllCmsMedia();
  return (
    <>
      <AdminNav />
      <MediaLibrary initialMedia={media} />
    </>
  );
}
