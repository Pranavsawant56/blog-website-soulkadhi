"use client";

import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import Pagination from "../../components/pagination.js";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Fetch blogs from API
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(
          "https://soulkadhi.anubhootee.com/phpserver/recipe.php"
        );
        if (!res.ok) throw new Error("Failed to fetch blogs");

        const data = await res.json();
        // Sort blogs by date (newest first)
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogs(sorted);
      } catch (err) {
        console.error(err);
      }
    }

    fetchBlogs(); 
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);
  return (
    <section className="py-10 px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <h2 className="bg-[#6b3d24] text-white text-lg sm:text-xl px-4 py-1 rounded">
            Blogs
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {currentBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Pagination */}
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
