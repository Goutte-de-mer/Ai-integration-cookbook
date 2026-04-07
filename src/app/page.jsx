import { CATEGORIES } from "@/lib/categories";

export default function Home() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Recipes</h2>
      <p className="mb-8 text-gray-600">
        Browse copy-paste AI recipes. Pick a category to get started.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat) => (
          <a
            key={cat.id}
            href={`/categories/${cat.id}`}
            className="block rounded-lg border p-5 transition hover:shadow-md"
          >
            <span className="text-3xl">{cat.icon}</span>
            <h3 className="mt-2 font-semibold">{cat.label}</h3>
            <p className="mt-1 text-sm text-gray-600">{cat.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
