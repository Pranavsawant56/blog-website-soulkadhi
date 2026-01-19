import BlogCard from "@/components/BlogCard";
import blogsData from "@/blog.json";

export default function BlogPage() {
  return (
    <section className="py-10 px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <h2 className="bg-[#6b3d24] text-white text-lg sm:text-xl px-4 py-1 rounded">
             Blogs
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {blogsData.blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
