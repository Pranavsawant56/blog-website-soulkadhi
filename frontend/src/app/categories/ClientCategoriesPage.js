"use client";

import { useSearchParams } from "next/navigation";
// import blogsData from "@/blog.json";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/pagination";
import { useState, useEffect } from "react";

export default function CategoriesPage() {
  const searchParams = useSearchParams();

  // Hooks first
  const [types, setTypes] = useState(searchParams.get("types")?.toLowerCase() || "");
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

 
  const normalize = (str) =>
    str.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");


   const filteredBlogs = allBlogs.filter((blog) =>
    blog.category?.some((c) => normalize(c) === types)
  );
  
  // Update types when URL changes
  useEffect(() => {
    setTypes(searchParams.get("types")?.toLowerCase() || "");
  }, [searchParams.toString()]);

  // Fetch blogs
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("https://soulkadhi.anubhootee.com/phpserver/recipe.php", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        setAllBlogs(data || []);
      } catch (err) {
        console.error(err);
        setAllBlogs([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + itemsPerPage);


  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <h2 className="bg-[#6b3d24] text-white text-lg sm:text-xl px-4 py-1 rounded">
            {(types?.replace(/-/g, " ") || "All")} Blogs
          </h2>

        </div>

        {currentBlogs.length === 0 ? (
          <p className="text-gray-500 text-center">
            No blogs found for "{types}" category.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {currentBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </section>
  );
}
