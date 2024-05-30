import React, { useState } from "react"; 
import MediasCardTemplate from "../Templates/MediaCardTemplate";
import "../assets/styles/media.css";
import Lightbox from "../components/lightbox.jsx";
import heart from "../assets/img/heart.svg";

const MediasDisplay = ({ mediasData, photographerId }) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index);
    setShowLightbox(true);
  };

  const handleClose = () => {
    setShowLightbox(false);
    setSelectedIndex(0);
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
              likesNumber={photo.likes}
              // heart="❤️"
              heart={heart}
              link={photo.link}
              video={
                photo.image
                  ? undefined
                  : require(`../assets/img/medias/${photographerId.name}/${photo.video}`)
              }
              onClick={() => handleClick(index)}
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
