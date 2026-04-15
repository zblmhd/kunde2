import type { Metadata } from 'next';
import Link from 'next/link';
import { AdminNav } from '../../AdminNav';
import { PostEditor } from '../PostEditor';

export const metadata: Metadata = { title: '新建文章' };

export default function NewPostPage() {
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
          <h1 className="text-xl font-bold font-serif">新建文章</h1>
        </div>
        <PostEditor />
      </main>
    </>
  );
}
