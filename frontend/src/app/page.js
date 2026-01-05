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
        setHasLoaded(true); // runs only once
      }, 2000); // simulate data load
      return () => clearTimeout(timer);
    }
  }, [hasLoaded, setHasLoaded]);

  useEffect(() => {
    if (!loading && pageRef.current && !animated) {
      gsap.from(pageRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });
      setAnimated(true);
    }
  }, [loading, animated]);

  return (
    <>
      {loading && <OverlayLoader />}
      <div ref={pageRef} className={loading ? "opacity-0" : "opacity-100"}>
        <HeroSlider />
        <SearchBar />
        <LatestVideoSection />
        <TrendingSection />
        <Soulkadhiintro />
      </div>
    </>
  );
}
