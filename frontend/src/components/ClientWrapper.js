"use client";

import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LoaderContext } from "../context/LoaderContext";
import OverlayLoader from "../components/OverlayLoader";

export default function ClientWrapper({ children }) {
  const { hasLoaded, setHasLoaded } = useContext(LoaderContext);
  const pathname = usePathname();

  useEffect(() => {
    setHasLoaded(false); // show loader on every route change
  }, [pathname, setHasLoaded]);

  return (
    <>
      {!hasLoaded && <OverlayLoader />}
      <div className="page-bg min-h-screen flex flex-col">{children}</div>
    </>
  );
}
