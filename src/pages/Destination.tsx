import type { ReactElement } from 'react';
import { BookOpen, Compass, Download, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHero } from '@/components/blocks/PageHero';
import { FeatureGrid, type FeatureItem } from '@/components/blocks/FeatureGrid';
import { StatBand, type StatBandStat } from '@/components/blocks/StatBand';
import { CTABand } from '@/components/blocks/CTABand';
import { EnquiryForm } from '@/components/destination/EnquiryForm';
import { images } from '@/content/images';

/** The interactive Destination & Cruising New Zealand guide, hosted by NZ Marine. */
const guideHref = 'https://www.nzmarine.com/destination-nz/';

const cruisingGrounds: FeatureItem[] = [
  {
    icon: 'Sailboat',
    title: 'The Hauraki Gulf',
    body: 'Sheltered islands, deep anchorages and a marine park on Auckland’s doorstep. The city is the main port of entry, with full provisioning, fuel and crew services within an hour of your berth.',
  },
  {
    icon: 'Compass',
    title: 'The Bay of Islands',
    body: 'Around 140 islands of clear water, sandy bays and good holding in the subtropical north. A short passage from Auckland and a favourite first stop for owners arriving from the Pacific.',
  },
  {
    icon: 'Mountain',
    title: 'Fiordland',
    body: 'Deep sounds, waterfalls and near-empty cruising grounds in the far south west. Remote and demanding, and one of the few places on the planet a large yacht can have entirely to itself.',
  },
];

const visitStats: StatBandStat[] = [
  {
    value: '160m',
    label: 'Vessels refit and serviced',
    sublabel: 'Yards rated to superyachts up to about 160 metres',
  },
  {
    value: '100+',
    label: 'Member companies',
    sublabel: 'Refit, engineering, provisioning and crew services',
  },
  {
    value: '1,000',
    label: 'Miles of coastline',
    sublabel: 'Between the subtropical north and the far south',
  },
  {
    value: '60+',
    label: 'Years of industry',
    sublabel: 'A national body backing the work since the 1960s',
  },
];

interface OfferItem {
  Icon: typeof BookOpen;
  title: string;
  body: string;
}

const offer: OfferItem[] = [
  {
    Icon: BookOpen,
    title: 'Destination & Cruising New Zealand',
    body: 'The guide our members and government partners put together for visiting yachts. It maps the cruising regions, the ports of entry and what each part of the coast is like to sail, in print and as an interactive edition.',
  },
  {
    Icon: Compass,
    title: 'A directory of 100+ member companies',
    body: 'The yards, engineers, riggers, sailmakers, provisioners and agents that look after visiting craft. Every company sits inside NZ Marine, so you are dealing with businesses that answer to the same Code of Ethics.',
  },
  {
    Icon: ShieldCheck,
    title: 'Customs, biosecurity and clearance guidance',
    body: 'Current information on the regulatory requirements for arriving in New Zealand, from customs and immigration to biosecurity, written for owners and crew rather than buried in agency PDFs.',
  },
];

function OfferCard({ item }: { item: OfferItem }): ReactElement {
  const { Icon } = item;
  return (
    <li className="flex h-full flex-col rounded-lg border border-border bg-surface p-6 shadow-card">
      <span
        aria-hidden="true"
        className="inline-flex size-11 items-center justify-center rounded-md bg-accent-50 text-accent-700"
      >
        <Icon size={20} strokeWidth={2} />
      </span>
      <h3 className="mt-5 font-display text-xl text-foreground">{item.title}</h3>
      <p className="mt-2 text-base text-muted-foreground">{item.body}</p>
    </li>
  );
}

/** Destination New Zealand: the premium page for visiting superyacht owners and captains. */
export function Destination(): ReactElement {
  return (
    <>
      <PageHero
        eyebrow="Destination & Cruising New Zealand"
        title="Plan a superyacht visit to New Zealand"
        intro="New Zealand is the South Pacific hub for refit, servicing and cruising. Bring your yacht south for the season and you have world-leading yards, sheltered cruising grounds and a national body that can put you in front of the right people."
        imageKey="cruisingBay"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Destination New Zealand' }]}
        actions={
          <>
            <Button to="/contact" variant="accent" size="lg">
              Plan your visit
            </Button>
            <Button
              href={guideHref}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              size="lg"
              className="text-ink-foreground hover:bg-ink-surface"
            >
              <Download aria-hidden="true" />
              Download the guide
            </Button>
          </>
        }
      />

      <Section tone="paper">
        <Container>
          <SectionHeading
            eyebrow="Why New Zealand"
            title="A season here, then the cruising grounds to match"
            intro="Owners arriving from the Pacific find a country built for visiting yachts, with the refit capability of a major hub and the kind of coastline most destinations cannot offer. Within about a thousand miles you can go from subtropical islands in the north to the deep sounds of Fiordland in the far south."
          />
        </Container>
        <FeatureGrid items={cruisingGrounds} columns={3} className="mt-12" />
      </Section>

      <StatBand stats={visitStats} tone="ink" />

      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow="What we offer"
            title="What Destination & Cruising New Zealand gives you"
            intro="NZ Marine produces the guide, keeps the member directory current and helps with the practical side of arriving. It is the work of our members, Tourism New Zealand and the relevant government departments, in one place rather than scattered across agency websites."
          />
          <ul className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {offer.map((item) => (
              <OfferCard key={item.title} item={item} />
            ))}
          </ul>
          <div className="mt-10">
            <Button href={guideHref} target="_blank" rel="noreferrer" variant="secondary" size="lg">
              <Download aria-hidden="true" />
              Download Destination &amp; Cruising New Zealand
            </Button>
          </div>
        </Container>
      </Section>

      <Section tone="paper" spacing="sm">
        <Container>
          <figure className="overflow-hidden rounded-xl border border-border shadow-card">
            <img
              src={images.aucklandHarbour.src}
              alt={images.aucklandHarbour.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[16/7] w-full object-cover"
            />
            <figcaption className="bg-surface px-5 py-4 text-sm text-muted-foreground">
              Auckland’s Waitematā Harbour, the main port of entry for visiting superyachts and the
              base for most refit and provisioning work.
            </figcaption>
          </figure>
        </Container>
      </Section>

      <Section tone="muted" id="enquire">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Plan your visit"
                title="Talk to the destination team"
                intro="Tell us what you have in mind for the season and we will point you to the right yards, agents and services. There is no obligation, and your enquiry goes straight to the people who can help."
                as="h2"
              />
              <p className="mt-6 text-base text-muted-foreground">
                Prefer to reach us directly? Email{' '}
                <a
                  href="mailto:info@nzmarine.com"
                  className="font-medium text-link underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  info@nzmarine.com
                </a>{' '}
                or call +64 9 360 0056.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6 shadow-card sm:p-8">
              <EnquiryForm />
            </div>
          </div>
        </Container>
      </Section>

      <CTABand
        title="Bring your yacht to New Zealand"
        body="Start a conversation with the destination team, or browse the member directory to find the yards and services that suit your refit."
        primary={{ label: 'Plan your visit', to: '/contact' }}
        secondary={{ label: 'Find a member company', to: '/directory' }}
      />
    </>
  );
}
