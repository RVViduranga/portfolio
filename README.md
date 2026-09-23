# Rukshan Viduranga — Portfolio

A modern personal portfolio website built with Next.js, TypeScript and Tailwind CSS.

## Features

- Single-page portfolio: Hero, About, Skills, Experience, Projects, Education and Contact
- Featured project layout with a technical architecture overview
- All content in typed data files, so a new project or role means editing one file and no JSX
- Fully static: every route is prerendered at build time, with no backend, database or API calls
- Responsive layouts for mobile, tablet, laptop and desktop
- Accessibility: semantic HTML, a logical heading hierarchy, a skip link, keyboard-friendly navigation, visible focus states and `prefers-reduced-motion` support
- SEO: metadata, Open Graph / X cards, a generated social preview image, a canonical URL, `robots.txt` and `sitemap.xml`
- Placeholder-safe links: any URL still set to a placeholder renders as "not yet available" instead of a broken link

## Tech Stack

| Area       | Technology                                      |
| ---------- | ----------------------------------------------- |
| Framework  | Next.js (App Router, Server Components)         |
| Language   | TypeScript                                      |
| Styling    | Tailwind CSS v4                                 |
| Animation  | Motion (`LazyMotion` + `domAnimation`)          |
| Icons      | Lucide React                                    |
| Fonts      | Geist Sans / Geist Mono via `next/font`         |
| Linting    | ESLint (`eslint-config-next`)                   |

## Project Structure

```text
app/
  layout.tsx            Root layout, fonts, metadata, skip link
  page.tsx              Composes the page sections
  globals.css           Design tokens (Tailwind @theme) and base styles
  opengraph-image.tsx   Social preview image, generated at build time
  icon.svg              Favicon
  robots.ts, sitemap.ts
components/
  Navbar/               Sticky nav with active-section tracking and mobile menu (client)
  Hero/                 Hero section and system overview visual
  About/  Skills/  Experience/  Education/  Contact/  Footer/
  Projects/             Featured project, project cards, preview, architecture diagram
  ui/                   Shared primitives: Section, Container, Badge, LinkButton, Reveal
  icons/                GitHub / LinkedIn / email icons
  providers/            MotionProvider (lazy-loaded animation features, reduced motion)
data/
  site.ts               Profile, contact links and navigation
  projects.ts           Typed project list
  skills.ts  experience.ts  education.ts
lib/
  links.ts              Link helpers (placeholder detection, class names)
public/
  projects/             Project screenshots
```

Components are Server Components by default. Only the navbar, the scroll-reveal wrapper, the motion provider and the copy-email button run on the client.

## Getting Started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Commands

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run build` | Create a production build        |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Run ESLint                       |

### Editing content

- **Contact links:** edit `contact` in `data/site.ts`.
- **Projects:** edit `data/projects.ts`. To add a screenshot, place it in `public/projects/` and set
  `image: { src: "/projects/jobcenter.png", alt: "…", width: 1600, height: 1000 }`.
- **Experience, skills, education, certifications:** edit the matching file in `data/`.

## Environment Variables

The site builds and runs without any environment variables.

| Variable               | Required | Description                                                               |
| ---------------------- | -------- | ------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | No       | Public URL of the deployed site. Used for canonical and Open Graph URLs, `robots.txt` and `sitemap.xml`. On Vercel it defaults to the project's production domain; locally to `http://localhost:3000`. |

Copy `.env.example` to `.env.local` to set it locally.

## Deployment

The site is fully static and deploys to any Next.js host.

**Vercel:** import the repository and deploy. Set `NEXT_PUBLIC_SITE_URL` only if you use a custom domain that isn't the project's primary domain.

**Other hosts / Docker:** run `npm run build` and then `npm run start`, with `NEXT_PUBLIC_SITE_URL` set at build time.

## License

© 2026 Rukshan Viduranga. All rights reserved. The source code may be used as a reference, but the personal content (text, profile details and project descriptions) may not be reused.
