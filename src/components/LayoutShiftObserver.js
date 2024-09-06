import { useEffect } from 'react';

const LayoutShiftObserver = () => {
  useEffect(() => {
    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          console.log('Layout shift detected:', entry);
          console.log('Value of the shift:', entry.value);
          
          // Affiche les sources si elles sont disponibles
          if (entry.sources && entry.sources.length > 0) {
            entry.sources.forEach((source) => {
              console.log('Source element causing shift:', source.node); // Affiche l'élément DOM source
            });
          } else {
            console.log('No specific source element found for this shift.');
          }
        }
      }
    });

    observer.observe({ type: 'layout-shift', buffered: true });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default LayoutShiftObserver;
