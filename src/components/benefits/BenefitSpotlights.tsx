import type { ReactElement } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { spotlights } from './data';
import { SpotlightPanel } from './SpotlightPanel';
import { Reveal } from './Reveal';

/**
 * The headline benefits, each given its own image-supported panel. These are
 * the reasons people remember: advocacy, the ready-made documents, training and
 * apprenticeships, and reaching the world through the Export Group.
 */
export function BenefitSpotlights(): ReactElement {
  return (
    <Section tone="muted">
      <Container className="mb-12">
        <Reveal>
          <SectionHeading
            eyebrow="The big four"
            title="What membership actually does for you"
            intro="Four reasons members say it pays for itself, each one part feeling and part hard value."
          />
        </Reveal>
      </Container>

      <div className="flex flex-col gap-16 sm:gap-20">
        {spotlights.map((spotlight) => (
          <SpotlightPanel key={spotlight.title} spotlight={spotlight} />
        ))}
      </div>
    </Section>
  );
}
