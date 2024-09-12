import React, { memo, useMemo, useState, useRef, useCallback, forwardRef } from 'react';
import MugGallery from './MugGallery';

// Utilisation de React.forwardRef pour permettre le passage du ref à MugDisplay
const MugDisplay = memo(
  forwardRef(({ mug }, ref) => {
    return (
      <div className="mug-display" ref={ref}>
        <MugGallery
          mainImage={mug.mainImage}
          thumbnailImages={mug.thumbnailImages}
          video={mug.video}
          videoThumbnail={mug.videoThumbnail}
        />
        <h5 className='mug-title'>{mug.title}</h5>
        <div className='price-link-contain'>
          <p className='price-amazon'>{mug.price}</p>
          <a className='link-amazon' href={mug.url} target="_blank" rel="noopener noreferrer">
            <button className='button-amazon'>
              <span className='text-button-amazon'>Acheter sur Amazon</span>
              <img className='img-logo-amazon' src={'/assets/main/logo-amazon.png'} alt="logo amazon" loading='lazy' />
            </button>
          </a>
        </div>
      </div>
    );
  })
);

const MugList = ({ mugs }) => {
  const [visibleMugs, setVisibleMugs] = useState(20); // Affiche les 20 premiers mugs
  const observerRef = useRef(null);

  // Fonction pour observer le dernier mug et charger plus de mugs
  const lastMugRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleMugs < mugs.length) {
          setVisibleMugs((prevVisibleMugs) => prevVisibleMugs + 10); // Charge 10 mugs supplémentaires
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [visibleMugs, mugs.length]
  );

  const memoizedMugs = useMemo(() => {
    return mugs.slice(0, visibleMugs).map((mug, index) => {
      if (index + 1 === visibleMugs) {
        return <MugDisplay key={mug.id} mug={mug} ref={lastMugRef} />; // Applique le ref au dernier mug
      } else {
        return <MugDisplay key={mug.id} mug={mug} />;
      }
    });
  }, [mugs, visibleMugs, lastMugRef]);

  return (
    <div className="mug-list">
      {memoizedMugs}
    </div>
  );
};

export default MugList;
