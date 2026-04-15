import Link from 'next/link';
import {
  Baby,
  ShieldAlert,
  HeartPulse,
  Brain,
  Scale,
  Bone,
  Sparkles,
  Wind,
  Gauge,
  Smile,
  Moon,
  Droplets,
  User,
  Soup,
  Stethoscope,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';
import { conditionsPreview } from '@/data/conditions-preview';

const iconMap = {
  Baby,
  ShieldAlert,
  HeartPulse,
  Brain,
  Scale,
  Bone,
  Sparkles,
  Wind,
  Gauge,
  Smile,
  Moon,
  Droplets,
  User,
  Soup,
  Stethoscope,
} as const;

interface Props {
  locale: Locale;
}

export function ConditionsGrid({ locale }: Props) {
  const t = dict[locale].home;
  const isZh = locale === 'zh';
  return (
    <section className="bg-cream">
      <div className="container-kunde py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-h2 mb-3">{t.conditionsTitle}</h2>
          <p className="text-[color:var(--color-text-muted)] max-w-2xl mx-auto">
            {t.conditionsSub}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {conditionsPreview.map((c) => {
            const Icon = iconMap[c.icon as keyof typeof iconMap] ?? Stethoscope;
            return (
              <Link
                key={c.slug}
                href={`/${locale}/conditions/${c.slug}`}
                className="group flex items-start gap-4 bg-white border border-border rounded-lg p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-dark" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg mb-1">
                    {isZh ? c.nameZh : c.nameEn}
                  </h3>
                  <p className="text-sm text-[color:var(--color-text-muted)] mb-2">
                    {isZh ? c.blurbZh : c.blurbEn}
                  </p>
                  <span className="text-xs text-primary-dark font-semibold inline-flex items-center gap-1">
                    {isZh ? '了解更多' : 'Learn more'}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Button href={`/${locale}/conditions`} size="lg">
            {t.conditionsCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
