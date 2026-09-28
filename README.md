# Dachgeschossausbau Köln

Astro lead-generation site for `dachgeschossausbaukoeln.de`.

## Structure

The site uses a deliberately compact, non-cannibalizing page set:

```text
/
├── docs/                  # SEO research and content architecture
├── public/                # robots.txt and static assets
├── src/
│   ├── components/        # shared header, forms and content layouts
│   ├── data/site.ts        # services, guides and legacy redirects
│   ├── layouts/
│   └── pages/              # current indexable routes
└── vercel.json             # canonical host and redirects
```

The lead forms retain the existing `/api/lead` endpoint and are rendered above the fold and at the end of the homepage and service pages. The source contains no checkout or automatic order acceptance.

## Commands

All commands run from the repository root:

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the Astro development server |
| `npm run build` | Build the production site to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- --help` | Show Astro CLI help |

A successful local build verifies generation only. Deployment, DNS, lead delivery and final legal-data verification remain separate live acceptance checks.
