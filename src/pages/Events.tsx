import type { ReactElement } from 'react';
import { CalendarClock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABand } from '@/components/blocks/CTABand';
import { EventCard } from '@/components/blocks/EventCard';
import { PageHero } from '@/components/blocks/PageHero';
import { events } from '@/content/events';
import { site } from '@/content/site';
import type { EventItem } from '@/content/types';

const breadcrumb = [{ label: 'Home', to: '/' }, { label: 'Events' }];

/** Returns the start of today in UTC so an event running today still counts as upcoming. */
function startOfTodayUtc(): number {
  const now = new Date();
  return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
}

/** Upcoming events, soonest first. Anything dated before today drops to the past list. */
function splitEvents(all: EventItem[]): { upcoming: EventItem[]; past: EventItem[] } {
  const today = startOfTodayUtc();
  const upcoming: EventItem[] = [];
  const past: EventItem[] = [];
  for (const event of all) {
    if (Date.parse(event.date) >= today) {
      upcoming.push(event);
    } else {
      past.push(event);
    }
  }
  upcoming.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  return { upcoming, past };
}

/** Shown when nothing is on the calendar yet, so the page never reads as broken. */
function EmptyState(): ReactElement {
  return (
    <div className="mx-auto max-w-[44rem] rounded-lg border border-border bg-surface p-8 text-center shadow-card sm:p-10"> {/* slop-scan-ignore: short isolated empty-state card, intentionally centred. */}
      <span
        aria-hidden="true"
        className="inline-flex size-12 items-center justify-center rounded-full bg-accent-50 text-accent-700"
      >
        <CalendarClock size={22} strokeWidth={2} />
      </span>
      <h2 className="mt-5 font-display text-2xl text-foreground">No events on the calendar right now</h2>
      <p className="mt-3 text-base text-muted-foreground">
        The next round of networking functions, trade shows and the superyacht season is being
        planned. Tell us you want to hear when dates open and we will email you before registrations
        go live.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button to="/contact" variant="primary">
          <Mail aria-hidden="true" />
          Get event updates
        </Button>
        <Button to="/membership" variant="secondary">
          Become a member
        </Button>
      </div>
    </div>
  );
}

export function Events(): ReactElement {
  const { upcoming, past } = splitEvents(events);
  const hasUpcoming = upcoming.length > 0;

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Where the New Zealand marine industry meets"
        intro="One place for every NZ Marine event, from South Pacific networking functions and the world's largest equipment trade show to the superyacht regatta and the Auckland Boat Show. Each listing carries a price guide and a direct path to register."
        imageKey="networkingEvent"
        breadcrumb={breadcrumb}
        actions={
          hasUpcoming ? (
            <Button href="#upcoming" variant="accent" size="lg">
              See upcoming events
            </Button>
          ) : undefined
        }
      />

      <Section tone="paper" id="upcoming">
        <Container>
          <SectionHeading
            eyebrow="Upcoming"
            title="What's on next"
            intro="Listed soonest first. Open an event to read the detail, check the price for members and non-members, and register your place."
            className="mb-10"
          />

          {hasUpcoming ? (
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((event) => (
                <li key={event.slug} className="flex">
                  <EventCard event={event} className="w-full" />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState />
          )}
        </Container>
      </Section>

      {past.length > 0 ? (
        <Section tone="muted" spacing="sm">
          <Container size="prose">
            <h2 className="font-display text-2xl text-foreground">Past events</h2>
            <p className="mt-3 text-base text-muted-foreground">
              These events have already run. Most are annual, so they will return on a similar date
              next season. If you would like the dates for the next one, get in touch with the team
              on{' '}
              <a
                href={site.phoneHref}
                className="text-link underline-offset-2 hover:underline focus-visible:underline focus-visible:outline-none"
              >
                {site.phone}
              </a>
              .
            </p>
            <ul className="mt-5 divide-y divide-border border-t border-border">
              {past.map((event) => (
                <li
                  key={event.slug}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
                >
                  <span className="text-base font-medium text-foreground">{event.title}</span>
                  <span className="text-sm text-muted-foreground">{event.dateLabel}</span>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <CTABand
        title="Run a stand or sponsor an event?"
        body="NZ Marine members get discounted stand space at the boat show, a place on the METSTRADE pavilion and an introduction to the right captains and crew at our networking functions. Talk to us about taking part."
        primary={{ label: 'Talk to the events team', to: '/contact' }}
        secondary={{ label: 'See member benefits', to: '/membership/benefits' }}
      />
    </>
  );
}
