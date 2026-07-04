import type { ReactElement } from 'react';
import { CTABand } from '@/components/blocks/CTABand';
import { HowGroupsWork } from '@/components/sector-groups/HowGroupsWork';
import { SectorGroupsHero } from '@/components/sector-groups/SectorGroupsHero';
import { SectorGroupsList } from '@/components/sector-groups/SectorGroupsList';

/** Membership > Sector groups. "Find your people": each group as a community to belong to. */
export function SectorGroups(): ReactElement {
  return (
    <>
      <SectorGroupsHero />
      <HowGroupsWork />
      <SectorGroupsList />
      <CTABand
        title="Your people are already here"
        body="Join NZ Marine to take your seat in a sector group, help set the priorities for your part of the industry and meet the businesses doing your kind of work. Not sure which group is right? See what membership gives you, or apply and we will point you to the right room."
        primary={{ label: 'Join NZ Marine', to: '/join' }}
        secondary={{ label: 'See membership benefits', to: '/membership' }}
      />
    </>
  );
}
