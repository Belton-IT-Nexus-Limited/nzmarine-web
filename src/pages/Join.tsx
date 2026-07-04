import type { ReactElement } from 'react';
import { JoinForm } from '@/components/join/JoinForm';
import { JoinHero } from '@/components/join/JoinHero';
import { JoinAside } from '@/components/join/JoinAside';
import { JoinReveal } from '@/components/join/JoinReveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Section } from '@/components/ui/Section';
import { partnerLogos } from '@/content/media';

const proofLogos = partnerLogos.slice(0, 7);

/**
 * The moment of joining. A community-led hero opens the page, then the
 * accessible application sits beside a reassurance rail that shows what you are
 * joining and what happens next. Static: the submit is simulated and no payment
 * is taken. Carries the page's only h1 (in JoinHero).
 */
export function Join(): ReactElement {
  return (
    <>
      <JoinHero />

      <Section tone="muted" spacing="sm" className="border-b border-border">
        <Container>
          <JoinReveal
            className="flex flex-col items-center gap-6 text-center" // slop-scan-ignore: short label + logo row, not running prose
          >
            <p className="text-sm font-medium text-muted-foreground">
              In good company with builders, exporters and the trades who back them
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
              {proofLogos.map((logo) => (
                <li key={logo.slug}>
                  <img
                    src={logo.src}
                    alt="A NZ Marine member or partner company logo"
                    width={logo.w}
                    height={logo.h}
                    loading="lazy"
                    decoding="async"
                    className="h-8 w-auto max-w-[8rem] object-contain opacity-70 sm:h-9"
                  />
                </li>
              ))}
            </ul>
          </JoinReveal>
        </Container>
      </Section>

      <Section tone="paper" id="apply" className="scroll-mt-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-16">
            <div>
              <JoinReveal>
                <Eyebrow>Your application</Eyebrow>
                <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
                  Tell us about your business
                </h2>
                <p className="mt-4 max-w-prose text-lg text-muted-foreground">
                  Membership is open across the New Zealand marine industry, from boat builders and
                  refit yards to the trades and suppliers who keep them running. Work through the
                  sections below and we will take it from there.
                </p>
              </JoinReveal>
              <div className="mt-10">
                <JoinForm />
              </div>
            </div>

            <JoinAside />
          </div>
        </Container>
      </Section>
    </>
  );
}
