import type { ReactElement } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { partnerLogos } from '@/content/media';
import { Reveal } from './Reveal';

/**
 * Credibility wall of real member and partner marks, so the benefits read as
 * proven rather than promised. Logos sit on light cards in a fixed aspect box to
 * avoid layout shift. Alt names the mark as a member mark, since the source
 * library is slug only, so the wall still reads to assistive tech.
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
          {partnerLogos.map((logo) => (
            <li key={logo.slug} className="flex">
              <div className="flex aspect-[3/2] w-full items-center justify-center rounded-md border border-border bg-surface p-5">
                <img
                  src={logo.src}
                  alt="A NZ Marine member or partner company logo"
                  width={logo.w}
                  height={logo.h}
                  loading="lazy"
                  decoding="async"
                  className="max-h-12 w-auto max-w-full object-contain opacity-80 motion-safe:transition-opacity motion-safe:duration-fast hover:opacity-100"
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
