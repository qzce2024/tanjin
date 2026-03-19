# Tanjin Carbon Website — Project Conventions

## Image Asset Organization

Each page has its own dedicated image folder under `src/assets/images/`:

```
src/assets/images/
├── home/              # Homepage images (products, why-choose-us, hero)
├── about/             # About page images (factory, team, qa, gallery, shipment)
├── applications/      # Applications page images (app-* series)
├── certifications/    # Certifications page images (cert-*, qa-*, gallery-*)
├── contact/           # Contact page images
├── faq/               # FAQ page images
```

### Rules

1. **One folder per page** — Every page's images go into its own folder. Do NOT put all images in a single shared folder.
2. **Naming convention** — Use lowercase, hyphen-separated names that describe the content (e.g., `app-water-treatment.png`, `cert-hero.png`).
3. **Shared images** — If an image is used by multiple pages, copy it into each page's folder. This keeps each page self-contained and avoids cross-folder dependencies.
4. **New pages** — When creating a new page, create a matching image folder first (e.g., `src/assets/images/new-page/`).
5. **Import paths** — Always import from the page's own folder:
   ```ts
   // Good
   import hero from '../assets/images/about/about-hero.png';

   // Bad — don't reference another page's folder
   import hero from '../assets/images/home/about-hero.png';
   ```

## Content Data Files

- Page-specific content lives in `src/content/` (e.g., `about.ts`, `applications.ts`, `certifications.ts`)
- Homepage content lives in `src/content/home/` subfolder
- Image imports in content files follow the same per-page folder rule

## Section Spacing

Use the predefined utility classes in `globals.css` for section vertical padding, instead of writing arbitrary `py-*` values:

| Class | Padding | Usage |
|---|---|---|
| `.section-lg` | `py-20` (5rem) | Homepage sections, areas needing more breathing room |
| `.section-md` | `py-14` (3.5rem) | Sub-page regular sections (default choice) |
| `.section-sm` | `py-10` (2.5rem) | Compact list sections, tightly spaced content |

Hero sections are excluded — they use their own `pt-32 pb-20` pattern.

## General

- Use Astro `Image` component for all images (enables optimization)
- Prefer `.png` or `.webp` format
- Hero/CTA background images should provide `widths={[800, 1200, 1920]}` for responsive loading
