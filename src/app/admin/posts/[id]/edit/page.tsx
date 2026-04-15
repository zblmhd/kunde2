import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AdminNav } from '../../../AdminNav';
import { PostEditor } from '../../PostEditor';
import { getCmsPost } from '@/lib/store';

interface Props {
  params: { id: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getCmsPost(params.id);
  return { title: post ? `编辑：${post.titleZh}` : '编辑文章' };
}

export const dynamic = 'force-dynamic';

export default function EditPostPage({ params }: Props) {
  const post = getCmsPost(params.id);
  if (!post) notFound();

  return (
    <>
      <AdminNav />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link
            href="/admin/posts"
            className="text-gray-500 hover:text-gray-800 text-sm"
          >
            ← 返回文章列表
          </Link>
          <span className="text-gray-300">/</span>
          <h1 className="text-xl font-bold font-serif">
            编辑：{post.titleZh || '（无标题）'}
          </h1>
        </div>
        <PostEditor post={post} />
      </main>
    </>
  );
}
