import { directoryCategories, directoryMembers, type DirectoryMember } from '@/content/directory';

/**
 * Client-side member finder. A visitor describes a problem in plain words
 * ("my propeller keeps fouling", "need a refit yard in Whangarei") and this
 * scores every member against it, using a marine-domain synonym map so the
 * everyday words people use resolve to the association's trade categories.
 *
 * This is deterministic keyword retrieval, not an LLM. It runs entirely in the
 * browser, so it works on the static site with no API and no data leaving the
 * page. The scoring is transparent: category hits weigh most, then the member
 * name, then their description.
 */

/** Extra trigger words that map a phrase to category indexes (see directory.ts order). */
const SYNONYMS: { words: string[]; cats: number[] }[] = [
  { words: ['foul', 'fouling', 'antifoul', 'antifouling', 'growth', 'weed', 'slime', 'barnacle', 'propspeed', 'coating', 'coat'], cats: [12, 25, 23] },
  { words: ['paint', 'painting', 'spray', 'topcoat', 'primer'], cats: [12, 25] },
  { words: ['prop', 'propeller', 'propulsion', 'thruster', 'shaft', 'stern gear', 'running gear', 'jet', 'waterjet', 'outdrive', 'sterndrive'], cats: [14] },
  { words: ['engine', 'motor', 'diesel', 'outboard', 'inboard', 'repower', 'overhaul', 'mechanical'], cats: [13, 26, 31] },
  { words: ['sail', 'sails', 'sailmaker', 'mainsail', 'headsail', 'genoa', 'jib', 'spinnaker', 'canvas', 'sail repair'], cats: [15, 27] },
  { words: ['rig', 'rigging', 'mast', 'spar', 'boom', 'standing rigging', 'running rigging', 'furler'], cats: [15, 27] },
  { words: ['electric', 'electrical', 'electronics', 'wiring', 'nav', 'navigation', 'radar', 'chartplotter', 'sonar', 'battery', 'batteries', 'solar', 'autopilot', 'instrument', 'radio'], cats: [16] },
  { words: ['hydraulic', 'plumbing', 'winch', 'anchor', 'windlass', 'steering'], cats: [17, 28] },
  { words: ['water maker', 'watermaker', 'desalination', 'desalinator', 'reverse osmosis'], cats: [18] },
  { words: ['fridge', 'refrigeration', 'air con', 'aircon', 'air conditioning', 'ventilation', 'hvac', 'cooling'], cats: [19] },
  { words: ['upholstery', 'interior', 'trim', 'cushion', 'canvas', 'cabinetry', 'joinery', 'fitout', 'fit out'], cats: [20, 36] },
  { words: ['refit', 'refurbish', 'restore', 'restoration', 'rebuild', 'conversion', 'convert'], cats: [21] },
  { words: ['haul out', 'haulout', 'dry dock', 'drydock', 'travel lift', 'travellift', 'slipway', 'hardstand', 'lift out'], cats: [22] },
  { words: ['build', 'builder', 'built', 'new build', 'boatbuilder', 'boat builder'], cats: [9, 10, 11] },
  { words: ['superyacht', 'super yacht', 'megayacht', 'mega yacht', 'large yacht'], cats: [6, 10, 45] },
  { words: ['commercial', 'workboat', 'work boat', 'ferry', 'barge', 'fishing vessel', 'charter vessel', 'pilot boat'], cats: [11, 7] },
  { words: ['design', 'designer', 'naval architect', 'architecture', 'engineer', 'engineering', 'drawings', 'plans'], cats: [8, 40] },
  { words: ['aluminium', 'aluminum', 'plate boat', 'welding', 'fabrication', 'stainless', 'metalwork'], cats: [21, 11, 24] },
  { words: ['buy', 'buying', 'purchase', 'new boat', 'trailer boat', 'runabout'], cats: [2, 4, 7] },
  { words: ['sell', 'selling', 'broker', 'brokerage', 'sale', 'listing'], cats: [38] },
  { words: ['insurance', 'insure', 'finance', 'loan', 'legal', 'lawyer', 'valuation'], cats: [42, 46] },
  { words: ['survey', 'surveyor', 'inspection', 'pre-purchase', 'classification', 'compliance', 'certification'], cats: [46] },
  { words: ['marina', 'berth', 'berthage', 'mooring', 'pile mooring', 'hardstand'], cats: [43] },
  { words: ['transport', 'ship', 'shipping', 'freight', 'delivery', 'deliver', 'yacht transport', 'logistics'], cats: [47] },
  { words: ['crew', 'recruit', 'recruitment', 'staff', 'skipper', 'captain', 'deckhand', 'job'], cats: [39] },
  { words: ['agent', 'yacht agent', 'clearance', 'customs', 'provisioning', 'visiting yacht'], cats: [45, 41] },
  { words: ['project management', 'project manager', 'owner rep'], cats: [41] },
  { words: ['trailer', 'trailers'], cats: [32] },
  { words: ['fishing', 'dive', 'diving', 'rod', 'reel', 'spearfishing'], cats: [33, 49] },
  { words: ['kayak', 'canoe', 'paddle', 'paddleboard', 'sup', 'dinghy', 'tender'], cats: [1, 52] },
  { words: ['jetski', 'jet ski', 'pwc', 'personal watercraft', 'wave runner'], cats: [3] },
  { words: ['safety', 'life jacket', 'lifejacket', 'flare', 'epirb', 'liferaft', 'life raft'], cats: [35, 48] },
  { words: ['clothing', 'apparel', 'wet weather', 'foul weather', 'uniform', 'gear'], cats: [35, 34] },
  { words: ['learn', 'lesson', 'course', 'training', 'qualification', 'ticket', 'skipper ticket', 'education', 'get into boating'], cats: [53, 48] },
  { words: ['hire', 'rent', 'charter', 'share', 'syndicate', 'shared ownership'], cats: [50, 49] },
  { words: ['electric boat', 'electric', 'ev', 'battery boat', 'zero emission'], cats: [0] },
  { words: ['hardware', 'fitting', 'fittings', 'deck gear', 'cleat', 'hatch'], cats: [28, 30] },
  { words: ['adhesive', 'sealant', 'resin', 'fibreglass', 'fiberglass', 'composite', 'material', 'gelcoat'], cats: [24] },
  { words: ['tool', 'tools', 'equipment', 'machine'], cats: [29] },
];

