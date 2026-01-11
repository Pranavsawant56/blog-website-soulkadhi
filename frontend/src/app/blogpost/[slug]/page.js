import blogsData from "@/blog.json";
import BlogPostClient from "./BlogPostClient";

export function generateStaticParams() {
  return blogsData.blogs.map(blog => ({
    slug: blog.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const blog = blogsData.blogs.find(
    (b) => b.slug === slug
  );

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return <BlogPostClient blog={blog} />;
}
