import type { ReactElement } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/concept-b/Reveal';
import { partnerLogos } from '@/content/media';

/**
 * Proof wall of real member and partner marks. Each logo sits on a light card
 * with a fixed aspect box so the lazy-loaded images cannot shift the layout. The
 * alt text names it as a member mark, since the source library is slug only, so
 * the wall still reads to assistive tech without inventing brand names.
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
          {partnerLogos.map((logo) => (
            <li key={logo.slug} className="flex">
              <div className="flex aspect-[3/2] w-full items-center justify-center rounded-md border border-border bg-surface p-5">
                <img
                  src={logo.src}
                  alt="A NZ Marine member company logo"
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
    </section>
  );
}
