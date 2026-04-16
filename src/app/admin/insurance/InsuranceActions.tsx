'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function InsuranceActions({ id, status }: { id: string; status: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function markDone() {
    if (status === 'verified') return;
    setLoading(true);
    await fetch(`/api/admin/insurance/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'verified' }),
    });
    router.refresh();
    setLoading(false);
  }

  async function remove() {
    if (!confirm('确定删除这条保险验证记录吗？')) return;
    setLoading(true);
    await fetch(`/api/admin/insurance/${id}`, { method: 'DELETE' });
    router.refresh();
    setLoading(false);
  }

  return (
    <div className="flex items-center gap-2">
      {status !== 'verified' && (
        <button
          type="button"
          onClick={markDone}
          disabled={loading}
          className="h-7 px-2.5 text-xs font-semibold rounded bg-green-100 text-green-700 hover:bg-green-200 transition-colors disabled:opacity-50 whitespace-nowrap"
        >
          已处理
        </button>
      )}
      <button
        type="button"
        onClick={remove}
        disabled={loading}
        className="h-7 px-2.5 text-xs font-semibold rounded bg-red-50 text-red-600 hover:bg-red-100 transition-colors disabled:opacity-50"
      >
        删除
      </button>
    </div>
  );
}
