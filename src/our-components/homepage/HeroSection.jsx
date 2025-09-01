'use client'
import React from 'react'
import Div from '../common/DIv'


const HeroSection = () => {
  return (
    <section id="top" className="relative w-full bg-gradient-to-r from-theme-dark/90 via-theme-dark/50 to-theme-light/10 text-white px-6 py-10 md:py-20">
      {/* Video Section (Background) */}
      <Div className="absolute top-0 left-0 w-full h-full -z-1 bg-gradient-to-b from-gray-400 to-gray-700">
        <video
          id="heroVideo"
          autoPlay
          muted
          loop
          playsInline
          // poster="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1600&auto=format&fit=crop"
          className="w-full h-full object-cover"
        >
          <source
            src="/videos/Hero-Back-2.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
      </Div>

      <Div className="container max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-5 relative z-10">
        {/* Text Content */}
        <div className="flex-2 space-y-6">
          <span className="inline-block bg-white/10 text-sm px-3 py-1 rounded-full tracking-wide">
            Premium Video Editing • Fast Turnarounds
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Crafting{' '}
            <span className="bg-gradient-to-r from-primary-aqua to-secondary-blue bg-clip-text text-transparent">
              Cinematic Stories
            </span>{' '}
            for Brands & Creators
          </h1>
          <p className="text-gray-100 max-w-xl">
            We’re a full‑stack post‑production team delivering trailers, ads, YouTube edits,
            podcasts, and short‑form that convert. Collaborate in real‑time, review with
            time‑stamped comments, and ship faster.
          </p>

          {/* Neon Divider */}
          <div className="w-20 h-1 bg-graident-to-r from-primary-aqua to-secondary-blue rounded-full" />

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#cta"
              className="px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Start a Project
            </a>
            <a
              href="#showcase"
              className="px-6 py-3 rounded-md border border-white/30 text-white hover:border-white transition"
            >
              Watch Showreel
            </a>
              {/* <a
              href="#showcase"
              className="px-6 py-3 rounded-md border border-white/30 text-white hover:border-white transition"
            >
              
            </a> */}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mt-6">
            {['24–72h Turnaround', 'Color • Sound • VFX', 'Motion Graphics', 'Nextom Studio • Showreel'].map((badge, i) => (
              <span
                key={i}
                className="bg-white/10 px-3 py-1 rounded-full text-sm text-white/80"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Video Section Label */}
        {/* <div className="bg-white/10 text-white text-sm px-4 py-1 backdrop-blur-md rounded-full shadow-inner border border-white/10 z-10">
          Nextom Studio • Showreel
        </div> */}
        <div className='flex-1'></div>
      </Div>
    </section>
  )
}

export default HeroSection
