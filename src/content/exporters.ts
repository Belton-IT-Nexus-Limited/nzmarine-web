import { companies } from './companies';
import type { Company } from './types';

/**
 * NZ Marine Export Group companies. A filtered view over the single company
 * data source in companies.ts.
 */
export const exporters: Company[] = companies.filter((c) => c.exporter);
