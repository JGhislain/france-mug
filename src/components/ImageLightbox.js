import React, { useState } from 'react';
import '../App.css';

const ImageLightbox = ({ media, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  const isVideo = media[currentIndex].type === 'video';

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <span className="lightbox-close close-btn" onClick={onClose}>&times;</span>
        <div className="lightbox-media">
          {isVideo ? (
            <video
              controls
              className="lightbox-video"
              src={media[currentIndex].src}
              autoPlay
              onClick={(e) => e.stopPropagation()}
              disablePictureInPicture
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={media[currentIndex].src}
              alt={`Mug ${currentIndex + 1}`}
              className="lightbox-image"
              loading='lazy'
            />
          )}
        </div>
        <div className="lightbox-navigation">
          <span className="lightbox-prev" onClick={handlePrev}>&#8249;</span>
          <span className="lightbox-next" onClick={handleNext}>&#8250;</span>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;