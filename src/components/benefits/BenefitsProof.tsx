import type { ReactElement } from 'react';
import { LogoTile } from '@/components/blocks/LogoTile';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { companies } from '@/content/companies';
import { Reveal } from './Reveal';

const shown = companies.slice(0, 15);

/**
 * Credibility wall of real member marks, named and linked, so the benefits
 * read as proven rather than promised.
 */
export function BenefitsProof(): ReactElement {
  return (
    <Section tone="paper">
      <Container className="mb-10">
        <Reveal>
          <SectionHeading
            eyebrow="Who you join"
            title="The companies already getting this value"
            intro="Builders, exporters, equipment makers and award winners. A few of the members who put their name to NZ Marine and use it every day."
          />
        </Reveal>
      </Container>

      <Container>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {shown.map((company) => (
            <li key={company.slug} className="flex">
              <LogoTile company={company} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
