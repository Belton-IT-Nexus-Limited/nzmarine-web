import type { ReactElement } from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { Card, CardBody } from '@/components/ui/Card';
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
 * Member/exporter card. The company website is the card's single action, so
 * the name carries a stretched external link that makes the whole card a
 * keyboard-reachable target. Recognised Members get a small accent marker.
 */
export function MemberCard({ company, className }: MemberCardProps): ReactElement {
  return (
    <Card as="article" interactive className={cn('group relative flex flex-col', className)}>
      <CardBody className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
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
          {company.recognised && (
            <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-accent-700">
              <ShieldCheck size={16} aria-hidden="true" />
              <span>Recognised Member</span>
            </span>
          )}
        </div>

        <dl className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <div className="inline-flex gap-1.5">
            <dt className="sr-only">Category</dt>
            <dd>{company.category}</dd>
          </div>
          {company.region && (
            <div className="inline-flex gap-1.5">
              <dt className="sr-only">Region</dt>
              <dd className="before:mr-4 before:text-border-strong before:content-['\00b7']">
                {company.region}
              </dd>
            </div>
          )}
        </dl>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-link group-hover:underline">
          {displayHost(company.url)}
          <ExternalLink size={16} aria-hidden="true" />
        </span>
      </CardBody>
    </Card>
  );
}
