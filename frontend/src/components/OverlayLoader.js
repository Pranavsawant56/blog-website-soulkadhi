"use client";

export default function FuturisticOverlayLoader() {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
      <div className="relative w-24 h-24">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 border-4 border-t-transparent border-b-transparent border-l-blue-400 border-r-pink-400 rounded-full animate-spin-slow"></div>

        {/* Inner rotating ring opposite */}
        <div className="absolute inset-4 border-4 border-t-transparent border-b-transparent border-l-purple-400 border-r-yellow-400 rounded-full animate-spin-slow-reverse"></div>

        {/* Bouncing dots */}
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-2 -translate-y-2 animate-bounce-delay-0"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-2 -translate-y-2 animate-bounce-delay-200"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-2 -translate-y-2 animate-bounce-delay-400"></div>
      </div>
    </div>
  );
}
