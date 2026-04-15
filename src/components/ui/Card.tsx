import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white border border-border rounded-lg p-6 shadow-sm',
        hover && 'transition-all duration-200 hover:shadow-md hover:-translate-y-0.5',
        className,
      )}
    >
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn('font-serif text-h3 mb-2', className)}>{children}</h3>
  );
}

export function CardBody({ children, className }: CardTitleProps) {
  return (
    <p className={cn('text-[color:var(--color-text-muted)]', className)}>
      {children}
    </p>
  );
}
