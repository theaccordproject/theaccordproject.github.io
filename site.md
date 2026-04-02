# The Accord Project — Site Spec

## Purpose

Marketing and landing page for The Accord Project, a parent organization behind a suite of software products. The site introduces the brand, communicates the mission, and showcases each product to drive interest and adoption.

The primary products are:

- **AccordPAY** — Payment portal for organizations
- **TapONE** — Church management software
- **TapAPP** — Church member app
- More products may be added over time

---

## Structure

One-page app. Navigation links scroll to sections. No route changes.

### Sections (in order)

1. **Hero** — Brand statement, tagline, primary CTA
2. **About** — Who The Accord Project is and what it stands for
3. **Products** — Cards or feature blocks for each product
4. **Features** — Shared platform capabilities (billing, member management, reporting, etc.)
5. **Pricing** *(optional per product)* — Plans and tiers
6. **Early Access** — Honest "be among the first" section; no fake reviews or stats until real ones exist
7. **Contact / CTA** — Get started, request a demo, or contact form

---

## Design

### Tone

Clean, trustworthy, professional. Appeals to churches, nonprofits, and community organizations. Warm but not casual.

### Layout

- Max content width: ~1200px, centered
- Full-width section backgrounds to create visual separation
- Generous whitespace between sections
- Sticky top navigation bar with logo and anchor links

---

## Color System

### Theme Palette

| Name | Hex | Usage |
|------|-----|-------|
| White | `#FFFFFF` | Page background, card backgrounds |
| Warm White | `#F1EDE6` | Alternate section backgrounds |
| Light Sand | `#EBE3DB` | Subtle dividers, input backgrounds |
| Mid Sand | `#D1C7BD` | Borders, muted UI elements |
| Tan | `#CBAD8D` | Accent highlights, icons |
| Brown | `#A48374` | Secondary text, decorative elements |
| Dark Brown | `#3A2D28` | Headings, nav, footer |
| Black | `#000000` | Body text when maximum contrast needed |

### Alert / Status Colors

| Intent | Background | Border/Accent |
|--------|-----------|---------------|
| Info | `#bfdbfe` | `#60a5fa` |
| Success | `#bbf7d0` | `#4ade80` |
| Warning | `#fde68a` | `#fbbf24` |
| Danger | `#fecaca` | `#f87171` |

Alert colors are used for status badges, notifications, form validation, and product feature callouts only — not as primary brand colors.

---

## Typography

- **Headings** — Large, confident. Semi-bold or medium weight. Dark Brown `#3A2D28` or Black.
- **Body** — Comfortable reading size (16–18px). Color: `#3A2D28` or `#A48374` for muted text.
- **Labels / Captions** — Smaller, uppercase tracking for section labels or eyebrow text.
- Font stack: system-ui or a clean humanist sans-serif (Inter, DM Sans, or similar).

---

## Components

### Navigation
- Sticky, white background with subtle bottom border (`#D1C7BD`)
- Logo left, anchor links right
- Mobile: hamburger menu

### Hero
- Full-width section, white or Warm White (`#F1EDE6`) background
- Large headline + supporting paragraph + 1–2 CTA buttons
- Primary button: Dark Brown `#3A2D28` fill, white text
- Secondary button: outlined, Dark Brown border

### Product Cards
- White background, `#D1C7BD` border, subtle box shadow
- Product name, short description, key features list, and a "Learn more" or "Get started" link
- Hover state: slight elevation or border color shift to Tan `#CBAD8D`

### Feature Blocks
- Alternating layout: image/icon left + text right, then flip
- Icon color: Tan `#CBAD8D` or Brown `#A48374`

### Footer
- Dark Brown `#3A2D28` background, light text
- Links to products, legal, contact
- Copyright line

---

## Rules

1. **One page only** — all content lives on `index` via scroll, no routing
2. **White is the base** — sections may use Warm White or Light Sand as alternating backgrounds, never dark backgrounds in the main flow (footer excepted)
3. **Alert colors are functional** — use them only for status indicators, badges, or callouts, not as decorative brand colors
4. **Theme palette drives all design decisions** — do not introduce colors outside the theme palette or alert palette
5. **Mobile first** — all layouts must be responsive; stack columns on small screens
6. **No placeholder content in production** — every section must have real copy before deploy
7. **Tailwind utility classes** — all styling via Tailwind; avoid inline styles and custom CSS unless Tailwind cannot achieve the result
8. **Accessible contrast** — all text on colored backgrounds must meet WCAG AA contrast ratios
