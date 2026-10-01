# OASIS 2022

The original gold portal, festival artwork, typography, sponsor/partner lists, historical articles and developer credits are preserved. Register Now and Eclipse registration controls display “Registration is closed for this edition”. Original backend event records are unavailable; no event/college examples or simulated signup are presented.

Requires Node 22.12+ (CI uses Node 24).

```sh
npm ci
npm run dev
npm run check
npm run preview
npm audit
```

Cloudflare Pages project: `dvm-portfolio-oasis-2022`, output: `dist`, canonical domain: `https://oasis2022.bits-oasis.org`.

```sh
npm run deploy
```

Deployment uses the pinned local Wrangler CLI and existing Cloudflare login/account selection. GitHub Actions validates changes and never deploys automatically. See [EDITION_REFINEMENT.md](EDITION_REFINEMENT.md) for preservation evidence, measurements and verification.
