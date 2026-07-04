# NZ Marine site rebuild — BUILD CONTRACT (read in full before writing code)

You are one agent in a fleet rebuilding the NZ Marine Industry Association website as a
**static Vite + React 19 + TypeScript + Tailwind v4** site. This contract is the shared
source of truth. Follow it exactly so 30 agents produce ONE coherent site, not 30 styles.

Repo root: `/home/connor/code/belton/nzmarine/.dmux/worktrees/website-redesigning-specifically-interactions`
Audit evidence (read for grounding): `audit/reports/00-MASTER-AUDIT.md` and `audit/reports/01..20*.md`.
Scraped original copy: `audit/raw/pages_desktop/*.html`.

## Golden rules (do not violate)

1. **Tokens only.** Use the Tailwind utilities generated from `src/styles/tokens.css`. NEVER write a raw
   hex, `bg-[#...]`, `text-[15px]`, `p-[13px]`, inline `style={{color:...}}`, or invent a font/radius.
   Available color families: `neutral-{50..950}`, `navy-{50..950}`, `accent-{50..900}`, `sand-{300..600}`,
   plus semantic roles: `background`, `surface`, `surface-muted`, `foreground`, `muted-foreground`,
   `border`, `border-strong`, `input`, `ring`, `primary`, `primary-foreground`, `accent`,
   `accent-foreground`, `link`, `ink`, `ink-surface`, `ink-foreground`, `ink-muted-foreground`, `ink-border`.
   Use them as `bg-surface text-foreground border-border text-accent-700` etc.
2. **One accent.** Marine teal (`accent-*`) is punctuation only — links, active states, icons, key figures,
   focus ring, and at most ONE hero CTA fill per page. The dominant primary button is NAVY, not teal.
   The base is near-monochrome (paper `background` + navy `foreground`). No second accent. Sand is for
   rare fine detail (an award marker), almost never.
3. **BANNED (instant fail):** AI purple/indigo/violet/fuchsia anywhere; multi-stop / aurora / blob /
   glow gradient backgrounds; gradient text (`bg-clip-text`); gradient-filled avatar circles; emoji as
   UI icons; pure black `#000` or pure white `#fff` surfaces/text (use `surface`/`neutral-50`/`navy-900`);
   removing focus outlines; dead `href="#"` / empty onClick; lorem ipsum; "Coming soon" placeholder cards.
4. **Hierarchy from weight/color/spacing first, size second.** It must read in grayscale.
5. **Icons:** `lucide-react` only, default stroke, size 18–22 inline with text. Decorative icons get
   `aria-hidden`. Never emoji.
6. **Type:** Display/headings render in Fraunces automatically (h1–h4 via global.css). Body is Inter.
   Use `font-display` only if you need Fraunces on a non-heading element. Running text max width ~`prose`
   (44rem). Use type tokens `text-sm|base|lg|xl|2xl|3xl|4xl|5xl` and `text-display`, `text-display-sm`.
7. **Motion:** Use `motion` (framer) sparingly — fade/translate on enter (opacity + transform only),
   `--duration-base`, ease-out. Respect reduced-motion (global.css already neutralises durations). No
   parallax, no autoplaying carousels.
8. **Accessibility is a gate:** exactly one `<h1>` per page; logical heading order; real `<button>`/`<a>`;
   every interactive control has an accessible name; all `<img>` have meaningful `alt` (empty `alt=""`
   only for truly decorative); form fields use `<label htmlFor>`; AA contrast (body 4.5:1). Link color is
   `text-link`/`accent-700` with underline on hover/focus.
9. **States:** any list/data surface designs empty + (if async) loading + error. This is a static site, so
   data comes from `src/content/*` modules — design the empty state anyway where relevant (e.g. no events).
10. **TypeScript strict, named exports, explicit return types on exported components.** No `any`.
    Each component file < 300 lines. Run the slop-scan mentally before finishing.

## File ownership map (write ONLY your files; never edit another agent's or the foundation files)

FOUNDATION — already written, DO NOT EDIT: `src/styles/tokens.css`, `src/styles/global.css`,
`src/lib/cn.ts`, `src/main.tsx`, `src/router.tsx`, `vite.config.ts`, `tsconfig*.json`, `index.html`,
`package.json`, `public/favicon.svg`.

Each task below names the exact file(s) you own. Different agents touch different files, so there are no
conflicts. Import shared pieces by path/alias `@/...`.

## Component API contract (build these EXACTLY; pages rely on these signatures)

All in `src/components/ui/` unless noted. Use `cn` from `@/lib/cn`. Export named.

