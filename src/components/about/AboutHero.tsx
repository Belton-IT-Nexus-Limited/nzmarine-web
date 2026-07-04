import type { ReactElement } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/blocks/Breadcrumbs';
import { byTheme, type Photo } from '@/content/media';
import { Reveal } from '@/components/concept-b/Reveal';

const peoplePhotos = byTheme('people');

// Prefer a wide people/industry frame for the band; fall back to the first
// available people photo, then a safe default if the library is empty.
const heroPhoto: Photo | undefined =
  peoplePhotos.find((p) => p.orientation === 'landscape') ?? peoplePhotos[0];

const breadcrumb = [
  { label: 'Home', to: '/' },
  { label: 'About' },
];

/**
 * About page hero. A real photo of the industry's people sits behind a flat
 * navy scrim so the breadcrumb, single page heading and intro all read at AA.
 * Content is visible on mount; the reveal only adds a gentle fade.
 */
export function AboutHero(): ReactElement {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      {heroPhoto ? (
        <img
          src={heroPhoto.lg}
          alt="People of the New Zealand marine industry together at an event"
          width={heroPhoto.w}
          height={heroPhoto.h}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 -z-10 size-full object-cover object-center"
        />
      ) : null}

      {/* Flat navy scrim for AA contrast over the photo. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-ink/85 sm:bg-ink/80"
      />

      <Container className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <Breadcrumbs items={breadcrumb} onInk />

          <Reveal className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-300">
              About NZ Marine
            </p>
            <h1 className="mt-4 font-display text-4xl text-ink-foreground sm:text-5xl lg:text-display-sm">
              The national body for New Zealand marine.
            </h1>
            <p className="mt-5 max-w-prose text-lg text-ink-foreground/90">
              For more than 60 years NZ Marine has represented the companies that design, build,
              refit and service the country&rsquo;s boats. We profile the industry overseas, train
              its next generation and speak for it with one voice.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button to="/join" variant="accent" size="lg">
                Join NZ Marine
                <ArrowRight aria-hidden="true" strokeWidth={2} />
              </Button>
              <Button
                to="/contact"
                variant="ghost"
                size="lg"
                className="border border-ink-border text-ink-foreground hover:bg-ink-surface"
              >
                <MessageCircle aria-hidden="true" strokeWidth={2} />
                Talk to us
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
