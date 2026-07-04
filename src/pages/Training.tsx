import type { ReactElement } from 'react';
import {
  Anchor,
  CircleDot,
  ClipboardList,
  Compass,
  GraduationCap,
  Hammer,
  Layers,
  UsersRound,
  Waves,
  Wrench,
} from 'lucide-react';
import { CTABand } from '@/components/blocks/CTABand';
import { FeatureGrid, type FeatureItem } from '@/components/blocks/FeatureGrid';
import { PageHero } from '@/components/blocks/PageHero';
import { StatBand, type StatBandStat } from '@/components/blocks/StatBand';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

/** The marine trades a NZ Marine apprenticeship or qualification can lead into. */
const pathways: FeatureItem[] = [
  {
    icon: Hammer,
    title: 'Boat building',
    body: 'The trade behind New Zealand’s production and custom builders, covering timber, alloy and composite hulls, fit-out and finishing on vessels from trailer boats to superyachts.',
  },
  {
    icon: Layers,
    title: 'Composites and fabrication',
    body: 'Laminating, moulding and tooling work in the materials that put New Zealand yards at the front of light, strong hull and component manufacture.',
  },
  {
    icon: Wrench,
    title: 'Marine systems and engineering',
    body: 'Propulsion, electrical, plumbing and onboard systems work, the skills that keep boats running and underpin the refit and servicing trades.',
  },
  {
    icon: Anchor,
    title: 'Refit and servicing',
    body: 'The hands-on trades that support our superyacht refit hub, from painting and rigging to project work on visiting vessels in Auckland and Whangārei.',
  },
];

const stats: StatBandStat[] = [
  {
    value: '4',
    label: 'core trade pathways',
    sublabel: 'Boat building, composites, marine systems and refit, with room to specialise.',
  },
  {
    value: '500+',
    label: 'member businesses to train with',
    sublabel: 'Yards and workshops across the country that take on apprentices.',
  },
  {
    value: '160m',
    label: 'vessels our trades work on',
    sublabel: 'New Zealand builds, refits and maintains vessels up to roughly 160 metres.',
  },
];

/** What an employer gets when they take on an apprentice through NZ Marine. */
const employerSteps: FeatureItem[] = [
  {
    icon: ClipboardList,
    title: 'Tell us what you need',
    body: 'Talk to the training team about the trades you work in and the roles you are looking to fill, and we help you scope the apprenticeship that fits your yard.',
  },
  {
    icon: UsersRound,
    title: 'Find the right person',
    body: 'We point new entrants toward member businesses that are hiring, so you can connect with people who already want a career in the marine trades.',
  },
  {
    icon: GraduationCap,
    title: 'Support through training',
    body: 'We coordinate with the training providers and industry bodies behind marine qualifications, so your apprentice’s on-the-job learning lines up with their study.',
  },
];

/** What a learner can expect from a marine apprenticeship or short course. */
const learnerSteps: FeatureItem[] = [
  {
    icon: Compass,
    title: 'Start with the trade that suits you',
    body: 'Whether you are leaving school or changing careers, we can point you toward the marine pathway that matches the kind of work you want to do.',
  },
  {
    icon: Hammer,
    title: 'Earn while you learn',
    body: 'A marine apprenticeship puts you in a real yard from day one, building skills on the boats and systems you train on rather than only in a classroom.',
  },
  {
    icon: Waves,
    title: 'Build a career that travels',
    body: 'New Zealand marine trades are recognised worldwide, so the qualification you earn here can take you into yards and onto vessels well beyond our shores.',
  },
];

/**
 * Training. NZ Marine’s coordinating role in marine apprenticeships,
 * qualifications and upskilling, written for two readers: member businesses
 * looking to take on an apprentice, and people wanting to start in the trades.
 */
export function Training(): ReactElement {
  return (
    <>
      <PageHero
        eyebrow="Industry training"
        title="Industry training and apprenticeships"
        intro="Industry training is one of the reasons NZ Marine exists. We help member businesses bring new people into the marine trades and upskill the people they already have, so the industry keeps the boat builders, composites specialists, marine engineers and refit trades it depends on."
        imageKey="boatBuild"
        breadcrumb={[{ label: 'Industry' }, { label: 'Training' }]}
        actions={
          <>
            <Button to="/contact" variant="accent" size="lg">
              Talk to the training team
            </Button>
            <Button to="/membership/why-join" variant="secondary" size="lg">
              Join NZ Marine
            </Button>
          </>
        }
      />

      <Section tone="paper">
        <Container>
          <SectionHeading
            eyebrow="Our role"
            title="Building the workforce behind the industry"
            intro="NZ Marine does not deliver qualifications itself. We work alongside the training providers and industry bodies that do, and we connect them with the yards and workshops where the learning actually happens. That coordinating role covers full apprenticeships for new entrants and shorter upskilling for people already in the trade, across boat building, composites, marine systems and refit. Growing the industry’s skills sits inside our mission, next to advocacy and the promotion of safe boating."
          />
        </Container>
      </Section>

      <StatBand tone="muted" stats={stats} />

      <Section tone="paper">
        <Container>
          <SectionHeading
            eyebrow="Training pathways"
            title="The marine trades you can train in"
            intro="The work spans several distinct trades, and most yards need a mix of them. These are the pathways a marine apprenticeship or qualification can lead into, each one a real career our members hire for."
          />
          <FeatureGrid className="mt-10" items={pathways} columns={2} />
        </Container>
      </Section>

      <Section tone="muted" id="employers">
        <Container>
          <SectionHeading
            eyebrow="For employers"
            title="How to take on an apprentice"
            intro="If you run a member business and want to bring someone new into your yard, we make the first steps easier. You stay the employer and the trainer on the floor, and we help you line up the right person and the right qualification."
          />
          <FeatureGrid className="mt-10" items={employerSteps} columns={3} />
        </Container>
      </Section>

      <Section tone="paper" id="learners">
        <Container>
          <SectionHeading
            eyebrow="For learners"
            title="Starting a career in the marine trades"
            intro="A marine career means working on the boats that put New Zealand on the map, from race yachts to superyachts in for refit. If you are thinking about the trades, here is what a marine apprenticeship can offer and how to find your way in."
          />
          <FeatureGrid className="mt-10" items={learnerSteps} columns={3} />
        </Container>
      </Section>

      <Section tone="paper" spacing="none">
        <Container>
          <div className="flex max-w-prose flex-col gap-4 rounded-lg border border-border bg-surface p-7 shadow-card sm:flex-row sm:items-start sm:gap-5">
            <span
              aria-hidden="true"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-accent-50 text-accent-700"
            >
              <CircleDot size={20} strokeWidth={2} />
            </span>
            <div>
              <h2 className="font-display text-2xl text-foreground">
                Not sure where to start?
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Whether you are an employer weighing up your first apprentice or someone looking
                for a way into the trades, the training team can talk you through the options and
                point you to the right provider. It costs nothing to ask.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTABand
        title="Talk to the training team"
        body="Tell us whether you are hiring or looking to learn, and we will help you find the apprenticeship, qualification or short course that fits. We will connect you with the providers and members who can take it from there."
        primary={{ label: 'Talk to the training team', to: '/contact' }}
        secondary={{ label: 'Join NZ Marine', to: '/membership/why-join' }}
      />
    </>
  );
}