- `Container({ size?: 'content'|'prose'|'wide', className, children })` — centers + responsive x-padding.
  `content`=max-w 75rem (default), `prose`=44rem, `wide`=85rem.
- `Section({ tone?: 'paper'|'muted'|'ink', spacing?: 'default'|'sm'|'none', className, children, id })` —
  full-bleed `<section>` with vertical rhythm (`section-y`/`section-y-sm`). `paper`=bg-background,
  `muted`=bg-surface-muted, `ink`=bg-ink text-ink-foreground (navy band; inside it use `ink-*` roles).
- `Button({ as?: 'button'|'a'|Link, variant?: 'primary'|'secondary'|'ghost'|'accent', size?: 'sm'|'md'|'lg', href?, to?, ...})` —
  `primary`=navy-900 bg / primary-foreground, hover navy-800; `secondary`=surface bg + border-strong text-foreground;
  `ghost`=transparent, hover surface-muted; `accent`=accent-600 bg / white (use ONLY for the single hero CTA).
  Renders `<a>` when `href`, react-router `<Link>` when `to`, else `<button>`. Visible focus ring. Icon support via children.
- `Badge({ tone?: 'neutral'|'accent'|'sand'|'ink', children })` — small uppercase-ish eyebrow/label pill, subtle.
- `Card({ as?, className, children })` + `CardBody`, `CardTitle`, `CardMeta` — surface, rounded-lg,
  border-border, shadow-card, hover lift (translate-y-[-2px], shadow-pop) only when interactive.
- `Eyebrow({ children })` — small accent-700 uppercase label with letter-spacing, used above section titles.
- `Stat({ value, label, sublabel? })` — large `font-display` figure (use `tabular-nums`) + label.
- `Field` form primitives in `src/components/ui/Field.tsx`: `Field`, `Label`, `Input`, `Textarea`, `Select`,
  `Checkbox`, `FormRow`, `Fieldset` — labelled, AA, focus-ring, error prop. Used by Join/Contact forms.
- `Prose({ children })` in `src/components/ui/Prose.tsx` — long-form wrapper applying readable measure,
  spacing, link styling for article/legal body.
- `SectionHeading({ eyebrow?, title, intro?, align?: 'left'|'center', as?: 'h2'|'h3' })` — standard
  section header block (Eyebrow + heading + optional intro paragraph). Pages use this everywhere.

Blocks in `src/components/blocks/` (composed from ui):
- `Hero` (home) and `PageHero({ eyebrow?, title, intro?, imageKey?, actions?, breadcrumb? })` for inner pages —
  navy `ink` band with the title, optional intro, optional image, and CTA actions. Inner-page heroes are
  compact; the home `Hero` is the larger statement.
- `FeatureGrid({ items: {icon, title, body, to?}[], columns?: 2|3|4 })`.
- `StatBand({ stats: {value,label,sublabel?}[] })` — ink or muted band of `Stat`s.
- `CTABand({ title, body?, primary:{label,to}, secondary?:{label,to} })` — closing call-to-action band.
- `LogoWall({ title?, logos: {name, href?, src? }[] })` — member/exporter logos, monochrome-on-hover-color.
- `Breadcrumbs({ items: {label, to?}[] })`.
- `EventCard`, `NewsCard`, `MemberCard`, `DirectoryFilters` — used by their respective pages (the page agent
  may build the card it needs inside its own folder if not shared; prefer `src/components/blocks/` for shared).

Layout in `src/components/layout/`:
- `Header.tsx` — sticky top nav with the NZ Marine wordmark (use the `Wordmark` component), primary nav with
  a Membership and an "About" dropdown (accessible disclosure, keyboard-operable), a search affordance, and a
  primary "Join NZ Marine" `Button to="/join"`. Mobile: accessible hamburger → slide/drawer menu. Active link
  uses accent underline. NO dead links.
- `Footer.tsx` — structured footer: columns (Membership, Industry, Connect, About), contact details
  (Tel 09 360 0056, info@nzmarine.com placeholder), social, Recognised Member note, legal row + privacy link.
- `Layout.tsx` — `<a class="skip-link">` skip-to-content, `<Header/>`, `<main id="main">` with `<Outlet/>`,
  `<Footer/>`, plus `<ScrollRestoration/>` from react-router. Provides the page shell.
- `Wordmark.tsx` — inline SVG NZ Marine wordmark (navy + accent), `title` for a11y. Replaces the old raster logo.

## Content/data modules (`src/content/`) — typed, the single data source

