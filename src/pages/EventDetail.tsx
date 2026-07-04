import { useRef, useState, type FormEvent, type ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { CalendarDays, CheckCircle2, MapPin, Ticket, Users } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Field, FormRow, Input, Select, Textarea } from '@/components/ui/Field';
import { PageHero } from '@/components/blocks/PageHero';
import { getEventBySlug } from '@/content/events';
import type { EventItem } from '@/content/types';

/** Single event page with a clear price and a working registration form. */
export function EventDetail(): ReactElement {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? getEventBySlug(slug) : undefined;

  if (!event) {
    return <EventNotFound />;
  }

  return <EventView event={event} />;
}

function EventNotFound(): ReactElement {
  return (
    <Section tone="paper">
      <Container size="prose">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">
          Event
        </p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl">
          We could not find that event
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The event you are looking for may have already run, or the link could
          be out of date. You can see everything coming up on the events page.
        </p>
        <div className="mt-7">
          <Button to="/events" variant="primary">
            See upcoming events
          </Button>
        </div>
      </Container>
    </Section>
  );
}

function EventView({ event }: { event: EventItem }): ReactElement {
  const formRef = useRef<HTMLDivElement>(null);

  function scrollToForm(): void {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <PageHero
        eyebrow="Event"
        title={event.title}
        intro={event.summary}
        imageKey={event.imageKey}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Events', to: '/events' },
          { label: event.title },
        ]}
        actions={
          <Button variant="accent" onClick={scrollToForm}>
            <Ticket aria-hidden="true" />
            Register for this event
          </Button>
        }
      />

      <Section tone="paper">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14">
            <article className="max-w-[44rem]">
              <EventMeta event={event} />
              <div className="mt-8 flex flex-col gap-5 text-lg text-foreground">
                {event.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </article>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <PricingPanel event={event} onRegister={scrollToForm} />
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="muted" spacing="sm">
        <Container size="prose">
          <div ref={formRef} className="scroll-mt-24">
            <RegistrationForm event={event} />
          </div>
        </Container>
      </Section>
    </>
  );
}

function EventMeta({ event }: { event: EventItem }): ReactElement {
  return (
    <dl className="grid gap-4 border-y border-border py-5 sm:grid-cols-3">
      <MetaItem icon={<CalendarDays aria-hidden="true" />} term="Date">
        <time dateTime={event.date}>{event.dateLabel}</time>
      </MetaItem>
      <MetaItem icon={<MapPin aria-hidden="true" />} term="Location">
        {event.location}
      </MetaItem>
      <MetaItem icon={<Users aria-hidden="true" />} term="Who it is for">
        {event.audience}
      </MetaItem>
    </dl>
  );
}

function MetaItem({
  icon,
  term,
  children,
}: {
  icon: ReactElement;
  term: string;
  children: ReactElement | string;
}): ReactElement {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-accent-700 [&_svg]:size-5">{icon}</span>
      <div>
        <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {term}
        </dt>
        <dd className="mt-1 text-base text-foreground">{children}</dd>
      </div>
    </div>
  );
}

function PricingPanel({
  event,
  onRegister,
}: {
  event: EventItem;
  onRegister: () => void;
}): ReactElement {
  return (
    <Card>
      <CardBody className="flex flex-col gap-5">
        <div>
          <Badge tone="accent">Registration</Badge>
          <p className="mt-3 font-display text-3xl text-foreground tabular-nums">
            {event.priceFrom}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Prices are in New Zealand dollars and include GST.
          </p>
        </div>
        <dl className="flex flex-col gap-2 border-t border-border pt-4 text-sm">
          <PriceRow term="Date" value={event.dateLabel} />
          <PriceRow term="Location" value={event.location} />
          <PriceRow term="Who it is for" value={event.audience} />
        </dl>
        <Button variant="primary" className="w-full" onClick={onRegister}>
          <Ticket aria-hidden="true" />
          Register for this event
        </Button>
        <p className="text-sm text-muted-foreground">
          Member companies pay the member rate. If you are not yet a member and
          want to come along, choose the non-member option on the form.
        </p>
      </CardBody>
    </Card>
  );
}

function PriceRow({ term, value }: { term: string; value: string }): ReactElement {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-muted-foreground">{term}</dt>
      <dd className="text-right font-medium text-foreground">{value}</dd>
    </div>
  );
}

function RegistrationForm({ event }: { event: EventItem }): ReactElement {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(formEvent: FormEvent<HTMLFormElement>): void {
    formEvent.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card>
        <CardBody className="flex flex-col items-start gap-4">
          <CheckCircle2 aria-hidden="true" className="size-9 text-accent-700" />
          <div>
            <h2 className="font-display text-2xl text-foreground">
              Thanks, your registration is in
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              We have your details for {event.title}. Our events team will email
              you to confirm your place and, where a payment is due, send an
              invoice. Nothing is charged on this page.
            </p>
          </div>
          <Button to="/events" variant="secondary">
            Back to all events
          </Button>
        </CardBody>
      </Card>
    );
  }

  return (
    <div>
      <h2 className="font-display text-2xl text-foreground sm:text-3xl">
        Register for {event.title}
      </h2>
      <p className="mt-3 text-lg text-muted-foreground">
        Tell us who is coming and we will confirm your place by email. No payment
        is taken here. We invoice members directly where a fee applies.
      </p>
      <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit} noValidate={false}>
        <FormRow>
          <Field label="Full name" required>
            <Input name="name" autoComplete="name" required />
          </Field>
          <Field label="Email" required>
            <Input name="email" type="email" autoComplete="email" required />
          </Field>
        </FormRow>
        <Field label="Company" required>
          <Input name="company" autoComplete="organization" required />
        </Field>
        <Field
          label="Ticket type"
          required
          hint="Member companies pay the member rate."
        >
          <Select name="ticketType" defaultValue="member" required>
            <option value="member">NZ Marine member</option>
            <option value="non-member">Non-member guest</option>
          </Select>
        </Field>
        <Field
          label="Dietary or access requirements"
          hint="Let us know about allergies, dietary needs or anything else we should plan for."
        >
          <Textarea name="dietary" rows={4} />
        </Field>
        <div className="pt-1">
          <Button type="submit" variant="primary" size="lg">
            <Ticket aria-hidden="true" />
            Confirm my registration
          </Button>
        </div>
      </form>
    </div>
  );
}