const REGIONS = [...new Set(directoryMembers.map((m) => m.region).filter(Boolean))] as string[];
const REGION_LC = REGIONS.map((r) => ({ label: r, lc: r.toLowerCase() }));

/** Common town/city names mapped to the region label they belong to. */
const TOWN_TO_REGION: Record<string, string> = {
  'whangarei': 'Northland', 'whangārei': 'Northland', 'bay of islands': 'Northland', 'kerikeri': 'Northland', 'marsden': 'Northland',
  'auckland': 'Auckland', 'westhaven': 'Auckland', 'silverdale': 'Auckland', 'gulf harbour': 'Auckland', 'half moon bay': 'Auckland',
  'tauranga': 'Bay of Plenty', 'mount maunganui': 'Bay of Plenty', 'whakatane': 'Bay of Plenty', 'rotorua': 'Bay of Plenty',
  'hamilton': 'Waikato', 'coromandel': 'Waikato', 'whitianga': 'Waikato', 'thames': 'Waikato', 'taupo': 'Waikato', 'taupō': 'Waikato',
  'gisborne': 'Gisborne', 'napier': "Hawke's Bay", 'hastings': "Hawke's Bay",
  'new plymouth': 'Taranaki', 'whanganui': 'Manawatū-Whanganui', 'wanganui': 'Manawatū-Whanganui', 'palmerston north': 'Manawatū-Whanganui',
  'wellington': 'Wellington', 'porirua': 'Wellington', 'lower hutt': 'Wellington',
  'nelson': 'Nelson-Marlborough', 'blenheim': 'Nelson-Marlborough', 'picton': 'Nelson-Marlborough', 'marlborough': 'Nelson-Marlborough',
  'christchurch': 'Canterbury', 'lyttelton': 'Canterbury', 'timaru': 'Canterbury',
  'dunedin': 'Otago', 'queenstown': 'Otago', 'wanaka': 'Otago',
  'invercargill': 'Southland', 'bluff': 'Southland',
};

