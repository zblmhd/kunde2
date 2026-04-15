import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllCmsPosts } from '@/lib/store';
import { AdminNav } from '../AdminNav';
import { DeletePostButton } from './DeletePostButton';

export const metadata: Metadata = { title: '文章管理' };
export const dynamic = 'force-dynamic';

export default function AdminPostsPage() {
  const posts = getAllCmsPosts();

  return (
    <>
      <AdminNav />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold font-serif">文章管理</h1>
          <Link
            href="/admin/posts/new"
            className="h-10 px-5 bg-[#dd9933] text-white rounded-md font-semibold hover:bg-[#b58129] transition-colors inline-flex items-center gap-2"
          >
            + 新建文章
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg mb-3">暂无文章</p>
            <Link href="/admin/posts/new" className="text-[#dd9933] underline">
              新建第一篇文章
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">
                    标题（中文）
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">
                    分类
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden sm:table-cell">
                    状态
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden lg:table-cell">
                    更新时间
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, idx) => (
                  <tr
                    key={post.id}
                    className={`border-t border-gray-100 ${
                      idx % 2 === 1 ? 'bg-gray-50/50' : ''
                    }`}
                  >
                    <td className="px-4 py-3">
                      <p className="font-medium truncate max-w-xs">
                        {post.titleZh || <span className="text-gray-400 italic">未填写标题</span>}
                      </p>
                      <p className="text-xs text-gray-400 truncate max-w-xs mt-0.5">
                        {post.titleEn}
                      </p>
                    </td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">
                      {post.categoryZh}
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${
                          post.status === 'published'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {post.status === 'published' ? '已发布' : '草稿'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400 hidden lg:table-cell text-xs">
                      {new Date(post.updatedAt).toLocaleString('zh-CN', {
                        dateStyle: 'short',
                        timeStyle: 'short',
                      })}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Link
                          href={`/admin/posts/${post.id}/edit`}
                          className="text-[#b58129] hover:underline font-semibold text-xs"
                        >
                          编辑
                        </Link>
                        <DeletePostButton id={post.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </>
  );
}
