import type { ReactElement } from 'react';
import { StatBand } from '@/components/blocks/StatBand';
import { CTABand } from '@/components/blocks/CTABand';
import { MembershipHero } from '@/components/membership/MembershipHero';
import { WhoBelongs } from '@/components/membership/WhoBelongs';
import { WhyItMatters } from '@/components/membership/WhyItMatters';
import { FindYourPeople } from '@/components/membership/FindYourPeople';
import { MemberProofWall } from '@/components/membership/MemberProofWall';
import { site } from '@/content/site';

/**
 * The membership hub: an invitation into the New Zealand marine industry. The
 * page is built as a belonging pitch. An image-led hero with the one h1, who
 * already belongs and the 500+ figure, the scale of the industry, why belonging
 * matters, the sector groups as communities to join, a proof wall of member
 * marks, and a warm close to the application. Tones alternate so no two navy ink
 * bands sit next to each other.
 */
export function Membership(): ReactElement {
  return (
    <>
      <MembershipHero />
      <WhoBelongs />
      <StatBand stats={site.stats} tone="ink" />
      <WhyItMatters />
      <FindYourPeople />
      <MemberProofWall />
      <CTABand
        title="Join the industry"
        body="Apply online and put your business alongside more than 500 marine companies, with the people, the tools and the standing that membership brings. We will be glad to welcome you in."
        primary={{ label: 'Join NZ Marine', to: '/join' }}
        secondary={{ label: 'Talk to the membership team', to: '/contact' }}
      />
    </>
  );
}
