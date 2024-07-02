import { useState, useEffect, useRef } from "react";
import "../assets/styles/lightbox.css";

const Lightbox = ({ mediasData, show, handleClose, photographerId, initialIndex }) => {
  const lightboxRef = useRef(null);
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

  const handleKeyDown = (event) => {
    if (!show) return;
    if(show){
      if (event.key === "ArrowRight") {
        handleNextClick();
      } else if (event.key === "ArrowLeft") {
        handleBeforeClick();
      } else if (event.key === "Enter" && event.target.classList.contains("lightbox__close")) {
        handleClose();
      }else if (event.key === "Escape") {
        handleClose();
      }
    }
  };

  useEffect(() => {
    setCurrentIndex(initialIndex);
    if (show) {
      lightboxRef.current.focus(); 
    }
  }, [initialIndex, show]);

  if (!show) return null;

  return (
    <div ref={lightboxRef} tabIndex="0" className={`lightbox lightbox__special lightbox__container1 ${show ? "show" : ""}`} onKeyDown={handleKeyDown}>

      <div className="lightbox-content lightbox__container2">

        <button  aria-labelledby="close dialog" className="lightbox__close close" onClick={handleClose} ></button>

        <button  aria-labelledby="Next image" className="lightbox__next" onClick={handleNextClick}></button>

        <button  aria-labelledby="Previous image" className="lightbox__prev" onClick={handleBeforeClick}></button>

        {mediasData[currentIndex].image ? (
          <img 
            src={require(`../assets/img/medias/${photographerId.name}/${mediasData[currentIndex].image}`)} // eslint-disable-line no-undef
            alt={mediasData[currentIndex].name}
          />
        ) : (
          <video 
            src={require(`../assets/img/medias/${photographerId.name}/${mediasData[currentIndex].video}`)} // eslint-disable-line no-undef
            controls
          />
        )}
        <p >{mediasData[currentIndex].title}</p>
      </div>
    </div>
  );
};

export default Lightbox;
