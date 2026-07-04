import type { ReactElement } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { byTheme, heroPhotos, photos } from '@/content/media';
import type { Photo } from '@/content/media';

function photoBySlug(slug: string, fallback: Photo): Photo {
  return photos.find((photo) => photo.slug === slug) ?? fallback;
}

const racingFallback = byTheme('racing')[0] ?? heroPhotos[0];
const craftFallback = byTheme('craft')[0] ?? heroPhotos[1] ?? racingFallback;
const peopleFallback = byTheme('people')[0] ?? heroPhotos[2] ?? racingFallback;
const destinationFallback = byTheme('destination')[0] ?? heroPhotos[3] ?? racingFallback;

const hero = photoBySlug(
  '2024-02-nz-millennium-cup-raced-in-auckland-credit-robert-gleed',
  racingFallback,
);

const dispatches = [
  {
    photo: photoBySlug('sites-10-2026-05-wynyard-wharf-outside-stands', craftFallback),
    label: 'Build yards',
    detail: 'Wynyard Quarter',
    alt: 'New Zealand marine yards and vessels beside the water',
  },
  {
    photo: photoBySlug('2023-12-sy-welcome2023-mc-1207', peopleFallback),
    label: 'Members',
    detail: 'People in the room',
    alt: 'NZ Marine members gathered at an industry function',
  },
  {
    photo: photoBySlug('sites-10-2016-08-bay-of-islands-nz-d-copy', destinationFallback),
    label: 'Destination',
    detail: 'Bay of Islands',
    alt: 'A yacht cruising in the Bay of Islands',
  },
];

/**
 * Full-viewport cinematic hero. A real landscape photograph fills the frame
 * under a single flat navy scrim so the headline always clears AA. The desktop
 * composition adds a small editorial dispatch stack to make the first view feel
 * like a designed feature, not a template.
 */
export function HeroImmersive(): ReactElement {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden bg-ink text-ink-foreground">
      <motion.img
        src={hero.lg}
        alt="Superyachts racing on New Zealand waters"
        width={hero.w}
        height={hero.h}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
        initial={reduceMotion ? false : { scale: 1.09 }}
        animate={reduceMotion ? undefined : { scale: 1 }}
        transition={{ duration: 16, ease: 'linear' }} // slop-scan-ignore: slow Ken Burns hero scale, motion-safe, single transform
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-950/76" />
      <div aria-hidden="true" className="absolute inset-y-0 left-0 -z-10 w-2/3 bg-navy-950/50" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-ink" />

      <Container size="wide" className="flex min-h-[92svh] items-center pb-12 pt-24 sm:pb-16 lg:items-end lg:pb-20 lg:pt-28">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:items-end">
          <div className="max-w-4xl">
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-300"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
            >
              The national body for New Zealand marine
            </motion.p>
            <motion.h1
              className="mt-5 max-w-4xl font-display text-display text-ink-foreground"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1], delay: 0.08 }}
            >
              A country of boatbuilders, racers and Pacific makers.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg text-ink-foreground/90 sm:text-xl"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1], delay: 0.16 }}
            >
              NZ Marine connects more than 500 member companies across design, build, refit,
              export, training and safe boating. If your work belongs on the water, your industry
              body is here.
            </motion.p>
            <motion.div
              className="mt-9 flex flex-wrap items-center gap-3"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1], delay: 0.24 }}
            >
              <Button to="/join" variant="accent" size="lg">
                Join NZ Marine
                <ArrowRight className="size-5" aria-hidden="true" strokeWidth={2} />
              </Button>
              <Button
                to="/directory"
                variant="ghost"
                size="lg"
                className="border border-ink-border text-ink-foreground hover:bg-ink-surface"
              >
                Find a Recognised Member
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:block"
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.28 }}
            aria-label="NZ Marine industry dispatches"
          >
            <div className="ml-auto max-w-md rounded-xl border border-ink-border bg-ink/80 p-3 shadow-pop backdrop-blur">
              <div className="grid grid-cols-2 gap-3">
                <figure className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-lg bg-ink-surface">
                  <img
                    src={dispatches[0].photo.lg}
                    alt={dispatches[0].alt}
                    width={dispatches[0].photo.w}
                    height={dispatches[0].photo.h}
                    loading="eager"
                    decoding="async"
                    className="size-full object-cover"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-navy-950/78 p-4">
                    <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-accent-300">
                      {dispatches[0].label}
                    </span>
                    <span className="mt-1 block font-display text-2xl text-ink-foreground">
                      {dispatches[0].detail}
                    </span>
                  </figcaption>
                </figure>
                {dispatches.slice(1).map((dispatch) => (
                  <figure
                    key={dispatch.label}
                    className="relative aspect-[4/5] overflow-hidden rounded-lg bg-ink-surface"
                  >
                    <img
                      src={dispatch.photo.sm}
                      alt={dispatch.alt}
                      width={dispatch.photo.w}
                      height={dispatch.photo.h}
                      loading="eager"
                      decoding="async"
                      className="size-full object-cover"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-navy-950/78 p-3">
                      <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-accent-300">
                        {dispatch.label}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-ink-foreground">
                        {dispatch.detail}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
