'use client'

import { useState } from "react";

const tabs = [
  {
    id: "p1",
    label: "Podcast Edit",
    img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop",
    caption: "Multi‑Cam sync • Auto captions • Noise removal",
  },
  {
    id: "p2",
    label: "Commercial Cut",
    img: "https://images.unsplash.com/photo-1543596322-7e16a72555f9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Shot‑matching • Product beauty • SFX hits",
  },
  {
    id: "p3",
    label: "YouTube Pack",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
    caption: "Chapters • B‑roll finder • Title pack",
  },
  {
    id: "p4",
    label: "Short‑Form",
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop",
    caption: "Vertical formats • Fast cuts • Trend hooks",
  },
];

export default function FeatureDemoSection() {
  const [selectedTab, setSelectedTab] = useState("p1");

  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <div
          className="flex space-x-4 border-b border-gray-700 mb-8"
          role="tablist"
          aria-label="Feature demos"
        >
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              role="tab"
              id={`t-${id}`}
              aria-selected={selectedTab === id}
              aria-controls={id}
              tabIndex={selectedTab === id ? 0 : -1}
              onClick={() => setSelectedTab(id)}
              className={`px-4 py-2 rounded-t-md font-semibold transition-colors focus:outline-none
                ${
                  selectedTab === id
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {tabs.map(({ id, img, caption }) => (
          <div
            key={id}
            role="tabpanel"
            id={id}
            aria-labelledby={`t-${id}`}
            hidden={selectedTab !== id}
            className="space-y-4"
          >
            <div className="overflow-hidden rounded-lg shadow-lg border border-gray-700">
              <img
                src={img}
                alt={`${tabs.find((t) => t.id === id).label} image`}
                className="w-full object-cover max-h-[400px] mx-auto"
              />
            </div>
            <p className="text-gray-300 text-lg">{caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
