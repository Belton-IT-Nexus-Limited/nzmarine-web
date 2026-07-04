import type { ReactElement } from 'react';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import type { SectorGroup } from '@/content/types';
import { cn } from '@/lib/cn';
import { contentForSlug } from './groupContent';
import { Reveal } from './Reveal';

export type SectorCommunityProps = {
  group: SectorGroup;
  /** Even rows put the image first, odd rows put it second, for a woven rhythm. */
  index: number;
};

/**
 * One sector group presented as a community you can belong to. A real photo sits
 * beside the copy, the sides alternate down the page, and the panel never relies
 * on colour alone (icon + heading + check rows carry the meaning).
 */
export function SectorCommunity({ group, index }: SectorCommunityProps): ReactElement {
  const detail = contentForSlug(group.slug);
  const Icon = detail.icon;
  const imageFirst = index % 2 === 0;

  return (
    <Reveal>
      <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div
          className={cn(
            'overflow-hidden rounded-lg border border-border shadow-card',
            imageFirst ? 'lg:order-1' : 'lg:order-2',
          )}
        >
          <img
            src={detail.photo.lg}
            alt={detail.alt}
            width={detail.photo.w}
            height={detail.photo.h}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] size-full object-cover"
          />
        </div>

        <div className={cn('max-w-xl', imageFirst ? 'lg:order-2' : 'lg:order-1')}>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-flex size-11 items-center justify-center rounded-md bg-accent-50 text-accent-700"
            >
              <Icon size={22} strokeWidth={2} />
            </span>
            {detail.spotlight ? <Badge tone="accent">Carrying NZ to the world</Badge> : null}
          </div>

          <h3 className="mt-5 font-display text-2xl text-foreground sm:text-3xl">{group.name}</h3>
          <p className="mt-3 text-lg font-medium text-foreground">{detail.whoItsFor}</p>
          <p className="mt-3 text-base text-muted-foreground">{group.summary}</p>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-accent-700">
            What you get
          </p>
          <ul className="mt-3 flex flex-col gap-3">
            {detail.whatYouGet.map((item) => (
              <li key={item} className="flex gap-3 text-base text-foreground">
                <Check
                  size={20}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-accent-700"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}
