import type { ReactElement } from 'react';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { iconRegistry } from '@/lib/icons';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { benefits } from '@/content/benefits';
import { byTheme } from '@/content/media';
import { Reveal } from './Reveal';

const photo = byTheme('people')[1] ?? byTheme('people')[0];
const featured = benefits.slice(0, 4);

function resolveIcon(name: string): LucideIcon {
  return iconRegistry[name] ?? ArrowRight;
}

/**
 * The conversion centrepiece. A call to belong on the navy ink band, the four
 * headline reasons to join, and the page's repeated accent CTA. A real photo of
 * the people in the industry sits beside the pitch under a flat navy scrim.
 */
export function MembershipPitch(): ReactElement {
  return (
    <section className="bg-ink text-ink-foreground section-y">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-300">
                Membership
              </p>
              <h2 className="mt-4 font-display text-4xl text-ink-foreground sm:text-5xl">
                This is the industry. Be part of it.
              </h2>
              <p className="mt-5 max-w-prose text-lg text-ink-foreground/90">
                Membership is how the New Zealand marine industry speaks with one voice, trains its
                people and opens doors overseas. Join more than 500 companies and put the national
                body to work for your business.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button to="/join" variant="accent" size="lg">
                  Join NZ Marine
                  <ArrowRight className="size-5" aria-hidden="true" strokeWidth={2} />
                </Button>
                <Button
                  to="/membership/benefits"
                  variant="ghost"
                  size="lg"
                  className="border border-ink-border text-ink-foreground hover:bg-ink-surface"
                >
                  See all member benefits
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-lg">
              <img
                src={photo.lg}
                alt="Members of the New Zealand marine industry together at an event"
                width={photo.w}
                height={photo.h}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-ink-border bg-ink-border sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((benefit) => {
            const Icon = resolveIcon(benefit.icon);
            return (
              <li key={benefit.title} className="bg-ink-surface p-6">
                <span
                  aria-hidden="true"
                  className="inline-flex size-11 items-center justify-center rounded-md bg-accent-900/40 text-accent-300"
                >
                  <Icon size={20} strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-display text-lg text-ink-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm text-ink-muted-foreground">{benefit.body}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
