import type { ReactElement } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureGrid, type FeatureItem } from '@/components/blocks/FeatureGrid';
import { supportingBenefits } from './data';
import { Reveal } from './Reveal';

const items: FeatureItem[] = supportingBenefits.map((benefit) => ({
  icon: benefit.icon,
  title: benefit.title,
  body: benefit.body,
}));

/**
 * The rest of what comes with membership, kept scannable in an icon-led grid:
 * boat-show space, the Recognised Member mark, networking and industry data.
 */
export function SupportingBenefits(): ReactElement {
  return (
    <Section tone="paper">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="And more"
            title="The rest of what you join"
            intro="Membership keeps paying off across the year, on the show floor, in your reputation, and in the rooms where the work gets handed out."
          />
        </Reveal>
      </Container>
      <FeatureGrid items={items} columns={4} className="mt-12" />
    </Section>
  );
}
