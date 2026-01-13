"use client";

import { useEffect, useState } from "react";
import { fetchVideos } from "../utils/fetchVideos.js";
import VideoCard from "../components/VideoCard.js";
import Line from "../components/Line.js"
import Image from "next/image.js";


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
        <section className=" pt-10 px-4 sm:px-8 lg:px-16 xl:px-24"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header row with title and See All button */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center flex-1">
                        <Image src="/images/material/leaf5.png"
                            width={50}
                            height={50}
                            alt="leaf 
                                       "  />
                        <h3 className=" text-black text-lg sm:text-xl  mt-3 py-1 rounded ">
                            Latest Videos
                        </h3>
                        <span className="flex-grow  ml-1 mt-6 h-[2px] bg-gradient-to-r 
                        from-[#a0522d] via-[#a0522d]/90 to-transparent ${className}"></span>
                    </div>

                    {/* See All Button */}
                    <a
                        href="/videos"
                        className=" text-black  px-4 pt-5 rounded  transition ml-4"
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
