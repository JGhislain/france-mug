import { useEffect } from 'react';
import { throttle } from 'lodash';

const ScrollHandler = () => {
  useEffect(() => {
    const handleScroll = throttle(() => {
      const main = document.querySelector('main');
      let scrollPosition = window.pageYOffset;
      main.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }, 200); // Appel limité à toutes les 200 ms

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ScrollHandler;