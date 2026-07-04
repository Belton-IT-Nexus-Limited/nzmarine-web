import type { ReactElement, ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { getImage, type ImageAsset } from '@/content/images';
import { cn } from '@/lib/cn';
import { Breadcrumbs, type BreadcrumbItem } from './Breadcrumbs';

export type PageHeroProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Key into the image manifest. Missing keys fall back to a plain navy band. */
  imageKey?: string;
  /** Optional action buttons (compose <Button/> at the call site). */
  actions?: ReactNode;
  breadcrumb?: BreadcrumbItem[];
};

function resolveImage(imageKey?: string): ImageAsset | undefined {
  if (!imageKey) return undefined;
  return getImage(imageKey);
}

/**
 * Compact inner-page hero. A navy ink band carrying the breadcrumb, title,
 * optional intro and actions. When an image is supplied it sits beside the
 * copy on wide screens, under a solid navy scrim so the heading stays AA.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  imageKey,
  actions,
  breadcrumb,
}: PageHeroProps): ReactElement {
  const image = resolveImage(imageKey);

  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      {image ? (
        <>
          <img
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            loading="eager"
            decoding="async"
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          {/* Solid navy scrim (single layer, not a gradient) for AA legibility. */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-950/80" />
        </>
      ) : (
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink" />
      )}

      <Container className="py-12 sm:py-16 lg:py-20">
        {breadcrumb && breadcrumb.length > 0 && (
          <Breadcrumbs items={breadcrumb} onInk className="mb-6" />
        )}
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">
              {eyebrow}
            </p>
          )}
          <h1
            className={cn(
              'text-display-sm font-display text-ink-foreground',
              eyebrow ? 'mt-3' : undefined,
            )}
          >
            {title}
          </h1>
          {intro && (
            <p className="mt-4 max-w-prose text-lg text-ink-muted-foreground">{intro}</p>
          )}
          {actions && <div className="mt-7 flex flex-wrap items-center gap-3">{actions}</div>}
        </div>
      </Container>
    </section>
  );
}
