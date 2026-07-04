import type { ReactElement } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { partnerLogos } from '@/content/media';
import { Reveal } from './Reveal';

function logoName(slug: string): string {
  return slug
    .replace(/^sites-10-/, '')
    .replace(/^\d{4}-\d{2}-/, '')
    .split('-')
    .filter((part) => part.length > 1 && part !== 'logo' && part !== 'web')
    .slice(0, 4)
    .join(' ');
}

/**
 * Credibility wall of real member and partner marks. Logos render on light
 * cards so they stay legible, with larger cells and a membership CTA so the
 * proof section also keeps the conversion arc moving.
 */
export function PartnerWall(): ReactElement {
  const featured = partnerLogos.slice(0, 30);

  return (
    <section className="bg-surface-muted text-foreground section-y">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[minmax(16rem,0.36fr)_minmax(0,0.64fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                eyebrow="Proof"
                title="Recognised companies, visible together"
                intro="Builders, exporters, equipment makers and award winners. A few of the members and partners behind the New Zealand marine industry."
              />
              <Link
                to="/membership/recognised-members"
                className="mt-6 inline-flex items-center gap-2 rounded-sm text-base font-semibold text-link hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                What Recognised Member means
                <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
            {featured.map((logo, index) => (
              <li key={logo.slug} className="flex">
                <Reveal delay={(index % 10) * 0.03} className="flex w-full">
                  <div className="flex aspect-[4/3] w-full items-center justify-center rounded-lg border border-border bg-surface p-5 shadow-card motion-safe:transition-[transform,box-shadow] motion-safe:duration-base hover:-translate-y-1 hover:shadow-pop">
                    <img
                      src={logo.src}
                      alt={`${logoName(logo.slug)} member or partner logo`}
                      width={logo.w}
                      height={logo.h}
                      decoding="async"
                      className="max-h-14 w-auto max-w-full object-contain opacity-85 motion-safe:transition-opacity motion-safe:duration-fast hover:opacity-100"
                    />
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
