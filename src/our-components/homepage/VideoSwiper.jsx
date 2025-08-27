'use client';
import React, { useState, useRef, useEffect } from 'react';
import Div from '../common/DIv';

const VideoSwiper = () => {
  const [activeId, setActiveId] = useState(null);
  const videoRefs = useRef({});

  useEffect(() => {
    Object.values(videoRefs.current).forEach((vid) => {
      if (vid) {
        if (vid.dataset.id === activeId) {
          vid.muted = true;
          vid.defaultMuted = true;
          vid.playsInline = true;
          vid.play().catch(err => console.error('Playback error:', err));
        } else {
          vid.pause();
          vid.currentTime = 0;
        }
      }
    });
  }, [activeId]);

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

  return (
    <Div className="w-full h-[480px] flex overflow-x-auto bg-theme-dark py-5 gap-2">
      {images.map((image) => {
        const isActive = image.id === activeId;
        return (
          <div
            key={image.id}
            onMouseEnter={() => setActiveId(image.id)}
            className={`
              relative h-full cursor-pointer rounded-xl overflow-hidden
              transition-all duration-[0.8s]
              [transition-timing-function:cubic-bezier(0.05,0.61,0.41,0.95)]
              ${isActive ? 'flex-[8]' : 'flex-[0.8] opacity-50'}
            `}
          >
            <video
              data-id={image.id}
              ref={el => (videoRefs.current[image.id] = el)}
              src={image.urls.regular}
              className={`
                h-full w-full object-cover
                transition-all duration-[0.8s]
                [transition-timing-function:cubic-bezier(0.05,0.61,0.41,0.95)]
                ${isActive ? 'opacity-100 scale-100' : 'opacity-95 scale-75'}
              `}
              loop
            />
          </div>
        );
      })}
    </Div>
  );
};

export default VideoSwiper;
