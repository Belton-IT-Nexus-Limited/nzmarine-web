import type { JSX, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface ProseProps {
  className?: string;
  children: ReactNode;
}

/**
 * Long-form content wrapper for articles and legal pages.
 * Constrains the measure to a comfortable reading width and styles the
 * common flow elements (paragraphs, headings, lists, links, quotes).
 */
export function Prose({ className, children }: ProseProps): JSX.Element {
  return (
    <div
      className={cn(
        'max-w-prose text-base text-foreground',
        '[&_p]:my-5 [&_p]:leading-relaxed',
        '[&>:first-child]:mt-0 [&>:last-child]:mb-0',
        '[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-foreground',
        '[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-display [&_h3]:text-xl [&_h3]:text-foreground',
        '[&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6',
        '[&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6',
        '[&_li]:my-2 [&_li]:pl-1 [&_li]:marker:text-muted-foreground',
        '[&_a]:text-link [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-accent-300 hover:[&_a]:decoration-accent-600',
        '[&_strong]:font-semibold [&_strong]:text-foreground',
        '[&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-accent-600 [&_blockquote]:pl-5 [&_blockquote]:text-lg [&_blockquote]:text-muted-foreground',
        className,
      )}
    >
      {children}
    </div>
  );
}
