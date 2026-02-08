"use client";

import { useEffect, useState, useContext } from "react";
import { fetchVideos } from "../../utils/fetchVideos";
import VideoCard from "../../components/VideoCard";
import { LoaderContext } from "@/context/LoaderContext"; 
import Pagination from "../../components/pagination";


export default function VideosPage() {
    
    const { setHasLoaded } = useContext(LoaderContext); 
    const [videos, setVideos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    useEffect(() => {
    async function loadVideos() {
      try {
        const data = await fetchVideos();

        const searchParams = new URLSearchParams(window.location.search);
        const filter = searchParams.get("filter");

        let sorted = [...data];

        // Convert "1,234" → 1234
        const parseNumber = (str) => Number(str?.replace(/,/g, "") || 0);

        if (filter === "trending") {
          sorted.sort((a, b) => {
            const aScore =
              parseNumber(a.views) +
              parseNumber(a.likes) +
              parseNumber(a.comments);
            const bScore =
              parseNumber(b.views) +
              parseNumber(b.likes) +
              parseNumber(b.comments);
            return bScore - aScore;
          });
        } else {
          sorted.sort(
            (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
          );
        }

        setVideos(sorted);
      } catch (err) {
        console.error("Video fetch error:", err);
      } finally {
        setHasLoaded(true); // ✅ VERY IMPORTANT — stops loader
      }
    }

    loadVideos();
  }, [setHasLoaded]);

    const totalPages = Math.ceil(videos.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentVideos = videos.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section
            className="py-10 px-4 sm:px-8 lg:px-16 xl:px-24"

        >
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="flex items-center justify-center mb-6">
                    <h2 className="bg-[#6b3d24] text-white text-lg sm:text-xl px-4 py-1 rounded ">
                        Videos
                    </h2>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {currentVideos.map((video) => (
                        <VideoCard key={video.videoId} video={video} />
                    ))}
                </div>

               
                {/* Pagination */}
                <div className="flex justify-center mt-12">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />


                </div>
            </div>
        </section>
    );
}
