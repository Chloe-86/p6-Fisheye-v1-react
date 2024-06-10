import React, { useState} from "react";
import "../assets/styles/media.css";
import Lightbox from "../components/lightbox.jsx";
import heart from "../assets/img/icons/heart.svg";
// import { useJsonDataContext } from "../jsonDataContext.js";

const MediasDisplay = ({ mediasData, photographerId, updateLikes }) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [likes, setLikes] = useState(mediasData.map(photo => photo.likes));
  // const [likedItems, setLikedItems] = useState([]);

  // useEffect(() => {
  //   const storedLikedItems = JSON.parse(window.localStorage.getItem('likedItems')) || [];
  //   setLikedItems(storedLikedItems);
  // }, []);

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

    // // Add to local storage
    // const likedItems = JSON.parse(window.localStorage.getItem('likedItems')) || [];
    // likedItems.push(mediasData[index].id);
    // window.localStorage.setItem('likedItems', JSON.stringify(likedItems));
    }
  };

  const handleKeyEnterLightbox = (e, index) => {
    if (e.key === 'Enter') {
      handleClickLightbox(index);
    }
  };
  const handleKeyEnterLike = (e, index) => {
    if (e.key === 'Enter') {
      handleClickLike(e, index);
    }
  };

  return (
    <>
      <ul className="grid-container detail">
        {mediasData.map((photo, index) => (
          <li className="grid-item" key={photo.id}>
            <div className="media-card-template"
              >
              <div className="containerImage">
                {photo.video ? (
                  <video src={require(`../assets/img/medias/${photographerId.name}/${photo.video}`)} controls />
                ) : (
                  <img  tabIndex="0" className="lightboxImg"
                    aria-label="Appuyer sur entrée pour ouvrir la lightbox"
                    src={require(`../assets/img/medias/${photographerId.name}/${photo.image}`)}
                    alt={photo.name}
                    onClick={() => handleClickLightbox(index)}
                    onKeyDown={(e) => handleKeyEnterLightbox(e, index)}
                  />
                )}
                <div className="containerInfo">
                  <p aria-label="titre">{photo.title}</p>
                  <div className="likes">
                    <p >{likes[index]}</p>
                    <img tabIndex="0"
                      onClick={(e) => handleClickLike(e, index)}
                      onKeyDown={(e) => handleKeyEnterLike(e, index)}
                      className={`clicklike`}
                      aria-label="Appuyer sur entrée ici pour liker"
                      src={heart}
                      alt="liker le coeur"
                    />
                  </div>
                </div>
              </div>
            </div>
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
