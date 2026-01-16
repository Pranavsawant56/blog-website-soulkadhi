"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Line from "@/components/Line";

export default function BlogPostClient({ blog }) {
    // ALL your states, sliders, modals, clicks here

    const sliderImages = (blog.slider_images || []).map(img =>
        img.startsWith("/") ? img : `/${img}`
    );
    const ingredients = blog.ingredients || [];
    const maining = blog.main_ingredient?.image; // "images/material/dummyimg.png"
    const weather = blog.geography_weather?.weather_icon;
    const videothum = blog.recipe_video?.thumbnails;


    const stepImages = blog.steps.map(step =>
        step.image?.startsWith("/") ? step.image : `/${step.image}`
    );
    // 1️⃣ Extract URL safely
    const rawVideoUrl = blog.recipe_video?.url;

    // 2️⃣ Convert to embed URL if YouTube
    const videoUrl =
        typeof rawVideoUrl === "string"
            ? rawVideoUrl.includes("watch?v=")
                ? rawVideoUrl.replace("watch?v=", "embed/")
                : rawVideoUrl
            : null;



    const serveImages = [
        '/images/aluwadi/comfood/soulkadhi.png',
        '/images/aluwadi/comfood/rice.png',
        '/images/aluwadi/comfood/pickle.png',
        '/images/aluwadi/comfood/chutney.png'
    ]

    const borderImage = [
        '/images/material/border1.png'
    ]

    const [modalIndex, setModalIndex] = useState(null)
    const [videoOpen, setVideoOpen] = useState(false)
    const [stepPage, setStepPage] = useState(0)
    const [index, setIndex] = useState(0)


    const scrollRef = useRef(null);
    const [sPage, setSPage] = useState(0);


    const scrollDown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                top: 120,
                behavior: "smooth",
            });
        }
    };

    // Auto slide every 8 seconds
    useEffect(() => {
        if (!sliderImages || sliderImages.length === 0) return;

        let interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % sliderImages.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [sliderImages.length]);

    const stepDescriptions = blog.steps.map(step => step.description);

    const itemsPerPage = 2 * 2; // 2 columns * 2 rows per page (adjust if layout changes)
    const totalPages = Math.ceil(stepImages.length / itemsPerPage);


    useEffect(() => {
        if (modalIndex === null) return;

        const handleKeyDown = (e) => {
            if (e.key === "ArrowDown") {
                setModalIndex((prev) => (prev + 1) % stepImages.length);
            }
            if (e.key === "ArrowUp") {
                setModalIndex(
                    (prev) => (prev - 1 + stepImages.length) % stepImages.length
                );
            }
            if (e.key === "ArrowLeft") {
                setModalIndex(
                    (prev) => (prev - 1 + stepImages.length) % stepImages.length
                );
            }
            if (e.key === "ArrowRight") {
                setModalIndex((prev) => (prev + 1) % stepImages.length);
            }
            if (e.key === "Escape") {
                setModalIndex(null);
            }
        };

        let scrollTimeout = null;
        const handleWheel = (e) => {
            if (scrollTimeout) return;

            scrollTimeout = setTimeout(() => {
                scrollTimeout = null;
            }, 400); // prevents fast scrolling

            if (e.deltaY > 0) {
                // scroll down
                setModalIndex((prev) => (prev + 1) % stepImages.length);
            } else {
                // scroll up
                setModalIndex(
                    (prev) => (prev - 1 + stepImages.length) % stepImages.length
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("wheel", handleWheel, { passive: true });

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("wheel", handleWheel);
        };
    }, [modalIndex]);


    return (
        <main className="  bg-fix bg-cover bg-center bg-repeat text-[#3b2f2f]">


            {/* HERO */}
            <section className="relative h-[20vh] w-full flex items-center justify-center">
                <div className="relative w-full h-full">
                    <Image
                        src="/images/blogpost-banner/blog3-banner.png"
                        fill
                        className="object-cover object-top"
                        alt="Alu Vadi"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="absolute text-center px-4">
                    <h1 className="{`text-4xl md:text-5xl text-white tracking-wide font-family: 'Playfair Display', serif;
                        font-variation-settings: 'wght' 800, 'wdth' 11`}">
                        {blog.heading}
                    </h1>
                    <p className="text-lg text-white mt-2 ${baskerville.className}">
                        {blog.sub_heading}
                    </p>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="max-w-6xl mx-auto mb-0 px-6 py-6 space-y-4 ">
                <div className="space-y-4">
                    <p className="leading-7 max-w-6xl  blog-intro ">
                        {blog.short_info}
                    </p>
                </div>
            </section>


            <div className="flex items-center max-w-6xl mx-auto  ">
                {/* Left line */}
                <span className="flex-grow h-px bg-gradient-to-r from-transparent via-[#a0522d]  to-[#a0522d] " />

                {/* Dots */}
                <span className="flex gap-2 mx-4">
                    <span className="w-1 h-1 rounded-full bg-[#a0522d]" />
                    <span className="w-1 h-1 rounded-full bg-[#a0522d]" />
                    <span className="w-1 h-1 rounded-full bg-[#a0522d]" />
                </span>

                {/* Right line */}
                <span className="flex-grow h-px bg-gradient-to-l from-transparent via-[#a0522d]  to-[#a0522d] " />
            </div>





            {/* SLIDER + INGREDIENTS */}
            <section className=" relative  grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:px-6 pt-6 items-start">

                {/* IMAGE SLIDER */}
                <div className=" relative  mt-6 md:col-span-2 blend-image   w-full max-w-full aspect-video rounded-xl overflow-hidden  ">
                    <Image
                        src={sliderImages[index] ?? sliderImages[0]}
                        fill
                        className="object-cover transition-opacity duration-700"
                        alt="Alu Vadi"
                        priority
                    />
                    <div className="absolute inset-0 pointer-events-none" />
                </div>

                {/* Ingredients */}
                <div className="w-full max-w-md md:max-w-full">
                    {/* Heading */}
                    <div className="flex items-center mb-2 w-full">
                        <Image src="/images/material/leaf5.png" width={50} height={50} alt="leaf" />
                        <h3 className="text-xl flex items-center  mb-2 ml-2 w-full">
                            Ingredients
                            <Line className="from-[#a0522d] via-[#a0522d]/30" />
                        </h3>
                    </div>

                    {/* Ingredient Box */}
                    <div className="relative rounded-[12px] overflow-hidden">
                        <aside
                            ref={scrollRef}
                            className="bg-[#ccac8d]/40 shadow-inner border-[18px] border-transparent rounded-2xl
        [border-image:url('/images/material/br-extended.png')_32_stretch]
        [border-image-outset:2] max-h-92 overflow-y-auto scrollbar-brown
        [&::-webkit-scrollbar] [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                        >
                            <ul className="list-none text-sm leading-6 p-4 sm:p-6 space-y-2 ">
                                {ingredients.map((item, idx, arr) => (
                                    <li key={idx}>
                                        <div className="grid grid-cols-[1fr_140px] gap-4 items-start">
                                            <div className="flex items-start gap-2">
                                                <span className=" mt-2 h-2 w-2 rounded-full bg-black/70 " />
                                                <span className="whitespace-nowrap">{item.name}</span>
                                            </div>
                                            <span className="text-left whitespace-nowrap  ml-20">{item.quantity}</span>
                                        </div>

                                        {idx !== arr.length - 1 && (
                                            <div className="mt-3 ml-3 h-[2px] w-[90%] bg-gradient-to-r from-[#a0522d] via-[#a0522d]/40 to-transparent" />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </aside>

                       

                    </div>
                </div>
            </section>

            {/* INTRO + HOW TO MAKE */}
            <section className="max-w-6xl mx-auto px-6  pt-6  grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 ">

                {/* INTRODUCTION — 60% */}
                <div className="relative">
                    <div className="flex items-center mb-1 w-full">
                        <Image
                            src="/images/material/leaf6.png"
                            width={50}
                            height={50}
                            alt="leaf"
                        />
                        <h3 className="text-xl flex items-center mt-4 ml-2 w-full">
                            Introduction
                            <Line className="from-[#a0522d] via-[#a0522d]/40" />
                        </h3>
                    </div>

                    <aside className="rounded-xl blog-intro shadow-inner ">
                        {blog.introduction}
                    </aside>
                </div>

                {/* HOW TO MAKE — 40% */}
                <div className="relative overflow-hidden ">
                    <div className="flex items-center w-full">
                        <Image
                            src="/images/material/leaf7.png"
                            width={50}
                            height={50}
                            alt="leaf"
                        />
                        <h3 className="text-xl flex items-center mt-4 ml-2 w-full">
                            How To Make
                            <Line className="from-[#a0522d] via-[#a0522d]/30" />
                        </h3>
                    </div>

                    <aside className="pt-2 pb-2 px-0 sm:px-6 rounded-xl shadow-inner">


                        {/* SCROLLABLE STEPS */}
                        <div className="h-[320px] overflow-y-auto overflow-x-visible pr-4 custom-scroll">

                            <div className="grid grid-cols-2 gap-3 pl-2">


                                {stepImages.map((img, i) => (
                                    <div key={i} className="flex flex-col items-center py-1">

                                        {/* IMAGE BOX */}
                                        <div className="relative w-full max-w-[180px] h-[120px]">
                                            <button
                                                onClick={() => setModalIndex(i)}
                                                className="w-full h-full rounded-xl overflow-hidden"
                                            >
                                                <Image
                                                    src={img}
                                                    fill
                                                    className="object-cover rounded-lg"
                                                    alt={`step ${i + 1}`}
                                                />
                                            </button>

                                            {/* STEP NUMBER */}
                                            <span className="absolute -bottom-1 -left-1 z-10 w-6 h-6 border border-[#5b3523] bg-[#8a5c3b] text-black flex items-center justify-center font-bold shadow rounded-lg">
                                                {i + 1}
                                            </span>
                                        </div>

                                        {/* STEP TEXT */}
                                        <span className="mt-1 text-sm font-medium text-[#3b2f2f] text-center">
                                            {stepDescriptions[i]}
                                        </span>

                                    </div>
                                ))}

                            </div>
                        </div>

                    </aside>
                </div>

            </section>


            {/* VIDEO + MAIN INGREDIENT */}
            <section className="max-w-6xl mx-auto px-6  pt-6 grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 items-start ">

                {/* LEFT — RECIPE VIDEO (60%) */}
                <div className="relative">

                    {/* Heading */}
                    <div className="flex items-center mb-1 w-full">
                        <Image src="/images/material/leaf8.png" width={56} height={56} alt="leaf" />
                        <h3 className="font-serif text-xl flex items-center mt-2 ml-2 w-full">
                            Recipe Video
                            <Line className="from-[#a0522d] via-[#a0522d]/40" />
                        </h3>
                    </div>

                    {/* Video Thumbnail */}
                    <aside className="bg-[#efe3cf] p-2 rounded-xl shadow-inner">
                        <div
                            className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer"
                            onClick={() => setVideoOpen(true)}
                        >
                            <Image
                                src={`/${videothum}`}
                                fill
                                className="object-cover"
                                alt="Recipe Video Thumbnail"
                            />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white text-4xl bg-red-600 rounded-full px-4 py-2">
                                    ▶
                                </span>
                            </div>
                        </div>
                    </aside>

                    {/* VIDEO MODAL */}
                    {videoOpen && (
                        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                            <div className="relative w-[90%] md:w-[70%] aspect-video">
                                {videoUrl && (
                                    <iframe
                                        className="absolute inset-0 w-full h-full rounded-lg"
                                        src={videoUrl + "?autoplay=1"}
                                        title="Recipe Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                )}

                                <button
                                    className="absolute -top-8 right-3 bg-black/30 rounded-lg px-2 text-white font-bold text-lg"
                                    onClick={() => setVideoOpen(false)}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* RIGHT — MAIN INGREDIENT (40%) */}
                <div className="relative">

                    {/* Heading */}
                    <div className="flex items-center mb-1 w-full">
                        <Image src="/images/material/leaf9.png" width={50} height={50} alt="leaf" />
                        <h3 className="font-serif text-xl flex items-center mt-2 ml-2 w-full">
                            Main Ingredient
                            <Line className="from-[#a0522d] via-[#a0522d]/50" />
                        </h3>
                    </div>

                    <aside className="p-4 rounded-xl shadow-inner">

                        <div className="flex flex-col items-center text-center">

                            {/* Ingredient Image */}
                            <Image
                                src={`/${maining}`}
                                width={220}
                                height={160}
                                className="rounded-lg mb-3"
                                alt={blog.main_ingredient?.name || "Main Ingredient"}
                            />

                            {/* Ingredient Name */}
                            <h4 className="font-semibold text-lg mb-2">
                                {blog.main_ingredient?.name || "Ingredient Name"}
                            </h4>

                            {/* Ingredient Description */}
                            <p className="blog-intro text-justify">
                                {blog.main_ingredient?.info || ""}
                            </p>

                        </div>
                    </aside>
                </div>

            </section>


            {/* HISTORY + GEOGRAPHY */}
            <section className="max-w-6xl mx-auto px-6 pt-6 grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 mt-2 ">

                {/* HISTORY — 60% */}
                <div className="relative mt-2">

                    {/* Heading */}
                    <div className="flex items-center mb-1 w-full">
                        <Image
                            src="/images/material/leaf5.png"
                            width={50}
                            height={50}
                            alt="leaf"
                        />
                        <h3 className="font-serif text-xl flex items-center ml-2 w-full">
                            History of {blog.heading}
                            <Line className="from-[#a0522d] via-[#a0522d]/40" />
                        </h3>
                    </div>

                    {/* Content */}
                    <aside className="rounded-xl shadow-inner blog-intro ">
                        <p className="leading-7">
                            {blog.history}
                        </p>
                    </aside>
                </div>

                {/* GEOGRAPHY & WEATHER — 40% */}
                <div className="relative">

                    {/* Heading */}
                    <div className="flex items-center mb-1 w-full">
                        <Image
                            src="/images/material/leaf11.png"
                            width={50}
                            height={50}
                            alt="leaf"
                        />
                        <h3 className="font-serif text-xl flex items-center ml-2 w-full">
                            Geography & Weather
                            <Line className="from-[#a0522d] via-[#a0522d]/40" />
                        </h3>
                    </div>

                    {/* Content */}
                    <aside className="p-4 rounded-xl shadow-inner space-y-3">

                        {/* Weather Image */}
                        <div className="flex justify-center">
                            <Image
                                src={`/${weather}`}
                                width={40}
                                height={20}
                                className="object-contain w-12 md:w-16"
                                alt="Konkan Weather"
                            />
                        </div>

                        {/* Weather Text */}
                        <p className="leading-7 text-justify blog-intro">
                            {blog.geography_weather.info}
                        </p>

                    </aside>

                </div>

            </section>


            {/* HEALTH BENEFITS */}
            {/* HEALTH BENEFITS / HISTORY SECTION */}
            <section className="max-w-6xl mx-auto px-4 pt-6 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 items-start mt-8">

                {/* LEFT SIDE — Heading & line */}
                <div className="flex flex-col justify-start">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/images/material/leaf12.png"
                            width={50}
                            height={50}
                            alt="leaf"
                        />
                        <h3 className="font-serif text-xl leading-tight">
                            Health Benefits
                        </h3>
                        <Line />
                    </div>
                </div>

                {/* RIGHT SIDE — Grid of images + titles */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2">
                    {blog.health_benefits?.map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 text-center">
                            <Image
                                src={`/${item.icon}`} // make sure path is correct
                                width={100}
                                height={100}
                                className="rounded-lg"
                                alt={item.title.replace(/-/g, " ")}
                            />
                            <p className="capitalize text-sm font-medium">{item.title.replace(/-/g, " ")}</p>
                        </div>
                    ))}
                </div>

            </section>



            {/* WHY KONKAN LOVES IT */}
            <section className="max-w-6xl mx-auto px-6 pt-6 ">
                <div className="flex items-center gap-2 mb-4 w-full">
                    <Image src="/images/material/leaf13.png" width={50} height={50} alt="leaf" />
                    <h3 className=" text-xl mt-4 flex items-center w-full">
                        Complimentary Foods
                        <Line className="from-[#a0522d] via-[#a0522d]/50" />
                    </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {blog.complimentary_foods?.map((item, i) => (
                        <div key={i} className="space-y-2">
                            <Image
                                src={`/${item.image}`} // Add leading slash
                                width={250}
                                height={180}
                                className="rounded-lg mx-auto"
                                alt={item.name}
                            />
                            <p className="text-sm font-medium capitalize">{item.name}</p>
                        </div>
                    ))}
                </div>

            </section>


            {modalIndex !== null && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

                    {/* MODAL CONTAINER */}
                    <div className="relative w-[90vw] h-[95vh] flex flex-col items-center">

                        {/* CLOSE BUTTON */}
                        <button
                            className="absolute top-4 right-40 text-white text-3xl z-50"
                            onClick={() => setModalIndex(null)}
                        >
                            ✕
                        </button>

                        {/* IMAGE AREA */}
                        <div className="relative w-full h-[85vh] flex items-center justify-center">

                            {/* LEFT ARROW */}
                            <button
                                className="absolute left-4 md:-left-12 top-1/2 -translate-y-1/2
                     text-white text-5xl z-40"
                                onClick={() =>
                                    setModalIndex(
                                        (modalIndex - 1 + stepImages.length) % stepImages.length
                                    )
                                }
                            >
                                ‹
                            </button>

                            {/* IMAGE */}
                            <div className="relative w-full h-full mt-10">
                                <Image
                                    src={stepImages[modalIndex]}
                                    fill
                                    className="object-contain rounded-xl"
                                    alt="step"
                                />
                            </div>

                            {/* RIGHT ARROW */}
                            <button
                                className="absolute right-4 md:-right-12 top-1/2 -translate-y-1/2
                     text-white text-5xl z-40"
                                onClick={() =>
                                    setModalIndex((modalIndex + 1) % stepImages.length)
                                }
                            >
                                ›
                            </button>
                        </div>

                        {/* STEP TEXT */}
                        <p className=" absolute bottom-[80px] mt-3 px-4 text-white text-center text-lg max-w-3xl bg-black/60 rounded-xl ">
                            <span className="font-bold mr-2">
                                Step {modalIndex + 1}:
                            </span>
                            {stepDescriptions[modalIndex]}
                        </p>
                    </div>
                </div>
            )}




        </main>
    );
}
