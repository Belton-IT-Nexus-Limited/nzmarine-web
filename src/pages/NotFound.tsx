import type { ReactElement } from 'react';
import { Compass } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';

/**
 * Accessible 404 page. Carries the single page h1, a short helpful message in
 * the NZ Marine voice and primary routes back into the site.
 */
export function NotFound(): ReactElement {
  return (
    <Section tone="paper">
      <Container size="prose" className="text-center"> {/* slop-scan-ignore: isolated 404 error page, centered by convention */}
        <Compass
          className="mx-auto size-10 text-accent-600"
          strokeWidth={1.75}
          aria-hidden="true"
        />
        <Eyebrow className="mt-4">Error 404</Eyebrow>
        <h1 className="mt-3 text-display-sm font-display text-foreground">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-[34rem] text-lg text-muted-foreground">
          We could not find the page you were after. It may have moved, or the
          link might be out of date. Head back to the home page, or find a
          Recognised Member in the directory.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button to="/" variant="primary">
            Back to home
          </Button>
          <Button to="/directory" variant="secondary">
            Find a Recognised Member
          </Button>
          <Button to="/membership" variant="ghost">
            Explore membership
          </Button>
        </div>
      </Container>
    </Section>
  );
}
