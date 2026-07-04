import { useId, useMemo, useState, type ReactElement } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { PageHero } from '@/components/blocks/PageHero';
import { MemberCard } from '@/components/blocks/MemberCard';
import { CTABand } from '@/components/blocks/CTABand';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Field, Input, Select } from '@/components/ui/Field';
import { members } from '@/content/members';
import type { Company, CompanyCategory, Region } from '@/content/types';
import { cn } from '@/lib/cn';

const ALL = 'all';

/** Sorted, de-duplicated option list for a Company facet. */
function facetOptions<K extends keyof Company>(key: K): string[] {
  const values = new Set<string>();
  for (const company of members) {
    const value = company[key];
    if (typeof value === 'string' && value.length > 0) values.add(value);
  }
  return Array.from(values).sort((a, b) => a.localeCompare(b, 'en-NZ'));
}

const categoryOptions = facetOptions('category');
const regionOptions = facetOptions('region');

interface FilterState {
  query: string;
  category: CompanyCategory | typeof ALL;
  region: Region | typeof ALL;
}

const initialFilters: FilterState = { query: '', category: ALL, region: ALL };

/** True when no filter narrows the list, used to gate the clear control. */
function hasActiveFilters(filters: FilterState): boolean {
  return (
    filters.query.trim() !== '' ||
    filters.category !== ALL ||
    filters.region !== ALL
  );
}

/**
 * The single Find a Recognised Member directory. It replaces the three
 * competing member lists from the old site with one client-side searchable
 * and filterable index of Recognised Member companies.
 */
export function Directory(): ReactElement {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const searchId = useId();

  const results = useMemo<Company[]>(() => {
    const needle = filters.query.trim().toLowerCase();
    return members.filter((company) => {
      const matchesName = needle === '' || company.name.toLowerCase().includes(needle);
      const matchesCategory =
        filters.category === ALL || company.category === filters.category;
      const matchesRegion =
        filters.region === ALL || company.region === filters.region;
      return matchesName && matchesCategory && matchesRegion;
    });
  }, [filters]);

  const active = hasActiveFilters(filters);
  const total = members.length;
  const count = results.length;
  const countLabel =
    active && count !== total
      ? `Showing ${count} of ${total} member companies`
      : `Showing all ${total} member companies`;

  function clearFilters(): void {
    setFilters(initialFilters);
  }

  return (
    <>
      <PageHero
        eyebrow="Member directory"
        title="Find a Recognised Member"
        intro="Search NZ Marine's Recognised Members by name, trade or region. Every company below works to the Code of Ethics, so you can brief them with confidence."
        imageKey="aucklandHarbour"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Find a Recognised Member' }]}
      />

      <Section tone="paper">
        <Container>
          <form
            role="search"
            aria-label="Filter the member directory"
            className="rounded-lg border border-border bg-surface p-5 shadow-xs sm:p-6"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <SlidersHorizontal size={18} aria-hidden="true" className="text-accent-700" />
              <span>Filter the directory</span>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              <Field
                label="Search by company name"
                className="md:col-span-3"
              >
                <div className="relative">
                  <Search
                    size={18}
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    id={searchId}
                    type="search"
                    placeholder="e.g. Doyle Sails, Hamilton Jet"
                    className="pl-10"
                    value={filters.query}
                    onChange={(event) =>
                      setFilters((prev) => ({ ...prev, query: event.target.value }))
                    }
                  />
                </div>
              </Field>

              <Field label="Trade category">
                <Select
                  value={filters.category}
                  onChange={(event) =>
                    setFilters((prev) => ({
                      ...prev,
                      category: event.target.value as FilterState['category'],
                    }))
                  }
                >
                  <option value={ALL}>All categories</option>
                  {categoryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field label="Region">
                <Select
                  value={filters.region}
                  onChange={(event) =>
                    setFilters((prev) => ({
                      ...prev,
                      region: event.target.value as FilterState['region'],
                    }))
                  }
                >
                  <option value={ALL}>All regions</option>
                  {regionOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </Field>

              <div className="flex items-end">
                <Button
                  type="button"
                  variant="secondary"
                  className={cn('w-full', !active && 'invisible')}
                  onClick={clearFilters}
                  disabled={!active}
                  aria-hidden={!active}
                >
                  <X size={18} aria-hidden="true" />
                  Clear filters
                </Button>
              </div>
            </div>
          </form>

          <p
            className="mt-6 text-sm font-medium text-muted-foreground"
            role="status"
            aria-live="polite"
          >
            {countLabel}
          </p>

          {count > 0 ? (
            <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((company) => (
                <li key={company.name} className="flex">
                  <MemberCard company={company} className="w-full" />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState onClear={clearFilters} />
          )}
        </Container>
      </Section>

      <CTABand
        title="Not yet a Recognised Member?"
        body="Join NZ Marine to list your business in this directory, work to the Code of Ethics and connect with the people who buy, build and refit boats in New Zealand."
        primary={{ label: 'Join NZ Marine', to: '/join' }}
        secondary={{ label: 'Talk to the team', to: '/contact' }}
      />
    </>
  );
}

interface EmptyStateProps {
  onClear: () => void;
}

/** Shown when the active filters match no member companies. */
function EmptyState({ onClear }: EmptyStateProps): ReactElement {
  return (
    <div className="mt-5 flex flex-col items-center gap-4 rounded-lg border border-dashed border-border-strong bg-surface-muted px-6 py-14 text-center"> {/* slop-scan-ignore: empty state is a short centered message with a max-w-prose capped paragraph */}
      <span className="flex size-12 items-center justify-center rounded-full bg-surface text-accent-700 shadow-xs">
        <Search size={22} aria-hidden="true" />
      </span>
      <h2 className="font-display text-2xl text-foreground">No members match your search</h2>
      <p className="max-w-prose text-muted-foreground">
        Try a different spelling, widen the trade category or region, or clear the
        filters to see every Recognised Member. If you are after a company we do not
        list yet, the team can point you in the right direction.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button type="button" variant="primary" onClick={onClear}>
          Clear filters
        </Button>
        <Button to="/contact" variant="secondary">
          Ask the team
        </Button>
      </div>
    </div>
  );
}
