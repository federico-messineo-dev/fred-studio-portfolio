# Developer Commands

- `npm run dev` - Start dev server on port 3000
- `npm run build` - Production build
- `npm run lint` - TypeScript type-check only (tsc --noEmit)

# Key Quirks

- Vite base path: `/fred-studio-portfolio/` locally, `/` on Vercel (detected via `VERCEL` env var)
- Tailwind v4 uses `@tailwindcss/vite` plugin (no tailwind.config.js)
- Custom cursor component in `src/components/CustomCursor.tsx`
- 3D Rubik's cube in `src/components/RubiksCube.tsx` (three.js)
- Motion animations via `motion` library (formerly framer-motion renamed)
- Language context (`src/context/LanguageContext.tsx`) for i18n - check this before adding UI strings

# Architecture

- Single React SPA with react-router-dom
- Entry: `src/main.tsx` → `src/App.tsx`
- Pages in `src/pages/`, components in `src/components/`
- Express server not included (API routes available as optional)

# Environment

- `GEMINI_API_KEY` for AI features (loaded via dotenv in vite.config.ts)
- Set via `.env` file in root (not committed)