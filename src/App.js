// App.js
import React, { Suspense, lazy } from 'react';
import './App.css';

// Lazy loading du Header
const Header = lazy(() => import('./components/Header'));
// Lazy loading du Footer
const MainSection = lazy(() => import('./components/MainSection'));
// Lazy loading du Footer
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <div className='app'>
      <Suspense fallback={<div>Chargement...</div>}>
        <Header />
        <MainSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
