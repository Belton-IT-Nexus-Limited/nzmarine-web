import { Fragment, type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/cn';

export type BreadcrumbItem = {
  label: string;
  to?: string;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  /** Set true when rendered on a dark navy band so text reads AA. */
  onInk?: boolean;
  className?: string;
};

/**
 * Ordered list of crumbs. The final item is the current page and carries
 * aria-current; earlier items with a `to` render as react-router links.
 */
export function Breadcrumbs({ items, onInk = false, className }: BreadcrumbsProps): ReactElement | null {
  if (items.length === 0) return null;

  const linkColor = onInk
    ? 'text-ink-muted-foreground hover:text-ink-foreground'
    : 'text-muted-foreground hover:text-link';
  const currentColor = onInk ? 'text-ink-foreground' : 'text-foreground';
  const sepColor = onInk ? 'text-ink-border' : 'text-border-strong';

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <Fragment key={`${item.label}-${index}`}>
              <li className="inline-flex items-center">
                {isLast || !item.to ? (
                  <span
                    className={cn('font-medium', isLast ? currentColor : linkColor)}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.to}
                    className={cn('rounded-xs underline-offset-2 hover:underline focus-visible:underline', linkColor)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true" className="inline-flex items-center">
                  <ChevronRight className={cn('size-3.5', sepColor)} strokeWidth={2} />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
