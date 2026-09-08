# theaccordproject.github.io

The Accord Project's website, advertising its sole product, TAP Business. The company remains the site's primary brand, with a single-product marketing page focused on collecting email subscribers. Built with React and Vite and deployed to GitHub Pages via the `gh-pages` npm package.

## Tech stack

- **React 19** - UI framework
- **Vite 8** - build tool and dev server with HMR
- **Tailwind CSS v4** - utility-first CSS, integrated via `@tailwindcss/vite` plugin
- **ESLint** - linting with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- **gh-pages** - deployment to GitHub Pages

## Project initialization

Bootstrapped with the official Vite React template:

```bash
npm create vite@latest theaccordproject.github.io -- --template react
```

## Local development

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173` with hot module replacement enabled.

### Email subscriptions

Copy `.env.example` to `.env.local` and set `VITE_SUBSCRIBE_URL` to the subscription API URL before building. Vite embeds this public endpoint in the client bundle; do not put secrets in this value. The API must accept a JSON POST containing `{ "email": "subscriber@example.com" }`, support requests from the site's origin, and return a successful HTTP status only when the subscription is accepted.

Both signup forms use the same component. Failed requests, timeouts, and missing configuration show a retry message rather than a false success. Subscription is the only conversion action; TAP Business accounts and paid modules are not available through this marketing site.

Module prices are labeled as planned. Finalize the TAP Business transaction-fee policy before launch.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across all JS/JSX files |
| `npm run deploy` | Build and deploy to GitHub Pages |

## Deployment

The site is deployed to GitHub Pages at `https://theaccordproject.github.io/`.

Deployment uses the `gh-pages` package, which pushes the built `dist/` folder to the `gh-pages` branch. GitHub Pages is configured to serve from that branch.

```bash
npm run deploy
```

This runs `predeploy` (which runs `npm run build`) automatically before pushing.

### Setup notes

- `vite.config.js` sets `base: '/'` - required because `*.github.io` repos are served from the root, not a subdirectory
- `public/.nojekyll` disables Jekyll processing on GitHub Pages, which is necessary to ensure Vite's built assets are served with the correct MIME types
- GitHub Pages source: **`gh-pages` branch**, root folder

## Project structure

```
├── public/
│   ├── .nojekyll       # Disables Jekyll on GitHub Pages
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/         # Static assets (images, svgs)
│   ├── App.css
│   ├── App.jsx         # Root component
│   ├── index.css
│   └── main.jsx        # Entry point
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## ESLint rules

- `eslint:recommended` baseline
- `eslint-plugin-react-hooks` - enforces Rules of Hooks
- `eslint-plugin-react-refresh` - ensures components are HMR-compatible
- `no-unused-vars` - errors on unused variables, except those matching `^[A-Z_]`
