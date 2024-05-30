import React, { useState, useEffect } from "react";
import "../assets/styles/lightbox.css";

const Lightbox = ({ mediasData, show, handleClose, photographerId, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);


  const handleNextClick = () => {
    setCurrentIndex((index) => (index + 1) % mediasData.length);
  };

  const handleBeforeClick = () => {
    setCurrentIndex((index) => (index - 1 + mediasData.length) % mediasData.length);
  };

  if (!show) return null;

  return (
    <div className={`lightbox lightbox__special lightbox__container1 ${show ? "show" : ""}`}>
      <div className="lightbox-content lightbox__container2">
        <button  className="lightbox__close close" onClick={handleClose}></button>
        <button  className="lightbox__next" onClick={handleNextClick}></button>
        <button  className="lightbox__prev" onClick={handleBeforeClick}></button>
        {mediasData[currentIndex].image ? (
          <img
            src={require(`../assets/img/medias/${photographerId.name}/${mediasData[currentIndex].image}`)}
            alt={mediasData[currentIndex].name}
          />
        ) : (
          <video
            src={require(`../assets/img/medias/${photographerId.name}/${mediasData[currentIndex].video}`)}
            controls
          />
        )}
        <p>{mediasData[currentIndex].title}</p>
      </div>
    </div>
  );
};

export default Lightbox;
