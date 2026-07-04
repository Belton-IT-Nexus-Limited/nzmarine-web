import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type BadgeTone = 'neutral' | 'accent' | 'sand' | 'ink';

const tones: Record<BadgeTone, string> = {
  neutral: 'bg-surface-muted text-muted-foreground border-border',
  accent: 'bg-accent-50 text-accent-800 border-accent-200',
  sand: 'bg-sand-300/40 text-neutral-800 border-sand-400',
  ink: 'bg-ink-surface text-ink-foreground border-ink-border',
};

export type BadgeProps = {
  tone?: BadgeTone;
  className?: string;
  children: ReactNode;
};

/** Small label pill for eyebrow-style metadata and statuses. */
export function Badge({ tone = 'neutral', className, children }: BadgeProps): React.JSX.Element {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5',
        'text-xs font-medium tracking-wide',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
