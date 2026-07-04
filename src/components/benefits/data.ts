import type { Photo } from '@/content/media';
import { photoBySlug } from './photos';

/** A benefit told as a full editorial panel: the feeling, then the concrete payoff. */
export interface Spotlight {
  eyebrow: string;
  title: string;
  /** The belonging angle: what it feels like to have the industry around you. */
  belonging: string;
  /** The concrete angle: the time, money or standing it puts in your pocket. */
  value: string;
  photo: Photo;
  alt: string;
  align: 'left' | 'right';
}

export const spotlights: Spotlight[] = [
  {
    eyebrow: 'Advocacy',
    title: 'Someone in the room when it counts',
    belonging:
      'When a rule or a council decision lands on the marine industry, you are not facing it on your own. The whole sector turns up as one voice.',
    value:
      'We put the industry case to government, councils and regulators, so the decisions that affect your yard are made with marine people at the table.',
    photo: photoBySlug('2025-08-conference-pic-2025', 'people'),
    alt: 'Marine industry members gathered at the NZ Marine annual conference.',
    align: 'left',
  },
  {
    eyebrow: 'Documents and tools',
    title: 'The paperwork, already done for you',
    belonging:
      'You get the shortcuts the rest of the industry already trusts, instead of working every contract and policy out from scratch on your own.',
    value:
      'Members get more than 40 ready-to-use contract, employment and health and safety templates written for the marine trades. That saves real legal cost and real hours.',
    photo: photoBySlug('2019-02-fastmount-feb-2019', 'craft'),
    alt: 'A New Zealand marine business at work in the workshop.',
    align: 'right',
  },
  {
    eyebrow: 'People and skills',
    title: 'Train the people your yard runs on',
    belonging:
      'You join the network that brings new people into the trade, so the next generation of boat builders and technicians knows your business exists.',
    value:
      'We back marine apprenticeships and trade training, and help members find, grow and keep the skilled people their work depends on.',
    photo: photoBySlug('2020-05-josh-vogels-etnz-apprentice-scaled-e1589420339966', 'craft'),
    alt: 'A marine apprentice learning a trade in a New Zealand yard.',
    align: 'left',
  },
  {
    eyebrow: 'Export and trade',
    title: 'Reach the world without going it alone',
    belonging:
      'Through the Export Group you stand alongside the rest of New Zealand marine on the world stage, under one flag at the shows that matter.',
    value:
      'Join the New Zealand pavilion at METSTRADE and take part in trade missions, sharing the cost of reaching overseas buyers you could not reach on your own.',
    photo: photoBySlug('sites-10-2026-03-mets-stand-2025', 'people'),
    alt: 'The New Zealand pavilion and members at the METSTRADE show.',
    align: 'right',
  },
];

/** The remaining benefits, framed short for a scannable grid. */
export interface BenefitNote {
  icon: string;
  title: string;
  body: string;
}

export const supportingBenefits: BenefitNote[] = [
  {
    icon: 'Tent',
    title: 'Discounted boat-show space',
    body: 'Exhibit at the Auckland Boat Show and other events on better terms, with discounted stand space and priority on where you sit on site.',
  },
  {
    icon: 'BadgeCheck',
    title: 'The Recognised Member mark',
    body: 'Recognised Members sign up to our Code of Ethics. The mark tells owners, crew and customers that your business meets a standard they can trust.',
  },
  {
    icon: 'Users',
    title: 'Networking that opens doors',
    body: 'From the annual conference to superyacht season functions, you meet the people who decide where work goes and how boats get built.',
  },
  {
    icon: 'BarChart3',
    title: 'Industry data and insight',
    body: 'We track how the sector is performing and share what we learn, so you can plan with a clearer picture of the market you work in.',
  },
];

export interface JoinStep {
  step: string;
  title: string;
  body: string;
}

export const joinSteps: JoinStep[] = [
  {
    step: '1',
    title: 'Check that you belong here',
    body: 'Membership is open to companies and sole traders in the New Zealand marine industry, from boat builders and refit yards to suppliers, designers and service businesses.',
  },
  {
    step: '2',
    title: 'Send your application',
    body: 'Tell us about your business through the membership application. Recognised Members also sign up to our Code of Ethics, which sets the standard customers can expect.',
  },
  {
    step: '3',
    title: 'Get your quote and get connected',
    body: 'Fees are set by company size, so a sole trader pays less than a large yard. We confirm your annual fee once we have your application, then welcome you in.',
  },
];
