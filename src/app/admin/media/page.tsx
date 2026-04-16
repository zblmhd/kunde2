import type { Metadata } from 'next';
import { AdminNav } from '../AdminNav';
import { MediaLibrary } from './MediaLibrary';
import { getAllCmsMedia } from '@/lib/store';

export const metadata: Metadata = { title: '媒体库' };
export const dynamic = 'force-dynamic';

export default async function AdminMediaPage() {
  let media: Awaited<ReturnType<typeof getAllCmsMedia>> = [];
  try {
    media = await getAllCmsMedia();
  } catch (err) {
    console.error('AdminMediaPage error:', err);
    return (
      <>
        <AdminNav />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold font-serif mb-6">媒体库</h1>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600">加载媒体失败，请刷新页面重试。</p>
            <p className="text-red-400 text-sm mt-2">{String(err)}</p>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <AdminNav />
      <MediaLibrary initialMedia={media} />
    </>
  );
}
