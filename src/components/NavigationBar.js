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
          className={activeCategory === 'Tout' ? 'active' : ''} 
          onClick={() => handleClick('Tout')}
        >
          Toute notre collection
        </li>
        <li 
          className={activeCategory === 'famille' ? 'active' : ''} 
          onClick={() => handleClick('famille')}
        >
          Famille
        </li>
        <li 
          className={activeCategory === 'animaux' ? 'active' : ''} 
          onClick={() => handleClick('animaux')}
        >
          Animaux
        </li>
        <li 
          className={activeCategory === 'geek' ? 'active' : ''} 
          onClick={() => handleClick('geek')}
        >
          Geeks
        </li>
        <li 
          className={activeCategory === 'sport' ? 'active' : ''} 
          onClick={() => handleClick('sport')}
        >
          Sports & Loisirs
        </li>
        <li 
          className={activeCategory === 'humour' ? 'active' : ''} 
          onClick={() => handleClick('humour')}
        >
          Humour
        </li>
        <li 
          className={activeCategory === 'quotidien' ? 'active' : ''} 
          onClick={() => handleClick('quotidien')}
        >
          Quotidien
        </li>
        <li 
          className={activeCategory === 'amour' ? 'active' : ''} 
          onClick={() => handleClick('amour')}
        >
          Amour
        </li>
        <li 
          className={activeCategory === 'travail' ? 'active' : ''} 
          onClick={() => handleClick('travail')}
        >
          Travail
        </li>
        <li 
          className={activeCategory === 'adulte' ? 'active' : ''} 
          onClick={() => handleClick('adulte')}
        >
          Adulte
        </li>
      </ul>
    </nav>
  );
});

export default NavigationBar;
