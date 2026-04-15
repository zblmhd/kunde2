import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { locales, type Locale } from '@/lib/i18n';
import { breadcrumbSchema, articleSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import {
  getPost,
  getPostsSortedByDate,
  getRelatedPosts,
  POST_CATEGORIES_EN,
} from '@/data/posts';

interface Props {
  params: { lang: string; slug: string };
}

export function generateStaticParams() {
  const posts = getPostsSortedByDate();
  return locales.flatMap((lang) =>
    posts.map((p) => ({ lang, slug: p.slug })),
  );
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) return {};
  const post = getPost(params.slug);
  if (!post) return {};
  const isZh = lang === 'zh';
  const title = isZh ? post.titleZh : post.titleEn;
  const description = isZh ? post.excerptZh : post.excerptEn;
  const tags = isZh ? post.tagsZh : post.tagsEn;
  return pageMetadata({
    lang,
    path: `/blog/${post.slug}`,
    title: `${title} | ${isZh ? '坤德中医专栏' : 'Kunde TCM Journal'}`,
    description,
    keywords: tags,
    ogImage: post.cover,
    ogType: 'article',
  });
}

export default function BlogPostPage({ params }: Props) {
  const lang = params.lang as Locale;
  if (!locales.includes(lang)) notFound();
  const post = getPost(params.slug);
  if (!post) notFound();

  const isZh = lang === 'zh';
  const title = isZh ? post.titleZh : post.titleEn;
  const body = isZh ? post.bodyZh : post.bodyEn;
  const author = isZh ? post.authorZh : post.authorEn;
  const tags = isZh ? post.tagsZh : post.tagsEn;
  const catLabel = isZh
    ? post.categoriesZh[0]
    : POST_CATEGORIES_EN[post.categoriesZh[0]];
  const related = getRelatedPosts(post.slug);

  const breadcrumbs = isZh
    ? [
        { label: '首页', href: '/zh' },
        { label: '中医专栏', href: '/zh/blog' },
        { label: post.titleZh.slice(0, 20) + '…', href: `/zh/blog/${post.slug}` },
      ]
    : [
        { label: 'Home', href: '/en' },
        { label: 'Journal', href: '/en/blog' },
        { label: post.titleEn.slice(0, 30) + '…', href: `/en/blog/${post.slug}` },
      ];

  const schemaData = articleSchema({
    locale: lang,
    slug: post.slug,
    title,
    description: isZh ? post.excerptZh : post.excerptEn,
    image: post.cover,
    authorName: author,
    datePublished: post.date,
    keywords: tags.join(', '),
  });

  return (
    <>
      {schemaData.map((s, i) => (
        <JsonLd key={i} data={s as Record<string, unknown>} />
      ))}
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      {/* Cover image */}
      <div className="relative aspect-[21/7] bg-header overflow-hidden">
        <Image
          src={post.cover}
          alt={isZh ? post.coverAltZh : post.coverAltEn}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
      </div>

      <div className="container-kunde py-12 lg:py-16">
        <div className="flex gap-8 lg:gap-12 max-w-6xl mx-auto flex-col lg:flex-row">

          {/* ── Main Article ── */}
          <article className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[color:var(--color-text-muted)] mb-6">
              <Link href={`/${lang}`} className="hover:text-primary-dark">
                {isZh ? '首页' : 'Home'}
              </Link>
              <span>/</span>
              <Link href={`/${lang}/blog`} className="hover:text-primary-dark">
                {isZh ? '中医专栏' : 'Journal'}
              </Link>
              <span>/</span>
              <span className="truncate max-w-[200px]">
                {isZh ? post.titleZh : post.titleEn}
              </span>
            </nav>

            {/* Category + Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-primary/10 text-primary-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {catLabel}
              </span>
              <span className="flex items-center gap-1 text-xs text-[color:var(--color-text-muted)]">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 text-xs text-[color:var(--color-text-muted)]">
                <Clock className="w-3.5 h-3.5" />
                {isZh
                  ? `约 ${post.readMinutes} 分钟阅读`
                  : `${post.readMinutes} min read`}
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-serif text-2xl md:text-h1 leading-tight mb-4">
              {title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-serif font-bold text-primary-dark text-lg">
                {author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-sm">{author}</p>
                <p className="text-xs text-[color:var(--color-text-muted)]">
                  {isZh
                    ? '坤德中医养生轩 · 纽约州执照针灸师'
                    : 'Kunde TCM · NY State Licensed Acupuncturist'}
                </p>
              </div>
            </div>

            {/* Rich text body */}
            <div
              className="prose prose-lg max-w-none blog-content"
              dangerouslySetInnerHTML={{ __html: body }}
            />

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-border">
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-[color:var(--color-text-muted)]" />
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-cream border border-border rounded-full px-3 py-1 text-xs text-[color:var(--color-text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related methods / conditions */}
            {(post.relatedMethodSlugs.length > 0 ||
              post.relatedConditionSlugs.length > 0) && (
              <div className="mt-8 p-5 bg-cream border border-border rounded-lg">
                <h3 className="font-serif font-semibold mb-3">
                  {isZh ? '相关页面' : 'Related Pages at Kunde TCM'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.relatedMethodSlugs.map((s) => (
                    <Link
                      key={s}
                      href={`/${lang}/methods/${s}`}
                      className="text-sm text-primary-dark underline hover:no-underline"
                    >
                      {isZh ? `治疗手法 · ${s}` : `Treatment: ${s}`}
                    </Link>
                  ))}
                  {post.relatedConditionSlugs.map((s) => (
                    <Link
                      key={s}
                      href={`/${lang}/conditions/${s}`}
                      className="text-sm text-primary-dark underline hover:no-underline"
                    >
                      {isZh ? `主治项目 · ${s}` : `Condition: ${s}`}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Author card */}
            <div className="mt-10 p-6 bg-white border border-border rounded-lg shadow-sm flex gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center font-serif font-bold text-primary-dark text-2xl flex-shrink-0">
                {author.charAt(0)}
              </div>
              <div>
                <h4 className="font-serif text-lg mb-1">{author}</h4>
                <p className="text-sm text-[color:var(--color-text-muted)] mb-3">
                  {isZh
                    ? '坤德中医养生轩创始人 / 临床主任 · DAOM 针灸与东方医学博士 · 纽约州执照针灸师'
                    : 'Founder & Clinical Director, Kunde TCM · Doctor of Acupuncture & Oriental Medicine (DAOM) · NY State Licensed Acupuncturist'}
                </p>
                <Button href={`/${lang}/contact#booking`} size="sm">
                  {isZh ? '预约就诊' : 'Book a Visit'}
                </Button>
              </div>
            </div>

            {/* Back to blog */}
            <div className="mt-8">
              <Link
                href={`/${lang}/blog`}
                className="inline-flex items-center gap-2 text-sm text-[color:var(--color-text-muted)] hover:text-primary-dark"
              >
                <ArrowLeft className="w-4 h-4" />
                {isZh ? '返回中医专栏' : 'Back to the Journal'}
              </Link>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="lg:w-80 space-y-6 flex-shrink-0">

            {/* Sticky CTA */}
            <div className="bg-header text-white rounded-lg p-6 text-center lg:sticky lg:top-24">
              <h3 className="font-serif text-xl mb-2">
                {isZh ? '预约就诊' : 'Book Your Visit'}
              </h3>
              <p className="text-white/80 text-sm mb-4">
                {isZh
                  ? '读完文章后，让经验丰富的医师为您本人的情况做评估。免费 15 分钟电话初步咨询。'
                  : "Ready to apply this to your own health? Get a free 15-minute phone consultation with one of our practitioners."}
              </p>
              <Button
                href={`/${lang}/contact#booking`}
                size="lg"
                className="w-full"
              >
                {isZh ? '立即预约' : 'Book Now'}
              </Button>
              <p className="text-white/60 text-xs mt-3">
                {isZh
                  ? '免费咨询热线：888-251-4088'
                  : 'Free hotline: 888-251-4088'}
              </p>
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <div className="bg-white border border-border rounded-lg p-5">
                <h3 className="font-serif text-lg mb-4">
                  {isZh ? '相关文章' : 'Related Articles'}
                </h3>
                <div className="space-y-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/${lang}/blog/${r.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block hover:bg-cream rounded-md p-2 -mx-2 transition-colors"
                    >
                      <div className="relative aspect-video mb-2 rounded overflow-hidden bg-cream">
                        <Image
                          src={r.cover}
                          alt={isZh ? r.coverAltZh : r.coverAltEn}
                          fill
                          sizes="280px"
                          className="object-cover"
                        />
                      </div>
                      <p className="font-serif text-sm leading-snug group-hover:text-primary-dark transition-colors">
                        {isZh ? r.titleZh : r.titleEn}
                      </p>
                      <p className="text-xs text-[color:var(--color-text-muted)] mt-1">
                        {r.date}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Tag cloud */}
            <div className="bg-white border border-border rounded-lg p-5">
              <h3 className="font-serif text-lg mb-4">
                {isZh ? '热门标签' : 'Popular Tags'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-cream border border-border rounded-full px-3 py-1 text-xs text-[color:var(--color-text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
