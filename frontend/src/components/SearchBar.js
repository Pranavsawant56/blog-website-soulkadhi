"use client"
import { useState } from "react";
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"; // search icon

export default function SearchBar() {

    const [text, setText] = useState("");
    const router = useRouter();

    const handelSearch = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        router.push(`/search?query=${encodeURIComponent(text)}`)
    };

    return (
        <div className="py-4"
            style={{ backgroundColor: "var(--color-grey-orange)" }}>
            <form onSubmit={handelSearch}
                className="max-w-6xl mx-auto  flex bg-white rounded-2xl overflow-hidden shadow"
            >
                <input value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Search for your favorite video"
                    className="w-full p-2 pl-20 text-md outline-none text-black text-center" />

                <button
                    type="submit"
                    className=" px-6 flex items-center justify-center hover:bg-(--color-grey-brown) transition"
                >
                    <Search size={24} className="text-black" />
                </button>

            </form>

        </div>
    );
}