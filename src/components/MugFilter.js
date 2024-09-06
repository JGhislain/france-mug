import { useState } from 'react';
import mugsData from '../catalogueMugs.json';

const MugFilter = ({ children }) => {
  const [filteredMugs, setFilteredMugs] = useState(mugsData);
  const [activeCategory, setActiveCategory] = useState('Tout');
  const [loading, setLoading] = useState(false); // Indicateur de chargement

  const handleFilter = (category) => {
    setActiveCategory(category);
    setLoading(true); // Active le chargement

    // Simule un délai de chargement avant l'application du filtre
    setTimeout(() => {
      if (category === 'Tout') {
        setFilteredMugs(mugsData); // Affiche tous les mugs
      } else {
        const filtered = mugsData.filter((mug) =>
          mug.tags.some((tag) => tag.toLowerCase() === category.toLowerCase())
        );
        setFilteredMugs(filtered);
      }
      setLoading(false); // Désactive le chargement après l'application du filtre
    }, 500); // Simule un délai pour imiter un temps de chargement
  };

  return children({
    filteredMugs,
    handleFilter,
    activeCategory,
    loading, // Passe l'état de chargement au composant parent
  });
};

export default MugFilter;
