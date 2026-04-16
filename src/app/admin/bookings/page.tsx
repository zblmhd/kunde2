import type { Metadata } from 'next';
import { AdminNav } from '../AdminNav';
import { getAllBookings } from '@/lib/store';
import { BookingActions } from './BookingActions';

export const metadata: Metadata = { title: '预约管理' };
export const dynamic = 'force-dynamic';

export default async function AdminBookingsPage() {
  const bookings = await getAllBookings();

  return (
    <>
      <AdminNav />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold font-serif mb-6">预约管理</h1>

        {bookings.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg">暂无预约记录</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">姓名</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">电话</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">邮箱</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">分店</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden lg:table-cell">期望日期</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden lg:table-cell">时间段</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">症状</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">状态</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden sm:table-cell">提交时间</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">操作</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, idx) => (
                  <tr
                    key={b.id}
                    className={`border-t border-gray-100 ${idx % 2 === 1 ? 'bg-gray-50/50' : ''}`}
                  >
                    <td className="px-4 py-3 font-medium">{b.name}</td>
                    <td className="px-4 py-3">
                      <a href={`tel:${b.phone}`} className="text-[#b58129] hover:underline">
                        {b.phone}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{b.email || '-'}</td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{b.clinic || '-'}</td>
                    <td className="px-4 py-3 text-gray-500 hidden lg:table-cell">{b.preferredDate || '-'}</td>
                    <td className="px-4 py-3 text-gray-500 hidden lg:table-cell">{b.preferredTime || '-'}</td>
                    <td className="px-4 py-3 text-gray-500 max-w-[200px] truncate" title={b.symptoms}>
                      {b.symptoms}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${
                          b.status === 'confirmed'
                            ? 'bg-green-100 text-green-700'
                            : b.status === 'cancelled'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {b.status === 'confirmed' ? '已确认' : b.status === 'cancelled' ? '已取消' : '待处理'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs hidden sm:table-cell whitespace-nowrap">
                      {new Date(b.createdAt).toLocaleString('zh-CN', {
                        dateStyle: 'short',
                        timeStyle: 'short',
                      })}
                    </td>
                    <td className="px-4 py-3">
                      <BookingActions id={b.id} status={b.status} />
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
