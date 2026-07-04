import type { ReactElement } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { byTheme, photos } from '@/content/media';
import type { Photo } from '@/content/media';
import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';

const themeAlt: Record<Photo['theme'], string> = {
  racing: 'Racing on New Zealand waters',
  destination: 'A New Zealand cruising destination',
  craft: 'Marine craft and boat building',
  people: 'People of the New Zealand marine industry',
  tech: 'Marine technology and equipment',
  marine: 'The New Zealand marine industry at work',
};

const themeLabel: Record<Photo['theme'], string> = {
  racing: 'Race',
  destination: 'Visit',
  craft: 'Make',
  people: 'Gather',
  tech: 'Engineer',
  marine: 'Work',
};

const curatedSlugs = [
  '2024-02-nz-millennium-cup-raced-in-auckland-credit-robert-gleed',
  '2024-09-mc-cup-nor',
  '2020-09-auckland-on-water-boat-show-live-sail-die27',
  'sites-10-2024-03-millennium-cup-day-2',
  'sites-10-2016-08-auckland-city-of-sails-terry-fong',
  '2019-02-tawera-under-sail-small',
  'sites-10-2026-05-wynyard-wharf-outside-stands',
  '2019-05-stabicraft-4-capture',
  '2026-01-boat-launcher-launching',
  '2021-10-stabicraft-manta',
  '2024-06-surtees-sales-yard-1',
  '2023-06-hullwell-pic',
  '2020-01-yd-al-duhail',
  '2026-02-boatgear-building',
  '2023-01-superyachtnz-function2022-mcrawford-mp-2512',
  '2024-12-2024-superyacht-welcome-function-s5-december-mcrawford-mcp-9237',
  '2020-11-stabi-2250wt-fiordland',
  '2021-07-superyacht-fishing-cmp-1',
  '2023-06-island-cruising-tonga',
  '2023-10-bayswater-marina-188-dji-0730-hdr',
  'sites-10-2016-08-bay-of-islands-nz-d-copy',
  '2019-06-rangitoto-and-sky-tower',
  'sites-10-2026-03-mets-stand-2025',
  '2023-12-sy-welcome2023-mc-1207',
  '2025-12-nz-marine-sy-welcome25-cp-1030',
  '2026-04-hutchwilco-nz-boat-show-sat-17may2025-3600px',
  'sites-10-2023-12-sy-welcome2023-mc-1084',
  '2025-08-conference-pic-2025',
];

function findPhoto(slug: string): Photo | undefined {
  return photos.find((photo) => photo.slug === slug);
}

/** Builds a curated, de-duplicated set of photo-led moments for the energy wall. */
function buildMoments(count: number): Photo[] {
  const seen = new Set<string>();
  const fallback = [
    ...byTheme('racing'),
    ...byTheme('craft'),
    ...byTheme('people'),
    ...byTheme('destination'),
    ...photos,
  ];
  const ordered = [
    ...curatedSlugs.map(findPhoto).filter((photo): photo is Photo => Boolean(photo)),
    ...fallback,
  ];
  const result: Photo[] = [];
  for (const photo of ordered) {
    if (seen.has(photo.slug)) continue;
    if (photo.slug.includes('logo') || photo.slug.includes('cover') || photo.slug.includes('map')) {
      continue;
    }
    seen.add(photo.slug);
    result.push(photo);
    if (result.length >= count) break;
  }
  return result;
}

const moments = buildMoments(24);

const tileClasses = [
  'md:col-span-2 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-1',
  'md:col-span-1 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-1',
];

/**
 * Edge-to-edge "moments" wall pulling many real photos across themes. Every
 * tile keeps a fixed aspect box so nothing shifts as the lazy-loaded images
 * arrive, and the alt text is derived from each photo's theme.
 */
export function MomentsMosaic(): ReactElement {
  return (
    <section className="bg-ink text-ink-foreground section-y">
      <Container className="mb-10" size="wide">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(16rem,0.35fr)] lg:items-end">
            <SectionHeading
              eyebrow="Moments"
              title="A season you can feel before you join it"
              intro="Builds, refits, race starts, boat-show mornings and welcome functions. Real photographs from across the New Zealand marine industry."
              className="[&_h2]:text-ink-foreground [&_p]:text-ink-muted-foreground"
            />
            <p className="max-w-sm text-base text-ink-muted-foreground">
              Membership is not a logo in a directory. It is the room, the dock, the yard and the
              introductions that move a marine business forward.
            </p>
          </div>
        </Reveal>
      </Container>

      <Container size="wide">
        <div className="grid auto-rows-[8rem] grid-cols-2 gap-3 sm:auto-rows-[10rem] md:grid-cols-4 lg:auto-rows-[9rem] lg:grid-cols-6">
          {moments.map((photo, index) => (
            <figure
              key={photo.slug}
              className={cn(
                'group relative overflow-hidden rounded-lg border border-ink-border bg-navy-900 shadow-card',
                tileClasses[index % tileClasses.length],
              )}
            >
              <img
                src={photo.sm}
                alt={themeAlt[photo.theme]}
                width={photo.w}
                height={photo.h}
                decoding="async"
                className="size-full object-cover opacity-90 motion-safe:transition-[opacity,transform] motion-safe:duration-base group-hover:scale-[1.03] group-hover:opacity-100"
              />
              <figcaption className="absolute bottom-2 left-2 rounded-full bg-navy-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-300">
                {themeLabel[photo.theme]}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
