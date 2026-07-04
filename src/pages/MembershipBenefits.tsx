import type { ReactElement } from 'react';
import { CTABand } from '@/components/blocks/CTABand';
import { BenefitsHero } from '@/components/benefits/BenefitsHero';
import { BenefitsLede } from '@/components/benefits/BenefitsLede';
import { BenefitSpotlights } from '@/components/benefits/BenefitSpotlights';
import { SupportingBenefits } from '@/components/benefits/SupportingBenefits';
import { JoinNudge } from '@/components/benefits/JoinNudge';
import { BenefitsProof } from '@/components/benefits/BenefitsProof';

/**
 * Member benefits page. Every benefit is framed as both belonging and concrete
 * value, image-supported and scannable, leading to one clear path: /join.
 * Section tones alternate ink -> paper -> muted so no two ink bands sit together.
 */
export function MembershipBenefits(): ReactElement {
  return (
    <>
      <BenefitsHero />
      <BenefitsLede />
      <BenefitSpotlights />
      <SupportingBenefits />
      <JoinNudge />
      <BenefitsProof />
      <CTABand
        title="These are your people. Come and join them."
        body="Send your application and we will confirm your fee, then get you connected to the rest of the industry."
        primary={{ label: 'Join NZ Marine', to: '/join' }}
        secondary={{ label: 'Find a Recognised Member', to: '/directory' }}
      />
    </>
  );
}
