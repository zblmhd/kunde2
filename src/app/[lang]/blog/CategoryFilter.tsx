'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import {
  type Post,
  POST_CATEGORIES_ZH,
  POST_CATEGORIES_EN,
} from '@/data/posts';

const PAGE_SIZE = 12;

interface Props {
  locale: Locale;
  posts: Post[];
}

export function BlogCategoryFilter({ locale, posts }: Props) {
  const isZh = locale === 'zh';
  const [active, setActive] = useState<string>('all');
  const [page, setPage] = useState(1);

  const allLabel = isZh ? '全部' : 'All';

  const categoryLabels = isZh
    ? POST_CATEGORIES_ZH
    : (Object.values(POST_CATEGORIES_EN) as string[]);

  const filtered =
    active === 'all'
      ? posts
      : posts.filter((p) => {
          if (isZh) return p.categoriesZh.includes(active as never);
          const zhKey = POST_CATEGORIES_ZH.find(
            (k) => POST_CATEGORIES_EN[k] === active,
          );
          return zhKey && p.categoriesZh.includes(zhKey);
        });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleCategory(cat: string) {
    setActive(cat);
    setPage(1);
  }

  return (
    <>
      {/* Category bar */}
      <div
        role="tablist"
        className="flex flex-wrap gap-2 mb-8"
        aria-label={isZh ? '文章分类' : 'Article categories'}
      >
        {['all', ...categoryLabels].map((cat) => {
          const label = cat === 'all' ? allLabel : cat;
          const isActive = active === cat;
          return (
            <button
              key={cat}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => handleCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                isActive
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-[color:var(--color-text)] border-border hover:border-primary hover:text-primary-dark'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {paged.length === 0 ? (
        <p className="text-center text-[color:var(--color-text-muted)] py-16">
          {isZh ? '暂无文章' : 'No articles yet.'}
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paged.map((post) => {
            const title = isZh ? post.titleZh : post.titleEn;
            const excerpt = isZh ? post.excerptZh : post.excerptEn;
            const catLabel = isZh
              ? post.categoriesZh[0]
              : POST_CATEGORIES_EN[post.categoriesZh[0]] ?? post.categoriesZh[0];
            const authorDisplay = isZh ? post.authorZh : post.authorEn;
            return (
              <article
                key={post.slug}
                className="group bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col"
              >
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-[16/10] bg-cream">
                    <Image
                      src={post.cover}
                      alt={isZh ? post.coverAltZh : post.coverAltEn}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary-dark uppercase tracking-wide">
                        {catLabel}
                      </span>
                      <span className="text-xs text-[color:var(--color-text-muted)]">
                        · {post.date}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg leading-tight mb-2 group-hover:text-primary-dark transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-[color:var(--color-text-muted)] line-clamp-3 mb-3 flex-1">
                      {excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[color:var(--color-text-muted)]">
                        {authorDisplay}
                      </span>
                      <span className="text-sm font-semibold text-primary-dark inline-flex items-center gap-1">
                        {isZh ? '阅读全文' : 'Read More'}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-4 py-2 text-sm border border-border rounded-md disabled:opacity-40 hover:bg-cream transition-colors"
          >
            {isZh ? '上一页' : 'Prev'}
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              className={`w-10 h-10 text-sm rounded-md transition-colors border ${
                n === page
                  ? 'bg-primary text-white border-primary'
                  : 'border-border hover:bg-cream'
              }`}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 text-sm border border-border rounded-md disabled:opacity-40 hover:bg-cream transition-colors"
          >
            {isZh ? '下一页' : 'Next'}
          </button>
        </div>
      )}
    </>
  );
}
