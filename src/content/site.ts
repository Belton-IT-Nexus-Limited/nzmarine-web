import type { SocialLinks, Stat } from './types';

export interface SiteFacts {
  name: string;
  short: string;
  tagline: string;
  mission: string;
  phone: string;
  /** Tel: form for href, digits only with country prefix. */
  phoneHref: string;
  email: string;
  address: {
    line1: string;
    city: string;
    country: string;
  };
  social: SocialLinks;
  memberCount: number;
  stats: Stat[];
}

export const site: SiteFacts = {
  name: 'NZ Marine Industry Association',
  short: 'NZ Marine',
  tagline: 'The national body for New Zealand’s marine industry.',
  mission:
    'to grow the New Zealand marine industry through the profiling and collaboration of member companies, advocacy, industry training and the promotion of safe boating.',
  phone: '09 360 0056',
  phoneHref: 'tel:+6493600056',
  email: 'info@nzmarine.com',
  address: {
    line1: 'Westhaven, Auckland',
    city: 'Auckland',
    country: 'New Zealand',
  },
  social: {
    facebook: 'https://www.facebook.com/nzmarine',
    linkedin: 'https://www.linkedin.com/company/nz-marine-industry-association',
  },
  memberCount: 500,
  stats: [
    { value: '500+', label: 'member companies' },
    { value: '160m', label: 'vessels built, refit and maintained' },
    { value: '100+', label: 'companies serving visiting superyachts' },
    { value: '60+', label: 'years representing the industry' },
  ],
};
