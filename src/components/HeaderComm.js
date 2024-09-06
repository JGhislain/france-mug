import React from 'react';

const HeaderComm = () => {
  return (
    <div className='header-comm'>
      <h3 className='title-comm'>
        <span className='title-text-comm'>Une idée cadeau originiale !</span>
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
  );
};

export default HeaderComm;
