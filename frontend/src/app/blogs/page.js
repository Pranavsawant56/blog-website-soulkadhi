'use client'
import { useState, useEffect, useRef } from 'react'
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
    '/images/aluwadi/stepimg/img7.jpeg', '/images/aluwadi/stepimg/img8.jpg', "/images/aluwadi/sliderimg/img2.jpeg",
    "/images/aluwadi/sliderimg/img3.jpeg", "/images/aluwadi/sliderimg/img2.jpeg",

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
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const stepDescriptions = [
    "Wash leaves",
    "Mix flour & spices",
    "Spread on leaves",
    "Roll tightly",
    "Steam till cooked",
    "Slice rolls",
    "Lightly fry",
    "Serve with chutney",
    "Roll tightly",
    "Steam till cooked",
    "Slice rolls",
    "Lightly fry",
    "Serve with chutney"
  ];
  const itemsPerPage = 2 * 2; // 2 columns * 2 rows per page (adjust if layout changes)
  const totalPages = Math.ceil(stepImages.length / itemsPerPage);


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
          <p className="leading-7 max-w-6xl ">
            Alu Wadi is a popular traditional snack from Maharashtra. It is made using alu (colocasia) leaves and gram flour with basic
            spices. The leaves are coated with the mixture, rolled, steamed, cut into pieces, and lightly fried. It is usually eaten as
            a tea-time snack or side dish and is commonly prepared at home. 🌿
          </p>
        </div>
      </section>


      <div className="flex items-center max-w-6xl mx-auto ">
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
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:px-6 py-6 items-start">

        {/* IMAGE SLIDER */}
        <div className="md:col-span-2 blend-image relative w-full max-w-full aspect-video rounded-xl overflow-hidden">
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
            <Image src="/images/material/leaf.svg" width={26} height={26} alt="leaf" />
            <h3 className="text-xl flex items-center mb-2 ml-2 w-full">
              Ingredients
              <span className="flex-grow mt-3 ml-3 h-[2px] bg-gradient-to-r 
            from-[#a0522d] via-[#a0522d]/30 to-transparent"></span>
            </h3>
          </div>

          {/* Ingredient Box */}
          <div className="relative rounded-[12px] overflow-hidden">
            <aside
              ref={scrollRef}
              className="bg-[#ccac8d]/40 shadow-inner border-[18px] border-transparent rounded-2xl
        [border-image:url('/images/material/br-extended.png')_32_stretch]
        [border-image-outset:2] max-h-92 overflow-y-auto
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
              <ul className="list-none text-sm leading-6 p-4 sm:p-6 space-y-2">
                {[
                  { name: "(Alu) Leaves", qty: "6–8 leaves" },
                  { name: "Gram Flour", qty: "250 Gm" },
                  { name: "aagul", qty: "½ cup" },
                  { name: "Salt", qty: "1 spoon" },
                  { name: "Spices", qty: "1 tsp" },
                  { name: "Oil", qty: "5 tbsp" },
                  { name: "(Alu) Leaves", qty: "6–8 leaves" },
                  { name: "Gram Flour", qty: "250 Gm" },
                  { name: "aagul", qty: "½ cup" },
                  { name: "Salt", qty: "1 spoon" },
                  { name: "Spices", qty: "1 tsp" },
                  { name: "Oil", qty: "5 tbsp" },
                ].map((item, idx, arr) => (
                  <li key={idx}>
                    <div className="grid grid-cols-[1fr_140px] gap-4 items-start">
                      <div className="flex items-start gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-black/70" />
                        <span>{item.name}</span>
                      </div>
                      <span className="text-left ml-15">{item.qty}</span>
                    </div>

                    {idx !== arr.length - 1 && (
                      <div className="mt-3 ml-3 h-[2px] w-[90%] bg-gradient-to-r from-[#a0522d] via-[#a0522d]/40 to-transparent" />
                    )}
                  </li>
                ))}
              </ul>
            </aside>

            {/* ⬇️ Scroll Down Button */}
            <button
              onClick={scrollDown}
              className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-md shadow-lg
           rounded-full w-8 h-8 flex items-center justify-center
           hover:bg-white transition">
              ▼
            </button>
          </div>
        </div>
      </section>

      {/* INTRO + HOW TO MAKE */}
      <section className="max-w-6xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-6">

        {/* INTRO */}
        <div className="relative">
          <div className="flex items-center mb-1 w-full">
            <Image src="/images/material/mat2.png" width={26} height={26} alt="leaf" />
            <h3 className=" text-xl flex items-center ml-2 w-full">
              Introduction
              <span className="flex-grow  mt-3 ml-3 h-[2px] bg-gradient-to-r 
                  from-[#a0522d] 
                  via-[#a0522d]/40 
                  /* via-[#a0522d]/10  */
                  to-transparent"></span>
            </h3>
          </div>

          <aside className=" p-4 rounded-xl shadow-inner pt-4">
            <p>
              <strong>Alu Wadi</strong> is a <strong>traditional and much-loved dish from Maharashtra</strong>, especially from the
              <strong> Konkan region</strong>. It is prepared using <strong>fresh alu leaves</strong>, also known as
              <strong> colocasia or taro leaves</strong>, which grow abundantly during the
              <strong> monsoon season</strong>. This dish represents the
              <strong> deep connection between local food, seasonal ingredients, and traditional cooking methods</strong>
              followed in many Maharashtrian households. <strong>Alu Wadi is not just a snack or side dish</strong>; it is a
              <strong> reflection of regional wisdom</strong>, where <strong>nature and food come together in perfect balance</strong>.
              The main ingredient, <strong>alu leaves</strong>, are <strong>large, heart-shaped green leaves</strong> that require
              <strong> careful handling</strong>. Though nutritious, <strong>raw alu leaves can cause itching</strong> if not
              prepared properly. <strong>Traditional cooking methods</strong> ensure that the leaves are
              <strong> cleaned thoroughly and cooked well</strong> to make them <strong>safe and delicious</strong>.
              This <strong>knowledge has been passed down through generations</strong>, especially among
              <strong> women in village households</strong>, who learned how to prepare Alu Wadi with
              <strong> patience and care</strong>.
            </p>

          </aside>
        </div>

        {/* HOW TO MAKE */}
        <div className="relative overflow-hidden">
          <div className="flex items-center  w-full">
            <Image src="/images/material/leaf.svg" width={26} height={26} alt="leaf" />
            <h3 className="text-xl flex items-center mb-2 ml-2 w-full">
              How To Make
              <span className="flex-grow mt-3 ml-3 h-[2px] bg-gradient-to-r 
            from-[#a0522d] via-[#a0522d]/30 to-transparent"></span>
            </h3>
          </div>
          <aside className="p-8 rounded-xl shadow-inner pt-4">

            {/* SLIDER WINDOW */}
            <div className="overflow-hidden h-[320px]">
              <div
                className="grid grid-cols-2 gap-2 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateY(-${sPage * 320}px)`,
                }}
              >
                {stepImages.map((img, i) => (
                  <div key={i} className="flex flex-col items-center py-1">
                    <div className="relative w-[200px] h-[120px]">

                      <button
                        onClick={() => setModalIndex(i)}
                        className="w-full h-full rounded-xl overflow-hidden"
                      >
                        <Image
                          src={img}
                          fill
                          className="object-cover"
                          alt={`step ${i + 1}`}
                        />
                      </button>

                      {/* STEP NUMBER */}
                      <span className="absolute -bottom-1 -left-1 z-10 w-6 h-6 border border-black bg-white text-black flex items-center justify-center font-bold shadow">
                        {i + 1}
                      </span>
                    </div>

                    <span className="mt-1 text-sm font-medium text-[#3b2f2f] text-center ">
                      {stepDescriptions[i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BUTTON */}
            <div className="flex justify-center mt-4">
              <button
                className="w-[25%] bg-[#7b4a2e] text-white rounded-lg py-1"
                onClick={() => setSPage(prev => (prev + 1) % totalPages)}
              >
                {sPage === totalPages - 1 ? "▲" : "▼"}
              </button>


            </div>

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
              <span className="flex-grow  mt-3 ml-3 h-[2px] bg-gradient-to-r 
                  from-[#a0522d] 
                  via-[#a0522d]/40 
                  /* via-[#a0522d]/10  */
                  to-transparent"></span>
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
              <span className="flex-grow  mt-3 ml-3 h-[2px] bg-gradient-to-r 
                  from-[#a0522d] 
                  via-[#a0522d]/30 
                  /* via-[#a0522d]/10  */
                  to-transparent"></span>
            </h3>
          </div>

          <aside className=" p-4 rounded-xl shadow-inner">
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
              <span className="flex-grow  mt-3 ml-3 h-[2px] bg-gradient-to-r 
                  from-[#a0522d] 
                  via-[#a0522d]/40 
                  /* via-[#a0522d]/10  */
                  to-transparent"></span>
            </h3>
          </div>

          <aside className=" p-4 rounded-xl shadow-inner">
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
              <span className="flex-grow  mt-3 ml-3 h-[2px] bg-gradient-to-r 
                  from-[#a0522d] 
                  via-[#a0522d]/40 
                  /* via-[#a0522d]/10  */
                  to-transparent"></span>
            </h3>
          </div>

          <aside className=" p-4 rounded-xl shadow-inner space-y-2">
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
      <section className="py-6">
        {/* TOP BORDER */}
        <div className="flex items-center max-w-6xl mx-auto ">
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

        {/* WRAPPER */}
        <div className="max-w-5xl mx-auto grid grid-cols-[30%_70%] gap-6 items-start">

          {/* LEFT BOX — 30% */}
          <div className="flex items-start gap-3 mt-15">
            <Image
              src="/images/material/leaf-1.png"
              width={40}
              height={40}
              alt="leaf"
            />
            <h2 className="font-serif text-2xl leading-tight">
              Health  Benefits
            </h2>
            <span className="flex-grow  mt-3 ml-3 h-[2px] bg-gradient-to-r 
                  from-[#a0522d] 
                  via-[#a0522d]/30 
                  /* via-[#a0522d]/10  */
                  to-transparent"></span>
          </div>

          {/* RIGHT BOX — 70% */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-5 mb-5">
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/images/material/rich-in-fiber.png"
                width={120}
                height={120}
                alt="Fiber"
              />
              <p>Rich in Fiber</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Image
                src="/images/material/high-in-vitamins.png"
                width={120}
                height={130}
                alt="Vitamins"
              />
              <p>High in Vitamins</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Image
                src="/images/material/no-preservatives.png"
                width={120}
                height={120}
                alt="No Preservatives"
              />
              <p>No Preservatives</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Image
                src="/images/material/traditional.png"
                width={120}
                height={130}
                alt="Traditional"
              />
              <p>Wholesome & Traditional</p>
            </div>
          </div>

        </div>

        {/* BOTTOM BORDER */}
        <div className="flex items-center max-w-6xl mx-auto ">
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
      </section>


      {/* WHY KONKAN LOVES IT */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 mb-4 w-full">
          <Image src="/images/material/leaf.svg" width={30} height={30} alt="leaf" />
          <h2 className="font-serif text-2xl flex items-center w-full">
            Complimentary Foods
            <span className="flex-grow  mt-3 ml-3 h-[2px] bg-gradient-to-r 
                  from-[#a0522d] 
                  via-[#a0522d]/50 
                  /* via-[#a0522d]/10  */
                  to-transparent"></span>
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
