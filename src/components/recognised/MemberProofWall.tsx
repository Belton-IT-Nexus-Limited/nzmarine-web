import type { ReactElement } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { partnerLogos } from '@/content/media';
import { Reveal } from './Reveal';

const shown = partnerLogos.slice(0, 15);

/**
 * Proof wall of real member marks. The source library is slug-only, so each
 * logo gets a generic accessible name rather than an invented brand. Logos sit
 * in fixed aspect boxes to avoid layout shift.
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
        {shown.map((logo) => (
          <li key={logo.slug} className="flex">
            <div className="flex aspect-[3/2] w-full items-center justify-center rounded-md border border-border bg-surface p-5">
              <img
                src={logo.src}
                alt="A NZ Marine Recognised Member company logo"
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
  );
}
