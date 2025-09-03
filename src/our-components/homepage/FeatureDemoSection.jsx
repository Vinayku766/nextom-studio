'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Div from "../common/DIv";

const tabs = [
  {
    id: "p1",
    label: "Podcast Edit",
    img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop",
    caption: "Multi-Cam sync • Auto captions • Noise removal",
  },
  {
    id: "p2",
    label: "Commercial Cut",
    img: "https://images.unsplash.com/photo-1600505782717-2f97b6df5ff8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29tbWVyY2lhbCUyMEN1dHxlbnwwfHwwfHx8MA%3D%3D",
    caption: "Shot-matching • Product beauty • SFX hits",
  },
  {
    id: "p3",
    label: "YouTube Pack",
    img: "https://images.unsplash.com/photo-1704018453307-d563498b585b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Chapters • B-roll finder • Title pack",
  },
  {
    id: "p4",
    label: "Short-Form",
    img: "https://images.unsplash.com/photo-1678854575668-3a7e3c50d621?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Vertical formats • Fast cuts • Trend hooks",
  },
];

export default function FeatureDemoSection() {
  const [selectedTab, setSelectedTab] = useState("p1");

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <Div className="absolute inset-0 z-0">
        <div className="absolute -top-32 left-16 w-96 h-96 bg-gray/50 blur-[160px] rounded-full"></div>
        <div className="absolute top-48 right-20 w-[500px] h-[500px] bg-gray-500/50 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-[420px] h-[420px] bg-gray-400/40 blur-[150px] rounded-full"></div>
      </Div>

      <Div className="relative container mx-auto px-6 max-w-6xl z-10">
        <div
          className="flex flex-wrap justify-center gap-4 border-b border-white/10 pb-8 mb-12"
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
              className={`px-6 py-2 cursor-pointer rounded-full font-semibold tracking-wide transition-all duration-300
                ${
                  selectedTab === id
                    ? "bg-theme-dark text-theme-light shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                    : "text-gray-400 hover:text-theme-light hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tabs
            .filter(({ id }) => id === selectedTab)
            .map(({ id, img, caption, label }) => (
              <motion.div
                key={id}
                role="tabpanel"
                id={id}
                aria-labelledby={`t-${id}`}
                className="space-y-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="overflow-hidden rounded-3xl shadow-2xl border border-purple-500/20 bg-gradient-to-b from-purple-800/20 to-purple-900/10 backdrop-blur-md">
                  <motion.img
                    src={img}
                    alt={`${label} image`}
                    className="w-full object-cover max-h-[480px] mx-auto transition-transform duration-700 hover:scale-105"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <p className="text-purple-100/90 text-2xl text-center font-light drop-shadow-md">
                  {caption}
                </p>
              </motion.div>
            ))}
        </AnimatePresence>
      </Div>
    </section>
  );
}
