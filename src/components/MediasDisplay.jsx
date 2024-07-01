
import React, { useState } from "react";
import "../assets/styles/media.css";
import Lightbox from "../components/lightbox.jsx";
import heart from "../assets/img/icons/heart.svg";

const MediasDisplay = ({ mediasData, photographerId, updateLikes }) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [likes, setLikes] = useState(() => {
    const initialLikes = {};
    mediasData.forEach(photo => {
      initialLikes[photo.id] = { count: photo.likes, liked: false };
    });
    return initialLikes;
  });

  const handleClickLightbox = (index) => {
    setSelectedIndex(index);
    setShowLightbox(true);
  };

  const handleClose = () => {
    setShowLightbox(false);
    setSelectedIndex(0);
  };

  const handleClickLike = (e, photoId) => {
    if (!likes[photoId].liked) {
      const newLikes = { ...likes };
      newLikes[photoId] = {
        count: newLikes[photoId].count + 1,
        liked: true,
      };
      setLikes(newLikes);
      updateLikes(newLikes);
    }
  };
 
  const handleKeyEnterLightbox = (e, index) => {
    if (e.key === 'Enter') {
      handleClickLightbox(index);
    }
  };

  const handleKeyEnterLike = (e, photoId) => {
    if (e.key === 'Enter') {
      handleClickLike(e, photoId);
    }
  };

  return (
    <>
      <ul className="grid-container detail">

        {mediasData.map((photo, index) => (
          <li className="grid-item" key={photo.id}>
            <article className="media-card-template">
            <h3 class="visually-hidden">carte</h3>
              <div className="containerImage">
                {photo.video ? (
                  <video
                    src={require(`../assets/img/medias/${photographerId.name}/${photo.video}`)}
                    controls
                    onClick={() => handleClickLightbox(index)}
                    onKeyDown={(e) => handleKeyEnterLightbox(e, index)}
                  />
                ) : (
                  <img
                    tabIndex="0"
                    className="lightboxImg"
                    aria-label="Appuyer sur entrée pour ouvrir la lightbox"
                    src={require(`../assets/img/medias/${photographerId.name}/${photo.image}`)}
                    alt={photo.title}
                    onClick={() => handleClickLightbox(index)}
                    onKeyDown={(e) => handleKeyEnterLightbox(e, index)}
                  />
                )}
                <div className="containerInfo">
                  <p >{photo.title}</p>
                  <div className="likes">
                  <p>{likes[photo.id].count}</p>
                    <img
                      tabIndex="0"
                      data-id={photo.id}
                      onClick={(e) => handleClickLike(e, photo.id)}
                      onKeyDown={(e) => handleKeyEnterLike(e, photo.id)}
                      className={`clicklike ${likes[photo.id].liked ? 'liked' : ''}`}
                      aria-label="Appuyer sur entrée ici pour liker"
                      src={heart}
                      alt="liker le coeur"
                    />
                  </div>
                </div>
              </div>
            </article>
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
