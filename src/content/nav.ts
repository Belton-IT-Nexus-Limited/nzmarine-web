import type { FooterColumn, NavItem } from './types';

export const primaryNav: NavItem[] = [
  {
    label: 'Membership',
    to: '/membership',
    children: [
      { label: 'Why join NZ Marine', to: '/membership' },
      { label: 'Member benefits', to: '/membership/benefits' },
      { label: 'Recognised Members', to: '/membership/recognised-members' },
      { label: 'Sector groups', to: '/membership/sector-groups' },
      { label: 'Friends of NZ Marine', to: '/friends-of-nz-marine' },
    ],
  },
  { label: 'Directory', to: '/directory' },
  { label: 'Export', to: '/export' },
  { label: 'Destination NZ', to: '/destination-nz' },
  { label: 'Events', to: '/events' },
  { label: 'News', to: '/news' },
  { label: 'Training', to: '/training' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'About NZ Marine', to: '/about' },
      { label: 'Publications', to: '/publications' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

export const footerNav: FooterColumn[] = [
  {
    title: 'Membership',
    items: [
      { label: 'Why join NZ Marine', to: '/membership' },
      { label: 'Member benefits', to: '/membership/benefits' },
      { label: 'Recognised Members', to: '/membership/recognised-members' },
      { label: 'Sector groups', to: '/membership/sector-groups' },
      { label: 'Friends of NZ Marine', to: '/friends-of-nz-marine' },
    ],
  },
  {
    title: 'Industry',
    items: [
      { label: 'Member directory', to: '/directory' },
      { label: 'Export', to: '/export' },
      { label: 'Destination NZ', to: '/destination-nz' },
      { label: 'Training', to: '/training' },
    ],
  },
  {
    title: 'Connect',
    items: [
      { label: 'Events', to: '/events' },
      { label: 'News', to: '/news' },
      { label: 'Contact', to: '/contact' },
      { label: 'Join NZ Marine', to: '/join' },
    ],
  },
  {
    title: 'About',
    items: [
      { label: 'About NZ Marine', to: '/about' },
      { label: 'Publications', to: '/publications' },
      { label: 'Contact', to: '/contact' },
      { label: 'Privacy', to: '/privacy' },
    ],
  },
];
