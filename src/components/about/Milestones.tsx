import type { ReactElement } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { photos, type Photo } from '@/content/media';
import { Reveal } from '@/components/concept-b/Reveal';

interface Milestone {
  era: string;
  title: string;
  body: string;
  photoSlug?: string;
  alt?: string;
}

const MILESTONES: Milestone[] = [
  {
    era: 'Since 1965',
    title: 'Sixty years representing the industry',
    body: 'For more than six decades the association has spoken for New Zealand boatbuilders, refit yards and marine businesses. That long run is why government, councils and overseas partners take a call from NZ Marine seriously.',
  },
  {
    era: 'The Code of Ethics',
    title: 'The Recognised Member standard',
    body: 'Companies that meet the Recognised Member Code of Ethics agree to a published standard of fair dealing and good workmanship. The mark gives boat owners and visiting crews a way to choose a business they can trust.',
  },
  {
    era: 'METSTRADE and Monaco',
    title: 'Taking New Zealand marine companies global',
    body: 'The NZ Marine Export Group puts member companies on the floor at METSTRADE in Amsterdam and the Monaco Yacht Show under one national banner, so smaller exporters reach international buyers without going it alone.',
    photoSlug: 'sites-10-2026-03-mets-stand-2025',
    alt: 'The New Zealand pavilion on the show floor at METSTRADE',
  },
  {
    era: 'Destination & Cruising New Zealand',
    title: 'A welcome for visiting superyachts',
    body: 'Through Destination & Cruising New Zealand the association helps captains and crews plan a refit season here, with more than a hundred member companies set up to service yachts up to around 160 metres.',
    photoSlug: '2023-12-sy-welcome2023-mc-1207',
    alt: 'NZ Marine members hosting visiting superyacht captains and crew',
  },
  {
    era: 'The NZ Millennium Cup',
    title: 'New Zealand’s superyacht regatta',
    body: 'The NZ Millennium Cup brings superyachts to race in New Zealand waters and shows off the country as a sailing and refit destination. It is one of the events that keeps the industry on the international calendar.',
    photoSlug: '2024-02-nz-millennium-cup-raced-in-auckland-credit-robert-gleed',
    alt: 'Superyachts racing in the NZ Millennium Cup off Auckland',
  },
];

function photoBySlug(slug: string | undefined): Photo | undefined {
  if (!slug) return undefined;
  return photos.find((p) => p.slug === slug);
}

/**
 * Vertical timeline of credible NZ Marine milestones on the navy ink band. A
 * flat section that sits between image-led sections: thumbnails appear only as
 * small framed cards inside each item, never as a full-bleed background.
 */
export function Milestones(): ReactElement {
  return (
    <section className="bg-ink text-ink-foreground section-y">
      <Container>
        <SectionHeading
          eyebrow="Track record"
          title="Milestones that built the reputation"
          intro="A short line through the work that made New Zealand a name in design, build, refit and export. Each one is something members can point to."
          className="[&_h2]:text-ink-foreground [&_p]:text-ink-muted-foreground"
        />

        <ol className="relative mt-12 space-y-8 border-l border-ink-border pl-6 sm:mt-16 sm:pl-10">
          {MILESTONES.map((item, index) => {
            const photo = photoBySlug(item.photoSlug);
            return (
              <li key={item.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.6rem] top-1.5 size-3 rounded-full bg-accent-500 ring-4 ring-ink sm:-left-[2.85rem]"
                />
                <Reveal delay={Math.min(index * 0.06, 0.24)}>
                  <article className="rounded-lg border border-ink-border bg-ink-surface p-6 sm:p-7">
                    <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-300">
                          {item.era}
                        </p>
                        <h3 className="mt-3 font-display text-xl text-ink-foreground sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-prose text-ink-muted-foreground">{item.body}</p>
                      </div>
                      {photo ? (
                        <div className="overflow-hidden rounded-md border border-ink-border sm:w-44 lg:w-56">
                          <img
                            src={photo.sm}
                            alt={item.alt ?? ''}
                            width={photo.w}
                            height={photo.h}
                            loading="lazy"
                            decoding="async"
                            className="aspect-[4/3] w-full object-cover"
                          />
                        </div>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
