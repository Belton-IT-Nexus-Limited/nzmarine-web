import { cn } from '@/lib/cn';
import { Eyebrow } from './Eyebrow';

type SectionHeadingAlign = 'left' | 'center';
type SectionHeadingAs = 'h2' | 'h3';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: SectionHeadingAlign;
  as?: SectionHeadingAs;
  className?: string;
}

const titleSize: Record<SectionHeadingAs, string> = {
  h2: 'text-3xl sm:text-4xl',
  h3: 'text-2xl sm:text-3xl',
};

/** Standard section header: eyebrow label, display heading, and optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  as = 'h2',
  className,
}: SectionHeadingProps): React.JSX.Element {
  const Heading = as;
  const centered = align === 'center';

  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        centered ? 'items-center text-center' : 'items-start text-left', // slop-scan-ignore: centered headings keep a capped prose measure (max-w-[44rem])
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading className={cn('font-display', titleSize[as])}>{title}</Heading>
      {intro ? (
        <p
          className={cn(
            'max-w-[44rem] text-lg text-muted-foreground',
            centered && 'mx-auto',
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
