import BlogCard from "@/components/BlogCard";

export default async function BlogListPage() {
  // Fetch all blogs from API
  const res = await fetch(
    "https://soulkadhi.anubhootee.com/phpserver/recipe.php",
    { cache: "no-store" }
  );

  if (!res.ok) return <p>No blogs found</p>;

  const blogs = await res.json();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {blogs.map(blog => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
    </div>
  );
}
