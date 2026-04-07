# AI Integration Cookbook

A static website with interactive, copy-paste code recipes for common AI/LLM use cases.  
Built for dev teams that need to ship AI features — fast, without in-house AI expertise.

## What This Is

A collection of **self-contained, copy-pasteable recipes** for real AI use cases:
- Text summarization, classification, entity extraction, image description, and more
- Working code in **Python**, **Node.js**, and **curl**
- Token counter and cost estimator per model

## Tech Stack

| Layer       | Technology           |
|-------------|----------------------|
| Framework   | Next.js 14 (App Router) |
| Styling     | Tailwind CSS         |
| Language    | JavaScript           |
| Content     | MDX (recipe files)   |
| Deployment  | Static export        |

## Project Structure

```
src/
├── app/                    # Next.js pages (App Router)
│   ├── layout.jsx          # Root layout
│   ├── page.jsx            # Homepage — recipe grid + search
│   ├── globals.css         # Tailwind base styles
│   └── recipes/[slug]/     # Individual recipe pages
├── components/             # Reusable UI components
│   ├── ui/                 # Generic UI primitives
│   ├── CodeBlock.jsx       # Syntax-highlighted, copyable code
│   ├── CostEstimator.jsx   # Token count + cost widget
│   ├── RecipeCard.jsx      # Recipe preview card
│   └── SearchFilter.jsx    # Search + filter controls
├── lib/                    # Utilities
│   ├── models.js           # Model definitions (name, pricing, limits)
│   └── tokens.js           # Token counting helpers
└── content/
    └── recipes/            # Recipe MDX files (one per recipe)
```

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build static site
npm run build
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a Recipe

See [CONTRIBUTING.md](CONTRIBUTING.md) for the recipe template and submission process.

## Git Conventions

| Prefix     | Use for                        |
|------------|--------------------------------|
| `feat:`    | New recipe or feature          |
| `fix:`     | Bug fix                        |
| `docs:`    | Documentation only             |
| `style:`   | Formatting, no logic change    |
| `refactor:`| Code restructure, no new feature |
| `chore:`   | Tooling, deps, config          |

Keep commits atomic — one logical change per commit.

## License

MIT