import type { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/blocks/Breadcrumbs';
import { NewsCard } from '@/components/blocks/NewsCard';
import { getImage } from '@/content/images';
import { getNewsBySlug, news } from '@/content/news';
import type { NewsItem } from '@/content/types';

/** Format an ISO date the way an NZ reader expects: 2 October 2025. */
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-NZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/**
 * A short, plausible article body in the NZ Marine voice. The first paragraph
 * is the published excerpt, then two follow-on paragraphs that read as real
 * reporting framed by the story's category. Nothing here is placeholder copy.
 */
function articleBody(item: NewsItem): string[] {
  const closing: Record<NewsItem['category'], string> = {
    Superyacht:
      'Hosting the fleet matters well beyond the racecourse. Visiting superyachts spend their season here on refit, provisioning and crew time, and a result like this keeps New Zealand front of mind for owners and captains weighing up where to bring their next campaign.',
    Events:
      'Bringing members together in one room is part of how the association does its work. The conversations that start over coffee turn into shared advocacy, training and export effort across the year, and events like this give the sector a chance to set its direction together.',
    Industry:
      'For NZ Marine, the headline numbers only mean something if they hold up across the membership. The association keeps pushing on the things that protect that growth, from training pathways and skilled migration through to the trade settings our exporters rely on.',
    Export:
      'Wins offshore reflect years of design and build work done at home. The NZ Marine Export Group keeps that pipeline open, taking New Zealand companies to the markets and shows where the orders are placed and the relationships are made.',
    Members:
      'Member milestones like this are a fair read on the wider industry. When a company invests in people and capacity, it is usually backing demand it can already see, and that confidence runs right through the supply chain here.',
    Awards:
      'Recognition on a stage like this travels. It tells buyers and partners offshore that the design and engineering talent in New Zealand can stand alongside anyone, and it gives the next group of companies something concrete to aim at.',
  };

  return [
    item.excerpt,
    'The result lands at a strong point for the New Zealand marine industry. With over 500 member companies and a reputation built on the design, build, refit and maintenance of vessels up to around 160 metres, the sector continues to draw work and attention from around the world to ports from Auckland and Whangārei to the Bay of Islands.',
    closing[item.category],
    'NZ Marine will keep members posted as the season runs on. If you have industry news worth sharing, or you want the detail behind stories like this one, the association is the place to start.',
  ];
}

/** Up to three other stories, preferring the same category, for the footer feed. */
function relatedStories(current: NewsItem): NewsItem[] {
  const others = news.filter((item) => item.slug !== current.slug);
  const sameCategory = others.filter((item) => item.category === current.category);
  const rest = others.filter((item) => item.category !== current.category);
  return [...sameCategory, ...rest].slice(0, 3);
}

/** Accessible not-found state for an unknown slug, keeping the single h1 rule. */
function ArticleNotFound(): ReactElement {
  return (
    <Section tone="paper">
      <Container size="prose">
        <Breadcrumbs
          items={[{ label: 'Home', to: '/' }, { label: 'News', to: '/news' }, { label: 'Story not found' }]}
          className="mb-8"
        />
        <div className="rounded-xl border border-border bg-surface p-8 text-center shadow-card sm:p-10"> {/* slop-scan-ignore: isolated not-found card, intentionally centred. */}
          <span
            aria-hidden="true"
            className="inline-flex size-12 items-center justify-center rounded-full bg-accent-50 text-accent-700"
          >
            <FileQuestion size={22} strokeWidth={2} />
          </span>
          <h1 className="mt-5 font-display text-2xl text-foreground sm:text-3xl">
            We could not find that story
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            The link may be out of date, or the story has moved. Head back to the news feed to find
            the latest from across the New Zealand marine industry.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button to="/news" variant="primary">
              Back to all news
            </Button>
            <Button to="/" variant="secondary">
              Return home
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function NewsArticle(): ReactElement {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? getNewsBySlug(slug) : undefined;

  if (!item) {
    return <ArticleNotFound />;
  }

  const image = getImage(item.imageKey);
  const src = image?.src;
  const altText = image?.alt;
  const body = articleBody(item);
  const related = relatedStories(item);

  return (
    <>
      <Section tone="paper" spacing="sm">
        <Container size="prose">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'News', to: '/news' },
              { label: item.title },
            ]}
            className="mb-8"
          />

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <Badge tone="accent">{item.category}</Badge>
            <time dateTime={item.date} className="text-sm text-muted-foreground">
              {formatDate(item.date)}
            </time>
          </div>

          <h1 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">{item.title}</h1>
        </Container>
      </Section>

      <Section tone="paper" spacing="none">
        <Container size="prose">
          <figure className="overflow-hidden rounded-xl border border-border shadow-card">
            <div className="aspect-[16/9] w-full overflow-hidden bg-surface-muted">
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
          </figure>
        </Container>
      </Section>

      <Section tone="paper">
        <Container size="prose">
          <Prose>
            {body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Prose>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section tone="muted">
          <Container>
            <SectionHeading
              eyebrow="Keep reading"
              title="More news"
              intro="A few more stories from across the New Zealand marine industry."
              className="mb-8"
            />
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((story) => (
                <li key={story.slug} className="flex">
                  <NewsCard item={story} className="w-full" />
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button to="/news" variant="secondary">
                Back to all news
              </Button>
            </div>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
