import type { ReactElement } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { site } from '@/content/site';

/**
 * A flat ink stat band that sits as a breather between image-led sections.
 * No photo, just the verified scale figures from `site` set in large tabular
 * Fraunces numerals so the page reads as substantial and credible. The numbers
 * fade up on mount and stay visible by default, including with reduced motion.
 */
export function ImpactStats(): ReactElement {
  const reduceMotion = useReducedMotion();
  const stats = site.stats;

  return (
    <section className="bg-ink text-ink-foreground section-y">
      <Container>
        <div className="max-w-[44rem]">
          <Eyebrow className="text-accent-300">By the numbers</Eyebrow>
          <h2 className="mt-4 font-display text-3xl text-ink-foreground sm:text-4xl">
            Six decades of building one of New Zealand&rsquo;s strongest export industries.
          </h2>
          <p className="mt-5 text-lg text-ink-muted-foreground">
            These are the figures behind the work. A national membership, the scale of vessels our
            yards handle, and the network that looks after superyachts visiting our waters.
          </p>
        </div>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-lg border border-ink-border bg-ink-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-ink-surface p-7 sm:p-8"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1], delay: index * 0.08 }} // slop-scan-ignore: single opacity+translate enter
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-5xl tabular-nums tracking-tight text-accent-300 sm:text-6xl">
                  {stat.value}
                </span>
                <span className="mt-3 block text-base text-ink-muted-foreground">
                  {stat.label}
                </span>
              </dd>
            </motion.div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
