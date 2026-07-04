import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, CheckCircle2, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { photos } from '@/content/media';
import { site } from '@/content/site';

const welcomePhoto =
  photos.find((p) => p.slug === 'sites-10-2025-10-nz-marine-sywelcome-mcrawford-0565') ??
  photos.find((p) => p.theme === 'people' && p.orientation === 'landscape') ??
  photos[0];

/**
 * Warm success state shown after a simulated application submit. It confirms
 * receipt, sets a clear and reassuring expectation for what happens next, and
 * points the new applicant onward. No payment is taken or implied.
 */
export function JoinConfirmation({ company }: { company: string }): ReactElement {
  return (
    <div
      role="status"
      className="overflow-hidden rounded-lg border border-accent-200 bg-surface shadow-card"
    >
      <img
        src={welcomePhoto.lg}
        alt="NZ Marine members welcomed at an industry function on the water"
        width={welcomePhoto.w}
        height={welcomePhoto.h}
        loading="lazy"
        decoding="async"
        className="h-44 w-full object-cover sm:h-56"
      />
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 aria-hidden="true" className="mt-1 size-6 shrink-0 text-accent-700" />
          <div>
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">
              Welcome aboard{company ? `, ${company}` : ''}.
            </h2>
            <p className="mt-3 text-base text-foreground">
              We have your application and we are glad you want in. Someone from the team will be in
              touch within two working days to say hello, confirm the right membership for your
              business, and talk you through the next steps.
            </p>
            <p className="mt-3 text-base text-muted-foreground">
              Nothing has been charged. We agree your sector group and annual subscription with you
              before anything is invoiced. If you need us sooner, call the office on{' '}
              <a href={site.phoneHref} className="text-link underline-offset-2 hover:underline">
                {site.phone}
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="flex gap-3 rounded-md border border-border bg-surface-muted p-4">
            <Users aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent-700" />
            <div>
              <p className="text-sm font-semibold text-foreground">Meet your sector group</p>
              <p className="mt-1 text-sm text-muted-foreground">
                See where you will fit alongside other members.
              </p>
              <Link
                to="/membership/sector-groups"
                className="mt-2 inline-flex items-center gap-1 text-sm text-link underline-offset-2 hover:underline"
              >
                Find your people
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
          <div className="flex gap-3 rounded-md border border-border bg-surface-muted p-4">
            <CalendarDays aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent-700" />
            <div>
              <p className="text-sm font-semibold text-foreground">What is coming up</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Conferences, boat shows and season functions.
              </p>
              <Link
                to="/events"
                className="mt-2 inline-flex items-center gap-1 text-sm text-link underline-offset-2 hover:underline"
              >
                See upcoming events
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <Button to="/membership/benefits" variant="secondary" size="md">
            Explore your membership
          </Button>
        </div>
      </div>
    </div>
  );
}
