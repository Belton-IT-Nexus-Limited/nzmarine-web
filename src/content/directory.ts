import type { LogoTheme } from './types';

/**
 * AUTO-GENERATED from the live nzmarine.com member directory (2026-07-06).
 * Every member business listed on the association's current site, with the
 * real logo the association hosts for them, their directory categories
 * (the six "I want to..." problem groups and 55 trades), region, and a short
 * blurb condensed from their directory description. Regenerate with the
 * harvest scripts rather than editing by hand. Personal contact details are
 * deliberately excluded.
 *
 * `curated` links a directory entry to its hi-fi entry in companies.ts
 * (matched by website domain) so featured surfaces keep the crisper marks.
 */

export interface DirectoryCategory {
  slug: string;
  label: string;
  /** One of the six visitor problem groups. */
  group: string;
}

export interface DirectoryMember {
  slug: string;
  name: string;
  url?: string;
  region?: string;
  /** Indexes into directoryCategories. */
  cats: number[];
  blurb: string;
  logo?: string;
  logoTheme?: LogoTheme;
  /** Slug of the matching curated company in companies.ts, if any. */
  curated?: string;
}

export const directoryCategories: DirectoryCategory[] = [
  {
    "slug": "electric-boat",
    "label": "Electric boat",
    "group": "Buy a boat"
  },
  {
    "slug": "dinghy-canoe-or-board",
    "label": "Dinghy, canoe or board",
    "group": "Buy a boat"
  },
  {
    "slug": "trailer-power-sail-boat",
    "label": "Trailer power / sail boat",
    "group": "Buy a boat"
  },
  {
    "slug": "personal-watercraft",
    "label": "Personal watercraft",
    "group": "Buy a boat"
  },
  {
    "slug": "boat-kept-in-the-water",
    "label": "Boat kept in the water",
    "group": "Buy a boat"
  },
  {
    "slug": "time-share-boat",
    "label": "Time-share boat",
    "group": "Buy a boat"
  },
  {
    "slug": "superyacht",
    "label": "Superyacht",
    "group": "Buy a boat"
  },
  {
    "slug": "commercial-boat",
    "label": "Commercial boat",
    "group": "Buy a boat"
  },
  {
    "slug": "designers-engineers",
    "label": "Designers/Engineers",
    "group": "Build, refit or repair"
  },
  {
    "slug": "pleasure-boat-builders",
    "label": "Pleasure boat builders",
    "group": "Build, refit or repair"
  },
  {
    "slug": "superyacht-builders",
    "label": "Superyacht builders",
    "group": "Build, refit or repair"
  },
  {
    "slug": "commercial-boat-builders",
    "label": "Commercial boat builders",
    "group": "Build, refit or repair"
  },
  {
    "slug": "painting-and-antifouling",
    "label": "Painting and antifouling",
    "group": "Build, refit or repair"
  },
  {
    "slug": "engine-repairs-repower-and-parts",
    "label": "Engine repairs, repower and parts",
    "group": "Build, refit or repair"
  },
  {
    "slug": "transmission-propulsion-and-thrusters",
    "label": "Transmission, propulsion and thrusters",
    "group": "Build, refit or repair"
  },
  {
    "slug": "spars-rigging-and-sail",
    "label": "Spars, rigging and sail",
    "group": "Build, refit or repair"
  },
  {
    "slug": "electrical-and-electronics",
    "label": "Electrical and electronics",
    "group": "Build, refit or repair"
  },
  {
    "slug": "hydraulics-plumbing-ship-winch-and-anchor-systems",
    "label": "Hydraulics, plumbing, ship winch and anchor systems",
    "group": "Build, refit or repair"
  },
  {
    "slug": "desalination-systems",
    "label": "Desalination systems",
    "group": "Build, refit or repair"
  },
  {
    "slug": "air-conditioning-and-ventilation",
    "label": "Refrigeration, Air conditioning and ventilation",
    "group": "Build, refit or repair"
  },
  {
    "slug": "upholstery-and-interiors",
    "label": "Upholstery and interiors",
    "group": "Build, refit or repair"
  },
  {
    "slug": "vessel-conversions-and-heavy-engineering",
    "label": "Vessel conversions and heavy engineering",
    "group": "Build, refit or repair"
  },
  {
    "slug": "haul-out-dry-dock-and-travel-lift",
    "label": "Haul out, dry-dock and travel lift",
    "group": "Build, refit or repair"
  },
  {
    "slug": "coatings",
    "label": "Coatings",
    "group": "DIY repair"
  },
  {
    "slug": "construction-materials",
    "label": "Construction materials",
    "group": "DIY repair"
  },
  {
    "slug": "paint-and-antifouling",
    "label": "Paint and antifouling",
    "group": "DIY repair"
  },
  {
    "slug": "engines-and-engines-parts",
    "label": "Engines and engines parts",
    "group": "DIY repair"
  },
  {
    "slug": "spars-rigging-and-sails",
    "label": "Spars, rigging and sails",
    "group": "DIY repair"
  },
  {
    "slug": "hardware-for-on-board-systems",
    "label": "Hardware for on-board systems",
    "group": "DIY repair"
  },
  {
    "slug": "specialist-tools-and-equipment",
    "label": "Specialist tools and equipment",
    "group": "DIY repair"
  },
  {
    "slug": "accessories-for-my-boat",
    "label": "Accessories for my boat",
    "group": "Accessories"
  },
  {
    "slug": "auxiliary-engines",
    "label": "Auxiliary engines",
    "group": "Accessories"
  },
  {
    "slug": "trailers-and-trailer-parts",
    "label": "Trailers and trailer parts",
    "group": "Accessories"
  },
  {
    "slug": "fishing-and-diving-equipment",
    "label": "Fishing and diving equipment",
    "group": "Accessories"
  },
  {
    "slug": "water-sports-gear",
    "label": "Water sports gear",
    "group": "Accessories"
  },
  {
    "slug": "clothing-and-safety-equipment",
    "label": "Clothing and safety equipment",
    "group": "Accessories"
  },
  {
    "slug": "interior-accessories",
    "label": "Interior accessories",
    "group": "Accessories"
  },
  {
    "slug": "travel-agent",
    "label": "Travel agent",
    "group": "Professional services"
  },
  {
    "slug": "brokerage-and-sales",
    "label": "Brokerage and sales",
    "group": "Professional services"
  },
  {
    "slug": "crew-recruitment",
    "label": "Crew recruitment",
    "group": "Professional services"
  },
  {
    "slug": "design-and-naval-architecture-services",
    "label": "Design and naval architecture services",
    "group": "Professional services"
  },
  {
    "slug": "project-management-and-yacht-agents",
    "label": "Project Management",
    "group": "Professional services"
  },
  {
    "slug": "legal-finance-and-insurance",
    "label": "Legal, finance and insurance",
    "group": "Professional services"
  },
  {
    "slug": "marina-berthage",
    "label": "Marina berthage",
    "group": "Professional services"
  },
  {
    "slug": "media-publication-and-marketing",
    "label": "Media, publication and marketing",
    "group": "Professional services"
  },
  {
    "slug": "project-management-and-vessel-support",
    "label": "Superyacht agents",
    "group": "Professional services"
  },
  {
    "slug": "survey-and-classifications",
    "label": "Survey, valuations and classifications",
    "group": "Professional services"
  },
  {
    "slug": "transport-and-delivery",
    "label": "Transport and delivery",
    "group": "Professional services"
  },
  {
    "slug": "on-water-safety",
    "label": "On-water safety",
    "group": "Get into boating"
  },
  {
    "slug": "fishing-charters",
    "label": "Fishing charters",
    "group": "Get into boating"
  },
  {
    "slug": "boat-hireage-and-shared-ownership",
    "label": "Boat hireage and shared ownership",
    "group": "Get into boating"
  },
  {
    "slug": "sailing",
    "label": "Sailing",
    "group": "Get into boating"
  },
  {
    "slug": "paddle-boarding",
    "label": "Paddle boarding",
    "group": "Get into boating"
  },
  {
    "slug": "recreational-boating-education",
    "label": "Recreational boating education",
    "group": "Get into boating"
  },
  {
    "slug": "visit-the-discover-boating-website",
    "label": "Visit the Discover Boating website",
    "group": "Get into boating"
  }
];

