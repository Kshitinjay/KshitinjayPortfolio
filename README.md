# Kshitinjay Kumar — Portfolio

Personal portfolio for a frontend engineer building the real-time interfaces of AI products.
Single-page, light/airy editorial design (the **v4** theme): warm white + a single coral accent,
with a signature `agent · runtime` pipeline panel that will later host an "Ask me anything"
assistant.

**Live:** https://kshitinjay.github.io/KshitinjayPortfolio/

## Stack

- **Vite + React 18 + TypeScript**
- **Tailwind CSS** — tokens are mapped to the v4 CSS variables defined in `src/index.css`;
  bespoke pieces (the pipeline panel, the editorial work grid) live in a global `@layer components`
  driven by those same variables, so the rendered output matches the approved design exactly.
- Native **IntersectionObserver** scroll reveal (`src/hooks/useReveal.ts`) — no animation library.
- Deployed to **GitHub Pages** via GitHub Actions on push to `master`.

## Structure

```
src/
  App.tsx                  single-page composition
  index.css                design tokens (:root) + base + bespoke component layer
  hooks/useReveal.ts       scroll-reveal IntersectionObserver
  components/
    Header.tsx             sticky minimal header (+ mobile menu)
    Footer.tsx             mono footer
    RuntimePanel.tsx       the `agent · runtime` signature panel (mock assistant)
    sections/              Hero, Work, Stack, About, Contact
  data/                    work.ts, stack.ts, assistantMock.ts  (centralised content)
```

The `data/` content doubles as the seed for the future assistant's knowledge base.

## Scripts

```bash
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build locally
```

## Design source of truth

The approved design is `kshitinjay-portfolio-v4.html`. Decisions and the long-term AI-assistant
roadmap are documented alongside the project; the migration plan is in `THEME-MIGRATION-PLAN.md`.

## Roadmap

The `agent · runtime` panel currently runs a local mock with a typewriter reveal. The `respond()`
seam in `RuntimePanel.tsx` is the integration point for a future streamed backend (Node + Gemini),
swappable without layout changes.
