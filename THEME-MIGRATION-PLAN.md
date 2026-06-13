# v4 Theme Migration — Phase-Wise Roadmap

> Migrating the existing `d:\portfolio` app (Vite + React 18 + TS + Tailwind 3, multi-page, dark/light) to the **v4 design** (single-page, light/airy editorial, warm white + single coral accent, `agent · runtime` pipeline). This document is the implementation roadmap only — **no code is written until a phase is explicitly started.**
>
> Source-of-truth design: `kshitinjay-portfolio-v4.html`. Design spec: `PROJECT-CONTEXT.md`. Long-term product roadmap (AI assistant): `portfolio-ai-assistant-roadmap.md`.

## Locked decisions (from kickoff)

1. **Single page.** Drop `react-router-dom`; one page with anchor sections (`#work`, `#stack`, `#about`, `#contact`).
2. **Keep Tailwind, but match v4 *exactly*.** Tailwind stays as the toolchain; its tokens are re-mapped to the v4 CSS variables, and bespoke pieces (pipeline panel, editorial work grid, dotted background) live in a global CSS layer driven by the same variables. **Pixel fidelity to the v4 mockup is a hard requirement.**
3. **Light-only.** Remove the dark/light toggle and `ThemeContext`. A coral-aware dark mode is deferred to optional F5 work, re-derived (never the old teal palette).

---

## Critical context: this is a re-theme of a *live* app, not a greenfield build

The roadmap's F1 ("scaffold Vite + React + TS, port the mockup") assumes a fresh start. The app already exists and is deployed. So the dominant work is **removal + replacement**, and the biggest risks live in what we tear out:

- React Router (5 routes) → one page.
- Teal/mint palette + dark mode → warm-white + coral, light only.
- framer-motion page transitions → native IntersectionObserver reveals.
- EmailJS contact form (currently wired to **placeholder, non-functional** credentials) → `mailto:` + links.
- Stale content (`4+ years`, practice-game projects, `Footer` placeholders "Your Name"/`yourusername`) → real, current résumé content.

### Current → target component map

| Current | Action | Target (v4) |
|---|---|---|
| `App.tsx` (Router + Routes) | Rewrite | Single-page composition of sections |
| `main.tsx` | Keep | Unchanged mount |
| `contexts/ThemeContext.tsx` | **Delete** | — (light only) |
| `components/Navbar.tsx` | Rewrite | Minimal sticky header (coral-dot logo + 4 anchors + resume) |
| `components/Footer.tsx` | Rewrite | Tiny mono footer (`© 2026…` + location) |
| `pages/Home.tsx` | Replace | `Hero` + `RuntimePanel` + `Metrics` sections |
| `pages/Experience.tsx` | Repurpose data → delete page | `Work` (editorial entries) — content reused |
| `pages/Projects.tsx` | Repurpose/retire | folded into `Work` (Naukri Board entry) |
| `pages/About.tsx` | Replace | `About` (2-column display + body) |
| `pages/Contact.tsx` | Replace | `Contact` (statement + mailto CTA + links) |
| `data/skills.ts` | Remap | `data/stack.ts` (4 columns: AI&real-time lead, Core, Quality, Workflow) |
| `assets/Images/*` (5 game thumbs) | Retire | unused; v4 has no project images |
| `index.html` | Rewrite head | fonts, title, description, OG, favicon |
| `index.css` | Rewrite | Tailwind layers + v4 CSS variables + bespoke CSS |
| `tailwind.config.js` | Re-theme | v4 palette/typography tokens; remove dark teal |
| `.github/workflows/deploy.yml`, `vite.config.ts` base | **Preserve** | unchanged deploy + base path |

---

## Phase 0 — Decisions & freeze (DONE at kickoff)

**Objective:** lock the forks that shape everything. ✅ Routing, styling, dark-mode resolved above.
**Remaining micro-decisions to confirm during F1:** monogram vs photo in hero; whether to keep a `404.html`; résumé link (currently a Google Drive URL in the navbar — keep or self-host PDF).

---

## Phase 1 — Foundation (design tokens, fonts, global CSS, cleanup)

**Objective:** establish the v4 visual substrate so every later component renders correctly, and remove what the new theme abandons.

