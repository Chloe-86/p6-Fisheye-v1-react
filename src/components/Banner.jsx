import "../assets/styles/banner.css";
import React, { useState } from "react";
import ContactModal from "./ModalContact";
// import { useJsonDataContext } from "../jsonDataContext.js";

const Banner = ({ photographerId }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (media) => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="banner" >
      <div
        className="info"
        tabIndex="0"
        aria-label={`${photographerId.name}, ${photographerId.city}, ${photographerId.country}, ${photographerId.tagline}`}
      >
        <h1>{photographerId.name}</h1>
        <h2>{`${photographerId.city}, ${photographerId.country}`}</h2>
        <span>{photographerId.tagline}</span>
      </div>
      <button
        tabIndex="0"
        aria-disabled="false"
        aria-label="appuyer sur entrée pour ouvrir le formulaire de contact"
        aria-labelledby={`Contact me ${photographerId.name}`}
        className="contact_button"
        onClick={handleClick}
      >
        Contactez-moi
      </button>
      <ContactModal
        photographerId={photographerId}
        show={showModal}
        handleClose={handleClose}
      />
      <div className={`photo ${photographerId.name}`}>
        <img tabIndex="0"
        aria-label={`Portrait de ${photographerId.name}`}
          src={require(`../assets/img/photographers/${photographerId.portrait}`)}
          alt={photographerId.name}
        />
      </div>
    </div>
  );
};

export default Banner;
