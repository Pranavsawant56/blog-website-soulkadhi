"use client";
import { useEffect, useState } from "react";

export default function FetchBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Component mounted");

    const fetchData = async () => {
      try {
        console.log("Fetching data...");

        const res = await fetch("/api/blogs"); 
        // ⚠️ Use this if you made the Next.js API route
        // Otherwise put your full PHP URL here

        if (!res.ok) throw new Error("Network response failed");

        const data = await res.json();
        console.log("FULL API RESPONSE:", data);

        // 🔥 Handle ANY API structure safely
        if (Array.isArray(data)) {
          setBlogs(data);
        } else if (Array.isArray(data.blogs)) {
          setBlogs(data.blogs);
        } else {
          console.warn("Unexpected data format");
          setBlogs([]);
        }

      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Blogs</h1>

      {blogs.length === 0 && <p>No blogs found</p>}

      {blogs.map((blog, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <h2>{blog.heading}</h2>
          <p>{blog.short_info}</p>
        </div>
      ))}
    </div>
  );
}
