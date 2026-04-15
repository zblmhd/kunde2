'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Upload, Copy, Trash2, ImageIcon } from 'lucide-react';
import type { CmsMedia } from '@/lib/store';

interface Props {
  initialMedia: CmsMedia[];
}

export function MediaLibrary({ initialMedia }: Props) {
  const [media, setMedia] = useState<CmsMedia[]>(initialMedia);
  const [uploading, setUploading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    const newItems: CmsMedia[] = [];
    for (const file of Array.from(files)) {
      const form = new FormData();
      form.append('file', file);
      try {
        const res = await fetch('/api/admin/upload', { method: 'POST', body: form });
        if (res.ok) {
          const item = (await res.json()) as CmsMedia;
          newItems.push(item);
        }
      } catch { /* skip */ }
    }
    setMedia((prev) => [...newItems, ...prev]);
    setUploading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm('确定删除这张图片吗？')) return;
    const res = await fetch(`/api/admin/media/${id}`, { method: 'DELETE' });
    if (res.ok) setMedia((prev) => prev.filter((m) => m.id !== id));
  }

  function copyUrl(url: string) {
    void navigator.clipboard.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold font-serif">媒体库</h1>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="h-10 px-5 bg-[#dd9933] text-white rounded-md font-semibold hover:bg-[#b58129] transition-colors inline-flex items-center gap-2 disabled:opacity-60"
        >
          <Upload className="w-4 h-4" />
          {uploading ? '上传中…' : '上传图片'}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {/* Drop zone */}
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-8 bg-white cursor-pointer hover:border-[#dd9933] transition-colors"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          void handleFiles(e.dataTransfer.files);
        }}
      >
        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-500 text-sm">
          {uploading
            ? '正在上传，请稍候…'
            : '拖拽图片到此处，或点击上传 · 自动压缩至 1000px 宽并转 WebP'}
        </p>
      </div>

      {media.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p>媒体库为空，请上传第一张图片</p>
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {media.map((m) => (
            <div
              key={m.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm group"
            >
              {/* Thumbnail */}
              <div className="relative aspect-square bg-gray-100">
                {m.url.endsWith('.svg') ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={m.url}
                    alt={m.originalName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={m.url}
                    alt={m.originalName}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                )}
              </div>
              {/* Info */}
              <div className="p-2">
                <p
                  className="text-xs text-gray-600 truncate mb-1"
                  title={m.originalName}
                >
                  {m.originalName}
                </p>
                <p className="text-xs text-gray-400 mb-2">
                  {m.width > 0 ? `${m.width}×${m.height} · ` : ''}
                  {(m.sizeBytes / 1024).toFixed(0)} KB
                </p>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => copyUrl(m.url)}
                    title="复制链接"
                    className="flex-1 h-7 flex items-center justify-center gap-1 text-xs border border-gray-200 rounded hover:bg-gray-50 transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                    {copied === m.url ? '✓' : '复制'}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(m.id)}
                    title="删除"
                    className="h-7 w-7 flex items-center justify-center border border-gray-200 rounded hover:bg-red-50 hover:border-red-300 transition-colors text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
