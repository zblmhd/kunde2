import Link from 'next/link';
import {
  Activity,
  Leaf,
  Gem,
  Hand,
  Circle,
  Flame,
  Sun,
  Droplet,
  ArrowRight,
} from 'lucide-react';
import { ButtonMobile as Button } from './ButtonMobile';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';
import { methodsPreview } from '@/data/methods-preview';

const iconMap = {
  Activity,
  Leaf,
  Gem,
  Hand,
  Circle,
  Flame,
  Sun,
  Droplet,
} as const;

interface Props {
  locale: Locale;
}

export function MethodsGridMobile({ locale }: Props) {
  const t = dict[locale].home;
  const isZh = locale === 'zh';
  return (
    <section className="container-kunde py-16 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-h2 mb-3">{t.methodsTitle}</h2>
        <p className="text-[color:var(--color-text-muted)] max-w-2xl mx-auto">
          {t.methodsSub}
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {methodsPreview.map((m) => {
          const Icon = iconMap[m.icon as keyof typeof iconMap] ?? Activity;
          return (
            <Link
              key={m.slug}
              href={`/${locale}/methods/${m.slug}`}
              className="group block bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <Icon className="w-6 h-6 text-primary-dark" />
              </div>
              <h3 className="font-serif text-xl mb-2">
                {isZh ? m.nameZh : m.nameEn}
              </h3>
              <p className="text-sm text-[color:var(--color-text-muted)] mb-3">
                {isZh ? m.taglineZh : m.taglineEn}
              </p>
              <span className="text-sm text-primary-dark font-semibold inline-flex items-center gap-1">
                {isZh ? '了解详情' : 'Learn more'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          );
        })}
      </div>
      <div className="text-center mt-10">
        <Button href={`/${locale}/methods`} variant="secondary" size="lg">
          {t.methodsCta}
        </Button>
      </div>
    </section>
  );
}
