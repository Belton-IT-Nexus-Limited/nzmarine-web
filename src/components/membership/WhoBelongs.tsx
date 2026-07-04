import type { ReactElement } from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/concept-b/Reveal';
import { site } from '@/content/site';
import { gatheringPhotos, gatheringAlt } from './membershipPhotos';

const collage = gatheringPhotos(4);

/**
 * "Who belongs" — real member faces and gatherings next to the headline 500+
 * figure. The collage uses a fixed two-by-two grid with aspect boxes so the
 * lazy-loaded photos cannot shift the layout, and the figure reads first.
 */
export function WhoBelongs(): ReactElement {
  return (
    <section className="bg-background text-foreground section-y">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Who belongs</Eyebrow>
            <p className="mt-5 font-display text-display-sm leading-none text-foreground tabular-nums">
              {site.memberCount}+
            </p>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
              member companies, and the people behind them
            </h2>
            <p className="mt-5 max-w-prose text-lg text-muted-foreground">
              The yards, builders, exporters, brokers and trades that make up the New Zealand marine
              industry already sit inside NZ Marine. These are the people you meet at the conference,
              at superyacht season functions and on the boat-show floor. When you join, you join them.
            </p>
            <p className="mt-4 max-w-prose text-lg text-muted-foreground">
              It is a national network with a local feel. Whether you run a one-person rigging
              business or a yard that refits superyachts up to 160 metres, there is a place for your
              company and a group of people doing similar work.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid grid-cols-2 gap-3">
              {collage.map((photo) => (
                <li key={photo.slug} className="overflow-hidden rounded-lg bg-navy-900">
                  <img
                    src={photo.sm}
                    alt={gatheringAlt}
                    width={photo.w}
                    height={photo.h}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] size-full object-cover"
                  />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
