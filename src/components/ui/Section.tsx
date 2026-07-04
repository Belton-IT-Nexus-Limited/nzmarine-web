import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type SectionTone = 'paper' | 'muted' | 'ink';
type SectionSpacing = 'default' | 'sm' | 'none';

interface SectionProps {
  tone?: SectionTone;
  spacing?: SectionSpacing;
  className?: string;
  id?: string;
  children: ReactNode;
}

const toneClass: Record<SectionTone, string> = {
  paper: 'bg-background text-foreground',
  muted: 'bg-surface-muted text-foreground',
  ink: 'bg-ink text-ink-foreground',
};

const spacingClass: Record<SectionSpacing, string> = {
  default: 'section-y',
  sm: 'section-y-sm',
  none: '',
};

/**
 * Full-bleed page band with the shared vertical rhythm. The `ink` tone sets the
 * navy surface, so use the `ink-*` semantic roles for content placed inside it.
 */
export function Section({
  tone = 'paper',
  spacing = 'default',
  className,
  id,
  children,
}: SectionProps): React.JSX.Element {
  return (
    <section
      id={id}
      className={cn(toneClass[tone], spacingClass[spacing], className)}
    >
      {children}
    </section>
  );
}
