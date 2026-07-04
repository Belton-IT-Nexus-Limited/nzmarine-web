import { useMemo, useState, type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, SearchX } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABand } from '@/components/blocks/CTABand';
import { NewsCard } from '@/components/blocks/NewsCard';
import { PageHero } from '@/components/blocks/PageHero';
import { getImage } from '@/content/images';
import { news } from '@/content/news';
import type { NewsCategory, NewsItem } from '@/content/types';
import { cn } from '@/lib/cn';

const breadcrumb = [{ label: 'Home', to: '/' }, { label: 'News' }];

const ALL = 'All' as const;
type Filter = typeof ALL | NewsCategory;

/** Format an ISO date the way an NZ reader expects: 2 October 2025. */
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-NZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** Newest first, so the lead story is always the most recent post. */
function sortNewest(items: NewsItem[]): NewsItem[] {
  return [...items].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

/** Build the filter list from the categories that actually appear in the feed. */
function buildFilters(items: NewsItem[]): Filter[] {
  const seen = new Set<NewsCategory>();
  for (const item of items) seen.add(item.category);
  return [ALL, ...Array.from(seen)];
}

/** The single most recent story, given its own larger treatment. */
function FeaturedStory({ item }: { item: NewsItem }): ReactElement {
  const image = getImage(item.imageKey);
  const src = image?.src;
  const altText = image?.alt;

  return (
    <article className="group relative isolate grid overflow-hidden rounded-xl border border-border bg-surface shadow-card lg:grid-cols-2">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-muted lg:aspect-auto lg:h-full">
        {src ? (
          <img
            src={src}
            alt={altText}
            loading="eager"
            decoding="async"
            className="size-full object-cover"
          />
        ) : (
          <div aria-hidden="true" className="size-full bg-ink" />
        )}
      </div>

      <div className="flex flex-col justify-center gap-4 p-7 sm:p-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <Badge tone="accent">{item.category}</Badge>
          <time dateTime={item.date} className="text-sm text-muted-foreground">
            {formatDate(item.date)}
          </time>
        </div>

        <h2 className="font-display text-2xl text-foreground sm:text-3xl">
          <Link
            to={`/news/${item.slug}`}
            className="rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface group-hover:underline"
          >
            {item.title}
          </Link>
        </h2>

        <p className="max-w-prose text-lg text-muted-foreground">{item.excerpt}</p>

        <span className="mt-1 inline-flex items-center gap-1.5 text-base font-medium text-link">
          Read the full story
          <ArrowRight aria-hidden="true" size={18} className="transition-transform duration-fast group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}

interface CategoryFilterProps {
  filters: Filter[];
  active: Filter;
  onChange: (next: Filter) => void;
}

/** Single-select topic filter, built as a labelled group of toggle buttons. */
function CategoryFilter({ filters, active, onChange }: CategoryFilterProps): ReactElement {
  return (
    <div
      role="group"
      aria-label="Filter news by topic"
      className="flex flex-wrap gap-2"
    >
      {filters.map((filter) => {
        const isActive = filter === active;
        return (
          <button
            key={filter}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(filter)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-fast',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              isActive
                ? 'border-navy-900 bg-navy-900 text-primary-foreground'
                : 'border-border-strong bg-surface text-foreground hover:bg-surface-muted',
            )}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

interface NoResultsProps {
  category: Filter;
  onReset: () => void;
}

/** Shown when a topic filter matches nothing, so the grid never reads as broken. */
function NoResults({ category, onReset }: NoResultsProps): ReactElement {
  return (
    <div className="mx-auto max-w-[44rem] rounded-lg border border-border bg-surface p-8 text-center shadow-card sm:p-10"> {/* slop-scan-ignore: short isolated empty-state card, intentionally centred. */}
      <span
        aria-hidden="true"
        className="inline-flex size-12 items-center justify-center rounded-full bg-accent-50 text-accent-700"
      >
        <SearchX size={22} strokeWidth={2} />
      </span>
      <h3 className="mt-5 font-display text-2xl text-foreground">No stories under {category} yet</h3>
      <p className="mt-3 text-base text-muted-foreground">
        We have not published anything in this topic so far. Browse every story, or get in touch if
        there is industry news you think we should be covering.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button type="button" variant="primary" onClick={onReset}>
          Show all news
        </Button>
        <Button to="/contact" variant="secondary">
          Tell us your story
        </Button>
      </div>
    </div>
  );
}

export function News(): ReactElement {
  const sorted = useMemo(() => sortNewest(news), []);
  const filters = useMemo(() => buildFilters(sorted), [sorted]);
  const [active, setActive] = useState<Filter>(ALL);

  const featured = sorted[0];
  const rest = sorted.slice(1);

  const visible = useMemo(
    () => (active === ALL ? rest : rest.filter((item) => item.category === active)),
    [active, rest],
  );

  const featuredHidden = active !== ALL && featured?.category !== active;
  const hasResults = visible.length > 0 || !featuredHidden;

  return (
    <>
      <PageHero
        eyebrow="News"
        title="What's happening across the New Zealand marine industry"
        intro="One place for industry news, superyacht season updates, member milestones and award wins. We publish through the year, so the latest is always at the top."
        imageKey="aucklandHarbour"
        breadcrumb={breadcrumb}
      />

      {featured && !featuredHidden ? (
        <Section tone="paper">
          <Container>
            <Eyebrow className="mb-4">Latest story</Eyebrow>
            <FeaturedStory item={featured} />
          </Container>
        </Section>
      ) : null}

      <Section tone="muted" spacing={featured && !featuredHidden ? 'sm' : 'default'}>
        <Container>
          <SectionHeading
            eyebrow="The archive"
            title="Browse by topic"
            intro="Filter the feed to the part of the industry you follow, from export and superyacht news to member updates and events."
            className="mb-8"
          />

          <CategoryFilter filters={filters} active={active} onChange={setActive} />

          <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
            {hasResults
              ? `Showing ${active === ALL ? 'all stories' : active.toLowerCase() + ' stories'}.`
              : 'No stories match this topic.'}
          </p>

          <div className="mt-8">
            {hasResults ? (
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((item) => (
                  <li key={item.slug} className="flex">
                    <NewsCard item={item} className="w-full" />
                  </li>
                ))}
              </ul>
            ) : (
              <NoResults category={active} onReset={() => setActive(ALL)} />
            )}
          </div>
        </Container>
      </Section>

      <CTABand
        title="Want NZ Marine news in your inbox?"
        body="Members get the industry briefing first, along with event invitations and the detail behind these stories. Join NZ Marine to stay on top of what's moving in the sector."
        primary={{ label: 'Join NZ Marine', to: '/join' }}
        secondary={{ label: 'See upcoming events', to: '/events' }}
      />
    </>
  );
}
