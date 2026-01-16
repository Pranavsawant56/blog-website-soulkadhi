"use client";
import Link from "next/link";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-(--color-dark-brown) text-white py-10 px-6 mt-10 ">

          {/* MAIN GRID */}
<div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 gap-y-20 text-center md:text-left">

  {/* QUICK LINKS */}
  <div>
    <h3 className="text-xl mb-3 ">Quick Links</h3>
    <ul className="space-y-2 text-gray-300">
      <li><Link href="/" className="hover:text-amber-950">Home</Link></li>
      <li><Link href="/about" className="hover:text-amber-950">About Us</Link></li>
      <li><Link href="/blogs" className="hover:text-amber-950">Blogs</Link></li>
       <li><Link href="/videos" className="hover:text-amber-950">Videos</Link></li>
       <li><Link href="/contact" className="hover:text-amber-950">contact</Link></li>

    </ul>
  </div>

  {/* TOP CATEGORIES */}
  <div>
    <h3 className="text-xl mb-3 ">Top Categories</h3>
    <ul className="space-y-2 text-gray-300 ">
      <li><Link href="/categories?type=veg" className="hover:text-amber-950">Veg</Link></li>
      <li><Link href="/categories?type=non-veg" className="hover:text-amber-950">Non-Veg</Link></li>
      <li><Link href="/categories?type=seafood" className="hover:text-amber-950">Sea Food</Link></li>
      <li><Link href="/categories?type=rice" className="hover:text-amber-950">Rice</Link></li>
      <li><Link href="/categories?type=vegan" className="hover:text-amber-950">Vegan</Link></li>
      <li><Link href="/categories?type=chicken" className="hover:text-amber-950">Chicken</Link></li>
      <li><Link href="/categories?type=vegetables" className="hover:text-amber-950">Vegetables</Link></li>

      
    </ul>
  </div>

  {/* FOLLOW US */}
  <div>
    <h3 className="text-xl mb-3 ">Follow Us</h3>

    <div className="flex flex-col items-center md:items-start space-y-4 text-gray-300">
      {/* SOCIAL ICONS */}
      <div className="flex items-center space-x-5 justify-center md:justify-start">
        <Link href="https://www.youtube.com/@Soulkadhiotr?sub_confirmation=1" target="_blank">
          <FaYoutube size={26} className="hover:text-red-500" />
        </Link>

        <Link href="https://www.facebook.com/profile.php?id=61583666728813" target="_blank">
          <FaFacebook size={26} className="hover:text-blue-500" />
        </Link>

        <Link href="https://www.instagram.com/soulkadhi__" target="_blank">
          <FaInstagram size={26} className="hover:text-pink-500" />
        </Link>
      </div>

      {/* SUBSCRIBE BUTTON */}
      <Link
        href="https://www.youtube.com/@Soulkadhiotr?sub_confirmation=1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#5b3523] px-6 py-2 rounded-full bg-red-100 font-semibold hover:bg-red-500 transition"
      >
        Subscribe
      </Link>
    </div>
  </div>

</div>


            {/* HR LINE */}
            <div className="border-t border-black mt-10 pt-5 text-center font-(--font-poppins)">
                <p className="text-gray-400 text-sm">
                   Copyright @2025. <span className="font-semibold">Anubhootee</span>.
                   All right reserved |
                    <Link href="/privacy" className="text-white ml-1 underline">
                        Privacy & Disclosure
                    </Link>
                </p>
            </div>

        </footer>
    );
}
