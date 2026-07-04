import type { ReactElement } from 'react';
import {
  ArrowRight,
  BookOpen,
  Download,
  FileBarChart,
  Newspaper,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABand } from '@/components/blocks/CTABand';
import { PageHero } from '@/components/blocks/PageHero';
import { publications } from '@/content/publications';
import { site } from '@/content/site';
import type { Publication, PublicationType } from '@/content/types';

const typeIcon: Record<PublicationType, LucideIcon> = {
  Guide: BookOpen,
  Magazine: Newspaper,
  Report: FileBarChart,
  Policy: ShieldCheck,
};

const featured = publications[0];
const rest = publications.slice(1);

/** Action verb for the download link, matched to the publication type. */
function downloadLabel(type: PublicationType): string {
  return type === 'Policy' ? 'Read the Code of Ethics' : `Download the ${type.toLowerCase()}`;
}

function PublicationCard({ item }: { item: Publication }): ReactElement {
  const Icon = typeIcon[item.type];
  return (
    <Card as="article" className="flex h-full flex-col">
      <CardBody className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <span className="flex size-10 items-center justify-center rounded-md bg-surface-muted text-accent-700">
            <Icon aria-hidden="true" className="size-[1.25rem]" />
          </span>
          <Badge tone="neutral">{item.type}</Badge>
        </div>
        <h3 className="mt-5 font-display text-xl text-foreground">{item.title}</h3>
        <p className="mt-2 text-base text-muted-foreground">{item.description}</p>
        <a
          href={item.href ?? '#'}
          className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-link underline-offset-4 hover:underline"
        >
          <Download aria-hidden="true" className="size-4" />
          {downloadLabel(item.type)}
        </a>
      </CardBody>
    </Card>
  );
}

/** Publications hub: the cruising guide, the magazine, the annual report and the Code of Ethics. */
export function Publications(): ReactElement {
  const FeaturedIcon = typeIcon[featured.type];

  return (
    <>
      <PageHero
        eyebrow="Publications"
        title="Publications"
        intro="The guides, magazine and reports we publish for members, visiting yachts and the wider industry. Each one is free to download."
        breadcrumb={[{ label: 'About', to: '/about' }, { label: 'Publications' }]}
      />

      <Section tone="paper">
        <Container>
          <SectionHeading
            eyebrow="Featured"
            title="Destination &amp; Cruising New Zealand"
            intro="Our guide for visiting yachts, from clearing customs and biosecurity to finding a refit yard and choosing where to cruise once you arrive."
          />
          <Card as="article" className="mt-10 overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.4fr_1fr]">
              <CardBody className="flex flex-col justify-center gap-5 p-8 lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-md bg-accent-50 text-accent-700">
                    <FeaturedIcon aria-hidden="true" className="size-[1.4rem]" />
                  </span>
                  <Badge tone="accent">{featured.type}</Badge>
                </div>
                <h3 className="font-display text-2xl text-foreground sm:text-3xl">
                  Destination &amp; Cruising New Zealand
                </h3>
                <p className="max-w-prose text-lg text-muted-foreground">{featured.description}</p>
                <ul className="flex flex-col gap-2 text-sm text-foreground">
                  <li>Customs, biosecurity and arrival in New Zealand waters</li>
                  <li>Refit, repair and servicing options across the country</li>
                  <li>Cruising grounds from the Bay of Islands to Fiordland</li>
                </ul>
                <a
                  href={featured.href ?? '#'}
                  className="inline-flex items-center gap-1.5 self-start text-base font-medium text-link underline-offset-4 hover:underline"
                >
                  <Download aria-hidden="true" className="size-[1.125rem]" />
                  Download the guide
                </a>
              </CardBody>
              <div className="flex items-center justify-center bg-ink p-10 text-ink-foreground">
                <div className="max-w-xs text-center"> {/* slop-scan-ignore: short caption in a narrow panel, not running text */}
                  <FeaturedIcon
                    aria-hidden="true"
                    className="mx-auto size-12 text-accent-300"
                  />
                  <p className="mt-4 font-display text-lg text-ink-foreground">
                    Planning a passage to New Zealand?
                  </p>
                  <p className="mt-2 text-sm text-ink-muted-foreground">
                    Start with the cruising guide, then talk to the team about a refit slot.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow="More from NZ Marine"
            title="The rest of our library"
            intro="News from across the industry, a yearly account of the association&rsquo;s work, and the standard every Recognised Member signs up to."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((item) => (
              <PublicationCard key={item.title} item={item} />
            ))}
          </div>
          <p className="mt-8 max-w-prose text-base text-muted-foreground">
            Members can submit a story or advertise in the next issue of NZ Marine News. Email{' '}
            <a
              href={`mailto:${site.email}`}
              className="text-link underline-offset-2 hover:underline"
            >
              {site.email}
            </a>{' '}
            and we will put you in touch with the editor.
          </p>
        </Container>
      </Section>

      <Section tone="paper" spacing="sm">
        <Container>
          <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="max-w-prose">
              <h2 className="font-display text-xl text-foreground">Looking for back issues?</h2>
              <p className="mt-2 text-base text-muted-foreground">
                Past issues of NZ Marine News are kept in the members&rsquo; area. Ask the office and
                we will send you the link.
              </p>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex shrink-0 items-center gap-1.5 text-base font-medium text-link underline-offset-4 hover:underline"
            >
              Request back issues
              <ArrowRight aria-hidden="true" className="size-[1.125rem]" />
            </a>
          </div>
        </Container>
      </Section>

      <CTABand
        title="Join more than 500 marine companies"
        body="Membership puts your business in the directory, in front of visiting yachts and in the room when the industry sets its direction."
        primary={{ label: 'Join NZ Marine', to: '/join' }}
        secondary={{ label: 'See member benefits', to: '/membership/benefits' }}
      />
    </>
  );
}
