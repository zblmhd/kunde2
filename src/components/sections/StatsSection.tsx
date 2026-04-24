import type { Locale } from '@/lib/i18n';
import { dict } from '@/lib/i18n';

interface Props {
  locale: Locale;
}

export function StatsSection({ locale }: Props) {
  const t = dict[locale].home;
  const isZh = locale === 'zh';

  const defaultDescs = [
    isZh ? '紮根紐約，持續精進' : 'Deep roots in NY',
    isZh ? '覆蓋法拉盛與曼哈頓' : 'Flushing · Manhattan',
    isZh ? '紐約州執照資質' : 'Licensed practitioners',
    isZh ? '主流商保直接受理' : 'Insurance accepted',
  ];

  return (
    <section className="kd-values kd-section--sm" aria-label={isZh ? '中醫之道' : 'The Way of TCM'}>
      <div className="kd-container">
        <div className="kd-values__grid">
          {/* Inline vertical label — no border, sits in the same grid row as the value cards */}
          <div className="kd-way-side" aria-hidden>
            <div className="kd-way-side__cn">中醫之道</div>
            <div className="kd-way-side__en">THE WAY OF CURE</div>
          </div>

          {t.stats.map((s, i) => (
            <div key={s.label} className="kd-value">
              <div className="kd-value__ring" aria-hidden>{s.value}</div>
              <div className="kd-value__title">{s.label}</div>
              <div className="kd-value__desc">{defaultDescs[i] ?? ''}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
