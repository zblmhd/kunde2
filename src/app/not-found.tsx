import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found · Kunde TCM',
  description:
    'The page you are looking for cannot be found. Return to Kunde TCM home to explore our acupuncture and Chinese medicine services.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ecece0',
          color: '#3a2415',
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          padding: '2rem',
        }}
      >
        <div style={{ maxWidth: 640, textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#dd9933',
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            坤德中医养生轩 · Kunde TCM
          </p>
          <h1
            style={{
              fontSize: '4rem',
              margin: '0 0 0.5rem',
              fontFamily: '"Noto Serif SC", Georgia, serif',
              color: '#3b3423',
            }}
          >
            404
          </h1>
          <h2
            style={{
              fontSize: '1.5rem',
              margin: '0 0 1rem',
              fontFamily: '"Noto Serif SC", Georgia, serif',
            }}
          >
            页面未找到 · Page Not Found
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: '#6b6b6b',
              marginBottom: '2rem',
            }}
          >
            您访问的页面可能已被移动或不存在。请返回首页查看 5 家分店与
            纽约针灸 / 中医诊所信息。
            <br />
            The page you’re looking for has moved or doesn’t exist. Return to
            the Kunde TCM home for our 5 acupuncture and Chinese medicine
            clinics in NYC.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/zh"
              style={{
                background: '#dd9933',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              中文首页
            </Link>
            <Link
              href="/en"
              style={{
                background: '#3b3423',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              English Home
            </Link>
            <Link
              href="/en/contact"
              style={{
                background: 'transparent',
                color: '#3a2415',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                fontWeight: 600,
                textDecoration: 'none',
                border: '1px solid #d4d4c8',
              }}
            >
              Contact / 联系我们
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
