import Link from 'next/link';
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark border border-primary hover:border-primary-dark',
  secondary:
    'bg-white text-[color:var(--color-text)] border border-primary hover:bg-cream',
  ghost:
    'bg-transparent text-[color:var(--color-text)] hover:text-primary-light',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-base',
  lg: 'h-13 px-8 text-base py-3',
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

export const ButtonMobile = forwardRef<
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
