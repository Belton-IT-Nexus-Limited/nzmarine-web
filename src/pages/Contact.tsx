import type { ReactElement } from 'react';
import { Clock, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/blocks/PageHero';
import { site } from '@/content/site';

const officeHours = [
  { day: 'Monday to Friday', hours: '8.30am to 5.00pm' },
  { day: 'Saturday and Sunday', hours: 'Closed' },
];

/** Contact page: an accessible enquiry form beside the team's contact details. */
export function Contact(): ReactElement {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact us"
        intro="Whether you are looking at membership, planning an export push, bringing a yacht to New Zealand or asking about an event, tell us what you need and we will route it to the right person on the team."
        breadcrumb={[{ label: 'About', to: '/about' }, { label: 'Contact' }]}
      />

      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
            <div>
              <Eyebrow>Send an enquiry</Eyebrow>
              <p className="mt-3 max-w-prose text-lg text-muted-foreground">
                Fill in the form and pick the topic that fits best. Choosing a topic means your
                message lands with the right team straight away, so you hear back sooner.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <aside className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-lg border border-border bg-surface p-6 shadow-card">
                <h2 className="font-display text-xl text-foreground">Reach the office</h2>
                <ul className="mt-5 flex flex-col gap-5 text-sm">
                  <li className="flex gap-3.5">
                    <Phone
                      aria-hidden="true"
                      className="mt-0.5 size-[1.125rem] shrink-0 text-accent-700"
                    />
                    <span>
                      <span className="block font-semibold text-foreground">Phone</span>
                      <a
                        href={site.phoneHref}
                        className="text-link underline-offset-2 hover:underline"
                        aria-label={`Call the NZ Marine office on ${site.phone}`}
                      >
                        {site.phone}
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3.5">
                    <Mail
                      aria-hidden="true"
                      className="mt-0.5 size-[1.125rem] shrink-0 text-accent-700"
                    />
                    <span>
                      <span className="block font-semibold text-foreground">Email</span>
                      <a
                        href={`mailto:${site.email}`}
                        className="text-link underline-offset-2 hover:underline"
                        aria-label={`Email the NZ Marine office at ${site.email}`}
                      >
                        {site.email}
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3.5">
                    <MapPin
                      aria-hidden="true"
                      className="mt-0.5 size-[1.125rem] shrink-0 text-accent-700"
                    />
                    <span>
                      <span className="block font-semibold text-foreground">Office</span>
                      <address className="not-italic text-foreground">
                        {site.address.line1}
                        <br />
                        {site.address.city}, {site.address.country}
                      </address>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-surface-muted p-6">
                <div className="flex items-center gap-2.5">
                  <Clock aria-hidden="true" className="size-[1.125rem] shrink-0 text-accent-700" />
                  <h2 className="font-display text-xl text-foreground">Office hours</h2>
                </div>
                <dl className="mt-4 flex flex-col gap-2 text-sm">
                  {officeHours.map((slot) => (
                    <div key={slot.day} className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">{slot.day}</dt>
                      <dd className="font-medium text-foreground">{slot.hours}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-sm text-muted-foreground">
                  Hours are New Zealand time. Send the form any time and we will reply on the next
                  working day.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-surface p-6 shadow-card">
                <h2 className="font-display text-base text-foreground">Follow NZ Marine</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Industry news, events and member updates as they happen.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={site.social.linkedin}
                    className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-3.5 py-2 text-sm font-medium text-foreground transition-colors duration-fast hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Linkedin aria-hidden="true" className="size-[1.125rem] text-accent-700" />
                    NZ Marine on LinkedIn
                  </a>
                  <a
                    href={site.social.facebook}
                    className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-3.5 py-2 text-sm font-medium text-foreground transition-colors duration-fast hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Facebook aria-hidden="true" className="size-[1.125rem] text-accent-700" />
                    NZ Marine on Facebook
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
