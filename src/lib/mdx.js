import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

const recipesDir = path.join(process.cwd(), "src", "content", "recipes");

/**
 * Load a recipe MDX file by slug.
 * Returns { frontmatter, html } where html is the rendered content.
 */
export async function getRecipeBySlug(slug) {
  const filePath = path.join(recipesDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  return { frontmatter: data, html: String(result) };
}
