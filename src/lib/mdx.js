import fs from "fs";
import path from "path";
import matter from "gray-matter";

const recipesDir = path.join(process.cwd(), "src", "content", "recipes");

export async function getRecipeBySlug(slug) {
  const filePath = path.join(recipesDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return { frontmatter: data, content };
}