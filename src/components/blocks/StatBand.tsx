import type { ReactElement, ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';

type StatBandTone = 'ink' | 'muted';

export interface StatBandStat {
  value: ReactNode;
  label: ReactNode;
  sublabel?: ReactNode;
}

interface StatBandProps {
  stats: StatBandStat[];
  tone?: StatBandTone;
  className?: string;
}

const bandTone: Record<StatBandTone, string> = {
  ink: 'bg-ink text-ink-foreground',
  muted: 'bg-surface-muted text-foreground',
};

const valueTone: Record<StatBandTone, string> = {
  ink: 'text-ink-foreground',
  muted: 'text-foreground',
};

const labelTone: Record<StatBandTone, string> = {
  ink: 'text-ink-foreground',
  muted: 'text-foreground',
};

const sublabelTone: Record<StatBandTone, string> = {
  ink: 'text-ink-muted-foreground',
  muted: 'text-muted-foreground',
};

/** A band of headline figures. Sits on the navy ink band or a muted surface. */
export function StatBand({ stats, tone = 'ink', className }: StatBandProps): ReactElement {
  return (
    <div className={cn(bandTone[tone], 'section-y-sm', className)}>
      <Container>
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-1">
              <dd
                className={cn(
                  'font-display text-4xl leading-none tabular-nums sm:text-5xl',
                  valueTone[tone],
                )}
              >
                {stat.value}
              </dd>
              <dt className={cn('mt-2 text-base font-medium', labelTone[tone])}>{stat.label}</dt>
              {stat.sublabel ? (
                <p className={cn('text-sm', sublabelTone[tone])}>{stat.sublabel}</p>
              ) : null}
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}
