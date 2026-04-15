import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';

interface Props {
  locale: Locale;
}

export function FAQSection({ locale }: Props) {
  const t = dict[locale].home;
  return (
    <section className="bg-cream border-t border-border">
      <div className="container-kunde py-16 lg:py-20 max-w-4xl">
        <h2 className="font-serif text-h2 text-center mb-10">{t.faqTitle}</h2>
        <dl className="space-y-6">
          {t.faqs.map((f) => (
            <div
              key={f.q}
              className="bg-white border border-border rounded-lg p-6 shadow-sm"
            >
              <dt className="font-serif text-lg font-semibold mb-3 text-primary-dark">
                Q · {f.q}
              </dt>
              <dd className="text-[color:var(--color-text)]/90 leading-relaxed">
                {f.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
