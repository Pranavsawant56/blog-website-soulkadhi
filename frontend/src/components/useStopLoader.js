// hooks/useStopLoader.js
import { useEffect, useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";

export default function useStopLoader() {
  const { setHasLoaded } = useContext(LoaderContext);

  useEffect(() => {
    setHasLoaded(true);
  }, [setHasLoaded]);
}
