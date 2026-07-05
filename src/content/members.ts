import { companies } from './companies';
import type { Company } from './types';

/**
 * Recognised Member companies for the directory. A filtered view over the
 * single company data source in companies.ts.
 */
export const members: Company[] = companies.filter((c) => c.recognised);
