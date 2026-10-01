# OASIS 2022 edition refinement

## Changes

Removed added visible portfolio/archive/demo labels from the app, page titles, metadata, loading fallbacks, registration and Eclipse. Removed the simulated signup form, its input/validation/confirmation components, fictitious colleges and four invented event showcases. Hero Register Now and all three original Eclipse REGISTER buttons display the exact message “Registration is closed for this edition” in a small native dialog. It has a labelled heading/message, a close button, native focus containment and Escape dismissal, scroll locking and focus restoration. The notice is available immediately without a form chunk or waiting period.

Preserved original hero artwork, gold rings, clouds, shards, cursor, illustrations, type families, real game titles, historical articles, sponsor/partner lists, contact details and developer credits. Original backend event records are absent; KERNEL EVENTS retains its heading and Event illustration with a factual unavailable-details message. No invented records are relabelled as historical. Real article data in `src/JSON/artcles.json` is unchanged.

The mobile/tablet menu now reflows the same original about text, map and links within the existing decorated menu. Both previously hidden about/map sections display, and a bounded vertical scroll area keeps all content reachable. The original reveal/skew menu animation remains. The navigation control is a labelled native button with the original box dimensions; Escape closes the menu, and route changes restore scrolling and stop detached tweens. This is an adaptation of the original menu rather than a replacement layout.

## Performance and caching

First-pass build at `63ef0b2`: **145 files / 4,357,893 bytes**. Final build: **116 files / 3,351,141 bytes**, **23.10% smaller**, including the original font licences now distributed with the artifact.

Initial CSS changed from **122,485 to 26,490 bytes** (**78.37% smaller**). Initial JS changed from **378,153 to 369,077 bytes** (**2.40% smaller**). Final gzip measurements from Node zlib are **6,761 bytes** for initial CSS and **127,982 bytes** for initial JS. These are artifact measurements, not real-device load time or Core Web Vitals.

Navigation intent prefetch and actual router navigation share cached module promises. Router lazy loading keeps the current route visible until the destination is ready, so no artificial loading page or blank Suspense replacement appears during uncached transitions. Carousel code and base carousel styles load near the video section; unused theme styles, spinner and icon font bundles no longer ship. Existing YouTube click-to-play, coarse-pointer and reduced-motion behavior remain. This edition has no audio payload; the former loader video is not imported or published. Below-fold contacts, logos and portraits load lazily.

All partner/sponsor and profile-placeholder resources are imported and receive Vite content hashes. Unreferenced public/source resources no longer copy into the artifact. All 113 emitted resources are covered by the reference verifier. Hashed assets cache for one year with `immutable`; the root HTML and every known clean/trailing-slash route revalidate with `max-age=0, must-revalidate`. Immutable asset and HTML cache rules do not overlap.

## Preservation evidence

Twenty-three remaining PNG assets changed from **300,960 to 161,000 bytes** using lossless WebP. Every decoded RGBA pixel and original dimension was compared directly against first-pass commit `63ef0b2`; see `docs/artwork-lossless-verification.json`. Existing standalone/embedded WebP artwork remains unchanged rather than being recompressed.

All used Fontsource WOFF2 files remain byte-for-byte identical to the pinned original files. Only WOFF2 is emitted; redundant WOFF copies and unused Julius Sans One registration resources do not ship. The footer heart retains the original Font Awesome outline and horizontal metrics in a **672-byte** subset instead of its **119,488-byte** full solid font; see `docs/font-outline-verification.json`. Remaining icon families are original inline vectors. Existing WallMag font-family declarations remain unchanged; its unavailable custom font binaries continue to use their existing fallbacks. Font licences accompany the artifact.

Eclipse and WallMag global selectors were scoped to their pages so route prefetch cannot change typography or box sizing on the current page.

## Verification

- `npm ci` passed using the updated committed lockfile; unused Font Awesome, Julius Sans One and registration-only observer dependencies were removed.
- `npm run check` passed. Five checks compile/render the labelled closed notice with no signup controls, verify shared hero/Eclipse use and original game names, exercise cached route-module loading, ensure no invented event records, and verify the original mobile about/map content remains present. The Vite production build and `scripts/verify-build.mjs` passed.
- The artifact verifier checked every emitted resource reference, hashed asset filenames, HTML/immutable cache rules, absent added/fake wording and byte-identical Fontsource files.
- `npm audit --json` reported zero vulnerabilities at every severity.
- PNG pixel/dimension comparisons and the original footer glyph outline/metrics comparison passed.
- `node --check` passed for build configuration, route loading and verification scripts; the build compiles all active JSX/routes.
- `git diff --check` passed.

Parent performs desktop/mobile browser checks, cold/warm navigation measurements and publication. This report does not claim physical-device or cross-browser results. No push or deployment was performed by this refinement agent.
