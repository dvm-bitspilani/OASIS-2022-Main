# Oasis 2022 portfolio restoration

Baseline: `95ad61bf87b70d532d22313ba8441e678b52eb8e` on `main`.

## Result

Static Vite build for Cloudflare Pages project `dvm-portfolio-oasis-2022`, output `dist`, intended domain `https://oasis2022.bits-oasis.org`. The original gold portal, king illustration, event carousel, menu animation, sponsor/partner cards, developer page and historical WallMag articles remain. All dependencies and local Wrangler are pinned with an npm lockfile. No backend or Cloudflare Worker is required.

## Changes

- Migrated CRA/webpack and CommonJS asset imports to Vite/native ES modules; JSX files now use `.jsx`. Removed unused analytics, CAPTCHA, abandoned backend configuration and the broken GitHub Pages deployment command.
- Removed the mandatory two-second full-page loader. Registration and secondary routes load on demand; the video carousel is imported when approaching the viewport. YouTube players load only after a visitor presses Play; maps load only when navigation is opened.
- Replaced failed college/event/registration requests with local fixture services. Representative events and fictional demo colleges are labelled; original event records were not recoverable from this repository. Form validation runs locally and the confirmation remains in component memory. No personal information is transmitted, persisted or included in confirmation messages. Eclipse registration controls also produce local demo feedback.
- Re-encoded 75 raster assets as WebP, resized portraits/logos to their display needs, compressed raster data embedded in SVGs, and retained original visual compositions. Self-hosted the original font families and icons.
- Fixed leaking input polling timers, resize/pointer listeners, stale navigation refs and timer cleanup. Decorative trails avoid React state updates, pause on coarse pointers and respect reduced motion. Event rotation stops outside the viewport. Added form labels, keyboard selection, modal Escape/focus handling and a persistent archive label.
- Removed raw HTML from event details and sanitize archived WallMag HTML through DOMPurify with a narrow tag allowlist and no attributes. Missing historical profile photos use an explicitly described neutral local silhouette rather than broken Google Drive images.
- Added Pages security headers and immutable caching for hashed assets. Scripts are restricted to the same origin; object embedding and form submission are blocked. CSP permits inline **styles** to preserve React/GSAP animation styling, and permits only the optional YouTube privacy embed and Google Maps frame origins. No inline/evaluated scripts are allowed.
- Added validation-only GitHub Actions; pushes never deploy automatically. `npm run deploy` explicitly builds and invokes pinned Wrangler Pages deployment.

## Verification

- `npm run check`: four registration validation scenarios passed; production build passed.
- `npm audit`: zero vulnerabilities across production and development dependencies. Baseline lockfile audit reported 75 (5 critical, 35 high, 20 moderate, 15 low). Audit counts describe known package advisories, including tooling; they do not constitute a guarantee against undiscovered vulnerabilities.
- Asset inventory, measured over `src/Assets` and `public`: 32,890,632 bytes / 148 files before; 3,815,755 bytes / 149 files after (88.4% fewer bytes, including the new archive silhouette and headers).
- Browser smoke verification through the T3 preview: desktop hero displayed original artwork; registration opened, accepted a complete fictional example and returned the local demo confirmation. The observed registration flow made zero requests to `bits-oasis.org` and wrote zero localStorage keys. A legacy react-slick CommonJS interop failure discovered during smoke testing was fixed. Final route/mobile/header coverage belongs to the parent rollout and should be recorded after deployment.
- Machine-readable audit/metrics and the complete successful test/build log are in `restoration-evidence/`. Initial home JavaScript is roughly 133 KB gzip; secondary route/video/article chunks are split. No fixed waiting period remains.

## Remaining limits

Original backend-only 2022 event records and profile photos are unavailable. Demo fixtures do not pretend to reconstruct those records. Historical dates, credits, public contact details and external links are preserved as archive content. Optional external videos/maps still depend on their providers; the core frontend and demo workflows do not. Domain attachment, deployed header verification and final multi-viewport checks are handled during the parent rollout.
