"use client";
import Image from "next/image";

export default function SoulkadhiIntro() {
  return (
    <div className="w-full bg-(--color-grey-orange)">
      <div className="flex justify-center px-4 py-2">
        <div
          className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-6
                     max-w-6xl w-full m-0 p-2 md:p-4 rounded-2xl "
        >
          {/* IMAGE */}
          <div className="w-full md:w-auto flex justify-center md:block shrink-0 mt-4">
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
              Welcome to Soulkadhi,
            </h2>

            <p
              className="text-lg leading-relaxed"

            >
           where the true flavors of the Konkan coast live on. Born from firewood kitchens and fading village traditions,
            </p>

            <p
              className="text-lg leading-relaxed mt-1"

            >
             we revive recipes that time almost forgot. Our food isn’t polished or dressed up—it’s honest, rooted, and

            </p>
            
            <p
              className="text-lg leading-relaxed mt-1"

            >
             deeply traditional. This is an invitation to rediscover Konkan’s lost dishes, one soulful bite at a time.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


