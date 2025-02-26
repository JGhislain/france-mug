import React from 'react';
import Bubbles from './animations/Bubbles'; // Import du composant des bulles

import impSurface from '../assets/footer/ico_360_degres.png';
import ceraQuality from '../assets/footer/ico_meilleur.png';
import washingResist from '../assets/footer/ico_lave_vaiss.png';
import antiHot from '../assets/footer/ico_anti_brul.png';
import mugCapacity from '../assets/footer/ico_quantite.png';
import antiChoc from '../assets/footer/ico_anti-choc.png';

const HeaderComm = () => {
  return (
    <div className='caract-mug-container'>
        {/* Bulles en arrière-plan */}
        <Bubbles />

        <div className='caract-icones-container'>
            <div className='imp-surface-container icones-container'>
                <img src={impSurface} alt='icone 360 degrés' className='icone-360 icone-caract' loading="lazy" />
                <div className='text-caract-container'> 
                    <p className='text-caract title-caract'>IMPRESSION SUR</p>
                    <p className='text-caract title-caract'>TOUTE LA SURFACE</p>
                </div>
            </div>
            <div className='anti-hot-container icones-container'>
                <img src={antiHot} alt='icone anti-brûlure' className='icone-anti-hot icone-caract' loading="lazy" />
                <div className='text-caract-container'>
                    <p className='text-caract title-caract'>ANSE</p>
                    <p className='text-caract title-caract'>ANTI-BRÛLURES</p>
                </div>
            </div>
            <div className='cera-quality-container icones-container'>
                <img src={ceraQuality} alt='icone haute résistance' className='icone-cera-quality icone-caract' loading="lazy" />
                <div className='text-caract-container'>
                    <p className='text-caract title-caract'>CÉRAMIQUE AAA</p>
                    <p className='text-caract title-caract'>HAUTE RÉSISTANCE</p>
                    <p className='text-caract title-caract'>LA MEILLEURE QUALITÉ</p>
                </div>
            </div>
            <div className='mug-capacity-container icones-container'>
                <img src={mugCapacity} alt='icone capacité du mug' className='icone-mug-capacity icone-caract' loading="lazy" />
                <div className='text-caract-container'>
                    <p className='text-caract title-caract'>CAPACITÉ 330 ML</p>
                </div>
                <div className='under-caract-container'>
                    <p className='text-caract under-text-caract'>Il est assez grand pour vos ambitions</p>
                    <p className='text-caract under-text-caract'>caféinées, théinées ou chocolatées</p>
                </div>
            </div>
            <div className='washing-resist-container icones-container'>
                <img src={washingResist} alt='icone résistant au lave-vaisselle et micro-onde' className='icone-washing icone-caract' loading="lazy" />
                <div className='text-caract-container'>
                    <p className='text-caract title-caract'>RÉSISTANT AU</p>
                    <p className='text-caract title-caract'>LAVE-VAISSELLE</p>
                    <p className='text-caract title-caract'>MICRO-ONDES</p>
                </div>
            </div>
            <div className='anti-choc-container icones-container'>
                <img src={antiChoc} alt='icone anti-choc pour le transport' className='icone-anti-choc icone-caract' loading="lazy" />
                <div className='text-caract-container'>
                    <p className='text-caract title-caract'>BOÎTE DE TRANSPORT</p>
                    <p className='text-caract title-caract'>ANTI-CHOC RENFORCÉE</p>
                </div>
                <div className='under-caract-container'>
                    <p className='text-caract under-text-caract'>Livré dans un écrin de POLYSTYRÈNE pour</p>
                    <p className='text-caract under-text-caract'>une arrivée à destination garantie sans casse</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HeaderComm;
