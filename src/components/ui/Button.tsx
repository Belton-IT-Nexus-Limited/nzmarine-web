import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium ' +
  'whitespace-nowrap transition-colors duration-fast ease-out-soft ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-background ' +
  'disabled:pointer-events-none disabled:opacity-50 ' +
  'aria-disabled:pointer-events-none aria-disabled:opacity-50 ' +
  '[&_svg]:shrink-0';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-navy-900 text-primary-foreground hover:bg-navy-800',
  secondary: 'bg-surface text-foreground border border-border-strong hover:bg-surface-muted',
  ghost: 'bg-transparent text-foreground hover:bg-surface-muted',
  accent: 'bg-accent-600 text-accent-foreground hover:bg-accent-700',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-3.5 text-sm [&_svg]:size-4',
  md: 'h-11 px-5 text-base [&_svg]:size-[1.125rem]',
  lg: 'h-13 px-7 text-lg [&_svg]:size-5',
};

/** Compose the Button class string from variant + size tokens. */
export function buttonVariants(options?: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}): string {
  const { variant = 'primary', size = 'md', className } = options ?? {};
  return cn(base, variants[variant], sizes[size], className);
}

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: undefined;
    to?: undefined;
  };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> & {
    href: string;
    to?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<LinkProps, 'className' | 'children' | 'to'> & {
    to: LinkProps['to'];
    href?: undefined;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

/** Primary interactive control. Renders <a> for href, <Link> for to, else <button>. */
export function Button(props: ButtonProps): React.JSX.Element {
  const { variant, size, className, children } = props;
  const classes = buttonVariants({ variant, size, className });

  if (props.to !== undefined) {
    const { variant: _v, size: _s, className: _c, children: _ch, to, ...rest } = props;
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, children: _ch, href, ...rest } = props;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, type, ...rest } = props;
  return (
    <button type={type ?? 'button'} className={classes} {...rest}>
      {children}
    </button>
  );
}
