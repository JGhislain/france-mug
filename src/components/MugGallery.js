//GENERATION DE LA MINIATURE EN MANUELLE

import React, { useState, Suspense, lazy } from 'react';

// Supprime l'import standard
// import ImageLightbox from './ImageLightbox'; 

// Lazy loading du composant ImageLightbox
const ImageLightbox = lazy(() => import('./ImageLightbox'));

const MugGallery = ({ mainImage, thumbnailImages, video, videoThumbnail }) => {
  const [selectedMedia, setSelectedMedia] = useState(mainImage);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const media = [
    ...thumbnailImages.map(image => ({ type: 'image', src: image })),
    ...(video ? [{ type: 'video', src: video }] : [])
  ];

  const handleThumbnailClick = (src) => {
    setSelectedMedia(src);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="mug-gallery">
      <div className="main-media" onClick={openLightbox}>
        {selectedMedia === video ? (
          <video controls src={video} autoPlay>
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={selectedMedia} alt="Mug principal" loading="lazy" />
        )}
      </div>
      <div className="thumbnails">
        {thumbnailImages.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Mug thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(thumbnail)}
            className="thumbnail"
            loading="lazy"
          />
        ))}
        {video && videoThumbnail && (
          <div className="video-thumbnail-container" onClick={() => handleThumbnailClick(video)}>
            <img
              src={videoThumbnail}
              alt="Video thumbnail"
              className="thumbnail video-thumbnail"
              loading="lazy"
            />
            <div className="play-icon"></div>
          </div>
        )}
      </div>
      
      {/* Utilisation de Suspense pour charger ImageLightbox de manière asynchrone */}
      {isLightboxOpen && (
        <Suspense fallback={<div>Chargement de la lightbox...</div>}>
          <ImageLightbox
            media={media}
            onClose={closeLightbox}
            initialIndex={media.findIndex(item => item.src === selectedMedia)}
          />
        </Suspense>
      )}
    </div>
  );
};

export default MugGallery;


/*
  {
    "id": 13,
    "title": "Bonne chance pour ton nouveau boulot !!",
    "price": "15.99€",
    "mainImage": "/assets/catalogue_mugs/Images/M-BonneChanceBoulot-001_A copie.webp",
    "thumbnailImages": [
      "/assets/catalogue_mugs/Images/M-BonneChanceBoulot-001_A copie.webp",
      "/assets/catalogue_mugs/Images/M-BonneChanceBoulot-001_Front.webp",
      "/assets/catalogue_mugs/Images/M-BonneChanceBoulot-001_Back.webp"
    ],
    "video": "/assets/catalogue_mugs/Vidéos/M-BonneChanceBoulot-001.mp4",
    "videoThumbnail": "/assets/catalogue_mugs/Images/M-BonneChanceBoulot-001_Right.webp",
    "url": "https://www.amazon.fr/dp/B0D42C68K7",
    "tags": ["travail", "humour"]
  }
*/


// GENERATION DE LA MINIATURE EN AUTO
/*
import React, { useState, useEffect, useRef } from 'react';

const MugGallery = ({ mainImage, thumbnailImages, video }) => {
  const [selectedMedia, setSelectedMedia] = useState(mainImage);
  const [videoThumbnail, setVideoThumbnail] = useState(null);
  const videoRef = useRef(null);

  // Génération de la miniature de la vidéo
  useEffect(() => {
    if (video) {
      const videoElement = document.createElement('video');
      videoElement.src = video;
      videoElement.currentTime = 0.2; // Aller à 0.2 secondes (4-5ème frame)
      videoElement.addEventListener('loadeddata', () => {
        videoElement.addEventListener('seeked', () => {
          const canvas = document.createElement('canvas');
          canvas.width = videoElement.videoWidth || 320; 
          canvas.height = videoElement.videoHeight || 180;
          const context = canvas.getContext('2d');
          context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
          setVideoThumbnail(canvas.toDataURL('image/jpeg'));
        });
        videoElement.currentTime = 0.2; // Déclencher l'événement "seeked"
      });
    }
  }, [video]);

  const handleThumbnailClick = (src) => {
    setSelectedMedia(src);
  };

  return (
    <div className="mug-gallery">
      <div className="main-media">
        {selectedMedia === video ? (
          <video controls ref={videoRef} src={video} autoPlay>
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={selectedMedia} alt="Mug principal" />
        )}
      </div>
      <div className="thumbnails">
        {thumbnailImages.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Mug thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(thumbnail)}
            className="thumbnail"
          />
        ))}
        {video && videoThumbnail && (
          <div className="video-thumbnail-container">
            <img
              src={videoThumbnail}
              alt="Video thumbnail"
              onClick={() => handleThumbnailClick(video)}
              className="thumbnail video-thumbnail"
            />
            <div className="play-icon"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MugGallery;
*/
