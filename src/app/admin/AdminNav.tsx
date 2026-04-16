import Link from 'next/link';

// Shared nav for authenticated admin pages. Lives outside layout.tsx
// because Next.js layouts may not export named components.
export function AdminNav() {
  return (
    <nav className="bg-[#3b3423] text-white sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 flex items-center h-14 gap-6">
        <Link
          href="/admin/posts"
          className="font-bold text-lg tracking-wide hover:text-yellow-300"
        >
          坤德后台
        </Link>
        <div className="flex-1 flex items-center gap-4 text-sm">
          <Link href="/admin/posts" className="hover:text-yellow-300">
            文章管理
          </Link>
          <Link href="/admin/media" className="hover:text-yellow-300">
            媒体库
          </Link>
          <Link href="/admin/bookings" className="hover:text-yellow-300">
            预约管理
          </Link>
          <Link href="/admin/subscribers" className="hover:text-yellow-300">
            订阅管理
          </Link>
          <Link href="/admin/insurance" className="hover:text-yellow-300">
            保险验证
          </Link>
        </div>
        <form action="/api/admin/logout" method="POST">
          <button
            type="submit"
            className="text-xs text-white/60 hover:text-white transition-colors"
          >
            退出登录
          </button>
        </form>
      </div>
    </nav>
  );
}
