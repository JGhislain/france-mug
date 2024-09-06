import React from 'react';

const NavigationBar = ({ handleFilter, activeCategory }) => {
  return (
    <nav>
      <ul className="nav-bar">
        <li 
          className={activeCategory === 'Tout' ? 'active' : ''} 
          onClick={() => handleFilter('Tout')}
        >
          Toute notre collection
        </li>
        <li 
          className={activeCategory === 'famille' ? 'active' : ''} 
          onClick={() => handleFilter('famille')}
        >
          Famille
        </li>
        <li 
          className={activeCategory === 'animaux' ? 'active' : ''} 
          onClick={() => handleFilter('animaux')}
        >
          Animaux
        </li>
        <li 
          className={activeCategory === 'geek' ? 'active' : ''} 
          onClick={() => handleFilter('geek')}
        >
          Geeks
        </li>
        <li 
          className={activeCategory === 'sport' ? 'active' : ''} 
          onClick={() => handleFilter('sport')}
        >
          Sports & Loisirs
        </li>
        <li 
          className={activeCategory === 'humour' ? 'active' : ''} 
          onClick={() => handleFilter('humour')}
        >
          Humour
        </li>
        <li 
          className={activeCategory === 'quotidien' ? 'active' : ''} 
          onClick={() => handleFilter('quotidien')}
        >
          Quotidien
        </li>
        <li 
          className={activeCategory === 'amour' ? 'active' : ''} 
          onClick={() => handleFilter('amour')}
        >
          Amour
        </li>
        <li 
          className={activeCategory === 'travail' ? 'active' : ''} 
          onClick={() => handleFilter('travail')}
        >
          Travail
        </li>
        <li 
          className={activeCategory === 'adulte' ? 'active' : ''} 
          onClick={() => handleFilter('adulte')}
        >
          Adulte
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
