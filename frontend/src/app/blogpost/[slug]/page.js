import BlogPostClient from "./BlogPostClient";

export const dynamic = "force-dynamic";

export default async function RecipePage({ params }) {
  const { slug } =  await params;
  console.log("slug",slug);
  const res = await fetch(
    "https://soulkadhi.anubhootee.com/phpserver/recipe.php",
    { cache: "no-store" }
  );
console.log("res",res);
  if (!res.ok) return <p>API data not found</p>;

  const blogs = await res.json();
  console.log("blogs",blogs);
  const recipe = blogs.find((blog) => blog.slug === slug);
  console.log("recipe",recipe);

  if (!recipe) return <p>Blog not found</p>;

  return <BlogPostClient blog={recipe} />;
}