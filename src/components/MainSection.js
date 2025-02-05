import React, { Suspense, lazy } from 'react';
import HeaderComm from './HeaderComm';
import MugFilter from './MugFilter';
import NavigationBar from './NavigationBar';
import ScrollHandler from './ScrollHandler';
//import LayoutShiftObserver from './LayoutShiftObserver';

// Lazy loading du MugList (chargé uniquement lorsque c'est nécessaire)
const MugList = lazy(() => import('./MugList'));

const MainSection = () => {
  return (
    <main>

      {/* Gère l'effet de défilement sur le background */}
      <ScrollHandler />

      {/* <LayoutShiftObserver />  Observateur CLS */}

      {/* Composant Header pour afficher le haut de la section */}
      <HeaderComm />

      {/* Filtrage et affichage des mugs */}
      <MugFilter>
        {({ filteredMugs, handleFilter, activeCategory, loading }) => (
          <>
            {/* Barre de navigation pour les catégories */}
            <NavigationBar handleFilter={handleFilter} activeCategory={activeCategory} />

            {/* Affiche le spinner si le chargement est en cours */}
            {loading ? (
              <div className="spinner-container">
                <div className="spinner"></div>
              </div>
            ) : (
              // Utilisation de Suspense pour afficher un fallback pendant le lazy loading
              <Suspense fallback={<div className="spinner-container"><div className="spinner"></div></div>}>
                {/* Affiche les mugs après le chargement avec une animation de translation */}
                <div className="mug-container animated-slide">
                  <MugList mugs={filteredMugs} />
                </div>
              </Suspense>
            )}
          </>
        )}
      </MugFilter>
    </main>
  );
};

export default MainSection;