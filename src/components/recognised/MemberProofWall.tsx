import type { ReactElement } from 'react';
import { LogoTile } from '@/components/blocks/LogoTile';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { companies } from '@/content/companies';
import { Reveal } from './Reveal';

const shown = companies.filter((c) => c.recognised).slice(0, 15);

/**
 * Proof wall of real Recognised Member marks, named and linked to each
 * company's site.
 */
export function MemberProofWall(): ReactElement {
  return (
    <Container>
      <Reveal className="mb-10">
        <SectionHeading
          eyebrow="Who carries the mark"
          title="Hundreds of companies stand behind it"
          intro="Builders, brokers, riggers, electronics specialists and refit yards across New Zealand carry the Recognised Member mark. Here are a few of them."
        />
      </Reveal>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {shown.map((company) => (
          <li key={company.slug} className="flex">
            <LogoTile company={company} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
