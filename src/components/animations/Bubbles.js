import React from 'react';
import '../../App.css';

const Bubbles = () => {
  return (
    <div className="bubbles-container">
      {Array.from({ length: 25 }).map((_, i) => (
        <span key={i} className="bubble"></span>
      ))}
    </div>
  );
};

export default Bubbles;
