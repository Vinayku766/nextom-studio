'use client';
import React, { useState, useRef, useEffect } from 'react';
import Div from '../common/DIv';

const VideoSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const videoRefs = useRef({});

  const images = [
    { id: "1", urls: { regular: "https://cdn.pixabay.com/video/2023/10/21/185947-876963225_tiny.mp4" } },
    { id: "2", urls: { regular: "https://cdn.pixabay.com/video/2025/06/24/287510_tiny.mp4" } },
    { id: "3", urls: { regular: "https://cdn.pixabay.com/video/2025/04/29/275498_tiny.mp4" } },
    { id: "4", urls: { regular: "https://cdn.pixabay.com/video/2025/06/09/284566_tiny.mp4" } },
    { id: "5", urls: { regular: "https://cdn.pixabay.com/video/2025/05/13/278750_tiny.mp4" } },
    { id: "6", urls: { regular: "https://cdn.pixabay.com/video/2024/09/21/232538_tiny.mp4" } },
    { id: "7", urls: { regular: "https://cdn.pixabay.com/video/2025/03/16/265271_tiny.mp4" } },
    { id: "8", urls: { regular: "https://cdn.pixabay.com/video/2025/01/19/253423_tiny.mp4" } },
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
                relative h-full cursor-pointer rounded-3xl overflow-hidden
                transition-all duration-[0.8s]
                [transition-timing-function:cubic-bezier(0.05,0.61,0.41,0.95)]
                ${isActive ? 'flex-[8]' : isNeighbor ? 'flex-[1.25]' : 'flex-[1]'}
              `}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={image.urls.regular}
                className={`
                  h-full w-full object-cover
                  transition-all duration-[0.8s]
                  [transition-timing-function:cubic-bezier(0.05,0.61,0.41,0.95)]
                  ${isActive || isNeighbor 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-50 scale-95'}
                `}
                loop
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
