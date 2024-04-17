import React from 'react';

// Chemins vers les images utilisées dans le header
import realiseEnFranceImg from '../assets/header/REALISE_FRANCE.png';
import logoTitleImg from '../assets/header/logo-titre.png';
import contactImg from '../assets/header/contact.png';
import facebookImg from '../assets/header/facebook.png';
import boutiqueImg from '../assets/header/acceder-boutique.png';
import etagereBois from '../assets/header/header-img.png'

const Header = () => {
  return (
    <header>
        <div className='header-contain'>
            <div className="top-header-images">
                <div className="realise-en-france">
                    <img src={realiseEnFranceImg} alt="Réalisé en France" />
                </div>
                <div className="logo-title">
                    <img src={logoTitleImg} alt="Logo France Mug" />
                    <h1 className='header-title'>France Mug</h1>
                </div>
                <nav className="header-navigation">
                    <div className="contact-follow">
                        <a href="mailto:contact@example.com" className='contact-link'>
                        <img src={contactImg} alt="Contact" className='img-contact' />
                        </a>
                        <a href="https://www.facebook.com" className='facebook-link'>
                        <img src={facebookImg} alt="Facebook" className='img-facebook' />
                        </a>
                    </div>
                    <div className="boutique-link">
                        <a href="/boutique" className='boutique-link'>
                        <img src={boutiqueImg} alt="Accéder à la boutique" className='img-boutique' />
                        </a>
                    </div>
                </nav>
            </div>
            <div className="header-slogan-container">
                <h2 className='header-slogan'>Chaque Mug est une PÉPITE D'HUMOUR et de BONNE HUMEUR</h2>
            </div>
        </div>
        <span className='etagere-contain'>
            <img src={etagereBois} className='img-etagere' alt='Étagère en bois avec des mugs' />
        </span>
    </header>
  );
};

export default Header;