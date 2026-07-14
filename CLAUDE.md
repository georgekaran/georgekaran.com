# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Working Principles

These behavioral guidelines reduce common LLM coding mistakes. They apply alongside the project-specific sections that follow.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

## Project

Personal portfolio website for George Karan. A Next.js App Router site (no database) styled as a desktop OS ("GeorgeOS"). The portfolio sections and a file-backed MDX blog run as draggable windows; blog posts live in `content/posts/*.mdx` and are served through the `/blog/[slug]` page and `/blog/[slug]/content` route handler.

## Commands

- `npm run dev` — start dev server with Turbopack
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — ESLint (`next/core-web-vitals` + `next/typescript`)
- `npm run validate` — type-check with `tsc --noEmit` (no test suite exists)

CI (`.github/workflows/validate-branch.yaml`) runs `npm run validate` and `npm run lint` on every PR; both must pass.

## Architecture

- **Next.js 16** App Router with **React 19** and **TypeScript** (strict mode).
- All page content lives in `src/app/page.tsx` — a single server component rendering every section (Hero, About, Projects, Skills, Contact, Footer) inline. There is no component library or section-splitting; edits to page content happen directly in this file.
- `src/app/layout.tsx` sets global metadata, the Inter font, and wraps children in `next-themes` `ThemeProvider`. The app is hard-coded to dark mode (`<html className="dark">`, `defaultTheme="dark"`).
- **Tailwind CSS v4** via `@tailwindcss/postcss`. Global styles and CSS custom-property design tokens are in `src/app/globals.css` (imported through `@import "tailwindcss"`). There is no `tailwind.config` file — v4 is configured through CSS.
- Path alias `@/*` maps to `./src/*`.
- Static assets (profile photo, project screenshots, logo) live in `public/` and are referenced via `next/image`.

### Conventions

- The primary brand color is `#3B82F6` (blue), used as a literal hex throughout the JSX (not via a token). CSS variables in `globals.css` define an HSL design-token set but the page markup mostly uses literal Tailwind/hex values.
- Years of experience is computed dynamically (`new Date().getFullYear()-2018`) rather than hard-coded.

## Workflow / contribution rules

- **Commit messages** are linted by `mristin/opinionated-commit-message` (`.github/workflows/check-commit-style.yml`): max subject line length 70 chars, capitalized imperative subject.
- **PRs must carry exactly one label** from: `maintenance`, `feature`, `bug`, `enhancement` (`check-required-labels.yaml`).
- Renovate manages dependency updates (labeled `maintenance`).

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.
<!-- END:nextjs-agent-rules -->
