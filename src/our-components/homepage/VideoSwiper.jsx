'use client';
import React, { useState, useRef, useEffect } from 'react';
import Div from '../common/DIv';

const VideoSwiper = () => {
  const videoRefs = useRef({});
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  const [activeIndex, setActiveIndex] = useState(Math.floor(images.length / 2));

  /* ▶ Auto play active video */
  useEffect(() => {
    Object.values(videoRefs.current).forEach((vid, index) => {
      if (!vid) return;

      if (index === activeIndex) {
        vid.muted = true;
        vid.playsInline = true;
        if (vid.paused) vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [activeIndex]);

  /* 👉 Touch handlers (mobile swipe) */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (distance > threshold && activeIndex < images.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (distance < -threshold && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <Div id="showcase" className="relative w-full h-[400px] bg-theme-dark py-5 overflow-hidden">
      
      {/* SLIDER CONTAINER */}
      <div
        className="flex gap-2 h-full touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => {
          const isActive = index === activeIndex;
          const isNeighbor =
            index === activeIndex - 1 ||
            index === activeIndex + 1 ||
            index === activeIndex - 2 ||
            index === activeIndex + 2;

          return (
            <div
              key={image.id}
              onMouseEnter={() => setActiveIndex(index)}
              className={`
                relative h-full cursor-pointer overflow-hidden
                transition-all duration-[0.8s]
                [transition-timing-function:cubic-bezier(0.05,0.61,0.41,0.95)]
                ${isActive ? 'flex-[8]' : isNeighbor ? 'flex-[1.25]' : 'flex-[1]'}
              `}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={image.urls.regular}
                className={`
                  absolute inset-0 w-full h-full object-cover
                  transition-all duration-[0.8s]
                  rounded-xl
                  ${isActive
                    ? 'opacity-100 scale-100'
                    : isNeighbor
                      ? 'opacity-100 scale-95'
                      : 'opacity-50 scale-90'}
                `}
                loop
                muted
                playsInline
              />
            </div>
          );
        })}
      </div>

      {/* EDGE GRADIENTS */}
      {activeIndex !== 0 && (
        <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-theme-dark to-transparent" />
      )}
      {activeIndex !== images.length - 1 && (
        <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-theme-dark to-transparent" />
      )}
    </Div>
  );
};

export default VideoSwiper;
