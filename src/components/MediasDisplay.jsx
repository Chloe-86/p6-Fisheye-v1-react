import React, { useState } from "react"; 
import MediasCardTemplate from "../Templates/MediaCardTemplate";
import "../assets/styles/media.css";
import Lightbox from "../components/lightbox.jsx";
import heart from "../assets/img/heart.svg";

const MediasDisplay = ({ mediasData, photographerId ,  updateLikes}) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [likes, setLikes] = useState(mediasData.map(photo => photo.likes));


  const handleClickLightbox = (index) => {
    setSelectedIndex(index);
    setShowLightbox(true);
  };

  const handleClose = () => {
    setShowLightbox(false);
    setSelectedIndex(0);
  };

  const handleClickLike = (e, index) => {
    // Vérifie si l'élément a déjà la classe liked
    if (!e.target.classList.contains('liked')) {
      const newLikes = [...likes];
      newLikes[index] += 1;
      setLikes(newLikes);
      updateLikes(newLikes); 
      // Ajoute la classe liked à l'élément cible
      e.target.classList.add('liked');
    }
  };

  return (
    <>
      <ul className="grid-container detail">
        {mediasData.map((photo, index) => (
         
          <li className="grid-item" key={photo.id}>
            <MediasCardTemplate
              name={photo.name}
              image={
                photo.image
                  ? require(`../assets/img/medias/${photographerId.name}/${photo.image}`)
                  : undefined
              }
              title={photo.title}
              likesNumber={likes[index]}
              heart={heart}
              link={photo.link}
              video={
                photo.image
                  ? undefined
                  : require(`../assets/img/medias/${photographerId.name}/${photo.video}`)
              }
              onClick={() => handleClickLightbox(index)}
              onClickLike={(e) => handleClickLike(e, index)}
            />
          </li>
        ))}
      </ul>
      {showLightbox && (
        <Lightbox
          photographerId={photographerId}
          initialIndex={selectedIndex}
          mediasData={mediasData}
          show={showLightbox}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

 export default MediasDisplay;