export const directoryMembers: DirectoryMember[] = [
 {
  slug: "36-degrees-brokers-ltd",
  name: "36 Degrees Brokers",
  url: "http://www.36degrees.nz",
  region: "Auckland",
  cats: [
   4,
   38,
   53
  ],
  blurb: "Immersed in the vibrant maritime hub of Auckland, 36° Brokers stands as the epitome of luxury and sophistication. As exclusive dealers for Beneteau, Lagoon and Excess, 36° Brokers offer unparalleled access to the world's finest yachts.",
  logo: "/img/directory/36-degrees-brokers-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "thirty-seven-south",
  name: "37 South Ltd",
  url: "http://www.37southyachts.com",
  region: "Auckland",
  cats: [
   39,
   38,
   41,
   45
  ],
  blurb: "The people behind 37South pioneered the superyacht industry in the South Pacific where we are now the leading full service superyacht agent and support provider.",
  logo: "/img/directory/thirty-seven-south.png",
  logoTheme: "paper",
  curated: "37-south"
 },
 {
  slug: "aakron-marine",
  name: "Aakron Xpress",
  url: "http://www.aakronxpress.co.nz",
  region: "Auckland",
  cats: [
   1,
   30,
   31
  ],
  blurb: "Boat trailers and Highfield Boats dealer – built for NZ conditions Aakron Xpress supplies high-quality boat trailers designed specifically for New Zealand conditions, with a focus on strength, fit, and long-term reliability.",
  logo: "/img/directory/aakron-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "ab-equipment-marine-industrial-power",
  name: "AB Equipment Marine & Industrial Power",
  url: "https://marineindustrial.abequipment.co.nz",
  cats: [
   13,
   14
  ],
  blurb: "(formerly Lees Group). Trusted mechanical engineering specialists supplying NZ industry since 1932. Leading Global Brands of marine engines and components, delivering solutions to a wide range of customer applications.",
  logo: "/img/directory/ab-equipment-marine-industrial-power.png",
  logoTheme: "paper"
 },
 {
  slug: "abbott-insurance-brokers",
  name: "Abbott Insurance Brokers",
  url: "http://www.abbott.co.nz",
  region: "Auckland",
  cats: [
   42
  ],
  blurb: "As the insurance broking partner to the New Zealand Marine Industry Association for more than 20 years, Abbott has worked alongside boat builders, marine operators, contractors, marina businesses, importers, exporters, and service…",
  logo: "/img/directory/abbott-insurance-brokers.png",
  logoTheme: "paper"
 },
 {
  slug: "absolute-marine",
  name: "Absolute Marine Ltd",
  url: "http://www.absolutemarine.co.nz",
  region: "Auckland",
  cats: [
   30
  ],
  blurb: "Absolute Marine are specialist marine wholesalers. We carry over 4500 products and have a solution for every boatie from bow to stern.",
  logo: "/img/directory/absolute-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "ace-engineering-nz-ltd-dna-boats",
  name: "Ace Engineering NZ Ltd - DNA Boats",
  url: "http://www.dnaboats.co.nz",
  region: "Nelson",
  cats: [],
  blurb: "DNA Boats is a New Zealand family-owned and operated business that provides strong, safe, and customizable aluminium boats to the Australasian market.",
  logo: "/img/directory/ace-engineering-nz-ltd-dna-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "adhesive-technologies",
  name: "Adhesive Technologies Ltd",
  url: "https://adhesivetech.co.nz",
  region: "Auckland",
  cats: [
   24
  ],
  blurb: "(ATL), a privately owned Auckland based company, is the largest manufacturer-formulator of liquid epoxy and vinylester resins in New Zealand.",
  logo: "/img/directory/adhesive-technologies.png",
  logoTheme: "paper"
 },
 {
  slug: "kiwi-fibre-products-ltd",
  name: "Admiral Boats NZ Ltd",
  url: "http://www.admiralboatsnz.com",
  region: "Waikato",
  cats: [
   4,
   9
  ],
  blurb: "The Admiral first started with the opportunity to develop an already solid performing hull in the form of the Steadecraft 33 ft patrol.",
  logo: "/img/directory/kiwi-fibre-products-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "advance-trident",
  name: "Advance Trident Ltd",
  url: "http://www.advancetrident.com",
  region: "Auckland",
  cats: [
   28,
   30
  ],
  blurb: "Why ATL is an industry leader in Marine Electronics:",
  logo: "/img/directory/advance-trident.png",
  logoTheme: "paper"
 },
 {
  slug: "alphatron-pacific",
  name: "AEP Pacific",
  url: "http://www.aeppacific.co.nz",
  region: "Auckland",
  cats: [
   28,
   30
  ],
  blurb: "Importers and distributors of marine electric power generation and conversion equipment. Victron Energy inverters, chargers and battery monitoring. BALMAR alternators. PV Solar systems. EEV radar components.",
  logo: "/img/directory/alphatron-pacific.png",
  logoTheme: "paper"
 },
 {
  slug: "aimex",
  name: "Aimex Ltd",
  url: "http://www.aimex.co.nz",
  region: "Nelson",
  cats: [
   11,
   13,
   22,
   21
  ],
  blurb: "Aimex Service Group engineers excellence through our eight experienced engineering teams, matched with our extensive workshop capabilities and strong local networks. We offer complete project management if required.",
  logo: "/img/directory/aimex.png",
  logoTheme: "paper"
 },
 {
  slug: "akzo-nobel-coatings",
  name: "Akzo Nobel Coatings Ltd / International Paint",
  url: "http://www.yachtpaint.com",
  region: "Auckland",
  cats: [
   25
  ],
  blurb: "International® is the leading brand of AkzoNobel’s Marine & Protective Coatings (M&PC) business unit, which encompasses our Marine , Protective Coatings and Yacht businesses.",
  logo: "/img/directory/akzo-nobel-coatings.png",
  logoTheme: "paper"
 },
 {
  slug: "ultra-leisure-products-nz-ltd",
  name: "Alexander Marine NZ",
  cats: [
   4
  ],
  blurb: "Let our experience make your yacht purchase or sale experience an absolute pleasure. Our notable yacht sales team have a proven and stellar history of helping buyers and sellers acquire and sell motor yachts – with a focus on the Asia…",
  logo: "/img/directory/ultra-leisure-products-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "alexcraft-boats-ltd-2",
  name: "Alexcraft Boats Ltd",
  region: "Otago",
  cats: [],
  blurb: "Specialising in jet boat new builds, insurance repairs, servicing and maintenance.",
  logo: "/img/directory/alexcraft-boats-ltd-2.png",
  logoTheme: "paper"
 },
 {
  slug: "allan-tongs-boatbuilders",
  name: "Allan Tongs Boatbuilders Ltd",
  url: "http://www.allantongsboatbuilders.co.nz",
  region: "Auckland",
  cats: [
   4,
   9
  ],
  blurb: "Allan Tongs Boatbuilders started it’s journey in 1983 with Allan and his team building high quality luxury pleasure boats for discerning clients.",
  logo: "/img/directory/allan-tongs-boatbuilders.png",
  logoTheme: "paper"
 },
 {
  slug: "alloy-cats-nz",
  name: "Alloy Cats (2021) Ltd / Kingfisher Boats and Powercats",
  url: "http://www.alloycats.co.nz",
  region: "Bay of Plenty",
  cats: [
   9
  ],
  blurb: "Alloy Cats manufacture a range of planing, semi-displacement and displacement powercats designed by world-renowned New Zealand designer Roger Hill.",
  logo: "/img/directory/alloy-cats-nz.png",
  logoTheme: "paper"
 },
 {
  slug: "alloy-marine-products-amp-boats",
  name: "Alloy Marine Products - AMP Boats",
  url: "http://www.ampboats.co.nz",
  region: "Southland",
  cats: [
   2,
   9
  ],
  blurb: "Ranging from 3.0m-7.5m+",
  logo: "/img/directory/alloy-marine-products-amp-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "allvo-marine-engineering",
  name: "Allvo Marine Engineering",
  url: "http://www.allvo.co",
  region: "Auckland",
  cats: [
   13,
   14
  ],
  blurb: "We are the local agents for VOLVO PENTA engines and drive systems and we are able to supply and service all your needs concerning your VOLVO PENTA equipment. We carry an extensive range of genuine VOLVO PENTA spare parts.",
  logo: "/img/directory/allvo-marine-engineering.png",
  logoTheme: "paper"
 },
 {
  slug: "altex-yacht-boat-paint",
  name: "Altex Yacht & Boat Paint",
  url: "http://www.altexboatpaint.com",
  region: "Bay of Plenty",
  cats: [
   25
  ],
  blurb: "Is a New Zealand privately owned manufacturer of high quality industrial and marine paint coating systems for types of pleasure and commercial vessels, built of timber, GRP, Steel, Aluminium or Ferro Cement.",
  logo: "/img/directory/altex-yacht-boat-paint.png",
  logoTheme: "paper"
 },
 {
  slug: "altus-industrial-aluminium",
  name: "Altus Industrial Aluminium",
  url: "http://www.altus.co.nz/industrial-aluminium",
  cats: [],
  blurb: "Our name is our promise to deliver you quality products and solutions, consistently, in full, on time, every time. Our extensive offer consists of aluminium sheet and plate, coil, extruded profiles, fabrication, surface finishing and…",
  logo: "/img/directory/altus-industrial-aluminium.png",
  logoTheme: "paper"
 },
 {
  slug: "amare-super-yacht-services-ltd",
  name: "Amare Charter Co",
  url: "http://www.amarecharterco.com",
  region: "Auckland",
  cats: [
   45
  ],
  blurb: "Are specialists in bespoke South Pacific yacht charters, delivering world-class experiences with a personal touch.",
  logo: "/img/directory/amare-super-yacht-services-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "rew-fink-marine",
  name: "Andrew Fink Marine",
  url: "http://www.almgroup.co.nz",
  region: "Waikato",
  cats: [
   2,
   32
  ],
  blurb: "Boatbuilders up to 17 metres. We also provide refits, maintenance and repair services. We can supply: fibreglass supplies, painting supplies and timber supplies.",
  logo: "/img/directory/rew-fink-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "antelope-engineering-nz",
  name: "Antelope Engineering (NZ) Ltd",
  url: "http://www.antelope.com.au",
  region: "Otago",
  cats: [],
  blurb: "Antelope Engineering supplies a wide range of high quality marine equipment for workboats, large pleasure vessels, fishing boats, cargo and passenger ships.",
  logo: "/img/directory/antelope-engineering-nz.png",
  logoTheme: "paper"
 },
 {
  slug: "anura-ltd",
  name: "Anura Ltd",
  url: "http://www.anura.nz",
  region: "Auckland",
  cats: [
   2
  ],
  blurb: "Anura™ was established in 2012 to move amphibious technology forward. We are a New Zealand company developing high-performance amphibious tech for local and international marine craft manufacturers.",
  logo: "/img/directory/anura-ltd.png",
  logoTheme: "paper",
  curated: "anura"
 },
 {
  slug: "aqua-plumb-auckland-wide-ltd",
  name: "Aqua Plumb Auckland Wide Ltd",
  url: "http://www.aquaplumb.co.nz",
  cats: [
   17
  ],
  blurb: "Aquaplumb specialise in marine plumbing, watermakers, toilets, waste systems, diesel heaters, pumps and marine systems. Our team have over 40 years of plumbing experience, extensive offshore cruising experience and a huge passion for the…",
  logo: "/img/directory/aqua-plumb-auckland-wide-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "aquamagic-yachts-ltd",
  name: "Aquamagic Yachts Ltd",
  url: "http://www.aquamagic.co.nz",
  region: "Auckland",
  cats: [
   10,
   9,
   38,
   41
  ],
  blurb: "Aquamagic Yachts Limited are marine project managers and consultants, as well as Auckland based boat builders and repair/refit specialists providing a full range of services to boat owners around New Zealand and overseas.",
  logo: "/img/directory/aquamagic-yachts-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "arcryte-ltd-walker-boats-nz",
  name: "Arcryte Ltd (Walker Boats NZ)",
  url: "http://www.arcryte.co.nz",
  region: "Bay of Plenty",
  cats: [
   2
  ],
  blurb: "Arcryte Ltd (Walker Boats NZ) is an NZ Marine member working in trailer power / sail boat.",
  logo: "/img/directory/arcryte-ltd-walker-boats-nz.png",
  logoTheme: "paper"
 },
 {
  slug: "atomic-ev",
  name: "Atomic EV",
  url: "http://www.atomicev.co.nz",
  region: "Auckland",
  cats: [
   3,
   34
  ],
  blurb: "Has the largest eFoil range in Australasia, with local stock, demos, training, NZ-wide retail and servicing. We are a Flite-promoted partner and their authorised reseller across New Zealand.",
  logo: "/img/directory/atomic-ev.png",
  logoTheme: "paper"
 },
 {
  slug: "attest-ltd",
  name: "ATTEST",
  url: "http://www.attest.co.nz",
  region: "Auckland",
  cats: [
   16
  ],
  blurb: "We have extensive experience in marine electrical design, inspection and project management. Our skills have been fine-tuned over two decades in yachting, delivering electrical control systems for more than 20 multi-award-winning…",
  logo: "/img/directory/attest-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "auckl-engineering-supplies",
  name: "Auckland Engineering Supplies",
  url: "http://www.aesnz.com",
  region: "Auckland",
  cats: [
   30
  ],
  blurb: "Your one stop shop for Engineering Supplies: Auckland Engineering Supplies have an extensive range of quality power tools, hand tools, abrasives, hose & hose fittings, fastenings, Castrol and Motul oils and general engineering equipment.",
  logo: "/img/directory/auckl-engineering-supplies.png",
  logoTheme: "paper"
 },
 {
  slug: "auckland-marine-centre",
  name: "Auckland Marine Centre",
  url: "http://www.aucklandmarine.co.nz",
  region: "Auckland",
  cats: [],
  blurb: "Incorporated in 1989, Auckland Marine is one of Auckland's longest standing marine businesses in New Zealand. Auckland Marine is one of New Zealand's finest dealerships offering a wide range of marine products and accessories.",
  logo: "/img/directory/auckland-marine-centre.png",
  logoTheme: "paper"
 },
 {
  slug: "auckland-marine-electrical-ltd",
  name: "Auckland Marine Electrical Ltd",
  url: "http://www.ame.nz",
  region: "Auckland",
  cats: [
   16
  ],
  blurb: "Auckland Marine Electrical Ltd is an NZ Marine member working in electrical and electronics.",
  logo: "/img/directory/auckland-marine-electrical-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "aurora-glass-fibre",
  name: "Aurora Composites",
  url: "http://www.auroracomposites.com",
  region: "Auckland",
  cats: [],
  blurb: "Is a privately owned New Zealand company and distributor of composite raw materials in New Zealand and the South Pacific. Mike Boston, managing director and owner of Aurora has been involved in the composite industry since 1984.",
  logo: "/img/directory/aurora-glass-fibre.png",
  logoTheme: "paper"
 },
 {
  slug: "babcock-nz",
  name: "Babcock (NZ) Ltd",
  url: "http://www.babcock.nz",
  region: "Auckland",
  cats: [
   7,
   10,
   11,
   22,
   21
  ],
  blurb: "Located in Auckland, is New Zealand's largest ship repair and marine engineering facility. With an excellent dry-dock, Babcock offers a full range of marine engineering, survey and refitting services to international and New Zealand…",
  logo: "/img/directory/babcock-nz.png",
  logoTheme: "paper",
  curated: "babcock"
 },
 {
  slug: "bailey-marine-consultants",
  name: "Bailey Marine",
  url: "http://www.baileymarine.co.nz",
  region: "Northland",
  cats: [
   4,
   30
  ],
  blurb: "Established in 2008 by Terry Bailey, a well known retired New Zealand boatbuilder, Bailey Marine Ltd are Importer/Wholesalers of technical marine equipment.",
  logo: "/img/directory/bailey-marine-consultants.png",
  logoTheme: "paper"
 },
 {
  slug: "baileys-insurance-brokers-ltd",
  name: "Baileys Insurance Ltd",
  url: "http://www.baileysinsurance.co.nz",
  region: "Auckland",
  cats: [
   42
  ],
  blurb: "If you're a boat owner, you know what it's like….it's a real passion. Why else would you spend the amount of money you do for so little time actually using your boat? Our marine insurance specialists share that passion with you.",
  logo: "/img/directory/baileys-insurance-brokers-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "bakewell-white-yacht-design",
  name: "Bakewell-White Yacht Design Ltd",
  url: "http://www.bakewell-white.com",
  region: "Auckland",
  cats: [
   40
  ],
  blurb: "Designers of custom yachts, both power and sail. Our design studio specialises in creating exciting and unique vessels for special clients, a focus on client needs and the design process allows us to work on a wide variety of solutions to…",
  logo: "/img/directory/bakewell-white-yacht-design.png",
  logoTheme: "paper"
 },
 {
  slug: "balex-marine-south-pacific-ltd",
  name: "Balex Marine South Pacific Ltd",
  url: "http://www.balexmarine.com",
  region: "Bay of Plenty",
  cats: [
   17,
   32,
   30
  ],
  blurb: "The Balex® Automatic Boat Loader (ABL) automates the launch and retrieval of your trailer boat. You don’t even have to get your feet wet! No more clambering down the slippery boat ramp to attach the winch.",
  logo: "/img/directory/balex-marine-south-pacific-ltd.png",
  logoTheme: "paper",
  curated: "balex-marine"
 },
 {
  slug: "marine-cabinetry-ltd",
  name: "Barclay Yachts Ltd",
  url: "http://www.barclayyachts.co.nz",
  region: "Auckland",
  cats: [
   20,
   41
  ],
  blurb: "Barclay Yachts are professional boat builders based in Auckland, We have a lifelong passion for the ocean, boating & building performance optimised vessels & components of the highest quality.",
  logo: "/img/directory/marine-cabinetry-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "batavian-rubber-international-ltd",
  name: "Batavian Rubber International Ltd",
  url: "http://www.batavian.co.nz",
  region: "Wellington",
  cats: [
   28
  ],
  blurb: "SeaDek non-skid, closed cell EVA products offer safe and comfortable alternatives to molded in non-skid, paint on textures and other marine traction products currently available.",
  logo: "/img/directory/batavian-rubber-international-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "bay-marine-electronics-2018-ltd",
  name: "Bay Marine Electronics (2018) Ltd",
  url: "http://www.baymarineelectronics.co.nz",
  region: "Bay of Plenty",
  cats: [
   16,
   30
  ],
  blurb: "Bay Marine Electronics is New Zealand's premier marine electronics specialist. Since its inception over 15 years ago, the focus has been on customer service and expert advice.",
  logo: "/img/directory/bay-marine-electronics-2018-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "far-north-holdings-ltd",
  name: "Bay of Islands Marina, Opua",
  url: "http://www.boimarina.co.nz",
  region: "Northland",
  cats: [
   43
  ],
  blurb: "Bay of Islands Marina is located in the beautiful Bay of Islands with an easy approach day or night to the customs and quarantine berths conveniently situated on the outer breakwater of the marina.",
  logo: "/img/directory/far-north-holdings-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "bay-of-isls-marine",
  name: "Bay Of Islands Yamaha Ltd",
  url: "http://www.marinecentre.co.nz",
  region: "Northland",
  cats: [
   2,
   26,
   30,
   31
  ],
  blurb: "We are the Northland Dealers for Lazercraft & Buccaneer. Dealers for Yamaha Outboards and Waverunners, Ramco Boats and Aquapro Inflatables. We offer sales and service for all outboard brands. Agents for Raymarine, Furuno and Lowrance.",
  logo: "/img/directory/bay-of-isls-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "bay-yamaha",
  name: "Bay Yamaha",
  url: "http://www.bay-yamaha.co.nz",
  region: "Bay of Plenty",
  cats: [
   13,
   26,
   31
  ],
  blurb: "Is a fully authorised Yamaha Marine sales and service dealer in the Bay of Plenty region. Whether you need a routine service or more extensive repairs, we’re here to help.",
  logo: "/img/directory/bay-yamaha.png",
  logoTheme: "paper"
 },
 {
  slug: "bays-boating",
  name: "Bays Boating Ltd",
  region: "Nelson",
  cats: [
   2
  ],
  blurb: "Bays Boating's main business activities include trailer boat sales and service. Bays Boating has leading franchises including Honda outboards and Osprey pontoon boats.",
  logo: "/img/directory/bays-boating.png",
  logoTheme: "paper"
 },
 {
  slug: "bayswater-marina-management",
  name: "Bayswater Marina Management Ltd",
  url: "http://www.bayswater.co.nz",
  region: "Auckland",
  cats: [
   43
  ],
  blurb: "Bayswater Marina is more than just a place to park your boat - the marina offers a unique lifestyle and world-class facilities. Situated directly opposite downtown Auckland on the northern side of the inner harbour, the marina is in a…",
  logo: "/img/directory/bayswater-marina-management.png",
  logoTheme: "paper"
 },
 {
  slug: "beacon-marine-ltd",
  name: "Beacon Marine Ltd",
  url: "http://www.beaconmarine.co.nz",
  region: "Auckland",
  cats: [],
  blurb: "Beacon Marine provides solutions for all of your marine electrical and marine electronic needs. We are able to supply, install and service all leading and trusted brands.",
  logo: "/img/directory/beacon-marine-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "beattys-driveline-technologies-ltd",
  name: "Beattys Driveline Technologies Ltd",
  url: "https://beattys.co.nz/industries/marine",
  region: "Auckland",
  cats: [
   26
  ],
  blurb: "The marine environment and demands of this industry provides the ultimate challenge for product quality and durability along with the need for proven design expertise.",
  logo: "/img/directory/beattys-driveline-technologies-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "survitec-group-rfd-new-zeal",
  name: "Beaufort Group",
  url: "http://www.beaufort.group",
  region: "Auckland",
  cats: [
   30,
   35
  ],
  blurb: "Setting the Standard in Mission-Critical Protection",
  logo: "/img/directory/survitec-group-rfd-new-zeal.png",
  logoTheme: "paper"
 },
 {
  slug: "bellingham-marine-new-zeal",
  name: "Bellingham Marine New Zealand",
  url: "http://www.bellingham-marine.com",
  region: "Auckland",
  cats: [
   43
  ],
  blurb: "Bellingham Marine is the global leader in design, manufacture, and construction of marinas and related products and services. Bellingham Marine enjoys an unrivaled reputation within the industry and has installed more than 20 million…",
  logo: "/img/directory/bellingham-marine-new-zeal.png",
  logoTheme: "paper"
 },
 {
  slug: "berth-control",
  name: "Berth Control",
  url: "http://www.berthcontrol.co",
  region: "Auckland",
  cats: [
   43
  ],
  blurb: "Systems that keep docks, crews, and boats moving smoothly, with numbers everyone trusts.",
  logo: "/img/directory/berth-control.png",
  logoTheme: "paper"
 },
 {
  slug: "bob-littler-agencies-nz-ltd",
  name: "BLA NZ",
  url: "http://www.bla.co.nz",
  region: "Auckland",
  cats: [],
  blurb: "BLA is Australasia's largest supplier of internationally respected Boating, Lifestyle and Adventure products",
  logo: "/img/directory/bob-littler-agencies-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "bladerunner-boats",
  name: "Bladerunner Boats Ltd",
  url: "http://www.bladerunnerboats.co.nz",
  region: "Auckland",
  cats: [
   4,
   9
  ],
  blurb: "Design and construction of all alloy craft to 20 metres. - Specialising in alloy deep vee hydrofoil assisted power catamarans for all purposes - Pleasure, sport fishing, commercial, ferries, hydrographic and other work boats to Survey.",
  logo: "/img/directory/bladerunner-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "blue-marine-travel-ltd",
  name: "Blue Marine Travel Ltd",
  url: "http://www.bluemarinetravel.com",
  cats: [
   37
  ],
  blurb: "Is a privately owned marine travel consultancy with IATA accreditation, handling both corporate and marine travel. Established in 2004, our many years of experience allows us to provide a personalised service to our clients and travellers,…",
  logo: "/img/directory/blue-marine-travel-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "bluefix-marine",
  name: "Bluefix Boatworks",
  url: "http://www.bluefixboatworks.co.nz",
  region: "Northland",
  cats: [
   9
  ],
  blurb: "Boat builders, cabinet makers and marine painters are based in the Bay of Islands Marina Boat Yard in Opua, Bay of Islands. Our purpose built marine travel lift shed is now complete and can accommodate vessels up to 10.5m in height and 26m…",
  logo: "/img/directory/bluefix-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "bluewater-marine-sales-ltd",
  name: "Bluewater Marine Sales Ltd",
  url: "http://Coming soon!",
  region: "Auckland",
  cats: [
   4
  ],
  blurb: "Bluewater Marine Sales Ltd is an NZ Marine member working in boat kept in the water.",
  logo: "/img/directory/bluewater-marine-sales-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "boat-books-seahorse-bookshop",
  name: "Boat Books and Seahorse Bookshop",
  url: "http://www.boatbooks.co.nz",
  region: "Auckland",
  cats: [
   44,
   53
  ],
  blurb: "We specialise in retail and trade sales of marine, technical and general interest books throughout New Zealand; between us we speak and write in English, Dutch, and German.",
  logo: "/img/directory/boat-books-seahorse-bookshop.png",
  logoTheme: "paper"
 },
 {
  slug: "boat-city",
  name: "Boat City",
  url: "http://www.boatcity.co.nz",
  region: "Wellington",
  cats: [
   2,
   30,
   33,
   34,
   35
  ],
  blurb: "One stop boating, fishing, chandlery, dive and service shop. Stocking new boats from John Haines Signature, Reflex, Legacy, Savage, Haines Hunter, Tristram,Buccaneer, Rayglass, Doral, Kiwikraft, Ramco, Kawasaki Jetskis.",
  logo: "/img/directory/boat-city.png",
  logoTheme: "paper"
 },
 {
  slug: "steve-pennington-boatbuilders",
  name: "Boat Fix NZ Ltd",
  url: "http://www.boatrepairs.co.nz",
  region: "Auckland",
  cats: [
   9
  ],
  blurb: "Steve Pennington and the team have been repairing boats in and around Auckland for more than 20 years. With an excellent reputation for all aspects involved in keeping your pride and joy in tip top condition.",
  logo: "/img/directory/steve-pennington-boatbuilders.png",
  logoTheme: "paper"
 },
 {
  slug: "tenob-wholesale-marine",
  name: "Boatgear Marine Wholesale Ltd",
  url: "http://www.tenob.co.nz",
  region: "Auckland",
  cats: [
   14,
   17,
   19,
   28,
   30
  ],
  blurb: "Boatgear was established in 1973. We are a manufacturer and exporter of marine fittings and accessories, specialists in the trailer power boat market. Products are also imported and distributed nationwide.",
  logo: "/img/directory/tenob-wholesale-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "boating-new-zeal-magazine",
  name: "Boating New Zealand Magazine",
  url: "http://www.boatingnz.co.nz",
  region: "Auckland",
  cats: [
   44
  ],
  blurb: "Boating New Zealand is NZ's number one selling and largest boating magazine. Boating New Zealand inspires more boating enthusiasts than any other boating title in New Zealand. Founded in 1986, it is part of the fabric of the boating scene.",
  logo: "/img/directory/boating-new-zeal-magazine.png",
  logoTheme: "paper"
 },
 {
  slug: "book-a-buoy",
  name: "BookABuoy",
  url: "http://www.bookabuoy.co.nz",
  region: "Nationwide",
  cats: [
   43
  ],
  blurb: "New Zealand's Mooring Marketplace BookABuoy connects sailors with buoys, moorings and berths across New Zealand's stunning coastline. Simple to book, simple to list.",
  logo: "/img/directory/book-a-buoy.png",
  logoTheme: "paper"
 },
 {
  slug: "booth-design-ltd",
  name: "Booth Design Ltd",
  region: "Northland",
  cats: [
   40
  ],
  blurb: "Booth Design Ltd is an NZ Marine member working in design and naval architecture services.",
  logo: "/img/directory/booth-design-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "bravo-mike-maritime",
  name: "Bravo Mike Maritime",
  url: "https://www.bravomike.co",
  cats: [
   41
  ],
  blurb: "Bravo Mike is a marine consultancy business based in Auckland, specialising in yacht and superyacht management including yacht maintenance and servicing.",
  logo: "/img/directory/bravo-mike-maritime.png",
  logoTheme: "paper"
 },
 {
  slug: "breed-media-creative-ltd",
  name: "Breed Media Creative Ltd",
  url: "http://www.breedmedia.com",
  cats: [
   44
  ],
  blurb: "At the heart of our business is a desire to build relationships with great people and have fun along the way. We know if we get this bit right the rest is relatively easy.",
  logo: "/img/directory/breed-media-creative-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "bretts-marine",
  name: "Bretts Marine Ltd",
  url: "http://www.brettsmarine.co.nz",
  region: "Auckland",
  cats: [
   2
  ],
  blurb: "Service engines/stern-legs for launches, outboard motors and personal water craft. We specialise in the Yamaha product but have trained staff to do work on most makes.",
  logo: "/img/directory/bretts-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "brin-wilson-boats",
  name: "Brin Wilson Boats Ltd",
  url: "http://www.brinwilsonboats.co.nz",
  region: "Auckland",
  cats: [
   4,
   9
  ],
  blurb: "Since 1952 Brin Wilson has built more than 100 yachts and launches for both local and international clients. We specialise in refits and restoration projects, and have earned a reputation for quality workmanship in the marine industry.",
  logo: "/img/directory/brin-wilson-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "griffiths-equipment-ltd",
  name: "Brown and Watson NZ",
  url: "https://www.brownwatson.com.au",
  cats: [
   16
  ],
  blurb: "Brown and Watson NZ is an NZ Marine member working in electrical and electronics.",
  logo: "/img/directory/griffiths-equipment-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "brp-bombardier-recreational-products",
  name: "BRP - Bombardier Recreational Products",
  url: "http://www.brp.com",
  region: "Auckland",
  cats: [
   2
  ],
  blurb: "BRP - Bombardier Recreational Products is an NZ Marine member working in trailer power / sail boat.",
  logo: "/img/directory/brp-bombardier-recreational-products.png",
  logoTheme: "paper"
 },
 {
  slug: "buccaneer-pleasure-craft",
  name: "Buccaneer Pleasure Craft Ltd",
  url: "http://www.buccaneer.co.nz",
  region: "Waikato",
  cats: [
   2,
   9
  ],
  blurb: "Buccaneer builds quality from inside out, every boat is built in the best way we know how. The Buccaneer team take pride in every Buccaneer boat that they build. Our suppliers take pride in supplying our raw materials.",
  logo: "/img/directory/buccaneer-pleasure-craft.png",
  logoTheme: "paper"
 },
 {
  slug: "buckland-marine-ltd",
  name: "Buckland Marine Ltd",
  url: "http://www.bucklandmarineyamaha.co.nz",
  region: "Auckland",
  cats: [
   13
  ],
  blurb: "With over 30 years of combined outboard servicing experience, Buckland Marine offers professional marine servicing to the highest standard. Our staff are certified in Yamaha & Yamaha Products and can service all other outboard brands.",
  logo: "/img/directory/buckland-marine-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "built-boats-ltd",
  name: "Built Boats Ltd",
  url: "http://www.builtboats.co.nz",
  region: "Auckland",
  cats: [
   8,
   40
  ],
  blurb: "At Built Boats, we fuse cutting-edge naval architecture with striking styling, ensuring every vessel is both high-performing and visually captivating.",
  logo: "/img/directory/built-boats-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "burnsco-marine-leisure",
  name: "Burnsco",
  url: "http://www.burnsco.co.nz",
  region: "Auckland",
  cats: [
   1,
   25,
   28,
   30,
   33,
   34,
   35
  ],
  blurb: "New Zealand’s largest retailer of boating and motor home accessories. 17 stores nationwide see https:// for details. Branches in Albany, Whangarei, Gulf Harbour, Westhaven, Half Moon Bay, Hamilton, Tauranga, Wellington, Nelson,…",
  logo: "/img/directory/burnsco-marine-leisure.png",
  logoTheme: "paper"
 },
 {
  slug: "busfield-marine-brokers",
  name: "Busfield  Marine Brokers",
  url: "http://www.busfieldmarine.co.nz",
  region: "Auckland",
  cats: [
   4,
   38
  ],
  blurb: "Located at Westhaven Marina in Auckland, Busfield Marine Brokers specialise in quality used Yacht and Launch sales, with many boats sold internationally as well as on the local market.",
  logo: "/img/directory/busfield-marine-brokers.png",
  logoTheme: "paper"
 },
 {
  slug: "c-quip-international",
  name: "C-Quip International",
  url: "http://www.c-quip.com",
  region: "Auckland",
  cats: [],
  blurb: "C-Quip specialises in the design and manufacture of super yacht equipment for motor and sailing yachts over 40 metres. Our products include carbon fibre boarding equipment, tender management solutions and telescoping lightmasts.",
  logo: "/img/directory/c-quip-international.png",
  logoTheme: "paper",
  curated: "c-quip"
 },
 {
  slug: "c-tech",
  name: "C-Tech Ltd",
  url: "http://www.c-tech.co.nz",
  region: "Auckland",
  cats: [
   27
  ],
  blurb: "C-Tech manufactures a range of composite components for the marine industry, exported worldwide. Our market leading product is CT Sailbattens, a range of carbon fibre sail battens with a unique rectangular, hollow, tapered shape.",
  logo: "/img/directory/c-tech.png",
  logoTheme: "paper",
  curated: "c-tech"
 },
 {
  slug: "calibre-sails",
  name: "Calibre Sails Ltd",
  url: "http://www.calibresails.co.nz",
  region: "Northland",
  cats: [
   27
  ],
  blurb: "Calibre Sails is a custom sail-maker where the art of sailmaking is still a passion. Calibre Sails specialises in racing, cruising and classic boat sails.",
  logo: "/img/directory/calibre-sails.png",
  logoTheme: "paper"
 },
 {
  slug: "nelson-marine-precinct",
  name: "Calwell",
  url: "https://www.calwell.co.nz",
  region: "Tasman",
  cats: [
   22
  ],
  blurb: "Calwell is an NZ Marine member working in haul out, dry-dock and travel lift.",
  logo: "/img/directory/nelson-marine-precinct.png",
  logoTheme: "paper"
 },
 {
  slug: "careys-bay-marine-services",
  name: "Careys Bay Marine Services",
  url: "http://www.careysbaymarine.co.nz",
  region: "Southland",
  cats: [
   11,
   9,
   22
  ],
  blurb: "Careys Bay Marine Services is an NZ Marine member working in commercial boat builders.",
  logo: "/img/directory/careys-bay-marine-services.png",
  logoTheme: "paper"
 },
 {
  slug: "caribbean-boats-nz",
  name: "Caribbean Boats (NZ) Ltd",
  url: "http://www.caribbeanboats.co.nz",
  region: "Waikato",
  cats: [
   4
  ],
  blurb: "We are the sole NZ agents for Caribbean Sportfisher Cruisers. We are also a new and used boat brokerage.",
  logo: "/img/directory/caribbean-boats-nz.png",
  logoTheme: "paper"
 },
 {
  slug: "catalano-shipping-services-nz",
  name: "Catalano Shipping Services NZ",
  url: "http://www.catalanoshippingpacific.com",
  region: "Auckland",
  cats: [
   39,
   45
  ],
  blurb: "Catalano Shipping Services and the A-Gents network have provided the highest levels of service to superyachts throughout the Mediterranean for decades and are excited to expand into the Pacific.",
  logo: "/img/directory/catalano-shipping-services-nz.png",
  logoTheme: "paper"
 },
 {
  slug: "centro-marine-ltd",
  name: "Centro Marine Ltd",
  url: "http://www.centromarine.co.nz",
  region: "Auckland",
  cats: [
   17
  ],
  blurb: "We have worked on some of the world's largest superyachts, and thrive on our attention to detail and high level of quality workmanship.",
  logo: "/img/directory/centro-marine-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "chaffers-marina-ltd",
  name: "Chaffers Marina Ltd",
  url: "http://www.chaffersmarina.co.nz",
  region: "Wellington",
  cats: [
   43
  ],
  blurb: "Chaffers Marina Ltd is an NZ Marine member working in marina berthage.",
  logo: "/img/directory/chaffers-marina-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "chains-ropes-anchors",
  name: "Chains, Ropes and Anchors",
  url: "http://www.chainsropesandanchors.co.nz",
  region: "Auckland",
  cats: [
   30
  ],
  blurb: "We have the largest range of top quality ropes, chains, anchors and anchor winches in the Auckland region, if not New Zealand. Feel free to browse our online shop or contact us for any questions you have regarding chains, ropes or anchors!",
  logo: "/img/directory/chains-ropes-anchors.png",
  logoTheme: "paper"
 },
 {
  slug: "challenger-boats-2021-ltd",
  name: "Challenger Boats (2021) Ltd",
  url: "http://www.challengerboats.co.nz",
  region: "Waikato",
  cats: [
   2,
   9
  ],
  blurb: "Challenger Boats was established in 1994 and is a successful Bay of Plenty boat design/manufacturer. We design and build fibreglass boats for the leisure market - families, fishing, and recreation.",
  logo: "/img/directory/challenger-boats-2021-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "charlie-bravo-boat-co",
  name: "Charlie Bravo Boat Co",
  url: "http://www.charliebravo.co.nz",
  region: "Auckland",
  cats: [
   4,
   42,
   47
  ],
  blurb: "Founded by Cameron Burch, Charlie Bravo Boat Co. was born through a passion for yachting, his love of helping people realise their boating dreams and a desire to improve the experience for those customers we are privileged to work with.",
  logo: "/img/directory/charlie-bravo-boat-co.png",
  logoTheme: "paper"
 },
 {
  slug: "decked-out-yachting-ltd",
  name: "Charter Boat Broker Ltd",
  url: "http://www.charterboatbroker.com ",
  cats: [
   39,
   38,
   45,
   47,
   50
  ],
  blurb: "Offer Charter Boat, Boat Broker, Vessel Management and Vessel Maintenance, and Yachting Agency Superyacht Support Services, and was created in 2006 with the intent to provide the highest standard of service in the yachting industry.",
  logo: "/img/directory/decked-out-yachting-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "charter-yachts-australia",
  name: "Charter Yachts Australia",
  url: "http://www.charteryachtsaustralia.com.au",
  region: "International",
  cats: [],
  blurb: "Discover true freedom when you skipper your own charter boat and start sailing around Queensland’s 74 idyllic Whitsunday Islands. No licence is required to charter, just some basic boat handling experience or a willingness to learn."
 },
 {
  slug: "chatfield-engineering-2013-ltd",
  name: "Chatfield Engineering (2013) Ltd",
  url: "http://www.chatfieldmarine.co.nz",
  region: "Auckland",
  cats: [
   28,
   29,
   36
  ],
  blurb: "Above deck or below you want marine hardware that is reliable, functional and great looking. We make and supply high quality driveline, strut & rudder items for NZ, the South Pacific & worldwide.",
  logo: "/img/directory/chatfield-engineering-2013-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "circa-marine-industrial",
  name: "Circa Marine & Industrial Ltd",
  url: "http://www.circamarine.co.nz",
  region: "Northland",
  cats: [
   4,
   11
  ],
  blurb: "We specialise in new builds up to 25 metres. We specialise in aluminium and production runs of aluminium boats from 6 metres to 9 metres. Also, repairs and refits to high finish. We are licensed to manufacture Naiad Inflatables.",
  logo: "/img/directory/circa-marine-industrial.png",
  logoTheme: "paper",
  curated: "circa-marine"
 },
 {
  slug: "city-of-sails-marine",
  name: "City of Sails Marine",
  url: "http://www.cityofsailsmarine.co.nz",
  region: "Auckland",
  cats: [
   4,
   38
  ],
  blurb: "Brokers are yacht, powerboat and launch brokers in the heart of Auckland City, New Zealand. We have a wide range of pleasure boats for sale.",
  logo: "/img/directory/city-of-sails-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "coast-international-ltd",
  name: "Coast New Zealand",
  url: "http://www.coastnewzealand.com",
  region: "Auckland",
  cats: [],
  blurb: "Represents everyday luxury that is made for life. Smart enough to take anywhere, and tough enough to last the distance, Coast New Zealand invites you to escape every day.",
  logo: "/img/directory/coast-international-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "coastguard-boating-education",
  name: "Coastguard Boating Education",
  url: "http://www.boatingeducation.org.nz",
  region: "Auckland",
  cats: [],
  blurb: "Is New Zealand's leading provider of boating courses with more than 40 core and specialty programmes available. Theoretical and practical courses are offered nationwide through our network of accredited providers.",
  logo: "/img/directory/coastguard-boating-education.png",
  logoTheme: "paper"
 },
 {
  slug: "composites-projects-ltd-nic-de-mey-yachts",
  name: "Composites Projects Ltd / Nic de Mey Yachts",
  url: "http://www.nicdemeyyachts.com",
  region: "Bay of Plenty",
  cats: [
   10,
   9
  ],
  blurb: "Nic de Mey takes great pride in building New Zealand’s finest custom advanced composite boats. Nic and his team of professional boatbuilders specialise in advanced composite construction to create everything from small racing boats to…",
  logo: "/img/directory/composites-projects-ltd-nic-de-mey-yachts.png",
  logoTheme: "paper"
 },
 {
  slug: "connexwire",
  name: "Connex",
  url: "http://www.connexwire.com",
  region: "Auckland",
  cats: [
   16,
   28
  ],
  blurb: "Partners with marine OEMs to achieve peak performance and efficiency with their electrical systems. Connex designs, develops, and manufactures custom-tailored wiring harnesses that eliminate repetitive, time-consuming, and costly processes…",
  logo: "/img/directory/connexwire.png",
  logoTheme: "paper",
  curated: "connex-wire"
 },
 {
  slug: "cracker-bay-marina",
  name: "Cracker Bay Marina",
  url: "http://www.crackerbay.nz",
  cats: [
   22,
   43
  ],
  blurb: "Cracker Bay is an innovative concept providing Auckland boat-owners, and international visitors, with the best range of choice in vessel storage, maintenance and servicing.",
  logo: "/img/directory/cracker-bay-marina.png",
  logoTheme: "paper"
 },
 {
  slug: "cule-marine-ltd",
  name: "Cule Marine Ltd",
  url: "http://www.culemarine.co.nz",
  region: "Auckland",
  cats: [
   30
  ],
  blurb: "In 2007 Cule Hatches was established after repeated approaches from boatbuilders wanting a better quality hatch, more versatility in approach, and direct contact with the manufacturer.",
  logo: "/img/directory/cule-marine-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "cummins-new-zealand",
  name: "Cummins New Zealand",
  url: "http://www.cummins.co.nz",
  region: "Auckland",
  cats: [
   26
  ],
  blurb: "The world's largest independent designer and manufacturer of diesel engines with a model line spanning 60 to 5000hp. The Cummins diesel product line for recreational use spans single engines delivering 230hp to 4200hp.",
  logo: "/img/directory/cummins-new-zealand.png",
  logoTheme: "paper"
 },
 {
  slug: "d-b-publishing",
  name: "D&B Publishing / PowerBoat Magazine",
  url: "http://www.powerboatmagazine.co.nz",
  region: "Auckland",
  cats: [
   44
  ],
  blurb: "D&B Publishing is the publisher of Pacific PowerBoat and Pacific Alloy Boat Magazines. Pacific PowerBoat is a bi-monthly print and digital magazine targeting powerboats from 3m to 30 metres, from trailerboats to motor yachts and cruisers.",
  logo: "/img/directory/d-b-publishing.png",
  logoTheme: "paper"
 },
 {
  slug: "dan-leech-naval-architecture-ltd",
  name: "Dan Leech Naval Architecture Ltd",
  url: "http://www.leechboats.com",
  region: "Canterbury",
  cats: [
   2,
   8,
   9,
   40
  ],
  blurb: "Dan Leech is a naval architect graduate from the Westlawn Institute of Marine Technology, and a qualified boat builder. He has worked as a naval architect for 14 years.",
  logo: "/img/directory/dan-leech-naval-architecture-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "catamarans-international-ltd",
  name: "Dart Ferries Ltd",
  url: "http://www.dartferries.com",
  region: "Auckland",
  cats: [
   4,
   7,
   9
  ],
  blurb: "The Dart Ferry range provides a lightweight, fuel-efficient, low-maintenance ferry that has been designed to cater for future advances in power system technology."
 },
 {
  slug: "dawson-associates-ltd",
  name: "Dawson & Associates Ltd",
  url: "http://www.maritimelaw.co.nz",
  region: "Nelson",
  cats: [
   42
  ],
  blurb: "With over 3 decades of experience, we understand the local and international complexities of maritime and fisheries law and are recognised as leading maritime lawyers in New Zealand.",
  logo: "/img/directory/dawson-associates-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "dickey-boats",
  name: "Dickey Boats Ltd",
  url: "http://www.dickeyboats.com",
  region: "Hawke's Bay",
  cats: [
   2,
   9
  ],
  blurb: "At Dickey Boats we build in aluminium and create innovative designs for passionate boaters. All of our boats are built using traditional &#8216;big boat' construction methods with a quality finish inside and out.",
  logo: "/img/directory/dickey-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "diesel-clean",
  name: "Diesel Clean",
  url: "http://www.fuel360.co.nz",
  region: "Auckland",
  cats: [
   13,
   26
  ],
  blurb: "Diesel Polishing (filtering) Fuel and water tank cleaning, including confined space entry and tank inspection. Replacement and servicing of fuel filters, we sell and install tank access ports, fuel gauges, fuel lines, air vent filters,…",
  logo: "/img/directory/diesel-clean.png",
  logoTheme: "paper"
 },
 {
  slug: "diesel-marine-nz-ltd",
  name: "Diesel Marine NZ Ltd",
  url: "http://www.dieselmarine.co.nz",
  region: "Auckland",
  cats: [
   13
  ],
  blurb: "At Diesel Marine we specialise in marine engineering and diesel maintenance for commercial and pleasure boats. Our experience in the marine industry allows us to focus on what’s important for you and the application.",
  logo: "/img/directory/diesel-marine-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "diverse-projects",
  name: "Diverse Projects Ltd",
  url: "http://www.diverseprojects.com",
  region: "Auckland",
  cats: [
   4,
   6,
   41,
   45
  ],
  blurb: "Diverse Projects is a well-established superyacht agent offering a wide range of services. Sub-contract construction yachts and power boats 20m+. Services to refit, charter and brokerage all handled.",
  logo: "/img/directory/diverse-projects.png",
  logoTheme: "paper",
  curated: "diverse-projects"
 },
 {
  slug: "marine-xpress",
  name: "Dixon Manufacturing Ltd",
  url: "http://www.dixon.co.nz",
  region: "Northland",
  cats: [
   30
  ],
  blurb: ". manufacture and distribute the highly respected Dixon brand, a range of NZ manufactured marine boarding ladders, handrails and gas hob toaster.",
  logo: "/img/directory/marine-xpress.png",
  logoTheme: "paper",
  curated: "dixon"
 },
 {
  slug: "dm-marine-electronics",
  name: "DM Marine Electronics",
  url: "http://www.dmmarineelectronics.com",
  region: "Auckland",
  cats: [
   16,
   28
  ],
  blurb: "We are Independent Marine Electronics Specialists based in Auckland, New Zealand offering tailored Systems for Instrumentation, Autopilots, Navigation, Communications, Computer Systems and Networks.",
  logo: "/img/directory/dm-marine-electronics.png",
  logoTheme: "paper"
 },
 {
  slug: "dmw-trailers",
  name: "DMW Trailers",
  url: "http://www.dmwtrailers.co.nz",
  region: "Waikato",
  cats: [
   32
  ],
  blurb: "Are manufactured at our new purpose-built factory in Hamilton to the highest standard of quality. Established in 1974, Our 40+ Year reputation for innovative and functional design has placed DMW Trailers amongst this country’s longest…",
  logo: "/img/directory/dmw-trailers.png",
  logoTheme: "paper"
 },
 {
  slug: "dockpro-nz-ltd",
  name: "Dockpro NZ Ltd",
  url: "http://www.dockpro.co.nz",
  cats: [
   30,
   43
  ],
  blurb: "“We develop, build and distribute the most innovative systems to protect your boat against barnacle and marine growth.” Whether you have a 100ft superyacht, a jet ski or any type of Personal Water Craft (PWC), we have a dry-docking…"
 },
 {
  slug: "dolphin-inflatables-ltd",
  name: "Dolphin Inflatables Ltd",
  url: "http://www.dolphininflatables.co.nz",
  region: "Auckland",
  cats: [
   2,
   9
  ],
  blurb: "Dolphin Inflatables are renowned for top quality, inflatable boat building, repairs and retubes which won’t break the bank. We build and repair all types of Inflatable Boats of all manufacturers and all models using New Zealand made…"
 },
 {
  slug: "dometic-new-zeal",
  name: "Dometic New Zealand Ltd",
  url: "http://www.dometic.com",
  region: "Wellington",
  cats: [
   28
  ],
  blurb: "Dometic Group is a customer-driven, world-leading provider of leisure products for the RV, automotive, truck and marine markets. We supply the industry and aftermarket with a complete range of air conditioners, refrigerators, awnings,…",
  logo: "/img/directory/dometic-new-zeal.png",
  logoTheme: "paper"
 },
 {
  slug: "donaghys-industries",
  name: "Donaghys Industries Limited",
  url: "http://www.donaghys.com",
  region: "Canterbury",
  cats: [
   30
  ],
  blurb: "Leading manufacturer of quality high end yachting braids and marine cordage. Donaghys specilise in custom production with short lead time.",
  logo: "/img/directory/donaghys-industries.png",
  logoTheme: "paper"
 },
 {
  slug: "doyle-sails-new-zeal",
  name: "Doyle Sails New Zealand Ltd",
  url: "http://www.doylesails.co.nz",
  region: "Auckland",
  cats: [
   15,
   20,
   27
  ],
  blurb: "Performance sails made by sailors, with lofts worldwide and headquarters in Auckland.",
  logo: "/img/directory/doyle-sails-new-zeal.png",
  logoTheme: "paper",
  curated: "doyle-sails"
 },
 {
  slug: "dspa-oceania",
  name: "DSPA Oceania",
  url: "http://dspafiresuppression.com",
  region: "Auckland",
  cats: [
   35
  ],
  blurb: "Welcome to DSPA Oceania, the official appointed distributor of DSPA products for the Australian and New Zealand markets. DSPA is the leading manufacturer of highly innovative aerosol generators, which can be used for fire extinguishing and…",
  logo: "/img/directory/dspa-oceania.png",
  logoTheme: "paper"
 },
 {
  slug: "dibley-marine-yacht-designers",
  name: "DYD Ltd (Dibley Marine)",
  url: "http://www.dibleymarine.com",
  region: "Auckland",
  cats: [
   40
  ],
  blurb: "Yacht design, powerboat design, multihull design, commercial design, marine design services. Dibley Marine offers a comprehensive marine architectural service.",
  logo: "/img/directory/dibley-marine-yacht-designers.png",
  logoTheme: "paper"
 },
 {
  slug: "eastern-marine-engineering-services",
  name: "Eastern Marine Engineering Services",
  url: "http://www.easternmarine.co.nz",
  region: "Auckland",
  cats: [
   13,
   28,
   30
  ],
  blurb: "Is the Certified Mercury Dealership at Pine Harbour Marina. We repair trailers, electrical, mechanical, propellers, generators, diesel and petrol engines, refrigeration, winches.",
  logo: "/img/directory/eastern-marine-engineering-services.png",
  logoTheme: "paper"
 },
 {
  slug: "elastomer-products-ltd",
  name: "Elastomer Products Ltd",
  region: "Canterbury",
  cats: [
   24
  ],
  blurb: "Our 50 years of experience means we've developed deep expertise working alongside New Zealand's world-class boat building community, from boutique custom shops to large-scale production facilities."
 },
 {
  slug: "electric-boat-co-nz-ltd",
  name: "Electric Boat Co NZ Ltd",
  url: "http://www.electricboat.co.nz",
  region: "Northland",
  cats: [
   2,
   0,
   38
  ],
  blurb: "We offer a range of high quality, robust electric boats for sale or hire. We also sell and install quality, commercial-grade motors for all types of electric boats, whether you are converting an existing boat or designing a new build.",
  logo: "/img/directory/electric-boat-co-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "electronic-navigation",
  name: "Electronic Navigation Ltd / ENL",
  url: "http://www.enl.co.nz",
  region: "Auckland",
  cats: [
   16,
   28,
   30
  ],
  blurb: "Electronic Navigation Ltd (ENL) is New Zealand's premier marine electronics company. Founded in 1945, ENL is a privately owned company that has earned a solid reputation for genuine service, innovation and supplying quality marine…",
  logo: "/img/directory/electronic-navigation.png",
  logoTheme: "paper",
  curated: "enl"
 },
 {
  slug: "elite-boat-builders-refinishing-ltd",
  name: "Elite Boat Builders and Refinishing Ltd",
  url: "https://eliteboatbuilders.co.nz",
  region: "Marlborough",
  cats: [
   10,
   11,
   9
  ],
  blurb: "Elite Boat Builders & Refinishing Ltd are specialists in marine painting and boat repairs. Elite’s fully compliant spray booth workshop is located right in the heart of the Waikawa Marina hardstand, Picton.",
  logo: "/img/directory/elite-boat-builders-refinishing-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "elite-marine-design",
  name: "Elite Marine Design Ltd",
  url: "http://www.elitemarine.co.nz",
  region: "Auckland",
  cats: [
   40
  ],
  blurb: "Elite Marine Design pride themselves on the ability to take an individual's requirements and dreams and put together not only an aesthetically pleasing and functional vessel, but one that is fuel efficient with unsurpassed sea keeping…",
  logo: "/img/directory/elite-marine-design.png",
  logoTheme: "paper"
 },
 {
  slug: "elliott-boat-design-elliott-marine",
  name: "Elliott Boat Design Ltd/Elliott Marine",
  url: "http://www.elliott-marine.com",
  region: "Auckland",
  cats: [
   40
  ],
  blurb: "Design Director and founder Greg Elliott brings 40 years of yacht design excellence, expertise and a lifetime of passion for the sea and sailing with him in his approach to every design.",
  logo: "/img/directory/elliott-boat-design-elliott-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "enertec-marine-systems",
  name: "Enertec Marine Ltd",
  url: "http://www.enertecmarine.com",
  region: "Auckland",
  cats: [
   28
  ],
  blurb: "Importers, distributors, installers and service providers of electrical power systems and components including marine batteries, Li-Ion batteries, chargers, inverters, generators, watermakers, LED lighting, monitoring and solar.",
  logo: "/img/directory/enertec-marine-systems.png",
  logoTheme: "paper"
 },
 {
  slug: "euro-city-marine",
  name: "Euro City Marine",
  url: "http://www.eurocitymarine.co.nz",
  region: "Hawke's Bay",
  cats: [
   2
  ],
  blurb: "Euro City was established in 2005 and many of our clients have been with us for generations and that speaks a lot for the care and customer service we consistently deliver.",
  logo: "/img/directory/euro-city-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "european-marine-imports-ltd",
  name: "European Marine Imports Ltd",
  region: "Canterbury",
  cats: [
   4
  ],
  blurb: "European Marine Imports Ltd is an NZ Marine member working in boat kept in the water.",
  logo: "/img/directory/european-marine-imports-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "ev-maritime-ltd",
  name: "EV Maritime Ltd",
  url: "http://www.evmaritime.com",
  region: "Auckland",
  cats: [
   7
  ],
  blurb: "EV Maritime exists to focus deep marine industry experience on the foremost challenge of our time: climate change . We are a marine technology business in Auckland New Zealand dedicated to developing electric and alternative energy…",
  logo: "/img/directory/ev-maritime-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "man-energy-solutions-new-zealand-ltd",
  name: "Everllence New Zealand Ltd",
  url: "https://www.everllence.com/marine",
  region: "Auckland",
  cats: [
   13,
   14
  ],
  blurb: "Everllence New Zealand is the world’s leading provider of large-bore diesel and gas engines and turbomachinery. Our portfolio includes two-stroke and four-stroke engines for marine, stationary applications, turbochargers and propellers,…",
  logo: "/img/directory/man-energy-solutions-new-zealand-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "evocean-electric-power-and-propulsion",
  name: "Evocean Electric Power and Propulsion",
  url: "http://www.evocean.co.nz",
  cats: [
   14,
   31
  ],
  blurb: "Evocean Electric Power and Propulsion is an NZ Marine member working in transmission, propulsion and thrusters.",
  logo: "/img/directory/evocean-electric-power-and-propulsion.png",
  logoTheme: "paper"
 },
 {
  slug: "explorer-boats-nz-ltd",
  name: "Explorer Boats NZ Ltd",
  url: "http://www.explorerboats.co.nz",
  region: "Auckland",
  cats: [
   2
  ],
  blurb: "Whether you’re looking for a new yacht tender, a safe and comfortable boat to take the family out on, or a craft designed for some serious watersport and fishing action – Explorer has something for everyone.",
  logo: "/img/directory/explorer-boats-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "expression-boat-works-ltd",
  name: "Expression Boat Works Ltd",
  url: "https://expressionboatworks.co.nz",
  region: "Auckland",
  cats: [
   2
  ],
  blurb: "At Expression Boatworks, our mission is to craft high-performance fibreglass fishing vessels that blend American sportfishing style with rugged, beach-launchable versatility.",
  logo: "/img/directory/expression-boat-works-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "extreme-boats",
  name: "Extreme Boats Ltd",
  url: "http://www.extremeboats.co.nz",
  region: "Bay of Plenty",
  cats: [
   2,
   9
  ],
  blurb: "Extreme Boats Limited is an aluminium boat builder company building 60 high quality aluminium boats per annum. The boats are designed by well known boat designer Scott Robson.",
  logo: "/img/directory/extreme-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "family-boats",
  name: "Family Boats",
  url: "http://www.familyboats.co.nz",
  region: "Auckland",
  cats: [
   2,
   30,
   33,
   34,
   35
  ],
  blurb: "Where your fun, is our business! From our early days as a small yard, to the construction of our premier undercover showroom, to the opening of our second store in Pauanui, it’s fair to say we’ve grown a lot over the last 30 years.",
  logo: "/img/directory/family-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "fastmount",
  name: "Fastmount Ltd",
  url: "http://www.fastmount.com",
  region: "Auckland",
  cats: [
   28
  ],
  blurb: "Fastmount is an award-winning New Zealand company designing and manufacturing hidden fasteners specifically to service the marine, architectural, aviation and recreational vehicle industries globally.",
  logo: "/img/directory/fastmount.png",
  logoTheme: "paper",
  curated: "fastmount"
 },
 {
  slug: "master-marine",
  name: "Fat Cat by Lightning Marine",
  url: "http://www.lightningmarine.co.nz",
  region: "Auckland",
  cats: [
   2,
   9,
   40
  ],
  blurb: "FatCats are wide-bodied catamaran boats. Designed to perform across all sea conditions giving a soft, stable ride with unparalleled space, stability, and safety.",
  logo: "/img/directory/master-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "fenton-innovation-ltd",
  name: "Fenton Innovation Ltd",
  url: "http://www.fentoninnovation.com",
  cats: [],
  blurb: "Our mission is to superpower companies by allowing great people to focus on what they do best, letting the machines do the rest Our Beliefs Human centric - we believe the AI age is more than ever a human age - that AI is a tool that can…",
  logo: "/img/directory/fenton-innovation-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "fi-glass-products",
  name: "Fi-Glass Products Ltd",
  url: "http://www.fi-glass.co.nz",
  region: "Canterbury",
  cats: [
   2,
   9,
   30
  ],
  blurb: "Manufacturers of Fi-Glass Boats. Agents for Kiwikraft Aluminium Pontoon Boats, Fyran Boats, Yamaha Outboards, Mercury Outboards, Mercruiser Sterndrives, Raytheon, Hummingbird, Navman Fishfinders, Hutchwilco and Line-7 Life Jackets, O`Brien…",
  logo: "/img/directory/fi-glass-products.png",
  logoTheme: "paper"
 },
 {
  slug: "fc-boats-ltd",
  name: "Fin Chaser Boats",
  url: "https://fcboats.co.nz",
  region: "Waikato",
  cats: [
   2,
   9
  ],
  blurb: "Was founded in 2011 when Ross Christensen realised there was an opportunity to vastly improve smaller-sized aluminium boats in New Zealand.",
  logo: "/img/directory/fc-boats-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "fiordland-discovery",
  name: "Fiordland Discovery",
  region: "Southland",
  cats: [],
  blurb: "",
  logo: "/img/directory/fiordland-discovery.png",
  logoTheme: "paper"
 },
 {
  slug: "firebird-marine-nz-ltd",
  name: "Firebird Marine (NZ) Ltd",
  url: "http://www.firebirdmarine.co.nz",
  cats: [
   13,
   31
  ],
  blurb: "New Zealand's leading specialist in After Market Marine Engine Parts for Outboards, Inboards, Sterndrives & Jet Skis Proudly Family Owned and Trusted for over 38 years. We pride ourselves on our reputation and exceptional customer service.",
  logo: "/img/directory/firebird-marine-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "fish-city",
  name: "Fish City Albany",
  url: "http://www.fishcityalbany.co.nz",
  region: "Auckland",
  cats: [
   2,
   30,
   33
  ],
  blurb: "Fish City is New Zealand's one stop fishing shop. We want you to have a great day's fishing so we provide you with everything you need to experience this! Get your bait, fishing licenses, rods, reels, line, boats, motors, electronics,…",
  logo: "/img/directory/fish-city.png",
  logoTheme: "paper"
 },
 {
  slug: "family-boats-north-shore",
  name: "Fishing Boats NZ Ltd",
  url: "http://www.fishingboatsnz.co.nz",
  region: "Auckland",
  cats: [
   2,
   30,
   31,
   33
  ],
  blurb: "Fishing Boats NZ are proud to be one of New Zealand’s largest dealers of Surtees aluminium boats and Yamaha outboards. We also stock a wide range of engines and accessories.",
  logo: "/img/directory/family-boats-north-shore.png",
  logoTheme: "paper"
 },
 {
  slug: "frews-marine",
  name: "Frews Marine Ltd",
  url: "http://www.frewzaboats.co.nz",
  region: "Southland",
  cats: [
   2,
   9
  ],
  blurb: "The FREWZA \"team\" from the deep south, the capital of aluminium boat building, are specialists in manufacturing excellent innovative and practical aluminum boats.",
  logo: "/img/directory/frews-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "fridgetech-marine",
  name: "Fridgetech Marine Ltd",
  url: "http://www.fridgetech.co.nz",
  region: "Auckland",
  cats: [
   19,
   36
  ],
  blurb: "Showcasing refrigeration / freezer solutions from DIY kit-sets, build in or stand alone to custom designed systems. Isotemp stainless hot water storage cylinders.",
  logo: "/img/directory/fridgetech-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "fuijifilm-nz-ltd",
  name: "FUIJIFILM NZ Ltd",
  url: "http://www.fuijfilm.com/nz/en/consumer/binoculars",
  region: "Auckland",
  cats: [
   30,
   35
  ],
  blurb: "Experience a Legacy of Legendary Optics Fujinon binoculars are trusted companions of astronomers, maritime surveillance experts, and other visual professionals.",
  logo: "/img/directory/fuijifilm-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "galloway-international",
  name: "Galloway International",
  url: "http://www.macboats.com",
  region: "Auckland",
  cats: [
   2,
   9
  ],
  blurb: "MAC Boats (part of Galloway International) are world leaders in fully rotational molded polyethylene boats and have an extensive range from 2.1 metre right up to our newest 7 metre model.",
  logo: "/img/directory/galloway-international.png",
  logoTheme: "paper"
 },
 {
  slug: "fusion-electronics",
  name: "Garmin New Zealand",
  url: "https://www.garmin.com/en-NZ/c/marine",
  region: "Auckland",
  cats: [
   28,
   30
  ],
  blurb: "Garmin is a global leader in consumer electronics, offering innovative products in 5 diverse segments covering Automotive, Aviation, Fitness, Marine and Outdoor Recreation.",
  logo: "/img/directory/fusion-electronics.png",
  logoTheme: "paper",
  curated: "garmin"
 },
 {
  slug: "general-marine-services",
  name: "General Marine Services Ltd",
  url: "http://www.generalmarine.co.nz",
  region: "Auckland",
  cats: [
   13,
   14,
   17,
   18,
   19,
   26,
   28,
   30
  ],
  blurb: "General Marine Services is a specialist marine engineering company, based in Westhaven, in the heart of New Zealand’s “City of Sails”, Auckland.",
  logo: "/img/directory/general-marine-services.png",
  logoTheme: "paper"
 },
 {
  slug: "gilbert-sheetmetal-engineering-ltd",
  name: "Gilbert Sheetmetal & Engineering Ltd",
  url: "http://www.gsme.co.nz",
  cats: [
   11,
   21
  ],
  blurb: "Hull, Structural Repairs and New Builds, Steel and Aluminium Pipe Fabrication in all Materials Including CuNi Pumps and Valves Retro Fitted, New or Rebuilt Machinery, Installation, Retro Fits, Repairs and Servicing Commercial Vessel…",
  logo: "/img/directory/gilbert-sheetmetal-engineering-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "gineico-marine",
  name: "Gineico Marine",
  url: "http://www.gineicomarine.co.au",
  cats: [
   16,
   28
  ],
  blurb: "Are importers and exclusive distributors of leading marine brands including Quick MC2 Gyro Stabilization, Idromar Watermakers, Gianneschi Pumps, Nautinox, Foresti and Suardi hardware, Besenzoni and Vimar switches.",
  logo: "/img/directory/gineico-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "gj-lock-consulting-ltd",
  name: "GJ Lock Consulting Ltd",
  region: "Auckland",
  cats: [],
  blurb: ""
 },
 {
  slug: "global-marine-technology-services-ltd",
  name: "Global Marine Technology Services Ltd",
  url: "http://www.gmts.io",
  region: "Auckland",
  cats: [
   8,
   16
  ],
  blurb: "Global Player - Local Focus",
  logo: "/img/directory/global-marine-technology-services-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "gloss-boats-marine-spraying-specialists-ltd",
  name: "Gloss Boats Marine Spraying Specialists Ltd",
  url: "http://www.glossboats.co.nz",
  region: "Auckland",
  cats: [
   12
  ],
  blurb: "Gloss Boats Marine Spraying has been specialising in maintenance, repair, and recoating of all marine hull and interior surfaces for over 30 years.",
  logo: "/img/directory/gloss-boats-marine-spraying-specialists-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "gme-standard-communications",
  name: "GME Communications (NZ) Ltd",
  url: "http://www.gme.net.au",
  region: "Auckland",
  cats: [
   16
  ],
  blurb: "GME are leaders in the design and manufacture of marine electronics. Our extensive product range include VHF radios, Emergency Beacons, Plotters/Sounders, Marine Entertainment & Speakers, Antennas, AIS Units and much more.",
  logo: "/img/directory/gme-standard-communications.png",
  logoTheme: "paper"
 },
 {
  slug: "gough-bros",
  name: "Gough Bros Engineering",
  region: "Southland",
  cats: [],
  blurb: "Marine and general engineering. Aluminium and steel boat builders. Diesel engineers.",
  logo: "/img/directory/gough-bros.png",
  logoTheme: "paper"
 },
 {
  slug: "gt-marine-2010-ltd",
  name: "GT Marine 2010 Ltd",
  url: "http://www.gtmarine.co.nz",
  region: "Auckland",
  cats: [
   13,
   26,
   28,
   29,
   30,
   31,
   35
  ],
  blurb: "We're one of Auckland's leading outboard motor specialists with expertise in servicing and repairs of all makes and models of outboard motor. We're also proficient at installation of all electronics, from fish finders to navigation lights.",
  logo: "/img/directory/gt-marine-2010-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "gt-yachting-ltd",
  name: "GT Yachting Ltd",
  url: "http://www.gtyachting.com",
  region: "Auckland",
  cats: [
   47
  ],
  blurb: "GT Yachting offer yacht delivery, guardianage and maintenance services. Maintenance - We can provide a tailor-made maintenance assessment to suit your boat and your needs.",
  logo: "/img/directory/gt-yachting-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "gulf-group-marine-brokers",
  name: "Gulf Group Marine Brokers Ltd",
  url: "http://www.gulfgroup.co.nz",
  region: "Auckland",
  cats: [
   4,
   38
  ],
  blurb: "Gulf Group marine brokerage was formed in 1992. Our aim has been to work with our customers, either selling or purchasing a boat, to ensure the experience is enjoyable.",
  logo: "/img/directory/gulf-group-marine-brokers.png",
  logoTheme: "paper"
 },
 {
  slug: "gulf-harbour-marina",
  name: "Gulf Harbour Marina Ltd",
  url: "http://www.gulfharbourmarina.co.nz",
  region: "Auckland",
  cats: [
   22
  ],
  blurb: "Marina complex with 1028 berths ranging from 10.5 meters to 55 metres. The complex also has a 110 & 35 ton travelift, sealed yard, full compliment of sub trades, and undercover faculties available.",
  logo: "/img/directory/gulf-harbour-marina.png",
  logoTheme: "paper"
 },
 {
  slug: "gulfl-marine",
  name: "Gulfland Marine (PRL Investments)",
  url: "http://www.gulflandmarine.co.nz",
  region: "Auckland",
  cats: [
   2,
   30,
   31,
   33,
   34,
   35
  ],
  blurb: "Has operated from its Whangaparaoa Road,north Auckland, purpose built boat shop since 1979. We are a certified Mercury and Mercruiser sales and service agent and have several Master Technicians in our service department.",
  logo: "/img/directory/gulfl-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "gurit-asia-pacific",
  name: "Gurit (Asia Pacific) Ltd",
  url: "http://www.gurit.com",
  region: "Auckland",
  cats: [
   24,
   25,
   40
  ],
  blurb: "With over 30 years experience working with boat designers and builders in this region, the company is well placed to continue its supply of composite materials and structural engineering solutions to all marine projects, from production…",
  logo: "/img/directory/gurit-asia-pacific.png",
  logoTheme: "paper"
 },
 {
  slug: "h2-yacht-solutions",
  name: "H2 Yacht Solutions",
  url: "http://www.h2yachtsolutions.com",
  region: "Auckland",
  cats: [
   30,
   36
  ],
  blurb: "​Save Time. Reduce Workload. Cut Costs. Elevate Guest Experience. Improve Crew Health. Save our Oceans. ​ How healthy is your water on board? Most yachts invest heavily in design, technology, and performance - but often overlook the one…",
  logo: "/img/directory/h2-yacht-solutions.png",
  logoTheme: "paper"
 },
 {
  slug: "sea-craft",
  name: "Haines Hunter",
  url: "http://www.haineshunterhq.co.nz",
  region: "Auckland",
  cats: [
   2,
   9
  ],
  blurb: "Ltd is a New Zealand owned fibreglass boat building company, operating for more than 78 years. The manufacturing base is in Ellerslie, Auckland with the product sold through a nationwide dealer network.",
  logo: "/img/directory/sea-craft.png",
  logoTheme: "paper"
 },
 {
  slug: "half-moon-bay-boatbuilders-ltd",
  name: "Half Moon Bay Boatbuilders Ltd",
  url: "http://www.theboatbuilders.co.nz",
  region: "Auckland",
  cats: [],
  blurb: "Based in Half Moon Bay Marina on Auckland’s Waitemata Harbour, The Boat Builders are an experienced team ready to take care of all your boating needs.",
  logo: "/img/directory/half-moon-bay-boatbuilders-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "auckl-maritime-foundation",
  name: "Half Moon Bay Marina",
  url: "http://www.hmbmarina.co.nz",
  region: "Auckland",
  cats: [
   43
  ],
  blurb: "Located just 30 minutes from Auckland CBD, HMB Marina connects you to the Hauraki Gulf, Waiheke, Coromandel, and beyond. Our marine village offers seamless service and everyday essentials on site. Trusted experts keeping you on the water.",
  logo: "/img/directory/auckl-maritime-foundation.png",
  logoTheme: "paper"
 },
 {
  slug: "maxwell-hall-marine-design",
  name: "Hall Marine Design",
  url: "http://www.hallmarinedesign.com",
  region: "Bay of Plenty",
  cats: [
   2,
   40
  ],
  blurb: "Based in sunny Mount Maunganui, the Hall Marine Design team are experienced fishermen, powerboat, and ocean enthusiasts - whose visionary design solutions exist in that elusive sweet spot where form and function merge seamlessly.",
  logo: "/img/directory/maxwell-hall-marine-design.png",
  logoTheme: "paper"
 },
 {
  slug: "hamilton-jet-new-zeal",
  name: "HamiltonJet New Zealand",
  url: "http://www.hamjet.co.nz",
  region: "Canterbury",
  cats: [
   14,
   26
  ],
  blurb: "HamiltonJet has been manufacturing Marine Propulsion Systems for 60 years producing over 60,000 units worldwide. Our range of waterjets cover power inputs from 100kW through to 5000kW and can operate with most of the recognised marine…",
  logo: "/img/directory/hamilton-jet-new-zeal.png",
  logoTheme: "paper",
  curated: "hamiltonjet"
 },
 {
  slug: "harken-nz",
  name: "Harken New Zealand Ltd",
  url: "http://www.harken.co.nz",
  region: "Auckland",
  cats: [
   17,
   28,
   30,
   36
  ],
  blurb: "Harken Inc. is a leading manufacturer and marketer of quality sailboat hardware and accessories. Our gear has dominated such events as the America's Cup and Olympics.",
  logo: "/img/directory/harken-nz.png",
  logoTheme: "paper"
 },
 {
  slug: "hauraki-design-consultancy",
  name: "Hauraki Design Consultancy",
  url: "http://www.haurakicomposites.co.nz",
  region: "Auckland",
  cats: [
   8,
   40
  ],
  blurb: "Is a marine design and advanced composite engineering consultancy set up to deliver independent and custom design solutions primarily to the New Zealand marine industry.",
  logo: "/img/directory/hauraki-design-consultancy.png",
  logoTheme: "paper"
 },
 {
  slug: "hauraki-fenders",
  name: "Hauraki Fenders",
  url: "http://www.haurakifenders.co.nz",
  region: "Auckland",
  cats: [
   0,
   30
  ],
  blurb: "Since 2014 Hauraki Fenders has taken off, what started as a hobby business quickly became serious business as the popularity of our products skyrocketed.",
  logo: "/img/directory/hauraki-fenders.png",
  logoTheme: "paper"
 },
 {
  slug: "hawkes-bay-marine-2016-ltd",
  name: "Hawkes Bay Marine (2016) Ltd",
  url: "http://www.hbmarine.co.nz",
  region: "Hawke's Bay",
  cats: [
   2
  ],
  blurb: "Your specialist marine sales, service and repair centre since 1995. Proud suppliers of Senator, Smartwave and Mac boats, along with Evinrude, Suzuki & Parsun outboards. Let us create your dream boat today.",
  logo: "/img/directory/hawkes-bay-marine-2016-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "hcb-technologies-ltd",
  name: "HCB Technologies Ltd",
  url: "http://www.hcb.co.nz",
  region: "Auckland",
  cats: [
   16,
   30
  ],
  blurb: "HCB Technologies Ltd is an NZ Marine member working in electrical and electronics.",
  logo: "/img/directory/hcb-technologies-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "heavy-diesel-support-ltd",
  name: "Heavy Diesel Support Ltd",
  region: "Otago",
  cats: [
   13,
   14
  ],
  blurb: "Is the single source solution for all heavy off-road machinery service, maintenance and repairs covering Otago, Southland and South Canterbury.",
  logo: "/img/directory/heavy-diesel-support-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "hella-new-zealand",
  name: "HELLA New Zealand",
  url: "http://www.hellamarine.com",
  region: "Auckland",
  cats: [
   28
  ],
  blurb: "The Hella marine vision is to provide world leading marine lighting products that set benchmarks for quality, reliability, safety and energy efficiency and to meet customer expectations for outstanding service and support.",
  logo: "/img/directory/hella-new-zealand.png",
  logoTheme: "paper"
 },
 {
  slug: "hercules-tanks-2021-ltd",
  name: "Hercules Tanks 2026 Ltd",
  url: "https://www.herculestanks.co.nz",
  region: "Bay of Plenty",
  cats: [
   28,
   36
  ],
  blurb: "Marine tanks · Water tanks · Fuel tanks · Waste tanks Hercules Tanks offers a complete design, construction, and fitting service for all types of tanks, including:",
  logo: "/img/directory/hercules-tanks-2021-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "heritage-expeditions-ltd",
  name: "Heritage Expeditions Ltd",
  url: "http://www.heritage-expeditions.co.nz",
  region: "Canterbury",
  cats: [],
  blurb: "Heritage Expeditions, New Zealand’s only family-owned and -operated expedition cruise company, are pioneers in authentic, small ship expedition cruising.",
  logo: "/img/directory/heritage-expeditions-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "herley-boats-ltd",
  name: "Herley Boats Ltd",
  url: "http://www.herleyboats.com",
  region: "Bay of Plenty",
  cats: [
   4
  ],
  blurb: "At Herley Boats, we believe in crafting boats with meticulous attention to detail, using only the highest quality materials, and delivering a finish that exceeds expectations.",
  logo: "/img/directory/herley-boats-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "ship-repair-nz",
  name: "Heron Ship Repair Ltd",
  url: "http:// www.shiprepair.co.nz",
  region: "Northland",
  cats: [
   11,
   17,
   22,
   21
  ],
  blurb: "Heron Ship Repair Limited is located in Port Whangarei, and is one of New Zealand's most experienced shipyards. Heron Ship Repair offer full class survey, new build and repair services for both commercial and pleasure vessels, along with…",
  logo: "/img/directory/ship-repair-nz.png",
  logoTheme: "paper"
 },
 {
  slug: "hesketh-henry",
  name: "Hesketh Henry",
  url: "http://www.heskethhenry.co.nz",
  region: "Auckland",
  cats: [
   42
  ],
  blurb: "Is a sector focussed law firm based in Auckland. We have particular expertise in the shipping and yachting sectors. Several of our lawyers are active sailors or have ocean going marine experience.",
  logo: "/img/directory/hesketh-henry.png",
  logoTheme: "paper"
 },
 {
  slug: "power-concepts-nz-ltd",
  name: "Hikoterra",
  url: "http://www.powerconceptsnz.com",
  region: "Auckland",
  cats: [
   16
  ],
  blurb: "Is an R&D company working at the leading edge of power electronics to develop integrated energy storage and supply solutions. The H 4 Hybrid Power System has been developed to meet the expectations of today’s owners and builders of boats,…",
  logo: "/img/directory/power-concepts-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "half-moon-bay-electrical",
  name: "HMB Marine Electrical Ltd",
  url: "http://www.hmbe.co.nz",
  region: "Auckland",
  cats: [
   16,
   28
  ],
  blurb: "As specialists in the marine industry, our team of 10 electricians is experienced with boats of all sizes and types. With branches at Half Moon Bay Marina and Tamaki Marine Park, we have the flexibility and expertise to service different…",
  logo: "/img/directory/half-moon-bay-electrical.png",
  logoTheme: "paper"
 },
 {
  slug: "hobsonville-boatbuilding-services-ltd",
  name: "Hobsonville Boatbuilding Services Ltd",
  url: "http://www.hobsonvilleboatbuildingservices.co.nz",
  region: "Auckland",
  cats: [
   22
  ],
  blurb: "Is a family-owned business with a small team of skilled tradesmen that are passionate about all things boating. We like to work closely with our customers to provide a quality, personal service whether it be building the boat of your…",
  logo: "/img/directory/hobsonville-boatbuilding-services-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "westpark-marina",
  name: "Hobsonville Marina Ltd",
  url: "http://hobsonvillemarina.co.nz",
  region: "Auckland",
  cats: [
   43
  ],
  blurb: "Hobsonville Marina is an extensive recreational boat harbour in Auckland`s upper Waitemata harbour, a short distance from central Auckland. The 600 berths range from 10m to 32m.",
  logo: "/img/directory/westpark-marina.png",
  logoTheme: "paper"
 },
 {
  slug: "honda-marine",
  name: "Honda Marine",
  url: "http://www.hondamarine.co.nz",
  region: "Auckland",
  cats: [
   31
  ],
  blurb: "Importer and distributor of Honda outboards. 35 Dealers throughout NZ. Honda only produces 4 stroke outboards which are quiet, economical and environmentally clean. All 75 models in 18 hp categories have a 5 year warranty.",
  logo: "/img/directory/honda-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "alistair-hool-marine-brokers-ltd",
  name: "Hool Marine Brokers Ltd",
  url: "http://www.hoolmarine.com",
  region: "Auckland",
  cats: [
   4,
   38
  ],
  blurb: "Hool Marine Independent Boat Brokers. With a specialised focus on luxury vessels, Hool Marine offers a highly experienced team of genuinely passionate boat brokers.",
  logo: "/img/directory/alistair-hool-marine-brokers-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "ceproof-new-zeal",
  name: "HPI-CEproof New Zealand Ltd",
  url: "http://www.hpi-ceproof.com",
  region: "Auckland",
  cats: [
   46
  ],
  blurb: "Is providing comprehensive services in relation to the Recreational Craft Directive (RCD) and to marking yachts under 24m and all components as well in the industry, with a CE-Conformité Européenne-certification in New Zealand, Australia,…",
  logo: "/img/directory/ceproof-new-zeal.png",
  logoTheme: "paper"
 },
 {
  slug: "hs-composites-ltd",
  name: "HS Composites Ltd",
  url: "http://www.hscomposites.co.nz",
  region: "Auckland",
  cats: [
   24
  ],
  blurb: "HS Composites Ltd is an NZ Marine member working in construction materials.",
  logo: "/img/directory/hs-composites-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "coppercoat-pacific-ltd",
  name: "Hullwell Advanced Marine Coating Technologies Ltd",
  url: "http://www.hullwell.co.nz",
  region: "Canterbury",
  cats: [
   12,
   25
  ],
  blurb: "Led by Richard Cleave and utilising technical expertise from offshore and New Zealand, HullWell has perfected a unique and simplified three product coating system.",
  logo: "/img/directory/coppercoat-pacific-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "csb-huntsman-boats-nz",
  name: "Huntsman Boats (NZ) Ltd",
  url: "http://www.csbhuntsmanboats.co.nz",
  region: "Canterbury",
  cats: [
   2,
   9
  ],
  blurb: "To manufacture high quality commercial products and superior performing powerboats that will leave our customers with a feeling of pride, confidence, safety and satisfaction.",
  logo: "/img/directory/csb-huntsman-boats-nz.png",
  logoTheme: "paper"
 },
 {
  slug: "hurricane-products-ltd-parsun-outboards",
  name: "Hurricane Products Ltd/Parsun Outboards",
  url: "https://www.parsun.co.nz",
  region: "Taranaki",
  cats: [],
  blurb: "Parsun gives you the performance & reliability of the big brands– without the premium price. From lightweight 2-strokes to efficient 4-strokes, our outboards are reliable, fuel-smart, and perfect for small to medium boats.",
  logo: "/img/directory/hurricane-products-ltd-parsun-outboards.png",
  logoTheme: "paper"
 },
 {
  slug: "hutcheson-boatbuilders-1993",
  name: "Hutcheson Boatbuilders (1993) Ltd",
  url: "http://www.hutchesonboats.co.nz",
  region: "Bay of Plenty",
  cats: [
   4,
   9
  ],
  blurb: "Hutcheson Boatbuilders is a company known internationally for high-quality repairs, refits, fibreglassing, cabinetry, engineering, osmosis repairs and all shipwright work.",
  logo: "/img/directory/hutcheson-boatbuilders-1993.png",
  logoTheme: "paper"
 },
 {
  slug: "hutchwilco",
  name: "Hutchwilco Ltd",
  url: "http://www.hutchwilco.co.nz",
  region: "Auckland",
  cats: [
   35
  ],
  blurb: "Manufacturer of lifejackets, buoyancy aids, garments and wetsuits. Wholesale distributor of marine safety equipment including Zodiac Liferafts, distress signals, boating accessories and watersports equipment.",
  logo: "/img/directory/hutchwilco.png",
  logoTheme: "paper"
 },
 {
  slug: "hybrid-boats-nz",
  name: "Hybrid Boats NZ Ltd",
  url: "http://www.hybridboats.co.nz",
  region: "Auckland",
  cats: [
   4
  ],
  blurb: "Hybrid Boats New Zealand specialise in the range of Greenline boats ranging from 33 to 65 feet which offer electric solar power cruise options mixed with quality European design and modern living.",
  logo: "/img/directory/hybrid-boats-nz.png",
  logoTheme: "paper"
 },
 {
  slug: "hybrid-electrical-ltd",
  name: "Hybrid Electrical Ltd",
  url: "http://www.hybridelectrical.co.nz",
  region: "Auckland",
  cats: [
   8,
   13,
   16
  ],
  blurb: "At Hybrid Electrical we offer a range of services across the electrical industry, specializing in marine vessels and power generation.",
  logo: "/img/directory/hybrid-electrical-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "hydraulink-metal-technologies-tauranga-ltd",
  name: "Hydraulink & Metal Technologies Tauranga Ltd",
  url: "http://www.hydraulinktauranga.co.nz",
  region: "Bay of Plenty",
  cats: [
   26,
   28,
   29
  ],
  blurb: "Hydraulink provides a ‘matched system’ of hose and fittings, ensuring our products are engineered to work together to exceed international SAE and ISO standards and deliver outstanding application and safety performance.",
  logo: "/img/directory/hydraulink-metal-technologies-tauranga-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "hyundaimotors",
  name: "Hyundai Motors NZ",
  url: "http://www.hyundai.co.nz",
  region: "Auckland",
  cats: [
   13
  ],
  blurb: "Hyundai’s design and technology has been proven in the automotive sector and is now available in a marine engine. We introduce to you one of the most reliable, clean, fuel efficient, quiet and lightweight marine engines.",
  logo: "/img/directory/hyundaimotors.png",
  logoTheme: "paper"
 },
 {
  slug: "icon-marine-manufacturing-ltd",
  name: "Icon Marine Manufacturing Ltd",
  url: "http://www.iconcustomboats.co.nz",
  cats: [
   7,
   11
  ],
  blurb: "100 % NEW ZEALAND MADE",
  logo: "/img/directory/icon-marine-manufacturing-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "image-boats",
  name: "Image Boats Ltd",
  url: "http://www.imageboats.co.nz",
  region: "Southland",
  cats: [
   2,
   9,
   32
  ],
  blurb: "Image Boats of Invercargill is a strong leader in the alloy boat building market. Located at the bottom of the South Island means it is an ideal location for putting our boats through their paces in Southland's notorious coastal waters.",
  logo: "/img/directory/image-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "imed",
  name: "IMED",
  url: "http://www.imed.co.nz",
  cats: [
   16
  ],
  blurb: "Marine Electrical & ASEA Shore Power Specialists IMED delivers specialist marine electrical solutions for the superyacht and commercial marine industries.",
  logo: "/img/directory/imed.png",
  logoTheme: "paper"
 },
 {
  slug: "inders-marinel",
  name: "Inders Marineland Ltd",
  url: "http://www.indersmarine.co.nz",
  region: "Southland",
  cats: [
   2,
   30,
   31,
   33,
   34,
   35
  ],
  blurb: "Our company has had a long and valued association with Yamaha Marine in the sales and service of Yamaha Outboards. We also hold the franchise for Fi Glass boats, Steadecraft boats, Kiwi Kraft Alloy boats and Rayglass boats.",
  logo: "/img/directory/inders-marinel.png",
  logoTheme: "paper"
 },
 {
  slug: "innovate-composites-ltd",
  name: "Innovate Composites Ltd",
  url: "http://www.innovatecomposites.nz",
  region: "Auckland",
  cats: [
   8
  ],
  blurb: "Established in 2019 and led by Chris, Steve & Paul, our team combines experience from the marine & industrial composites sectors. Our strong background in professional sailing means we are accustomed to tight delivery deadlines along with…",
  logo: "/img/directory/innovate-composites-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "vision-innovation-ltd",
  name: "Innovision Boats",
  url: "http://www.innovisionboats.com",
  region: "Auckland",
  cats: [
   2,
   9
  ],
  blurb: "We specialise in creating the perfect alloy recreational/fishing boats with a superior quality of finish. With our years of experience in boating out on the water, we have designed a variety of boats that will ensure your pure enjoyment on…",
  logo: "/img/directory/vision-innovation-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "integrated-marine-group",
  name: "Integrated Marine Group",
  url: "http://www.integratedmarinegroup.com",
  region: "Auckland",
  cats: [
   41,
   45
  ],
  blurb: "Renowned superyacht agent Integrated Marine Group provides a unique range of services, whether building new, repairing or supporting you at sea through the Pacific Ocean region and beyond, our system is structured to integrate our skills…",
  logo: "/img/directory/integrated-marine-group.png",
  logoTheme: "paper"
 },
 {
  slug: "island-cruising-association",
  name: "Island Cruising NZ",
  url: "https://www.islandcruising.nz",
  region: "Canterbury",
  cats: [
   54
  ],
  blurb: "Provide yacht cruising rallies around New Zealand and the islands of the South Pacific. These rallies are designed to allow sailors to cruise the islands aboard their own boats, or assist as crew on someone else's boat.",
  logo: "/img/directory/island-cruising-association.png",
  logoTheme: "paper"
 },
 {
  slug: "jackson-industries",
  name: "Jackson Industries - Advanced Engineering",
  url: "http://www.jackson.co.nz/advanced-engineering",
  region: "Auckland",
  cats: [
   8,
   10,
   11,
   9,
   15,
   16,
   21
  ],
  blurb: "Jackson Advanced Engineering are specialists in large format precision machining, composites, and polymers and are a leading supplier of tools and products across a large array of industries, including marine, aerospace, television & film,…",
  logo: "/img/directory/jackson-industries.png",
  logoTheme: "paper"
 },
 {
  slug: "johnson-yachts-international",
  name: "Johnson Yachts International",
  url: "http://www.johnsonyachts.co.nz",
  region: "Auckland",
  cats: [
   41
  ],
  blurb: "Project Management & Consultancy Services.",
  logo: "/img/directory/johnson-yachts-international.png",
  logoTheme: "paper"
 },
 {
  slug: "jolt-rider-ltd",
  name: "Jolt Rider Ltd",
  url: "http://www.joltrider.com",
  cats: [
   30,
   36
  ],
  blurb: "Jolt Rider™ shock-mitigating marine seats are designed and developed specifically for the harsh marine environment for both commercial and recreational use.",
  logo: "/img/directory/jolt-rider-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "jp-ribs",
  name: "JP CRAFTS",
  url: "http://www.jpcrafts.co",
  region: "Auckland",
  cats: [
   9
  ],
  blurb: "Build bespoke vessels which display exceptional performance coupled with a smooth, efficient ride. Fully customisable, they are hand-crafted in New Zealand to combine world-leading performance with an individual approach.",
  logo: "/img/directory/jp-ribs.png",
  logoTheme: "paper"
 },
 {
  slug: "jpd-marine-ltd",
  name: "JP PROJECTS",
  url: "http://www.jpcrafts.co",
  region: "Auckland",
  cats: [
   8
  ],
  blurb: "Along with its service division, offers a comprehensive range of services to the marine industry, including precision refits, meticulous construction, and unwavering servicing.",
  logo: "/img/directory/jpd-marine-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "kaleo-designs",
  name: "Kaleo Designs",
  url: "http://www.kaleo.co.nz",
  region: "Northland",
  cats: [
   35
  ],
  blurb: "Brings the spirit of Aotearoa’s coast to what you wear. Based in the Bay of Islands, Kaleo collaborates with New Zealand artists to create original prints inspired by our ocean, landscapes, and coastal culture.",
  logo: "/img/directory/kaleo-designs.png",
  logoTheme: "paper"
 },
 {
  slug: "kev-ians-marine-service",
  name: "Kev and Ian's Marine",
  url: "http://www.kev.co.nz",
  region: "Auckland",
  cats: [
   2,
   30
  ],
  blurb: "Services is a Mercury Premier Dealer, specializing in both Mercury and Evinrude outboard engines. We take pride in our expertise with Evinrude motors, ensuring top-notch service and repairs.",
  logo: "/img/directory/kev-ians-marine-service.png",
  logoTheme: "paper"
 },
 {
  slug: "kit-carlier-design",
  name: "Kit Carlier Design",
  url: "http://www.kitcarlierdesign.com",
  region: "Northland",
  cats: [
   40
  ],
  blurb: "Is proud to deliver bespoke design, and rises to the challenge of a different journey for each project. With our clients, we sculpt dreams and visions into a reality, both visually and technically",
  logo: "/img/directory/kit-carlier-design.png",
  logoTheme: "paper"
 },
 {
  slug: "kiwi-engineering-marine",
  name: "Kiwi Engineering and Marine Ltd",
  url: "http://www.kiwi-kraft.co.nz",
  region: "Southland",
  cats: [
   2,
   9
  ],
  blurb: "The Kiwi-Kraft story grew from one man's love of diving, fishing and hunting - his name is Rodney Harris. In 1988 Rodney saw a need for a safer, better performing aluminium boat. One that also appealed to the eye Kiwi-Kraft was born.",
  logo: "/img/directory/kiwi-engineering-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "kiwi-yachting-consultants",
  name: "Kiwi Yachting Consultants Ltd",
  url: "http://www.kiwiyachting.co.nz",
  region: "Auckland",
  cats: [
   30,
   34,
   35
  ],
  blurb: "Whether you are building a new boat or restoring a yacht, Kiwi Yachting can assist you in making the right decisions. We have been supplying the New Zealand marine industry since 1988 and are proud to offer professional advice and a wide…",
  logo: "/img/directory/kiwi-yachting-consultants.png",
  logoTheme: "paper"
 },
 {
  slug: "kopu-marine",
  name: "Kopu Marine",
  url: "http://www.kopumarine.co.nz",
  cats: [
   22
  ],
  blurb: "Situated at Kopu, we can offer haulouts for larger vessels who have in the past had to travel north. We have hardstand facilities for either quick turnaround or longer storage while you work on your boat, or being a division of Kopu…"
 },
 {
  slug: "kapiti-propeller-marine",
  name: "KP Marine",
  url: "http://www.kpmarine.co.nz",
  region: "Wellington",
  cats: [
   2,
   30,
   31,
   33,
   34,
   35
  ],
  blurb: "Boat sales and fishing is our business, whether you are looking for a new or used powerboat, new or used outboard, Volva Penta or Yanmar diesel engine or any combination of these items in Wellington, then look no further.",
  logo: "/img/directory/kapiti-propeller-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "lannika-yacht-ltd",
  name: "Lannika Yacht Ltd",
  url: "http://www.lannika.com",
  region: "Auckland",
  cats: [
   4
  ],
  blurb: "At Lannika, we lead the future of luxury yachting, blending unmatched craftsmanship, pioneering design, and a relentless commitment to excellence.",
  logo: "/img/directory/lannika-yacht-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "laurie-collins-westhaven",
  name: "Laurie Collins Westhaven Ltd",
  url: "http://www.lauriecollins.co.nz",
  region: "Auckland",
  cats: [
   4,
   38
  ],
  blurb: "Laurie Collins Marine is a long established Marine Broker under Sails Restaurant at the Western end of Westhaven Dr outside K pier. We sell the INTEGRITY BRAND of boats New to NZ and we are the agents for the New Design range 33 to 65…",
  logo: "/img/directory/laurie-collins-westhaven.png",
  logoTheme: "paper"
 },
 {
  slug: "lees-boatbuilders",
  name: "Lees Boatbuilders Ltd",
  url: "http://www.leesboatbuilders.co.nz",
  region: "Auckland",
  cats: [
   4,
   11,
   9,
   12,
   13,
   15,
   14,
   16,
   17,
   20
  ],
  blurb: "New boatbuilding, repairs, maintenance, refits, undercover, slipway-hardstanding, mast gantry, chandlery shop, salvage - towing diesel fuel jetty - 36 years in the Marine industry.",
  logo: "/img/directory/lees-boatbuilders.png",
  logoTheme: "paper"
 },
 {
  slug: "lighthouse-marine-equipment",
  name: "Lighthouse Marine Equipment Ltd",
  url: "http://www.lhmarine.co.nz",
  region: "Auckland",
  cats: [
   28
  ],
  blurb: "Lighthouse Marine Equipment - New Zealand distributors. A wide range of marine lighting, winches & windlasses, bow & stern thrusters, marine toilets & sanitation, trim tabs, rudder & steering systems, marine bearings, engine couplings,…",
  logo: "/img/directory/lighthouse-marine-equipment.png",
  logoTheme: "paper"
 },
 {
  slug: "liquid-automation",
  name: "Liquid Automation Ltd",
  url: "http://www.liquidautomation.co.nz",
  region: "Auckland",
  cats: [
   28
  ],
  blurb: "Liquid Automation has over 50 years of collective experience in the marine industry. We have the in-house specialists and a proven track record to integrate your ship’s systems into one simple to use, intuitive user interface.",
  logo: "/img/directory/liquid-automation.png",
  logoTheme: "paper"
 },
 {
  slug: "liquid-scope",
  name: "Liquid Scope Limited",
  url: "http://www.liquidscope.com",
  region: "Auckland",
  cats: [
   44
  ],
  blurb: "Liquid Scope is an up-and-coming company based on the North Shore of Auckland, currently providing diversified services to the domestic and international marine industries.",
  logo: "/img/directory/liquid-scope.png",
  logoTheme: "paper"
 },
 {
  slug: "live-sail-die-ltd",
  name: "Live Sail Die Ltd",
  url: "http://www.livesaildie.com",
  region: "Auckland",
  cats: [
   44
  ],
  blurb: "Live Sail Die is a passionate team of sailors creating content of sailors, for sailors! It’s pretty safe to say that we are complete fizzers when it comes to our amazing sport.",
  logo: "/img/directory/live-sail-die-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "lloyd-stevenson-boatbuilders",
  name: "Lloyd Stevenson Boatbuilders Ltd",
  url: "http://www.lloydstevensonyachts.co.nz",
  region: "Auckland",
  cats: [
   9
  ],
  blurb: "Lloyd Stevenson Boatbuilders have, over the last 30 years, built a reputation for building beautifully crafted custom boats, with a focus on attention to detail and styling.",
  logo: "/img/directory/lloyd-stevenson-boatbuilders.png",
  logoTheme: "paper",
  curated: "lloyd-stevenson"
 },
 {
  slug: "lusty-blundell",
  name: "Lusty & Blundell Ltd",
  url: "http://www.lusty-blundell.co.nz",
  region: "Auckland",
  cats: [
   25,
   28,
   30,
   35
  ],
  blurb: "Founded in 1974 by Ken Lusty and having been in business for over 40 years and continue to be the leading marine distributor in New Zealand.",
  logo: "/img/directory/lusty-blundell.png",
  logoTheme: "paper"
 },
 {
  slug: "machina-supply-co-ltd",
  name: "Machina Peritia",
  url: "http://www.machinaperitia.com",
  region: "Hawke's Bay",
  cats: [
   4,
   9
  ],
  blurb: "The evolution of Machina Boats Founded in 2018, Machina was forged from a passion for metal fabrication and aluminium boats. We have a deep desire to challenge what the traditional alloy pontoon boat is, how it performs, and how it should…",
  logo: "/img/directory/machina-supply-co-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "mackay-boats-ltd",
  name: "Mackay Boats Ltd",
  url: "http://www.mackayboats.com",
  region: "Auckland",
  cats: [
   2
  ],
  blurb: "MacKay Boats have a long and successful reputation for building winning boats including racing powerboats, surfboats and yachts. During the 60's,70's and 80's we built the Flying Dutchman class and our boats were used by New Zealand crews…",
  logo: "/img/directory/mackay-boats-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "mainsail-electronics-ltd",
  name: "Mainsail Electronics Ltd",
  url: "http://www.mainsailelectronics.com",
  region: "Auckland",
  cats: [
   16,
   28
  ],
  blurb: "Mainsail Electronics are your marine systems specialists. Based in Auckland with over 35 years experience, we specialise in digital switching, charging systems, Lithium Ion battery technology and solar systems.",
  logo: "/img/directory/mainsail-electronics-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "mainstay-marine-ltd",
  name: "Mainstay Marine Ltd",
  url: "http://www.mainstaymarine.co.nz",
  region: "Auckland",
  cats: [
   15,
   27,
   28
  ],
  blurb: "Mainstay Marine Ltd is an NZ Marine member working in spars, rigging and sail.",
  logo: "/img/directory/mainstay-marine-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "makaira-boats-ltd",
  name: "Makaira Boats Ltd",
  url: "http://www.makairaboats.co.nz",
  region: "Northland",
  cats: [
   9
  ],
  blurb: "At Makaira Boats we are a passionate team of aluminium boat builders and game fishers who live and breath boats and sport fishing, our aim is to build the best quality offshore aluminium sport fishing boats on the market.",
  logo: "/img/directory/makaira-boats-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "manaaki-marine-ltd",
  name: "Manaaki Marine Ltd",
  url: "http://www.manaakimarine.co.nz",
  region: "Auckland",
  cats: [
   39,
   38,
   41
  ],
  blurb: "Manaaki Marine is a specialist maritime recruitment agency connecting operators and businesses with qualified skipper, crew, and shore-based professionals across New Zealand.",
  logo: "/img/directory/manaaki-marine-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "manson-anchors",
  name: "Manson Anchors",
  url: "http://www.mansonanchors.com",
  region: "Auckland",
  cats: [
   17
  ],
  blurb: "Since 1972 Manson Anchors has been designing anchors for pleasure boat skippers through to superyacht captains. Manson Anchors is a world-class manufacturer and has the biggest range of anchors in the world.",
  logo: "/img/directory/manson-anchors.png",
  logoTheme: "paper"
 },
 {
  slug: "manta-marine-stainless-ltd",
  name: "Manta Marine Stainless Ltd",
  url: "http://mantamarine.co.nz",
  region: "Auckland",
  cats: [
   30
  ],
  blurb: "Is 100% NZ owned and operated. For over 40 years Manta has been at the leading edge of stainless steel marine fabrication. We are a family run business and the Pribicevich family has owned Manta since 1997.",
  logo: "/img/directory/manta-marine-stainless-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "marco-boats",
  name: "Marco Boats Ltd",
  url: "http://www.marcoboats.co.nz",
  region: "Waikato",
  cats: [
   2,
   9
  ],
  blurb: "Marco Boats have always produced a wide range of high quality aluminum boats, from 3.6m to 9.5m. They are suited to both family boating & serious fishing.",
  logo: "/img/directory/marco-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "marine-industrial-diesels-ltd",
  name: "Marine & Industrial Diesels Ltd",
  url: "http://www.midiesels.co.nz",
  region: "Auckland",
  cats: [
   13,
   14,
   21
  ],
  blurb: "We are your reliable heavy diesel engine specialists based in Auckland with full workshop facilities and mobile vans. Cummins specialists - over 20 years experience on all Cummins. Inboard diesel engine repairs & servicing.",
  logo: "/img/directory/marine-industrial-diesels-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "marine-specialised-technologies-academy-of-new-zealand-mast",
  name: "Marine & Specialised Technologies Academy of New Zealand (MAST Academy)",
  url: "http://www.mastacademy.com",
  region: "Auckland",
  cats: [],
  blurb: "We carry out the following statutory functions:",
  logo: "/img/directory/marine-specialised-technologies-academy-of-new-zealand-mast.png",
  logoTheme: "paper"
 },
 {
  slug: "marine-and-industrial-rebuilds",
  name: "Marine and Industrial Rebuilds",
  url: "http://www.marineindustrial.co.nz",
  cats: [
   13
  ],
  blurb: "Marine and Industrial Rebuilds is an NZ Marine member working in engine repairs, repower and parts.",
  logo: "/img/directory/marine-and-industrial-rebuilds.png",
  logoTheme: "paper"
 },
 {
  slug: "wanaka-marine-and-sport-2",
  name: "Marine and Sport Wanaka",
  url: "http://www.marineandsport.co.nz",
  region: "Otago",
  cats: [
   31
  ],
  blurb: "Marine & Sport Wānaka is proudly located on the shores of Lake Wānaka in the heart of the Central Lakes region. Located on Anderson Road for more than 30 years, we are perfectly positioned to serve the area's lakes, rivers and nearby…",
  logo: "/img/directory/wanaka-marine-and-sport-2.png",
  logoTheme: "paper"
 },
 {
  slug: "gavin-dakers",
  name: "Marine Cert Ltd",
  url: "http://www.marinecert.co.nz",
  region: "Auckland",
  cats: [
   46
  ],
  blurb: "Drawing on over thirty years of hands on experience, Marine Cert specialise in Marine Electrical Surveying, Marine Electrical Inspections (EWOF) and Electrical Design Approval across New Zealand.",
  logo: "/img/directory/gavin-dakers.png",
  logoTheme: "paper"
 },
 {
  slug: "marine-concierge-nz-ltd",
  name: "Marine Concierge (NZ) Ltd",
  region: "Auckland",
  cats: [
   41,
   47
  ],
  blurb: "Marine ​Concierge was founded at the end of 2019. While working in fleet management for the New Zealand commercial marine industry, Eric realised there was a unique opportunity to bring the high-quality, professional care of big business…",
  logo: "/img/directory/marine-concierge-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "marine-design-survey-services-ltd",
  name: "Marine Design & Survey Services Ltd",
  url: "http://www.mdss.co.nz",
  region: "Canterbury",
  cats: [
   40,
   46
  ],
  blurb: "Marine Surveyor Services MDSS's team of MNZ recognised Marine Surveyors come from seagoing, vessel management and design backgrounds.",
  logo: "/img/directory/marine-design-survey-services-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "finlay-boats-nz-ltd",
  name: "Marine Focus NZ Ltd",
  url: "http://marinefocus.co.nz",
  region: "Canterbury",
  cats: [
   46
  ],
  blurb: "Our company provides the following key services to commercial vessel owners and operators, aquaculture farms, insurers and lawyers",
  logo: "/img/directory/finlay-boats-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "marine-industrial-design",
  name: "Marine Industrial Design",
  url: "http://www.marinedesign.co.nz",
  region: "Auckland",
  cats: [
   40,
   41
  ],
  blurb: "Provide a complete design service; concepts, design, detailing, budgets, specifications, bid preparation, engineering, systems, project management.",
  logo: "/img/directory/marine-industrial-design.png",
  logoTheme: "paper"
 },
 {
  slug: "marine-inspection-services-ltd",
  name: "Marine Inspection Services Ltd",
  url: "http://www.marineinspectionservices.co.nz",
  region: "Bay of Plenty",
  cats: [
   46
  ],
  blurb: "Marine inspection Services was started by Aaron Beattie. An NZQA boat builder with 35 years of experience in the marine industry. Aaron is starting his next chapter and wanting to stay in the marine industry formed his new business, Marine…",
  logo: "/img/directory/marine-inspection-services-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "marine-installations-developments-ltd",
  name: "Marine Installations & Developments Ltd",
  cats: [
   8,
   13
  ],
  blurb: "Marine Installations & Developments Ltd is an NZ Marine member working in designers/engineers."
 },
 {
  slug: "marine-management",
  name: "Marine Management Ltd",
  url: "http://www.mml.org.nz",
  region: "Auckland",
  cats: [
   40,
   41
  ],
  blurb: "MML is a full service consultancy and project management company, with bespoke refit planning tools, working with the superyacht, commercial and naval sectors.",
  logo: "/img/directory/marine-management.png",
  logoTheme: "paper",
  curated: "marine-management"
 },
 {
  slug: "marine-north",
  name: "Marine North Ltd",
  url: "http://www.marinenorth.co.nz",
  region: "Northland",
  cats: [
   31,
   33,
   34,
   35,
   30
  ],
  blurb: "Marine North is a marine dealer of trailer power boats, Yamaha and Evinrude motors.",
  logo: "/img/directory/marine-north.png",
  logoTheme: "paper"
 },
 {
  slug: "marine-power-systems-ltd",
  name: "Marine Power Systems Ltd",
  url: "http://www.marinepower.co.nz",
  region: "Waikato",
  cats: [
   13,
   14
  ],
  blurb: "Is a family-owned business founded in 2013 to provide specialist diesel and propulsion technical services in New Zealand and the South Pacific. We are the New Zealand distributor for Steyr Marine Diesels.",
  logo: "/img/directory/marine-power-systems-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "marine-propulsion-ltd",
  name: "Marine Propulsion Ltd",
  url: "http://www.marinepropulsion.co.nz",
  region: "Auckland",
  cats: [
   13,
   14
  ],
  blurb: "Highly skilled, qualified marine engineers! 50+ years experience. - Diesel Mechanics - Propulsion Systems - Marine Systems - General Engineering",
  logo: "/img/directory/marine-propulsion-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "marine-protection-solutions-nz-ltd",
  name: "Marine Protection Solutions NZ Ltd",
  url: "http://www.nzmps.co.nz",
  region: "Waikato",
  cats: [
   12
  ],
  blurb: "Marine Protection Solutions NZ Ltd is an NZ Marine member working in painting and antifouling.",
  logo: "/img/directory/marine-protection-solutions-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "marine-protection-systems",
  name: "Marine Protection Systems",
  url: "http://www.marineprotection.co.nz",
  region: "Canterbury",
  cats: [
   25
  ],
  blurb: "Specialist manufacturer of zinc and aluminium anodes. Cupral antifouling for saltwater cooling systems. Anode systems design and assessment.",
  logo: "/img/directory/marine-protection-systems.png",
  logoTheme: "paper"
 },
 {
  slug: "marine-reflections-ltd",
  name: "Marine Reflections Ltd",
  url: "http://www.marinereflections.co.nz",
  region: "Bay of Plenty",
  cats: [
   12
  ],
  blurb: "Marine Reflections provides refit, paint, and maintenance services for leisure and commercial vessels — from routine work through to full refit projects.",
  logo: "/img/directory/marine-reflections-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "marine-workz-westhaven",
  name: "Marine Works Westhaven Ltd",
  url: "http://www.marineworks.co.nz",
  region: "Auckland",
  cats: [
   26,
   31
  ],
  blurb: "Suppliers of Mercury Outboards, Mercruiser Sterndrives, Mercury Propellors, Mercury Oils and Lubricants, Mercury Racing Products, centrally located in Westhaven, Auckland",
  logo: "/img/directory/marine-workz-westhaven.png",
  logoTheme: "paper"
 },
 {
  slug: "mariner-marine-insurance",
  name: "Mariner Marine Insurance",
  url: "https://mariner.co.nz",
  region: "Auckland",
  cats: [
   42
  ],
  blurb: "The insurance of pleasure and charter craft requires a focused approach from specialists. Mariner offers this specialised service to direct clients, boating and yachting clubs, marine brokers and boat dealers.",
  logo: "/img/directory/mariner-marine-insurance.png",
  logoTheme: "paper"
 },
 {
  slug: "marra-marine-ltd",
  name: "Marra Marine Ltd",
  url: "http://www.marramarine.nz",
  region: "Bay of Plenty",
  cats: [
   9
  ],
  blurb: "Has been operating since July 2018. We’re an established boat building company based in Tauranga, servicing Bay of Plenty, Waikato, Auckland and Coromandel.",
  logo: "/img/directory/marra-marine-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "marsden-cove-marinas",
  name: "Marsden Cove Marinas Ltd",
  url: "http://www.marsdencovemarina.co.nz",
  region: "Northland",
  cats: [
   43
  ],
  blurb: "Marsden Cove Marina resides in the centre of the Marsden Cove canal housing development, found just inside the entrance of the picturesque Whangarei Harbour.",
  logo: "/img/directory/marsden-cove-marinas.png",
  logoTheme: "paper"
 },
 {
  slug: "martronics",
  name: "Martronics Ltd",
  url: "http://www.martronics.co.nz",
  region: "Auckland",
  cats: [
   16,
   28
  ],
  blurb: "Supply, installation, maintenance of all marine electronics. Equipment for navigational, communications, entertainment and IT systems. Refits, radio inspections.",
  logo: "/img/directory/martronics.png",
  logoTheme: "paper"
 },
 {
  slug: "master-marine-projects-ltd",
  name: "Master Marine Projects Ltd",
  url: "http://www.mastermarine.co.nz",
  region: "Auckland",
  cats: [
   40,
   41
  ],
  blurb: "Master marine has a long history of innovative and world leading marine design and marine manufacturing. From creating sailing speed record sail designs to world championship foils and fins, Master marine has been at the leading edge of…"
 },
 {
  slug: "matamata-marine",
  name: "Matamata Marine Ltd",
  region: "Waikato",
  cats: [
   31,
   33,
   34,
   35,
   30
  ],
  blurb: "Matamata Marine Ltd is an NZ Marine member working in auxiliary engines.",
  logo: "/img/directory/matamata-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "mcd-yacht-brokers",
  name: "MCD Yacht Brokers",
  url: "https://www.mcdyachts.com",
  region: "Auckland",
  cats: [
   4
  ],
  blurb: "M C D is a boutique yacht brokerage. With exclusive Australasian representation of some of Europe’s most exciting luxury brands, we delight in bringing these exceptional vessels to our waters."
 },
 {
  slug: "mckay",
  name: "McKay",
  url: "http://www.mckay.co.nz",
  region: "Northland",
  cats: [
   16,
   28
  ],
  blurb: "Contracting and Installations, Specifications and Technical Documentation, Electrical Engineering, Systems Engineering, Technical Writing, Manual Composition and Manufacturing.",
  logo: "/img/directory/mckay.png",
  logoTheme: "paper"
 },
 {
  slug: "mclaren-brown-publishign-ltd",
  name: "McLaren Brown Publishing Ltd",
  url: "http://www.boaties.co.nz",
  region: "Auckland",
  cats: [
   44
  ],
  blurb: "McLaren Brown Publishing Ltd is an NZ Marine member working in media, publication and marketing.",
  logo: "/img/directory/mclaren-brown-publishign-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "mclay-boats",
  name: "McLay Boats",
  url: "http://www.mclayboats.co.nz",
  region: "Otago",
  cats: [
   9,
   30
  ],
  blurb: "Manufacturers of high quality aluminium plate boats, ranging from 5 - 7.8 metres. McLay Boats are all round boats designed for either off-shore or lake use. Designs have either cuddy or sleeper cabin or hardtop.",
  logo: "/img/directory/mclay-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "mcmullen-wing",
  name: "McMullen and Wing Ltd",
  url: "http://www.mcmullenandwing.com",
  region: "Auckland",
  cats: [
   4,
   10,
   11,
   9
  ],
  blurb: "Shipyard and boat builder McMullen and Wing offer construction in steel, aluminium and composite. All marine trades onsite. Facilities include 65t travel lift, 350t covered slipway, 3 build halls, CNC router, CNC plasma cutter and private…",
  logo: "/img/directory/mcmullen-wing.png",
  logoTheme: "paper",
  curated: "mcmullen-wing"
 },
 {
  slug: "mcraes-global-engineering-ltd",
  name: "McRaes Global",
  url: "http://www.mcraesglobal.com",
  region: "Auckland",
  cats: [
   13,
   17
  ],
  blurb: "Established over 50 years ago, today McRaes Global remains a 100% New Zealand owned specialist hydraulic, engineering and controls company.",
  logo: "/img/directory/mcraes-global-engineering-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "mercury-marine",
  name: "Mercury Marine",
  url: "http://www.mercurymarine.co.nz",
  region: "Auckland",
  cats: [
   26,
   31
  ],
  blurb: "Supplier of Mercury outboards, Mercruiser sterndrives, Quicksilver product line.",
  logo: "/img/directory/mercury-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "mg-composites-nz-ltd",
  name: "MG Composites NZ Ltd",
  region: "Wellington",
  cats: [
   9,
   20,
   22,
   36
  ],
  blurb: "MG Composites NZ Ltd is an NZ Marine member working in pleasure boat builders.",
  logo: "/img/directory/mg-composites-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "mitchell-machines-ltd",
  name: "Mitchell Machines Ltd",
  region: "Bay of Plenty",
  cats: [],
  blurb: "Are you fed up with the limitations imposed on you by others? We at Mitchell Machines are. So we have developed our own line of products that surpass others bound by such limitations."
 },
 {
  slug: "moon-engines",
  name: "Moon Engines Ltd / Marine Transmissions NZ",
  url: "http://www.moonengines.co.nz",
  region: "Auckland",
  cats: [
   13,
   14,
   26
  ],
  blurb: "Moon Engines is owned by James Mobberley who started at Moon in 2001 and purchased the company in 2008. For over 30 years the company has been providing the launch, yacht and commercial boating market in New Zealand and the Pacific Islands…",
  logo: "/img/directory/moon-engines.png",
  logoTheme: "paper"
 },
 {
  slug: "motor-and-marine-services-ltd",
  name: "Motor & Marine Services Ltd",
  url: "http://www.motorandmarine.nz ",
  region: "Auckland",
  cats: [
   13,
   14
  ],
  blurb: "We service all engine types/makes and gensets. We are Vetus and Westerbeke authorised service agents. We carry out all shaft & prop removal/repairs. Anything from the prop to the crankshaft pulley. Muir anchor windlass service agents",
  logo: "/img/directory/motor-and-marine-services-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "motor-yacht-centre-ltd",
  name: "Motor Yacht Centre Ltd",
  url: "http://www.maritimo.co.nz",
  region: "Auckland",
  cats: [
   4,
   30
  ],
  blurb: "After 37 years of manufacturing boats, 25 of these in his own business with late wife Heather, Don stepped aside from manufacturing to concentrate on design and project management work.",
  logo: "/img/directory/motor-yacht-centre-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "motor-yacht-service-centre",
  name: "Motor Yacht Service Centre",
  url: "http://www.motoryachtservicecentre.co.nz",
  region: "Auckland",
  cats: [
   4,
   9
  ],
  blurb: "Quality service for luxury motor yachts - Horizon, Hatteras, Maritimo, Sea Ray, Grand Banks, Riviera and others.",
  logo: "/img/directory/motor-yacht-service-centre.png",
  logoTheme: "paper"
 },
 {
  slug: "naiad-inflatables",
  name: "Naiad New Zealand Ltd",
  url: "http://www.naiad.co.nz",
  region: "Marlborough",
  cats: [
   7,
   8,
   11,
   9
  ],
  blurb: "Naiad design and sell the world’s hardest-working Rigid Inflatable Boats (RIBs) for a range of commercial and recreational applications. Naiads shine in rough weather, carrying speed with comfortable ride when other boats are slowing down.",
  logo: "/img/directory/naiad-inflatables.png",
  logoTheme: "paper"
 },
 {
  slug: "naut-ltd",
  name: "Naut Ltd",
  url: "http://www.naut.co.nz",
  cats: [
   0
  ],
  blurb: "Naut is an electric propulsion technology company from Northland, New Zealand. We design and make electric motors for the marine industry using our unique proprietary battery system, our talented engineers and years of experience…",
  logo: "/img/directory/naut-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "nautica-shipping-logistics-ltd",
  name: "Nautica Shipping & Logistics Ltd",
  url: "http://www.nauticashipping.com",
  region: "Auckland",
  cats: [
   47
  ],
  blurb: "Nautica caters to the requirements of both importers and exporters, providing a range of shipping services, from all-inclusive door-to-door shipping packages to consultancy advice.",
  logo: "/img/directory/nautica-shipping-logistics-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "navico",
  name: "Navico Group",
  url: "http://www.navico.com",
  region: "Auckland",
  cats: [
   28
  ],
  blurb: "Navico is currently the world’s largest marine electronics company, and is the parent company to leading marine electronics brands: Lowrance, Simrad and B&G.",
  logo: "/img/directory/navico.png",
  logoTheme: "paper",
  curated: "navico"
 },
 {
  slug: "navigator-shipbrokers-ltd",
  name: "Navigator Shipbrokers Ltd / Sevenstar Yacht Transport",
  url: "http://www.navshipyachts.co.nz",
  region: "Auckland",
  cats: [
   47
  ],
  blurb: "Navigator Shipbrokers, NZ agent to Sevenstar Yacht Transport, is an industry leader in yacht, boat and commercial vessel transport to and from New Zealand.",
  logo: "/img/directory/navigator-shipbrokers-ltd.png",
  logoTheme: "paper",
  curated: "navigator-shipbrokers"
 },
 {
  slug: "navstation-ltd",
  name: "Navstation Ltd / Garmin",
  url: "http://www.navstation.co.nz",
  region: "Auckland",
  cats: [
   28
  ],
  blurb: "Nav Station offers the boating public the BEST selection at the BEST prices in the Auckland area. With the combined experience of two companies, Nav Station is the only major outlet that can offer unbiased opinion on all product ranges.",
  logo: "/img/directory/navstation-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "nawi-island-fiji",
  name: "Nawi Island, Fiji",
  url: "http://www.nawiisland.com",
  region: "International",
  cats: [
   43
  ],
  blurb: "Nawi Island is an exclusive and luxurious destination where everything is centred around you and your needs. Nestled in Savusavu Bay, across from Fiji’s second largest island of Vanua Levu, Nawi Island is the ideal place for relaxation,…",
  logo: "/img/directory/nawi-island-fiji.png",
  logoTheme: "paper"
 },
 {
  slug: "new-zealand-marine-distribution-parker-marine-group",
  name: "New Zealand Marine Distribution / Parker Marine Group",
  url: "http://www.parkermarinegroup.co.nz",
  region: "Northland",
  cats: [
   31,
   38,
   46
  ],
  blurb: "The service specialists at Parker Marine Group know what a challenging task it can be to identify and solve even the simplest of boating concerns.",
  logo: "/img/directory/new-zealand-marine-distribution-parker-marine-group.png",
  logoTheme: "paper"
 },
 {
  slug: "new-zeal-rigging",
  name: "New Zealand Rigging Ltd",
  url: "http://www.nzrigging.com",
  region: "Auckland",
  cats: [
   15,
   27
  ],
  blurb: "New Zealand Rigging is New Zealand's largest locally owned and operated Yacht Rigging and Spar Making business. We offer a complete mast and rigging service, we manufacture masts in Carbon Fibre and Aluminium for Dinghys, Cruising boats,…",
  logo: "/img/directory/new-zeal-rigging.png",
  logoTheme: "paper"
 },
 {
  slug: "niss-niss-ltd",
  name: "Niss Niss Ltd",
  url: "http://www.nissniss.com",
  cats: [
   15,
   47
  ],
  blurb: "Niss Niss Ltd is an NZ Marine member working in spars, rigging and sail.",
  logo: "/img/directory/niss-niss-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "nm-insurance-nz-ltd",
  name: "NM Insurance NZ Ltd",
  url: "http://www.nminsurance.co.nz",
  region: "Auckland",
  cats: [
   42
  ],
  blurb: "Nautilus Marine Insurance has been a trusted provider of specialist marine insurance solutions for 20 years, protecting over 45,000 policyholders across New Zealand and Australia.",
  logo: "/img/directory/nm-insurance-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "nors",
  name: "Norsand Ltd",
  url: "http://www.norsand.co.nz",
  region: "Northland",
  cats: [
   4,
   9,
   22
  ],
  blurb: "Haulout facilities for mono-hull and multihull vessels. Traditional and composite boatbuilders, painters, engineers, welders and general labourers. Mechanical and electrical services. Refit management.",
  logo: "/img/directory/nors.png",
  logoTheme: "paper"
 },
 {
  slug: "north-sails",
  name: "North Sails (NZ) Ltd",
  url: "http://www.northsails.com",
  region: "Auckland",
  cats: [
   27
  ],
  blurb: "North Sails is the largest sailmaker in the world, with lofts and manufacturing facilities in 29 countries. Founded in 1957 by Lowell North in a San Diego, CA garage, North's growth and success has been built on a foundation of superior…",
  logo: "/img/directory/north-sails.png",
  logoTheme: "paper",
  curated: "north-sails"
 },
 {
  slug: "nyalic-nz",
  name: "Nyalic NZ Ltd",
  url: "http://www.nyalic.co.nz",
  region: "Otago",
  cats: [
   25,
   30
  ],
  blurb: "In New Zealand Nyalic NZ Ltd, a privately owned Limited Liability Company holds the master license for sole distribution of the Nyalic and other ancillary products manufactured by HBI Inc. of Georgia USA, for the region of Australasia.",
  logo: "/img/directory/nyalic-nz.png",
  logoTheme: "paper"
 },
 {
  slug: "nz-boat-register",
  name: "NZ Boat Register",
  url: "http://www.nzboatregister.co.nz",
  region: "Wellington",
  cats: [],
  blurb: "A Spark of Inspiration on the Open Seas Our love for the briny runs deep, but it wasn't always plain sailing. A near miss with a family member at sea shone a light on the challenges faced by search and rescue teams.",
  logo: "/img/directory/nz-boat-register.png",
  logoTheme: "paper"
 },
 {
  slug: "nz-boat-sales",
  name: "NZ Boat Sales Ltd",
  url: "http://www.nzboatsales.com",
  region: "Marlborough",
  cats: [
   4,
   38
  ],
  blurb: "Why do business with us? Because we not only KNOW boats, we LOVE boats. We're a small, family-owned brokerage company. We work very closely with our customers - we like to call it the \"boatique\" approach. Bigger is not always better.",
  logo: "/img/directory/nz-boat-sales.png",
  logoTheme: "paper"
 },
 {
  slug: "nz-composites",
  name: "NZ Composites Ltd",
  url: "http://www.nzcomposites.com",
  region: "Auckland",
  cats: [
   24
  ],
  blurb: "Is a distributor/supplier of composite materials. We supply: Dry Fibre Reinforcements: -Glass/ Carbon/ Aramid in Woven, Stitched and Unidirectional Pre-Preg, Adhesives: Newport Adhesives and Composites.",
  logo: "/img/directory/nz-composites.png",
  logoTheme: "paper"
 },
 {
  slug: "nz-marina-operators-association-inc",
  name: "NZ Marina Operators Association Inc",
  url: "http://www.nzmarinas.com",
  region: "Nationwide",
  cats: [
   43
  ],
  blurb: "The New Zealand Marina Operators Association Inc. (NZMOA) is the national trade association for the marina industry and its suppliers.",
  logo: "/img/directory/nz-marina-operators-association-inc.png",
  logoTheme: "paper"
 },
 {
  slug: "nz-marine-valuations-ltd",
  name: "NZ Marine Valuations 2025 Ltd",
  region: "Auckland",
  cats: [
   46
  ],
  blurb: "NZMV provide a complete Marine Valuation service, both nationwide and internationally. Our appraisals are accepted by major banks, financial institutions, insurance companies, and Government agencies.",
  logo: "/img/directory/nz-marine-valuations-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "oconnor-marine-electrical",
  name: "O'Connor Marine & Electrical",
  url: "http://www.oconnormarine.co.nz",
  region: "Auckland",
  cats: [
   16,
   28
  ],
  blurb: "We offer a professional, reliable service from major mechanical repairs, new engine installation or just some friendly helpful advice. Based in Auckland, we will work in all greater Auckland marinas and will consider jobs in other areas.",
  logo: "/img/directory/oconnor-marine-electrical.png",
  logoTheme: "paper"
 },
 {
  slug: "ocean-air-refrigeration-ltd",
  name: "Ocean Air Refrigeration Ltd",
  url: "http://www.oceanair.co.nz",
  cats: [
   19
  ],
  blurb: "You don’t want to be kept at port or have to come back to shore halfway through your well-earned break. But the good news is that if your cooling system requires a regular service or, worse still, your system has broken down, getting it…",
  logo: "/img/directory/ocean-air-refrigeration-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "ocean-media-pty-ltd",
  name: "Ocean Media Pty Ltd",
  url: "http://www.oceanmedia.com.au",
  region: "International",
  cats: [
   44
  ],
  blurb: "ESTABLISHED IN 2005 as a boutique publishing house, Ocean Media has grown into a contemporary, progressive company focused on bringing the highest-quality print and online journalism to the Australasian premium yachting industry.",
  logo: "/img/directory/ocean-media-pty-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "ocean-sports-marine",
  name: "Ocean Sports Marine Ltd",
  url: "http://www.oceansportsmarine.co.nz",
  region: "Bay of Plenty",
  cats: [
   4,
   30,
   38
  ],
  blurb: "We stock all your boating and marine essentials and accessories and have the most comprehensive local range of new and pre-owned power boats such as Yamaha, McClay Boats, YMF, Seaforce, Furuno, lowrance, Yamaha outboard motors and water…",
  logo: "/img/directory/ocean-sports-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "ocean-vault",
  name: "Ocean Vault",
  url: "http://www.oceanvault.co.nz",
  region: "Auckland",
  cats: [
   4
  ],
  blurb: "Ocean Vault is an NZ Marine member working in boat kept in the water.",
  logo: "/img/directory/ocean-vault.png",
  logoTheme: "paper"
 },
 {
  slug: "oceanbridge-shipping",
  name: "Oceanbridge Shipping Ltd",
  url: "http://www.oceanbridge.co.nz",
  region: "Auckland",
  cats: [
   47
  ],
  blurb: "Specialised shipping of boats, yachts and masts, freight and logistics services; imports and exports. A comprehensive service for all freighting requirements from shipping to road transport, stevedore services, customs formalities.",
  logo: "/img/directory/oceanbridge-shipping.png",
  logoTheme: "paper"
 },
 {
  slug: "oceania-global-products-group-ltd",
  name: "Oceania Global Products Group Ltd",
  url: "https://www.seajetpaintoceania.com",
  region: "Auckland",
  cats: [
   25
  ],
  blurb: "We are the exclusive distributors of SEAJET range of antifouling paint, primers and other products for Australia, New Zealand and the Oceania Islands.",
  logo: "/img/directory/oceania-global-products-group-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "oceania-marine-ltd",
  name: "Oceania Marine Refit Services Ltd",
  url: "http://www.oceaniamarine.co.nz",
  region: "Northland",
  cats: [
   4,
   6,
   10,
   11,
   12,
   9,
   20,
   22,
   21
  ],
  blurb: "Oceania Marine’s shipyards are located at the centre of Oceania in New Zealand and offer unmatched services for marine refit, repair and construction.",
  logo: "/img/directory/oceania-marine-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "oceania-medical-ltd",
  name: "Oceania Medical Ltd",
  url: "http://www.oceaniamedical.co.nz",
  region: "Auckland",
  cats: [
   35
  ],
  blurb: "Oceania Medical is New Zealand owned and operated provider of custom first aid kits & medical & safety supplies. Our clients include yachts & commercial ships, work sites, high risk industries, businesses & individuals.",
  logo: "/img/directory/oceania-medical-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "oceania-power-solutions-pty-ltd",
  name: "Oceania Power & Solutions Pty Ltd",
  url: "http://www.oceaniapower.com.au",
  region: "International",
  cats: [
   26
  ],
  blurb: "Oceania Power & Solutions (OPS) is a marine power company. An Australian base and executives with offices, workshops and people throughout the Oceania region - including in Perth, Brisbane and Singapore.",
  logo: "/img/directory/oceania-power-solutions-pty-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "oceania-yacht-agency",
  name: "Oceania Yacht Agency",
  url: "http://www.oceaniayachtagency.com",
  region: "Northland",
  cats: [
   41,
   45
  ],
  blurb: "Our experienced team offers comprehensive assistance to ensure your time in the Oceania region is a pleasurable one. All the usual superyacht agent services one would expect, as well as direct links to Oceania Marine Shipyards' refit…",
  logo: "/img/directory/oceania-yacht-agency.png",
  logoTheme: "paper"
 },
 {
  slug: "oceanway",
  name: "Oceanway",
  url: "http://www.oceanway.co",
  region: "Otago",
  cats: [
   41
  ],
  blurb: "Is a set of truly innovative apps intended for yachting companies that makes it easy for teams to plan, organise and collaborate. Access all your assets from one central digital workspace, store crucial yacht information, handle client…",
  logo: "/img/directory/oceanway.png",
  logoTheme: "paper"
 },
 {
  slug: "offshore-boats-nz-ltd",
  name: "Offshore Boats NZ Ltd",
  region: "Northland",
  cats: [],
  blurb: "High end 8mm alloy trailer boats NZ made. Exceptional ride, stable and dry, half the fun is getting there!! Here at Offshore Boats NZ, we are DRIVEN BY PERFORMANCE.",
  logo: "/img/directory/offshore-boats-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "offshore-crusing-tenders-octenders",
  name: "Offshore Cruising Tenders (OCTenders)",
  url: "http://www.octenders.com",
  region: "Northland",
  cats: [
   1
  ],
  blurb: "OCTenders is introducing its new model, the OC350 on the On The Water Boat Show after the success of its original size, the OC300. The OC350 is 3.5 metres by 1.6 metres wide and weighs only 55kgs! With increased volume and space, it is a…",
  logo: "/img/directory/offshore-crusing-tenders-octenders.png",
  logoTheme: "paper"
 },
 {
  slug: "on-board-marine-2019-ltd",
  name: "On Board Marine 2019 Ltd",
  region: "Marlborough",
  cats: [
   4,
   38
  ],
  blurb: "On Board Marine 2019 Ltd is an NZ Marine member working in boat kept in the water.",
  logo: "/img/directory/on-board-marine-2019-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "onehunga-electroplaters",
  name: "Onehunga Electroplaters",
  url: "http://www.bumper.co.nz",
  region: "Auckland",
  cats: [],
  blurb: "A division of Bumper Replacements NZ Ltd offer electropolishing, marine electroplating, stainless steel, chrome and metal polishing. Onehunga Electroplaters specialise in copper, nickel and chrome plating.",
  logo: "/img/directory/onehunga-electroplaters.png",
  logoTheme: "paper"
 },
 {
  slug: "onfire-design-ltd",
  name: "Onfire Design Ltd",
  url: "http://www.weareonfire.co.nz",
  region: "Auckland",
  cats: [
   40,
   44
  ],
  blurb: "OnfireDesign is a global award-winning branding and packaging design agency. From offices in Auckland and Sydney we partner with a broad range of businesses around the world and have particular expertise in marine and manufacturing…",
  logo: "/img/directory/onfire-design-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "open-ocean-marine-ltd",
  name: "Open Ocean Marine Ltd",
  url: "http://www.openoceanmarine.co.nz",
  region: "Northland",
  cats: [
   4,
   38
  ],
  blurb: "Open Ocean Marine is a specialist Marine Brokerage of both yachts and power boats, based in the marine hub of Whangarei. The company is led by Sam Cannell, driven by his lifelong passion for boating and his love of open ocean sailing.",
  logo: "/img/directory/open-ocean-marine-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "orakei-marine",
  name: "Orakei Marine",
  url: "http://www.orakeimarine.co.nz",
  region: "Auckland",
  cats: [
   4,
   9,
   38
  ],
  blurb: "Get the ultimate kiwi lifestyle with a quality new or preowned boat with complete after sales support and servicing you can trust.",
  logo: "/img/directory/orakei-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "orams-marine",
  name: "Orams Marine",
  url: "http://www.oramsmarine.co.nz",
  region: "Auckland",
  cats: [
   41,
   43
  ],
  blurb: "In 1987 Orams Marine brought the first superyacht into New Zealand for refit & maintenance which included full repaint, deckwork,interior alteration and comprehensive service.",
  logo: "/img/directory/orams-marine.png",
  logoTheme: "paper",
  curated: "orams-marine"
 },
 {
  slug: "maritimo-sales",
  name: "Orams Marine Sales Ltd",
  url: "http://www.orams.co.nz/riviera.html",
  region: "Auckland",
  cats: [
   4,
   38
  ],
  blurb: "Importer and retailer of fibreglass boats 9m to 15m, based on Beaumont Street in Westhaven.",
  logo: "/img/directory/maritimo-sales.png",
  logoTheme: "paper"
 },
 {
  slug: "osprey-boats",
  name: "Osprey Boats NZ Ltd",
  url: "http://www.osprey.co.nz",
  region: "Nelson",
  cats: [
   11,
   9
  ],
  blurb: "Firstly, we do have a history. And secondly, it's a history that we think lends itself to reassuring potential purchasers that they are about to make the right decision.",
  logo: "/img/directory/osprey-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "ovlov-marine",
  name: "Ovlov Marine Ltd",
  url: "http://www.ovlov.co.nz",
  region: "Auckland",
  cats: [
   26
  ],
  blurb: "Volvo Penta dealer - new and used engines. Spare parts and accessories, repairs and maintenance. Authorised Yamaha Dealer. New engines sales, Spare Parts, Service and installations. Mobile service vans.",
  logo: "/img/directory/ovlov-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "ownaship",
  name: "Ownaship Ltd",
  url: "http://www.ownaship.co.nz",
  region: "Auckland",
  cats: [
   5,
   4,
   38,
   50
  ],
  blurb: "Ownaship is New Zealand’s premier boat share management company. We manage New Zealand’s largest boat share fleet from our base in Westhaven Marina.",
  logo: "/img/directory/ownaship.png",
  logoTheme: "paper"
 },
 {
  slug: "pacific-aerials",
  name: "Pacific Aerials Ltd",
  url: "http://www.pacificaerials.com",
  region: "Auckland",
  cats: [
   28
  ],
  blurb: "Pacific Aerials is a family-owned and managed communication antenna designer and manufacturer, building a world-class range of marine antennas and accessories in New Zealand.",
  logo: "/img/directory/pacific-aerials.png",
  logoTheme: "paper",
  curated: "pacific-aerials"
 },
 {
  slug: "pacific-coast-marine-diesel",
  name: "Pacific Coast Marine & Diesel 2024 Ltd",
  url: "http://www.pcmarine.co.nz",
  region: "Waikato",
  cats: [
   13,
   26,
   31
  ],
  blurb: "Pacific Coast Marine & Diesel is located at 5 Moewai Road, Whitianga. Come see our friendly experienced team for all your marine parts and servicing needs in Whitianga and the Coromandel Peninsula.",
  logo: "/img/directory/pacific-coast-marine-diesel.png",
  logoTheme: "paper"
 },
 {
  slug: "pacific-sailing-ltd",
  name: "Pacific Sailing Ltd",
  url: "http://www.pacificsailingltd.co.nz",
  region: "Auckland",
  cats: [
   41,
   47
  ],
  blurb: "Began in 2005 to cater to the needs of owners of private vessels in & around Auckland. For the past 20 years we have managed & maintained a variety of luxury vessels, tailoring the level of service to whatever is required.",
  logo: "/img/directory/pacific-sailing-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "national-marine-new-zealand-ltd",
  name: "Pacific Yacht Co Ltd",
  url: "https://pacificyachtco.com",
  region: "Auckland",
  cats: [
   45
  ],
  blurb: "Quality New Zealand and Pacific marine and leisure products, complemented by trusted International brands. Welcome to Pacific Yacht Co - an online supplier of marine, boating and outdoor products.",
  logo: "/img/directory/national-marine-new-zealand-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "paeroa-marine-cycle-centre",
  name: "Paeroa Marine and Cycle Centre Ltd",
  region: "Waikato",
  cats: [
   1,
   34,
   35,
   30
  ],
  blurb: "We offer marine sales and service - fishing tackle and bait. We are agents for Yamaha, Ramco, Mac and Zenith."
 },
 {
  slug: "paint-smart-group-ltd",
  name: "Paint Smart Group Ltd",
  url: "https://paintsmart.co.nz",
  region: "Bay of Plenty",
  cats: [
   12
  ],
  blurb: "Paint Smart is proud to be the importer of Hempel products for New Zealand. We believe Hempel offers the most complete range of marine coatings and boat care products available.",
  logo: "/img/directory/paint-smart-group-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "pantaenius-australia-pty-ltd",
  name: "Pantaenius Australia Pty Ltd",
  url: "http://www.pantaenius.nz",
  region: "International",
  cats: [
   42
  ],
  blurb: "Pantaenius is recognised as the world's most experienced pleasure craft insurer, with over 110,000 boats insured worldwide. This level of experience and global reach likely translates into a deep understanding of the unique needs and…",
  logo: "/img/directory/pantaenius-australia-pty-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "penske-new-zealand",
  name: "Penske New Zealand",
  url: "http://www.penske.co.nz",
  region: "Auckland",
  cats: [
   13,
   26
  ],
  blurb: "Distributes Rolls-Royce Power Systems’ mtu brand of marine power solutions. From powering the strongest workboats, largest superyachts, hybrid ferries, durable defence vessels and the finest sport fishing boats; we have products and…",
  logo: "/img/directory/penske-new-zealand.png",
  logoTheme: "paper"
 },
 {
  slug: "pilot-bay-boat-builders-ltd",
  name: "Pilot Bay Boat Builders Ltd",
  url: "http://www.pilotbay.co.nz",
  region: "Bay of Plenty",
  cats: [
   9
  ],
  blurb: "Pilot Bay Boat Builders are based in Tauranga and have been providing their services to the public since 2010. We are a team of qualified boat builders who are making our mark in Tauranga and the Bay of Plenty.",
  logo: "/img/directory/pilot-bay-boat-builders-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "pine-harbour-boat-painters-2014-ltd",
  name: "Pine Harbour Boat Painters 2014 Ltd",
  url: "http://www.phbp.co.nz",
  region: "Auckland",
  cats: [
   12,
   25
  ],
  blurb: "Pine Harbour Boat Painters undercover paint shop can accommodate vessels up to 57 foot or 17.4 metres in length, this translates to 3 large motor yachts at one time with abundant room on the hard stand for work not needing the use of the…",
  logo: "/img/directory/pine-harbour-boat-painters-2014-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "port-denerau-marina-ltd",
  name: "Port Denarau Marina Ltd",
  url: "https://denaraumarina.com",
  cats: [
   43
  ],
  blurb: "Only 20 minutes drive from Nadi International Airport, Port Denarau Marina is Fiji’s premier marina facility. As the hub of the integrated Denarau Island Resort, Port Denarau Marina is the gateway to exploring the idyllic sun drenched…",
  logo: "/img/directory/port-denerau-marina-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "port-marlborough-nz-ltd",
  name: "Port Marlborough NZ Ltd",
  url: "http://www.marlboroughmarinas.co.nz",
  region: "Nelson",
  cats: [
   43
  ],
  blurb: "At the heart of Picton township, and deep within the Queen Charlotte Sound cruising grounds, everything's close at Picton Marina. Provisions, good restaurants, quality retail, foreshore markets, and local festivals combined with superb…",
  logo: "/img/directory/port-marlborough-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "port-nikau-joint-venture",
  name: "Port Nikau Joint Venture",
  url: "http://www.portnikau.co.nz",
  region: "Northland",
  cats: [
   43
  ],
  blurb: "Whangārei has a strong tradition of boat building, with a global reputation for vessel repairs and servicing built on an extensive range of marine businesses in the area.",
  logo: "/img/directory/port-nikau-joint-venture.png",
  logoTheme: "paper"
 },
 {
  slug: "power-equipment-yanmar-nz",
  name: "Power Equipment Ltd",
  url: "http://powerequipment.co.nz",
  region: "Auckland",
  cats: [
   13,
   14,
   18,
   26,
   31
  ],
  blurb: "As a leading marine and industrial power specialist here in New Zealand and throughout the Pacific, Power Equipment is the authorised NZ distributor for some of the world’s most reputable brands.",
  logo: "/img/directory/power-equipment-yanmar-nz.png",
  logoTheme: "paper"
 },
 {
  slug: "powerboat-centre",
  name: "Powerboat Centre Ltd",
  url: "http://www.powerboatcentre.co.nz",
  region: "Canterbury",
  cats: [
   34,
   35,
   30
  ],
  blurb: "Specialists in new and used trailerable powerboats. Agents for Haines Hunter, CSB Huntsman - fibreglass boats. McLay and Stabicraft - aluminium boats. Evinrude ETEC and Yamaha Outboard Motors, Yamaha Waverunner PWC.",
  logo: "/img/directory/powerboat-centre.png",
  logoTheme: "paper"
 },
 {
  slug: "predictwind-ltd",
  name: "Predictwind Ltd",
  url: "http://www.predictwind.com",
  region: "Auckland",
  cats: [
   16,
   28
  ],
  blurb: "It is our goal to give you the very best forecast data. The PWG & PWE forecast models are PredictWind models regularly perform better than the competition, showing wind weather updates every hour, with a wind speed and direction map for…",
  logo: "/img/directory/predictwind-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "proactive-marine-ltd",
  name: "Proactive Marine Ltd",
  url: "http://www.proactivemarine.co.nz",
  region: "Auckland",
  cats: [
   13
  ],
  blurb: "At Proactive Marine we understand that choosing the right marine engine service can be confusing. Doing the right things at the right time is important to avoid breakdowns, but it is difficult to track when these need to be done.",
  logo: "/img/directory/proactive-marine-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "profab-central-engineering",
  name: "Profab Central Engineering Ltd",
  url: "http://www.profabengineering.co.nz",
  region: "Manawatū-Whanganui",
  cats: [
   9
  ],
  blurb: "Profab Engineering have built a reputation for excellence in the design and manufacture of large custom made aluminium boats. Covering a range of boat types including luxury motor yachts, commercial and charter vessels, and fishing and…",
  logo: "/img/directory/profab-central-engineering.png",
  logoTheme: "paper"
 },
 {
  slug: "professional-skipper-vip-publications",
  name: "Professional Skipper / VIP Publications",
  url: "http://www.skipper.co.nz",
  region: "Auckland",
  cats: [
   44
  ],
  blurb: "VIP Publications is a publisher of marine trade professional magazines to the maritime industry. Relevant sites are and Contact: or",
  logo: "/img/directory/professional-skipper-vip-publications.png",
  logoTheme: "paper"
 },
 {
  slug: "profile-boats-2008-ltd",
  name: "Profile Boats 2008 Ltd",
  url: "http://profileboats.co.nz",
  region: "Hawke's Bay",
  cats: [],
  blurb: "Behind every Profile Boat is over 20 years of aluminium pontoon boat building experience and a burning desire to produce the highest quality boat of its type.",
  logo: "/img/directory/profile-boats-2008-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "propspeedoceanmax-international-ltd",
  name: "Propspeed International Ltd",
  url: "http://www.propspeed.com",
  region: "Auckland",
  cats: [
   12,
   25
  ],
  blurb: "At Propspeed, we’re dedicated to discovering and developing high performance products that make marine craft more efficient to run and economical to maintain.",
  logo: "/img/directory/propspeedoceanmax-international-ltd.png",
  logoTheme: "paper",
  curated: "propspeed"
 },
 {
  slug: "pure-design-engineering-ltd",
  name: "Pure Design & Engineering Ltd",
  url: "http://www.pde.co.nz",
  region: "Auckland",
  cats: [
   40
  ],
  blurb: "PURE Design & Engineering Limited is a New Zealand based engineering consultancy specialising in the design of advanced composite structures, with a focus on the marine industry.",
  logo: "/img/directory/pure-design-engineering-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "pyrotek-noise-control",
  name: "Pyrotek",
  url: "http://www.pyroteknc.com",
  region: "Auckland",
  cats: [
   28,
   30
  ],
  blurb: "Products are designed for extreme marine conditions. Aesthetic and environmental factors have been allowed for in the product construction, offering products that meet or exceed the requirements of Safety of Life at Sea (SOLAS) and the…",
  logo: "/img/directory/pyrotek-noise-control.png",
  logoTheme: "paper"
 },
 {
  slug: "q-marine-international-ltd",
  name: "Q-Marine International Ltd",
  url: "http://www.q-marine.co.nz",
  region: "Auckland",
  cats: [
   13,
   14
  ],
  blurb: "Are suppliers of highest quality, highly efficient marine propulsion products and solutions. As distributors for some of the worlds leading marine propulsion companies, Q-Marine can offer performance enhancing products and solutions for…",
  logo: "/img/directory/q-marine-international-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "q-west-boat-builders",
  name: "Q-West Boat Builders Limited",
  url: "http://www.q-west.com",
  region: "Manawatū-Whanganui",
  cats: [
   7,
   11,
   4,
   21
  ],
  blurb: "Q-West is an aluminium boat builder with experience in a diverse range of vessels and applications ranging from pleasure craft, catamarans, fishing and charter craft, pilot boats, monohulls, ferries, high speed foil assisted catamarans and…",
  logo: "/img/directory/q-west-boat-builders.png",
  logoTheme: "paper",
  curated: "q-west"
 },
 {
  slug: "quality-marine-clothing",
  name: "Quality Marine Clothing",
  url: "http://www.qualitymarineclothing.co.nz",
  region: "Auckland",
  cats: [
   35
  ],
  blurb: "QMC – the Australasian based shop for clothing & accessories for those with a passion for the water. We offer a personal service to reduce your hassles in pulling together “the look”.",
  logo: "/img/directory/quality-marine-clothing.png",
  logoTheme: "paper"
 },
 {
  slug: "robertson-marine-composites-ltd",
  name: "Quayside Boatyard",
  url: "http://www.quaysideboatyard.com",
  region: "Northland",
  cats: [
   4,
   12,
   9,
   43
  ],
  blurb: "Fourth generation boat builders situated on the picturesque grounds of the old Warkworth Cement Works and Mahurangi Marinas. Marina berths up to 16m and haul out capabilities up to 20 ton.",
  logo: "/img/directory/robertson-marine-composites-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "raeline-boats",
  name: "Raeline Boats",
  url: "http://www.raeline.com",
  region: "Canterbury",
  cats: [
   9
  ],
  blurb: "At Rae Line we are all about providing the lifestyle you want with your boat. Whether that means a day out on the water with the family doing all the fun-filled activities that make boating such a unique family experience, or heading out…",
  logo: "/img/directory/raeline-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "railblaza-ltd",
  name: "Railblaza Ltd",
  url: "http://www.railblaza.com",
  region: "Auckland",
  cats: [
   30
  ],
  blurb: "What sets RAILBLAZA apart from its competition is the simplicity of our StarPort TM mount, the ease with which people fit it, and the diverse range of situations it’s used in.",
  logo: "/img/directory/railblaza-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "ramco-boats-nz",
  name: "Ramco Boats NZ Ltd",
  url: "http://www.ramcoboats.co.nz",
  region: "Canterbury",
  cats: [
   9
  ],
  blurb: "Ramco Boats are an alloy production boat builder and custom builders of alloy boats and trailers. We also manufacture Kwikkraft Boats, which like the Ramco boats are designed by Scott Robson.",
  logo: "/img/directory/ramco-boats-nz.png",
  logoTheme: "paper"
 },
 {
  slug: "ray-bryant-marine",
  name: "Ray Bryant Marine",
  url: "http://www.mercuryoutboard.co.nz",
  region: "Auckland",
  cats: [
   26,
   31
  ],
  blurb: "Limited has a long history of delivering a comprehensive quality service. Our team of fully qualified boat dealers are available either onsite or at our fully equipped workshop and engineering facility.",
  logo: "/img/directory/ray-bryant-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "ray-white-marine-odyssey-marine-ltd",
  name: "Ray White Marine (Odyssey Marine Ltd)",
  url: "http://www.raywhitemarine.co.nz",
  region: "Auckland",
  cats: [
   4
  ],
  blurb: "Ray White Marine is the exclusive distributor for Ferretti, Pershing, Riva, Customline and Technohull vessels in Australia & New Zealand and also distributor of Itama and Mochi Craft.",
  logo: "/img/directory/ray-white-marine-odyssey-marine-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "rayglass-boats",
  name: "Rayglass Boats",
  url: "http://www.rayglass.co.nz",
  region: "Auckland",
  cats: [
   9,
   31,
   30
  ],
  blurb: "Design and manufacture high quality GRP power boats. Our range of Legend sport fishing/cabin style, and Protector rigid inflatable pontoon (RIB) work/leisure boats and tenders have won awards the world over.",
  logo: "/img/directory/rayglass-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "read-marine",
  name: "Read Marine Ltd",
  url: "http://www.readmarine.co.nz",
  region: "Otago",
  cats: [
   31,
   33,
   34,
   35,
   30
  ],
  blurb: "Marine retailer/trade supplier. Sales of yacht and powerboat fittings. New and used outboards and boats. Full service workshop facility.",
  logo: "/img/directory/read-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "reid-yacht-services",
  name: "Reid Yacht Services Ltd",
  region: "Auckland",
  cats: [
   39,
   41,
   45
  ],
  blurb: "Reid Yacht Services is a specialist yacht services company and superyacht agent based in Auckland New Zealand. Our team of five ex-yacht crew have a friendly and professional approach to looking after our clients while here in NZ,…",
  logo: "/img/directory/reid-yacht-services.png",
  logoTheme: "paper"
 },
 {
  slug: "resene-automotive-light-industrial-ltd",
  name: "Resene Automotive & Light Industrial Ltd",
  url: "http://www.reseneauto.co.nz",
  cats: [
   12,
   23,
   25
  ],
  blurb: "Resene Automotive & Light Industrial Ltd is an NZ Marine member working in painting and antifouling.",
  logo: "/img/directory/resene-automotive-light-industrial-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "riverside-boat-worx",
  name: "Riverside Boat Worx",
  url: "http://www.riversideboatworx.co.nz",
  region: "Northland",
  cats: [
   43
  ],
  blurb: "Has an international reputation for quality and care in boat building. We specialise in refits, conversion projects, yacht joinery, repairs and insurance work on vessels constructed in timber and composites.",
  logo: "/img/directory/riverside-boat-worx.png",
  logoTheme: "paper"
 },
 {
  slug: "riverside-drive-marina-ltd",
  name: "Riverside Drive Marina Ltd",
  url: "http://www.riversidedrivemarina.com",
  region: "Northland",
  cats: [
   22
  ],
  blurb: "Riverside Drive Marina is a hardstand, haul out, complete working marina nestled in the sheltered waters of the Hatea River just minutes from downtown Whangarei. Riverside Drive Marina has been operating the since 1976.",
  logo: "/img/directory/riverside-drive-marina-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "robertson-boats",
  name: "Robertson Boats Ltd",
  url: "http://robertsonboats.com",
  region: "Auckland",
  cats: [
   4,
   9
  ],
  blurb: "Custom boatbuilders in mediums of composites, timber and alloy. Service boatyard for repairs, maintenance and refits. Engineering and Electrical; Repaints and refurbishment; Interior and joinery fit outs; Stainless steel and alloy 80 tonne…",
  logo: "/img/directory/robertson-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "northl-boating-centre-2010",
  name: "Rodney Marine",
  url: "http://rodneymarine.co.nz",
  region: "Northland",
  cats: [
   31,
   34,
   30
  ],
  blurb: "Is one of New Zealand's most reputable dealers. With a large selection of Yamaha products and accessories in stock we can cater to all of your Yamaha needs.",
  logo: "/img/directory/northl-boating-centre-2010.png",
  logoTheme: "paper"
 },
 {
  slug: "roger-hill-yacht-design",
  name: "Roger Hill Yacht Design Ltd",
  url: "http://www.powercatsnz.com",
  region: "Auckland",
  cats: [
   40
  ],
  blurb: "Yacht design, power and sail, catamaran and mono, private and commercial. Roger Hill Yacht Design is a well established and thoroughly professional design company.",
  logo: "/img/directory/roger-hill-yacht-design.png",
  logoTheme: "paper"
 },
 {
  slug: "rogers-boat-shop",
  name: "Rogers Boatshop",
  region: "Auckland",
  cats: [
   31,
   33,
   34,
   35,
   30
  ],
  blurb: "Rogers Boat Shop celebrates 38 years of sucessfully satisfying the needs of their clients. It is a success firmly based on providing the best brands available, getting close to their customers to find out what they want, and then bring the…",
  logo: "/img/directory/rogers-boat-shop.png",
  logoTheme: "paper"
 },
 {
  slug: "rollos-marine",
  name: "Rollo's Marine",
  url: "http://www.rollosmarine.co.nz",
  region: "Waikato",
  cats: [
   32,
   31,
   33,
   34,
   35,
   30
  ],
  blurb: "Rollo’s Marine are a Yamaha Platinum dealer. We specialise in the sales and servicing of Yamaha outboard motors, new Haines Hunter, Fi-Glass, Stabicraft, SmartWave, Senator boats, and Yamaha WaveRunners.",
  logo: "/img/directory/rollos-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "rooster-services-ltd",
  name: "Rooster Services Ltd",
  url: "http://www.roosterrecruitment.com",
  cats: [
   39
  ],
  blurb: "We’re a superyacht recruitment agency for the modern day. Our ethos is around new age recruitment, with age old values. To us, that means embracing new technology and change, but being grounded in good old fashioned people skills and…",
  logo: "/img/directory/rooster-services-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "ropetek-ltd",
  name: "Ropetek Ltd",
  url: "http://www.ropetek.co.nz",
  region: "Tasman",
  cats: [
   15
  ],
  blurb: "Ropetek Ltd is an NZ Marine member working in spars, rigging and sail.",
  logo: "/img/directory/ropetek-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "royal-institution-of-naval-architects-nz-division",
  name: "Royal Institution of Naval Architects NZ Division",
  url: "http://www.rina.org.nz",
  region: "Auckland",
  cats: [
   8,
   40
  ],
  blurb: "The Royal Institution of Naval Architects (RINA), is an internationally renowned professional institution whose members are involved at all levels in the design, construction, maintenance and operation of marine vessels and structures.",
  logo: "/img/directory/royal-institution-of-naval-architects-nz-division.png",
  logoTheme: "paper"
 },
 {
  slug: "rsm-prince",
  name: "RSM New Zealand",
  url: "http://www.rsmnz.co.nz",
  region: "Auckland",
  cats: [
   42
  ],
  blurb: "As well as what you would expect from your accountant, we also provide specialist services in Audit, Tax and Business Consultancy to clients across a diversity of industry sectors.",
  logo: "/img/directory/rsm-prince.png",
  logoTheme: "paper"
 },
 {
  slug: "rubbermark-industries",
  name: "Rubbermark Industries Ltd",
  url: "http://www.rubbermark.co.nz",
  region: "Auckland",
  cats: [
   25,
   32,
   30
  ],
  blurb: "Rubbermark ® is a privately owned company established in 1990. Its origins trace back to the 1940’s when Reidrubber’s General Products Division started manufacturing in Penrose, Auckland, New Zealand.",
  logo: "/img/directory/rubbermark-industries.png",
  logoTheme: "paper"
 },
 {
  slug: "safety-at-sea",
  name: "Safety at Sea",
  url: "http://www.safetyatsea.co.nz",
  region: "Auckland",
  cats: [
   35
  ],
  blurb: "For nearly 30 years Safety at Sea has specialised in offering the world's leading marine safety products and aviation survival equipment.",
  logo: "/img/directory/safety-at-sea.png",
  logoTheme: "paper"
 },
 {
  slug: "sail-iq-ltd",
  name: "Sail IQ Ltd",
  url: "http://www.sailiq.co.nz",
  region: "Auckland",
  cats: [
   15,
   41
  ],
  blurb: "Sail IQ Ltd is an NZ Marine member working in spars, rigging and sail.",
  logo: "/img/directory/sail-iq-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "sail-worldcom",
  name: "Sail-World.com",
  url: "http://www.sail-world.com/NZ",
  region: "Auckland",
  cats: [
   44
  ],
  blurb: "Is the largest online marine news network in NZ & the World with up to 1.7 Million page views/month. Our globally located editors publish local and international news on the Sail-World.com regional sites in NZ, AUS, USA, UK, Europe, Canada…",
  logo: "/img/directory/sail-worldcom.png",
  logoTheme: "paper"
 },
 {
  slug: "core-builders-composites",
  name: "SailGP Technologies",
  url: "http://www.sailgptechnologies.com",
  region: "Auckland",
  cats: [
   9
  ],
  blurb: "Manufacturer of racing yachts and other composite products. Five axis CNC machine shop, machining metal and composite materials.",
  logo: "/img/directory/core-builders-composites.png",
  logoTheme: "paper"
 },
 {
  slug: "nordic-marketing",
  name: "Sailutions Ltd",
  url: "http://www.sailutions.co.nz",
  region: "Auckland",
  cats: [
   30
  ],
  blurb: "Sailutions has been a supplier of yachting equipment and marine hardware for the New Zealand market since 1990. Representing major European brands such as Seldén Mast, Furlex and Rutgerson makes Sailutions a one stop shop for your sail…",
  logo: "/img/directory/nordic-marketing.png",
  logoTheme: "paper"
 },
 {
  slug: "salthouse-boatbuilders-ltd",
  name: "Salthouse Boatbuilders Ltd",
  url: "http://www.salthouseboats.com",
  region: "Auckland",
  cats: [
   4,
   9
  ],
  blurb: "Builders of quality custom high speed tenders and coach boats",
  logo: "/img/directory/salthouse-boatbuilders-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "taylor-made-systemssandbrooks-ltd",
  name: "Sandbrooks Ltd",
  url: "https://www.sandbrooks.co.nz",
  region: "Auckland",
  cats: [
   28
  ],
  blurb: "Welcome to Sandbrooks - our entrepreneurial spirit, high standards of excellence, and dedication to customer service have firmly established us as the world's largest manufacturer of marine glazing systems and the leader in framed glass…",
  logo: "/img/directory/taylor-made-systemssandbrooks-ltd.png",
  logoTheme: "ink"
 },
 {
  slug: "scandanavian-marine-supplies-ltd",
  name: "Scandanavian Marine Supplies Ltd",
  cats: [
   15,
   28
  ],
  blurb: "Scandanavian Marine Supplies Ltd is an NZ Marine member working in spars, rigging and sail.",
  logo: "/img/directory/scandanavian-marine-supplies-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "sce-stone-design",
  name: "SCE Stone & Design Ltd",
  url: "http://www.scestoneanddesign.co.nz",
  region: "Auckland",
  cats: [
   28
  ],
  blurb: "SCE Stone & Design offers turn-key solutions; we focus on work fixed to the ground, floating in the water or flying in the air - super yachts, exclusive residential fit-outs and commercial projects of all sizes",
  logo: "/img/directory/sce-stone-design.png",
  logoTheme: "paper",
  curated: "sce-stone"
 },
 {
  slug: "scott-lane-boatbuilders",
  name: "Scott Lane Boatbuilders Ltd",
  url: "http://www.scottlaneboatbuilders.co.nz",
  region: "Auckland",
  cats: [
   4,
   9
  ],
  blurb: "Scott Lane Boatbuilders was established in 1999 and specalise in the production of custom launches. We work very closely with owners and designers to ensure that finished results exceed all expectations.",
  logo: "/img/directory/scott-lane-boatbuilders.png",
  logoTheme: "paper"
 },
 {
  slug: "sea-marine",
  name: "Sea Marine",
  url: "http://www.seamarine.co.nz",
  region: "Bay of Plenty",
  cats: [],
  blurb: "Stuart & Alice and team can help with your boating and equipment needs. We are agents for FC Boats and nifty inflatable boats. We carry the Mercury and Honda Brands and are service agents for Mercury and Honda Engines.",
  logo: "/img/directory/sea-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "sea-turner-ltd",
  name: "Sea Turner Ltd",
  url: "http://www.seaturner.com",
  region: "Auckland",
  cats: [
   35,
   30
  ],
  blurb: "Sea Turner is a revolutionary way to load and store dinghies on boats and vehicles. With a push of a button, your dinghy is lifted and loaded or deployed in less than a minute.",
  logo: "/img/directory/sea-turner-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "workboats-international",
  name: "SeaBoats NZ Ltd",
  url: "http://www.seaboats.net",
  region: "Canterbury",
  cats: [
   7,
   4,
   38
  ],
  blurb: "SeaBoats are International Ship Brokers and Yacht Brokers, marketing and selling a wide range of boats and ships, recreational and commercial, new and used, to a broad global audience.",
  logo: "/img/directory/workboats-international.png",
  logoTheme: "paper"
 },
 {
  slug: "seafarer-marine-engineering",
  name: "Seafarer Marine Engineering Ltd",
  url: "http://seafarermarineengineering.co.nz",
  region: "Marlborough",
  cats: [
   26,
   31
  ],
  blurb: "A wide range of marine and automotive work including engine installations, engine and gearbox overhauls. Machining and welding jobs including tig, mig and arc welding. Commercial and pleasure craft.",
  logo: "/img/directory/seafarer-marine-engineering.png",
  logoTheme: "paper"
 },
 {
  slug: "seaforce-marine",
  name: "Seaforce Marine",
  url: "http://www.seaforce.co.nz",
  region: "Waikato",
  cats: [
   9
  ],
  blurb: "Manufacturer of quality trailer boats between 2.4m and 7m metres in fibreglass. Full turn key service available."
 },
 {
  slug: "sealegs-international-ltd",
  name: "Sealegs International Ltd",
  url: "http://www.sealegs.com",
  region: "Auckland",
  cats: [
   9
  ],
  blurb: "Sealegs amphibious boats were conceived as a solution to a problem. The problem: All the hassle and time involved in launching and retrieving a boat from a beach-front property or boat ramp.",
  logo: "/img/directory/sealegs-international-ltd.png",
  logoTheme: "paper",
  curated: "sealegs"
 },
 {
  slug: "sealink-travel-group-nz-ltd",
  name: "Sealink Travel Group NZ Ltd",
  url: "http://www.sealink.co.nz",
  region: "Auckland",
  cats: [],
  blurb: "",
  logo: "/img/directory/sealink-travel-group-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "seapower-2006-ltd-2",
  name: "Seapower 2006 Ltd",
  region: "Northland",
  cats: [
   13
  ],
  blurb: "Seapower are Opua’s dedicated marine engineering, service and repair specialists . Our experienced marine engineers and technicians offer a full range of marine services to boat owners from all over New Zealand and overseas.",
  logo: "/img/directory/seapower-2006-ltd-2.png",
  logoTheme: "paper"
 },
 {
  slug: "marine-engineering",
  name: "Seatech Marine Ltd",
  url: "http://www.seatechmarine.co.nz",
  region: "Marlborough",
  cats: [
   26,
   31,
   30
  ],
  blurb: "In Waikawa Marina near Picton offers full engine maintenance services, engine installations, light engineering and fabrication services. We are also dealers in Volvo and Mercury engines.",
  logo: "/img/directory/marine-engineering.png",
  logoTheme: "paper"
 },
 {
  slug: "senator-boats",
  name: "Senator Boats",
  url: "http://www.senatorboats.com",
  region: "Hawke's Bay",
  cats: [],
  blurb: "Proven and trusted by boaties throughout New Zealand, Senator Boats are valued for their stability, superior load carrying and storage capability and affordability.",
  logo: "/img/directory/senator-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "serco-new-zealand-training-ltd",
  name: "Serco New Zealand Training Ltd",
  url: "http://www.serco/com/aspac",
  cats: [
   41
  ],
  blurb: "Serco New Zealand Training Ltd is an NZ Marine member working in project management.",
  logo: "/img/directory/serco-new-zealand-training-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "shaw-diesels",
  name: "Shaw Diesels LTD",
  url: "https://shawdiesels.co.nz",
  region: "Auckland",
  cats: [
   26
  ],
  blurb: "Based on Auckland's North Shore, Shaw Diesels Limited has 30 years experience as a quality provider and engineer of diesel engines. The company holds service contracts nationwide and as far afield as the Pacific Islands.",
  logo: "/img/directory/shaw-diesels.png",
  logoTheme: "paper"
 },
 {
  slug: "shipco-360",
  name: "Shipco 360",
  url: "http://www.shipco360.com",
  region: "Northland",
  cats: [
   10,
   11,
   9,
   22,
   41,
   43
  ],
  blurb: "Specialises in the construction of new vessels, towing winches and robust deck equipment for the workboat sector. Shipco 360 also conducts refit, repair or vessel conversions for a wide range of vessel types within its well-equipped…",
  logo: "/img/directory/shipco-360.png",
  logoTheme: "paper"
 },
 {
  slug: "short-marine-ltd",
  name: "Short Marine Ltd",
  url: "http://www.shortmarine.com",
  region: "Auckland",
  cats: [
   4
  ],
  blurb: "New Zealand's official agents for Grady-White, Viking Yachts, Valhalla Boatworks, and Capelli Ribs. We offer new sales, brokerage, and aftersales service for these world-renowned sports fishing brands.",
  logo: "/img/directory/short-marine-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "skipper-training-nz-ltd",
  name: "Skipper Training NZ Ltd",
  url: "http://www.skippertraining.nz",
  region: "Nelson",
  cats: [],
  blurb: "Through years of teaching for different maritime training providers, we identified a need for practical, hands-on training options. In our experience, most other skipper training courses put needless pressure on students, and…",
  logo: "/img/directory/skipper-training-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "skipperi",
  name: "Skipperi",
  url: "https://www.skipperi.nz",
  cats: [
   5
  ],
  blurb: "Plan your dream day out on the water and reserve your boat of choice through the app. When your boating day comes you only need to pack your snacks, everything else is already onboard. Go to the harbour, take the boat and enjoy the waters.",
  logo: "/img/directory/skipperi.png",
  logoTheme: "paper"
 },
 {
  slug: "smart-marine",
  name: "Smart  Marine",
  url: "http://www.smartmarine.co.nz",
  region: "Auckland",
  cats: [
   33,
   34,
   35,
   36,
   30
  ],
  blurb: "Marine chandlery stores located in Glenfield, Manukau, Mt Wellington, Manukau, Tauranga and Hamilton. Retailer and wholesaler, import and export, of over 17,000 product lines.",
  logo: "/img/directory/smart-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "smuggler-marine",
  name: "Smuggler Marine Ltd",
  url: "http://www.smuggler.co.nz",
  region: "Auckland",
  cats: [
   9
  ],
  blurb: "At Smuggler Marine we build Smuggler family cruisers and Smuggler Strata RIBs. Our Strata RIB range caters for many different clientele, with a full range from 4.5m to 11m.",
  logo: "/img/directory/smuggler-marine.png",
  logoTheme: "paper",
  curated: "smuggler-marine"
 },
 {
  slug: "so-pac-marine-sopac",
  name: "So Pac Marine Ltd",
  url: "http://www.sopac.co.nz",
  region: "Auckland",
  cats: [
   1,
   13,
   14,
   16,
   17,
   19,
   25,
   26,
   28,
   33,
   35,
   36,
   30
  ],
  blurb: "So-Pac Marine manufactures and distributes marine equipment for pleasure and commercial craft. Our plastic access hatches are widely used in NZ, Australia and USA; 4000 series hatches are CE approved.",
  logo: "/img/directory/so-pac-marine-sopac.png",
  logoTheme: "paper"
 },
 {
  slug: "solid-composites-ltd",
  name: "Solid Composites Ltd",
  url: "http://solidcomposites.com",
  region: "Auckland",
  cats: [
   9
  ],
  blurb: "We are dedicated composite craftsmen. It’s our mission to provide premium marine, aerospace, automobile and consumer products to the world.",
  logo: "/img/directory/solid-composites-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "sounds-marine-services-ltd",
  name: "Sounds Marine Services Ltd",
  url: "http://www.soundsmarine.co.nz",
  region: "Marlborough",
  cats: [
   12,
   9,
   30
  ],
  blurb: "Sounds Marine is a boat refit and maintenance facility located in Waikawa Marina, Picton. We pride ourselves on our high quality workmanship and attention to detail and communication with clients throughout projects.",
  logo: "/img/directory/sounds-marine-services-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "south-pacific-boat-sales",
  name: "South Pacific Boat Sales",
  url: "http://www.spboatsales.co.nz",
  cats: [
   4,
   38
  ],
  blurb: "With over 45 years’ experience in sales and marketing, South Pacific Boat Sales owners Ron and Tracye Mossman offer you personalised, professional service.",
  logo: "/img/directory/south-pacific-boat-sales.png",
  logoTheme: "paper"
 },
 {
  slug: "south-pacific-diesel-systems",
  name: "South Pacific Diesel Systems Ltd",
  url: "http://www.dieselenginz.com",
  region: "Wellington",
  cats: [
   13,
   26
  ],
  blurb: "South Pacific Diesel Systems Limited is the New Zealand and Pacific Island Distributor of SCANIA Industrial and Marine Diesel Engines.",
  logo: "/img/directory/south-pacific-diesel-systems.png",
  logoTheme: "paper"
 },
 {
  slug: "south-pacific-marine-services-ltd",
  name: "South Pacific Marine Services Ltd",
  url: "http://www.spmarine.co.nz",
  region: "Auckland",
  cats: [
   13,
   14
  ],
  blurb: "South Pacific Marine Services was formed in early 2017, as I saw a real need for more choice in the industry, providing a better quality of service, a friendlier and more transparent work ethic, and more competitive rates.",
  logo: "/img/directory/south-pacific-marine-services-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "southern-boats-ltd",
  name: "Southern Boats Ltd",
  url: "http://www.southernboats.co.nz",
  region: "Southland",
  cats: [
   9
  ],
  blurb: "Southern Boats, based in Mosgiel, Dunedin pride themselves on presenting you with some of the finest handcrafted alloy boats available today.",
  logo: "/img/directory/southern-boats-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "southern-pacific-inflatables",
  name: "Southern Pacific Inflatables",
  url: "http://www.southernpacific.co.nz",
  region: "Auckland",
  cats: [
   9
  ],
  blurb: "Southern Pacific has been building premium quality inflatable boats for almost 20 years. We are proud to be a New Zealand based manufacturer, recognised internationally for outstanding design and workmanship.",
  logo: "/img/directory/southern-pacific-inflatables.png",
  logoTheme: "paper"
 },
 {
  slug: "southern-spars",
  name: "Southern Spars",
  url: "http://www.southernspars.com",
  region: "Auckland",
  cats: [
   15,
   27
  ],
  blurb: "Is the industry leader in the design, construction, installation and servicing of carbon fibre masts, booms and rigging for high performance racing and cruising yachts.",
  logo: "/img/directory/southern-spars.png",
  logoTheme: "paper",
  curated: "southern-spars"
 },
 {
  slug: "sports-marine",
  name: "Sports Marine Ltd",
  url: "http://www.sportsmarine.co.nz",
  region: "Auckland",
  cats: [
   31,
   33,
   34,
   35,
   30
  ],
  blurb: "Sports Marine has been in the marine industry since 1978 operating three dealerships in New Zealand and Australia. With over 100 years combined experience and over 4000 boats sold we are dedicated to bringing you great deals and quality…",
  logo: "/img/directory/sports-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "squirter-jet-ltd-t-a-scott-waterjet",
  name: "Squirter Jet Ltd - t/a Scott Waterjet",
  url: "https://www.scottwaterjet.com",
  region: "Bay of Plenty",
  cats: [
   14
  ],
  blurb: "Squirter Jet Ltd - t/a Scott Waterjet is an NZ Marine member working in transmission, propulsion and thrusters."
 },
 {
  slug: "stabicraft-marine",
  name: "Stabicraft Marine Ltd",
  url: "http://www.stabicraft.com",
  region: "Southland",
  cats: [
   9
  ],
  blurb: "Serious - Stabicraft has been designing & building positive buoyancy boats for many years. Stabicraft boats are built to last far beyond whatever you are likely to ask of them.",
  logo: "/img/directory/stabicraft-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "stanaway-marine-services-ltd",
  name: "Stanaway Marine Services Ltd",
  url: "http://www.mooringsandmarine.co.nz",
  region: "Auckland",
  cats: [
   11,
   43
  ],
  blurb: "If it’s on the water Moorings and Marine can build it, fix it or find it. With a long history in the maritime industry, services range from mooring systems and inspections through to supporting any maritime activity; providing an…",
  logo: "/img/directory/stanaway-marine-services-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "stark-bros",
  name: "Stark Bros Ltd",
  url: "http://www.starkbros.co.nz",
  region: "Canterbury",
  cats: [
   7,
   11,
   4,
   13,
   17,
   22,
   21
  ],
  blurb: "The ONE STOP SHOP for all Commercial Vessels. Dry dock, slipways and berthage available, all adjacent to our specialist facilities. Hull / Deck / Accommodation / Engine Repairs, Maintenance, Survey, Refit and Conversion projects undertaken…",
  logo: "/img/directory/stark-bros.png",
  logoTheme: "paper"
 },
 {
  slug: "steve-gooding-marine-ltd",
  name: "Steve Gooding Marine Ltd",
  url: "http://www.goodingmarine.co.nz",
  region: "Southland",
  cats: [
   26,
   31,
   30
  ],
  blurb: "Steve Gooding Marine Ltd is an NZ Marine member working in engines and engines parts.",
  logo: "/img/directory/steve-gooding-marine-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "stf-group-ltd-2",
  name: "STF Ltd",
  url: "http://www.stfgroup.co.nz",
  region: "Auckland",
  cats: [
   43
  ],
  blurb: "STF Limited (STF) is a specialist projects provider to both central and local government departments. Over the past twenty years we have developed a business that specialises in Marine Infrastructure Design, Construction, Maintenance, and…",
  logo: "/img/directory/stf-group-ltd-2.png",
  logoTheme: "paper"
 },
 {
  slug: "stihl-shop-marine-richmond",
  name: "Stihl Shop Marine Richmond",
  url: "http://www.stihlshoprichmond.co.nz",
  region: "Nelson",
  cats: [
   13,
   26,
   31
  ],
  blurb: "STIHL SHOP Richmond, in their first year of operation were acknowledged nationally as the Most Improved STIHL Franchise. Part of this success is contributed to the dedication of STIHL SHOP Richmonds team to their customers and providing…",
  logo: "/img/directory/stihl-shop-marine-richmond.png",
  logoTheme: "paper"
 },
 {
  slug: "striker-engineering-marine",
  name: "Striker Engineering & Marine",
  url: "http://www.strikermarine.co.nz",
  region: "Bay of Plenty",
  cats: [],
  blurb: "At Striker, we pride ourselves on the highest quality of workmanship and finishing. All types of engineering work are undertaken here with the emphasis on delivering quality finished products."
 },
 {
  slug: "stryda-marine-ltd",
  name: "Stryda Marine Ltd",
  url: "http://strydamarine.com",
  region: "Auckland",
  cats: [
   9
  ],
  blurb: "Stryda Marine Ltd is an NZ Marine member working in pleasure boat builders.",
  logo: "/img/directory/stryda-marine-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "super-sail-marine-shield",
  name: "Super Sail Marine Shield Ltd",
  url: "http://www.marineshield.co.nz",
  region: "Taranaki",
  cats: [
   12,
   29
  ],
  blurb: "Super Sail Marine Shield is a unique product specifically developed for the harsh New Zealand maritime environment to give ultimate UV and extreme weather protection to yacht sails and all New Zealand flexible materials.",
  logo: "/img/directory/super-sail-marine-shield.png",
  logoTheme: "paper"
 },
 {
  slug: "superior-boats",
  name: "Superior Boats Ltd",
  url: "http://www.superiorboats.co.nz",
  region: "Auckland",
  cats: [
   9
  ],
  blurb: "Superior Boats is our boat manufacturing division that evolved from our South Auckland Boat Repairs operation. Our stylish Superior 1050 is now available in two models – the Sport Sedan and the Flybridge.",
  logo: "/img/directory/superior-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "superthriller-jet-sprint-ltd",
  name: "Superthriller Jet Sprint Ltd",
  url: "http://www.superthriller.co.nz",
  region: "Auckland",
  cats: [
   9
  ],
  blurb: "SuperThriller Jetsprint is a world first – a truly unique experience putting you in the driving seat of a 100hp jet boat. Set the water on fire as you and a navigator of your choice take on the clock to sprint around a course set out in a…",
  logo: "/img/directory/superthriller-jet-sprint-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "superyacht-coatings",
  name: "Superyacht Coatings International Ltd",
  url: "http://www.superyachtcoatings.com",
  region: "Bay of Plenty",
  cats: [
   12
  ],
  blurb: "New Zealand is an island nation located in the South Pacific. Surrounded by ocean, our history and who we are has been shaped by this environment. Our Marine Industry is world class and we are extremely proud to be part of it.",
  logo: "/img/directory/superyacht-coatings.png",
  logoTheme: "paper"
 },
 {
  slug: "surtees-boats-2005",
  name: "Surtees Boats 2005 Ltd",
  url: "http://www.surteesboats.com",
  region: "Bay of Plenty",
  cats: [
   9
  ],
  blurb: "Surtees Boats are New Zealand’s top selling plate aluminium boat, manufacturing 23 models ranging in size from 4.95m to 8.5m. Surtees are safe, stable and strong with a high quality finish.",
  logo: "/img/directory/surtees-boats-2005.png",
  logoTheme: "paper"
 },
 {
  slug: "suzuki-new-zealand",
  name: "Suzuki New Zealand",
  url: "http://www.suzuki.co.nz",
  region: "Manawatū-Whanganui",
  cats: [
   26,
   31
  ],
  blurb: "Suzuki New Zealand is an NZ Marine member working in engines and engines parts.",
  logo: "/img/directory/suzuki-new-zealand.png",
  logoTheme: "paper"
 },
 {
  slug: "swell-marine-the-chandlery",
  name: "Swell Marine & The Chandlery",
  url: "http://www.swellmarine.co.nz",
  region: "Northland",
  cats: [
   30
  ],
  blurb: "With over 20 years in the marine service industry we have the skills and knowledge to offer you the utmost in customer satisfaction for sales and installations of marine electronics.",
  logo: "/img/directory/swell-marine-the-chandlery.png",
  logoTheme: "paper"
 },
 {
  slug: "takacat-com",
  name: "Takacat NZ",
  url: "http://www.takacat.co.nz",
  region: "Auckland",
  cats: [
   1
  ],
  blurb: "Takacat is a young and innovative New Zealand based company located in the ‘City of Sails’, Auckland, New Zealand. Since 2007 the company has been committed to bringing to the New Zealand and international markets a new and exciting range…",
  logo: "/img/directory/takacat-com.png",
  logoTheme: "paper"
 },
 {
  slug: "tamaki-marine-park-ltd",
  name: "Tamaki Marine Park Ltd",
  url: "http://www.tamakimarinepark.co.nz",
  region: "Auckland",
  cats: [
   22,
   43
  ],
  blurb: "Welcome to Tamaki Marine Park, an exciting marine precinct located on the historic Tamaki estuary in Auckland. We offer a variety of services for the boating enthusiast including a drystack facility, marina complex, hardstand, and haulout…",
  logo: "/img/directory/tamaki-marine-park-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "tangaroa-marine-fabrication-ltd",
  name: "Tangaroa Marine Fabrication Ltd",
  url: "http://www.tangaroa.co.nz",
  region: "Northland",
  cats: [
   11
  ],
  blurb: "Our reputation precedes us with businesses coming to us because they know we consistently deliver customised products on time with quality workmanship.",
  logo: "/img/directory/tangaroa-marine-fabrication-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "taupo-power-sports",
  name: "Taupo Power Sports",
  url: "https://www.taupopowersports.co.nz",
  region: "Waikato",
  cats: [
   3
  ],
  blurb: "Taupo Power Sports is an NZ Marine member working in personal watercraft."
 },
 {
  slug: "tauranga-bridge-marina",
  name: "Tauranga Bridge Marina",
  url: "http://www.marina.co.nz",
  region: "Bay of Plenty",
  cats: [
   43
  ],
  blurb: "Is a modern facility consisting of 500 fully serviced marina berths. 24hr on site security, toilets, showers, laundry, rubbish disposal, fresh water and power for every berth, hardstand/travelift, chandlery, restaurant, boat brokerage.",
  logo: "/img/directory/tauranga-bridge-marina.png",
  logoTheme: "paper"
 },
 {
  slug: "tcc-boats",
  name: "TCC Boats",
  url: "http://www.tccboats.com",
  region: "Marlborough",
  cats: [
   7,
   11,
   4,
   9
  ],
  blurb: "Since 2012, TCC Ltd has operated from its marine facility at Port Picton, located beneath Kaipupu Point. TCC Boats, a division of TCC Ltd, has established a strong reputation for quality marine engineering, vessel construction, and…",
  logo: "/img/directory/tcc-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "transdiesel",
  name: "TDX Ltd - TransDiesel",
  url: "http://www.transdiesel.com",
  region: "Auckland",
  cats: [
   13,
   26
  ],
  blurb: "TDX is one of the foremost marine supply companies in New Zealand being involved in the marine industry for over 28 years. TDX represents leading engine brands such as Lombardini Marine, Perkins Marine & VM Motori and is also the New…",
  logo: "/img/directory/transdiesel.png",
  logoTheme: "paper"
 },
 {
  slug: "technical-equipment-supplies",
  name: "Technical Equipment Supplies Ltd",
  url: "http://www.technicalequipment.co.nz",
  region: "Auckland",
  cats: [
   28,
   30
  ],
  blurb: "Specialising in quality hardware and technical expertise, Technical Equipment Supplies has been supplying to the boat building, joinery, cabinet making and marine industries for over 20 years.",
  logo: "/img/directory/technical-equipment-supplies.png",
  logoTheme: "paper"
 },
 {
  slug: "tectrax-ltd",
  name: "Tectrax Ltd",
  region: "Bay of Plenty",
  cats: [
   16
  ],
  blurb: "Tectrax is making waves as the world’s most advanced electric amphibious solution. Our patented system is available on a number of the industry’s most trusted performance hulls, so only Tectrax gives you the freedom to enjoy electric…",
  logo: "/img/directory/tectrax-ltd.png",
  logoTheme: "paper",
  curated: "tectrax"
 },
 {
  slug: "teknicraft-design",
  name: "Teknicraft Design",
  url: "http://www.teknicraft.com",
  region: "Auckland",
  cats: [
   40
  ],
  blurb: "Powerboat design, catamaran and hydrofoil supported catamaran design for commercial, paramilitary and recreational applications. Teknicraft offer a comprehensive marine architectural service to clients worldwide.",
  logo: "/img/directory/teknicraft-design.png",
  logoTheme: "paper"
 },
 {
  slug: "telfer-marine",
  name: "Telfer Marine",
  url: "http://www.telfermarine.co.nz",
  region: "Bay of Plenty",
  cats: [],
  blurb: "Located in the heart of Rotorua, New Zealand's most picturesque tourist mecca, we have a highly trained team of professionals ready to talk about your every boating need.",
  logo: "/img/directory/telfer-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "gough-gough-hamer",
  name: "Terra Cat Power Systems",
  url: "http://www.terracat.co.nz",
  region: "Auckland",
  cats: [
   26
  ],
  blurb: "Is the exclusive Caterpillar Dealer for New Zealand. We offer the Caterpillar marine product line comprising propulsion engines form 64 to 9,770mhp, auxiliary engines from 224 to 5,420bkW, and generator sets from 11 to 5,200ekW.",
  logo: "/img/directory/gough-gough-hamer.png",
  logoTheme: "paper"
 },
 {
  slug: "the-boat-cover-company",
  name: "The Boat Cover Company",
  url: "http://www.boatcoverco.co.nz",
  region: "Auckland",
  cats: [
   20,
   30
  ],
  blurb: "Designer, manufacturer and retailer of marine products including canopies, boat seats, boat covers, upholstery and leatherwork.",
  logo: "/img/directory/the-boat-cover-company.png",
  logoTheme: "paper"
 },
 {
  slug: "the-boat-place-tauranga",
  name: "The Boat Place Tauranga",
  url: "http://www.theboatplace.co.nz",
  region: "Bay of Plenty",
  cats: [
   13
  ],
  blurb: "Here at The Boat Place in Tauranga, we see many boats that have suffered from motor failure due to simple issues that would have been identified at a regular safety appraisal or boat service had the boat owner organised one.",
  logo: "/img/directory/the-boat-place-tauranga.png",
  logoTheme: "paper"
 },
 {
  slug: "the-engine-room",
  name: "The Engine Room Ltd",
  region: "Auckland",
  cats: [
   13,
   26
  ],
  blurb: "Importers of Marine diesel engines - repairs and parts. Outboard retailers - repairs and parts. Importers/exporters of marine fittings. Agents for Suzuki.",
  logo: "/img/directory/the-engine-room.png",
  logoTheme: "paper"
 },
 {
  slug: "the-international-seakeepers-society",
  name: "The International SeaKeepers Society",
  url: "http://www.seakeepers.org",
  cats: [],
  blurb: "Promotes oceanographic research, conservation, and education through direct involvement with the yachting community. Providing educational resources and hands-on marine science experiences to students is the primary focus for ensuring the…",
  logo: "/img/directory/the-international-seakeepers-society.png",
  logoTheme: "paper"
 },
 {
  slug: "the-marina-brokerage",
  name: "The Marina Brokerage",
  url: "http://www.marinabrokerage.co.nz",
  region: "Auckland",
  cats: [
   0,
   4,
   38
  ],
  blurb: "Is the exclusive NZ distributor for Axopar, BRABUS Marine, Greenline Yachts, Pardo Yachts, RAND Boats and Sirena Yachts, through our partnership with eyachts Australia.",
  logo: "/img/directory/the-marina-brokerage.png",
  logoTheme: "paper"
 },
 {
  slug: "the-marina-shop-ltd",
  name: "The Marina Shop Ltd",
  url: "http://www.themarinashop.com",
  region: "Northland",
  cats: [
   42
  ],
  blurb: "The Marina Shop’s primary business is marine insurance. We understand the needs of cruisers and skippers. We offer Blue Water (2 person), Coastal, Public Liability Insurance (“3 rd Party”) and Travel Medical Insurance. Quotes are free.",
  logo: "/img/directory/the-marina-shop-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "the-moorings",
  name: "The Moorings",
  url: "http://www.sunsail.co.nz",
  region: "Auckland",
  cats: [
   50,
   51,
   54
  ],
  blurb: "& Sunsail have over 20 top-rated sailing destinations spanning across the globe. In addition, we own and run the Sunsail & Moorings base in Vava’u.",
  logo: "/img/directory/the-moorings.png",
  logoTheme: "paper"
 },
 {
  slug: "the-nautical-group",
  name: "The Nautical Group",
  url: "http://www.thenauticalgroup.co.nz",
  region: "Bay of Plenty",
  cats: [
   4
  ],
  blurb: "At Nautical Yacht Group, we offer a list of services designed to make the superyacht acquisition and ownership journey seamless, informed, and enjoyable."
 },
 {
  slug: "the-produce-company-ltd",
  name: "The Produce Company Ltd",
  url: "https://www.produce.co.nz/Services/Yacht-Provisions",
  region: "Auckland",
  cats: [
   45
  ],
  blurb: "Our dedicated team are on standby for any support you request and will endeavour to fulfil all your food and beverage supply requirements.",
  logo: "/img/directory/the-produce-company-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "multihull-solutions-nz",
  name: "The Yacht Sales Co",
  url: "http://www.yachtsalesco.com",
  region: "Auckland",
  cats: [
   4
  ],
  blurb: "The Yacht Sales Co is an NZ Marine member working in boat kept in the water.",
  logo: "/img/directory/multihull-solutions-nz.png",
  logoTheme: "paper"
 },
 {
  slug: "thompson-marine",
  name: "Thompson Marine",
  region: "Bay of Plenty",
  cats: [
   33,
   34,
   35,
   30
  ],
  blurb: "Ltd was established in 1990 as a division of Thompson Lawnmowers & Chainsaws operating from Rotorua (New Zealand). On the 1st September 2010 Thompson Marine Ltd formed its own entity and moved its premises to 31 Fairy Springs Rd, Rotorua.",
  logo: "/img/directory/thompson-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "tidal-yachting-ltd",
  name: "Tidal Yachting Ltd",
  url: "http://www.tidalyachting.com",
  region: "Bay of Plenty",
  cats: [
   39,
   45
  ],
  blurb: "Superyacht agent Tidal Yachting has unparalleled commitment to the satisfaction of our yachts and yacht crew alike. We hope to provide all our customers with the highest standard of service impetus for us to grow into the business we…",
  logo: "/img/directory/tidal-yachting-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "marine-auto-timaru",
  name: "Timaru Marine Ltd",
  url: "http://www.timarumarine.co.nz",
  region: "Canterbury",
  cats: [
   26,
   31
  ],
  blurb: "Located in Parkside, Timaru, and easily accessible to surrounding suburbs of Fairview, Temuka, Albury and Waimate, Marine and Auto is the only local dealership that sells the number one range of Evinrude E-TEC outboards.",
  logo: "/img/directory/marine-auto-timaru.png",
  logoTheme: "paper"
 },
 {
  slug: "titan-marine-engineering",
  name: "Titan Marine Engineering Ltd",
  url: "http://www.titanmarine.co.nz",
  region: "Auckland",
  cats: [
   11,
   13,
   17,
   22,
   21,
   43
  ],
  blurb: "Titan Marine Engineering offer services including 1500 tonne haul-out facilities, heavy machining, overhauls and refits, and general engineering.",
  logo: "/img/directory/titan-marine-engineering.png",
  logoTheme: "paper"
 },
 {
  slug: "tnl-pindar-ltd",
  name: "TNL Pindar Ltd",
  url: "http://www.tnlpindar.com",
  region: "Auckland",
  cats: [
   47
  ],
  blurb: "Represented in New Zealand by TNL Pindar, Pindar, is the go-to provider of integrated specialist services for the marine leisure sector, including yacht & boat transportation, superyacht services, air, sea and road freight, yacht spares…",
  logo: "/img/directory/tnl-pindar-ltd.png",
  logoTheme: "paper",
  curated: "tnl-pindar"
 },
 {
  slug: "tohatsu-outboards-nz-ltd",
  name: "Tohatsu Outboards NZ Ltd",
  url: "http://www.tohatsu.co.nz",
  region: "Wellington",
  cats: [
   26,
   31
  ],
  blurb: "Tohatsu Outboards NZ Ltd is an NZ Marine member working in engines and engines parts.",
  logo: "/img/directory/tohatsu-outboards-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "top-of-the-south-marine-coatings-ltd",
  name: "Top of the South Marine",
  url: "http://www.totsmarinecoatings.co.nz",
  region: "Marlborough",
  cats: [
   7,
   4,
   12
  ],
  blurb: "If you’re in need of a reliable Boatbuilder, contact the team from Tots Marine. Our boatbuilding facility, comprises of a heated 890m2 building allowing all year round maintenance and repaints.",
  logo: "/img/directory/top-of-the-south-marine-coatings-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "topargee-rv-caravan-marine-accessories",
  name: "Topargee RV Caravan & Marine Accessories",
  url: "http://www.topargee.com.au",
  region: "International",
  cats: [
   36,
   30
  ],
  blurb: "Topargee RV Caravan & Marine Accessories is an NZ Marine member working in interior accessories.",
  logo: "/img/directory/topargee-rv-caravan-marine-accessories.png",
  logoTheme: "paper"
 },
 {
  slug: "total-trim-canvas-upholstery",
  name: "Total Trim Canvas and Upholstery Ltd",
  url: "http://www.totaltrim.co.nz",
  region: "Auckland",
  cats: [
   20,
   30
  ],
  blurb: "Total Trim Canvas & Upholstery specialises in all aspects of commercial and marine upholstery and covers, from concept to completion.",
  logo: "/img/directory/total-trim-canvas-upholstery.png",
  logoTheme: "paper"
 },
 {
  slug: "total-yacht-care-ltd",
  name: "Total Yacht Care Ltd",
  url: "http://www.yachtcare.co.nz",
  region: "Northland",
  cats: [
   4,
   22
  ],
  blurb: "Established itself in Opua in 2012 and has been happily servicing the Bay of Islands boating community since. We offer professional caretaking, cleaning, valet and detailing of Yachts and Launches in the Bay of Islands and Opua.",
  logo: "/img/directory/total-yacht-care-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "trailer-services",
  name: "Trailer Services Ltd",
  region: "Canterbury",
  cats: [
   32
  ],
  blurb: "Trailer Services Ltd is an NZ Marine member working in trailers and trailer parts."
 },
 {
  slug: "training-4-safety-ltd",
  name: "Training 4 Safety Ltd",
  url: "http://www.training4safety.co.nz",
  region: "Auckland",
  cats: [],
  blurb: "Training 4 Safety has a vision to deliver and share safety training so we can educate and empower everyone to always be safe at home, work, and play.",
  logo: "/img/directory/training-4-safety-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "trans-marine-pro-2015-ltd",
  name: "Trans Marine Pro (2015) Ltd",
  url: "http://www.transmarinepro.co.nz",
  region: "Northland",
  cats: [
   16,
   28,
   30
  ],
  blurb: "Get more power and better efficiency from your clean, green, renewable energy systems with Trans Marine. With top quality renewable energy equipment available to buy online, expert advice and professional installation.",
  logo: "/img/directory/trans-marine-pro-2015-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "transformarine-ltd",
  name: "Transformarine Ltd",
  url: "http://www.transformarine.com",
  region: "Auckland",
  cats: [
   40
  ],
  blurb: "We offer naval architecture and design services, with our core business creating developable plate aluminium structures. Our commercial marine design background ensures that our designs are well thought-out, structurally sound and will…",
  logo: "/img/directory/transformarine-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "tristram-marine",
  name: "Tristram Marine Ltd",
  url: "http://www.tristramboats.co.nz",
  region: "Waikato",
  cats: [
   9,
   31,
   33,
   34,
   35,
   30
  ],
  blurb: "Boat manufacturing, retail boat sales, Yamaha outboard sales and servicing, Boat accessories. From your first encounter through the doors at Tristram Marine, to the day you launch your brand new boat, you will be impressed, not only with…",
  logo: "/img/directory/tristram-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "tru-design-plasitcs",
  name: "Tru Design Plastics Ltd",
  url: "http://www.trudesignplastics.com",
  region: "Auckland",
  cats: [
   28
  ],
  blurb: "Tru-Design specialises in the design, manufacture and marketing of high quality marine valves, skin fittings, hose nozzles and associated products.",
  logo: "/img/directory/tru-design-plasitcs.png",
  logoTheme: "paper",
  curated: "tru-design"
 },
 {
  slug: "ts-marine-services-ltd",
  name: "TS Marine Services Ltd",
  url: "http://www.tsmarine.co.nz",
  region: "Wellington",
  cats: [
   14,
   13
  ],
  blurb: "We offer a unique mobile marine mechanical service. TS Marine has been in Wellington since 2013 and has developed a reputation for being able to do what others can’t.",
  logo: "/img/directory/ts-marine-services-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "twin-coast-marine",
  name: "Twin Coast Marine",
  url: "http://www.twincoastmarine.co.nz",
  region: "Northland",
  cats: [
   31,
   28,
   30
  ],
  blurb: "Is a specialist marine centre based in Waipapa (Kerikeri), in the picturesque Far North of New Zealand. Established in early 2022 as a fresh branch of Kiwi Yachting , it joins a proud family of brands led by Richard and Isabel Macalister,…",
  logo: "/img/directory/twin-coast-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "twin-disc-new-zealand-ltd",
  name: "Twin Disc New Zealand Ltd",
  url: "http://www.twindisc.com.au",
  cats: [
   14,
   26
  ],
  blurb: "For over 50 years, Twin Disc Pacific has led the way in marine and heavy-duty off-highway power transmission solutions, including Veth Propulsion.",
  logo: "/img/directory/twin-disc-new-zealand-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "ultralon",
  name: "U-Dek by Ultralon",
  url: "http://www.udek.com",
  region: "Auckland",
  cats: [
   25,
   28
  ],
  blurb: "U-DEK marine decking offers a stylish, high-performance solution for all types of marine craft, from yachts & trailer boats to RIBs and personal watercraft.",
  logo: "/img/directory/ultralon.png",
  logoTheme: "paper",
  curated: "ultralon"
 },
 {
  slug: "uk-sailmakers",
  name: "UK Sailmakers",
  url: "http://www.uksailmakers.com",
  region: "Northland",
  cats: [
   15
  ],
  blurb: "UK Sailmakers is an NZ Marine member working in spars, rigging and sail.",
  logo: "/img/directory/uk-sailmakers.png",
  logoTheme: "paper"
 },
 {
  slug: "ultimate-anodise-ltd",
  name: "Ultimate Anodise Ltd",
  url: "http://www.ultimate-anodise.co.nz",
  cats: [
   23
  ],
  blurb: "Ultimate Anodise started in 2009 with a promise to serve the marine industry with the best high-quality anodizing, provide the utmost customer service and offer the ultimate value-added anodic coating to customer’s projects.",
  logo: "/img/directory/ultimate-anodise-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "urban-sea-ltd",
  name: "Urban Sea Ltd",
  url: "http://www.urbansea.co.nz",
  cats: [
   45
  ],
  blurb: "After a long period working in the marine industry overseas, returning to Whangarei Karma Butler and Kate Frazerhurst noticed that there was a distinct gap in the market for a business offering support to the increasing number of vessels…",
  logo: "/img/directory/urban-sea-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "valvoline-new-zealand",
  name: "Valvoline New Zealand",
  url: "http://www.valvoline.co.nz",
  region: "Auckland",
  cats: [],
  blurb: "Valvoline offer a comprehensive range of high-quality marine lubricants that help protect engines, equipment and the environment as well as enhance efficiency.",
  logo: "/img/directory/valvoline-new-zealand.png",
  logoTheme: "paper"
 },
 {
  slug: "vesconite-bearings-nz-ltd",
  name: "Vesconite Bearings NZ Ltd",
  url: "http://www.vesconite.com",
  region: "Auckland",
  cats: [
   26,
   30
  ],
  blurb: "Vesconite and Vesconite Hilube are ideal for the submerged and corrosive conditions of the marine industry. Suited to both dry and underwater applications, Vesconite’s internal lubricants allow for prolonged life where the setting is…",
  logo: "/img/directory/vesconite-bearings-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "vessel-management-services",
  name: "Vessel Management Services Ltd",
  url: "http://www.vms.co.nz",
  region: "Auckland",
  cats: [
   41
  ],
  blurb: "Our focus at VMS is to provide a professional one stop maintenance shop for potential boat owners. VMS has recently launched a new service, Mobile Fuel Cleaning into New Zealand.",
  logo: "/img/directory/vessel-management-services.png",
  logoTheme: "paper"
 },
 {
  slug: "vessel-works",
  name: "Vessel Works",
  url: "http://www.vesselworks.co.nz",
  region: "Bay of Plenty",
  cats: [
   22,
   43
  ],
  blurb: "’ sole purpose is to support the thriving marine industry in Tauranga, New Zealand. Our open yard offers modern facilities, unlimited access to world-class contractors, and complete flexibility for both commercial and private clients.",
  logo: "/img/directory/vessel-works.png",
  logoTheme: "paper"
 },
 {
  slug: "vessev-ltd",
  name: "Vessev Ltd",
  url: "http://www.vessev.com",
  region: "Auckland",
  cats: [
   4
  ],
  blurb: "Vessev creates marine technology to propel a more liveable world – hydrofoiling electric vessels that are quiet, smooth, business smart, and planet smarter. We’re not simply making electric boats, we’re making better boats."
 },
 {
  slug: "vetus-maxwell-apac",
  name: "VETUS-Maxwell APAC Limited",
  url: "http://www.vetus-maxwell.com",
  region: "Auckland",
  cats: [
   28,
   30
  ],
  blurb: "Vetus-Maxwell APAC Ltd is supplier and manufacturer of quality marine equipment, engines, windlasses, winches, hatches, general deck hardware, bow thrusters, water, fuel and waste systems",
  logo: "/img/directory/vetus-maxwell-apac.png",
  logoTheme: "paper"
 },
 {
  slug: "viaduct-harbour",
  name: "Viaduct Harbour Ltd",
  url: "http://www.viaduct.co.nz",
  region: "Auckland",
  cats: [
   43
  ],
  blurb: "In the heart of Auckland City on the Central Business District's waterfront, Viaduct Harbour provides premium marina facilities at a world class address.",
  logo: "/img/directory/viaduct-harbour.png",
  logoTheme: "paper"
 },
 {
  slug: "viking-maritime-recruitment-nz-ltd",
  name: "Viking Crew",
  url: "http://www.vikingcrew.com",
  region: "Auckland",
  cats: [
   39,
   45
  ],
  blurb: "We have been supplying Officers & Crew of all ranks and positions to Ship owners, Managers and Captains worldwide, since 1988. With some of the most prestigious names in the business using our services, we have exceptional experience and…",
  logo: "/img/directory/viking-maritime-recruitment-nz-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "vining-marine-and-vintage-works-nelson",
  name: "Vining Marine and Vintage Works Nelson",
  url: "http://www.viningmarine.co.nz",
  region: "Tasman",
  cats: [
   4
  ],
  blurb: "Vining Marine and Vintage Works Nelson is an NZ Marine member working in boat kept in the water.",
  logo: "/img/directory/vining-marine-and-vintage-works-nelson.png",
  logoTheme: "paper"
 },
 {
  slug: "events-clothing-company",
  name: "VMG Clothing Ltd",
  url: "http://www.vmgclothing.com",
  region: "Auckland",
  cats: [
   35
  ],
  blurb: "At VMG we’ve experienced the best and the worst of Mother Nature and we know exactly how crucial wearing the right gear is for a high-performance crew.",
  logo: "/img/directory/events-clothing-company.png",
  logoTheme: "paper",
  curated: "vmg-clothing"
 },
 {
  slug: "volpower-nz",
  name: "Volpower NZ Ltd",
  url: "http://www.volpower.co.nz",
  region: "Auckland",
  cats: [
   26,
   31
  ],
  blurb: "NZ’s only authorised importer of Volvo Penta marine products with over 30 dealers nationwide. Stockists of a large range of engines, stern drives, salidrives and IPS systems. Find your closet dealer via our website.",
  logo: "/img/directory/volpower-nz.png",
  logoTheme: "paper"
 },
 {
  slug: "voodoo-yachts-ltd",
  name: "Voodoo Yachts Ltd",
  region: "Bay of Plenty",
  cats: [
   4,
   9
  ],
  blurb: "Voodoo Yachts Ltd is an NZ Marine member working in boat kept in the water."
 },
 {
  slug: "vortex-marine",
  name: "Vortex Marine",
  url: "http://www.vortexmarine.com",
  region: "Auckland",
  cats: [
   16,
   30
  ],
  blurb: "Introducing Scout: the world’s most advanced rugged marine companion. Combining satellite charting, predictive weather and live vessel data in one seamless experience.",
  logo: "/img/directory/vortex-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "voyager-trailers",
  name: "Voyager Trailers",
  url: "http://www.voyagertrailers.co.nz",
  region: "Waikato",
  cats: [
   32
  ],
  blurb: "Voyager Boat Trailers have been manufactured in New Zealand for over 20 years, which means our trailers are built using experience and knowledge to achieve the best boat trailer design.",
  logo: "/img/directory/voyager-trailers.png",
  logoTheme: "paper"
 },
 {
  slug: "wairau-paint-centre",
  name: "Wairau Paint Centre",
  url: "http://www.wpcpaints.co.nz",
  region: "Auckland",
  cats: [
   25
  ],
  blurb: "Is an Automotive, Marine, Industrial and Wood finish paint supplier based on Auckland's North Shore. At Wairau Paints we pride ourselves on supplying high performance coatings and technical expertise for every application.",
  logo: "/img/directory/wairau-paint-centre.png",
  logoTheme: "paper"
 },
 {
  slug: "warren-hay-marine-ltd",
  name: "Warren Hay Marine Ltd",
  url: "http://www.warrenhaymarine.net.nz",
  region: "Northland",
  cats: [
   31,
   33,
   34,
   35,
   30
  ],
  blurb: "Warren Hay Marine is all about customer service! We make customer dealings a pleasure, from buying new boats, used boats and outboard motors to servicing them.",
  logo: "/img/directory/warren-hay-marine-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "warwick-yacht-design",
  name: "Warwick Yacht Design Ltd",
  url: "http://www.warwickyachts.com",
  region: "Auckland",
  cats: [
   40
  ],
  blurb: "Warwick Yacht Design offers a total design service, from initial concept to total project coordination and is one of New Zealand`s highest profile designers on the international scene.",
  logo: "/img/directory/warwick-yacht-design.png",
  logoTheme: "paper"
 },
 {
  slug: "lowe-yachts-ltd",
  name: "Wayfinder Yachts Ltd",
  url: "http://www.wayfinderyachts.com",
  cats: [
   4,
   38
  ],
  blurb: "Wayfinder Yachts Ltd is an NZ Marine member working in boat kept in the water.",
  logo: "/img/directory/lowe-yachts-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "waypoint-electronics-ltd",
  name: "Waypoint Electronics Ltd",
  url: "http://www.waypointelectronics.co.nz",
  region: "Northland",
  cats: [
   16
  ],
  blurb: "Waypoint Electronics supplies the right products, based on what you need. Giving you peace of mind on your investment in marine electronics for your vessel - whether it be commercial fishing or shipping, charter or recreational! We supply…",
  logo: "/img/directory/waypoint-electronics-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "we-find-your-boat-ltd",
  name: "We Find Your Boat Ltd",
  url: "http://www.boatseekr.com",
  cats: [
   4
  ],
  blurb: "Boatseekr is an advanced boat sales platform with thousands of boats for sale and advanced image search capability to make finding you next boat easy.",
  logo: "/img/directory/we-find-your-boat-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "weber-marine",
  name: "Weber Marine",
  url: "http://www.webermarine.co.nz",
  region: "Auckland",
  cats: [
   9,
   41
  ],
  blurb: "Our team of friendly, trade qualified craftsmen bring together a comprehensive range of refit, repair and boatbuilding skills which enables us to deliver successful refit packages on budget and to pre-determined completion dates.",
  logo: "/img/directory/weber-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "wedding-paine-marine",
  name: "Wedding & Paine Marine",
  url: "http://www.weddingandpainemarine.com",
  cats: [
   46
  ],
  blurb: "Was founded by two Class 1 Commercial Marine Engineers who've spent their careers working at the sharp end of the maritime industry. That background means we bring genuine engineering insight to every survey — not just a checklist."
 },
 {
  slug: "west-auckland-upholstery-covers-ltd",
  name: "West Auckland Upholstery & Covers Ltd",
  url: "http://www.westaucklandupholstery.co.nz",
  region: "Auckland",
  cats: [
   20
  ],
  blurb: "We specialize in the design and manufacture of custom fit covers for interior and exterior covers. We cover everything from; Boat covers, Clears, Upholstery, Carpets, linings, Fenders, Interior and exterior squads, Cushions, Bimini, and…",
  logo: "/img/directory/west-auckland-upholstery-covers-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "westhaven-marina",
  name: "Westhaven Marina",
  url: "http://www.westhaven.co.nz",
  region: "Auckland",
  cats: [
   43
  ],
  blurb: "One of the largest marinas in the Southern Hemisphere, is located in downtown Auckland, New Zealand. We have world class facilities and welcome all vessels.",
  logo: "/img/directory/westhaven-marina.png",
  logoTheme: "paper"
 },
 {
  slug: "whanganui-boating-centre",
  name: "Whanganui Boating Centre",
  url: "http://www.boatingcentre.co.nz",
  region: "Manawatū-Whanganui",
  cats: [
   13,
   26,
   27,
   29,
   31,
   33,
   35,
   30
  ],
  blurb: "A full one-stop shop for all your boating needs servicing most makes and models of inboards, outboards, jet boats and electrical! Our team has extensive knowledge and diagnostic capabilities and we are certified installers of the best…",
  logo: "/img/directory/whanganui-boating-centre.png",
  logoTheme: "paper"
 },
 {
  slug: "whangarei-harbour-marina",
  name: "Whangarei Harbour Marina",
  url: "http://www.whangareimarina.com",
  region: "Northland",
  cats: [
   43
  ],
  blurb: "Berth your boat in Whangarei Harbour's unique marina right in the centre of town. Hop off the boat and get a great cup of coffee or cool beer at one of the quayside restaurants and cafes.",
  logo: "/img/directory/whangarei-harbour-marina.png",
  logoTheme: "paper"
 },
 {
  slug: "whangarei-marine-services",
  name: "Whangarei Marine Services",
  url: "https://whangareimarineservices.co.nz",
  region: "Northland",
  cats: [
   13
  ],
  blurb: "Offers a comprehensive marine engineering service, including sales, installation, general maintenance and repair work. Formerly known as Ray Roberts Marine, Northland’s marine engine specialists.",
  logo: "/img/directory/whangarei-marine-services.png",
  logoTheme: "paper"
 },
 {
  slug: "white-pointer-boats",
  name: "White Pointer Boats Ltd",
  url: "http://www.whitepointerboats.co.nz",
  region: "Bay of Plenty",
  cats: [
   9
  ],
  blurb: "White Pointer Boats is a well established, award winning, manufacturer of high quality designed aluminium trailer craft. Alloy boats are customised to meet the requirements of fishermen both inshore and blue water big game fishing.",
  logo: "/img/directory/white-pointer-boats.png",
  logoTheme: "paper"
 },
 {
  slug: "whitehaven-motor-yachts",
  name: "Whitehaven Motor Yachts",
  url: "http://www.whitehavenmotoryachts.com.au",
  region: "International",
  cats: [
   4
  ],
  blurb: "At Whitehaven Motor Yachts, we redefine luxury boating by crafting bespoke motor yachts that blend timeless elegance with cutting-edge innovation.",
  logo: "/img/directory/whitehaven-motor-yachts.png",
  logoTheme: "paper"
 },
 {
  slug: "wholesale-marine-direct",
  name: "Wholesale Marine Direct / Salt-Away",
  url: "http://salt-away.co.nz",
  cats: [
   25
  ],
  blurb: "We wholesale and retail salt removing products and fuel additives. Now supplying NZ and Australia.",
  logo: "/img/directory/wholesale-marine-direct.png",
  logoTheme: "paper"
 },
 {
  slug: "wild-chix-ltd",
  name: "Wild Chix Ltd",
  url: "https://www.wildchix.co.nz",
  region: "Bay of Plenty",
  cats: [],
  blurb: "Join the Wild Chix community where women empower women in the great outdoors. Whether you're a complete beginner or looking to advance your skills, we've created a judgment-free space where you can learn to master boating, hunt, fish, and…",
  logo: "/img/directory/wild-chix-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "wilde-media-ltd",
  name: "Wilde Media Ltd",
  url: "http://www.wildemedia.co.nz",
  region: "Auckland",
  cats: [
   44
  ],
  blurb: "Zoe Hawkins of Wilde Media is a highly experienced writer and communications strategist in the marine and marinas industry. Her skill lies in turning complex topics into simple and convincing messages.",
  logo: "/img/directory/wilde-media-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "windcraft-new-zealand-ltd",
  name: "Windcraft New Zealand Ltd",
  url: "http://www.windcraft.co.nz",
  region: "Auckland",
  cats: [
   4,
   38
  ],
  blurb: "Windcraft is the exclusive importer of a wide range of stunning yachts. We give you exceptional choice across the whole yachting spectrum whether it’s a versatile Hanse, a racy Dehler, a luxuriously comfortable Moody, a Sealine or Fjord…",
  logo: "/img/directory/windcraft-new-zealand-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "wireless-nation-ltd",
  name: "Wireless Nation Ltd",
  url: "http://www.wirelessnation.co.nz",
  region: "Auckland",
  cats: [],
  blurb: "Wireless Nation is an innovative ISP that provides fast broadband anywhere you want it - from Gore to Cape Reinga, and of course out at sea – we reach the hard-to-reach places.",
  logo: "/img/directory/wireless-nation-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "woodbine-marine",
  name: "Woodbine Marine Ltd",
  url: "http://www.woodbinemarine.co.nz",
  region: "Auckland",
  cats: [
   26,
   31,
   33,
   34,
   35,
   30
  ],
  blurb: "Situated on the ‘marine strip’ at 245 Ti Rakau Drive, we are one of Auckland’s largest boating and marine dealerships, with capacity for over 100 boats and personal watercraft.",
  logo: "/img/directory/woodbine-marine.png",
  logoTheme: "paper"
 },
 {
  slug: "world-power",
  name: "World Power Ltd",
  url: "http://www.worldpower.co.nz",
  region: "Auckland",
  cats: [
   26
  ],
  blurb: "Electrical services company designed to provide complete electrical and electronic solutions for yachts. Services extend from concept and design, material supply through to complete installation with project management.",
  logo: "/img/directory/world-power.png",
  logoTheme: "paper"
 },
 {
  slug: "wright-technologies",
  name: "Wright Technologies Ltd",
  url: "http://www.wrights.co.nz",
  region: "Wellington",
  cats: [
   16,
   28
  ],
  blurb: "Through three branches, Wright Technologies provides NZ nationwide maritime navigation, electronics solutions and service support for Autronica, Bloctube, B & G, Consilium Marine, Cassens & Plath, DenHaan, Francis, Hondex, Jotron,…",
  logo: "/img/directory/wright-technologies.png",
  logoTheme: "paper"
 },
 {
  slug: "x-yachts-new-zealand-ltd",
  name: "X-Yachts New Zealand Ltd",
  url: "http://www.x-yachts.co.nz",
  cats: [
   4
  ],
  blurb: "X-Yachts New Zealand Ltd is an NZ Marine member working in boat kept in the water.",
  logo: "/img/directory/x-yachts-new-zealand-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "xpo-exhibitions-ltd",
  name: "XPO Exhibitions",
  url: "http://www.xpo.co.nz",
  region: "Auckland",
  cats: [],
  blurb: "Ltd (XPO) owns and organises a portfolio of 19 shows including some of New Zealand’s largest and longest-running ‘business-to-business’ trade show exhibitions and events.",
  logo: "/img/directory/xpo-exhibitions-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "yachtfinders-global-ltd",
  name: "Yachtfinders Global Ltd",
  url: "http://www.yachtfindersglobal.com",
  region: "Auckland",
  cats: [
   4
  ],
  blurb: "Yachtfinders Global has a dedicated team of boating specialists, competent with all the intricacies of buying new and used boats. We’ve been doing this for over 26 years, and often see what people think they want isn’t always what they…",
  logo: "/img/directory/yachtfinders-global-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "yachting-developments",
  name: "Yachting Developments Ltd",
  url: "http://www.yachtingdevelopments.co.nz",
  region: "Auckland",
  cats: [
   10,
   9
  ],
  blurb: "World class builders of advanced composite yachts, award winning Yachting Developments have taken a background in building racing yachts and successfully combined this to construct yachts of superior innovation and performance.",
  logo: "/img/directory/yachting-developments.png",
  logoTheme: "paper"
 },
 {
  slug: "yachting-new-zealand",
  name: "Yachting New Zealand",
  url: "http://www.yachtingnz.org.nz",
  region: "Auckland",
  cats: [
   51,
   54
  ],
  blurb: "Is the national sports body for sailing in New Zealand, sport and recreation. We represent over 200 organisations including clubs, class associations and maritime organisations.",
  logo: "/img/directory/yachting-new-zealand.png",
  logoTheme: "paper"
 },
 {
  slug: "yachtshare-nz",
  name: "Yachtshare NZ Ltd",
  url: "http://www.yachtshare.co.nz",
  region: "Auckland",
  cats: [
   5,
   50,
   49
  ],
  blurb: "Yacht and Launch sharing - don`t buy, share ours! Easy annual fee, no maintenance. Auckland and Bay of Islands. Great for holidays, charter, team building, corporate entertaining, family vacations and leisure.",
  logo: "/img/directory/yachtshare-nz.png",
  logoTheme: "paper"
 },
 {
  slug: "yamaha",
  name: "Yamaha Motor New Zealand",
  url: "http://www.yamaha-motor.co.nz",
  region: "Auckland",
  cats: [
   3,
   4,
   13,
   26,
   31
  ],
  blurb: "Yamaha Motor builds outboards ranging from 2hp to 350hp. They offer the latest marine-dedicated engineering, world-leading emissions technology and unbeatable performance, reliability and durability.",
  logo: "/img/directory/yamaha.png",
  logoTheme: "paper"
 },
 {
  slug: "yamato-marine-worx",
  name: "Yamato Marine Worx",
  region: "Auckland",
  cats: [
   12,
   9
  ],
  blurb: "Yamato Marine Worx is an NZ Marine member working in painting and antifouling.",
  logo: "/img/directory/yamato-marine-worx.png",
  logoTheme: "paper"
 },
 {
  slug: "yessss-ltd",
  name: "YESSSS Ltd",
  url: "http://www.yessss.com",
  cats: [
   44
  ],
  blurb: "The ocean is in our DNA. We do boating, we speak the lingo, and we LOVE spending time in or on the water. We know the difference between an outboard and a pod-drive.",
  logo: "/img/directory/yessss-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "your-own-agency-ltd",
  name: "YOA Yacht Crew",
  url: "http://www.yoacrew.com",
  region: "Nationwide",
  cats: [
   39
  ],
  blurb: "YOA is an MLC-accredited superyacht crew agency providing an unparalleled service for all yacht recruitment needs. Founders, Tom and Don have both spent many years on Sailing and Motor Yachts gaining an appreciation for the requirements…",
  logo: "/img/directory/your-own-agency-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "your-boat-ltd",
  name: "Your Boat Ltd",
  url: "http://www.yourmarine.co.nz",
  region: "Auckland",
  cats: [
   4
  ],
  blurb: "Founded in 1974, the Rodman group is one of Europe's most respected shipbuilders. With almost 50 years of evolution and over 14,000 boats produced, Rodman delivers class-leading standards of quality, safety, and exceptional seakeeping.",
  logo: "/img/directory/your-boat-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "zego-international-ltd",
  name: "Zego International Ltd",
  url: "http://zegosportsboats.com",
  region: "Northland",
  cats: [
   3
  ],
  blurb: "If price, safety, versatility and ease of operation are important, you need to check out the Zego Sports Boat. Any type of fun or work, on any type of water, you can use a Zego! The design offers incredible stability and sea-keeping…",
  logo: "/img/directory/zego-international-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "zerojet-ltd",
  name: "Zerojet Ltd",
  url: "http://www.zerojet.com",
  region: "Auckland",
  cats: [
   0,
   14
  ],
  blurb: "Accelerating the marine industry’s transition to sustainable energy with electric jet propulsion systems. ZeroJet builds electric jet propulsion systems with the aim of removing the need for combustion engines on new boats under six…",
  logo: "/img/directory/zerojet-ltd.png",
  logoTheme: "paper"
 },
 {
  slug: "zf-services-australia-pty-ltd",
  name: "ZF Services Australia Pty Ltd",
  url: "http://www.zf.com/marine",
  cats: [
   14,
   26
  ],
  blurb: "ZF Services Australia Pty Ltd is an NZ Marine member working in transmission, propulsion and thrusters.",
  logo: "/img/directory/zf-services-australia-pty-ltd.png",
  logoTheme: "paper"
 }
];
