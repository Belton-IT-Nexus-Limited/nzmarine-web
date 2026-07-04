import type { EventItem } from './types';

/**
 * Real and recurring NZ Marine events. Ordered soonest first.
 * Dates are forward-looking against the 2026/2027 calendar described in the
 * build contract.
 */
export const events: EventItem[] = [
  {
    slug: 'tahiti-networking-function-2026',
    title: 'Tahiti Networking Function 2026',
    date: '2026-09-10',
    dateLabel: '10 September 2026',
    location: 'Papeete, Tahiti',
    summary:
      'An evening for member companies working with captains, crew and agents as the South Pacific superyacht season builds.',
    body: [
      'Each year a number of superyachts cross the South Pacific on their way to New Zealand, and Tahiti is one of the first stops on that route. This function brings NZ Marine members together with the captains, crew and management who decide where a yacht refits and provisions.',
      'It is a relaxed evening built around introductions. If your yard, brokerage or service business wants visiting yachts to plan New Zealand into their itinerary, this is where those conversations start.',
      'Places are limited and the event tends to fill from the export and superyacht sectors first. Members travelling to French Polynesia should register early.',
    ],
    priceFrom: 'From NZ$120 per member',
    audience: 'Export and superyacht members',
    imageKey: 'cruisingBay',
  },
  {
    slug: 'fiji-networking-function-2026',
    title: 'Fiji Networking Function 2026',
    date: '2026-10-08',
    dateLabel: '8 October 2026',
    location: 'Denarau, Fiji',
    summary:
      'A second South Pacific gathering, timed for the run of yachts heading south to New Zealand for the refit season.',
    body: [
      'Fiji sits on the same migration path as Tahiti and many yachts stop there before the final leg to Auckland or Whangārei. This function gives members a chance to meet crews while plans for the season are still open.',
      'The format mirrors the Tahiti evening. Expect captains, crew and management agents alongside New Zealand yards, refit specialists and the businesses that support a visiting yacht.',
      'NZ Marine coordinates the guest list so members are introduced to the right people rather than left to work the room alone.',
    ],
    priceFrom: 'From NZ$120 per member',
    audience: 'Export and superyacht members',
    imageKey: 'cruisingBay',
  },
  {
    slug: 'metstrade-2026',
    title: 'METSTRADE 2026',
    date: '2026-11-17',
    dateLabel: '17 to 19 November 2026',
    location: 'RAI Amsterdam, Netherlands',
    summary:
      'The NZ Marine pavilion at the world’s largest marine equipment trade show, where member exporters meet international buyers.',
    body: [
      'METSTRADE is the major meeting point for the global marine equipment trade, and NZ Marine has run a New Zealand pavilion there for years. Exhibiting under the national banner gives members a recognised presence and a steady flow of qualified buyers.',
      'The Export Group books the floor space, manages the build and handles the logistics so member companies can focus on selling. Smaller exporters often share the stand, which keeps the cost of reaching Europe within reach.',
      'If you are weighing up a first overseas show, talk to the export team about joining the pavilion rather than going it alone.',
    ],
    priceFrom: 'Pavilion space from NZ$4,500',
    audience: 'NZ Marine Export Group members',
    imageKey: 'boatShow',
  },
  {
    slug: 'nz-millennium-cup-2027',
    title: 'NZ Millennium Cup 2027',
    date: '2027-02-24',
    dateLabel: '24 to 26 February 2027',
    location: 'Bay of Islands, New Zealand',
    summary:
      'New Zealand’s premier superyacht regatta returns to the Bay of Islands, the showcase event of the visiting yacht season.',
    body: [
      'The NZ Millennium Cup is the country’s longest-running superyacht regatta and the high point of the season for the yachts that refit and cruise here. Racing runs over three days in the Bay of Islands, one of the best sailing grounds in the South Pacific.',
      'For members the regatta is as much about business as racing. Owners, captains and crew gather in one place, and the companies that built, refit and serviced these yachts are right there with them.',
      'NZ Marine works alongside the organisers each year to make sure the New Zealand industry is well represented on and off the water.',
    ],
    priceFrom: 'Spectator and hospitality packages vary',
    audience: 'Members, owners and crew',
    imageKey: 'heroHome',
  },
  {
    slug: 'auckland-boat-show-2027',
    title: 'Auckland Boat Show 2027',
    date: '2027-03-11',
    dateLabel: '11 to 14 March 2027',
    location: 'Viaduct Harbour, Auckland',
    summary:
      'The flagship on-water show for New Zealand boating, with discounted stand space for NZ Marine members.',
    body: [
      'The Auckland Boat Show is the largest consumer boating event in the country and a fixture on the calendar for builders, dealers and the marine trades. Held on the water at the Viaduct, it puts members in front of tens of thousands of boat buyers over four days.',
      'NZ Marine members receive discounted stand space and priority on site selection, which makes a real difference to the cost of exhibiting.',
      'Whether you are launching a new model or building your customer list, the show is the single best place each year to reach New Zealand boaties in person.',
    ],
    priceFrom: 'Member stands from NZ$3,200',
    audience: 'Builders, dealers and marine trades',
    imageKey: 'boatShow',
  },
];

export function getEventBySlug(slug: string): EventItem | undefined {
  return events.find((event) => event.slug === slug);
}
