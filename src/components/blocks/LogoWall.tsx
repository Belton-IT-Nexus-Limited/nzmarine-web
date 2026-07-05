import type { ReactElement } from 'react';
import { LogoTile } from '@/components/blocks/LogoTile';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import type { Company } from '@/content/types';

interface LogoWallProps {
  title?: string;
  companies: Company[];
  className?: string;
}

/**
 * Grid of member company marks. Each tile shows the real, current logo on the
 * plate its brand was drawn for and links to the company site.
 */
export function LogoWall({ title, companies, className }: LogoWallProps): ReactElement {
  return (
    <Container className={className}>
      {title ? <Eyebrow className="mb-8 block">{title}</Eyebrow> : null}
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {companies.map((company) => (
          <li key={company.slug} className="flex">
            <LogoTile company={company} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
