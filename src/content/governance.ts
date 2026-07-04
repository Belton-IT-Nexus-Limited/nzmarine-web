import type { GovernancePerson } from './types';

/**
 * NOTE: These are REPRESENTATIVE PLACEHOLDERS for layout and structure only.
 * The real chief executive, board chair and board members are to be supplied by
 * NZ Marine before launch. Names below are illustrative and must be replaced.
 */

export const executive: GovernancePerson = {
  name: 'Chief Executive',
  role: 'Chief Executive',
  company: 'NZ Marine Industry Association',
};

export const boardChair: GovernancePerson = {
  name: 'Board Chair',
  role: 'Chair of the Board',
  company: 'Member company',
};

export const boardMembers: GovernancePerson[] = [
  { name: 'Board Member', role: 'Director', company: 'Boat building member' },
  { name: 'Board Member', role: 'Director', company: 'Refit and superyacht member' },
  { name: 'Board Member', role: 'Director', company: 'Export Group member' },
  { name: 'Board Member', role: 'Director', company: 'Marine trades member' },
  { name: 'Board Member', role: 'Director', company: 'Electronics member' },
  { name: 'Board Member', role: 'Director', company: 'Recreational sector member' },
];
