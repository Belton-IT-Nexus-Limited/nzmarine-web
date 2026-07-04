import { Anchor, Compass, Globe, Hammer, Users, Wrench } from 'lucide-react';
import { photos, type Photo } from '@/content/media';

/** Find a real photo by slug, with a safe fallback so a component never breaks. */
function photoBySlug(slug: string): Photo {
  const found = photos.find((p) => p.slug === slug);
  if (found) return found;
  const landscape = photos.find((p) => p.orientation === 'landscape');
  return landscape ?? photos[0];
}

export interface SectorGroupContent {
  /** Matches a slug in @/content/sectorGroups. */
  slug: string;
  icon: typeof Globe;
  /** Real photo for this community. */
  photo: Photo;
  /** Meaningful alt for the photo. */
  alt: string;
  /** One line of recognition: "this is you". */
  whoItsFor: string;
  /** Two or three concrete things you get from belonging. */
  whatYouGet: string[];
  /** True for the two groups carrying NZ to the world. */
  spotlight?: boolean;
}

/**
 * The per-group presentation layer. The factual summaries live in
 * @/content/sectorGroups; this adds the imagery and the "who you are / what you
 * get" framing so each group reads as a community a member can belong to.
 */
export const groupContent: SectorGroupContent[] = [
  {
    slug: 'export-group',
    icon: Globe,
    photo: photoBySlug('sites-10-2026-03-mets-stand-2025'),
    alt: 'New Zealand companies on the shared NZ Marine stand at METSTRADE.',
    whoItsFor: 'You sell New Zealand marine products, technology or services to buyers overseas.',
    whatYouGet: [
      'A place on the national stand at METSTRADE and other international shows, so you reach buyers at a fraction of the solo cost.',
      'Trade missions and market introductions run under "Taking New Zealand Marine Companies Global".',
      'A room full of exporters who have already done what you are trying to do, and who share what works.',
    ],
    spotlight: true,
  },
  {
    slug: 'refit-superyacht',
    icon: Anchor,
    photo: photoBySlug('2025-12-nz-marine-sy-welcome25-cp-1030'),
    alt: 'Crew and industry guests at the NZ Marine superyacht welcome function.',
    whoItsFor: 'You build, refit or service superyachts, or manage the projects that bring them here.',
    whatYouGet: [
      'A united voice keeping New Zealand the South Pacific hub for refit work on vessels up to around 160 metres.',
      'The superyacht welcome and the relationships with captains, crew and agents that fill your yard.',
      'Work alongside the other yards and specialists who land and deliver the big projects.',
    ],
    spotlight: true,
  },
  {
    slug: 'boat-builders',
    icon: Hammer,
    photo: photoBySlug('2019-05-stabicraft-4-capture'),
    alt: 'A New Zealand-built boat on the water during builder testing.',
    whoItsFor: 'You build production or custom boats, from trailer boats to large composite hulls.',
    whatYouGet: [
      'A say in the standards your work is measured against, and help meeting them.',
      'Apprentices and training pathways to bring the next generation of builders through your shop.',
      'Discounted space at the boat shows where your buyers come to look and to order.',
    ],
  },
  {
    slug: 'marine-trades-services',
    icon: Wrench,
    photo: photoBySlug('2019-02-fastmount-feb-2019'),
    alt: 'A marine trades specialist at work on fittings in the workshop.',
    whoItsFor: 'You are a rigger, electrician, painter, engineer, chandler or broker keeping boats on the water.',
    whatYouGet: [
      'Forty or more ready-to-use contracts and documents so you trade on fair, tested terms.',
      'Workforce and training support to find, keep and qualify good people.',
      'The Recognised Member mark that tells customers you trade to a code.',
    ],
  },
  {
    slug: 'recreational',
    icon: Compass,
    photo: photoBySlug('2026-04-hutchwilco-nz-boat-show-sat-17may2025-3600px'),
    alt: 'Crowds and boats on the water at a New Zealand boat show.',
    whoItsFor: 'You are a retailer, dealer or business serving recreational boating and the boating public.',
    whatYouGet: [
      'The boat shows and on-water events that put buyers in front of your stand.',
      'Work that lifts consumer confidence and promotes safe boating across the sector.',
      'A connection to the whole supply chain, from the builders to the buyers.',
    ],
  },
];

export const fallbackContent: Omit<SectorGroupContent, 'slug'> = {
  icon: Users,
  photo: photoBySlug(''),
  alt: 'NZ Marine member companies at an industry function.',
  whoItsFor: 'You work in this part of the New Zealand marine industry.',
  whatYouGet: [
    'A direct say in the priorities NZ Marine takes to government, training providers and markets.',
    'The people doing your kind of work, in one room.',
  ],
};

export function contentForSlug(slug: string): Omit<SectorGroupContent, 'slug'> {
  return groupContent.find((g) => g.slug === slug) ?? fallbackContent;
}
