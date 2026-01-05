"use client";

import { useState, useEffect, useRef, useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";
import OverlayLoader from "../components/OverlayLoader";
import HeroSlider from "../components/HeroSlider";
import SearchBar from "../components/SearchBar";
import LatestVideoSection from "../components/LatestVideoSection";
import TrendingSection from "../components/TrendingSection";
import Soulkadhiintro from "../components/Soulkadhiintro";
import gsap from "gsap";

export default function HomePage() {
  const { hasLoaded, setHasLoaded } = useContext(LoaderContext);
  const [loading, setLoading] = useState(!hasLoaded);
  const [animated, setAnimated] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
  if (!hasLoaded) {
    const timer = setTimeout(() => {
      setLoading(false);
      setHasLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }
}, [hasLoaded, setHasLoaded]);


 useEffect(() => {
  if (!loading && pageRef.current && !hasLoaded) {
    gsap.from(pageRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      clearProps: "all", // IMPORTANT
    });
  }
}, [loading, hasLoaded]);


  return (
    <>
      {loading && <OverlayLoader />}
      <div ref={pageRef}>

        <HeroSlider />
        <SearchBar />
        <LatestVideoSection />
        <TrendingSection />
        <Soulkadhiintro />
      </div>
    </>
  );
}
