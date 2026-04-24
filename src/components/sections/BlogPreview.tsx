import Image from 'next/image';
import Link from 'next/link';
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

  type PostPreview = {
    slug: string;
    titleZh: string;
    titleEn: string;
    excerptZh: string;
    excerptEn: string;
    category: string;
    date: string;
    cover: string;
  };

  const staticPosts: PostPreview[] = getPostsSortedByDate().map((p) => ({
    slug: p.slug,
    titleZh: p.titleZh,
    titleEn: p.titleEn,
    excerptZh: p.excerptZh,
    excerptEn: p.excerptEn,
    category: p.categoriesZh[0] ?? '',
    date: p.date,
    cover: p.cover,
  }));

  let cmsPosts: PostPreview[] = [];
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
  } catch {}

  const slugSeen = new Set<string>();
  const all = [...cmsPosts, ...staticPosts].filter((p) => {
    if (slugSeen.has(p.slug)) return false;
    slugSeen.add(p.slug);
    return true;
  });
  all.sort((a, b) => b.date.localeCompare(a.date));
  const preview = all.slice(0, 4);

  return (
    <section className="kd-blog kd-section" aria-label={t.blogTitle}>
      <div className="kd-container">
        <div className="kd-section__head">
          <span className="kd-eyebrow">{isZh ? '養生學堂' : 'Journal'}</span>
          <h2>{t.blogTitle}</h2>
          <p>{t.blogSub}</p>
          <Link href={`/${locale}/blog`} className="kd-link-gold">
            {t.blogCta} →
          </Link>
        </div>

        <div className="kd-blog__cards">
          {preview.map((post) => (
            <Link key={post.slug} href={`/${locale}/blog/${post.slug}`} className="kd-article">
              <div className="kd-article__media">
                <Image
                  src={post.cover}
                  alt={isZh ? post.titleZh : post.titleEn}
                  fill
                  sizes="(max-width: 1100px) 50vw, 23vw"
                />
                <span className="kd-article__tag">{post.category}</span>
              </div>
              <div className="kd-article__body">
                <h3 className="kd-article__title">
                  {isZh ? post.titleZh : post.titleEn}
                </h3>
                <p className="kd-article__desc">
                  {isZh ? post.excerptZh : post.excerptEn}
                </p>
                <div className="kd-article__foot">
                  <span>{post.date}</span>
                  <span className="read">{t.readMore} →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
