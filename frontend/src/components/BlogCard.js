"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", clearProps: "transform" }
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  if (!blog) return null;

  return (
    <Link href={`/blogpost/${blog.slug}`} className="group">
      <div
        ref={cardRef}
        className="
          flex flex-col items-center
          transform transition-all duration-500 
          ease-[cubic-bezier(0.22,1,0.36,1)]
          hover:scale-[1.07] hover:-translate-y-1 
          hover:bg-(--color-grey-orange) rounded-xl
        "
      >
        {/* Thumbnail */}
        <div className="relative w-full rounded-lg overflow-hidden max-w-[320px] sm:max-w-[360px] mx-auto">
          <Image
            src={blog.thumbnail_image}
            alt={blog.heading}
            width={360}
            height={200}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Title */}
        <div className="flex flex-col items-center justify-center mt-1 mb-1 max-w-[320px] text-center">
          <h3 className="text-sm sm:text-base font-semibold text-[#2b1c10] leading-tight">
            {blog.heading}
          </h3>
        </div>
      </div>
    </Link>
  );
}
