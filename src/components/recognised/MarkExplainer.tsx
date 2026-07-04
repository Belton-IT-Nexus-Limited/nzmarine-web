import type { ReactElement } from 'react';
import { BadgeCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import type { Photo } from '@/content/media';
import { Reveal } from './Reveal';

export type MarkExplainerProps = {
  photo: Photo;
  alt: string;
};

/**
 * Editorial split: what the Recognised Member mark means, set beside a real
 * photo of the public-facing side of the industry. The photo sits in an aspect
 * box with intrinsic dimensions so the layout never shifts as it loads.
 */
export function MarkExplainer({ photo, alt }: MarkExplainerProps): ReactElement {
  return (
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="max-w-prose">
            <span className="inline-flex size-12 items-center justify-center rounded-md bg-accent-50 text-accent-700">
              <BadgeCheck aria-hidden="true" size={24} strokeWidth={2} />
            </span>
            <Eyebrow className="mt-6">What the mark means</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
              A promise about how you will be treated
            </h2>
            <p className="mt-5 text-lg text-foreground">
              The Recognised Member mark is the association&rsquo;s sign that you are dealing with a
              credible marine company. Every member of NZ Marine agrees to be bound by the Code of
              Ethics, so the mark is more than a badge. It is a commitment to honest dealing, fair
              pricing and work done to a real standard.
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              For the boating public it gives you somewhere to start with confidence. For trade
              buyers sourcing parts, refit work or services, it points you to companies that hold
              themselves to a shared standard across design, build, repair and supply.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-lg border border-border shadow-card">
            <img
              src={photo.lg}
              alt={alt}
              width={photo.w}
              height={photo.h}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] size-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Container>
  );
}
