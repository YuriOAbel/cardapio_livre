---
name: typescript
description: >
  TypeScript strict-mode conventions and domain types layout.
  Use when adding types, editing tsconfig, or writing TS/TSX modules.
---

# Skill: TypeScript

Product-agnostic TypeScript conventions for Vite + React projects.

---

## Key Files

| Path | Role |
|---|---|
| `tsconfig.json` | Strict app options (`include: ["src"]`) |
| `src/types.ts` | Domain types |
| `src/vite-env.d.ts` | Vite client types |

---

## Compiler options

Keep these on in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "verbatimModuleSyntax": true
  }
}
```

- Lint gate = `bun run lint` → `tsc --noEmit`.
- Prefer `import type` for type-only imports (`verbatimModuleSyntax`).

---

## Domain types

Single module `src/types.ts` for now. Split into `src/types/` only when the file becomes hard to navigate.

```ts
export type MenuConfig = { /* … */ }
export type QuoteFormData = { /* … */ }
```

- Export types with `export type` / `export interface`.
- Do not put React components in `types.ts`.

---

## Style

- Prefer `type` for unions/aliases; `interface` OK for object shapes extended later.
- Avoid `any`; use `unknown` + narrow.
- No enums — use string union types.
