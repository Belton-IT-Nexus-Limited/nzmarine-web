import type { Company } from './types';

/**
 * Representative directory of Recognised Member companies for the directory
 * page filters. Drawn from the Export Group list and well-known New Zealand
 * marine businesses, with regions assigned to where each company is based.
 */
export const members: Company[] = [
  { name: 'Doyle Sails New Zealand', url: 'https://www.doylesails.com', category: 'Sails & Rigging', region: 'Auckland', recognised: true },
  { name: 'Southern Spars', url: 'https://www.southernspars.com', category: 'Sails & Rigging', region: 'Auckland', recognised: true },
  { name: 'North Sails', url: 'https://www.northsails.com', category: 'Sails & Rigging', region: 'Auckland', recognised: true },
  { name: 'C-Tech Ltd', url: 'https://www.c-tech.co.nz', category: 'Sails & Rigging', region: 'Auckland', recognised: true },
  { name: 'Hamilton Jet', url: 'https://www.hamiltonjet.com', category: 'Propulsion', region: 'Christchurch', recognised: true },
  { name: 'Sealegs', url: 'https://www.sealegs.com', category: 'Boat Builders', region: 'Auckland', recognised: true },
  { name: 'Smuggler Marine', url: 'https://www.smuggler.co.nz', category: 'Boat Builders', region: 'Auckland', recognised: true },
  { name: 'McMullen & Wing', url: 'https://www.mcmullenandwing.com', category: 'Boat Builders', region: 'Auckland', recognised: true },
  { name: 'Lloyd Stevenson Boat Builders', url: 'https://www.lloydstevensonyachts.co.nz', category: 'Boat Builders', region: 'Auckland', recognised: true },
  { name: 'Q-West', url: 'https://www.q-west.com', category: 'Boat Builders', region: 'Whangārei', recognised: true },
  { name: 'Orams Marine', url: 'https://www.oramsmarine.co.nz', category: 'Services', region: 'Auckland', recognised: true },
  { name: 'Babcock NZ', url: 'https://www.babcock.com.au', category: 'Services', region: 'Auckland', recognised: true },
  { name: '37 South', url: 'https://www.37southyachts.com', category: 'Services', region: 'Auckland', recognised: true },
  { name: 'Marine Management Ltd', url: 'https://www.mml.org.nz', category: 'Services', region: 'Auckland', recognised: true },
  { name: 'Electronic Navigation Ltd', url: 'https://www.enl.co.nz', category: 'Electronics', region: 'Auckland', recognised: true },
  { name: 'Garmin New Zealand', url: 'https://www.garmin.com/en-NZ/c/marine', category: 'Electronics', region: 'Auckland', recognised: true },
  { name: 'Pacific Aerials', url: 'https://www.pacificaerials.co.nz', category: 'Electronics', region: 'Auckland', recognised: true },
  { name: 'Martronics', url: 'https://martronics.com', category: 'Electronics', region: 'Tauranga', recognised: true },
  { name: 'Fastmount', url: 'https://www.fastmount.com', category: 'Components', region: 'Auckland', recognised: true },
  { name: 'Propspeed International', url: 'https://www.propspeed.com', category: 'Components', region: 'Auckland', recognised: true },
  { name: 'Tru Design Plastics', url: 'https://www.tru-design-plastics.com', category: 'Components', region: 'Tauranga', recognised: true },
  { name: 'Circa Engineering & Marine', url: 'https://www.circamarine.co.nz', category: 'Components', region: 'Nelson', recognised: true },
  { name: 'Balex Marine', url: 'https://www.balexmarine.com', category: 'Components', region: 'Tauranga', recognised: true },
  { name: 'Ultralon Products', url: 'https://www.ultralon.co.nz', category: 'Components', region: 'Auckland', recognised: true },
];
