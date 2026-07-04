import type { ReactElement } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/blocks/Breadcrumbs';
import { photos } from '@/content/media';
import { site } from '@/content/site';

const fallback = photos[0];
const heroPhoto =
  photos.find((p) => p.slug === '2025-12-nz-marine-sy-welcome25-cp-1030') ??
  photos.find((p) => p.theme === 'people' && p.orientation === 'landscape') ??
  fallback;

/**
 * Community-led application hero. A real photo of NZ Marine members together
 * sits under a single flat navy scrim so the Fraunces headline clears AA. It
 * carries the page's only h1, the warm welcome line, the member-count proof,
 * and one accent CTA that scrolls down to the form rather than leaving.
 */
export function JoinHero(): ReactElement {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[72svh] items-end overflow-hidden bg-ink text-ink-foreground">
      <motion.img
        src={heroPhoto.lg}
        alt="NZ Marine members together at an industry welcome function on the Auckland waterfront"
        width={heroPhoto.w}
        height={heroPhoto.h}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
        initial={reduceMotion ? false : { scale: 1.06 }}
        animate={reduceMotion ? undefined : { scale: 1 }}
        transition={{ duration: 16, ease: 'linear' }} // slop-scan-ignore: slow Ken Burns hero scale, motion-safe, single transform
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-950/74" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-navy-950/50"
      />

      <Container className="pb-14 pt-28 sm:pb-18 lg:pb-24">
        <Breadcrumbs
          items={[{ label: 'Membership', to: '/membership' }, { label: 'Join NZ Marine' }]}
          onInk
          className="mb-6"
        />
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-300">
            Become a Recognised Member
          </p>
          <h1 className="mt-5 font-display text-display-sm text-ink-foreground sm:text-display">
            Join the people who build New Zealand marine.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-foreground/90">
            This is where you put your hand up. Tell us about your business and you join more than{' '}
            {site.memberCount} member companies who design, build, refit, race and export from these
            shores. It takes about five minutes, and there is nothing to pay today.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#apply" variant="accent" size="lg">
              Start your application
              <ArrowDown className="size-5" aria-hidden="true" strokeWidth={2} />
            </Button>
            <Button
              to="/membership/benefits"
              variant="ghost"
              size="lg"
              className="border border-ink-border text-ink-foreground hover:bg-ink-surface"
            >
              See what you get
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
