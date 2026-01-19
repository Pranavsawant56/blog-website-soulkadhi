"use client";

import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import blogsData from "../blog.json";
import Image from "next/image";
export default function LatestBlogSection() {
    const [latestBlogs, setLatestBlogs] = useState([]);

    useEffect(() => {
        const sortedBlogs = [...blogsData.blogs].sort(
            (a, b) => new Date(b.date) - new Date(a.date)
        );

        setLatestBlogs(sortedBlogs.slice(0, 5));
    }, []);

    return (
        <section className="pt-6 px-4 sm:px-6 lg:px-10">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center flex-1">
                        <Image src="/images/material/leaf13.png"
                            width={50}
                            height={50}
                            alt="leaf 
                                           "  />
                        <h3 className="  text-lg sm:text-xl  mt-3 py-1 rounded ">
                            Latest Blogs
                        </h3>
                        <span className="flex-grow ml-1 mt-6 h-[2px] bg-gradient-to-r 
                            from-[#a0522d] via-[#a0522d]/90 to-transparent ${className}"></span>
                    </div>

                    {/* See All Button */}
                    <a
                        href="/blogs.html"
                        className="   pt-3 rounded  transition ml-4"
                    >
                        more
                    </a>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {latestBlogs.map((blog) => (
                        <BlogCard key={blog.slug} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
}
