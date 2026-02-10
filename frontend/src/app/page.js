"use client";

import { useEffect, useState, useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";
import HeroSlider from "../components/HeroSlider";
import SearchBar from "../components/SearchBar";
import LatestVideoSection from "../components/LatestVideoSection";
import TrendingSection from "../components/TrendingSection";
import Soulkadhiintro from "../components/Soulkadhiintro";
import Instaslider from "../components/Instaslider";
import LatestBlogsection from "../components/LatestBlogSection";
// import blogsData from "@/blog.json"; // ✅ Use this directly


export default function HomePage() {
  const { setHasLoaded } = useContext(LoaderContext);

  const [videos, setVideos] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // 🎥 Fetch videos
        const resVideos = await fetch(
          "https://soulkadhi.anubhootee.com/phpserver/get_videos.php"
        );

        if (!resVideos.ok) throw new Error("Videos API failed");
        const videoData = await resVideos.json();
        setVideos(videoData);

        // 📝 Fetch blogs from live API
        const resBlogs = await fetch(
          "https://soulkadhi.anubhootee.com/phpserver/recipe.php"
        );
        if (!resBlogs.ok) throw new Error("Blogs API failed");
        const blogData = await resBlogs.json();

        // Sort by date if needed (newest first)
        const sortedBlogs = blogData.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        setBlogs(sortedBlogs);

      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setHasLoaded(true);
      }
    }

    fetchData();
  }, [setHasLoaded]);
  return (
    <div>
      <HeroSlider />
      <SearchBar />
      <LatestVideoSection videos={videos} />
      <LatestBlogsection blogs={blogs} />
      <TrendingSection videos={videos} />
      <Soulkadhiintro />
      <Instaslider />

    </div>
  );
}
