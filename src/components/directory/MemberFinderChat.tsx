import { useCallback, useRef, useState, type ReactElement } from 'react';
import { ArrowRight, ExternalLink, MapPin, SendHorizontal, Sparkles } from 'lucide-react';
import { findMembers, type FinderHit } from '@/lib/memberSearch';
import { cn } from '@/lib/cn';

/**
 * The member-finder assistant. A visitor types a problem in plain words and
 * the assistant answers with the members most likely to solve it, matched
 * client-side by trade category, region and description (see memberSearch.ts).
 *
 * It is not a language model and sends nothing off the page: every answer is
 * computed in the browser from the directory data, so it works on the static
 * site and keeps the visitor's question private. The transcript is a polite
 * ARIA live region so screen-reader users hear each reply.
 */

interface AssistantTurn {
  id: number;
  query: string;
  intro: string;
  hits: FinderHit[];
  region: string | null;
}

const STARTERS = [
  'My propeller keeps fouling',
  'I need a superyacht refit in Auckland',
  'Torn mainsail, who can repair it?',
  'Haul out and antifoul near Whangārei',
  'I want to buy an electric boat',
  'Marine insurance and a pre-purchase survey',
];

function buildIntro(hits: FinderHit[], region: string | null): string {
  if (hits.length === 0) {
    return "I could not match that to a trade yet. Try naming the job (for example “rigging”, “engine repair”, “upholstery”) or a region, and I will find the members who do it.";
  }
  const where = region ? ` in ${region}` : '';
  const lead = hits[0].matchedCategories[0];
  const trade = lead ? ` who work in ${lead.toLowerCase()}` : '';
  return `Here are members${where}${trade} who should be able to help. Every one is on the NZ Marine register, so you can approach them with confidence.`;
}

export function MemberFinderChat(): ReactElement {
  const [value, setValue] = useState('');
  const [turns, setTurns] = useState<AssistantTurn[]>([]);
  const nextId = useRef(1);
  const transcriptRef = useRef<HTMLDivElement>(null);

  const ask = useCallback((raw: string) => {
    const query = raw.trim();
    if (!query) return;
    const { hits, region } = findMembers(query, 5);
    const turn: AssistantTurn = { id: nextId.current++, query, intro: buildIntro(hits, region), hits, region };
    setTurns((prev) => [...prev, turn]);
    setValue('');
    // let the new turn paint, then bring it into view
    requestAnimationFrame(() => {
      transcriptRef.current?.querySelector('[data-turn]:last-child')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  const hasConversation = turns.length > 0;

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-card">
      <div className="flex items-center gap-3 border-b border-border bg-ink px-5 py-4 text-ink-foreground">
        <span className="flex size-9 items-center justify-center rounded-full bg-accent-600 text-white">
          <Sparkles size={18} aria-hidden="true" />
        </span>
        <div>
          <p className="font-display text-lg leading-none">Find the right member</p>
          <p className="mt-1 text-sm text-ink-muted-foreground">
            Describe your project or problem and I will point you to members who can help.
          </p>
        </div>
      </div>

      <div
        ref={transcriptRef}
        className="max-h-[32rem] overflow-y-auto px-5 py-5"
        role="log"
        aria-live="polite"
        aria-label="Member finder replies"
      >
        {!hasConversation ? (
          <IntroPanel onPick={ask} />
        ) : (
          <ol className="flex flex-col gap-6">
            {turns.map((turn) => (
              <li key={turn.id} data-turn className="scroll-mt-4">
                <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-navy-900 px-4 py-2.5 text-sm text-neutral-50">
                  {turn.query}
                </p>
                <div className="mt-4">
                  <p className="max-w-prose text-sm text-foreground">{turn.intro}</p>
                  {turn.hits.length > 0 && (
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {turn.hits.map((hit) => (
                        <li key={hit.member.slug} className="flex min-w-0">
                          <ResultCard hit={hit} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>

      <form
        className="flex items-end gap-2 border-t border-border bg-surface-muted px-4 py-3"
        onSubmit={(e) => {
          e.preventDefault();
          ask(value);
        }}
      >
        <label htmlFor="member-finder-input" className="sr-only">
          Describe what you need
        </label>
        <textarea
          id="member-finder-input"
          rows={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              ask(value);
            }
          }}
          placeholder="e.g. my inboard diesel is overheating"
          className="max-h-32 min-h-[2.75rem] flex-1 resize-none rounded-lg border border-input bg-surface px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground/80 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-muted"
        />
        <button
          type="submit"
          disabled={!value.trim()}
          className="inline-flex h-11 shrink-0 items-center gap-2 rounded-lg bg-navy-900 px-4 text-sm font-semibold text-neutral-50 transition-colors hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-muted disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span className="hidden sm:inline">Find members</span>
          <SendHorizontal size={18} aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}

function IntroPanel({ onPick }: { onPick: (q: string) => void }): ReactElement {
  return (
    <div>
      <p className="max-w-prose text-sm text-muted-foreground">
        Tell me what you are trying to do and I will search every NZ Marine member for the trades that
        fit. Mention a region if location matters. Try one of these to start:
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {STARTERS.map((s) => (
          <li key={s}>
            <button
              type="button"
              onClick={() => onPick(s)}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-accent-300 hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              {s}
              <ArrowRight size={14} aria-hidden="true" className="text-muted-foreground" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ResultCard({ hit }: { hit: FinderHit }): ReactElement {
  const { member } = hit;
  const ink = member.logoTheme === 'ink';
  const host = member.url ? safeHost(member.url) : null;
  return (
    <div className="flex w-full min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-surface">
      <div className="flex items-center gap-3 p-3">
        {member.logo ? (
          <span
            className={cn(
              'flex h-12 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md border px-1.5',
              ink ? 'border-navy-800 bg-ink-surface' : 'border-border bg-surface-muted',
            )}
          >
            <img src={member.logo} alt="" loading="lazy" decoding="async" className="max-h-9 w-auto max-w-full object-contain" />
          </span>
        ) : (
          <span className="flex h-12 w-16 shrink-0 items-center justify-center rounded-md border border-border bg-surface-muted font-display text-lg text-accent-700">
            {member.name.charAt(0)}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-foreground">{member.name}</p>
          {member.region && (
            <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin size={12} aria-hidden="true" />
              {member.region}
            </p>
          )}
        </div>
      </div>
      {hit.matchedCategories.length > 0 && (
        <p className="min-w-0 px-3 pb-1 text-xs font-medium text-accent-700">{hit.matchedCategories.join(' · ')}</p>
      )}
      {host && (
        <a
          href={member.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-between gap-1.5 border-t border-border px-3 py-2 text-sm font-semibold text-link hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
        >
          {host}
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

function safeHost(url: string): string {
  try {
    return new URL(url).host.replace(/^www\./, '');
  } catch {
    return url;
  }
}

export { STARTERS };
