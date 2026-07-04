import type { ReactElement } from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { site } from '@/content/site';
import { byTheme } from '@/content/media';
import { Reveal } from '@/components/concept-b/Reveal';

const people = byTheme('people');
const portrait =
  people.find((p) => p.orientation === 'portrait') ?? people[0];

/**
 * Flat editorial breather between the image-led sections. It carries the
 * verbatim mission from site content and the long-running story of NZ Marine,
 * with one framed portrait in a side column rather than a full-bleed photo.
 */
export function OurStory(): ReactElement {
  return (
    <section className="bg-surface-muted section-y">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-16">
          <Reveal>
            <div className="max-w-prose">
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
                Sixty years behind the New Zealand marine industry
              </h2>

              <p className="mt-6 text-xl text-foreground sm:text-2xl">
                Our purpose is{' '}
                <span className="text-accent-700">{site.mission}</span>
              </p>

              <div className="mt-8 space-y-5 text-lg text-muted-foreground">
                <p>
                  NZ Marine has represented the people who design, build, refit
                  and service boats here for more than sixty years. What began as
                  a handful of yards and chandlers has grown into a national body
                  speaking for over {site.memberCount} member companies, from the
                  Hauraki Gulf to Whangārei and the Bay of Islands.
                </p>
                <p>
                  In that time the industry has earned a reputation that travels.
                  New Zealand yards build, refit and maintain vessels up to around
                  160 metres, and the country has become the South Pacific hub for
                  superyacht refit and servicing. Our members supply sails, rigging,
                  electronics, propulsion and craftsmanship to boatbuilders all over
                  the world.
                </p>
                <p>
                  The work of the association is steady rather than loud. We put the
                  industry in front of government and regulators, profile members at
                  home and overseas, run the training and apprenticeships that keep
                  skilled trades coming through, and back the promotion of safe
                  boating. The aim has not changed since the start, and that is to
                  leave the industry stronger than we found it.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-lg border border-border shadow-card">
                <img
                  src={portrait.lg}
                  alt="Members and crew of the New Zealand marine industry at a NZ Marine event"
                  width={portrait.w}
                  height={portrait.h}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                The industry NZ Marine represents, from the apprentice on the tools
                to the companies sending New Zealand work around the world.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
