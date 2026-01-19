"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function AboutPage() {
  const intro = `Namaste & welcome to Soulkadhi!
Here, we bring you the true flavors of Kokan through traditional gharguti recipes made with love and old-school methods.
All videos are shot by five brothers in the heart of Kokan, filled with natural sounds and pure village vibes.`;

  const brothers = [
    { name: "Prathamesh Sawant", insta: "https://www.instagram.com/prathamesh_sawant09/", img: "/images/brothers/prathamesh.jpg" },
    { name: "Aniket Sawant", insta: "https://www.instagram.com/andizzzzz/", img: "/images/brothers/aniket.jpg" },
    { name: "Omkar Sawant", insta: "https://www.instagram.com/omi_sawant1323/", img: "/images/brothers/omkar.jpg" },
    { name: "Shubham Sawant", insta: "https://www.instagram.com/iam__shubham006/", img: "/images/brothers/shubham.jpg" },
    { name: "Pranav Sawant", insta: "https://www.instagram.com/pranav_sawant_02/", img: "/images/brothers/pranav.jpg" },
  ];

  return (
    <div className="w-full min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* INTRO SECTION */}
        <div className="bg-white p-8 mb-12 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6 ">
            About Soulkadhi
          </h1>
          <p className="text-lg  ">{intro}</p>
        </div>

        {/* FIRST ROW — 3 CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10 place-items-center">

          {brothers.slice(0, 3).map((bro, index) => (
            <Link
              key={index}
              href={bro.insta}
              target="_blank"
              className="group w-full max-w-xs bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center
                         transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                         hover:scale-[1.06] hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden border shadow mb-4
                              transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                              group-hover:scale-110">
                <Image src={bro.img} alt={bro.name} width={160} height={160} className="object-cover" />
              </div>

              <h3 className="text-xl font-semibold ">{bro.name}</h3>

              <div className="inline-flex items-center gap-2 text-pink-600 mt-3">
                <Instagram size={20} />
                <span>Instagram</span>
              </div>
            </Link>
          ))}
        </div>

        {/* SECOND ROW — 2 CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 :grid-cols-2 md:grid-cols-2 gap-8 place-items-center lg:w-[70%] mx-auto">
          {brothers.slice(3, 5).map((bro, index) => (
            <Link 
              key={index}
              href={bro.insta}
              target="_blank"
              className="group w-full max-w-xs bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center
                         transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                         hover:scale-[1.06] hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden border shadow mb-4
                              transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                              group-hover:scale-110">
                <Image src={bro.img} alt={bro.name} width={160} height={160} className="object-cover" />
              </div>

              <h3 className="text-xl font-semibold ">{bro.name}</h3>

              <div className="inline-flex items-center gap-2 text-pink-600 mt-3">
                <Instagram size={20} />
                <span>Instagram</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
