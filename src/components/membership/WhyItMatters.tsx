import type { ReactElement } from 'react';
import { Users, BadgeCheck, FileText, type LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/concept-b/Reveal';

interface Reason {
  icon: LucideIcon;
  title: string;
  body: string;
}

const reasons: Reason[] = [
  {
    icon: Users,
    title: 'Community',
    body: 'You stop working in isolation. Members meet the people who decide where work goes and how boats get built, from the annual conference to superyacht season functions.',
  },
  {
    icon: BadgeCheck,
    title: 'Standing',
    body: 'The Recognised Member mark tells owners, captains and buyers that your business signed up to the Code of Ethics and meets a standard they can hold you to.',
  },
  {
    icon: FileText,
    title: 'Value',
    body: 'More than 40 ready-to-use contract and HR templates, discounted boat-show space, trade missions and METSTRADE, and industry data you can plan with. The membership pays its way.',
  },
];

/** Why belonging matters: community, standing and value, kept brief. */
export function WhyItMatters(): ReactElement {
  return (
    <section className="bg-surface-muted text-foreground section-y">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why it matters"
            title="What you get from belonging"
            intro="People join because of the community first, and stay because the membership earns its keep. Here is both side by side."
          />
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <li key={reason.title} className="flex">
                <Reveal delay={index * 0.08} className="flex w-full">
                  <div className="flex h-full w-full flex-col rounded-lg border border-border bg-surface p-6 shadow-card">
                    <span
                      aria-hidden="true"
                      className="inline-flex size-11 items-center justify-center rounded-md bg-accent-50 text-accent-700"
                    >
                      <Icon size={20} strokeWidth={2} />
                    </span>
                    <h3 className="mt-5 font-display text-xl text-foreground">{reason.title}</h3>
                    <p className="mt-2 text-base text-muted-foreground">{reason.body}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
