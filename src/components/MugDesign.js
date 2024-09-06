import React from 'react';

const MugDesign = ({ designs, altText, className }) => {
  return (
    <img
      src={designs[0]} // On utilise simplement le premier (et unique) design passé
      alt={altText}
      className={className} // La classe d'animation est gérée par MugSection.js
    />
  );
};

export default MugDesign;