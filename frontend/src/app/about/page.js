"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { LoaderContext } from "@/context/LoaderContext";
import { useEffect, useContext } from "react";

export default function AboutPage() {
  const { setHasLoaded } = useContext(LoaderContext);

  useEffect(() => {
    setHasLoaded(true);
  }, [setHasLoaded]);

  const intro = `SoulKadhi is a collective effort of five brothers who grew up surrounded by the rhythms of village life. Our journey began not with a business plan, but with a simple urge to explore our own roots—walking through familiar paths, listening to elders, observing everyday rituals, and slowly reconnecting with the food and traditions that shaped our childhood.

As we spent more time in our village, we realized how many recipes, practices, and stories were slipping into silence. SoulKadhi became our way of revisiting those memories and bringing them back into the present. Every dish we prepare comes from real household kitchens, using methods that were never meant for display, only for nourishment and care.

Our entire setup remains homely and unstructured, because that’s where authenticity lives for us. We are driven by a quiet passion to uncover the overlooked richness of the Konkan region—its people, its culture, its food, and its landscapes—and to share it honestly, without filters or polish, before it fades away.`;

  const brothers = [
    {
      name: "Prathamesh Sawant",
      role: "Words, Design & Digital Presence",
      desc: "Prathamesh shapes SoulKadhi’s voice and visual structure. From writing grounded narratives to designing the website, he ensures that every word and layout reflects simplicity, clarity, and authenticity.",
      insta: "https://www.instagram.com/prathamesh_sawant09/",
      img: "/images/brothers/prathamesh.jpg"
    },
    {
      name: "Aniket Sawant",
      role: "Visual Storytelling & Direction of Photography",
      desc: "Aniket captures SoulKadhi through the lens. From food processes to landscapes and people, his visuals focus on natural light, real moments, and honest frames — without staging or excess.",
      insta: "https://www.instagram.com/andizzzzz/",
      img: "/images/brothers/aniket.jpg"
    },
    {
      name: "Omkar Sawant",
      role: "Social Media, Coordination & Field Logistics",
      desc: "Omkar manages short-form video content for SoulKadhi. He handles social media shoots, scripting, coordination, and recipe inventory, ensuring that each story flows smoothly from village kitchens to digital screens.",
      insta: "https://www.instagram.com/omi_sawant1323/",
      img: "/images/brothers/omkar.jpg"
    },
    {
      name: "Shubham Sawant",
      role: "Videography & Short-Form Content Editing",
      desc: "Shubham documents and edits all short-form video processes. His work focuses on capturing clear, relevant content aligned with scripts — observing quietly and working patiently to retain authenticity.",
      insta: "https://www.instagram.com/iam__shubham006/",
      img: "/images/brothers/shubham.jpg"
    },
    {
      name: "Pranav Sawant",
      role: "Web Design & Traditional Recipe Documentation",
      desc: "Pranav works on SoulKadhi’s digital structure and traditional recipe documentation. He designs web layouts while carefully recording old-style cooking methods, preserving how recipes are prepared and practiced traditionally.",
      insta: "https://www.instagram.com/pranav_sawant_02/",
      img: "/images/brothers/pranav.jpg"
    }
  ];

  return (
    <div className="w-full min-h-screen py-10 px-4 ">
      <div className="max-w-4xl mx-auto">

        {/* INTRO */}
        <div className="bg-(--color-grey-orange)/80 p-8 mb-12 rounded-2xl shadow-lg ">
          <h1 className="text-3xl font-bold text-center mb-6 ">
            About SoulKadhi
          </h1>
          <p className="text-lg whitespace-pre-line ">{intro}</p>
        </div>

        {/* FIRST ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10 items-stretch ">
          {brothers.slice(0, 3).map((bro, index) => (
            <Link
              key={index}
              href={bro.insta}
              target="_blank"
              className="group w-full max-w-xs h-full bg-(--color-grey-orange)/80 rounded-2xl shadow-lg p-6 flex flex-col
              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:scale-[1.06] hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border shadow mb-4
              transition-transform duration-500 group-hover:scale-110">
                <Image src={bro.img} alt={bro.name} width={160} height={160} className="object-cover" />
              </div>

              <div className="flex flex-col flex-grow w-full">
                <h3 className="text-xl font-semibold text-center">{bro.name}</h3>
                <p className="text-sm font-medium mt-1 text-center">{bro.role}</p>

                <p className="text-sm  mt-3 leading-relaxed text-justify flex-grow">
                  {bro.desc}
                </p>

                <div className="inline-flex items-center justify-center gap-2 text-pink-600 hover:text-pink-500 mt-4">
                  <Instagram size={20} />
                  <span>Instagram</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 items-stretch lg:w-[70%] mx-auto">
          {brothers.slice(3, 5).map((bro, index) => (
            <Link
              key={index}
              href={bro.insta}
              target="_blank"
              className="group w-full max-w-xs h-full bg-(--color-grey-orange)/80 rounded-2xl shadow-lg p-6 flex flex-col
              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:scale-[1.06] hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border shadow mb-4
              transition-transform duration-500 group-hover:scale-110">
                <Image src={bro.img} alt={bro.name} width={160} height={160} className="object-cover" />
              </div>

              <div className="flex flex-col flex-grow w-full">
                <h3 className="text-xl font-semibold text-center">{bro.name}</h3>
                <p className="text-sm font-medium mt-1 text-center">{bro.role}</p>

                <p className="text-sm  mt-3 leading-relaxed text-justify flex-grow">
                  {bro.desc}
                </p>

                <div className="inline-flex items-center justify-center gap-2 text-pink-600 hover:text-pink-500 mt-4">
                  <Instagram size={20} />
                  <span>Instagram</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

          
      </div>
    </div>
  );
}
