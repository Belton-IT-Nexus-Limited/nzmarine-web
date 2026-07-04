import { cn } from '@/lib/cn';

interface WordmarkProps {
  /** Pixel height of the logo; width scales with the 141:63 aspect ratio. */
  size?: number;
  className?: string;
  /** Accessible alt text. */
  title?: string;
  /** 'light' renders the logo white for dark/ink surfaces (footer, hero). */
  tone?: 'default' | 'light';
}

/**
 * The real NZ Marine wordmark (the existing brand logo), served from
 * /img/nzmarine-logo.png. On dark surfaces, tone="light" filters it to white.
 */
export function Wordmark({
  size = 38,
  className,
  title = 'NZ Marine Industry Association',
  tone = 'default',
}: WordmarkProps): React.JSX.Element {
  return (
    <img
      src="/img/nzmarine-logo.png"
      alt={title}
      width={141}
      height={63}
      style={{ height: `${size}px`, width: 'auto' }}
      className={cn('block max-w-none select-none', tone === 'light' && 'logo-invert', className)}
      decoding="async"
    />
  );
}
