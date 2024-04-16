import React from 'react';

// Chemins vers les images utilisées dans le header
import realiseEnFranceImg from '../assets/header/REALISE_FRANCE.png';
import logoTitleImg from '../assets/header/logo-titre.png';
import contactImg from '../assets/header/contact.png';
import facebookImg from '../assets/header/facebook.png';
import boutiqueImg from '../assets/header/acceder-boutique.png';
import etagereBois from '../assets/header/texture-table-en-bois.jpg'

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
                    <h1 className='header-title'>France Mug</h1> {/* Ce H1 sera retiré en CSS */}
                </div>
                <nav className="header-navigation">
                    <div className="contact-follow">
                        <a href="mailto:contact@example.com">
                        <img src={contactImg} alt="Contact" />
                        </a>
                        <a href="https://www.facebook.com">
                        <img src={facebookImg} alt="Facebook" />
                        </a>
                    </div>
                    <div className="boutique-link">
                        <a href="/boutique"> {/* Remplace par le lien réel vers la boutique */}
                        <img src={boutiqueImg} alt="Accéder à la boutique" />
                        </a>
                    </div>
                </nav>
            </div>
            <div className="header-slogan">
                <h2 className='header-slogan'>Chaque Mug est une pépite d'humour et de bonne humeur</h2>
            </div>
        </div>
        <span className='etagere-contain'>
            <img src={etagereBois} className='img-etagere' alt='Étagère en bois avec des mugs' />
        </span>
    </header>
  );
};

export default Header;