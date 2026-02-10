"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/pagination";
import { Search } from "lucide-react";

export default function SearchPage() {
    const params = useSearchParams();
    const router = useRouter();
    const query = params.get("query")?.toLowerCase().trim() || "";

    const [allBlogs, setAllBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    const [searchText, setSearchText] = useState(query);

    // 🔄 Fetch blogs from API
    useEffect(() => {
        async function fetchBlogs() {
            try {
                const res = await fetch(
                    "https://soulkadhi.anubhootee.com/phpserver/recipe.php"
                );
                if (!res.ok) throw new Error("Failed to fetch blogs");

                const data = await res.json();
                setAllBlogs(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchBlogs();
    }, []);

    // Reset page when search query changes
    useEffect(() => {
        setCurrentPage(1);
        setSearchText(query);
    }, [query]);

    if (loading) return <p className="p-4">Loading...</p>;

    // 🔎 Search Logic
    const results = allBlogs.filter((blog) => {
        const heading = blog.heading?.toLowerCase() || "";
        const shortInfo = blog.short_info?.toLowerCase() || "";
        const intro = blog.introduction?.toLowerCase() || "";
        const history = blog.history?.toLowerCase() || "";

        const categories = blog.category || [];
        const categoryMatch = categories.some((cat) =>
            cat.toLowerCase().includes(query)
        );

        return (
            heading.includes(query) ||
            shortInfo.includes(query) ||
            intro.includes(query) ||
            history.includes(query) ||
            categoryMatch
        );
    });

    // 📄 Pagination Logic
    const totalPages = Math.ceil(results.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentBlogs = results.slice(startIndex, startIndex + itemsPerPage);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchText.trim()) return;
        router.push(`/search?query=${encodeURIComponent(searchText)}`);
    };

    return (
        <div className="max-w-6xl m-auto py-10 px-4 sm:px-8 lg:px-16 xl:px-24">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
                Search results for:{" "}
                <span className="text-[#9b5935]">"{query}"</span>
            </h1>

            {/* Search Bar */}
            <div className="max-w-6xl w-full m-auto flex justify-center mb-6">
                <form onSubmit={handleSearch} className="relative w-full">
                    <input
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search blogs..."
                        className="w-full p-3 pr-12 pl-20 text-center text-black text-md rounded-2xl bg-white border border-gray-300 outline-none shadow-sm"
                    />
                    <button
                        type="submit"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
                    >
                        <Search className="w-5 h-5" />
                    </button>
                </form>
            </div>

            {/* No Results */}
            {results.length === 0 && (
                <p className="text-gray-500 text-center">No blogs found</p>
            )}

            {/* Blog Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto max-w-6xl">
                {currentBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>

            {/* Pagination Component */}
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
    );
}
