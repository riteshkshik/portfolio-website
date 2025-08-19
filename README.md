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

### Environment
Create a `.env` file at the project root with:
```
VITE_WEB3FORMS_ACCESS_KEY=01d5a544-75cd-40b0-bf08-9bfe849db363
```
Never commit actual secrets for production; rotate and inject via your hosting provider’s env settings.

If you see a network error after a successful email, ensure the request includes `Accept: application/json` and that ad-blockers/VPN aren’t interfering.
