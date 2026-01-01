 "use client";

import { useEffect, useState } from "react";

const steps = [
  {
    id: 1,
    text: "Clean and wash the chicken thoroughly and keep aside.",
    image: "/images/kaul-chicken/stepimage/step1.jpeg",
  },
  {
    id: 2,
    text: "Prepare fresh Konkan masala using coconut and spices.",
    image: "/images/kaul-chicken/stepimage/step1.jpeg",
  },
  {
    id: 3,
    text: "Slowly fry onions until golden brown.",
    image: "/images/kaul-chicken/stepimage/step1.jpeg",
  },
  {
    id: 4,
    text: "Add chicken and masala, cook on low flame.",
    image: "/images/kaul-chicken/stepimage/step1.jpeg",
  },
  {
    id: 5,
    text: "Cook until oil separates. Serve hot with rice.",
    image: "/images/kaul-chicken/stepimage/step1.jpeg",
  },
];

export default function BlogPostDemo() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* HERO */}
      <section className="relative h-[30vh]">
        <img
          src="/images/kaul-chicken/stepimage/step3.jpeg"
          alt="Kaul Chicken"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-5xl px-6 text-white">
            <h1 className="text-5xl font-extrabold">Kaul Chicken</h1>
            <p className="mt-4 max-w-2xl text-lg">
              A traditional Konkan-style chicken recipe cooked slowly with rustic spices.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        {/* ================= NEWSPAPER STYLE SINGLE PARAGRAPH + VIDEO ================= */}
        <div className="text-lg leading-8 text-neutral-800">
          <div className="float-right ml-6 mb-4 w-full md:w-[40%] rounded-3xl overflow-hidden shadow-lg">
            <div className="relative aspect-video">
              <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/-EYyEZw0hIY?si=7LQQ-Uz1htxD9Qgl"
            title="Kaul Chicken Recipe"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
            </div>
          </div>

          <p>
            Kaul Chicken is a traditional dish from the Konkan region, commonly prepared
            during village gatherings and festive occasions. This dish reflects the
            slow-paced cooking style of rural kitchens, where flavors develop gradually.
            Fresh coconut, onions, and hand-ground spices form the base of the masala.
            The chicken is cooked on low heat, allowing the flavors to deepen and blend
            naturally. Once the video height ends, this text automatically flows across
            the full width, giving a clean newspaper-style reading experience in a
            single paragraph.
          </p>

          <div className="clear-both" />
        </div>

        {/* INGREDIENTS */}
        <div className="mt-14">
          <h2 className="mb-4 text-2xl font-bold">Ingredients</h2>
          <ul className="grid md:grid-cols-2 gap-y-3 list-disc list-inside text-neutral-800">
            <li>Chicken pieces</li>
            <li>Onions</li>
            <li>Fresh coconut</li>
            <li>Konkan masala</li>
            <li>Ginger & garlic</li>
            <li>Oil and salt</li>
          </ul>
        </div>

        {/* STEP SLIDER */}
        <div className="mt-24">
          <h2 className="mb-8 text-2xl font-bold">Cooking Steps</h2>
          <StepSlider />
        </div>
      </section>
    </main>
  );
}

/* STEP SLIDER COMPONENT */
function StepSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {steps.map((step) => (
          <div key={step.id} className="min-w-full">
            <div className="flex bg-white rounded-3xl shadow-lg overflow-hidden">
              <img
                src={step.image}
                alt={`Step ${step.id}`}
                className="w-1/2 h-[300px] object-cover"
              />
              <div className="w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4">Step {step.id}</h3>
                <p className="text-neutral-700 leading-7">{step.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


