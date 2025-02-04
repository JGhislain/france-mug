import React from 'react';
import boutiqueImg from '../assets/header/acceder-boutique.webp';
import contactImg from '../assets/header/contact.png';
import facebookImg from '../assets/header/facebook.png';

const Footer = () => {
    return (
        <footer>
            <div className='footer-comm'>
                <h3 className='title-comm'>
                    <span className='title-text-comm'>Une idée cadeau original !</span>
                </h3>
                <div className='slogan-comm'>
                    <p className='slogan-text-comm'>Avec FRANCE MUG®, offrez un mug humoristique</p>
                    <p className='slogan-text-comm'>et personnalisé pour faire plaisir à votre famille,</p>
                    <p className='slogan-text-comm'>collègues ou amis.</p>
                </div>
                <div className='text-comm-container'>
                    <div className='under-comm-container'>
                    <h4 className='under-title-comm'>Le mug en céramique c'est le cadeau idéal à petit prix !</h4>
                    <div className='text-comm text-comm-top'>
                        Que ce soit pour une occasion spéciale: <span className='bold-text-comm'>anniversaire, Saint-Valentin, fête des mères, fête des grands-mères, fête des pères, départ d'un collègue à la retraite, crémaillère, enterrement de vie de jeune fille... </span>ou pour votre ami geek fan de jeux vidéos, votre frère qui a un humour décalé, votre sœur fan de licornes, votre amoureuse fan de chats, de chiens ou que votre moitié aime simplement prendre son chocolat chaud, son thé ou son café dans une belle tasse.
                    </div>
                    </div>
                    <div className='under-comm-container'>
                    <h4 className='under-title-comm'>Les visuels sont des créations originales réalisées par notre équipe de graphistes passionnés !</h4>
                    <div className='text-comm'>
                        Humour et Originalité: Faites sensation ! Ce n'est pas seulement un mug, c'est une œuvre d'art, <span className='bold-text-comm'>imprimé en haute définition,</span>
                    </div>
                    <div className='text-comm'>
                        Confectionné dans notre atelier en <span className='bold-text-comm'>France dans le Grand-Est:</span>
                    </div>
                    <div className='text-comm'>
                        Ce mug est le reflet de notre engagement envers l'excellence et la passion. <span className='bold-text-comm'>Fabriqué avec le cœur.</span>
                    </div>
                    </div>
                </div>
            </div>
            <div className='footer-link'>
                <div className='global-link-container'>
                    <div className='copyright-container'>
                        <p className='copyright-text'>©2024 FRANCE MUG® - Tous droits réservés.</p>
                    </div>
                    <div className='mentions-container'>
                        <a className='mentions-link text-link' href='/'>Mentions légales</a>
                        <p className='text-link'>-</p>
                        <a className='conditions-link text-link' href='/'>Conditions légales de vente</a>
                    </div>
                    <div className='social-link-footer'>
                        <a href="mailto:contact@example.com" className='contact-link'>
                            <img src={contactImg} alt="Contact" className='img-contact' />
                        </a>
                        <a href="https://www.facebook.com" className='facebook-link'>
                            <img src={facebookImg} alt="Facebook" target='blank_' className='img-facebook' />
                        </a>
                    </div>
                    <div className="boutique-link">
                        <a href="https://www.amazon.fr/stores/FranceMug%C2%AE/page/493046BF-FF94-4025-B14B-FC0230B27C36" target='blank_' className='boutique-link'>
                            <img src={boutiqueImg} alt="Accéder à la boutique" className='img-boutique' loading="lazy" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;