"use client";

import { useSearchParams } from "next/navigation";
import blogsData from "@/blog.json";
import BlogCard from "@/components/BlogCard";

export default function CategoriesPage() {
  const searchParams = useSearchParams();
  const types = searchParams.get("types")?.toLowerCase(); // read category from URL

  // Filter blogs: case-insensitive, works with array categories
  const filteredBlogs = blogsData.blogs.filter((blog) =>
    blog.category?.some((c) => c.toLowerCase() === types)
  );

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8 capitalize">
          {types || "All"} Blogs
        </h1>

        {filteredBlogs.length === 0 ? (
          <p className="text-gray-500">No blogs found for "{types}" category.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
