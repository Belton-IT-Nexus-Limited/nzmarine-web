import type { ImageKey } from './types';

/** A resolved image: a public path, alt text, and intrinsic size (prevents CLS). */
export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Image manifest. Keys map to files in public/img (real NZ Marine photography).
 * Components take an image KEY and resolve it through getImage(), so a missing
 * key degrades to a plain navy treatment instead of a broken image. The
 * intrinsic width/height let the browser reserve space and avoid layout shift.
 */
export const images: Record<ImageKey, ImageAsset> = {
  heroHome: {
    src: '/img/superyacht-racing.jpg',
    alt: 'A superyacht under sail racing on the water off the New Zealand coast.',
    width: 2048,
    height: 1365,
  },
  aucklandHarbour: {
    src: '/img/auckland-harbour.jpg',
    alt: 'Boats and the city skyline across Auckland’s Waitematā Harbour.',
    width: 788,
    height: 466,
  },
  cruisingBay: {
    src: '/img/cruising-bay.jpg',
    alt: 'A yacht at anchor in a sheltered New Zealand bay with bush-clad hills behind.',
    width: 800,
    height: 420,
  },
  bannerBuild: {
    src: '/img/banner-build.jpg',
    alt: 'A new boat hull under construction in a New Zealand boat-building shed.',
    width: 1600,
    height: 468,
  },
  bannerRefit: {
    src: '/img/banner-refit.jpg',
    alt: 'A superyacht in a refit yard with crew working on deck.',
    width: 1600,
    height: 468,
  },
  yachtDesign: {
    src: '/img/yacht-design.jpg',
    alt: 'A rendered yacht design showing the hull lines of a New Zealand-built vessel.',
    width: 2048,
    height: 1448,
  },
  boatBuild: {
    src: '/img/boat-build.jpg',
    alt: 'Boat builders working on a composite hull in the workshop.',
    width: 2048,
    height: 1372,
  },
  networkingEvent: {
    src: '/img/networking-event.jpg',
    alt: 'Industry members talking at an NZ Marine networking function.',
    width: 2048,
    height: 1365,
  },
  membershipMeet: {
    src: '/img/membership-meet.jpg',
    alt: 'Two marine business people shaking hands at an industry event.',
    width: 2048,
    height: 1365,
  },
  boatShow: {
    src: '/img/boat-show.jpg',
    alt: 'Crowds and boats on the water at a New Zealand boat show.',
    width: 768,
    height: 512,
  },
  manufacturing: {
    src: '/img/manufacturing.jpg',
    alt: 'Marine components being manufactured on a factory floor.',
    width: 2048,
    height: 1365,
  },
  engineDetail: {
    src: '/img/engine-detail.jpg',
    alt: 'Close detail of a marine engine and propulsion fittings.',
    width: 768,
    height: 508,
  },
};

/** Resolve an image key (string-tolerant) to its asset, or undefined. */
export function getImage(key?: string): ImageAsset | undefined {
  if (!key) return undefined;
  return (images as Record<string, ImageAsset>)[key];
}
