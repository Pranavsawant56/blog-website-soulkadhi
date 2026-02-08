// /blogpost/[slug]/page.js
import BlogPostClient from "./BlogPostClient";
import blogsData from "@/blog.json";

let blogjson = null;

// ✅ Generate static params for export
export function generateStaticParams() {

  return blogsData.blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Server Component (default)
export default async function RecipePage({ params }) {
 
 
  const { slug } =  await params; // now safe in async function
console.log(slug);
   const res =  await fetch("https://soulkadhi.anubhootee.com/phpserver/recipe.php?slug="+ slug);
    const blogjson = await res.json();
  console.log(blogjson);
  

  // Find the blog in local JSON
  const recipe = blogjson;

  if (!recipe) return <p>Blog not found</p>;

  // Pass blog data to client component
  return <BlogPostClient blog={recipe} />;
}




/* "use client";

import BlogPostClient from "./BlogPostClient";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function RecipePage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (!slug) return;

    fetch(`https://soulkadhi.anubhootee.com/phpserver/recipe.php?slug=${slug}`)
      .then(res => res.json())
      .then(data => {
        const BASE = "https://soulkadhi.anubhootee.com";

        const fixPath = (path) => path ? BASE + (path.startsWith("/") ? path : "/" + path) : null;
        const formattedData = {
          ...data,
          thumbnail_image: fixPath(data.thumbnail_image),
          slider_images: data.slider_images?.map(fixPath) || [],
          steps: data.steps?.map(step => ({
            ...step,
            image: fixPath(step.image)
          })) || [],
          recipe_video_thumbnail: fixPath(data.recipe_video_thumbnail),
          geography_weather: data.geography_weather
            ? {
              ...data.geography_weather,
              weather_icon: fixPath(data.geography_weather.weather_icon)
            }
            : null
        };


        console.log("FORMATTED DATA:", formattedData);
        setRecipe(formattedData);
      })
      .catch(err => console.error("Error:", err));
  }, [slug]);

  if (!recipe) return <p>Loading...</p>;


  // send recipe data to UI component
  return <BlogPostClient blog={recipe} />;
}
 */