"use client";

import Image from "next/image";
import Link from "next/link";
import Line from "../components/Line";

export default function FoodGallery() {
  return (
    <section className="max-w-6xl m-auto justify-center p-4">
      <div className="flex items-center flex-1">
        <Image
          src="/images/material/leaf8.png"
          width={50}
          height={50}
          alt="leaf"
        />
        <h3 className="text-black text-lg sm:text-xl font-bold py-1 rounded">
          Latest Post
        </h3>
        <Line />
      </div>

      {/* RESPONSIVE GRID */}
      <div className="
        max-w-6xl w-full
        grid gap-2
        grid-cols-2 auto-rows-[180px]
        sm:grid-cols-6 sm:auto-rows-[160px]
        lg:grid-cols-12 lg:grid-rows-6 lg:h-[500px]
      ">

        {/* LEFT BIG IMAGE */}
        <Link
          href="https://www.instagram.com/p/DSDJdKlDZz0/?img_index=1"
          target="_blank"
          className="col-span-2 sm:col-span-3 lg:col-span-4 lg:row-span-3 relative border border-black overflow-hidden group"
        >
          <Image src="/images/Latest-post/aluwadi.png" alt="1" fill className="object-cover group-hover:scale-110 transition" />
        </Link>

        <Link
          href="https://www.instagram.com/p/DQtYdk3jcM0/?img_index=1"
          target="_blank"
          className="col-span-1 relative border border-black overflow-hidden group"
        >
          <Image src="/images/Latest-post/bambu.JPG" alt="2" fill className="object-cover group-hover:scale-110 transition" />
        </Link>

        <Link
          href="https://www.instagram.com/p/DPtv8y9DEd8/?img_index=1"
          target="_blank"
          className="col-span-1 relative border border-black overflow-hidden group"
        >
          <Image src="/images/Latest-post/bangda.png" alt="3" fill className="object-cover group-hover:scale-110 transition" />
        </Link>

        <Link
          href="https://www.instagram.com/p/DP_X1TlD_jA/?img_index=1"
          target="_blank"
          className="col-span-2 sm:col-span-2 lg:col-span-2 lg:row-span-2 relative border border-black overflow-hidden group"
        >
          <Image src="/images/Latest-post/god-pohe.png" alt="4" fill className="object-cover group-hover:scale-110 transition" />
        </Link>

        <Link
          href="https://www.instagram.com/p/DPIy-PLDB_f/?img_index=1"
          target="_blank"
          className="col-span-2 sm:col-span-2 lg:col-span-2 lg:row-span-2 relative border border-black overflow-hidden group"
        >
          <Image src="/images/Latest-post/peti-bhat.JPG" alt="5" fill className="object-cover group-hover:scale-110 transition" />
        </Link>

        <Link
          href="https://www.instagram.com/p/DTNT6Pjjww2/?img_index=1"
          target="_blank"
          className="col-span-2 sm:col-span-2 lg:col-span-2 lg:row-span-3 relative border border-black overflow-hidden group"
        >
          <Image src="/images/Latest-post/popti.png" alt="6" fill className="object-cover group-hover:scale-110 transition" />
        </Link>

        <Link
          href="https://www.instagram.com/p/DPtv8y9DEd8/?img_index=1"
          target="_blank"
          className="col-span-2 sm:col-span-3 lg:col-span-2 lg:row-span-3 relative border border-black overflow-hidden group"
        >
          <Image src="/images/Latest-post/bangda2.JPG" alt="7" fill className="object-cover group-hover:scale-110 transition" />
        </Link>

        <Link
          href="https://www.instagram.com/p/DQtYdk3jcM0/?img_index=1"
          target="_blank"
          className="col-span-2 sm:col-span-3 lg:col-span-2 lg:row-span-2 relative border border-black overflow-hidden group"
        >
          <Image src="/images/Latest-post/bambu2.JPG" alt="8" fill className="object-cover group-hover:scale-110 transition" />
        </Link>

        <Link
          href="https://www.instagram.com/p/DSDJdKlDZz0/?img_index=1"
          target="_blank"
          className="col-span-2 sm:col-span-3 lg:col-span-2 lg:row-span-3 relative border border-black overflow-hidden group"
        >
          <Image src="/images/Latest-post/1aluwadi.png" alt="9" fill className="object-cover group-hover:scale-110 transition" />
        </Link>

        <Link
          href="https://www.instagram.com/p/DTNT6Pjjww2/?img_index=1"
          target="_blank"
          className="col-span-2 sm:col-span-3 lg:col-span-2 lg:row-span-3 relative border border-black overflow-hidden group"
        >
          <Image src="/images/Latest-post/1popti.png" alt="10" fill className="object-cover group-hover:scale-110 transition" />
        </Link>

        <Link
          href="https://www.instagram.com/p/DP_X1TlD_jA/?img_index=1"
          target="_blank"
          className="col-span-2 sm:col-span-3 lg:col-span-2 lg:row-span-3 relative border border-black overflow-hidden group"
        >
          <Image src="/images/Latest-post/god-pohe2.JPG" alt="11" fill className="object-cover group-hover:scale-110 transition" />
        </Link>

        <Link
          href="https://www.instagram.com/p/DPtv8y9DEd8/?img_index=1"
          target="_blank"
          className="col-span-2 sm:col-span-3 lg:col-span-2 lg:row-span-3 relative border border-black overflow-hidden group"
        >
          <Image src="/images/Latest-post/bangda3.JPG" alt="12" fill className="object-cover group-hover:scale-110 transition" />
        </Link>

        <Link
          href="https://www.instagram.com/p/DQtYdk3jcM0/?img_index=1"
          target="_blank"
          className="col-span-2 sm:col-span-6 lg:col-span-4 lg:row-span-2 relative border border-black overflow-hidden group"
        >
          <Image src="/images/Latest-post/bambu3.JPG" alt="13" fill className="object-cover group-hover:scale-110 transition" />
        </Link>

        <Link
          href="https://www.instagram.com/p/DPtv8y9DEd8/?img_index=1"
          target="_blank"
          className="col-span-1 relative border border-black overflow-hidden group"
        >
          <Image src="/images/Latest-post/frybangda.JPG" alt="14" fill className="object-cover group-hover:scale-110 transition" />
        </Link>

        <Link
          href="https://www.instagram.com/p/DPIy-PLDB_f/?img_index=1"
          target="_blank"
          className="col-span-1 relative border border-black overflow-hidden group"
        >
          <Image src="/images/Latest-post/peti2.JPG" alt="15" fill className="object-cover group-hover:scale-110 transition" />
        </Link>

      </div>
    </section>
  );
}
