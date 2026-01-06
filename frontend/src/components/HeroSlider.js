"use client";

import { useEffect, useState } from "react";
import { fetchVideos } from "../utils/fetchVideos.js";

export default function HeroSlider() {
    const [videos, setVideos] = useState([]);
<<<<<<< HEAD
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isAnimating, setIsAnimating] = useState(true);
    const isTransitioning = useRef(false); // ✅ prevent multiple fast clicks

    // 🔹 Load videos
    useEffect(() => {
        async function load() {
            const data = await fetchVideos();
            const filtered = data.filter(
                (v) => !v.title.toLowerCase().includes("intro")
            );
            const three = filtered.slice(0, 3);
            setVideos(three);
            setCurrentIndex(1); // start from first real slide
        }
        load();
    }, []);

    // 🔹 Create cloned slides (infinite)
    const slides = useMemo(() => {
        if (videos.length === 0) return [];
        return [videos[videos.length - 1], ...videos, videos[0]];
    }, [videos]);

    // 🔹 Auto-slide
    useEffect(() => {
        if (slides.length === 0) return;

        const timer = setInterval(() => {
            goRight();
        }, 15000);

        return () => clearInterval(timer);
    }, [slides]);

    // 🔹 Safe slide functions
    const goRight = () => {
        if (isTransitioning.current) return; // ignore clicks while transitioning
        setIsAnimating(true);
        setCurrentIndex((i) => i + 1);
        isTransitioning.current = true;
    };

    const goLeft = () => {
        if (isTransitioning.current) return;
        setIsAnimating(true);
        setCurrentIndex((i) => i - 1);
        isTransitioning.current = true;
    };

    // 🔹 Handle infinite reset
    const handleTransitionEnd = () => {
        isTransitioning.current = false; // allow next click
        if (currentIndex === slides.length - 1) {
            setIsAnimating(false);
            setCurrentIndex(1); // fake first → real first
        }
        if (currentIndex === 0) {
            setIsAnimating(false);
            setCurrentIndex(slides.length - 2); // fake last → real last
        }
    };

    // 🔹 Re-enable animation after jump
    useEffect(() => {
        if (!isAnimating) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsAnimating(true));
            });
        }
    }, [isAnimating]);

    if (videos.length === 0) return null;

    return (
        <div className="w-full h-[500px] sm:h-[300px] md:h-[400px] relative overflow-hidden bg-black">

            {/* SLIDER */}
            <div
                onTransitionEnd={handleTransitionEnd}
                className={`flex h-full ${isAnimating ? "transition-transform duration-700 ease-in-out" : ""}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((vid, i) => (
                    <div key={i} className="w-full h-full shrink-0 relative">
=======
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
>>>>>>> parent of cad8d1e (update slider)
                        <iframe
                            src={`https://www.youtube.com/embed/${vid.videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${vid.videoId}&start=20`}
                            allow="autoplay; fullscreen"
                            frameBorder="0"
                            className="absolute top-0 left-0 w-[100%] h-full pointer-events-none"
                            style={{
<<<<<<< HEAD
                                width: "100%",
=======
                                width: "",
>>>>>>> parent of cad8d1e (update slider)
                                height: "56.25vw",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        ></iframe>
<<<<<<< HEAD
                        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent" />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white px-8 py-3 rounded-xl text-2xl font-semibold text-center w-full max-w-[80%]">
                            {vid.title.split("|")[0]}
                        </div>
=======
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

>>>>>>> parent of cad8d1e (update slider)
                    </div>
                ))}
            </div>

<<<<<<< HEAD
            {/* LEFT BUTTON */}
            <button
                onClick={goLeft}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70"
=======
            {/* Left Arrow */}
            <button
                onClick={goLeft}
                className="absolute left-3 top-1/2 -translate-y-1/2 
                bg-black/40 text-white p-3 rounded-full hover:bg-black/70"
>>>>>>> parent of cad8d1e (update slider)
            >
                ◀
            </button>

<<<<<<< HEAD
            {/* RIGHT BUTTON */}
            <button
                onClick={goRight}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70"
=======
            {/* Right Arrow */}
            <button
                onClick={goRight}
                className="absolute right-3 top-1/2 -translate-y-1/2 
                bg-black/40 text-white p-3 rounded-full hover:bg-black/70"
>>>>>>> parent of cad8d1e (update slider)
            >
                ▶
            </button>

<<<<<<< HEAD
            {/* DOTS */}
=======
            {/* Dots */}
>>>>>>> parent of cad8d1e (update slider)
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {videos.map((_, i) => (
                    <div
                        key={i}
<<<<<<< HEAD
                        onClick={() => {
                            if (isTransitioning.current) return;
                            setCurrentIndex(i + 1);
                            isTransitioning.current = true;
                        }}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all ${currentIndex === i + 1 ? "bg-white scale-125" : "bg-white/50"
                            }`}
                    />
=======
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all
                            ${i === currentIndex ? "bg-white scale-125" : "bg-white/50"}
                        `}
                    ></div>
>>>>>>> parent of cad8d1e (update slider)
                ))}
            </div>
        </div>
    );
}
