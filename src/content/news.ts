import type { NewsItem } from './types';

/**
 * Real posts drawn from the original site's post sitemap
 * (audit/raw/sm_post-sitemap.xml). Slugs and dates are taken from the source
 * URLs; excerpts are written in the NZ Marine voice. Ordered newest first.
 */
export const news: NewsItem[] = [
  {
    slug: 'kawil-wins-2025-nz-millennium-cup',
    title: 'Kawil makes it a double, winning the 2025 NZ Millennium Cup',
    date: '2025-10-02',
    category: 'Superyacht',
    excerpt:
      'Kawil took line and overall honours to claim a second NZ Millennium Cup, capping three days of close racing in the Bay of Islands.',
    imageKey: 'heroHome',
  },
  {
    slug: 'members-gather-for-nz-marine-conference-2024',
    title: 'Members gather for the NZ Marine Conference 2024',
    date: '2024-08-20',
    category: 'Events',
    excerpt:
      'Member companies came together for the annual conference to hear from industry leaders and set the priorities for the year ahead.',
    imageKey: 'networkingEvent',
  },
  {
    slug: 'sunday-belongs-to-sassafras-nz-millennium-cup-day-2',
    title: 'Sunday belongs to Sassafras as the NZ Millennium Cup runs day two',
    date: '2024-03-05',
    category: 'Superyacht',
    excerpt:
      'Light morning breeze gave way to a solid afternoon sea breeze, and Sassafras made the most of it to take the day on the water.',
    imageKey: 'cruisingBay',
  },
  {
    slug: 'the-2024-nz-millennium-cup-has-crowned-a-winner',
    title: 'The 2024 NZ Millennium Cup has crowned a winner',
    date: '2024-03-05',
    category: 'Superyacht',
    excerpt:
      'Perseus 3 sailed a consistent series to take the 2024 NZ Millennium Cup, closing another strong season of superyacht racing in New Zealand.',
    imageKey: 'heroHome',
  },
  {
    slug: 'aucklands-waters-to-hum-with-superyacht-racing',
    title: 'Auckland’s waters set to hum with superyacht racing',
    date: '2024-02-21',
    category: 'Superyacht',
    excerpt:
      'A fleet of visiting superyachts lined up on the Hauraki Gulf for a week of racing, putting the New Zealand season on full display.',
    imageKey: 'aucklandHarbour',
  },
  {
    slug: 'nz-superyacht-welcome-function-held-this-week',
    title: 'NZ superyacht welcome function held this week',
    date: '2023-12-13',
    category: 'Superyacht',
    excerpt:
      'Captains, crew and member companies came together to mark the start of the season and welcome the yachts arriving for refit and cruising.',
    imageKey: 'networkingEvent',
  },
  {
    slug: 'new-zealand-marine-industry-milestone',
    title: 'New Zealand marine industry reaches a major revenue milestone',
    date: '2023-09-28',
    category: 'Industry',
    excerpt:
      'Figures shared at the annual conference confirmed the marine industry’s continued growth and its standing as one of the country’s strongest export sectors.',
    imageKey: 'manufacturing',
  },
  {
    slug: 'southern-spars-and-zerojet-nominated-for-dame-design-awards',
    title: 'Southern Spars and ZeroJet nominated for DAME Design Awards',
    date: '2023-10-27',
    category: 'Awards',
    excerpt:
      'Two New Zealand companies earned nominations at METSTRADE’s DAME Design Awards, a sign of the design talent coming out of the local industry.',
    imageKey: 'engineDetail',
  },
  {
    slug: 'tru-design-plastics-new-manufacturing-facility',
    title: 'Tru Design Plastics expands into a new manufacturing facility',
    date: '2021-11-14',
    category: 'Members',
    excerpt:
      'Component maker Tru Design Plastics moved into a larger purpose-built site, adding capacity to meet demand from boat builders here and overseas.',
    imageKey: 'manufacturing',
  },
  {
    slug: 'celebrating-20-years-of-the-auckland-on-water-boat-show',
    title: 'Celebrating 20 years of the Auckland On Water Boat Show',
    date: '2018-10-16',
    category: 'Events',
    excerpt:
      'Two decades on, the on-water show remains the country’s biggest gathering of builders, dealers and boaties on the Auckland waterfront.',
    imageKey: 'boatShow',
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find((item) => item.slug === slug);
}
