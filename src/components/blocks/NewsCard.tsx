import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { getImage, type ImageAsset } from '@/content/images';
import type { NewsItem } from '@/content/types';
import { cn } from '@/lib/cn';

export type NewsCardProps = {
  item: NewsItem;
  className?: string;
};

function resolveImage(imageKey: string): ImageAsset | undefined {
  return getImage(imageKey);
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-NZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/**
 * News/article teaser card. The headline carries a stretched link to the post
 * so the whole card is a single keyboard-reachable target, while the category
 * badge and date give scannable context.
 */
export function NewsCard({ item, className }: NewsCardProps): ReactElement {
  const image = resolveImage(item.imageKey);

  return (
    <Card as="article" interactive className={cn('group relative flex flex-col overflow-hidden', className)}>
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-muted">
        {image ? (
          <img
            src={image.src}
            alt={item.title}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        ) : (
          <div aria-hidden="true" className="size-full bg-ink" />
        )}
      </div>

      <CardBody className="flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <Badge tone="accent">{item.category}</Badge>
          <time dateTime={item.date} className="text-sm text-muted-foreground">
            {formatDate(item.date)}
          </time>
        </div>

        <h3 className="mt-3 font-display text-xl text-foreground">
          <Link
            to={`/news/${item.slug}`}
            className="rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface group-hover:underline"
          >
            {item.title}
          </Link>
        </h3>

        <p className="mt-2 text-base text-muted-foreground">{item.excerpt}</p>
      </CardBody>
    </Card>
  );
}
