'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/i18n';

interface Props {
  locale: Locale;
  placeholder: string;
  btnText: string;
}

export function NewsletterForm({ locale, placeholder, btnText }: Props) {
  const zh = locale === 'zh';
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error('fail');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p className="text-sm text-green-400">
        {zh ? '订阅成功！感谢您的关注。' : 'Subscribed! Thank you for joining.'}
      </p>
    );
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="w-full h-11 px-4 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
        required
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="h-11 rounded-md bg-primary hover:bg-primary-dark text-white font-semibold transition-colors disabled:opacity-60"
      >
        {status === 'loading'
          ? (zh ? '提交中...' : 'Submitting...')
          : btnText}
      </button>
      {status === 'error' && (
        <p className="text-xs text-red-400">
          {zh ? '订阅失败，请稍后重试。' : 'Failed to subscribe. Please try again.'}
        </p>
      )}
    </form>
  );
}
