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
  | 'Services'
  | 'Apparel';

export type Region =
  | 'Auckland'
  | 'Whangārei'
  | 'Tauranga'
  | 'Whanganui'
  | 'Christchurch'
  | 'Nelson';

/**
 * Which surface a company's mark is drawn for. Marks published only in a
 * reversed (white) colourway need the ink card; dark marks sit on paper.
 */
export type LogoTheme = 'paper' | 'ink';

export interface Company {
  slug: string;
  name: string;
  url: string;
  category: CompanyCategory;
  /** One-line description of what the company does, in the site voice. */
  blurb: string;
  /** Path under /img/members/. Every company has a real, current mark. */
  logo: string;
  logoTheme: LogoTheme;
  region?: Region;
  recognised?: boolean;
  /** Member of the NZ Marine Export Group. */
  exporter?: boolean;
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
