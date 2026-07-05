# NZ Marine website

The NZ Marine Industry Association website. Static Vite + React 19 + TypeScript + Tailwind v4, served
by nginx. Live at https://nzmarine.bitn.cloud.

## Local development

```sh
pnpm install
pnpm dev        # local dev server
pnpm build      # production build to dist/
pnpm typecheck  # strict type check
```

## Deploy on push to main (GitOps)

Pushing to `main` deploys automatically. There is nothing to run by hand.

1. `.github/workflows/deploy.yml` builds the Docker image (`Dockerfile`, multi-stage: node build then
   unprivileged nginx) and pushes it to `ghcr.io/belton-it-nexus-limited/nzmarine-web`.
2. The workflow writes the new immutable image digest into `deploy/deployment.yaml` and commits it back.
3. Flux on the belton-prod cluster watches this repo and applies `deploy/` into the `tenant-nzmarine`
   namespace, rolling out the new image (surge-first, two replicas).

So: **edit code, push to `main`, and it goes live within a few minutes.** Rollback = revert the commit.

## Layout

- `src/` — the React app. `src/content/` holds the typed data and the real image library
  (`media.ts`), `src/components/concept-b/` is the homepage, `src/components/about|membership|...`
  the other pages.
- `src/content/companies.ts` — the single company data source (members + Export Group), with a
  one-line blurb and each company's real logo. `members.ts`/`exporters.ts` are filtered views of it.
- `public/img/members/` — the real, current member logos harvested from each company's own website
  (2026-07). `logoTheme: 'ink'` in companies.ts marks reversed (white) marks that render on the
  navy plate; re-harvest here rather than editing marks by hand.
- `public/img/web/` — the real NZ Marine photo library (WebP) and the logo.
- `deploy/` — the Kubernetes manifests Flux applies, plus the nginx config used by the Docker image.
- `BUILD-CONTRACT.md` — the design-token and component rules the site is built to.
