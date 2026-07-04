import type { ReactElement } from 'react';
import { AboutHero } from '@/components/about/AboutHero';
import { OurStory } from '@/components/about/OurStory';
import { ImpactStats } from '@/components/about/ImpactStats';
import { WhatWeDo } from '@/components/about/WhatWeDo';
import { Milestones } from '@/components/about/Milestones';
import { Governance } from '@/components/about/Governance';
import { CTABand } from '@/components/blocks/CTABand';

/**
 * About NZ Marine. The sections alternate image and flat-colour bands so two
 * images never sit directly together: hero (image) -> story (muted) -> scale
 * (ink) -> what we do (paper) -> history (ink) -> governance (muted) -> join.
 */
export function About(): ReactElement {
  return (
    <>
      <AboutHero />
      <OurStory />
      <ImpactStats />
      <WhatWeDo />
      <Milestones />
      <Governance />
      <CTABand
        title="Help shape New Zealand's marine industry"
        body="Membership is how the industry speaks with one voice, trains its people and opens doors overseas. Add your business to it."
        primary={{ label: 'Join NZ Marine', to: '/join' }}
        secondary={{ label: 'Talk to us', to: '/contact' }}
      />
    </>
  );
}
