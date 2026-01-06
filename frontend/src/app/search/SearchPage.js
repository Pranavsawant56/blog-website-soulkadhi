"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { fetchVideos } from "@/utils/fetchVideos";
import VideoCard from "@/components/VideoCard";
import { Search } from "lucide-react";

export default function SearchPage() {
    const params = useSearchParams();
    const router = useRouter();
    const query = params.get("query")?.toLowerCase().trim() || "";

    const [allVideos, setAllVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const videosPerPage = 12;

    // Local state for search input in search page
    const [searchText, setSearchText] = useState(query);

    // Fetch videos
    useEffect(() => {
        async function load() {
            const data = await fetchVideos();
            setAllVideos(data);
            setLoading(false);
        }
        load();
    }, []);

    // Reset page and update search input when new query comes
    useEffect(() => {
        setCurrentPage(1);
        setSearchText(query);
    }, [query]);

    if (loading) return <p className="p-4">Loading...</p>;

    // Filter results
    const results = allVideos.filter((video) => {
        const title = video.title?.toLowerCase() || "";
        let description = video.description?.toLowerCase() || "";

        description = description.replace(/namaste.*\n?/i, "");
        description = description.replace(/do watch till the end.*\n?/i, "");
        description = description.replace(/🎥.*\n?/i, "");
        description = description.replace(/⏱️ Video Timeline.*\n?/i, "");
        description = description.replace(/📺 Watch our all episodes.*\n?/i, "");
        description = description.replace(/🙏 Please Like, Share.*\n?/i, "");
        description = description.replace(/#.*\n?/g, "");

        return title.includes(query) || description.includes(query);
    });

    // Pagination calculations
    const totalPages = Math.ceil(results.length / videosPerPage);
    const startIndex = (currentPage - 1) * videosPerPage;
    const currentVideos = results.slice(startIndex, startIndex + videosPerPage);

    // Handle search form submit
    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchText.trim()) return;
        router.push(`/search?query=${encodeURIComponent(searchText)}`);
    };

    return (
        <div className="py-10 px-4 sm:px-8 lg:px-16 xl:px-24">
            {/* HEADER */}
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
                Search results for:{" "}
                <span className="text-[#9b5935]">"{query}"</span>
            </h1>

            {/* FIXED SEARCH BAR */}
            <div className="flex justify-center mb-6">
                <form
                    onSubmit={handleSearch}
                    className="relative w-full max-w-md"
                >
                    <input
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search"
                        className="w-full p-3 pr-12 text-black text-md rounded-2xl bg-white border border-gray-300 outline-none shadow-sm"
                    />
                    <button
                        type="submit"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
                    >
                        <Search className="w-5 h-5" />
                    </button>
                </form>
            </div>

            {results.length === 0 && (
                <p className="text-gray-500 text-center">No videos found</p>
            )}

            {/* VIDEO GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">
                {currentVideos.map((video) => (
                    <VideoCard key={video.videoId} video={video} />
                ))}
            </div>

            {/* PAGINATION */}
            {results.length > videosPerPage && (
                <div className="flex justify-center items-center gap-10 mt-12">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((p) => p - 1)}
                        className="px-4 py-2 bg-[#6b3d24] rounded disabled:opacity-40"
                    >
                        Previous
                    </button>

                    <span className="text-lg font-semibold text-black">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((p) => p + 1)}
                        className="px-4 py-2 bg-[#6b3d24] rounded disabled:opacity-40"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
