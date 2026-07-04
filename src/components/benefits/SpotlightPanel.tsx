import type { ReactElement } from 'react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';
import type { Spotlight } from './data';
import { Reveal } from './Reveal';

/**
 * Editorial benefit panel: a real photo beside the copy. Each benefit is told
 * twice on purpose, first as belonging (the lead line) and then as concrete
 * value (the muted line beneath), so the reader feels it and can justify it.
 * The photo and copy swap sides on alternate panels for rhythm.
 */
export function SpotlightPanel({ spotlight }: { spotlight: Spotlight }): ReactElement {
  const { eyebrow, title, belonging, value, photo, alt, align } = spotlight;
  const imageFirst = align === 'left';

  return (
    <Container>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <Reveal
          className={cn(
            'overflow-hidden rounded-lg border border-border shadow-card',
            imageFirst ? 'lg:order-1' : 'lg:order-2',
          )}
        >
          <img
            src={photo.lg}
            alt={alt}
            width={photo.w}
            height={photo.h}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] size-full object-cover"
          />
        </Reveal>

        <Reveal
          delay={0.08}
          className={cn('max-w-xl', imageFirst ? 'lg:order-2' : 'lg:order-1')}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-700">
            {eyebrow}
          </p>
          <h3 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">{title}</h3>
          <p className="mt-4 text-lg text-foreground">{belonging}</p>
          <p className="mt-3 text-base text-muted-foreground">{value}</p>
        </Reveal>
      </div>
    </Container>
  );
}
