import "../assets/styles/banner.css";
import React, { useState } from "react"; 
import ContactModal from "./ModalContact";


const Banner = ({ photographerId }) => {

  const [showModal, setShowModal] = useState(false);

  const handleClick = (media) => {
    setShowModal(true);
 
  };

  const handleClose = () => {
    setShowModal(false);
  
  };

  return (
    <div className="banner">
      <div className="info">
        <h2>{photographerId.name}</h2>
        <h3>{`${photographerId.city}, ${photographerId.country}`}</h3>
        <span>{photographerId.tagline}</span>
      </div>
      <button
        tabIndex="0"
        role="button"
        aria-disabled="false"
        aria-label="Appuyer ici pour ouvrir la modale de contact"
        className="contact_button" onClick={handleClick}
      >
        Contactez-moi
      </button>
      <ContactModal photographerId={photographerId} show={showModal} handleClose={handleClose} />
      <div className="photo">
        <img
          src={require(`../assets/img/photographers/${photographerId.portrait}`)}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;

