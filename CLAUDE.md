@AGENTS.md

# Engineering & Component Guidelines

## 1. Core Engineering Philosophy
- **Think Before Coding:** Explicitly state assumptions and plan component structure before writing code.
- **Simplicity First:** Avoid premature abstraction or over-engineering. Do not create abstractions unless code is reused 3+ times.
- **Surgical Changes:** Modify only what is necessary for the task. Do not refactor unrelated legacy files or format adjacent code.
- **Self-Documenting Code:** Write intention-revealing naming over adding extra comments.

## 2. Component Design & Architecture Rules
- **Single Responsibility (SRP):** Every component/module must do exactly one thing. If a file exceeds 150 lines, split sub-components or utility hooks.
- **Strict Composition:**
  - Prefer composition over prop drilling (`children` prop or slot patterns).
  - Component interfaces (props) must be minimal, strongly typed, and explicit.
  - Avoid passing primitive flags like `isHeader`, `isFooter`, `hasBorder`—split into compound components instead (e.g., `<Card.Header>`).
- **Purity & Side Effects:** Keep component rendering pure. Extract API calls, side-effects, and state machines into custom hooks or services.
- **Reusability & Tokens:**
  - Never hardcode dynamic values, colors, or magic numbers. Use design tokens / CSS variables / Tailwind constants.
  - Export types alongside components (`export type ButtonProps = ...`).

## 3. Code Standards & Formatting
- **TypeScript Strictness:** Strict mode always enabled. No `any` types. Avoid implicit `unknown` casts.
- **Immutability:** Treat props and state as strictly read-only.
- **Error Boundaries & Fallbacks:** Every async operation or dynamic component must handle Loading, Error, and Empty states gracefully.
- **Zero Orphaned Imports:** Clean up unused imports, types, or variables introduced by edits.

## 4. Verification Workflow
Before marking a task as complete:
1. Run type checks (`tsc --noEmit` or equivalent).
2. Run linters and fix any rule violations.
3. Verify component edge cases (empty data, overflow, long text strings, null values).

## 5. Project Map (Spotter marketing site)
- `src/app/globals.css` holds every design token (color, type, radius, chisel cut, spacing, z-index). Components read tokens; they never define colors.
- `src/components/ui` shared primitives, `src/components/site` header/footer, `src/components/mockups` product screens, `src/components/sections` one folder per page section.
- `src/content` typed copy and example data. `src/lib` pure logic. `src/hooks` client side effects.
- Brand rules: navy is the surface, marigold is the highlighter (never text on white). Chisel cuts (top-left + bottom-right) only on buttons, highlights and offer cards; product mockups stay rounded.
- Commands: `npm run dev`, `npm run typecheck`, `npm run lint`, `npm run build`.
