import Link from 'next/link';
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-serif font-semibold tracking-[0.08em] rounded-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative';

const variants: Record<Variant, string> = {
  primary:
    'bg-[color:var(--gold-800)] text-[#fff7e4] hover:bg-[color:var(--gold-700)] border border-[color:var(--gold-800)] hover:border-[color:var(--gold-700)] shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_6px_14px_-6px_rgba(139,108,53,0.45)]',
  secondary:
    'bg-transparent text-[color:var(--color-text)] border border-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)]/10',
  ghost:
    'bg-transparent text-[color:var(--color-text)] hover:text-primary',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-base',
  lg: 'h-12 px-8 text-base',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

interface ButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  href?: undefined;
}

interface LinkButtonProps extends CommonProps {
  href: string;
  target?: string;
  rel?: string;
}

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps | LinkButtonProps
>(function Button(props, ref) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const cls = cn(base, variants[variant], sizes[size], className);

  if ('href' in props && props.href) {
    const isExternal = props.href.startsWith('http');
    if (isExternal) {
      return (
        <a
          href={props.href}
          className={cls}
          target={props.target ?? '_blank'}
          rel={props.rel ?? 'noopener noreferrer'}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    );
  }

  const { href: _h, ...rest } = props as ButtonProps;
  return (
    <button ref={ref} className={cls} {...rest}>
      {children}
    </button>
  );
});
