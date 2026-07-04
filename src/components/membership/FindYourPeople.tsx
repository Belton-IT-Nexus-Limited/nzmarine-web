import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/concept-b/Reveal';
import { sectorGroups } from '@/content/sectorGroups';

const sectorLink = '/membership/sector-groups';

/**
 * "Find your people" — the five sector groups framed as communities you can
 * belong to, each linking through to the sector-groups page. The whole card is
 * the link so it has a generous target and a single visible focus ring.
 */
export function FindYourPeople(): ReactElement {
  return (
    <section className="bg-background text-foreground section-y">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Find your people"
            title="Five sector groups, one for your kind of work"
            intro="Membership puts you in a group of companies doing what you do. Each group runs its own events, sets its own priorities and speaks for its part of the industry."
          />
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {sectorGroups.map((group, index) => (
            <li key={group.slug} className="flex">
              <Reveal delay={index * 0.06} className="flex w-full">
                <Link
                  to={sectorLink}
                  className="group flex h-full w-full flex-col rounded-lg border border-border bg-surface p-6 shadow-card motion-safe:transition-[transform,box-shadow] motion-safe:duration-base motion-safe:ease-out-soft hover:-translate-y-0.5 hover:shadow-pop focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <h3 className="font-display text-xl text-foreground">{group.name}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{group.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-link group-hover:underline">
                    Find your people in this group
                    <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
