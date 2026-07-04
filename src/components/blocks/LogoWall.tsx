import type { ReactElement } from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { cn } from '@/lib/cn';

export interface LogoItem {
  name: string;
  /** External site for the member or exporter. Renders a focusable link. */
  href?: string;
  /** Optional logo image path. When absent the name renders as a chip. */
  src?: string;
}

interface LogoWallProps {
  title?: string;
  logos: LogoItem[];
  className?: string;
}

const chipBase =
  'inline-flex items-center justify-center rounded-md border border-border bg-surface ' +
  'px-4 py-3 text-center text-sm font-medium text-muted-foreground'; // slop-scan-ignore: centring a short member name inside a fixed chip, not running text

const chipInteractive =
  'motion-safe:transition-colors motion-safe:duration-fast motion-safe:ease-out-soft ' +
  'hover:border-accent-300 hover:text-accent-700 ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-background';

function LogoImage({ logo }: { logo: LogoItem }): ReactElement {
  return (
    <img
      src={logo.src}
      alt={logo.name}
      loading="lazy"
      decoding="async"
      className="max-h-10 w-auto opacity-80 motion-safe:transition-opacity motion-safe:duration-fast hover:opacity-100"
    />
  );
}

function LogoContent({ logo }: { logo: LogoItem }): ReactElement {
  return logo.src ? <LogoImage logo={logo} /> : <span>{logo.name}</span>;
}

/** Grid of member or exporter marks. Names without art become bordered chips. */
export function LogoWall({ title, logos, className }: LogoWallProps): ReactElement {
  return (
    <Container className={className}>
      {title ? <Eyebrow className="mb-8 block">{title}</Eyebrow> : null}
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {logos.map((logo) => (
          <li key={logo.name} className="flex">
            {logo.href ? (
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(chipBase, chipInteractive, 'w-full')}
              >
                <LogoContent logo={logo} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <span className={cn(chipBase, 'w-full')}>
                <LogoContent logo={logo} />
              </span>
            )}
          </li>
        ))}
      </ul>
    </Container>
  );
}
