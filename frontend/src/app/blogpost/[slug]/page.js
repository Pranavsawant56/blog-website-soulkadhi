import BlogPostClient from "./BlogPostClient";

// ✅ 1. Get all slugs for static build
export async function generateStaticParams() {
  const res = await fetch(
    "https://soulkadhi.anubhootee.com/phpserver/recipe.php"
  );

  if (!res.ok) return [];

  const blogs = await res.json();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}


// ✅ 2. Page for each slug
export default async function RecipePage({ params }) {
  const { slug } = params;

  // fetch ALL recipes
  const res = await fetch(
    "https://soulkadhi.anubhootee.com/phpserver/recipe.php",
    { cache: "no-store" }
  );

  if (!res.ok) return <p>Blog not found</p>;

  const blogs = await res.json();

  // find only the blog matching slug
  const recipe = blogs.find((blog) => blog.slug === slug);

  if (!recipe) return <p>Blog not found</p>;

  return <BlogPostClient blog={recipe} />;
}
