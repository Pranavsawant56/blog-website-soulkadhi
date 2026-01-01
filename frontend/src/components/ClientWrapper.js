"use client";

import { LoaderProvider } from "../context/LoaderContext";

export default function ClientWrapper({ children }) {
  return <LoaderProvider>{children}</LoaderProvider>;
}
