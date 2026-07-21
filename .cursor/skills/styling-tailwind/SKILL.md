---
name: styling-tailwind
description: >
  Tailwind CSS v4 setup and className conventions for Vite projects.
  Use when editing global CSS, theme tokens, or component class strings.
---

# Skill: Styling Tailwind

Product-agnostic Tailwind CSS v4 patterns.

---

## Key Files

| Path | Role |
|---|---|
| `vite.config.ts` | `@tailwindcss/vite` plugin |
| `src/index.css` | `@import 'tailwindcss'` + `@theme` tokens |
| `src/main.tsx` | Imports `./index.css` once |

---

## Setup

Vite plugin — no PostCSS config, no `@tailwind base/components/utilities`:

```ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Global CSS (project tokens):

```css
@import "tailwindcss";

@theme {
  --font-display: "Outfit", system-ui, sans-serif;
  --font-sans: "Manrope", system-ui, sans-serif;
  --color-ink: #0f2e1f;
  --color-ink-soft: #1a3d2b;
  --color-lime: #d4ff4a;
  --color-lime-deep: #b8e020;
  --color-mist: #eef2ef;
  --color-accent: #ff6b3d;
}
```

Tokens become utilities: `bg-ink`, `text-lime`, `bg-mist`, `text-accent`, `font-display`.

---

## className Conventions

### Merge pattern (no `cn` / `clsx` / `tailwind-merge`)

```tsx
className={[
  'base utilities…',
  condition ? 'extra' : '',
  className,
]
  .filter(Boolean)
  .join(' ')}
```

Template literals OK for simple toggles.

### Radius

- Controls / CTAs: `rounded-full` (brand pills)
- Cards / panels: `rounded-2xl` / `rounded-3xl`
- Small chips: `rounded-xl`

### Layout

- Content width: `max-w-6xl mx-auto px-4 sm:px-6`
- Menu demos: `max-w-lg` (mobile-first)
- Page shell: `min-h-screen`

---

## Demo menu themes

Per-menu colors come from `MenuConfig.theme` (inline `style={{}}`), not from `@theme`. Keep LP brand tokens in CSS; keep client demos in data.

---

## Notable Absences (intentional)

- No `cn()` / `clsx` / `tailwind-merge` / `cva`
- No PostCSS / `tailwind.config.js` (v4 CSS-first)
- No CSS modules / styled-components
- No `@tailwind base` directives
- No `components/ui/` primitives yet — match existing class patterns when adding UI
