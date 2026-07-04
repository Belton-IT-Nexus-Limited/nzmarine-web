import type { ReactElement } from 'react';
import { byTheme } from '@/content/media';
import type { Photo } from '@/content/media';
import { StoryPanel, type StoryPanelProps } from './StoryPanel';

const craft = byTheme('craft');
const destination = byTheme('destination');
const racing = byTheme('racing');

/** First photo of a theme, falling back to the next theme so a panel is never blank. */
function pick(primary: Photo[], fallback: Photo[]): Photo {
  return primary[0] ?? fallback[0];
}

const panels: StoryPanelProps[] = [
  {
    photo: pick(craft, destination),
    eyebrow: 'Build and refit',
    title: 'Built and refit to the metre, up to 160 metres.',
    body: 'New Zealand yards design, build, refit and maintain vessels up to around 160 metres. The trades, the materials and the craft sit in one place, which is why owners send their boats here.',
    alt: 'Boat builders at work inside a New Zealand marine yard',
    link: { label: 'See what members build', to: '/membership' },
    align: 'left',
    tone: 'paper',
  },
  {
    photo: pick(destination, craft),
    eyebrow: 'Cruise and refit season',
    title: 'The South Pacific hub for superyacht refit and cruising.',
    body: 'Yachts cross the Pacific to refit, provision and cruise New Zealand waters, from the Hauraki Gulf to the Bay of Islands. More than 100 member companies stand ready when they arrive.',
    alt: 'A superyacht cruising clear New Zealand coastal water',
    link: { label: 'Plan a superyacht visit', to: '/destination-nz' },
    align: 'right',
    tone: 'ink',
  },
  {
    photo: pick(racing, destination),
    eyebrow: 'Race and gather',
    title: 'Where the industry races, meets and does the deals.',
    body: 'From the NZ Millennium Cup in the Bay of Islands to the Auckland Boat Show, the season brings owners, captains, crew and the companies that built their boats together in one place.',
    alt: 'Superyachts racing under sail at a New Zealand regatta',
    link: { label: 'See upcoming events', to: '/events' },
    align: 'left',
    tone: 'paper',
  },
];

/** The build, cruise and race story as alternating split panels (image + flat copy half). */
export function StorySections(): ReactElement {
  return (
    <>
      {panels.map((panel) => (
        <StoryPanel key={panel.eyebrow} {...panel} />
      ))}
    </>
  );
}
