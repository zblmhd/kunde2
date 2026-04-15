'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyMapProps {
  /** Raw <iframe ...> HTML string. Source is trusted (data/clinics.ts). */
  html: string;
  className?: string;
  /** Accessible label shown in the placeholder while the map hasn't loaded. */
  placeholderLabel?: string;
}

/**
 * Defers Google Maps iframe injection until the element scrolls into view.
 * Cuts ~1 MB + several main-thread tasks from the initial /contact load,
 * which is the biggest win for INP and LCP per plan §4.9.
 */
export function LazyMap({
  html,
  className = '',
  placeholderLabel = 'Loading map…',
}: LazyMapProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || shouldLoad) return;
    const node = ref.current;
    if (!node) return;

    // Fallback: very old browsers without IntersectionObserver get the
    // iframe immediately rather than nothing.
    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: '200px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div
      ref={ref}
      className={className}
      aria-label={placeholderLabel}
      role="region"
    >
      {shouldLoad ? (
        <div
          className="w-full h-full"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-sm text-[color:var(--color-text-muted)]">
          {placeholderLabel}
        </div>
      )}
    </div>
  );
}
