import { useId, useMemo, useState, type ReactElement } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { PageHero } from '@/components/blocks/PageHero';
import { CTABand } from '@/components/blocks/CTABand';
import { MemberFinderChat } from '@/components/directory/MemberFinderChat';
import { DirectoryMemberCard } from '@/components/directory/DirectoryMemberCard';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Field, Input, Select } from '@/components/ui/Field';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { directoryCategories, directoryMembers, type DirectoryMember } from '@/content/directory';
import { cn } from '@/lib/cn';

const ALL = 'all';
const PAGE_SIZE = 24;

/** The six visitor problem groups, in the site's order. */
const GROUPS = [
  'Buy a boat',
  'Build, refit or repair',
  'DIY repair',
  'Accessories',
  'Professional services',
  'Get into boating',
];

const REGIONS = [...new Set(directoryMembers.map((m) => m.region).filter(Boolean))].sort((a, b) =>
  (a as string).localeCompare(b as string, 'en-NZ'),
) as string[];

/** Category indexes that belong to each problem group. */
const groupCatIndexes = new Map<string, Set<number>>(
  GROUPS.map((g) => [g, new Set(directoryCategories.flatMap((c, i) => (c.group === g ? [i] : [])))]),
);

interface FilterState {
  query: string;
  group: string;
  region: string;
}

const initial: FilterState = { query: '', group: ALL, region: ALL };

function isActive(f: FilterState): boolean {
  return f.query.trim() !== '' || f.group !== ALL || f.region !== ALL;
}

/**
 * The member directory. It opens with the conversational member finder, then
 * lists every NZ Marine member with client-side search plus problem-group and
 * region filters. All member data comes from src/content/directory.ts.
 */
export function Directory(): ReactElement {
  const [filters, setFilters] = useState<FilterState>(initial);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const searchId = useId();

  const results = useMemo<DirectoryMember[]>(() => {
    const needle = filters.query.trim().toLowerCase();
    const groupCats = filters.group === ALL ? null : groupCatIndexes.get(filters.group);
    return directoryMembers.filter((m) => {
      if (needle && !(`${m.name} ${m.blurb}`.toLowerCase().includes(needle))) return false;
      if (filters.region !== ALL && m.region !== filters.region) return false;
      if (groupCats && !m.cats.some((c) => groupCats.has(c))) return false;
      return true;
    });
  }, [filters]);

  const active = isActive(filters);
  const total = directoryMembers.length;
  const shown = results.slice(0, visible);

  function update(patch: Partial<FilterState>): void {
    setFilters((prev) => ({ ...prev, ...patch }));
    setVisible(PAGE_SIZE);
  }

  function clear(): void {
    setFilters(initial);
    setVisible(PAGE_SIZE);
  }

  return (
    <>
      <PageHero
        eyebrow="Member directory"
        title="Find a member who can help"
        intro={`Search every NZ Marine member by trade or region, or ask the finder to match your project to the right companies. ${total} members and counting.`}
        imageKey="aucklandHarbour"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Find a member' }]}
      />

      <Section tone="muted">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
            <MemberFinderChat />
            <aside className="lg:sticky lg:top-24">
              <SectionHeading
                as="h2"
                eyebrow="How it works"
                title="Tell it what you need"
                intro="The finder reads your description and matches it to members by trade, region and specialty. It runs in your browser, so nothing you type leaves this page."
              />
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent-600" aria-hidden="true" />
                  Describe a job, a fault, or what you want to buy.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent-600" aria-hidden="true" />
                  Name a town or region if location matters.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent-600" aria-hidden="true" />
                  Every match is a current NZ Marine member.
                </li>
              </ul>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="paper" id="browse" className="scroll-mt-20">
        <Container>
          <SectionHeading
            as="h2"
            eyebrow="Browse the register"
            title="Every NZ Marine member"
            intro="Prefer to look for yourself? Search by name, or narrow the register by what you need and where you are."
          />

          <form
            role="search"
            aria-label="Filter the member directory"
            className="mt-8 rounded-lg border border-border bg-surface p-5 shadow-xs sm:p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <SlidersHorizontal size={18} aria-hidden="true" className="text-accent-700" />
              <span>Filter the register</span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
              <Field label="Search by name" labelHidden className="md:col-span-2">
                <div className="relative">
                  <Search
                    size={18}
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    id={searchId}
                    type="search"
                    placeholder="Search by company name"
                    className="pl-10"
                    value={filters.query}
                    onChange={(e) => update({ query: e.target.value })}
                  />
                </div>
              </Field>
              <Field label="What you need" labelHidden>
                <Select value={filters.group} onChange={(e) => update({ group: e.target.value })} aria-label="What you need">
                  <option value={ALL}>All categories</option>
                  {GROUPS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Region" labelHidden>
                <Select value={filters.region} onChange={(e) => update({ region: e.target.value })} aria-label="Region">
                  <option value={ALL}>All regions</option>
                  {REGIONS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </Select>
              </Field>
            </div>
            {active && (
              <div className="mt-4">
                <Button type="button" variant="ghost" size="sm" onClick={clear}>
                  <X size={16} aria-hidden="true" />
                  Clear filters
                </Button>
              </div>
            )}
          </form>

          <p className="mt-6 text-sm font-medium text-muted-foreground" role="status" aria-live="polite">
            {active ? `Showing ${results.length} of ${total} members` : `Showing all ${total} members`}
          </p>

          {results.length > 0 ? (
            <>
              <ul className={cn('mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3')}>
                {shown.map((member) => (
                  <li key={member.slug} className="flex">
                    <div className="w-full">
                      <DirectoryMemberCard member={member} />
                    </div>
                  </li>
                ))}
              </ul>
              {visible < results.length && (
                <div className="mt-10 flex justify-center">
                  <Button type="button" variant="secondary" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                    Show more members
                  </Button>
                </div>
              )}
            </>
          ) : (
            <EmptyState onClear={clear} />
          )}
        </Container>
      </Section>

      <CTABand
        title="Not yet an NZ Marine member?"
        body="Join to list your business in this directory, work to the Code of Ethics and connect with the people who buy, build and refit boats in New Zealand."
        primary={{ label: 'Join NZ Marine', to: '/join' }}
        secondary={{ label: 'Talk to the team', to: '/contact' }}
      />
    </>
  );
}

function EmptyState({ onClear }: { onClear: () => void }): ReactElement {
  return (
    <div className="mt-5 flex flex-col items-center gap-4 rounded-lg border border-dashed border-border-strong bg-surface-muted px-6 py-14 text-center"> {/* slop-scan-ignore: short centered empty state, not running prose */}
      <span className="flex size-12 items-center justify-center rounded-full bg-surface text-accent-700 shadow-xs">
        <Search size={22} aria-hidden="true" />
      </span>
      <h3 className="font-display text-2xl text-foreground">No members match those filters</h3>
      <p className="max-w-prose text-muted-foreground">
        Try a different spelling, widen the category or region, or ask the finder above to match your
        project to the right members.
      </p>
      <Button type="button" variant="primary" onClick={onClear}>
        Clear filters
      </Button>
    </div>
  );
}
