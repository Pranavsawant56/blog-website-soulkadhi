"use client";

/* import Image from "next/image"; */
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCatOpen, setIsCatOpen] = useState(false);

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
                        <button className="hover:text-amber-950 transition">Categories</button>
                        <div className="absolute left-0 mt-2 w-40 bg-white/90 text-black rounded-lg z-40 shadow-lg
                         opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">

                            <Link href="/categories?types=veg" className="block px-4 py-2 hover:bg-gray-100"> Veg</Link>
                            <Link href="/categories?types=nonveg" className="block px-4 py-2 hover:bg-gray-100"> Non-Veg </Link>
                            <Link href="/categories?types=desserts" className="block px-4 py-2 hover:bg-gray-100">Desserts </Link>
                        </div>
                    </div>

                    <Link href="/blogs" className="hover:text-amber-950 transition"> Blogs</Link>
                    <Link href="/videos" className="hover:text-amber-950 transition">Videos</Link>
                    <Link href="/about" className="hover:text-amber-950 transition">About</Link>
                </nav>

                {/* 🔹 Mobile Menu Button */}
                <button
                    className="md:hidden text-white mr-3"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* 🔹 Mobile Dropdown Menu */}
            {isOpen && (
                <nav
                    className=" md:hidden absolute top-[82px] right-3 bg-white/60 backdrop-blur-md text-black flex flex-col items-start
                                space-y-2 px-5 py-4 font-roboto text-sm font-medium shadow-lg rounded-2xl z-50 w-160px">
                    {/* Home */}
                    <div className="w-full">
                        <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[--color-grey-brown] block" >Home </Link>
                        <hr className="border-black/20 my-1 w-full" />
                    </div>

                    {/* Categories */}
                    <div className="w-full">
                        <button
                            onClick={() => setIsCatOpen(!isCatOpen)}
                            className="flex justify-between items-center w-full hover:text-[--color-grey-brown]"
                        >
                            <span>Categories</span>
                            <span className="text-lg">{isCatOpen ? "−" : "+"}</span>
                        </button>

                        {/* ✅ Sub Dropdown (with <hr> between items) */}
                        {isCatOpen && (
                            <div className="ml-3 mt-1 flex flex-col text-xs text-black/90 space-y-1 w-full">
                                <Link href="/categories?type=veg" onClick={() => setIsOpen(false)}>Veg </Link>
                                <hr className="border-black/20 my-1 w-[70%]" />
                                <Link href="/categories?type=nonveg" onClick={() => setIsOpen(false)}> Non-Veg</Link>
                                <hr className="border-black/20 my-1 w-[70%]" />
                                <Link href="/categories?type=desserts" onClick={() => setIsOpen(false)}>Desserts</Link>
                            </div>
                        )}
                        <hr className="border-black/20 my-1 w-full" />
                    </div>

                    {/* Blogs */}
                    <div className="w-full">
                        <Link href="/blogs" onClick={() => setIsOpen(false)} className="hover:text-[--color-grey-brown] block"> Blogs</Link>
                        <hr className="border-black/20 my-1 w-full" />
                    </div>

                    {/* Videos */}
                    <div className="w-full">
                        <Link href="/videos" onClick={() => setIsOpen(false)} className="hover:text-[--color-grey-brown]block" >Videos </Link>
                        <hr className="border-black/20 my-1 w-full" />
                    </div>

                    {/* About */}
                    <div className="w-full">
                        <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-[--color-grey-brown]block"> About</Link>
                    </div>
                </nav>
            )}
        </header>
    );
}
