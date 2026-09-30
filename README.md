# Oasis 2022 — DVM portfolio archive

The original festival frontend, restored as a static, interactive portfolio demonstration. Historical artwork, sponsor/partner lists, articles and developer credits are preserved. Registration and the missing event catalogue use labelled local demo data; nothing is submitted, charged, authenticated or saved.

Requires Node 22.12+ (CI uses Node 24).

```sh
npm ci
npm run dev
npm run check
npm run preview
npm audit
```

Cloudflare Pages project: `dvm-portfolio-oasis-2022`, output: `dist`, intended domain: `https://oasis2022.bits-oasis.org`.

```sh
npm run deploy
```

Deployment uses the pinned local Wrangler CLI and requires an existing Cloudflare login/account selection. GitHub Actions validates changes and never deploys automatically. See [PORTFOLIO_RESTORATION.md](PORTFOLIO_RESTORATION.md) for verification, provenance and remaining limitations.
