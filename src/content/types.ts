/**
 * Shared content types for the NZ Marine site.
 * All content modules in src/content import from here so pages get one
 * consistent shape for every data surface.
 */

export type ImageKey =
  | 'heroHome'
  | 'aucklandHarbour'
  | 'cruisingBay'
  | 'bannerBuild'
  | 'bannerRefit'
  | 'yachtDesign'
  | 'boatBuild'
  | 'networkingEvent'
  | 'membershipMeet'
  | 'boatShow'
  | 'manufacturing'
  | 'engineDetail';

export interface NavItem {
  label: string;
  to?: string;
  href?: string;
  children?: NavItem[];
}

export interface FooterColumn {
  title: string;
  items: NavItem[];
}

export interface EventItem {
  slug: string;
  title: string;
  /** ISO date (start), used for ordering and machine-readable markup. */
  date: string;
  /** Human label, e.g. "14 March 2026". */
  dateLabel: string;
  location: string;
  summary: string;
  body: string[];
  priceFrom: string;
  audience: string;
  imageKey: ImageKey;
}

export type NewsCategory =
  | 'Industry'
  | 'Events'
  | 'Superyacht'
  | 'Export'
  | 'Members'
  | 'Awards';

export interface NewsItem {
  slug: string;
  title: string;
  /** ISO date. */
  date: string;
  category: NewsCategory;
  excerpt: string;
  imageKey: ImageKey;
}

export type CompanyCategory =
  | 'Sails & Rigging'
  | 'Propulsion'
  | 'Electronics'
  | 'Boat Builders'
  | 'Components'
  | 'Services';

export type Region =
  | 'Auckland'
  | 'Whangārei'
  | 'Tauranga'
  | 'Christchurch'
  | 'Nelson';

export interface Company {
  name: string;
  url: string;
  category: CompanyCategory;
  region?: Region;
  recognised?: boolean;
}

export interface SectorGroup {
  slug: string;
  name: string;
  summary: string;
}

export interface Benefit {
  /** lucide-react icon name. */
  icon: string;
  title: string;
  body: string;
}

export type PublicationType = 'Guide' | 'Magazine' | 'Report' | 'Policy';

export interface Publication {
  title: string;
  description: string;
  type: PublicationType;
  href?: string;
}

export interface GovernancePerson {
  name: string;
  role: string;
  company?: string;
}

export interface Stat {
  value: string;
  label: string;
  sublabel?: string;
}

export interface SocialLinks {
  facebook: string;
  linkedin: string;
}
