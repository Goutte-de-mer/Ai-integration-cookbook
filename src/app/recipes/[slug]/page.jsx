import { RECIPES } from "@/lib/recipes";
import { getCategoryById } from "@/lib/categories";
import { getRecipeBySlug } from "@/lib/mdx";
import { MDXRemote } from 'next-mdx-remote/rsc';
import CodeBlock from '@/components/CodeBlock';

// 1. CETTE FONCTION EST OBLIGATOIRE POUR LE MODE STATIQUE
export async function generateStaticParams() {
  // On retourne un tableau d'objets contenant le slug de chaque recette
  // Exemple: [{ slug: 'sentiment-analysis' }, { slug: 'text-classification' }]
  return RECIPES.map((recipe) => ({
    slug: recipe.slug,
  }));
}

const mdxComponents = {
  CodeBlock,
};

export default async function RecipePage({ params }) {
  // Dans Next.js 15+, params est une Promise
  const { slug } = await params;
  
  const recipe = RECIPES.find((r) => r.slug === slug);
  const mdx = await getRecipeBySlug(slug);

  if (!recipe || !mdx) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Recette introuvable</h1>
        <p className="text-gray-500">Le slug "{slug}" ne correspond à aucun fichier MDX.</p>
        <a href="/" className="text-blue-500 underline mt-4 block">Retour à l'accueil</a>
      </div>
    );
  }

  const category = getCategoryById(recipe.category);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <nav className="mb-8 text-sm text-gray-500">
        <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
        {category && (
          <>
            <span className="mx-2 text-gray-300">/</span>
            <a href={`/categories/${category.id}`} className="hover:text-gray-900 transition-colors">
              {category.label}
            </a>
          </>
        )}
        <span className="mx-2 text-gray-300">/</span>
        <span className="text-gray-900 font-medium">{mdx.frontmatter.title}</span>
      </nav>

      <header className="mb-10">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          {mdx.frontmatter.title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          {mdx.frontmatter.description}
        </p>
      </header>

      <article className="prose prose-slate max-w-none 
        prose-headings:font-bold prose-headings:text-gray-900
        prose-a:text-blue-600 hover:prose-a:text-blue-500
        prose-pre:bg-transparent prose-pre:p-0">
        <MDXRemote 
          source={mdx.content} 
          components={mdxComponents} 
        />
      </article>
    </div>
  );
}