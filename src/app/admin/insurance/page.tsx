import type { Metadata } from 'next';
import { AdminNav } from '../AdminNav';
import { getAllInsuranceVerifications } from '@/lib/store';

export const metadata: Metadata = { title: '保险验证管理' };
export const dynamic = 'force-dynamic';

export default async function AdminInsurancePage() {
  const items = await getAllInsuranceVerifications();

  return (
    <>
      <AdminNav />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold font-serif mb-6">保险验证管理</h1>

        {items.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg">暂无保险验证记录</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">姓名</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">电话</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">邮箱</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">出生日期</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">保险公司</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden lg:table-cell">会员编号</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">状态</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden sm:table-cell">提交时间</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, idx) => (
                  <tr
                    key={item.id}
                    className={`border-t border-gray-100 ${idx % 2 === 1 ? 'bg-gray-50/50' : ''}`}
                  >
                    <td className="px-4 py-3 font-medium">{item.name}</td>
                    <td className="px-4 py-3">
                      <a href={`tel:${item.phone}`} className="text-[#b58129] hover:underline">
                        {item.phone}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{item.email || '-'}</td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{item.dateOfBirth || '-'}</td>
                    <td className="px-4 py-3 text-gray-500">{item.insuranceCompany || '-'}</td>
                    <td className="px-4 py-3 text-gray-500 hidden lg:table-cell">{item.memberId || '-'}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${
                          item.status === 'verified'
                            ? 'bg-green-100 text-green-700'
                            : item.status === 'denied'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {item.status === 'verified' ? '已验证' : item.status === 'denied' ? '已拒绝' : '待处理'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs hidden sm:table-cell whitespace-nowrap">
                      {new Date(item.createdAt).toLocaleString('zh-CN', {
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
