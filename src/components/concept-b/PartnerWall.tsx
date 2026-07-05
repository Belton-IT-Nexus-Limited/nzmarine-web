import type { ReactElement } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LogoTile } from '@/components/blocks/LogoTile';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { companies } from '@/content/companies';
import { Reveal } from './Reveal';

/**
 * Featured slugs in display order, chosen so navy and paper plates alternate
 * in a deliberate rhythm and the best-known export names lead.
 */
const FEATURED: string[] = [
  'hamiltonjet',
  'doyle-sails',
  'sealegs',
  'garmin',
  'southern-spars',
  'mcmullen-wing',
  'propspeed',
  'q-west',
  'north-sails',
  'c-tech',
  'enl',
  'smuggler-marine',
  'orams-marine',
  'ultralon',
  'fastmount',
  'navico',
];

const featured = FEATURED.map((slug) => companies.find((c) => c.slug === slug)).filter(
  (c): c is NonNullable<typeof c> => c !== undefined,
);

/**
 * Credibility wall of real member marks, each on the plate its brand was
 * drawn for (paper or ink navy), named and linked to the company site. The
 * sticky heading keeps the membership CTA in view while the wall scrolls.
 */
export function PartnerWall(): ReactElement {
  return (
    <section className="bg-surface-muted text-foreground section-y">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[minmax(16rem,0.36fr)_minmax(0,0.64fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                eyebrow="Proof"
                title="Recognised companies, visible together"
                intro="Builders, sailmakers, propulsion and equipment names known far beyond New Zealand. A few of the 500+ member companies behind the industry."
              />
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  to="/directory"
                  className="inline-flex items-center gap-2 rounded-sm text-base font-semibold text-link hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Find a Recognised Member
                  <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                </Link>
                <Link
                  to="/membership/recognised-members"
                  className="inline-flex items-center gap-2 rounded-sm text-base font-semibold text-link hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  What Recognised Member means
                  <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
            {featured.map((company, index) => (
              <li key={company.slug} className="flex">
                <Reveal delay={(index % 8) * 0.03} className="flex w-full">
                  <LogoTile company={company} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
