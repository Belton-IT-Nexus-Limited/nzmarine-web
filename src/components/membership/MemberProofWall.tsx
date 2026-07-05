import type { ReactElement } from 'react';
import { LogoTile } from '@/components/blocks/LogoTile';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/concept-b/Reveal';
import { companies } from '@/content/companies';

const shown = companies.slice(0, 20);

/**
 * Proof wall of real member marks, named and linked, each on the plate its
 * brand publishes (paper or ink navy).
 */
export function MemberProofWall(): ReactElement {
  return (
    <section className="bg-surface-muted text-foreground section-y">
      <Container className="mb-10">
        <Reveal>
          <SectionHeading
            eyebrow="In good company"
            title="The companies already inside NZ Marine"
            intro="Builders, exporters, equipment makers and award winners. A few of the members behind the New Zealand marine industry, and the company you keep when you join."
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
    </section>
  );
}
