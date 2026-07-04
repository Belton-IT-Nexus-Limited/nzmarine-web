import type { ReactElement } from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/blocks/Breadcrumbs';
import { site } from '@/content/site';
import { photoBySlug } from './photos';

const hero = photoBySlug('sites-10-2025-10-nz-marine-sywelcome-mcrawford-0565', 'people');

/**
 * Image-led benefits hero. A real community photograph fills the frame under a
 * single flat navy scrim so the Fraunces headline always clears AA. Carries the
 * page's only h1, the breadcrumb, and the one accent CTA to /join.
 */
export function BenefitsHero(): ReactElement {
  return (
    <section className="relative isolate flex min-h-[64svh] items-end overflow-hidden bg-ink text-ink-foreground">
      <img
        src={hero.lg}
        alt="Members of the New Zealand marine industry together at an NZ Marine function."
        width={hero.w}
        height={hero.h}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-950/74" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-navy-950/55"
      />

      <Container className="pb-14 pt-28 sm:pb-18 lg:pb-24">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Membership', to: '/membership' },
            { label: 'Member benefits' },
          ]}
          onInk
          className="mb-6"
        />
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-300">
            Membership
          </p>
          <h1 className="mt-4 font-display text-display-sm text-ink-foreground sm:text-display">
            Belong to the industry, and get the backing that comes with it
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-foreground/90 sm:text-xl">
            Join more than {site.memberCount} marine companies and you are no longer working alone.
            Membership puts a national body behind your business, the documents and training that
            save you time and money, and the people who make the industry move.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/join" variant="accent" size="lg">
              Join NZ Marine
              <ArrowRight className="size-5" aria-hidden="true" strokeWidth={2} />
            </Button>
            <Button
              to="/membership"
              variant="ghost"
              size="lg"
              className="border border-ink-border text-ink-foreground hover:bg-ink-surface"
            >
              Why join NZ Marine
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
