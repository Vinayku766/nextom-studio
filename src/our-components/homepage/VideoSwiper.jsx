'use client';
import React, { useState, useRef, useEffect } from 'react';
import Div from '../common/DIv';

const VideoSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const videoRefs = useRef({});

  const images = [
    { id: "1", urls: { regular: "/videos/shorts/war-going.mp4" } },
    { id: "2", urls: { regular: "/videos/shorts/alien-nextom.mp4" } },
    { id: "3", urls: { regular: "/videos/shorts/get-2.mp4" } },
    { id: "4", urls: { regular: "/videos/shorts/halloween-creepy.mp4" } },
    { id: "5", urls: { regular: "/videos/shorts/advertisement.mp4" } },
    { id: "6", urls: { regular: "/videos/shorts/beautiful.mp4" } },
    { id: "7", urls: { regular: "/videos/shorts/batman-in-real-life.mp4" } },
    { id: "8", urls: { regular: "/videos/shorts/bot-dance.mp4" } },
  ];

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
    <Div className="relative w-full h-[400px] bg-theme-dark py-5">
      <div className="flex overflow-x-auto gap-2 h-full scrollbar-hide">
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
    transition-all duration-[0.8s] 
    [transition-timing-function:cubic-bezier(0.05,0.61,0.41,0.95)]
    ${isActive ? 'flex-[8]' : isNeighbor ? 'flex-[1.25]' : 'flex-[1]'}
  `}
>
  <video
    ref={(el) => (videoRefs.current[index] = el)}
    src={image.urls.regular}
    className={`
      absolute inset-0 w-full h-full
      object-cover   /* 🔥 ensures full height, no gaps */
      transition-all duration-[0.8s]
      rounded-[0.75rem]
      [transition-timing-function:cubic-bezier(0.05,0.61,0.41,0.95)]
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
        <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-theme-dark to-transparent" />
      )}
      {activeIndex !== images.length - 1 && (
        <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-theme-dark to-transparent" />
      )}
    </Div>
  );
};

export default VideoSwiper;
