import type { ReactElement } from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { DirectoryMember } from '@/content/directory';
import { cn } from '@/lib/cn';

/** Strips the protocol so the visible website label stays compact. */
function displayHost(url: string): string {
  try {
    return new URL(url).host.replace(/^www\./, '');
  } catch {
    return url;
  }
}

/**
 * A member content box for the full directory grid. Shows the real logo the
 * association hosts (on its paper or ink plate), the name, a short blurb and
 * the region, and links to the company website. Members without a logo get a
 * clean lettermark so the grid stays even.
 */
export function DirectoryMemberCard({ member }: { member: DirectoryMember }): ReactElement {
  const ink = member.logoTheme === 'ink';
  return (
    <Card as="article" interactive className="group relative flex flex-col overflow-hidden">
      <div
        className={cn(
          'flex h-28 items-center justify-center border-b px-6',
          ink ? 'border-navy-800 bg-ink-surface' : 'border-border bg-surface-muted',
        )}
      >
        {member.logo ? (
          <img
            src={member.logo}
            alt={`${member.name} logo`}
            loading="lazy"
            decoding="async"
            className="max-h-14 w-auto max-w-[12rem] object-contain motion-safe:transition-transform motion-safe:duration-base group-hover:scale-[1.04]"
          />
        ) : (
          <span className="font-display text-4xl text-accent-700/90">{member.name.charAt(0)}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg leading-tight text-foreground">
          {member.url ? (
            <a
              href={member.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface group-hover:underline"
            >
              {member.name}
            </a>
          ) : (
            member.name
          )}
        </h3>

        {member.blurb && (
          <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{member.blurb}</p>
        )}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 pt-4 text-sm">
          {member.region ? (
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <MapPin size={14} aria-hidden="true" />
              {member.region}
            </span>
          ) : (
            <span />
          )}
          {member.url && (
            <span className="inline-flex items-center gap-1.5 font-semibold text-link group-hover:underline">
              {displayHost(member.url)}
              <ExternalLink size={14} aria-hidden="true" />
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
