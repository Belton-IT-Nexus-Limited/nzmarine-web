import type { ReactElement } from 'react';
import { Globe, Handshake, Plane, Ship } from 'lucide-react';
import { CTABand } from '@/components/blocks/CTABand';
import { FeatureGrid, type FeatureItem } from '@/components/blocks/FeatureGrid';
import { LogoWall } from '@/components/blocks/LogoWall';
import { PageHero } from '@/components/blocks/PageHero';
import { StatBand } from '@/components/blocks/StatBand';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { exporters } from '@/content/exporters';
import type { Company, CompanyCategory } from '@/content/types';
import { cn } from '@/lib/cn';

/** The order categories appear on the page; covers every value in the data. */
const categoryOrder: CompanyCategory[] = [
  'Boat Builders',
  'Sails & Rigging',
  'Propulsion',
  'Electronics',
  'Components',
  'Services',
  'Apparel',
];

/** A short, buyer-facing line describing what each category covers. */
const categoryBlurb: Record<CompanyCategory, string> = {
  'Boat Builders': 'Custom and production builders of power and sail vessels, from amphibious craft to large hulls.',
  'Sails & Rigging': 'Sailmakers, spar and rigging specialists supplying race and superyacht programmes worldwide.',
  Propulsion: 'Waterjet and propulsion engineering trusted on commercial and recreational craft around the world.',
  Electronics: 'Navigation, communications and onboard electronics for vessels of every size.',
  Components: 'Hardware, fittings, coatings and componentry built to perform in demanding marine conditions.',
  Services: 'Refit, project management, logistics and specialist marine services for visiting and offshore craft.',
  Apparel: 'Crew uniforms and technical marine clothing for superyachts, race teams and working crews.',
};

function groupByCategory(companies: Company[]): Map<CompanyCategory, Company[]> {
  const groups = new Map<CompanyCategory, Company[]>();
  for (const category of categoryOrder) {
    const inCategory = companies
      .filter((company) => company.category === category)
      .sort((a, b) => a.name.localeCompare(b.name));
    if (inCategory.length > 0) {
      groups.set(category, inCategory);
    }
  }
  return groups;
}

const helpItems: FeatureItem[] = [
  {
    icon: Plane,
    title: 'Trade shows and missions',
    body: 'We take New Zealand to METSTRADE, Monaco, Fort Lauderdale and beyond, with collective stand space under the NZ Marine banner and the logistics handled for members displaying offshore.',
  },
  {
    icon: Globe,
    title: 'Market intelligence',
    body: 'We work with New Zealand Trade and Enterprise to profile members internationally, and new exporters get help learning the ropes and finding the markets worth chasing.',
  },
  {
    icon: Handshake,
    title: 'A single point of contact',
    body: 'Buyer enquiries come to one place and get directed to the right member, so an international buyer never has to guess who in New Zealand can do the work.',
  },
  {
    icon: Ship,
    title: 'Flagship events',
    body: 'We run and support events such as the New Zealand Millennium Cup superyacht regatta, putting members and their work in front of owners, captains and the global fleet.',
  },
];

const stats = [
  { value: '35+', label: 'Export Group companies', sublabel: 'Selling into markets across Europe, the Americas, Asia and Australia.' },
  { value: '160m', label: 'Vessels we build and refit', sublabel: 'World-leading in design, build, refit and maintenance up to roughly 160 metres.' },
  { value: '6', label: 'International shows a year', sublabel: 'From METSTRADE to Monaco, with collective NZ Marine stand space.' },
];

/**
 * Export. The home of the NZ Marine Export Group, written for two readers:
 * international buyers sourcing from New Zealand, and members who want help
 * selling offshore.
 */
export function Export(): ReactElement {
  const groups = groupByCategory(exporters);

  return (
    <>
      <PageHero
        eyebrow="NZ Marine Export Group"
        title="Taking New Zealand marine companies global"
        intro="New Zealand sits at the front of marine innovation in boat design, build, components and equipment, supplying boat yards and the superyacht industry worldwide. The Export Group brings our most successful exporters together so buyers can find them and members can reach new markets."
        imageKey="yachtDesign"
        breadcrumb={[{ label: 'Membership', to: '/membership' }, { label: 'Export' }]}
        actions={
          <>
            <Button to="/contact" variant="accent" size="lg">
              Talk to the export team
            </Button>
            <Button to="/join" variant="secondary" size="lg">
              Join the Export Group
            </Button>
          </>
        }
      />

      <Section tone="paper">
        <Container>
          <SectionHeading
            eyebrow="Why New Zealand"
            title="A world-leading marine exporter"
            intro="New Zealand companies hold their place at the forefront of boat design, build, component and equipment manufacture, supplying yards and the superyacht industry around the world. The country has some of the best cruising grounds anywhere and is the South Pacific hub for refit, servicing and maintenance for boats of every size. The Export Group is the active sector group that brings our highest-profile export companies together under one banner."
          />
        </Container>
      </Section>

      <StatBand tone="muted" stats={stats} />

      <Section tone="paper">
        <Container>
          <SectionHeading
            eyebrow="What the Export Group does"
            title="How we help members sell offshore"
            intro="The Export Group provides marketing support, organisation and on-the-ground presence so members can reach their target markets and buyers can reach them. Here is the practical help that comes with being part of it."
          />
          <FeatureGrid className="mt-10" items={helpItems} columns={2} />
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow="The companies"
            title="New Zealand Marine Export Group members"
            intro="These are the exporters that make up the group, grouped by what they do. Every name links straight to the company so you can see their work and get in touch."
          />
        </Container>
        <div className="mt-10 flex flex-col gap-12">
          {categoryOrder.map((category) => {
            const companies = groups.get(category);
            if (!companies) return null;
            return (
              <div key={category}>
                <Container>
                  <div className="max-w-prose">
                    <h3 className="font-display text-2xl text-foreground">{category}</h3>
                    <p className="mt-2 text-base text-muted-foreground">
                      {categoryBlurb[category]}
                    </p>
                  </div>
                </Container>
                <LogoWall className={cn('mt-6')} companies={companies} />
              </div>
            );
          })}
        </div>
      </Section>

      <CTABand
        title="Source from New Zealand, or take your business global"
        body="If you are sourcing marine products, technology or services, the export team will point you to the right members and answer your enquiry. If you are a New Zealand company ready to sell offshore, join the Export Group and get our help reaching the markets that matter."
        primary={{ label: 'Talk to the export team', to: '/contact' }}
        secondary={{ label: 'Join the Export Group', to: '/join' }}
      />
    </>
  );
}
