"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  const cardRef = useRef(null);

const fixPath = (path) => {
  const BASE = "https://soulkadhi.anubhootee.com";
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return BASE + (path.startsWith("/") ? path : "/" + path);
};

// when formatting the blog
const formattedBlog = {
  ...blog,
  thumbnail_image: fixPath(blog.thumbnail_image)
};


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
                  inline-flex w-fit flex-col items-center
                  mx-auto
                  transition-all duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:scale-[1.07]
                  hover:bg-(--color-grey-orange)
                  rounded-xl

        "
      >
        {/* Thumbnail */}
        <div className="relative w-full max-w-[220px] overflow-hidden rounded-md">
          <Image
            src={blog.thumbnail_image}
            alt={blog.heading}
            width={220}
            height={280}
            className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
            />
        </div>

        {/* Title */}
        <div className="mt-1 max-w-[220px] text-center">
          <h3 className="text-xs sm:text-sm font-medium  leading-snug ">
            {blog.heading}
          </h3>
        </div>
      </div>
    </Link>
  );
}
