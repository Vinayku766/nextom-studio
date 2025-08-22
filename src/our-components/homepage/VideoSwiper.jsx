'use client';
import React, { useState, useRef, useEffect } from 'react';
import Div from '../common/DIv';

const VideoSwiper = () => {
  const [activeId, setActiveId] = useState(null);
  const videoRefs = useRef({});

  useEffect(() => {
    if (activeId) {
      const vid = videoRefs.current[activeId];
      if (vid) {
        vid.muted = true;
        vid.defaultMuted = true;
        vid.playsInline = true;
        vid.play().catch(err => console.error('Playback error:', err));
      }
    }
  }, [activeId]);

    const images = [
  {
    "id": "1",
    "alt_description": "Premium Photo 1",
    "urls": {
      "regular": "https://cdn.pixabay.com/video/2023/10/21/185947-876963225_tiny.mp4"
    }
  },
  {
    "id": "2",
    "alt_description": "Premium Photo 2",
    "urls": {
      "regular": "https://cdn.pixabay.com/video/2025/06/24/287510_tiny.mp4"
    }
  },
  {
    "id": "3",
    "alt_description": "Premium Photo 3",
    "urls": {
      "regular": "https://cdn.pixabay.com/video/2025/04/29/275498_tiny.mp4"
    }
  },
  {
    "id": "4",
    "alt_description": "Premium Photo 4",
    "urls": {
      "regular": "https://cdn.pixabay.com/video/2025/06/09/284566_tiny.mp4"
    }
  },
  {
    "id": "5",
    "alt_description": "Premium Photo 5",
    "urls": {
      "regular": "https://cdn.pixabay.com/video/2025/05/13/278750_tiny.mp4"
    }
  },
  {
    "id": "6",
    "alt_description": "Premium Photo 6",
    "urls": {
      "regular": "https://cdn.pixabay.com/video/2024/09/21/232538_tiny.mp4"
    }
  },
  {
    "id": "7",
    "alt_description": "Premium Photo 7",
    "urls": {
      "regular": "https://cdn.pixabay.com/video/2025/03/16/265271_tiny.mp4"
    }
  },
  {
    "id": "8",
    "alt_description": "Premium Photo 8",
    "urls": {
      "regular": "https://cdn.pixabay.com/video/2025/01/19/253423_tiny.mp4"
    }
  }
]

  return (
    <Div className="w-full h-[480px] flex overflow-x-auto bg-black py-5">
      {images.map((image) => {
        const isActive = image.id === activeId;
        return (
          <div
            key={image.id}
            onMouseEnter={() => setActiveId(image.id)}
            className={`
              relative border-4 border-black h-full cursor-pointer
              transition-all duration-[0.8s]
              [transition-timing-function:cubic-bezier(0.05,0.61,0.41,0.95)]
              ${isActive ? 'w-full' : 'w-[20%]'}
            `}
          >
            <video
              ref={el => (videoRefs.current[image.id] = el)}
              src={image.urls.regular}
              className={`
                h-full w-auto object-cover rounded-2xl
                transition-all duration-[0.8s]
                [transition-timing-function:cubic-bezier(0.05,0.61,0.41,0.95)]
                ${isActive ? 'opacity-100' : 'opacity-80'}
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