const STOP = new Set([
  'the', 'a', 'an', 'my', 'me', 'i', 'need', 'want', 'looking', 'for', 'to', 'is', 'are', 'do', 'does',
  'help', 'find', 'someone', 'who', 'can', 'with', 'and', 'or', 'of', 'in', 'on', 'at', 'get', 'got',
  'have', 'has', 'boat', 'boats', 'yacht', 'vessel', 'please', 'near', 'around', 'about', 'some',
]);

function tokens(s: string): string[] {
  return s.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/).filter((w) => w.length > 1 && !STOP.has(w));
}

export interface FinderHit {
  member: DirectoryMember;
  score: number;
  /** Category labels that matched, for a "why this" line. */
  matchedCategories: string[];
}

export interface FinderResult {
  hits: FinderHit[];
  /** Region the query mentioned, if any. */
  region: string | null;
  /** Category groups the query resolved to, for a friendly summary. */
  groups: string[];
}

/** Rank members for a free-text problem description. */
export function findMembers(query: string, limit = 6): FinderResult {
  const q = query.toLowerCase();
  const toks = tokens(query);
  if (toks.length === 0) return { hits: [], region: null, groups: [] };

  // region intent: an explicit region label, else a known town name
  const regionHit = REGION_LC.find((r) => q.includes(r.lc)) ?? null;
  let region = regionHit ? regionHit.label : null;
  if (!region) {
    for (const town of Object.keys(TOWN_TO_REGION)) {
      if (q.includes(town)) { region = TOWN_TO_REGION[town]; break; }
    }
  }

  // resolve target categories via synonyms + direct label word overlap
  const catScore = new Map<number, number>();
  const bump = (i: number, n: number) => catScore.set(i, (catScore.get(i) ?? 0) + n);

  for (const syn of SYNONYMS) {
    for (const w of syn.words) {
      if (q.includes(w)) { syn.cats.forEach((c) => bump(c, 3)); break; }
    }
  }
  directoryCategories.forEach((cat, i) => {
    const labelToks = tokens(cat.label + ' ' + cat.group);
    const overlap = toks.filter((t) => labelToks.some((lt) => lt.startsWith(t) || t.startsWith(lt))).length;
    if (overlap) bump(i, overlap * 2);
  });

  const targetCats = [...catScore.entries()].sort((a, b) => b[1] - a[1]);
  const targetSet = new Map(targetCats);
  const groups = [...new Set(targetCats.slice(0, 4).map(([i]) => directoryCategories[i].group))];

  // score members
  const scored: FinderHit[] = [];
  for (const m of directoryMembers) {
    let score = 0;
    const matched: string[] = [];
    let catHits = 0;
    for (const ci of m.cats) {
      const cw = targetSet.get(ci);
      if (cw) { score += cw * 2; matched.push(directoryCategories[ci].label); catHits++; }
    }
    // Specialist boost: reward members for whom the matched trades are a large
    // share of what they do, so a dedicated sailmaker outranks a full-service
    // yard that merely lists the same trade among many.
    if (catHits > 0 && m.cats.length > 0) {
      score *= 1 + 0.6 * (catHits / m.cats.length);
    }
    const hay = (m.name + ' ' + m.blurb).toLowerCase();
    for (const t of toks) {
      if (m.name.toLowerCase().includes(t)) score += 4;
      else if (hay.includes(t)) score += 1;
    }
    if (m.curated) score += 0.5; // gentle tie-break toward Recognised exporters
    // Region is a location preference, not a hard filter: same region lifts,
    // a different fixed region dampens, nationwide/international stay neutral.
    if (region && score > 0 && m.region) {
      if (m.region === region) score *= 1.6;
      else if (m.region !== 'Nationwide' && m.region !== 'International') score *= 0.55;
    }
    if (score > 0) scored.push({ member: m, score, matchedCategories: [...new Set(matched)].slice(0, 3) });
  }

  scored.sort((a, b) => b.score - a.score || a.member.name.localeCompare(b.member.name));
  return { hits: scored.slice(0, limit), region, groups };
}

export { REGIONS };
