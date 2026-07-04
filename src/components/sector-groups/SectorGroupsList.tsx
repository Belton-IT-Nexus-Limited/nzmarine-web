import type { ReactElement } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { sectorGroups } from '@/content/sectorGroups';
import { SectorCommunity } from './SectorCommunity';

/**
 * The five sector groups, each as a community with a real photo, who it is for
 * and what belonging gives you. Rows alternate the image side down the page.
 */
export function SectorGroupsList(): ReactElement {
  return (
    <Section tone="paper">
      <Container>
        <SectionHeading
          eyebrow="Five communities, one industry"
          title="Pick the group that fits your business"
          intro="Whatever you do on the water or in the shed, there is a group of members doing the same work. You join the one that fits, and your real-world problems become the priorities NZ Marine takes to government, training providers and overseas buyers."
        />
        <div className="mt-14 flex flex-col gap-16 sm:gap-20">
          {sectorGroups.map((group, index) => (
            <SectorCommunity key={group.slug} group={group} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