**Scope of work**
- Add the three Google Fonts (Hanken Grotesk / Inter / JetBrains Mono) with `preconnect` + `display=swap`, exactly per the spec URL.
- Port the v4 `:root` CSS variables verbatim (palette, `--maxw`, font-family vars) into `index.css`.
- Re-theme `tailwind.config.js`: map `colors` (`bg`, `panel`, `ink`, `ink-soft`, `ink-faint`, `line`, `line-strong`, `coral`, `coral-soft`, `coral-line`) to the CSS variables; set `fontFamily` (display/body/mono); set `maxWidth.wrap`. **Remove** `darkMode:'class'` and the old teal/secondary tokens.
- Establish the global `@layer base` rules from v4: `body` background/color, `::selection` coral, `a` reset, focus-visible coral ring, the `.wrap` container, the `.mono` label utility.
- **Delete** `ThemeContext.tsx` and all dark-mode usage; remove the custom-cursor block from `index.css` (not in v4) unless you want to keep it.

**Files affected:** `index.css`, `tailwind.config.js`, `index.html` (font links), delete `src/contexts/ThemeContext.tsx`.
**Dependencies/prereqs:** none — first phase.
**Risks / edge cases:**
- *Token drift:* if Tailwind utilities and the bespoke CSS define the same color differently, fidelity breaks. Mitigate: a single source of truth in `:root`; Tailwind tokens point at the vars, never hardcode hex.
- Font FOUT/CLS — keep `display=swap` and `preconnect`; verify headline `clamp()` doesn't shift.
- Removing `darkMode` will break any component still referencing `dark:` classes — those are all rewritten in later phases, so this phase must land *with* the section rewrites or behind them.

**Recommended order:** do first. Nothing else is faithful without the tokens.

---

## Phase 2 — Layout shell & app composition (header, footer, single-page scaffold)

**Objective:** replace the Router shell with the v4 single-page skeleton and the persistent chrome.

**Scope of work**
- Rewrite `App.tsx`: remove `Router/Routes/Route`; render `<Header/>` + `<main>` containing the section components in v4 order + `<Footer/>`.
- Uninstall `react-router-dom` + `@types/react-router-dom`; remove `basename`/`BrowserRouter`.
- Rewrite `Navbar.tsx` → **Header**: sticky, `rgba` + `backdrop-blur`, hairline; coral-dot logo + name; `Work / Stack / About / Contact` anchor links (smooth scroll); keep the resume link; **remove** theme toggle. Decide mobile behavior (v4 simply hides nav `<880px` — see Phase 6).
- Rewrite `Footer.tsx` → tiny mono footer with real content (`© 2026 Kshitinjay Kumar` · `Gurugram, IN · UTC+5:30`). Remove placeholder GitHub/LinkedIn/Twitter "yourusername" links.

**Files affected:** `App.tsx`, `components/Navbar.tsx` (→ Header), `components/Footer.tsx`, `package.json`, `vite.config.ts` (router base no longer needed but **keep `base:'/KshitinjayPortfolio'`** for assets).
**Dependencies/prereqs:** Phase 1 tokens.
**Risks / edge cases:**
- *GH Pages base path:* anchors are fine, but confirm `base` stays so font/asset URLs resolve at `/KshitinjayPortfolio/`. With routing gone, the SPA-404 concern disappears.
- Anchor smooth-scroll must offset for the sticky header height, or section tops hide under it.
- `scroll-behavior:smooth` must be disabled under `prefers-reduced-motion` (v4 already does this).

**Recommended order:** second. Gives a navigable empty shell to drop sections into.

---

## Phase 3 — Content sections (Hero, Work, Stack, About, Contact)

**Objective:** build the static editorial content, pixel-faithful to v4, with centralized data.

**Scope of work** (one sub-task per section; each is independently shippable)
- **Hero:** mono eyebrow + coral tick; `clamp(46px,8vw,104px)` headline with coral `.em`; right-aligned `lede`; generous top padding. *(Pipeline panel is Phase 4.)*
- **Metrics line:** single mono row, dot separators, coral numerals.
- **Work:** editorial entries, grid `80px | 1fr | 360px`, hairline dividers, coral hover arrow. Three entries from real content: TryEva & Agent Foundry (+30%), AkiroLabs (+20%), Naukri Board (Live ↗). Source the copy from `Experience.tsx` (still accurate) — migrate it into a `data/work.ts`.
- **Stack:** 4 columns; "AI & real-time" is the lead (coral header). Remap `data/skills.ts` → `data/stack.ts` to these four buckets.
- **About:** 2-column — big display line ("Engineer, not **template.**") + two body paragraphs.
- **Contact:** large display statement; short line; coral primary `mailto:` CTA + LinkedIn/GitHub. **Drop EmailJS** and the form entirely.

