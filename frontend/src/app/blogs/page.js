'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function AluVadiPage() {
  const sliderImages = [
    "/images/aluwadi/sliderimg/img1.jpg",
    "/images/aluwadi/sliderimg/img2.jpeg",
    "/images/aluwadi/sliderimg/img3.jpeg",
  ]
  const stepImages = [
    '/images/aluwadi/stepimg/step1.jpeg', '/images/aluwadi/stepimg/step2.jpeg', '/images/aluwadi/stepimg/step3.jpeg', '/images/aluwadi/stepimg/step4.jpeg',
    '/images/aluwadi/stepimg/img5.jpeg', '/images/aluwadi/stepimg/step6.jpeg', '/images/aluwadi/stepimg/img7.jpeg', '/images/aluwadi/stepimg/img8.jpg',
  ]

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

  // Auto slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const stepDescriptions = [
    "Wash and prepare the colocasia leaves",
    "Mix gram flour with spices",
    "Spread mixture on leaves",
    "Roll the leaves tightly",
    "Steam the rolls until cooked",
    "Cut into slices",
    "Lightly fry the slices",
    "Serve with chutney or solkadhi"
  ];

  return (
    <main className="bg-[url('/images/material/Texture.png')]  bg-fix bg-cover bg-center bg-repeat text-[#3b2f2f]">


      {/* HERO */}
      <section className="relative h-[20vh] w-full flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src="images/blogpost-banner/herobanner.png"
            fill
            className="object-cover"
            alt="Alu Vadi"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute text-center px-4">
          <h1 className="{`text-4xl md:text-5xl text-white tracking-wide ${playfair.className}`}">
            Alu Vadi
          </h1>
          <p className="text-lg text-white mt-2 ${baskerville.className}">
            Traditional Konkani Recipe
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-6xl mx-auto mb-0 px-6 py-6 space-y-4 ">
        <div className="space-y-4">
          <p className="leading-7 max-w-4xl ">
            Alu Wadi is a popular traditional snack from Maharashtra. It is made using alu (colocasia) leaves and gram flour with basic
            spices. The leaves are coated with the mixture, rolled, steamed, cut into pieces, and lightly fried. It is usually eaten as
            a tea-time snack or side dish and is commonly prepared at home. 🌿
          </p>
        </div>
      </section>

      {/* SLIDER + INGREDIENTS */}
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 py-6 items-start">

        {/* IMAGE SLIDER */}
        <div className="md:col-span-2 relative h-[320px] rounded-xl overflow-hidden ">
          <Image
            src={sliderImages[index]}
            fill
            className="object-cover transition-opacity duration-700"
            alt="Alu Vadi"
            priority
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                        linear-gradient(to top,rgba(227, 199, 165, 1), transparent 5%),
                        linear-gradient(to bottom, rgba(227, 199, 165, 1), transparent 5%),
                        linear-gradient(to left,rgba(227, 199, 165, 1), transparent 10%),
                        linear-gradient(to right, rgba(227, 199, 165, 1), transparent 0%)
                         `
            }}
          />
        </div>

        <div className="w-80">
          {/* Heading outside the box */}
          <div className="flex items-center mb-1 w-full">
            <Image src="/images/material/leaf.svg" width={26} height={26} alt="leaf" />
            <h3 className="font-serif text-xl flex items-center ml-2 w-full">
              Ingredients
              <span className="flex-grow border-b-2 border-[#a0522d] ml-3"></span>
            </h3>
          </div>

          {/* Ingredient Box */}
          <aside className="bg-[#efe3cf] rounded-xl shadow-inner border-2 border-[#a0522d] max-h-72 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">

            <ul className="list-none text-sm leading-6 p-6 space-y-2">
              {[
                { name: " (Alu) Leaves", qty: "6–8 leaves" },
                { name: "Gram Flour", qty: "250 Gram" },
                { name: "aagul", qty: "½ cup" },
                { name: "Salt", qty: "1 spoon" },
                { name: " Spices", qty: "1 tsp" },
                { name: "Oil", qty: "5 tbsp" },
                 { name: " (Alu) Leaves", qty: "6–8 leaves" },
                { name: "Gram Flour", qty: "250 Gram" },
                { name: "aagul", qty: "½ cup" },
                { name: "Salt", qty: "1 spoon" },
                { name: " Spices", qty: "1 tsp" },
                { name: "Oil", qty: "5 tbsp" },

              ].map((item, idx) => (
                <li key={idx}>
                  <div className="grid grid-cols-[1fr_140px] gap-6 items-start">

                    {/* Ingredient with bullet */}
                    <div className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-black/70" />
                      <span>{item.name}</span>
                    </div>

                    {/* Measurement (left-aligned) */}
                    <span className="text-left ml-5">{item.qty}</span>

                  </div>
                  <hr className="mt-2 border-[#a0522d]" />
                </li>
              ))}
            </ul>


          </aside>

        </div>
      </section>

      {/* INTRO + HOW TO MAKE */}
      <section className="max-w-6xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-6">

        {/* INTRO */}
        <div className="relative">
          <div className="flex items-center mb-1 w-full">
            <Image src="/images/material/mat2.png" width={26} height={26} alt="leaf" />
            <h3 className="font-serif text-xl flex items-center ml-2 w-full">
              Introduction
              <span className="flex-grow border-b-2 border-[#a0522d] ml-3"></span>
            </h3>
          </div>

          <aside className="bg-[#efe3cf] p-4 rounded-xl shadow-inner pt-4">
            <p className="text-sm leading-6">
              Alu Wadi is a traditional and much-loved dish from Maharashtra, especially from the Konkan region.
              It is prepared using fresh alu leaves, also known as colocasia or taro leaves, which grow abundantly
              during the monsoon season. This dish represents the deep connection between local food, seasonal ingredients,
              and traditional cooking methods followed in many Maharashtrian households. Alu Wadi is not just a snack or side dish;
              it is a reflection of regional wisdom, where nature and food come together in perfect balance. The main ingredient,
              alu leaves, are large, heart-shaped green leaves that require careful handling. Though nutritious, raw alu leaves can cause itching
              if not prepared properly. Traditional cooking methods ensure that the leaves are cleaned thoroughly and cooked well to make them safe
              and delicious. This knowledge has been passed down through generations, especially among women in village households, who learned how
              to prepare Alu Wadi with patience and care. how many words are the
            </p>
          </aside>
        </div>

        {/* HOW TO MAKE */}
        <div className="relative">
          <div className="flex items-center mb-1 w-full px-3 ">
            <Image src="/images/material/mat4.svg" width={26} height={26} alt="leaf" />
            <h3 className="font-serif text-xl flex items-center ml-2 w-full">
              How to Make
              <span className="flex-grow border-b-2 border-[#a0522d] ml-3"></span>
            </h3>
          </div>

          <aside className="bg-[#efe3cf] p-4 rounded-xl shadow-inner pt-4">
            <div className="grid grid-cols-2 gap-2  ">
              {stepImages.slice(stepPage * 4, stepPage * 4 + 4).map((img, i) => (
                <div key={i} className="flex flex-col items-center">
                  <button onClick={() => setModalIndex(stepPage * 4 + i)} className="relative">
                    <Image
                      src={img}
                      width={200}
                      height={120}
                      className="rounded-xl"
                      alt={`step ${stepPage * 4 + i + 1}`}
                    />

                    {/* STEP NUMBER */}
                    <span className="absolute bottom-2 left-2 bg-[#7b4a2e] text-white
                         w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">
                      {stepPage * 4 + i + 1}
                    </span>
                  </button>

                  <span className="mt-1 text-sm font-medium text-[#3b2f2f] text-center">
                    {stepDescriptions[stepPage * 4 + i]}
                  </span>
                </div>
              ))}
            </div>

            <button
              className="mt-2 w-full bg-[#7b4a2e] text-white py-2 rounded"
              onClick={() => setStepPage(stepPage === 0 ? 1 : 0)}
            >
              ▼
            </button>
          </aside>
        </div>

      </section>

      {/* VIDEO + MAIN INGREDIENT */}
      <section className="max-w-6xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-6 items-start">

        <div className="relative">

          {/* Heading */}
          <div className="flex items-center mb-1 w-full px-3 py-1">
            <Image src="/images/material/3leafs.png" width={26} height={26} alt="leaf" />
            <h3 className="font-serif text-xl flex items-center ml-2 w-full">
              Recipe Video
              <span className="flex-grow border-b-2 border-[#a0522d] ml-3"></span>
            </h3>
          </div>

          {/* Video Thumbnail with Play Button */}
          <aside className="bg-[#efe3cf] p-2 rounded-xl shadow-inner">
            <div
              className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setVideoOpen(true)}
            >
              {/* Thumbnail image */}
              <Image
                src="/images/aluwadi/main-img/aluwadi.jpeg" // you can use video thumbnail
                fill
                className="object-cover"
                alt="Alu Vadi Video Thumbnail"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-4xl bg-red-600 rounded-full px-4 py-2">▶</span>
              </div>
            </div>
          </aside>

          {/* VIDEO MODAL */}
          {videoOpen && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            >
              <div className="relative w-[90%] md:w-[70%] aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/BqvZvF-UczY?autoplay=1"
                  title="Alu Wadi Recipe"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <button
                  className="absolute -top-8 right-3 bg-black/20 rounded-lg px-2 text-white font-bold text-lg"
                  onClick={() => setVideoOpen(false)}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </div>


        {/* MAIN INGREDIENT */}
        <div className="relative">
          <div className="flex items-center mb-1 w-full px-3 py-1">
            <Image src="/images/material/leaf3.png" width={26} height={26} alt="leaf" />
            <h3 className="font-serif text-xl flex items-center ml-2 w-full">
              Main Ingredient – Colocasia Leaves
              <span className="flex-grow border-b-2 border-[#a0522d] ml-3"></span>
            </h3>
          </div>

          <aside className="bg-[#efe3cf] p-4 rounded-xl shadow-inner">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/aluwadi/main-img/aluwadi.jpeg"
                width={220}
                height={160}
                className="rounded-lg mb-2"
                alt="Alu Leaves"
              />
              <h4 className="font-semibold text-lg mb-1">Alu (Colocasia) Leaves</h4>
              <p className="text-sm leading-6 max-w-sm">
                Fresh colocasia leaves are the heart of Alu Vadi.
                They give the dish its unique flavor and texture.
                Always choose tender, medium-sized leaves for the best taste.
              </p>
            </div>
          </aside>
        </div>

      </section>

      {/* HISTORY + GEOGRAPHY */}
      <section className="max-w-6xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-6">

        {/* HISTORY */}
        <div className="relative">
          <div className="flex items-center mb-1 w-full px-3 py-1">
            <Image src="/images/material/mat2.png" width={26} height={26} alt="leaf" />
            <h3 className="font-serif text-xl flex items-center ml-2 w-full">
              History of Alu Vadi
              <span className="flex-grow border-b-2 border-[#a0522d] ml-3"></span>
            </h3>
          </div>

          <aside className="bg-[#efe3cf] p-4 rounded-xl shadow-inner">
            <p className="text-sm leading-7">
              Alu Wadi (अळू वडी) is a traditional and much-loved dish from Maharashtra’s Konkan region 🌿.
              Its roots lie in village life during the monsoon season, when fresh colocasia (alu) leaves grow
              abundantly around homes and fields. Using simple local ingredients like besan, spices, and tamarind,
              families developed this dish as a nutritious, filling, and long-lasting food during rainy days. Traditionally
              cooked on a chulha, Alu Wadi reflects Konkan’s deep connection to nature, seasonal cooking, and the wisdom passed down through generations.
            </p>
          </aside>
        </div>

        {/* GEOGRAPHY & WEATHER */}
        <div className="relative">
          <div className="flex items-center mb-1 w-full px-3 py-1">
            <Image src="/images/material/leaf2.svg" width={26} height={26} alt="leaf" />
            <h3 className="font-serif text-xl flex items-center ml-2 w-full">
              Geography & Weather
              <span className="flex-grow border-b-2 border-[#a0522d] ml-3"></span>
            </h3>
          </div>

          <aside className="bg-[#efe3cf] p-4 rounded-xl shadow-inner space-y-2">
            <Image
              src="/images/aluwadi/weather/weather.png"
              width={500}
              height={160}
              className="rounded-lg object-cover w-48 md:w-64 mx-auto"
              alt="Konkan Monsoon Weather"
            />
            <p className="text-sm leading-7">
              The Konkan region’s coastal geography, fertile laterite soil,
              and heavy monsoon rainfall create ideal conditions for colocasia
              cultivation. Alu Vadi is closely tied to this climate, making it
              a comforting monsoon specialty.
            </p>
          </aside>
        </div>

      </section>

      {/* HEALTH BENEFITS */}
      <section className=" py-6">
        <div className="max-w-5xl m-auto grid grid-cols-5 pb-5">
          {Array(5).fill(borderImage[0]).map((src, i) => (
            <Image key={i} src={src} width={200} height={80} alt="leaf" />
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center ">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Image src="/images/material/leaf-1.png" width={40} height={40} alt="leaf" />
            <h2 className="font-serif text-2xl">Health Benefits</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm ">
            <div className="flex flex-col items-center gap-2 ">
              <Image src="/images/material/rich-in-fiber.png" width={120} height={120} alt="Fiber" />
              <p>Rich in Fiber</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image src="/images/material/high-in-vitamins.png" width={120} height={130} alt="Vitamins" />
              <p>High in Vitamins</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image src="/images/material/no-preservatives.png" width={120} height={120} alt="No Preservatives" />
              <p>No Preservatives</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image src="/images/material/traditional.png" width={120} height={130} alt="Traditional" />
              <p>Wholesome & Traditional</p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl m-auto grid grid-cols-5 pt-5">
          {Array(5).fill(borderImage[0]).map((src, i) => (
            <Image key={i} src={src} width={200} height={80} alt="leaf" />
          ))}
        </div>
      </section>

      {/* WHY KONKAN LOVES IT */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 mb-4 w-full">
          <Image src="/images/material/leaf.svg" width={30} height={30} alt="leaf" />
          <h2 className="font-serif text-2xl flex items-center w-full">
            Complimentary Foods
            <span className="flex-grow border-b-2 border-[#a0522d] ml-3"></span>
          </h2>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[{ img: serveImages[0], label: "Solkadhi" },
          { img: serveImages[1], label: "Steamed Rice" },
          { img: serveImages[2], label: "Pickle" },
          { img: serveImages[3], label: "Chutney" }].map((item, i) => (
            <div key={i} className="space-y-2">
              <Image src={item.img} width={250} height={180} className="rounded-lg mx-auto" alt={item.label} />
              <p className="text-sm font-medium">{item.label}</p>
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
              className="absolute top-4 right-6 text-white text-3xl z-50"
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
              <div className="relative w-full h-full">
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
            <p className="mt-3 px-4 text-white text-center text-lg max-w-3xl">
              <span className="font-bold mr-2">
                Step {modalIndex + 1}:
              </span>
              {stepDescriptions[modalIndex]}
            </p>
          </div>
        </div>
      )}




    </main>
  )
}
