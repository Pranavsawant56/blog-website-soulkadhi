"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { fetchVideos } from "../utils/fetchVideos.js";

export default function HeroSlider() {
  const [videos, setVideos] = useState([]);
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
            <iframe
              src={`https://www.youtube.com/embed/${vid.videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${vid.videoId}&start=20`}
              allow="autoplay; fullscreen"
              frameBorder="0"
              className="absolute pointer-events-none"
              style={{
                width: "100%",
                height: "56.25vw",
                minHeight: "100%",
                minWidth: "177.77vh",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white px-8 py-3 rounded-xl text-2xl font-semibold text-center w-full max-w-[80%]">
              {vid.title.split("|")[0]}
            </div>
          </div>
        ))}
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={goLeft}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70"
      >
        ◀
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={goRight}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70"
      >
        ▶
      </button>

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {videos.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              if (isTransitioning.current) return;
              setCurrentIndex(i + 1);
              isTransitioning.current = true;
            }}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
              currentIndex === i + 1 ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
