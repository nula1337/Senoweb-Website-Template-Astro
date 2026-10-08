# Senoweb Website Template — Astro

Astro SSG template for Solo projects: **Netlify**, **Sveltia CMS** (GitHub backend), **Netlify Forms**, **Starwind UI**, fluid Tailwind, and prepared SEO.

## Quick start

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Stack

| Area | Choice |
|------|--------|
| Framework | Astro 7 (static) |
| CSS | Tailwind v4 — `global.css` + Starwind theme |
| UI | Starwind primitives + `ThemeToggle` |
| Hosting | Netlify → `dist/` |
| CMS | Sveltia at `/admin/` |
| Forms | Netlify Forms on `/kontakt/` |
| Images | `OptimizedImage` / `astro:assets` |

## Project map

```
src/
  config/site.ts              # Client identity
  components/Header/          # Nav data + Header
  i18n/                       # locales + UI strings
  content/pages/cs/           # Static pages
  content/blog/cs/            # CMS blog posts
  layouts/BaseLayout.astro
  styles/starwind.css         # Theme only
  styles/global.css           # App CSS entry
public/admin/                 # Sveltia CMS
```

## Content & i18n

Default locale is `cs` without URL prefix (`/o-nas/`, not `/cs/o-nas/`).

**Add another locale later:**

1. Add the code to `locales` in `src/i18n/locales.ts` and `astro.config.mjs` `i18n.locales`.
2. Create `src/content/pages/{locale}/` and `src/content/blog/{locale}/`.
3. Add nav items in `src/components/Header/navigation.ts` and strings in `src/i18n/ui.ts`.
4. Point Sveltia at the new blog folder (or add a collection) in `public/admin/config.yml`.

## Sveltia CMS

1. Open `/admin/` on the deployed site (or locally after configuring GitHub auth).
2. Set `backend.repo` in `public/admin/config.yml` to your GitHub repository.
3. Sign in with GitHub (PAT for solo use, or Netlify’s GitHub OAuth client when the site is on Netlify — **no Netlify Identity**).
4. Blog posts land in `src/content/blog/cs/` and publish at `/aktuality/{url}/`.

Docs: [Sveltia GitHub backend](https://sveltiacms.app/en/docs/backends/github)

## Netlify Forms

Contact form posts via Netlify Forms and redirects to `/dekujeme/`. Enable forms on the Netlify site; honeypot field is `company`.

## Client setup checklist

1. Edit `src/config/site.ts` (name, contacts, domain, socials).
2. Edit `src/components/Header/navigation.ts`.
3. Replace logos/favicons under `public/assets/`.
4. Update page Markdown under `src/content/pages/cs/`.
5. Set Sveltia `repo` in `public/admin/config.yml`.

## Scripts

| Script | Action |
|--------|--------|
| `npm run dev` | Astro dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run format` | Prettier |
