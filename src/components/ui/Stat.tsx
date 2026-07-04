import type { JSX, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface StatProps {
  value: ReactNode;
  label: ReactNode;
  sublabel?: ReactNode;
  className?: string;
}

/** A single headline figure with a label and optional supporting line. */
export function Stat({ value, label, sublabel, className }: StatProps): JSX.Element {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <span className="font-display text-4xl tabular-nums leading-none">{value}</span>
      <span className="text-base font-medium text-foreground">{label}</span>
      {sublabel ? <span className="text-sm text-muted-foreground">{sublabel}</span> : null}
    </div>
  );
}
