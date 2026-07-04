import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';
import { Card, CardBody } from '@/components/ui/Card';
import { getImage, type ImageAsset } from '@/content/images';
import type { EventItem } from '@/content/types';
import { cn } from '@/lib/cn';

export type EventCardProps = {
  event: EventItem;
  className?: string;
};

function resolveImage(imageKey: string): ImageAsset | undefined {
  return getImage(imageKey);
}

/** Splits the human date label into day-of-month and the remainder for the chip. */
function dateChip(iso: string): { day: string; month: string } {
  const parsed = new Date(iso);
  const day = String(parsed.getUTCDate());
  const month = parsed.toLocaleDateString('en-NZ', { month: 'short', timeZone: 'UTC' });
  return { day, month };
}

/**
 * Upcoming-event card. The image and date chip are decorative context; the
 * title carries a stretched link so the whole card is one keyboard-reachable
 * target leading to the event detail page.
 */
export function EventCard({ event, className }: EventCardProps): ReactElement {
  const image = resolveImage(event.imageKey);
  const chip = dateChip(event.date);

  return (
    <Card as="article" interactive className={cn('group relative flex flex-col overflow-hidden', className)}>
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-muted">
        {image ? (
          <img
            src={image.src}
            alt={`${event.title}, ${event.location}`}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        ) : (
          <div aria-hidden="true" className="size-full bg-ink" />
        )}
        <div className="absolute left-4 top-4 flex flex-col items-center rounded-md bg-surface px-3 py-1.5 shadow-card">
          <span className="font-display text-xl leading-none text-foreground tabular-nums">
            {chip.day}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-accent-700">
            {chip.month}
          </span>
        </div>
      </div>

      <CardBody className="flex flex-1 flex-col">
        <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={16} aria-hidden="true" className="text-accent-700" />
            {event.dateLabel}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={16} aria-hidden="true" className="text-accent-700" />
            {event.location}
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl text-foreground">
          <Link
            to={`/events/${event.slug}`}
            className="rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            {event.title}
          </Link>
        </h3>

        <p className="mt-2 text-base text-muted-foreground">{event.summary}</p>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4">
          <span className="text-sm font-medium text-foreground">{event.priceFrom}</span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-link group-hover:underline">
            View event
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform motion-safe:group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </CardBody>
    </Card>
  );
}
