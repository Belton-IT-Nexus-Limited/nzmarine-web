import type { ReactElement } from 'react';
import { Container } from '@/components/ui/Container';
import { site } from '@/content/site';
import { Reveal } from './Reveal';

const signals = ['Auckland', 'Whangārei', 'Bay of Islands', 'METSTRADE', 'South Pacific'];

/**
 * The industry at a glance. Bold tabular figures on the navy ink band, pulled
 * straight from the site facts so the numbers never drift from the rest of the
 * site. The rail of place names gives the stats a New Zealand-to-global spine.
 */
export function ScaleBand(): ReactElement {
  return (
    <section className="bg-ink text-ink-foreground section-y">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.45fr)] lg:items-end">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-300">
                Scale with a shoreline
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl text-ink-foreground sm:text-5xl">
                One association carries the builders, exporters, yards and crews that make New
                Zealand marine visible offshore.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-xl border border-ink-border bg-ink-surface p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-300">
                Industry route
              </p>
              <ol className="mt-5 space-y-3">
                {signals.map((signal, index) => (
                  <li key={signal} className="flex items-center gap-3 text-sm text-ink-muted-foreground">
                    <span className="flex size-7 items-center justify-center rounded-full border border-ink-border font-semibold text-ink-foreground">
                      {index + 1}
                    </span>
                    <span>{signal}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {site.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="h-full rounded-xl border border-ink-border bg-ink-surface p-5 sm:p-6">
                <dd className="font-display text-5xl leading-none tabular-nums text-ink-foreground sm:text-display-sm">
                  {stat.value}
                </dd>
                <dt className="mt-3 max-w-36 text-sm font-medium uppercase tracking-[0.12em] text-ink-muted-foreground">
                  {stat.label}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
