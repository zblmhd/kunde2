'use client';

import { useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface Props {
  tabs: Tab[];
  /** Initial tab id (defaults to first) */
  initial?: string;
}

export function NewPatientsTabs({ tabs, initial }: Props) {
  const [active, setActive] = useState(initial ?? tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div>
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="New patient guide"
        className="flex flex-wrap gap-2 border-b border-border mb-8"
      >
        {tabs.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${t.id}`}
              id={`tab-${t.id}`}
              onClick={() => setActive(t.id)}
              className={cn(
                'px-5 py-3 text-sm md:text-base font-semibold border-b-2 transition-colors',
                isActive
                  ? 'border-primary text-primary-dark'
                  : 'border-transparent text-[color:var(--color-text-muted)] hover:text-primary-dark hover:border-primary/40',
              )}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      {/* Panel */}
      <div
        id={`panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
      >
        {current.content}
      </div>
    </div>
  );
}
