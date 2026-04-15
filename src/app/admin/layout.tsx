import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'Kunde Admin', template: '%s | Kunde Admin' },
  robots: { index: false, follow: false },
};

interface Props {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <html lang="zh">
      <body className="bg-gray-50 min-h-screen text-gray-900 font-sans">
        <div id="admin-root">{children}</div>
      </body>
    </html>
  );
}

// AdminNav has been moved to ./AdminNav.tsx — Next.js does not allow
// named exports from layout files.
