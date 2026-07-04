import type { ReactElement } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { iconRegistry } from '@/lib/icons';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';

type FeatureColumns = 2 | 3 | 4;

/** A lucide icon component, or the PascalCase name of one (e.g. 'Anchor'). */
export type FeatureIcon = LucideIcon | string;

export interface FeatureItem {
  /** A lucide icon (component or name). Rendered decoratively. */
  icon: FeatureIcon;
  title: string;
  body: string;
  /** When set, the whole card becomes a route link and gains a hover lift. */
  to?: LinkProps['to'];
}

function resolveIcon(icon: FeatureIcon): LucideIcon {
  if (typeof icon !== 'string') return icon;
  return iconRegistry[icon] ?? ArrowRight;
}

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: FeatureColumns;
  className?: string;
}

const columnClass: Record<FeatureColumns, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

const cardBase =
  'group flex h-full flex-col rounded-lg border border-border bg-surface p-6 text-left shadow-card';

const interactiveCard =
  'motion-safe:transition-[transform,box-shadow] motion-safe:duration-[--duration-base] ' +
  'motion-safe:ease-[--ease-out-soft] hover:-translate-y-0.5 hover:shadow-pop ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-background';

function IconBadge({ icon }: { icon: FeatureIcon }): ReactElement {
  const Icon = resolveIcon(icon);
  return (
    <span
      aria-hidden="true"
      className="inline-flex size-11 items-center justify-center rounded-md bg-accent-50 text-accent-700"
    >
      <Icon size={20} strokeWidth={2} />
    </span>
  );
}

function FeatureBody({ item }: { item: FeatureItem }): ReactElement {
  return (
    <>
      <IconBadge icon={item.icon} />
      <h3 className="mt-5 font-display text-xl text-foreground">{item.title}</h3>
      <p className="mt-2 text-base text-muted-foreground">{item.body}</p>
      {item.to !== undefined && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-link group-hover:underline">
          Read more
          <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
        </span>
      )}
    </>
  );
}

/** Responsive grid of icon-led feature cards. Cards with a `to` link and lift. */
export function FeatureGrid({ items, columns = 3, className }: FeatureGridProps): ReactElement {
  return (
    <Container className={className}>
      <ul className={cn('grid grid-cols-1 gap-5', columnClass[columns])}>
        {items.map((item) => (
          <li key={item.title} className="flex">
            {item.to !== undefined ? (
              <Link to={item.to} className={cn(cardBase, interactiveCard, 'w-full')}>
                <FeatureBody item={item} />
              </Link>
            ) : (
              <div className={cn(cardBase, 'w-full')}>
                <FeatureBody item={item} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </Container>
  );
}
