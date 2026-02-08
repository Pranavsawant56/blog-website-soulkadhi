"use client";

/* import Image from "next/image"; */
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import categories from "@/categories.json"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCatOpen, setIsCatOpen] = useState(false);
    const normalize = (str) =>
  str
    .trim()                    // remove leading/trailing spaces
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

    return (
        <header
            className="text-white w-full"
            style={{ backgroundColor: "var(--color-dark-brown)" }}
        >
            {/* 🔹 Top bar (Logo + Menu Button) */}
            <div className="max-w-6xl mx-auto flex items-center justify-between px-1">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img
                        src="/solkadhilogo.png"
                        alt="Soul Kadhi Logo"
                        width={80}
                        height={80}
                        className="md:w-[90px] md:h-[90px]"
                    />
                </Link>

                {/* 🔹 Desktop Navigation */}
                <nav className="hidden md:flex space-x-12 font-roboto text-base font-medium">
                    <Link href="/" className="hover:text-amber-950 transition">Home</Link>
                    {/* Categories dropdown (Desktop) */}
                    <div className="relative group">
                        <button className="font-medium hover:text-amber-950">
                            Categories
                        </button>

                        {/* Mega Dropdown */}
                        <div
                            className="
                                         absolute top-full mt-4
                                         left-1/2 -translate-x-1/2
                                         w-[1100px]
                                         bg-white shadow-xl rounded-2xl
                                         px-8 py-6
                                         opacity-0 invisible
                                         group-hover:opacity-100 group-hover:visible
                                         transition-all duration-300
                                         z-50 "
                        >
                            <div className="
                                          grid
                                          grid-cols-6
                                          grid-rows-2
                                          grid-flow-col
                                          gap-x-12
                                          gap-y-8
                                        ">
                                {categories.slice(0, 12).map((category) => (
                                    <div key={category.title} className="min-w-0">
                                        <h4 className="mb-3 text-sm font-semibold text-[#3a1704] tracking-wide">
                                            {category.title}
                                        </h4>

                                        <ul className="space-y-2">
                                            {category.items.map((item) => (
                                                <li key={item} className="leading-snug">
                                                    <Link
                                                        href={`/categories?types=${normalize(item)}`}
                                                        className="text-sm text-[#c08a5a] hover:text-amber-950 transition whitespace-normal"
                                                    >
                                                        {item}
                                                    </Link>

                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>




                    <Link href="/blogs" className="hover:text-amber-950 transition"> Blogs</Link>
                    <Link href="/videos" className="hover:text-amber-950 transition">Videos</Link>
                    <Link href="/about" className="hover:text-amber-950 transition">About</Link>
                </nav>

                {/* 🔹 Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-100 flex h-8 w-8 flex-col justify-between md:hidden"
                >
                    <span
                        className={`h-0.5 w-full bg-black transition-transform duration-300 ${isOpen ? "translate-y-[14px] rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`h-0.5 w-full bg-black transition-opacity duration-300 ${isOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`h-0.5 w-full bg-black transition-transform duration-300 ${isOpen ? "-translate-y-[14px] -rotate-45" : ""
                            }`}
                    />
                </button>



            </div>

            {/* 🔹 Mobile Dropdown Menu */}
            {isOpen && (
                <nav
                    className={`
    fixed top-0 right-0 h-screen w-[85%] max-w-[320px] 
    bg-[#5b3523] text-white
    z-50 md:hidden
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    px-6 py-6
    overflow-y-auto
  `}
                >
                    {/* Home */}
                    <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="block py-2 font-medium hover:text-[--color-grey-brown]"
                    >
                        Home
                    </Link>


                    <hr className="my-3 border-black/20" />

                    {/* Categories */}
                    <div>
                        <button
                            onClick={() => setIsCatOpen(!isCatOpen)}
                            className="flex w-full items-center justify-between py-2 font-medium"
                        >
                            <span>Categories</span>
                            <span className="text-lg">{isCatOpen ? "−" : "+"}</span>
                        </button>

                        {isCatOpen && (
                            <div className="mt-2 ml-2 space-y-3 text-sm">
                                {categories.map((category) => (
                                    <div key={category.title}>
                                        <p className="font-semibold text-gray-300 mb-1">{category.title}</p>

                                        <div className="ml-3 space-y-1">
                                            {category.items.map((item) => (
                                                <Link
                                                    key={item}
                                                    href={`/categories?types=${item
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "-")}`}
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        setIsCatOpen(false);
                                                    }}
                                                    className="block text-white/80 hover:text-[--color-grey-brown]"
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <hr className="my-3 border-black/20" />

                    {/* Blogs */}
                    <Link
                        href="/blogs"
                        onClick={() => setIsOpen(false)}
                        className="block py-2 font-medium hover:text-[--color-grey-brown]"
                    >
                        Blogs
                    </Link>

                    <hr className="my-3 border-black/20" />

                    {/* Videos */}
                    <Link
                        href="/videos"
                        onClick={() => setIsOpen(false)}
                        className="block py-2 font-medium hover:text-[--color-grey-brown]"
                    >
                        Videos
                    </Link>

                    <hr className="my-3 border-black/20" />

                    {/* About */}
                    <Link
                        href="/about"
                        onClick={() => setIsOpen(false)}
                        className="block py-2 font-medium hover:text-[--color-grey-brown]"
                    >
                        About
                    </Link>
                </nav>

            )}
        </header>
    );
}
