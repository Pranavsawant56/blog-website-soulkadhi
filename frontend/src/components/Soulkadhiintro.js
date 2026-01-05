"use client";
import Image from "next/image";

export default function SoulkadhiIntro() {
  return (
    <div className="w-full bg-(--color-grey-orange)">
      <div className="flex justify-center px-4 py-6">
        <div
          className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6
                     max-w-6xl w-full m-0 p-3 md:p-4 rounded-2xl "
        >
          {/* IMAGE */}
          <div className="w-full md:w-auto flex justify-center md:block shrink-0">
            <img
              src="/solkadhilogo.png"
              alt="Soulkadhi Logo"
              width={160}
              height={90}
              className="rounded-xl object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="text-white text-center md:text-left px-1 mt-6">
            <h2
              className="text-2xl md:text-3xl font-bold mb-2"

            >
              Hi, We Are Soulkadhi Team
            </h2>

            <p
              className="text-lg leading-relaxed"

            >
           This is where Konkan breathes — through kitchens, soil, rain, and daily life.
            </p>

            <p
              className="text-lg leading-relaxed mt-1"

            >
             SoulKadhi simply observes, documents, and shares what is truly experienced.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


