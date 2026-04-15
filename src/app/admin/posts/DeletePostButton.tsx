'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Props { id: string }

export function DeletePostButton({ id }: Props) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleDelete() {
    if (!confirm('确定要删除这篇文章吗？此操作不可撤销。')) return;
    setPending(true);
    await fetch(`/api/admin/posts/${id}`, { method: 'DELETE' });
    router.refresh();
    setPending(false);
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={pending}
      className="text-red-500 hover:underline font-semibold text-xs disabled:opacity-40"
    >
      {pending ? '删除中…' : '删除'}
    </button>
  );
}
