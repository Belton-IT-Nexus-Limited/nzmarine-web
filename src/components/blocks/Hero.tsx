import type { ReactElement } from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getImage, type ImageAsset } from '@/content/images';
import { cn } from '@/lib/cn';

export type HeroAction = {
  label: string;
  to: string;
};

export type HeroProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  primary: HeroAction;
  secondary?: HeroAction;
  /** Key into the image manifest. Missing keys fall back to a plain navy band. */
  imageKey?: string;
};

function resolveImage(imageKey?: string): ImageAsset | undefined {
  if (!imageKey) return undefined;
  return getImage(imageKey);
}

/**
 * Home hero — the large statement band. A navy ink surface with the value
 * proposition, one accent CTA and one secondary action. A real photograph
 * sits behind the copy under a solid navy scrim (a single overlay layer, not
 * a multi-stop gradient) so the Fraunces title is always AA-legible.
 */
export function Hero({
  eyebrow,
  title,
  intro,
  primary,
  secondary,
  imageKey,
}: HeroProps): ReactElement {
  const image = resolveImage(imageKey);

  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      {image ? (
        <>
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          {/* Solid navy duotone scrim: one flat layer for guaranteed contrast. */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-950/78" />
        </>
      ) : (
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink" />
      )}

      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">
              {eyebrow}
            </p>
          )}
          <h1
            className={cn(
              'text-display font-display text-ink-foreground',
              eyebrow ? 'mt-4' : undefined,
            )}
          >
            {title}
          </h1>
          <p className="mt-6 max-w-prose text-lg text-ink-muted-foreground sm:text-xl">
            {intro}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button to={primary.to} variant="accent" size="lg">
              {primary.label}
              <ArrowRight className="size-5" aria-hidden="true" strokeWidth={2} />
            </Button>
            {secondary && (
              <Button to={secondary.to} variant="secondary" size="lg">
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
