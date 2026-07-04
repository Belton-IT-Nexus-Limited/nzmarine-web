import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type EyebrowProps = {
  className?: string;
  children: ReactNode;
};

/** Small accent label set above a section title. */
export function Eyebrow({ className, children }: EyebrowProps): React.JSX.Element {
  return (
    <p
      className={cn(
        'text-sm font-semibold uppercase tracking-[0.14em] text-accent-700',
        className,
      )}
    >
      {children}
    </p>
  );
}
