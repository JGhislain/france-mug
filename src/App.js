// App.js
import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import './App.css';

// Lazy loading du Footer
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <div className='app'>
      <Header />
      <MainSection />
      <Suspense fallback={<div>Chargement du footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
