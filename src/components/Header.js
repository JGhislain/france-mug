import React from 'react';
import MugSection from './MugSection';
import Bubbles from './animations/Bubbles'; // Import du composant des bulles

// Chemins vers les images utilisées dans le header
import realiseEnFranceImg from '../assets/header/REALISE_FRANCE.png';
import logoTitleImg from '../assets/header/logo-titre2.webp';
import contactImg from '../assets/header/contact.webp';
import facebookImg from '../assets/header/facebook.webp';

const Header = () => {
  return (
    <header>
        <div className='header-contain'>
            {/* Bulles en arrière-plan */}
            <Bubbles />
            <div className="top-header-images">
                <div className="realise-en-france">
                    <img className='img-real-france' src={realiseEnFranceImg} alt="Réalisé en France" loading="lazy" />
                </div>
                <div className="logo-title">
                    <img className='logo-francemug' src={logoTitleImg} alt="Logo France Mug" loading="lazy" />
                    <h1 className='header-title'>France Mug</h1>
                </div>
                <nav className="header-navigation">
                    <div className="contact-follow">
                        <a href="mailto:dev@le-point-com.fr" className='contact-link'>
                            <img src={contactImg} alt="Contact" className='img-contact' loading="lazy" />
                        </a>
                        <a href="https://m.facebook.com/FrMug/" target='blank_' className='facebook-link'>
                            <img src={facebookImg} alt="Facebook" className='img-facebook' loading="lazy" />
                        </a>
                    </div>
                </nav>
            </div>
            <div className="header-slogan-container">
                <h2 className='header-slogan'>
                    <p className='title2-minus'>Chaque Mug est une</p>
                    <p className='title2-text'>PÉPITE D'HUMOUR</p>
                    <p className='title2-text'><span className='title2-minus'>et de</span><span className='title2-text'> BONNE HUMEUR</span></p>
                </h2>
            </div>
            <MugSection />
        </div>
    </header>
  );
};

export default Header;