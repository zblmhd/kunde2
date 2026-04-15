import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';

interface Props {
  locale: Locale;
}

export function StatsSection({ locale }: Props) {
  const t = dict[locale].home;
  return (
    <section className="bg-cream border-y border-border">
      <div className="container-kunde py-12 lg:py-16">
        <h2 className="font-serif text-h2 text-center mb-10">{t.statsTitle}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-primary-dark font-bold mb-2">
                {s.value}
              </div>
              <div className="text-sm md:text-base text-[color:var(--color-text-muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
