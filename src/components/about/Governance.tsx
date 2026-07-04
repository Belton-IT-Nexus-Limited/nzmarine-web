import type { ReactElement } from 'react';
import { ShieldCheck, UserRound } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/concept-b/Reveal';
import type { GovernancePerson } from '@/content/types';
import { boardChair, boardMembers, executive } from '@/content/governance';

type Seat = {
  /** The governing role, e.g. Chair of the Board. */
  role: string;
  /** The sector or seat this person represents. */
  represents: string;
};

/**
 * Map the structural governance data to seats. The roster names are confirmed
 * with NZ Marine before launch, so we present the role and the sector each seat
 * speaks for rather than the placeholder names in the data module.
 */
function toSeat(person: GovernancePerson): Seat {
  return { role: person.role, represents: person.company ?? 'NZ Marine member' };
}

const leadership: Seat[] = [toSeat(executive), toSeat(boardChair)];
const board: Seat[] = boardMembers.map(toSeat);

function SeatCard({ seat, lead }: { seat: Seat; lead: boolean }): ReactElement {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6 shadow-card">
      <span
        aria-hidden="true"
        className="inline-flex size-12 items-center justify-center rounded-md bg-accent-50 text-accent-700"
      >
        {lead ? <ShieldCheck size={22} strokeWidth={2} /> : <UserRound size={22} strokeWidth={2} />}
      </span>
      <h3 className="mt-5 font-display text-xl text-foreground">{seat.role}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{seat.represents}</p>
      <p className="mt-4 text-sm font-medium text-accent-700">Name to be confirmed</p>
    </article>
  );
}

/**
 * Governance section: the executive and the elected board that steer NZ Marine.
 * Shown as a carded people grid on a flat surface, with an honest note that the
 * full roster is confirmed with NZ Marine before launch.
 */
export function Governance(): ReactElement {
  return (
    <section className="bg-surface-muted section-y">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Governance"
            title="The people who steer the association"
            intro="NZ Marine is led by a chief executive and governed by a board elected from across the industry, so every major sector has a seat at the table and a say in what the national body does."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12">
            <h3 className="font-display text-lg text-foreground">Executive and chair</h3>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              {leadership.map((seat) => (
                <SeatCard key={seat.role} seat={seat} lead />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <h3 className="font-display text-lg text-foreground">Board by sector</h3>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {board.map((seat) => (
                <SeatCard key={seat.represents} seat={seat} lead={false} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-10 max-w-[44rem] rounded-md border border-border bg-surface px-5 py-4 text-sm text-muted-foreground">
            This shows how NZ Marine is governed. The current chief executive, board chair and board
            members are confirmed with NZ Marine before launch, and their names will appear here once
            the roster is finalised.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
