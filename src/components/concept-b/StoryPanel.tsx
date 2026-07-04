import type { ReactElement } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Photo } from '@/content/media';
import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';

export type StoryPanelProps = {
  photo: Photo;
  eyebrow: string;
  title: string;
  body: string;
  alt: string;
  link: { label: string; to: string };
  /** Which side the COPY sits on (image takes the other side). */
  align?: 'left' | 'right';
  /** Flat surface behind the copy half, so consecutive panels never put two images together. */
  tone?: 'paper' | 'ink';
};

/**
 * Split editorial panel: one big real photo beside a flat-colour copy half.
 * Panels alternate side and tone, so there is always a solid-colour break
 * between images rather than full-bleed images stacked on each other.
 */
export function StoryPanel({
  photo,
  eyebrow,
  title,
  body,
  alt,
  link,
  align = 'left',
  tone = 'paper',
}: StoryPanelProps): ReactElement {
  const ink = tone === 'ink';
  return (
    <section
      className={cn(
        'overflow-hidden',
        ink ? 'bg-ink text-ink-foreground' : 'bg-background text-foreground',
      )}
    >
      <div className="grid lg:grid-cols-2">
        <div className={cn('relative min-h-[42vh] lg:min-h-[36rem]', align === 'left' && 'lg:order-2')}>
          <img
            src={photo.lg}
            alt={alt}
            width={photo.w}
            height={photo.h}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
        <div className="flex items-center px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <Reveal className="max-w-xl">
            <p
              className={cn(
                'text-sm font-semibold uppercase tracking-[0.18em]',
                ink ? 'text-accent-300' : 'text-accent-700',
              )}
            >
              {eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">{title}</h2>
            <p className={cn('mt-5 text-lg', ink ? 'text-ink-foreground/90' : 'text-muted-foreground')}>
              {body}
            </p>
            <Link
              to={link.to}
              className={cn(
                'mt-7 inline-flex items-center gap-2 rounded-sm text-base font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                ink ? 'text-accent-300 focus-visible:ring-offset-ink' : 'text-link focus-visible:ring-offset-background',
              )}
            >
              {link.label}
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