**Files affected:** new `src/components/sections/{Hero,Metrics,Work,Stack,About,Contact}.tsx`; new `src/data/{work.ts,stack.ts}.ts`; delete `pages/*`, `data/skills.ts`; uninstall `@emailjs/browser`.
**Dependencies/prereqs:** Phases 1–2.
**Risks / edge cases:**
- *Content accuracy:* reconcile "5+ yrs" (spec) vs the "June 2024–Present + May 2021–June 2024" timeline; confirm the +45% / +40% / +20% figures map correctly to entries. The KB (roadmap) is the canonical wording — keep `data/*` aligned so it can later feed the AI assistant.
- Editorial grid `360px` impact column must collapse gracefully (Phase 6).
- Heroicons usage drops with the old nav; verify `@heroicons/react` is still needed (resume download icon) or remove it.

**Recommended order:** third, in the sub-order Hero → Work → Stack → About → Contact (top-to-bottom builds visual momentum and lets you eyeball fidelity against the mockup section by section).

---

## Phase 4 — Signature component: `agent · runtime` pipeline panel

**Objective:** build the design's signature element — and the future home of the AI assistant (roadmap F2/F3). This is the highest-value, highest-craft component; isolate it.

**Scope of work**
- Title bar: three dots + `agent · runtime` (left); blinking coral dot + `streaming` (right).
- SVG pipeline: four nodes LISTEN → REASON → STREAM → SPEAK, edges, and the coral signal dot traveling on the `<animateMotion>` loop (keep v4's `keyPoints`/`keyTimes` timing). Provide `aria-label`.
- Terminal row: `ask ›` prompt + input + `run` button; example chips.
- **Mock responder** (matches v4's hardcoded `answers` + typewriter reveal, reduced-motion aware) — built behind a clean seam (`respond(question) → text`) so roadmap F2/F3 can swap it for the streamed backend without touching layout.

**Files affected:** new `src/components/RuntimePanel.tsx` (+ optional `useTypewriter` hook, `data/assistant-mock.ts`).
**Dependencies/prereqs:** Phases 1–3 (lives inside Hero).
**Risks / edge cases:**
- *SVG fidelity & responsiveness:* `viewBox="0 0 1120 180"` + `preserveAspectRatio` must scale without distorting nodes on mobile (v4 shrinks `.pipe` height at `<560px`).
- *Accessibility now vs later:* add the ARIA live region for answers now (cheap, and required when the real assistant lands) — announce streamed text politely.
- `<animateMotion>`/`<mpath>` support and the `prefers-reduced-motion` kill-switch must both be verified.
- Keep the seam thin: no backend logic here; the mock and the future `fetch` share one interface so Phase F3 is a drop-in.

**Recommended order:** fourth — after the static page is faithful, so the panel is the focus of attention and easy to QA in isolation.

---

## Phase 5 — Motion & animation

**Objective:** the rationed, intentional motion v4 specifies — and nothing more.

**Scope of work**
- Reusable scroll-reveal: a `useReveal` hook or `<Reveal>` wrapper over IntersectionObserver (`threshold:.12`, unobserve-once), applying the `.reveal`/`.in` opacity+translate transition. Replaces framer-motion's per-page transitions.
- Orchestrated load reveal with staggered `transition-delay` on hero elements (per v4 inline delays).
- Quiet hovers: nav link color, entry coral arrow, chip/button/CTA lift.
- The pipeline signal loop + blinking dot (built in Phase 4; verify here).
- **Global `prefers-reduced-motion`:** disable all animation + smooth scroll; reveals snap to visible.

**Files affected:** new `src/hooks/useReveal.ts` (or `components/Reveal.tsx`); `index.css` (`.reveal`, keyframes, reduced-motion block); uninstall `framer-motion`.
**Dependencies/prereqs:** sections exist (Phase 3) to attach reveals to.
**Risks / edge cases:**
- Removing framer-motion across all old pages must be complete or the build breaks — verify no stray imports.
- IO reveal must not leave content invisible if JS fails or for crawlers — default `.reveal` to visible-on-no-JS, or accept progressive enhancement.
- Stagger delays must respect reduced-motion (no delayed appearance).

**Recommended order:** fifth — layer motion onto a complete, correct static page.

---

## Phase 6 — Responsive design

**Objective:** faithful behavior at the v4 breakpoints and below.

**Scope of work** (mirror v4's media queries exactly)
- `≤880px`: hero padding tightens; `lede` left-aligns; **work entries collapse to single column**, hide index, move impact above; stack → 2 columns; about → 1 column; **desktop nav hidden**.
- `≤560px`: `.wrap` padding 22px; pipeline height 152px; stack → 1 column; section padding 80px.
- **Mobile nav decision:** v4 simply *hides* the nav `<880px`. The current app has a hamburger menu. Decide: (a) match v4 and drop the menu (simplest, but no nav on mobile), or (b) add a minimal coral-accented mobile menu (better UX, slight scope add). Recommend (b) — a small, on-brand sheet — since a portfolio is heavily viewed on mobile.

**Files affected:** `index.css` media queries; `Header` (mobile menu if chosen).
**Dependencies/prereqs:** Phases 2–4.
**Risks / edge cases:**
- The 3-column work grid and 4-column stack are the main reflow hazards — test the impact column and long titles.
- SVG pipeline legibility on narrow screens; chips wrapping.
- If a mobile menu is added, it needs focus trap + reduced-motion + close-on-anchor.

**Recommended order:** sixth — once all sections exist; responsive is a cross-cutting pass.

---

## Phase 7 — Meta, SEO, assets & PWA basics

**Objective:** real metadata and a polished first impression in links/tabs.

**Scope of work**
- `index.html`: real `<title>`, `<meta name=description>`, Open Graph + Twitter card tags, theme-color, canonical.
- Favicon: replace `vite.svg` with a coral-dot monogram (multiple sizes / SVG).
- OG share image (1200×630) — on-brand, warm white + coral.
- Résumé: confirm/keep the Google Drive link or self-host the PDF in `public/`.
- Remove unused assets (`assets/Images/*` game thumbnails, `react.svg`) and dead imports.

**Files affected:** `index.html`, `public/*`, asset cleanup.
**Dependencies/prereqs:** content final (Phase 3) for accurate meta text.
**Risks / edge cases:** OG image must be an absolute URL (GH Pages base path) to preview correctly on social platforms.

**Recommended order:** seventh.

---

## Phase 8 — Performance & accessibility hardening (the "quality floor")

**Objective:** hit the spec's non-negotiables — green Lighthouse, real a11y. "The site itself is the work sample."

**Scope of work**
- Lighthouse pass (perf/a11y/best-practices/SEO) on the production build; fix CLS from fonts, unused CSS, image weight.
- Verify: semantic landmarks (`header/main/nav/section/footer`), heading order, visible coral focus rings on every interactive element, ARIA live region for the assistant, color contrast of `--ink-soft`/`--ink-faint` on `--bg` (verify `#9A9CA3` passes for its uses).
- Bundle audit: confirm framer-motion, react-router, emailjs, heroicons are gone from the bundle; tree-shake.
- `prefers-reduced-motion` end-to-end check.

**Files affected:** cross-cutting; minor edits anywhere.
**Dependencies/prereqs:** all build phases.
**Risks / edge cases:** `--ink-faint` (#9A9CA3) on white is ~2.9:1 — fine for large/decorative mono labels but **fails AA for body text**; ensure it's only used on meta/labels, not paragraphs.

**Recommended order:** eighth.

---

## Phase 9 — Testing & verification

**Objective:** confirm fidelity and function before deploy.

**Scope of work**
- **Visual fidelity:** side-by-side against `kshitinjay-portfolio-v4.html` at desktop/tablet/mobile — this is the acceptance bar (pixel-faithful was the hard requirement).
- Cross-browser (Chrome/Firefox/Safari) for `backdrop-filter`, SVG `animateMotion`, `clamp()`.
- Interaction: anchor scroll + offset, chips fire mock answers, run button, keyboard nav + focus order, reduced-motion.
- `npm run build` + `npm run preview` clean; `npm run lint` clean (ESLint config stays).
- Optional: a couple of light component tests (the app has no test runner today — adding Vitest/RTL is optional scope, not required for the theme).

**Files affected:** none structural; possibly add a test setup if desired.
**Dependencies/prereqs:** Phases 1–8.
**Risks / edge cases:** Safari `backdrop-filter` prefix; iOS font rendering of the tight `letter-spacing`.

**Recommended order:** ninth, gating deploy.

---

## Phase 10 — Deploy & cutover

**Objective:** ship the v4 site to the existing GH Pages URL with no regressions.

**Scope of work**
- Confirm `deploy.yml` (Actions, `master` → `gh-pages`, `publish_dir: ./dist`) and `vite.config.ts` `base` are untouched and still correct.
- Update `README.md` and `package.json` `homepage` if the repo/URL slug changes (currently `/KshitinjayPortfolio/`).
- Deploy, verify the live URL, re-run Lighthouse on production, test OG preview.
- Tag/commit as the v4 release.

**Files affected:** `README.md`, possibly `package.json`.
**Dependencies/prereqs:** Phase 9 green.
**Risks / edge cases:** base-path asset 404s only show on the real GH Pages URL, not local preview — verify post-deploy. Browser/CDN caching of the old teal site.

---

## Recommended overall implementation order

`P1 Foundation → P2 Shell → P3 Content (Hero→Work→Stack→About→Contact) → P4 Pipeline → P5 Motion → P6 Responsive → P7 Meta/Assets → P8 Perf/A11y → P9 Test → P10 Deploy.`

Each phase ends in something that builds and renders. P3 and P4 can interleave (panel slots into the Hero). P5–P8 are cross-cutting passes over a complete page.

---

## Reusable components & refactor opportunities

- **`<Reveal>` / `useReveal`** — one IntersectionObserver primitive replaces all framer-motion mounts.
- **`.wrap` container + `.mono` label** — global utilities reused by every section.
- **Centralized `data/` (work, stack, metrics, assistant-mock)** — single content source that *also* becomes the seed for the AI assistant's knowledge base (roadmap KB prep). Keep copy here, not inline in JSX.
- **`RuntimePanel` seam** — `respond(question)` interface isolates mock-vs-real so roadmap F2/F3 is a drop-in swap, zero layout churn.
- **Tag/chip, clink/button** — small shared primitives (`<Tag>`, `<Chip>`, `<LinkButton>`) keep coral-accent rules consistent.

## Improvements & inconsistencies found (worth addressing during migration)

1. **Experience timeline vs "5+ yrs":** résumé shows ~May 2021→now (~5 yrs) but the old About said "4+ years." Standardize on 5+ everywhere; align with the KB.
2. **EmailJS is dead weight:** wired to literal `YOUR_SERVICE_ID` placeholders — it never worked. v4's mailto approach is simpler and removes a dependency + a config/secret concern. Clean win.
3. **Footer placeholders shipped to prod:** current footer links to `yourusername` / "Your Name." The v4 footer fixes this; verify nothing else carries placeholders.
4. **Dark-mode whiplash:** the toggle was added in the most recent commit and is now removed. Keep the *implementation* idea (CSS-variable theming makes a future dark mode easy) but ship light-only per spec.
5. **Color contrast:** `--ink-faint` (#9A9CA3) must stay on labels/meta only, never body copy (fails AA at ~2.9:1).
6. **`--maxw` consistency:** ensure the new container uses `--maxw:1140px` everywhere; the old app used Tailwind `container` (different widths) — don't mix.
7. **Custom global `cursor:default`** in current `index.css` isn't in v4 — drop it unless intentional; it can suppress expected text/pointer cursors.
8. **Mobile nav gap:** v4 hides nav entirely `<880px`. Recommend a minimal on-brand mobile menu rather than no navigation, since portfolios skew mobile.
9. **Forward-compat with the AI roadmap:** building the pipeline panel and the `data/` knowledge content now (Phases 3–4) directly de-risks roadmap F2/F3/B-track later — note the seam explicitly so it isn't re-architected.

---

## Dependency changes summary

**Remove:** `react-router-dom`, `@types/react-router-dom`, `framer-motion`, `@emailjs/browser` (and `@heroicons/react` if the resume icon is replaced).
**Add:** none required (fonts via `<link>`; IO + SVG are native). Optional: `vitest` + `@testing-library/react` if tests are desired.
**Keep:** Vite, React 18, TypeScript, Tailwind 3, autoprefixer/postcss, eslint, gh-pages + Actions deploy, `vite.config.ts` `base`.

> Note: the AI-assistant roadmap names **React 19**; the repo is on React 18. Upgrading React is **out of scope for the theme migration** — treat it as a separate, later task (it pairs naturally with roadmap F1/F2) to avoid coupling a visual migration to a framework bump.
