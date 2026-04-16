import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';
import { getPostsSortedByDate } from '@/data/posts';
import { getPublishedCmsPosts } from '@/lib/store';

interface Props {
  locale: Locale;
}

export async function BlogPreview({ locale }: Props) {
  const t = dict[locale].home;
  const isZh = locale === 'zh';

  // Merge static posts + CMS posts, deduplicate by slug, sort by date desc
  const staticPosts: {
    slug: string; titleZh: string; titleEn: string;
    excerptZh: string; excerptEn: string;
    category: string; date: string; cover: string;
  }[] = getPostsSortedByDate().map((p) => ({
    slug: p.slug,
    titleZh: p.titleZh,
    titleEn: p.titleEn,
    excerptZh: p.excerptZh,
    excerptEn: p.excerptEn,
    category: p.categoriesZh[0] ?? '',
    date: p.date,
    cover: p.cover,
  }));

  let cmsPosts: {
    slug: string; titleZh: string; titleEn: string;
    excerptZh: string; excerptEn: string;
    category: string; date: string; cover: string;
  }[] = [];
  try {
    const raw = await getPublishedCmsPosts();
    cmsPosts = raw.map((p) => ({
      slug: p.slug,
      titleZh: p.titleZh,
      titleEn: p.titleEn || p.titleZh,
      excerptZh: p.excerptZh,
      excerptEn: p.excerptEn || p.excerptZh,
      category: p.categoryZh,
      date: p.createdAt.slice(0, 10),
      cover: p.cover || '/images/about-hero.svg',
    }));
  } catch {
    // fall back to static only
  }

  // Deduplicate by slug (CMS takes priority), then sort newest first, take 3
  const slugSeen = new Set<string>();
  const all = [...cmsPosts, ...staticPosts].filter((p) => {
    if (slugSeen.has(p.slug)) return false;
    slugSeen.add(p.slug);
    return true;
  });
  all.sort((a, b) => b.date.localeCompare(a.date));
  const preview = all.slice(0, 3);

  return (
    <section className="container-kunde py-16 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-h2 mb-3">{t.blogTitle}</h2>
        <p className="text-[color:var(--color-text-muted)]">{t.blogSub}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {preview.map((post) => (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className="group block bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <div className="relative aspect-[16/10] bg-cream">
              <Image
                src={post.cover}
                alt={isZh ? post.titleZh : post.titleEn}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <p className="text-xs text-primary-dark font-semibold mb-2 uppercase tracking-wide">
                {post.category}
              </p>
              <h3 className="font-serif text-lg mb-2 leading-tight group-hover:text-primary-dark transition-colors">
                {isZh ? post.titleZh : post.titleEn}
              </h3>
              <p className="text-sm text-[color:var(--color-text-muted)] mb-3 line-clamp-3">
                {isZh ? post.excerptZh : post.excerptEn}
              </p>
              <span className="text-sm text-primary-dark font-semibold inline-flex items-center gap-1">
                {t.readMore}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button href={`/${locale}/blog`} variant="secondary" size="lg">
          {t.blogCta}
        </Button>
      </div>
    </section>
  );
}
