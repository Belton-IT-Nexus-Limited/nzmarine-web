import type { ReactElement } from 'react';
import { ClipboardList, MessagesSquare, Users } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface Step {
  icon: typeof Users;
  title: string;
  body: string;
}

const steps: Step[] = [
  {
    icon: Users,
    title: 'You join the group that fits',
    body: 'When you become a member, you sit in the sector group for the work you actually do, alongside businesses facing the same things you face.',
  },
  {
    icon: MessagesSquare,
    title: 'The group names the issues',
    body: 'Each group brings members together to work out what is helping and what is holding the sector back, from training to standards to access to markets.',
  },
  {
    icon: ClipboardList,
    title: 'NZ Marine acts on it',
    body: 'Those priorities become the action plans the association delivers, so the advocacy and the programmes reflect your part of the industry, not head office.',
  },
];

/** Explains the member-led model: groups set the priorities, NZ Marine delivers. */
export function HowGroupsWork(): ReactElement {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Member-led, not head-office-led"
          intro="NZ Marine sets its broad goals each year, and the detail comes from the people doing the work. Your sector group is where you have a direct say in what the association takes on."
        />
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-11 items-center justify-center rounded-md bg-accent-50 text-accent-700"
                  >
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <span className="font-display text-2xl text-accent-700 tabular-nums">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl text-foreground">{step.title}</h3>
                <p className="text-base text-muted-foreground">{step.body}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
