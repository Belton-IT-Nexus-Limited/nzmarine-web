import type { ReactElement } from 'react';
import { FeatureGrid, type FeatureItem } from '@/components/blocks/FeatureGrid';

/**
 * The four journeys into NZ Marine. Each card links a distinct audience to the
 * page built for them, so a visitor self-selects from the homepage rather than
 * hunting through the nav.
 */
const audiences: FeatureItem[] = [
  {
    icon: 'UserPlus',
    title: 'Become a member',
    body: 'Join more than 500 marine companies and get advocacy, standard contracts, training and the Recognised Member mark behind your business.',
    to: '/join',
  },
  {
    icon: 'Search',
    title: 'Find a Recognised Member',
    body: 'Search the directory for a builder, refit yard, broker or trade supplier that has signed our Code of Ethics.',
    to: '/directory',
  },
  {
    icon: 'Anchor',
    title: 'Visiting by superyacht',
    body: 'Plan a refit, provisioning or cruising season in New Zealand and connect with the yards and agents who look after visiting yachts.',
    to: '/destination-nz',
  },
  {
    icon: 'Globe',
    title: 'Export with New Zealand',
    body: 'Reach overseas buyers through the Export Group, the METSTRADE pavilion and trade missions that share the cost of going global.',
    to: '/export',
  },
];

/** Audience self-select grid: four routes into the association from the home page. */
export function HomeAudiences(): ReactElement {
  return <FeatureGrid items={audiences} columns={4} />;
}
