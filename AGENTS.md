# Agent Guidelines

This document provides essential information for AI agents and developers working on this project.

## ⚠️ Critical: Package Manager

**This project uses [Bun](https://bun.sh) as the package manager.**

- **DO NOT** use `npm`, `yarn`, or `pnpm` commands
- **ALWAYS** use `bun` commands:
  - `bun install` (not `npm install`)
  - `bun run dev` (not `npm run dev`)
  - `bun add <package>` (not `npm install <package>`)
  - `bun add -d <package>` (for dev dependencies)
- The project specifies `"packageManager": "bun@1.1.0"` in `package.json`
- Lock file: `bun.lockb` (do not commit `package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml`)

## Project Overview

This is an **Astro** project with React components, built as a static site.

### Tech Stack

- **Framework**: Astro v5.16.2
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS with shadcn/ui components
- **Language**: TypeScript
- **Build Tool**: Vite
- **Package Manager**: Bun 1.1.0

### Project Structure

```
src/
├── components/        # React (.tsx) and Astro (.astro) components
│   ├── ui/           # shadcn/ui components
│   └── ...           # Feature components
├── layouts/          # Astro layouts
├── pages/            # Astro pages (file-based routing)
├── styles/           # Global styles
├── lib/              # Utility functions
└── hooks/            # React hooks
```

## Development Commands

All commands must be run with `bun`:

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Run linter
bun run lint
```

## Key Conventions

### Component Files

- **Astro components**: Use `.astro` extension (e.g., `Hero.astro`, `Footer.astro`)
- **React components**: Use `.tsx` extension (e.g., `Contact.tsx`, `Navigation.tsx`)
- Components are located in `src/components/`

### Path Aliases

- `@/` resolves to `src/`
- Example: `import { something } from '@/lib/utils'`

### Styling

- Tailwind CSS is configured with `applyBaseStyles: false`
- Global styles are imported in `Layout.astro`
- Use Tailwind utility classes and shadcn/ui components

### Astro Configuration

- Output mode: `static` (static site generation)
- React integration enabled
- Tailwind integration enabled
- Path alias `@` configured for `src/`

## Adding Dependencies

When adding new packages:

```bash
# Production dependency
bun add <package-name>

# Development dependency
bun add -d <package-name>
```

**Never** use `npm install`, `yarn add`, or `pnpm add`.

## File Naming

- Astro files: `.astro` extension
- React components: `.tsx` extension
- TypeScript utilities: `.ts` extension
- Use PascalCase for component files (e.g., `Navigation.tsx`)
- Use kebab-case for pages (e.g., `index.astro`, `404.astro`)

## Important Notes

1. **Package Manager**: Always use Bun. The project is configured to use Bun exclusively.
2. **Lock Files**: Only `bun.lockb` should exist. Remove any `package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml` files.
3. **Node Version**: Bun handles Node.js compatibility, but ensure Bun 1.1.0+ is installed.
4. **TypeScript**: The project uses TypeScript with strict type checking.
5. **ESLint**: ESLint is configured and should be run before committing.

## Common Tasks

### Adding a New Component

1. Create component file in `src/components/`
2. Use `.astro` for Astro components or `.tsx` for React components
3. Import and use in pages or other components

### Adding a New Page

1. Create file in `src/pages/`
2. Astro uses file-based routing
3. `index.astro` is the home page (`/`)
4. `404.astro` is the 404 page

### Modifying Styles

1. Global styles: `src/styles/global.css`
2. Component styles: Use Tailwind classes or scoped styles in Astro components
3. Tailwind config: `tailwind.config.ts`

## Troubleshooting

If you encounter package manager conflicts:

1. Remove any non-Bun lock files
2. Delete `node_modules/`
3. Run `bun install` to reinstall dependencies
4. Ensure Bun is installed: `bun --version` (should be 1.1.0+)

## Resources

- [Bun Documentation](https://bun.sh/docs)
- [Astro Documentation](https://docs.astro.build)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

