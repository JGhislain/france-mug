import React, { memo, useCallback } from 'react';

const NavigationBar = memo(({ handleFilter, activeCategory }) => {
  // Mémoisation des fonctions de clic pour éviter les re-rendus inutiles
  const handleClick = useCallback((category) => {
    handleFilter(category);
  }, [handleFilter]);

  return (
    <nav>
      <ul className="nav-bar">
        <li 
          className={`cat-button ${activeCategory === 'Tout' ? 'active' : ''}`}
          onClick={() => handleClick('Tout')}
        >
          Toute notre collection
        </li>
        <li 
          className={`cat-button ${activeCategory === 'famille' ? 'active' : ''}`}
          onClick={() => handleClick('famille')}
        >
          Famille
        </li>
        <li 
          className={`cat-button ${activeCategory === 'animaux' ? 'active' : ''}`}
          onClick={() => handleClick('animaux')}
        >
          Animaux
        </li>
        <li 
          className={`cat-button ${activeCategory === 'geek' ? 'active' : ''}`}
          onClick={() => handleClick('geek')}
        >
          Geeks
        </li>
        <li 
          className={`cat-button ${activeCategory === 'sport' ? 'active' : ''}`}
          onClick={() => handleClick('sport')}
        >
          Sports & Loisirs
        </li>
        <li 
          className={`cat-button ${activeCategory === 'humour' ? 'active' : ''}`}
          onClick={() => handleClick('humour')}
        >
          Humour
        </li>
        <li 
          className={`cat-button ${activeCategory === 'quotidien' ? 'active' : ''}`}
          onClick={() => handleClick('quotidien')}
        >
          Quotidien
        </li>
        <li 
          className={`cat-button ${activeCategory === 'amour' ? 'active' : ''}`}
          onClick={() => handleClick('amour')}
        >
          Amour
        </li>
        <li 
          className={`cat-button ${activeCategory === 'travail' ? 'active' : ''}`}
          onClick={() => handleClick('travail')}
        >
          Travail
        </li>
        <li 
          className={`cat-button ${activeCategory === 'adulte' ? 'active' : ''}`}
          onClick={() => handleClick('adulte')}
        >
          Adulte
        </li>
      </ul>
    </nav>
  );
});

export default NavigationBar;
