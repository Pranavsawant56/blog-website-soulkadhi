"use client";
import { createContext, useState } from "react";

export const LoaderContext = createContext({
  hasLoaded: false,
  setHasLoaded: () => {},
});

export function LoaderProvider({ children }) {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <LoaderContext.Provider value={{ hasLoaded, setHasLoaded }}>
      {children}
    </LoaderContext.Provider>
  );
}
