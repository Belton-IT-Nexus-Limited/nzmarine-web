import type { ReactElement } from 'react';
import type { LinkProps } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';

interface CTAAction {
  label: string;
  to: LinkProps['to'];
}

interface CTABandProps {
  title: string;
  body?: string;
  primary: CTAAction;
  secondary?: CTAAction;
  className?: string;
}

/**
 * Closing call-to-action band on the navy ink surface. Carries one accent
 * primary action and an optional quieter secondary link.
 */
export function CTABand({ title, body, primary, secondary, className }: CTABandProps): ReactElement {
  return (
    <section className={cn('bg-ink text-ink-foreground section-y', className)}>
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-ink-foreground sm:text-4xl">{title}</h2>
            {body ? (
              <p className="mt-4 max-w-prose text-lg text-ink-muted-foreground">{body}</p>
            ) : null}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button to={primary.to} variant="accent" size="lg">
              {primary.label}
            </Button>
            {secondary ? (
              <Button
                to={secondary.to}
                variant="ghost"
                size="lg"
                className="text-ink-foreground hover:bg-ink-surface"
              >
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
