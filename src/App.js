import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
};

export default App;
