"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function VideoCard({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Use gsap.context for scoping + automatic cleanup
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 100, opacity: 0 },           // start 100px lower, invisible
        {
          y: 0,                           // animate to natural position
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          clearProps: "transform"         // optional: clear inline transform afterwards
        }
      );
    }, cardRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div
      ref={cardRef}
      // initial inline style prevents flash before GSAP runs
      style={{ transform: "translateY(100px)", opacity: 0 }}
      className="
        flex flex-col items-center

        transform transition-all duration-500 
        ease-[cubic-bezier(0.22,1,0.36,1)]

        hover:scale-[1.07] hover:-translate-y-1 
        hover:bg-(--color-grey-orange) rounded-xl
      "
    >
      {/* Video container */}
      <div
        className="
          w-full rounded-lg overflow-hidden 
          shadow-md transition-all duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          max-w-[320px] sm:max-w-[360px] mx-auto  bg-black/0
        "
      >
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1`}
            title={video?.title || "Video"}
            className="w-full aspect-video"
            allow="autoplay; fullscreen"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        ) : (
          <div
            className="relative cursor-pointer w-full aspect-video overflow-hidden"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={video?.thumbnail || "/placeholder.jpg"}
              alt={video?.title || "Video thumbnail"}
              className="
                w-full h-full object-cover 
                transition-transform duration-700 
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-110
              "
            />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-black"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 4l6 4-6 4V4z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Title */}
      <div className="flex flex-col items-center justify-center mt-1 mb-1 max-w-[320px]">
        <h3 className="text-sm sm:text-base font-semibold text-center text-[#2b1c10] leading-tight">
          {video?.title ? video.title.split("|")[0].trim() : "Untitled Video"}
        </h3>
      </div>
    </div>
  );
}
