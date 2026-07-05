import type { ReactElement } from 'react';
import type { Company } from '@/content/types';
import { cn } from '@/lib/cn';

export interface LogoTileProps {
  company: Company;
  /** Show the company name as a caption under the mark. */
  showName?: boolean;
  className?: string;
}

/**
 * A member company's real mark on the plate it was drawn for: paper for dark
 * marks, ink navy for reversed (white) marks. The tile links to the company
 * site, so every wall of these doubles as a working directory.
 */
export function LogoTile({ company, showName = true, className }: LogoTileProps): ReactElement {
  const ink = company.logoTheme === 'ink';
  return (
    <a
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex w-full flex-col overflow-hidden rounded-lg border shadow-card',
        'motion-safe:transition-[transform,box-shadow] motion-safe:duration-base motion-safe:ease-out-soft',
        'hover:-translate-y-0.5 hover:shadow-pop',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        ink ? 'border-navy-800 bg-ink-surface' : 'border-border bg-surface',
        className,
      )}
    >
      <span className="flex min-h-24 flex-1 items-center justify-center px-6 py-5">
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          loading="lazy"
          decoding="async"
          className="max-h-12 w-auto max-w-full object-contain opacity-90 motion-safe:transition-opacity motion-safe:duration-fast group-hover:opacity-100"
        />
      </span>
      {showName ? (
        <span
          className={cn(
            'block px-3 pb-3 text-center text-xs font-medium',
            ink ? 'text-ink-muted-foreground' : 'text-muted-foreground',
          )}
        >
          {company.name}
        </span>
      ) : (
        <span className="sr-only">{company.name}</span>
      )}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
