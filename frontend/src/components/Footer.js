"use client";
import Link from "next/link";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-(--color-dark-brown) text-white py-10 px-6 mt-10 font-(--font-poppins)">

            {/* MAIN GRID */}
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 gap-y-20 text-center">

                {/* QUICK LINKS */}
                <div>
                    <h3 className="text-xl mb-3 font-(--font-roboto)">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300 font-(--font-poppins)">
                        <li><Link href="/" className="hover:text-amber-950">Home</Link></li>
                        <li><Link href="/about" className="hover:text-amber-950">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-amber-950">Contact Us</Link></li>
                    </ul>
                </div>

                {/* TOP CATEGORIES */}
                <div>
                    <h3 className="text-xl mb-3 font-(--font-roboto)">Top Categories</h3>
                    <ul className="space-y-2 text-gray-300 font-(--font-poppins)">
                        <li><Link href="/categories?type=veg" className="hover:text-amber-950">Veg</Link></li>
                        <li><Link href="/categories?type=non-veg" className="hover:text-amber-950">Non Veg</Link></li>
                        <li><Link href="/categories?type=sea-food" className="hover:text-amber-950">Sea Food</Link></li>
                        <li><Link href="/categories?type=rice" className="hover:text-amber-950">Rice</Link></li>
                    </ul>
                </div>

                {/* FOLLOW US */}
                <div>
                    <h3 className="text-xl mb-3 font-(--font-roboto)">Follow Us</h3>
                    <div className="flex justify-center items-center space-x-5 text-gray-300 font-(--font-poppins)">

                        <Link href="https://www.youtube.com/@Soulkadhiotr" target="_blank">
                            <FaYoutube size={26} className="hover:text-red-500" />
                        </Link>

                        <Link href="https://www.facebook.com/profile.php?id=61583666728813" target="_blank">
                            <FaFacebook size={26} className="hover:text-blue-500" />
                        </Link>

                        <Link href="https://www.instagram.com/soulkadhi__" target="_blank">
                            <FaInstagram size={26} className="hover:text-pink-500" />
                        </Link>
                    </div>
                </div>

            </div>

            {/* HR LINE */}
            <div className="border-t border-black mt-10 pt-5 text-center font-(--font-poppins)">
                <p className="text-gray-400 text-sm">
                    Copyright ©2025. <span className="font-semibold">Soulkadhi</span>.
                    All Rights Reserved |
                    <Link href="/privacy" className="text-white ml-1 underline">
                        Privacy & Disclosure
                    </Link>
                </p>
            </div>

        </footer>
    );
}