Build these typed modules (one agent owns content). Pages import from here, never hardcode lists.
- `nav.ts` — primary nav + footer nav structures.
- `site.ts` — org facts: name, tagline, mission, phone, email, address, social, the verified stat
  ("over 500 member companies", "NZ marine industry"). Use ONE consistent member count (500+) and avoid the
  contradictory $3bn/$800m figure unless attributed; prefer "a NZ$1.96b+ industry" ONLY if cited, otherwise
  describe qualitatively ("one of New Zealand's most successful export industries").
- `events.ts` — the real upcoming events (Tahiti Networking Function 2026, Fiji Networking Function 2026,
  METSTRADE 2026, NZ Millennium Cup 2027, Auckland Boat Show 2027) with slug, date, location, blurb, price tier.
- `news.ts` — sample of real posts from `audit/raw/sm_post-sitemap.xml` (titles + dates + slugs + excerpt).
- `members.ts` / `exporters.ts` — the exporter list is real and in
  `audit/raw/pages_desktop/nz-marine-exporters.html` (≈35 companies w/ websites: Doyle Sails, Hamilton Jet,
  Southern Spars, North Sails, Garmin NZ, Fastmount, C-Tech, Lloyd Stevenson, etc.). Parse and type them.
- `sectorGroups.ts`, `benefits.ts`, `publications.ts`, `governance.ts` — structured from the scraped pages.
- `images.ts` — image manifest mapping keys → `/img/...` paths (the asset agent populates `public/img/`).
  Pages reference `images.heroHome` etc. If an image is missing, components fall back to a navy treatment.

## Voice & tone guide (rewrite ALL copy in this voice — no AI slop)

NZ Marine is a 60-year national trade body. Real phrases to KEEP as brand vocabulary: "Recognised Member",
"Code of Ethics", "Taking New Zealand Marine Companies Global", "Destination & Cruising New Zealand",
"NZ Marine Export Group", "Friends of NZ Marine". Mission: "to grow the New Zealand marine industry through
the profiling and collaboration of member companies, advocacy, industry training and the promotion of safe
boating." Anchor facts: 500+ member companies; world-leading in design, build, refit and maintenance of
vessels up to ~160m; the South Pacific hub for superyacht refit and servicing.

The NEW flavour (keep their substance, add warmth and clarity):
- **Plain, confident, specific.** Short sentences. Lead with the concrete (numbers, places, names) not adjectives.
- **Speak to the reader** ("you", "your business", "your yard", "your refit") on audience pages; stay
  institutional ("we", "the association") where it's about NZ Marine itself.
- **NZ English** (organise, recognised, harbour, metre, programme). Mention real NZ places where natural
  (Auckland, the Hauraki Gulf, Whangārei, the Bay of Islands).
- **No marketing slop:** ban "seamless", "world-class" (overused — "world-leading" used by them is OK once),
  "elevate", "unlock", "empower", "passionate", "cutting-edge", "robust", "leverage", "in today's...",
  "we're excited to". No exclamation marks in body copy. No em dashes. No emoji.
- **No AI cadence:** vary sentence length; keep the conjunctions ("and", "so", "because"); don't write
  three-part parallel triads; don't end on clipped fragments. Read it aloud — if you wouldn't say it to a
  member at a boat show, rewrite it.
- **CTAs name the outcome:** "Join NZ Marine", "Find a Recognised Member", "Register for the conference",
  "Plan a superyacht visit", "Talk to the export team" — verb + outcome, never "Learn more" / "Click here"
  / "Submit". Each page has exactly one primary CTA.
- **Headlines** are statements of value, not nav labels. The old hero ("View our member directory...") is a
  nav label — replace with a real proposition.

## Page section patterns (compose pages from blocks; keep them consistent)

Inner pages: `PageHero` (compact ink band w/ breadcrumb + title + intro + 1 primary action) → 2–4 `Section`s
alternating `paper`/`muted`, each opening with `SectionHeading` → optional `StatBand`/`LogoWall`/`FeatureGrid`
→ closing `CTABand`. Home is richer (see the Home agent task). Never two `ink` sections adjacent. Keep one
clear primary action per page.

## Definition of done for your file(s)

- Compiles under strict TS, named exports, explicit return types, < 300 lines, no `any`, no banned tokens.
- Uses the shared ui/blocks per the API above; imports data from `src/content/*`.
- Real copy in the voice guide (no lorem, no placeholder), AA contrast, one h1 (pages), keyboard-operable.
- If you reference an image, use a key from `src/content/images.ts` (it's fine if the asset agent fills it
  later); provide meaningful `alt`.
