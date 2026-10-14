# Portfolio

A one-page personal portfolio built with Next.js, featuring a monochrome editorial design, smooth scrolling, and an interactive hero. Content is file-based, so there is no backend or database to maintain.

**Live site:** TODO: add Vercel URL

## Features

- Single-page layout: Hero, About, Projects, Experience, Contact
- Dark mode by default with a light mode toggle (follows system preference on first visit)
- Interactive hero that reacts to the pointer
- Custom cursor and magnetic buttons (disabled on touch devices)
- Smooth scrolling with Lenis and entrance animations with Motion
- Respects `prefers-reduced-motion`
- Fully responsive, mobile-first
- Content managed through typed files in `/content`, no hardcoded text in components

## Tech Stack

| Area | Tools |
|---|---|
| Framework | Next.js (App Router), TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Motion, Lenis |
| Icons | lucide-react |
| Fonts | Geist Sans, Geist Mono |
| Deployment | Vercel |

## Getting Started

Requirements: Node.js 20 or newer.

```bash
git clone https://github.com/Fjr16/TODO-repo-name.git
cd TODO-repo-name
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint |

## Editing Content

All text and data live in `/content`:

| File | Purpose |
|---|---|
| `profile.ts` | Name, role, bio, social links |
| `projects.ts` | Project list (title, description, stack tags, links) |
| `experience.ts` | Work experience timeline |

Edit a file, commit, and push. Vercel redeploys automatically.

## Project Structure

```
app/            Layout, page, global styles
components/
  sections/     Hero, About, Projects, Experience, Contact
  ui/           Button, Tag, Cursor, ThemeToggle
content/        Typed content files
lib/            Helpers
public/         Static assets
```

## Design

Design decisions (tokens, typography, motion rules, accessibility targets) are documented in [copilot-instruction.md](./copilot-instruction.md).

## Deployment

1. Push the repository to GitHub.
2. Import it in [Vercel](https://vercel.com/new).
3. Keep the default Next.js settings and deploy.

## Roadmap

- [x] Design brief and project setup
- [ ] Base UI components and layout
- [ ] Hero with interactive element
- [ ] Projects, Experience, and Contact sections
- [ ] Performance and accessibility pass (Lighthouse targets: Performance 90+, Accessibility 95+)
- [ ] Optional: WebGL hero with React Three Fiber

## Contact

TODO: add email, LinkedIn, and website.

## License

TODO: choose a license (MIT is a common choice for portfolio code). Note that personal content, text, and images are not covered by the code license unless stated otherwise.