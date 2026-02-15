'use client';
import React, { useState, useRef, useEffect } from 'react';
import Div from '../common/DIv';
import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

import 'swiper/css';

const VideoSwiper = () => {
  const videoRefs = useRef({});
    const swiperRef = useRef(null);
  
  const images = [
    { id: "1", urls: { regular: "/videos/shorts/video-1-10.mp4" } },
    { id: "2", urls: { regular: "/videos/shorts/video-1-2.mp4" } },
    { id: "3", urls: { regular: "/videos/shorts/video-1-7.mp4" } },
    { id: "4", urls: { regular: "/videos/shorts/video-1-13.mp4" } },
    { id: "5", urls: { regular: "/videos/shorts/video-1-6.mp4" } },
    { id: "6", urls: { regular: "/videos/shorts/video-1-8.mp4" } },
    { id: "7", urls: { regular: "/videos/shorts/video-1-9.mp4" } },
    { id: "8", urls: { regular: "/videos/shorts/video-1-5.mp4" } },
  ];

  const videoSlides = [
  {
    id: "1",
    url: "/videos/shorts/video-1-10.mp4",
    title: "Creative Branding",
    description: "We create powerful brand experiences through video.",
    buttonText: "Contact Us",
    buttonBackgroundColor: "#000",
    bottomBackgroundColor: "#ef4444",
  },
  {
    id: "2",
    url: "/videos/shorts/video-1-2.mp4",
    title: "Product Showcase",
    description: "Highlight your product with stunning visuals.",
    buttonText: "Get Started",
    buttonBackgroundColor: "#000",
    bottomBackgroundColor: "#3b82f6",
  },
  {
    id: "3",
    url: "/videos/shorts/video-1-7.mp4",
    title: "Social Media Ads",
    description: "Engaging short-form videos for social platforms.",
    buttonText: "Explore",
    buttonBackgroundColor: "#000",
    bottomBackgroundColor: "#10b981",
  },
  {
    id: "4",
    url: "/videos/shorts/video-1-13.mp4",
    title: "Event Coverage",
    description: "Capture unforgettable moments professionally.",
    buttonText: "Book Now",
    buttonBackgroundColor: "#000",
    bottomBackgroundColor: "#8b5cf6",
  },
  {
    id: "5",
    url: "/videos/shorts/video-1-6.mp4",
    title: "Corporate Films",
    description: "Professional storytelling for your business.",
    buttonText: "Learn More",
    buttonBackgroundColor: "#000",
    bottomBackgroundColor: "#f59e0b",
  },
  {
    id: "6",
    url: "/videos/shorts/video-1-8.mp4",
    title: "Motion Graphics",
    description: "Dynamic motion visuals that captivate audiences.",
    buttonText: "View Work",
    buttonBackgroundColor: "#000",
    bottomBackgroundColor: "#ec4899",
  },
  {
    id: "7",
    url: "/videos/shorts/video-1-9.mp4",
    title: "YouTube Content",
    description: "Optimized video production for creators.",
    buttonText: "Start Today",
    buttonBackgroundColor: "#000",
    bottomBackgroundColor: "#6366f1",
  },
  {
    id: "8",
    url: "/videos/shorts/video-1-5.mp4",
    title: "Creative Campaigns",
    description: "Innovative ideas that drive real engagement.",
    buttonText: "Work With Us",
    buttonBackgroundColor: "#000",
    bottomBackgroundColor: "#14b8a6",
  },
];


  const [activeIndex, setActiveIndex] = useState(Math.floor(images.length / 2));
   const [activeSlide, setActiveSlide] = useState(1);
  
  useEffect(() => {
    Object.values(videoRefs.current).forEach((vid, index) => {
      if (!vid) return;
      if (index === activeIndex) {
        vid.muted = true;
        vid.defaultMuted = true;
        vid.playsInline = true;
        if (vid.paused) vid.play().catch(() => {});
      } else {
        if (!vid.paused) vid.pause();
      }
    });
  }, [activeIndex]);

  return (
    <Div id="showcase" className="relative w-full h-105 bg-theme-dark">
      <div className="hidden md:flex overflow-x-auto gap-2 h-full scrollbar-hide">
        {images.map((image, index) => {
          const isActive = index === activeIndex;
          const isNeighbor =
            activeIndex !== null &&
            (index === activeIndex - 1 ||
             index === activeIndex + 1 ||
             index === activeIndex - 2 ||
             index === activeIndex + 2);

          return (
           <div
  key={image.id}
  onMouseEnter={() => setActiveIndex(index)}
  className={`
    relative h-full cursor-pointer overflow-hidden
    transition-all duration-[0.8s][transition-timing-function:cubic-bezier(0.05,0.61,0.41,0.95)]
    ${isActive ? 'flex-8' : isNeighbor ? 'flex-[1.25]' : 'flex-1'}
  `}
>
  <video
    ref={(el) => (videoRefs.current[index] = el)}
    src={image.urls.regular}
    className={`
      absolute inset-0 w-full h-full
      object-cover 
      transition-all duration-[0.8s]
      rounded-[0.75rem][transition-timing-function:cubic-bezier(0.05,0.61,0.41,0.95)]
      ${isActive 
        ? 'opacity-100 scale-100' 
        : isNeighbor 
          ? 'opacity-100 scale-95'
          : 'opacity-50 scale-80'}
    `}
    loop
    muted
    playsInline
  />
</div>

          );
        })}
      </div>

      {activeIndex !== 0 && (
        <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-linear-to-r from-theme-dark to-transparent" />
      )}
      {activeIndex !== images.length - 1 && (
        <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-linear-to-l from-theme-dark to-transparent" />
      )}

     <div className="block md:hidden w-full py-5">
      <Swiper
        slidesPerView="auto"  
        centeredSlides={true}      
        spaceBetween={20}          
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
      >
        {videoSlides.map((slide, index) => {
          const isActive = index === activeSlide;

          return (
            <SwiperSlide
              key={slide.id}
              style={{
                flexShrink: 0,
                width: "70%", 
                transition: "opacity 0.5s ease",
                border: "1px solid #fff",
                borderRadius: ".75rem"
              }}
            >
              <div
                onClick={() => swiperRef.current.slideToLoop(index)}
                className={`cursor-pointer transition-all duration-500 
                  ${isActive ? "opacity-100 z-10" : "opacity-50 z-0"}`}
              >
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <video
                    src={slide.url}
                    autoPlay
                    playsInline
                    muted
                    loop
                    className="w-full h-55 object-cover"
                  />
                </div>
                <div
                  className="p-4 text-center rounded-b-xl"
                  style={{ backgroundColor: slide.bottomBackgroundColor }}
                >
                  <h4 className="font-semibold text-white text-xl">{slide.title}</h4>
                  <p className="text-xs my-3 text-white">{slide.description}</p>
                  <Link
                    href={"/contact"}
                    className="mt-3 block font-semibold py-3 w-full rounded-md text-white"
                    style={{ backgroundColor: slide.buttonBackgroundColor }}
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    </Div>
  );
};

export default VideoSwiper;
