import type { ReactElement } from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { heroPhotos } from '@/content/media';
import { Reveal } from './Reveal';

const photo = heroPhotos[9] ?? heroPhotos[0];

/**
 * Closing full-bleed call to action over a real hero photo. A single flat navy
 * scrim holds the contrast, the accent CTA repeats the page's one action, and a
 * secondary ghost link offers a quieter path.
 */
export function ClosingCTA(): ReactElement {
  return (
    <section className="relative isolate flex min-h-[70svh] items-center overflow-hidden bg-ink text-ink-foreground">
      <img
        src={photo.lg}
        alt="The New Zealand marine industry at work on the water"
        width={photo.w}
        height={photo.h}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-950/78" />

      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-display-sm text-ink-foreground">
            Put NZ Marine behind your business.
          </h2>
          <p className="mt-5 text-lg text-ink-foreground/90">
            Join the national association for advocacy, training, trade-show support and the
            Recognised Member mark. If you would rather talk it through first, the team is happy to
            help.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button to="/join" variant="accent" size="lg">
              Join NZ Marine
              <ArrowRight className="size-5" aria-hidden="true" strokeWidth={2} />
            </Button>
            <Button
              to="/contact"
              variant="ghost"
              size="lg"
              className="border border-ink-border text-ink-foreground hover:bg-ink-surface"
            >
              Talk to us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
