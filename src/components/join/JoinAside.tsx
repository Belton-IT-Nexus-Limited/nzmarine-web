import type { ReactElement } from 'react';
import { BadgeCheck, Clock, Handshake, PhoneCall, Quote, ShieldCheck } from 'lucide-react';
import { benefits } from '@/content/benefits';
import { photos } from '@/content/media';
import { site } from '@/content/site';

type Step = {
  icon: typeof Clock;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    icon: Clock,
    title: 'You apply online',
    body: 'Fill in the form. It takes about five minutes and you do not need to attach anything.',
  },
  {
    icon: PhoneCall,
    title: 'We get in touch',
    body: 'Someone from the team replies within two working days to say hello and answer any questions.',
  },
  {
    icon: Handshake,
    title: 'We sort your subscription',
    body: 'Your annual fee depends on the size of your business, and we set it out clearly before anything is invoiced.',
  },
  {
    icon: BadgeCheck,
    title: 'You are welcomed in',
    body: 'You become a Recognised Member, can use the mark, and we introduce you to your sector group.',
  },
];

const faceSlugs = [
  '2025-12-nz-marine-sy-welcome25-cp-1030',
  '2018-11-nfp-180309-344',
  'sites-10-2026-03-mets-stand-2025',
  '2025-08-conference-pic-2025',
];

const faces = faceSlugs
  .map((slug) => photos.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const topBenefits = benefits.slice(0, 4);

/** Reassurance rail beside the form: the welcome, what happens next, and proof. */
export function JoinAside(): ReactElement {
  return (
    <aside className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
      <section className="overflow-hidden rounded-lg border border-border bg-surface shadow-card">
        {faces.length > 0 ? (
          <div className="grid grid-cols-2 gap-px bg-border">
            {faces.map((photo) => (
              <img
                key={photo.slug}
                src={photo.sm}
                alt="NZ Marine members at an industry function"
                width={photo.w}
                height={photo.h}
                loading="lazy"
                decoding="async"
                className="h-32 w-full object-cover sm:h-36"
              />
            ))}
          </div>
        ) : null}
        <div className="p-6">
          <Quote aria-hidden="true" className="size-6 text-accent-700" />
          <blockquote className="mt-3 text-base text-foreground">
            <p>
              The value is in the room. You meet the people who decide where work goes, you share
              the cost of reaching overseas buyers, and you stop solving the same problems on your
              own.
            </p>
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground">
            What members tell us they get out of belonging to NZ Marine.
          </p>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-surface-muted p-6">
        <h2 className="font-display text-xl text-foreground">What happens after you apply</h2>
        <ol className="mt-5 flex flex-col gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="flex gap-3.5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface text-accent-700 shadow-xs">
                  <Icon aria-hidden="true" className="size-[1.125rem]" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {index + 1}. {step.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="rounded-lg border border-border bg-surface p-6 shadow-card">
        <h2 className="font-display text-xl text-foreground">What you join</h2>
        <ul className="mt-4 flex flex-col gap-3">
          {topBenefits.map((benefit) => (
            <li key={benefit.title} className="flex gap-2.5 text-sm text-foreground">
              <BadgeCheck
                aria-hidden="true"
                className="mt-0.5 size-[1.125rem] shrink-0 text-accent-700"
              />
              <span>{benefit.title}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-muted-foreground">
          Alongside more than {site.memberCount} member companies across the New Zealand marine
          industry.
        </p>
      </section>

      <section className="rounded-lg border border-border bg-surface p-6 shadow-card">
        <h2 className="flex items-center gap-2 font-display text-base text-foreground">
          <ShieldCheck aria-hidden="true" className="size-5 text-accent-700" />
          No payment today
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Applying does not commit you to anything. We agree your sector group and annual
          subscription with you first, and nothing is invoiced until you say yes.
        </p>
      </section>

      <section className="rounded-lg border border-border bg-surface p-6 shadow-card">
        <h2 className="font-display text-base text-foreground">Prefer to talk first?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Call the office on{' '}
          <a href={site.phoneHref} className="text-link underline-offset-2 hover:underline">
            {site.phone}
          </a>{' '}
          or email{' '}
          <a
            href={`mailto:${site.email}`}
            className="text-link underline-offset-2 hover:underline"
          >
            {site.email}
          </a>
          . We are happy to walk you through it.
        </p>
      </section>
    </aside>
  );
}
