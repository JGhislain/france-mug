import { useEffect } from 'react';

const ScrollHandler = () => {
  useEffect(() => {
    const handleScroll = () => {
      const main = document.querySelector('main');
      let scrollPosition = window.pageYOffset;
      main.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ScrollHandler;
