import type { ReactElement } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EventCard } from '@/components/blocks/EventCard';
import { events } from '@/content/events';
import { Reveal } from './Reveal';

const upcoming = events.slice(0, 3);

/** Upcoming events on a paper surface. Falls back to an empty-state when none. */
export function EventsRail(): ReactElement {
  return (
    <section className="bg-background text-foreground section-y">
      <Container>
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What's on"
            title="Where the industry gathers next"
            intro="South Pacific networking functions, METSTRADE and the Millennium Cup. These are the dates worth putting in the diary."
            className="max-w-2xl"
          />
          <Link
            to="/events"
            className="inline-flex items-center gap-1.5 rounded-sm text-base font-medium text-link hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View all events
            <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>

        {upcoming.length > 0 ? (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event, index) => (
              <li key={event.slug} className="flex">
                <Reveal delay={index * 0.08} className="flex w-full">
                  <EventCard event={event} className="w-full" />
                </Reveal>
              </li>
            ))}
          </ul>
        ) : (
          <p className="rounded-lg border border-border bg-surface p-8 text-base text-muted-foreground">
            There are no events on the calendar right now. Check back soon, or talk to the team
            about what is coming up.
          </p>
        )}
      </Container>
    </section>
  );
}
