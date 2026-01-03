"use client";

import { useEffect, useState } from "react";
import { fetchVideos } from "../utils/fetchVideos.js";
import VideoCard from "../components/VideoCard.js";


export default function LatestVideoSection() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function loadVideos() {
            const data = await fetchVideos();
            setVideos(data.slice(0, 6));
        }
        loadVideos();
    }, []);

    return (
        <section className=" py-10 px-4 sm:px-8 lg:px-16 xl:px-24"
          >
            <div className="max-w-6xl mx-auto">
                {/* Header row with title and See All button */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center flex-1">
                        <h2 className="bg-[#6b3d24] text-white text-lg sm:text-xl font-bold px-4 py-1 rounded ">
                            Latest Video
                        </h2>
                        <div className="flex-1 border-t-2 border-dotted border-[#6b3d24] ml-3 mt-7"></div>
                    </div>

                    {/* See All Button */}
                    <a
                        href="/videos"
                        className=" text-[#6b3d24]  px-4 py-2 rounded  transition ml-4"
                    >
                        See All
                    </a>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {videos.map((video) => (
                        <VideoCard key={video.videoId} video={video} />
                    ))}
                </div>
            </div>
        </section>
    );
}
