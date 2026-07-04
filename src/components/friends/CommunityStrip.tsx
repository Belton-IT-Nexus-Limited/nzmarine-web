import type { ReactElement } from 'react';
import { Container } from '@/components/ui/Container';
import { photos, type Photo } from '@/content/media';
import { Reveal } from './Reveal';

type Shot = { slug: string; alt: string };

const wanted: Shot[] = [
  {
    slug: '2018-11-nfp-180309-344',
    alt: 'Members talking and laughing at an NZ Marine networking function.',
  },
  {
    slug: '2023-12-sy-welcome2023-mc-1207',
    alt: 'The crowd gathered for the superyacht welcome function on the waterfront.',
  },
  {
    slug: '2020-11-tony-sparks-left-and-mike-keown-right-of-gulf-harbour-marina-with-bianca',
    alt: 'Two people from a New Zealand marina standing together by the water.',
  },
];

function resolve(slug: string): Photo | undefined {
  return photos.find((p) => p.slug === slug);
}

const shots = wanted
  .map((shot) => ({ shot, photo: resolve(shot.slug) }))
  .filter((entry): entry is { shot: Shot; photo: Photo } => entry.photo !== undefined);

/**
 * A short band of real community photographs so the page shows the people, not
 * just describes them. Each image sits in an aspect box with intrinsic
 * dimensions to keep the layout stable as it loads.
 */
export function CommunityStrip(): ReactElement {
  return (
    <Container>
      <Reveal>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {shots.map(({ shot, photo }) => (
            <li key={shot.slug} className="overflow-hidden rounded-lg border border-border shadow-card">
              <img
                src={photo.lg}
                alt={shot.alt}
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
    </Container>
  );
}
