import type { ReactElement } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABand } from '@/components/blocks/CTABand';
import { FeatureGrid, type FeatureItem } from '@/components/blocks/FeatureGrid';
import { RecognisedHero } from '@/components/recognised/RecognisedHero';
import { MarkExplainer } from '@/components/recognised/MarkExplainer';
import { CodeDownloads } from '@/components/recognised/CodeDownloads';
import { MemberProofWall } from '@/components/recognised/MemberProofWall';
import { photos } from '@/content/media';

const breadcrumb = [
  { label: 'Home', to: '/' },
  { label: 'Membership', to: '/membership' },
  { label: 'Recognised Members' },
];

const heroPhoto =
  photos.find((p) => p.slug === 'sites-10-2026-05-wynyard-wharf-outside-stands') ?? photos[0];
const explainerPhoto =
  photos.find((p) => p.slug === '2026-04-hutchwilco-nz-boat-show-sat-17may2025-3600px') ?? photos[0];

const assurances: FeatureItem[] = [
  {
    icon: 'ShieldCheck',
    title: 'Integrity in every deal',
    body: 'Recognised Members agree to deal honestly and fairly with you, whether you are buying a boat, a part or a service. The Code holds them to it.',
  },
  {
    icon: 'Wrench',
    title: 'Standards of service',
    body: 'Work is carried out to the standard a competent marine business should meet, by people who know New Zealand boats, harbours and conditions.',
  },
  {
    icon: 'Tags',
    title: 'Honest pricing',
    body: 'Quotes and charges are clear and fair, so you know what you are paying for before the work starts and there are no surprises at the end.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Guarantees that hold',
    body: 'Members stand behind their products and workmanship and honour the guarantees they give, which matters most when something needs to be put right.',
  },
];

export function RecognisedMembers(): ReactElement {
  return (
    <>
      <RecognisedHero
        eyebrow="Buying from members"
        title="Look for the Recognised Member mark"
        intro="When you buy a boat or a marine product in New Zealand, the NZ Marine Recognised Member mark tells you the company belongs to the association and has agreed to be bound by our Code of Ethics."
        photo={heroPhoto}
        alt="The public browsing boats and member stands at a New Zealand boat show on the water."
        breadcrumb={breadcrumb}
        actions={
          <Button to="/directory" variant="accent" size="lg">
            Find a Recognised Member
          </Button>
        }
      />

      <Section tone="paper">
        <MarkExplainer
          photo={explainerPhoto}
          alt="Crowds and members talking at a New Zealand boat show on a sunny day."
        />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="The Code of Ethics"
          title="What you can rely on"
          intro="The NZ Marine Code of Ethics sets out what members commit to. These are the assurances it gives the people who buy from them."
          className="mb-10"
        />
        <FeatureGrid items={assurances} columns={2} />
      </Section>

      <Section tone="paper">
        <Container size="prose">
          <Prose>
            <h2>The Brokers Code of Ethics</h2>
            <p>
              Buying or selling a boat through a broker is a bigger commitment, so NZ Marine broker
              companies abide by a second code as well. The Brokers Code of Ethics and operational
              guidelines cover how a sale is handled, how client money is held and how a listing is
              represented, which gives both buyer and seller a clear standard to expect.
            </p>
            <p>
              If you are working with a broker, check that they carry the Recognised Member mark. You
              can read both codes in full below.
            </p>
          </Prose>
        </Container>
      </Section>

      <Section tone="muted" spacing="sm">
        <CodeDownloads />
      </Section>

      <Section tone="paper">
        <MemberProofWall />
      </Section>

      <CTABand
        title="Look for the mark, then find your member"
        body="Search the directory for Recognised Members near you or in the trade you need, from boat builders and brokers to riggers, electronics and refit yards."
        primary={{ label: 'Find a Recognised Member', to: '/directory' }}
        secondary={{ label: 'Why join NZ Marine', to: '/membership' }}
      />
    </>
  );
}
