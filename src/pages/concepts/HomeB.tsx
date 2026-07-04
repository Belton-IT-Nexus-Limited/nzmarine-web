import type { ReactElement } from 'react';
import { HeroImmersive } from '@/components/concept-b/HeroImmersive';
import { ScaleBand } from '@/components/concept-b/ScaleBand';
import { StorySections } from '@/components/concept-b/StorySections';
import { MomentsMosaic } from '@/components/concept-b/MomentsMosaic';
import { MembershipPitch } from '@/components/concept-b/MembershipPitch';
import { PartnerWall } from '@/components/concept-b/PartnerWall';
import { EventsRail } from '@/components/concept-b/EventsRail';
import { ClosingCTA } from '@/components/concept-b/ClosingCTA';

/**
 * Concept B home — bold, immersive, image-led. The page is a persuasion arc:
 * a full-viewport cinematic hero, the scale of the industry, the build-cruise-
 * race story over full-bleed photos, a dense moments wall, the membership
 * pitch, the proof wall, what's on next, and a closing call to join. The page's
 * one h1 lives in the hero; every later band opens with an h2.
 */
export function HomeB(): ReactElement {
  return (
    <>
      <HeroImmersive />
      <ScaleBand />
      <StorySections />
      <MomentsMosaic />
      <MembershipPitch />
      <PartnerWall />
      <EventsRail />
      <ClosingCTA />
    </>
  );
}
