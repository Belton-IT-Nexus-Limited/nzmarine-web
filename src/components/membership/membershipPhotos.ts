import { byTheme, type Photo } from '@/content/media';

const people = byTheme('people');
const racing = byTheme('racing');

/** First photo of a list, falling back to a second list so a slot is never blank. */
function pick(primary: Photo[], fallback: Photo[], index = 0): Photo {
  return primary[index] ?? fallback[index] ?? primary[0] ?? fallback[0];
}

/** The lead community photo for the page hero: a gathering full of faces. */
export const heroPhoto: Photo = pick(people, racing);

/**
 * A small set of real member-gathering photos for the "who belongs" collage.
 * De-duplicated against the hero so the same frame never shows twice.
 */
export function gatheringPhotos(count: number): Photo[] {
  const seen = new Set<string>([heroPhoto.slug]);
  const result: Photo[] = [];
  for (const photo of [...people, ...racing]) {
    if (seen.has(photo.slug)) continue;
    seen.add(photo.slug);
    result.push(photo);
    if (result.length >= count) break;
  }
  return result;
}

/** Plain, human alt text for a member-gathering photo. */
export const gatheringAlt = 'Members of the New Zealand marine industry together at an NZ Marine function';
