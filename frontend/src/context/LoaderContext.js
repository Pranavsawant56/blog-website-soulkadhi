"use client";
import { createContext, useState, useCallback } from "react";

export const LoaderContext = createContext({
  hasLoaded: false,
  setHasLoaded: () => {},
  startLoading: () => {},
});

export function LoaderProvider({ children }) {
  const [hasLoaded, setHasLoaded] = useState(false);

  // Show loader (when route changes)
  const startLoading = useCallback(() => {
    setHasLoaded(false);
  }, []);

  // Hide loader (when page data finishes)
  const stopLoading = useCallback(() => {
    setHasLoaded(true);
  }, []);

  return (
    <LoaderContext.Provider
      value={{
        hasLoaded,
        setHasLoaded: stopLoading,
        startLoading,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
}
