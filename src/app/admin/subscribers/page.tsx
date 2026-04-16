import type { Metadata } from 'next';
import { AdminNav } from '../AdminNav';
import { getAllSubscribers } from '@/lib/store';

export const metadata: Metadata = { title: '订阅管理' };
export const dynamic = 'force-dynamic';

export default async function AdminSubscribersPage() {
  const subscribers = await getAllSubscribers();

  return (
    <>
      <AdminNav />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold font-serif">订阅管理</h1>
          <span className="text-sm text-gray-500">
            共 {subscribers.filter((s) => s.active).length} 位活跃订阅者
          </span>
        </div>

        {subscribers.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg">暂无订阅记录</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">邮箱</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">状态</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">订阅时间</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((s, idx) => (
                  <tr
                    key={s.id}
                    className={`border-t border-gray-100 ${idx % 2 === 1 ? 'bg-gray-50/50' : ''}`}
                  >
                    <td className="px-4 py-3">
                      <a href={`mailto:${s.email}`} className="text-[#b58129] hover:underline">
                        {s.email}
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${
                          s.active
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {s.active ? '活跃' : '已退订'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs">
                      {new Date(s.subscribedAt).toLocaleString('zh-CN', {
                        dateStyle: 'short',
                        timeStyle: 'short',
                      })}
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
