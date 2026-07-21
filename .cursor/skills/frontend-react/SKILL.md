---
name: frontend-react
description: >
  React component, page, and context conventions for Vite + React projects.
  Use when creating or editing UI components, pages, or React context.
---

# Skill: Frontend React

Product-agnostic patterns for React 18 + Vite. No business domain here.

---

## Key Files

| Path | Role |
|---|---|
| `src/components/` | Shared UI (modals, widgets) |
| `src/pages/` | Route screens (`*Page.tsx`) |
| `src/context/` | React context providers + hooks |
| `src/data/` | Static content / configs |
| `src/lib/` | Pure helpers + external integrations |
| `src/types.ts` | Domain types |

---

## Exports & Imports

- Prefer **named exports** in `src/` (`export function LandingPage`).
- Exception: `App` may use `export default` for Vite entry convenience.
- Relative imports within `src/` (no path alias required).

```ts
import { useQuote } from '../context/QuoteContext'
import { menus } from '../data/menus'
import type { MenuConfig } from '../types'
```

---

## Folder roles

```
src/
├── components/   # Presentational / interactive widgets
├── pages/        # *Page.tsx — route-level screens
├── context/      # Providers + use* hooks
├── data/         # Static datasets
└── lib/          # Side-effect helpers (fetch, format)
```

### Page / component split

| Layer | Location | Naming | Responsibility |
|---|---|---|---|
| Page | `src/pages/*Page.tsx` | `FooPage` | Route params, compose sections |
| Component | `src/components/*.tsx` | `FooModal`, `FooBar` | Props in; reusable UI |
| Context | `src/context/*Context.tsx` | `FooProvider` / `useFoo` | Shared client state |

Thin page, fat sections when a page grows. Private helpers stay unexported in the same file.

### Props naming

Always `ComponentNameProps`:

```tsx
interface QuoteModalProps {
  // …
}
```

---

## Hooks & state

- Context for cross-route UI state (e.g. quote modal open).
- Local `useState` for page-only UI (cart, drawers).
- Do not add `useMemo` / `useCallback` by default unless measuring a problem or matching existing code.

---

## Forms

- Controlled inputs; submit handlers `async` when calling network.
- Surface idle / loading / success / error status in the UI.
- Keep validation lightweight and inline unless a form library is adopted.
