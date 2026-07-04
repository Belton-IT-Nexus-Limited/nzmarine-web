import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Globe, Mail, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FriendsHero } from '@/components/friends/FriendsHero';
import { FriendsForm } from '@/components/friends/FriendsForm';
import { CommunityStrip } from '@/components/friends/CommunityStrip';
import { Reveal } from '@/components/friends/Reveal';
import { photos } from '@/content/media';
import { site } from '@/content/site';

const breadcrumb = [
  { label: 'Home', to: '/' },
  { label: 'Membership', to: '/membership' },
  { label: 'Friends of NZ Marine' },
];

const heroPhoto =
  photos.find((p) => p.slug === '2023-12-sy-welcome2023-mc-1207') ?? photos[0];

const benefits = [
  {
    icon: Newspaper,
    title: 'Quarterly newsletters',
    body: 'A short round-up four times a year covering member news, new projects and what is happening across the New Zealand marine scene.',
  },
  {
    icon: Compass,
    title: 'News you can use offshore',
    body: 'Updates on new superyacht berths, refit capacity and cruising destinations, so you can point work and visiting yachts back towards home.',
  },
  {
    icon: Globe,
    title: 'A line back to the industry',
    body: 'You become an informal ambassador. Send referrals our way and we pass them to the right New Zealand company.',
  },
];

export function Friends(): ReactElement {
  return (
    <>
      <FriendsHero
        eyebrow="Free to join"
        title="Friends of NZ Marine"
        intro="A free way for New Zealanders working in marine offshore, and anyone who follows the industry, to stay part of what is happening back home. No fee, no obligation, just a line back to the people and the boats."
        photo={heroPhoto}
        alt="A warm crowd gathered together at the NZ Marine superyacht welcome function on the waterfront."
        breadcrumb={breadcrumb}
        actions={
          <Button href="#signup" variant="accent" size="lg">
            Join as a Friend
          </Button>
        }
      />

      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="max-w-prose">
              <Eyebrow>Who it is for</Eyebrow>
              <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
                Wherever you are, you are still one of us
              </h2>
              <p className="mt-5 text-lg text-foreground">
                Step into almost any marine setting in the world, a superyacht in Monaco, a yard in
                Gibraltar, a spar maker in the Netherlands, and you will probably find a Kiwi.
                Friends of NZ Marine keeps those people, and anyone who cares about boating in New
                Zealand, connected to the industry at home.
              </p>
              <p className="mt-4 text-base text-muted-foreground">
                There is no fee and no obligation. You get our newsletter, you hear about new
                superyacht berths and cruising destinations, and you can send work and referrals
                back to New Zealand companies when the chance comes up.
              </p>
              <p className="mt-4 text-base text-muted-foreground">
                It is separate from company membership. If you run a marine business in New Zealand,{' '}
                <Link to="/join" className="text-link underline-offset-2 hover:underline">
                  join NZ Marine
                </Link>{' '}
                as a Recognised Member instead.
              </p>
            </Reveal>
            <div id="signup" className="scroll-mt-24">
              <Reveal delay={0.1}>
                <FriendsForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted" spacing="sm">
        <CommunityStrip />
      </Section>

      <Section tone="paper">
        <Container>
          <SectionHeading
            eyebrow="What you get"
            title="What being a Friend gives you"
            intro="A small, useful connection to the New Zealand marine industry, sent straight to your inbox."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Reveal key={benefit.title} delay={index * 0.08}>
                  <div className="h-full rounded-lg border border-border bg-surface p-6 shadow-card">
                    <span className="flex size-11 items-center justify-center rounded-md bg-accent-50 text-accent-700">
                      <Icon aria-hidden="true" className="size-[1.25rem]" />
                    </span>
                    <h3 className="mt-5 font-display text-xl text-foreground">{benefit.title}</h3>
                    <p className="mt-2 text-base text-muted-foreground">{benefit.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="muted" spacing="sm">
        <Container>
          <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-3">
              <Mail aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent-700" />
              <div className="max-w-prose">
                <h2 className="font-display text-xl text-foreground">Got a question first?</h2>
                <p className="mt-2 text-base text-muted-foreground">
                  Email the office and we will get back to you promptly. We are happy to explain how
                  referrals work or how your details are kept.
                </p>
              </div>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex shrink-0 items-center gap-1.5 text-base font-medium text-link underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
