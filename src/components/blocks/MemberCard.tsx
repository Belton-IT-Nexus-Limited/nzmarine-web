import type { ReactElement } from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { Company } from '@/content/types';
import { cn } from '@/lib/cn';

export type MemberCardProps = {
  company: Company;
  className?: string;
};

/** Strips the protocol so the visible website label stays compact. */
function displayHost(url: string): string {
  try {
    return new URL(url).host.replace(/^www\./, '');
  } catch {
    return url;
  }
}

/**
 * Member content box. The company's real mark sits on a logo plate drawn in
 * the colourway the brand publishes (paper for dark marks, ink navy for
 * reversed marks), above the name, a one-line blurb and the trade/region
 * meta. The name carries a stretched external link so the whole card is one
 * keyboard-reachable target; Recognised Members wear the shield on the plate.
 */
export function MemberCard({ company, className }: MemberCardProps): ReactElement {
  const ink = company.logoTheme === 'ink';
  return (
    <Card
      as="article"
      interactive
      className={cn('group relative flex flex-col overflow-hidden', className)}
    >
      <div
        className={cn(
          'relative flex h-32 items-center justify-center border-b px-8',
          ink ? 'border-navy-800 bg-ink-surface' : 'border-border bg-surface-muted',
        )}
      >
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          loading="lazy"
          decoding="async"
          className="max-h-14 w-auto max-w-[13rem] object-contain motion-safe:transition-transform motion-safe:duration-base motion-safe:ease-out-soft group-hover:scale-[1.04]"
        />
        {company.recognised && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-border bg-surface/95 px-2 py-0.5 text-xs font-semibold text-accent-700 shadow-xs">
            <ShieldCheck size={14} aria-hidden="true" />
            Recognised
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-foreground">
          <a
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface group-hover:underline"
          >
            {company.name}
          </a>
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">{company.blurb}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-5 text-sm">
          <dl className="flex flex-wrap items-center gap-x-2 text-muted-foreground">
            <div>
              <dt className="sr-only">Trade category</dt>
              <dd className="font-medium">{company.category}</dd>
            </div>
            {company.region && (
              <div className="flex items-center gap-x-2">
                <span aria-hidden="true" className="text-border-strong">
                  &middot;
                </span>
                <dt className="sr-only">Region</dt>
                <dd>{company.region}</dd>
              </div>
            )}
          </dl>
          <span className="inline-flex items-center gap-1.5 font-semibold text-link group-hover:underline">
            {displayHost(company.url)}
            <ExternalLink size={16} aria-hidden="true" />
          </span>
        </div>
      </div>
    </Card>
  );
}
