export default async function RecipePage({ params }) {
  const { slug } = await params;
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Recipe: {slug}</h2>
      {/* TODO: load recipe MDX, render CodeBlock, CostEstimator */}
    </div>
  );
}
