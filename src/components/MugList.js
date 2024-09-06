import React, { memo, useMemo } from 'react';
import MugGallery from './MugGallery';

const MugDisplay = memo(({ mug }) => {
  return (
    <div className="mug-display">
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
});

const MugList = ({ mugs }) => {
  // Utilisation de useMemo pour éviter de recalculer la liste à chaque re-render
  const memoizedMugs = useMemo(() => {
    return mugs.map(mug => <MugDisplay key={mug.id} mug={mug} />);
  }, [mugs]);

  return (
    <div className="mug-list">
      {memoizedMugs}
    </div>
  );
};

export default MugList;