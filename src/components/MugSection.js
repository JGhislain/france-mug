import React, { useState, useEffect, useCallback } from 'react';
import MugDesign from './MugDesign';
import mugDesignsData from '../mugDesigns.json';
import etagereBois from '../assets/header/header-img.png';

const MugSection = () => {
  const mugClasses = ["mug1-design", "mug2-design", "mug3-design"];
  const [mugDesigns, setMugDesigns] = useState([]);
  const [animationPhase, setAnimationPhase] = useState([null, null, null]);

  useEffect(() => {
    const shuffledDesigns = mugDesignsData.sort(() => 0.5 - Math.random()).slice(0, 3);
    setMugDesigns(shuffledDesigns);
  }, []);

  const changeRandomMugDesign = useCallback(() => {
    const mugIndex = Math.floor(Math.random() * 3);
    const availableDesigns = mugDesignsData.filter(
      (design) => !mugDesigns.some((mug) => mug.src === design.src)
    );

    if (availableDesigns.length > 0) {
      // Phase 1 : Lancer l'animation de disparition
      setAnimationPhase((prev) => {
        const newPhase = [...prev];
        newPhase[mugIndex] = 'fade-out';
        return newPhase;
      });

      // Attendre juste avant la fin de la disparition pour appliquer 'invisible'
      setTimeout(() => {
        setAnimationPhase((prev) => {
          const newPhase = [...prev];
          newPhase[mugIndex] = 'invisible';
          return newPhase;
        });

        setTimeout(() => {
          const newDesign = availableDesigns[Math.floor(Math.random() * availableDesigns.length)];
          setMugDesigns((prevDesigns) =>
            prevDesigns.map((design, index) => (index === mugIndex ? newDesign : design))
          );

          // Une fois l'image chargée, commencer l'animation fade-in
          const img = new Image();
          img.src = newDesign.src;
          img.onload = () => {
            setAnimationPhase((prev) => {
              const newPhase = [...prev];
              newPhase[mugIndex] = 'fade-in';
              return newPhase;
            });

            // Réinitialiser l'animation après l'apparition
            setTimeout(() => {
              setAnimationPhase((prev) => {
                const newPhase = [...prev];
                newPhase[mugIndex] = null; // Réinitialiser après l'animation
                return newPhase;
              });
            }, 500); // Durée de l'animation d'apparition
          };
        }, 5);
      }, 200);
    }
  }, [mugDesigns]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeRandomMugDesign();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [changeRandomMugDesign]);

  return (
    <div className="etagere-contain" style={{ position: 'relative' }}>
      <img src={etagereBois} className="img-etagere" alt="Étagère en bois avec des mugs" loading="lazy" />
      {mugDesigns.map((design, index) => (
        <MugDesign
          key={index}
          designs={[design.src]}
          altText={design.alt}
          className={`mug-common ${mugClasses[index]} ${animationPhase[index]}`}
        />
      ))}
    </div>
  );
};

export default MugSection;
