/* "use client";

import { LoaderProvider } from "../context/LoaderContext";

export default function ClientWrapper({ children }) {
  return <LoaderProvider>{children}</LoaderProvider>;
} */
"use client";

import { LoaderProvider } from "../context/LoaderContext";

export default function ClientWrapper({ children }) {
  return (
    <LoaderProvider>
      <div className="page-bg min-h-screen flex flex-col">
        {children}
      </div>
    </LoaderProvider>
  );
}



