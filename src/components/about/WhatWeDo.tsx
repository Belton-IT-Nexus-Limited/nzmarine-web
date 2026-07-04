import type { ReactElement, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { iconRegistry } from '@/lib/icons';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface Pillar {
  icon: keyof typeof iconRegistry;
  title: string;
  body: string;
}

const pillars: Pillar[] = [
  {
    icon: 'Megaphone',
    title: 'Advocacy and representation',
    body:
      'We put the industry in front of government, councils and regulators, from biosecurity rules at the border to how marinas and refit yards are consented. When a decision affects member businesses, NZ Marine is at the table arguing the industry case.',
  },
  {
    icon: 'Globe',
    title: 'Profiling and promotion',
    body:
      'We take New Zealand companies to the world, from the METSTRADE floor in Amsterdam to the docks in Monaco, and we bring visiting superyachts here through Destination and Cruising New Zealand. Our job is to make sure buyers know what this country builds.',
  },
  {
    icon: 'GraduationCap',
    title: 'Training and apprenticeships',
    body:
      'The industry needs boatbuilders, marine technicians and trimmers coming through behind the current crews. We back industry training and apprenticeships so members can find skilled people and bring on the next generation of trades.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Promotion of safe boating',
    body:
      'A confident boating public is good for everyone who works on the water. We support safe boating on the Hauraki Gulf and across the country, because more people getting out safely means a stronger market for the whole industry.',
  },
];

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Mount-based opacity and translate reveal. Content is visible by default; when
 * reduced motion is requested it renders the final state with no transition.
 */
function Reveal({ children, delay = 0, className }: RevealProps): ReactElement {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1], delay }} // slop-scan-ignore: single opacity+translate enter on mount
    >
      {children}
    </motion.div>
  );
}

/**
 * The four things NZ Marine actually does for the industry, presented as a
 * carded grid on a flat paper surface so it can sit between image-led sections.
 */
export function WhatWeDo(): ReactElement {
  return (
    <section className="bg-background section-y">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Four jobs we do for the industry"
          intro="The mission breaks down into four practical things the association works on every week, for every member, whether they build superyachts or sell outboards."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = iconRegistry[pillar.icon];
            return (
              <li key={pillar.title}>
                <Reveal delay={index * 0.08} className="h-full">
                  <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6 shadow-card">
                    <span
                      aria-hidden="true"
                      className="inline-flex size-12 items-center justify-center rounded-md bg-accent-50 text-accent-700"
                    >
                      <Icon size={22} strokeWidth={2} />
                    </span>
                    <h3 className="mt-5 font-display text-xl text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-base text-muted-foreground">{pillar.body}</p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
