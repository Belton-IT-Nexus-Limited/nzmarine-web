import type { ReactElement } from 'react';
import { Mail } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';
import { joinSteps } from './data';
import { Reveal } from './Reveal';

/**
 * The cost and how-to-join nudge. There is no single price because fees scale
 * with company size, so this describes the structure honestly and points to the
 * application rather than inventing a number.
 */
export function JoinNudge(): ReactElement {
  return (
    <Section tone="muted">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <Reveal>
            <SectionHeading
              eyebrow="What it costs"
              title="How to join, and what it costs"
              intro="There is no single price, because the annual fee depends on the size of your company. A sole trader pays less than a large yard, so you only ever pay for the scale you actually are."
            />
            <p className="mt-6 max-w-prose text-base text-muted-foreground">
              The quickest way to start is the membership application. If you would rather talk it
              through first, email the membership team at{' '}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-link underline-offset-2 hover:underline focus-visible:underline focus-visible:outline-none"
              >
                {site.email}
              </a>{' '}
              and we will walk you through the steps and confirm your fee.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button to="/join" variant="primary" size="md">
                Apply for membership
              </Button>
              <Button href={`mailto:${site.email}`} variant="secondary" size="md">
                <Mail aria-hidden="true" />
                Email the membership team
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ol className="flex flex-col gap-5">
              {joinSteps.map((item) => (
                <li
                  key={item.step}
                  className="flex gap-4 rounded-lg border border-border bg-surface p-5 shadow-card"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-accent-50 font-display text-lg tabular-nums text-accent-700"
                  >
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                    <p className="mt-1.5 text-base text-muted-foreground">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
