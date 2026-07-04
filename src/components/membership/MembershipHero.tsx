import type { ReactElement } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/blocks/Breadcrumbs';
import { Reveal } from '@/components/concept-b/Reveal';
import { heroPhoto, gatheringAlt } from './membershipPhotos';

/**
 * Image-led membership hero. A real member-gathering photo sits behind a single
 * flat navy scrim for AA legibility, with the page's one h1, a breadcrumb, and a
 * single teal "Join NZ Marine" call to action plus a quieter secondary link. The
 * copy is visible on mount; the Reveal only adds a motion-safe entrance.
 */
export function MembershipHero(): ReactElement {
  return (
    <section className="relative isolate flex min-h-[72svh] items-end overflow-hidden bg-ink text-ink-foreground">
      <img
        src={heroPhoto.lg}
        alt={gatheringAlt}
        width={heroPhoto.w}
        height={heroPhoto.h}
        loading="eager"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-950/72" />

      <Container className="py-12 sm:py-16 lg:py-20">
        <Breadcrumbs
          items={[{ label: 'Home', to: '/' }, { label: 'Membership' }]}
          onInk
          className="mb-7"
        />
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-300">
            Membership
          </p>
          <h1 className="mt-4 font-display text-display-sm text-ink-foreground sm:text-display">
            Belong to New Zealand&rsquo;s marine industry
          </h1>
          <p className="mt-5 max-w-prose text-lg text-ink-foreground/90">
            More than 500 companies build, refit, race and sell boats under one association. Joining
            puts your business among them, with a voice in front of government, practical tools for
            running a marine company, and a mark your customers recognise.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/join" variant="accent" size="lg">
              Join NZ Marine
            </Button>
            <Button
              to="/membership/benefits"
              variant="ghost"
              size="lg"
              className="text-ink-foreground hover:bg-ink-surface"
            >
              See what membership includes
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
