# OASIS 2022 edition refinement

## Changes

Removed added visible portfolio/archive/demo labels from the app, page titles, metadata, loading fallbacks, registration and Eclipse. Removed the simulated signup form, its input/validation/confirmation components, fictitious colleges and four invented event showcases. Hero Register Now and all three original Eclipse REGISTER buttons display the exact message “Registration is closed for this edition” in a small native dialog. It has a labelled heading/message, a close button, native focus containment and Escape dismissal, scroll locking and focus restoration. The notice is available immediately without a form chunk or waiting period.

Preserved original hero artwork, gold rings, clouds, shards, cursor, illustrations, type families, real game titles, historical articles, sponsor/partner lists, contact details and developer credits. Original backend event records are absent; KERNEL EVENTS retains its heading and Event illustration with a factual unavailable-details message. No invented records are relabelled as historical. Real article data in `src/JSON/artcles.json` is unchanged.

The mobile/tablet menu now reflows the same original about text, map and links within the existing decorated menu. Both previously hidden about/map sections display, and a bounded vertical scroll area keeps all content reachable. The original reveal/skew menu animation remains. The navigation control is a labelled native button with the original box dimensions; Escape closes the menu, and route changes restore scrolling and stop detached tweens. This is an adaptation of the original menu rather than a replacement layout.

Parent browser checks found that the legacy Google Maps embed returned HTTP 404. The original map panel now contains a local map rendered from real OpenStreetMap campus/road/building geometry, with responsive desktop/mobile framing, a visible linked attribution and an accessible Google Maps link to the campus. Opening the menu no longer requests an external map. The original surrounding gold decoration, about text and directions link remain. Source, date, licence, campus boundary and offline regeneration instructions are recorded in `docs/pilani-map-source.md`; this contemporary navigation map is not presented as a 2022 event record.

## Performance and caching

First-pass build at `63ef0b2`: **145 files / 4,357,893 bytes**. Final build: **118 files / 3,529,212 bytes**, **19.02% smaller**, including original font licences and both locally served map views. The map follow-up adds 178,056 bytes to the prior 3,351,156-byte build and replaces an unavailable external embed. Each selected map SVG is approximately 30 KB gzip, requested only when the menu opens; the compressed source data and generator do not ship.

Initial CSS changed from **122,485 to 27,006 bytes** (**77.95% smaller**). Initial JS changed from **378,153 to 369,760 bytes** (**2.22% smaller**). Final gzip measurements from Node zlib are **6,883 bytes** for initial CSS and **128,207 bytes** for initial JS. These are artifact measurements, not real-device load time or Core Web Vitals.

Navigation intent prefetch and actual router navigation share cached module promises. Router lazy loading keeps the current route visible until the destination is ready, so no artificial loading page or blank Suspense replacement appears during uncached transitions. Carousel code and base carousel styles load near the video section; unused theme styles, spinner and icon font bundles no longer ship. Existing YouTube click-to-play, coarse-pointer and reduced-motion behavior remain. This edition has no audio payload; the former loader video is not imported or published. Below-fold contacts, logos and portraits load lazily.

All partner/sponsor, profile-placeholder and map resources are imported and receive Vite content hashes. Unreferenced public/source resources no longer copy into the artifact. All 115 emitted resources are covered by the reference verifier. Hashed assets cache for one year with `immutable`; the root HTML and every known clean/trailing-slash route revalidate with `max-age=0, must-revalidate`. Immutable asset and HTML cache rules do not overlap.

## Preservation evidence

Twenty-three remaining PNG assets changed from **300,960 to 161,000 bytes** using lossless WebP. Every decoded RGBA pixel and original dimension was compared directly against first-pass commit `63ef0b2`; see `docs/artwork-lossless-verification.json`. Existing standalone/embedded WebP artwork remains unchanged rather than being recompressed.

All used Fontsource WOFF2 files remain byte-for-byte identical to the pinned original files. Only WOFF2 is emitted; redundant WOFF copies and unused Julius Sans One registration resources do not ship. The footer heart retains the original Font Awesome outline and horizontal metrics in a **672-byte** subset instead of its **119,488-byte** full solid font; see `docs/font-outline-verification.json`. Remaining icon families are original inline vectors. Existing WallMag font-family declarations remain unchanged; its unavailable custom font binaries continue to use their existing fallbacks. Font licences accompany the artifact.

Eclipse and WallMag global selectors were scoped to their pages so route prefetch cannot change typography or box sizing on the current page.

## Verification

- `npm ci` passed using the updated committed lockfile; unused Font Awesome, Julius Sans One and registration-only observer dependencies were removed.
- `npm run check` passed. Seven checks compile/render the labelled closed notice with no signup controls, verify shared hero/Eclipse use and original game names, exercise cached route-module loading, ensure no invented event records, verify original mobile about/map content remains present, render the accessible local map and attribution, and confirm its destination lies inside the real source campus polygon. The Vite production build and `scripts/verify-build.mjs` passed.
- The artifact verifier checked every emitted resource reference, hashed asset filenames, HTML/immutable cache rules, absent added/fake wording and byte-identical Fontsource files.
- `npm audit --json` reported zero vulnerabilities at every severity.
- PNG pixel/dimension comparisons and the original footer glyph outline/metrics comparison passed.
- Both generated map SVGs rendered successfully through the native SVG thumbnail renderer and were visually inspected. Offline generation reproduces the committed SVG bytes; source coordinates, original OSM identity and licensing are retained.
- `node --check` passed for build configuration, route loading and verification scripts; the build compiles all active JSX/routes.
- `git diff --check` passed.

Parent performs desktop/mobile browser checks, cold/warm navigation measurements and publication. This report does not claim physical-device or cross-browser results. No push or deployment was performed by this refinement agent.

Before the map follow-up, parent browser review passed desktop/mobile menu, closed notice, Eclipse and five routes, with no document overflow, broken images or application errors; the old map iframe was the only failed request. Evidence is in `portfolio-evidence/refinement/oasis-2022-browser.json`. The closed mobile menu has a zero-width original container; its toggle anchors to viewport width rather than the container's right edge, so the original-size control remains on screen. Parent performs the final map/browser pass and publication.
