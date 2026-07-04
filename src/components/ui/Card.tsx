import type { ElementType, JSX, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface CardProps {
  as?: ElementType;
  interactive?: boolean;
  className?: string;
  children: ReactNode;
}

/** Surface panel with subtle border and shadow; lifts on hover when interactive. */
export function Card({ as, interactive = false, className, children }: CardProps): JSX.Element {
  const Component = as ?? 'div';
  return (
    <Component
      className={cn(
        'rounded-lg border border-border bg-surface text-foreground shadow-card',
        interactive &&
          'motion-safe:transition-[transform,opacity] motion-safe:duration-[--duration-base] motion-safe:ease-[--ease-out-soft] hover:-translate-y-0.5 hover:shadow-pop',
        className,
      )}
    >
      {children}
    </Component>
  );
}

interface CardBodyProps {
  className?: string;
  children: ReactNode;
}

/** Padded inner region of a card. */
export function CardBody({ className, children }: CardBodyProps): JSX.Element {
  return <div className={cn('p-6', className)}>{children}</div>;
}

interface CardTitleProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/** Card heading; renders an h3 by default. */
export function CardTitle({ as, className, children }: CardTitleProps): JSX.Element {
  const Component = as ?? 'h3';
  return (
    <Component className={cn('font-display text-xl text-foreground', className)}>{children}</Component>
  );
}

interface CardMetaProps {
  className?: string;
  children: ReactNode;
}

/** Secondary metadata line (date, location, category) inside a card. */
export function CardMeta({ className, children }: CardMetaProps): JSX.Element {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>
  );
}
