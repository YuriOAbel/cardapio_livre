---
name: routing
description: >
  React Router v7 route tree conventions for this Vite SPA.
  Use when adding or changing routes or redirects.
---

# Skill: Routing

Product-agnostic React Router v7 patterns for a small SPA.

---

## Key Files

| Path | Role |
|---|---|
| `src/App.tsx` | `BrowserRouter` + `<Routes>` tree |
| `src/pages/*Page.tsx` | Route screens |
| `src/main.tsx` | Mounts `<App />` |

---

## Router setup

Routes live in `src/App.tsx` (flat tree — no separate `routes/` module until the tree grows large).

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cardapio/:slug" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  )
}
```

Keep `basename` aligned with Vite `base` when deploying under a subpath.

---

## Route declaration

- **Static imports** — no `React.lazy` / `Suspense` unless project adopts code-splitting.
- **No nested layout routes / `Outlet`** unless a shared shell is introduced.
- Unknown slugs: page redirects with `<Navigate to="/" replace />`.

---

## Adding a route

1. Create `src/pages/NewPage.tsx` (named export).
2. Add `<Route>` in `src/App.tsx`.
3. Link with `<Link to="…">` from `react-router-dom` (not raw `<a>` for in-app nav).

---

## Params

```tsx
const { slug = '' } = useParams()
```

Validate against data (`getMenuBySlug`) before rendering.
