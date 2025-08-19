## Ritesh.dev – Portfolio

Professional, componentized React + Vite portfolio with Tailwind CSS, Framer Motion, and a clean, scalable structure.

### Tech
- React 19 (Vite)
- Tailwind CSS
- Framer Motion
- ESLint (modern config)

### Scripts
- dev: local development server
- build: production build
- preview: preview the build
- lint: run ESLint

### Project Structure
```
src/
  assets/                # static assets
  components/            # shared UI components, feature components
    ui/                  # design-system primitives (badge, button, card)
  data/                  # data/constants for the site
  layouts/               # layout-level components (Navbar, Footer)
  lib/                   # utilities (animations, helpers)
  sections/              # page sections (Hero, Skills, Experience...)
  index.css              # global styles and tokens
  main.jsx               # app bootstrap
  App.jsx                # page composition
```

### Conventions
- Absolute imports via `@` pointing to `src`
- Co-locate section-specific logic in `src/sections`
- Keep UI primitives generic and reusable in `src/components/ui`

### Develop
```bash
npm i
npm run dev
```
