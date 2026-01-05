"use client";

import { useEffect, useState } from "react";
import { fetchVideos } from "../utils/fetchVideos.js";

export default function HeroSlider() {
    const [videos, setVideos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // 🔹 Load 3 videos and pick random start (excluding intro)
    useEffect(() => {
        async function load() {
            const data = await fetchVideos();

            const filtered = data.filter(v =>
                !v.title.toLowerCase().includes("intro")
            );

            const three = filtered.slice(0, 3);
            setVideos(three);

            setCurrentIndex(Math.floor(Math.random() * three.length));
        }
        load();
    }, []);

    // 🔹 Auto-slide every 15s
    useEffect(() => {
        if (videos.length === 0) return;

        const timer = setInterval(() => {
            setCurrentIndex((i) => (i + 1) % videos.length);
        }, 15000);

        return () => clearInterval(timer);
    }, [videos]);

    if (videos.length === 0) return null;

    const goLeft = () =>
        setCurrentIndex((i) => (i - 1 + videos.length) % videos.length);

    const goRight = () =>
        setCurrentIndex((i) => (i + 1) % videos.length);

    return (
        <div className="relative w-full h-[500px] overflow-hidden bg-black">

            {/* Slider Wrapper */}
            <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {videos.map((vid, i) => (
                    <div key={vid.videoId} className="w-full h-full shrink-0 relative">

                        {/* Video */}
                        <iframe
                            src={`https://www.youtube.com/embed/${vid.videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${vid.videoId}&start=20`}
                            allow="autoplay; fullscreen"
                            frameBorder="0"
                            className="absolute top-0 left-0 w-[100%] h-full pointer-events-none"
                            style={{
                                width: "",
                                height: "56.25vw",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        ></iframe>
                        {/* 🔥 BOTTOM BLACK GRADIENT OVERLAY */}
                        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black/100    to-transparent" />
                        {/* Title overlay - centered perfectly */}
                        <div
                            className="
                                 absolute bottom-4 left-1/2 -translate-x-1/2
                               text-white 
                                 px-8 py-3 rounded-xl 
                                 text-2xl font-semibold font-[Poppins]
                                 text-center w-full max-w-[80%]
                                  " >

                            {vid.title.split("|")[0]}

                        </div>

                    </div>
                ))}
            </div>

            {/* Left Arrow */}
            <button
                onClick={goLeft}
                className="absolute left-3 top-1/2 -translate-y-1/2 
                bg-black/40 text-white p-3 rounded-full hover:bg-black/70"
            >
                ◀
            </button>

            {/* Right Arrow */}
            <button
                onClick={goRight}
                className="absolute right-3 top-1/2 -translate-y-1/2 
                bg-black/40 text-white p-3 rounded-full hover:bg-black/70"
            >
                ▶
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {videos.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all
                            ${i === currentIndex ? "bg-white scale-125" : "bg-white/50"}
                        `}
                    ></div>
                ))}
            </div>
        </div>
    );
}
