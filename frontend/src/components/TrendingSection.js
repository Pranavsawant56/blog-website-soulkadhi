"use client"
import { useState, useEffect } from "react"
import VideoCard from "../components/VideoCard.js"
import { fetchVideos } from "../utils/fetchVideos.js"


export default function TrendingSection() {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        async function loadTrending() {
            try {
                const allVideos = await fetchVideos();

                // helper to convert string numbers with commas to actual numbers
                const parseNumber = (str) => Number(str?.replace(/,/g, "") || 0);

                // sort by total engagement = views + likes + comments
                const sorted = [...allVideos].sort((a, b) => {
                    const aScore = parseNumber(a.views) + parseNumber(a.likes) + parseNumber(a.comments);
                    const bScore = parseNumber(b.views) + parseNumber(b.likes) + parseNumber(b.comments);
                    return bScore - aScore;
                });

                setTrending(sorted.slice(0, 3)); // top 3 trending
            } catch (err) {
                console.error("❌ Failed to load trending videos:", err);
            }
        }

        loadTrending();
    }, []);

    return (
        <section className="py-4 px-4 sm:px-8 lg:px-16 xl:px-24" style={{ backgroundColor: "var(--color-pastel-greyorange)" }}>
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center flex-1">
                        <h2 className="bg-[#6b3d24] text-white text-lg sm:text-xl font-bold px-4 py-1 rounded font-['poppins']">
                            TRENDING VIDEOS
                        </h2>
                        <div className="flex-1 border-t-4 border-dotted border-[#6b3d24] ml-3"></div>
                    </div>

                    <a
                        href="/videos.html?filter=trending"
                        className="bg-[#7b4b2a] text-white font-semibold font-['poppins'] text-base px-4 py-2 rounded hover:bg-[#5f341e] transition ml-4"
                    >
                        See All
                    </a>
                </div>

                {trending.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {trending.map((video) => (
                            <VideoCard key={video.videoId} video={video} />
                        ))}
                    </div>
                ) : (
                    <p className="text-[#6b3d24] text-sm font-['poppins']">
                        Loading trending videos...
                    </p>
                )}
            </div>
        </section>
    );
}



