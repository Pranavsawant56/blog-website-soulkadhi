"use client"
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import the client component (SSR: false)
const ClientCategoriesPage = dynamic(
  () => import("./ClientCategoriesPage.js"),
  { ssr: false } // important!
);

export default function CategoriesPage() {
  return (
    <Suspense fallback={<p>Loading categories...</p>}>
      <ClientCategoriesPage />
    </Suspense>
  );
}
