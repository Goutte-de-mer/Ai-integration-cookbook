import { getCategoryById, CATEGORIES } from "@/lib/categories";

/**
 * /categories/[slug] — lists all recipes belonging to a category.
 * Recipes will be loaded from MDX once the MDX pipeline is in place.
 */

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ slug: cat.id }));
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = getCategoryById(slug);

  if (!category) {
    return <p>Category not found.</p>;
  }

  return (
    <div>
      <div className="mb-6">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="mt-2 text-2xl font-semibold">{category.label}</h2>
        <p className="text-gray-600">{category.description}</p>
      </div>

      {/* TODO: load recipes filtered by category, render RecipeCard list */}
      <p className="text-sm text-gray-400">
        No recipes yet. Check back once the MDX pipeline is wired up.
      </p>
    </div>
  );
}
