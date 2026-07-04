import type { ReactElement } from 'react';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/blocks/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { photos, type Photo } from '@/content/media';

function heroPhoto(): Photo {
  const found = photos.find((p) => p.slug === '2018-11-nfp-180309-344');
  return found ?? photos.find((p) => p.orientation === 'landscape') ?? photos[0];
}

/**
 * Image-led page hero for "find your people". A real networking-function photo
 * sits under a single flat navy scrim so the Fraunces h1 stays AA-legible, with
 * the breadcrumb, one teal CTA and a quieter secondary link.
 */
export function SectorGroupsHero(): ReactElement {
  const photo = heroPhoto();

  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <img
        src={photo.lg}
        alt=""
        width={photo.w}
        height={photo.h}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-950/80" />

      <Container className="py-16 sm:py-20 lg:py-28">
        <Breadcrumbs
          items={[{ label: 'Membership', to: '/membership' }, { label: 'Sector groups' }]}
          onInk
          className="mb-6"
        />
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">
            Membership
          </p>
          <h1 className="mt-4 text-display font-display text-ink-foreground">Find your people</h1>
          <p className="mt-6 max-w-prose text-lg text-ink-muted-foreground sm:text-xl">
            Every member of NZ Marine sits in a sector group with the businesses doing the same kind
            of work. It is where you set the priorities for your part of the industry, and where you
            meet the people who get what you do.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button to="/join" variant="accent" size="lg">
              Join NZ Marine
              <ArrowRight className="size-5" aria-hidden="true" strokeWidth={2} />
            </Button>
            <Button to="/membership" variant="secondary" size="lg">
              See what membership gives you
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
