import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Item {
  label: string;
  href: string;
}

interface Props {
  items: ReadonlyArray<Item>;
  className?: string;
}

export function Breadcrumbs({ items, className }: Props) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-sm text-white/80">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {idx > 0 && <ChevronRight className="w-4 h-4 opacity-60" />}
              {isLast ? (
                <span aria-current="page" className="text-white">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
