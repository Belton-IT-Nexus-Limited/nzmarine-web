import type { ReactElement, ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/blocks/Breadcrumbs';
import type { Photo } from '@/content/media';

export type RecognisedHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  photo: Photo;
  alt: string;
  actions: ReactNode;
  breadcrumb: BreadcrumbItem[];
};

/**
 * Image-led page hero on the navy ink surface. A real landscape photograph
 * fills the frame under a single flat navy scrim so the Fraunces h1 always
 * clears AA. Carries the breadcrumb, the page intro and one accent CTA.
 */
export function RecognisedHero({
  eyebrow,
  title,
  intro,
  photo,
  alt,
  actions,
  breadcrumb,
}: RecognisedHeroProps): ReactElement {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <img
        src={photo.lg}
        alt={alt}
        width={photo.w}
        height={photo.h}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-950/78" />

      <Container className="py-14 sm:py-20 lg:py-24">
        <Breadcrumbs items={breadcrumb} onInk className="mb-6" />
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-300">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-display-sm text-ink-foreground">{title}</h1>
          <p className="mt-5 max-w-prose text-lg text-ink-foreground/90">{intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>
        </div>
      </Container>
    </section>
  );
}
