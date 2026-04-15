import Link from 'next/link';
import {
  ShieldCheck,
  Infinity as InfinityIcon,
  HandCoins,
  MapPin,
  type LucideIcon,
} from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Infinity: InfinityIcon,
  HandCoins,
  MapPin,
};

interface Props {
  locale: Locale;
}

export function WhyChooseKunde({ locale }: Props) {
  const t = dict[locale].home;
  return (
    <section className="bg-white">
      <div className="container-kunde py-16 lg:py-20">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="font-serif text-h2 mb-4">{t.whyTitle}</h2>
          <p className="text-[color:var(--color-text-muted)]">{t.whySub}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {t.whyCards.map((card) => {
            const Icon = iconMap[card.icon] ?? ShieldCheck;
            return (
              <div
                key={card.title}
                className="bg-cream border border-border rounded-lg p-7 shadow-sm"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-dark" />
                  </div>
                  <h3 className="font-serif text-xl pt-2">{card.title}</h3>
                </div>
                <p className="text-[color:var(--color-text)]/90 leading-relaxed mb-3">
                  {card.body}
                </p>
                {'subCtaLabel' in card && card.subCtaLabel ? (
                  <Link
                    href={card.subCtaHref}
                    className="text-primary-dark font-semibold text-sm hover:underline"
                  >
                    → {card.subCtaLabel}
                  </Link>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link
            href={`/${locale}/about`}
            className="text-primary-dark font-semibold hover:underline"
          >
            → {t.whyFooter}
          </Link>
        </div>
      </div>
    </section>
  );
}
