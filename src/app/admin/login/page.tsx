'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push('/admin/posts');
      } else {
        setError('密码错误，请重试');
      }
    } catch {
      setError('网络错误，请重试');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3b3423]">
      <div className="bg-white rounded-xl p-8 shadow-xl w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#dd9933] text-white flex items-center justify-center font-bold text-2xl font-serif mb-3">
            坤
          </div>
          <h1 className="text-xl font-bold font-serif">坤德中医后台管理</h1>
          <p className="text-gray-500 text-sm mt-1">请输入管理员密码</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1.5 text-gray-700">
              管理员密码
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              className="admin-input"
              placeholder="请输入密码..."
            />
          </div>
          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 bg-[#dd9933] text-white rounded-md font-semibold hover:bg-[#b58129] transition-colors disabled:opacity-60"
          >
            {loading ? '登录中...' : '登录'}
          </button>
        </form>
      </div>
    </div>
  );
}
