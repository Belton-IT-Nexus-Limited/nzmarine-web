import type { ReactElement } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { site } from '@/content/site';
import { Reveal } from './Reveal';

/**
 * Opening band that frames the promise (belonging plus practical value) and
 * grounds it in the industry's real numbers, so the benefits that follow read
 * as part of something bigger than a feature list.
 */
export function BenefitsLede(): ReactElement {
  return (
    <Section tone="paper">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What you get"
            title="Practical help for the work you already do"
            intro="NZ Marine has represented the industry for more than 60 years. Every part of membership is built around what a yard, supplier or service business needs day to day, so the value shows up in saved time, lower cost, and being part of the network that runs New Zealand marine."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10 lg:grid-cols-4">
            {site.stats.map((stat) => (
              <div key={stat.label} className="border-t border-border-strong pt-4">
                <dt className="font-display text-4xl tabular-nums text-foreground">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-base text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </Section>
  );
}
