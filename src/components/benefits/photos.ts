import { byTheme, heroPhotos, photos, type Photo } from '@/content/media';

/**
 * Resolve a real photo by slug, falling back to a sensible themed photo so a
 * renamed asset never produces a broken image. The fallback chain prefers a
 * people/community shot, then any landscape hero frame.
 */
export function photoBySlug(slug: string, fallbackTheme: Photo['theme'] = 'people'): Photo {
  const match = photos.find((p) => p.slug === slug);
  if (match) return match;

  const themed = byTheme(fallbackTheme).find((p) => p.orientation === 'landscape');
  if (themed) return themed;

  return heroPhotos[0];
}
