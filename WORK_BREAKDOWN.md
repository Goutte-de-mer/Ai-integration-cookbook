# Work Breakdown

Independent work items. Each can be picked up by a different dev.  
Mark your name + branch next to a task when you start it.

---

## 1. Category System

> Group recipes into browsable categories.

- Define category list (e.g. Text, Vision, Audio, Code, Data)
- Add `category` field to recipe MDX frontmatter
- Create `src/lib/categories.js` — category definitions (id, label, icon, description)
- Build `/categories/[slug]` page — lists all recipes in a category
- Add category filter to `SearchFilter` component
- Show category badge on `RecipeCard`

**Files:** `lib/categories.js`, `app/categories/[slug]/page.jsx`, `SearchFilter.jsx`, `RecipeCard.jsx`  
**Branch:** `feat/category-system`

---

## 2. Recipe Content (MDX)

> Write the actual recipes. Can be split per recipe — each is one MDX file.

| Recipe | Category | Difficulty | Assignee |
|--------|----------|------------|----------|
| Text Summarization | Text | Beginner | |
| Text Classification | Text | Beginner | |
| Entity Extraction (NER) | Text | Intermediate | |
| Sentiment Analysis | Text | Beginner | |
| Image Description | Vision | Intermediate | |
| Code Generation | Code | Intermediate | |
| Translation | Text | Beginner | |
| Structured Data Extraction (JSON) | Data | Intermediate | |
| Chatbot / Conversational | Text | Advanced | |
| RAG (Retrieval-Augmented Gen) | Data | Advanced | |

Each recipe = one MDX file in `src/content/recipes/`. Follow template in CONTRIBUTING.md.  
**Branch per recipe:** `feat/recipe-<slug>`

---

## 3. Search & Filter UI

> Homepage search bar + filter dropdowns.

- Text search across recipe title, description, tags
- Filter by: category, difficulty, model
- Client-side filtering (no backend)
- Clear filters button
- URL query params so filters are shareable

**Files:** `SearchFilter.jsx`, `page.jsx` (homepage)  
**Branch:** `feat/search-filter`

---

## 4. Code Block Component

> Syntax-highlighted, tabbed code snippets with copy button.

- Tabs: Python / Node.js / curl
- Syntax highlighting (use `prism-react-renderer` or `highlight.js`)
- One-click copy to clipboard
- Line numbers (optional toggle)

**Files:** `CodeBlock.jsx`  
**Branch:** `feat/code-block`

---

## 5. Token Counter & Cost Estimator

> Static widget showing estimated tokens + cost per model for a given input.

- Textarea where user pastes text
- Model selector
- Show: token count, input cost, estimated output cost
- Use `lib/tokens.js` for estimation
- Pull pricing from `lib/models.js`
- Purely client-side — no API calls

**Files:** `CostEstimator.jsx`  
**Branch:** `feat/cost-estimator`

---

## 6. Layout, Nav & Design System

> Global layout, navigation, responsive design.

- Navbar: logo, links (Home, Categories, Cost Estimator)
- Mobile hamburger menu
- Footer
- UI primitives in `components/ui/` (Button, Badge, Input, Select, Card)
- Light/dark mode (stretch goal)

**Files:** `app/layout.jsx`, `components/ui/*`  
**Branch:** `feat/layout-nav`

---

## 7. MDX Pipeline

> Load and render recipe MDX files as pages.

- Set up `next-mdx-remote` or `@next/mdx`
- Parse frontmatter (title, slug, category, difficulty, etc.)
- Generate recipe index from filesystem
- Wire up `app/recipes/[slug]/page.jsx` to load MDX content
- Pass frontmatter to page components

**Files:** `lib/mdx.js`, `app/recipes/[slug]/page.jsx`  
**Branch:** `feat/mdx-pipeline`

---

## Dependency Map

Some tasks depend on others. This shows what can run in parallel.

```
Independent (start anytime):
  - 4. Code Block
  - 6. Layout, Nav & Design System
  - 7. MDX Pipeline

Needs MDX Pipeline (#7):
  - 2. Recipe Content
  - 1. Category System

Needs Category System (#1) + MDX Pipeline (#7):
  - 3. Search & Filter

Independent:
  - 5. Cost Estimator
```

---

## How to Pick a Task

1. Check this file — pick an unassigned task
2. Write your name + date next to it
3. Branch off `main` using the branch name listed
4. Work, commit with conventional prefixes
5. PR into `main` when done
