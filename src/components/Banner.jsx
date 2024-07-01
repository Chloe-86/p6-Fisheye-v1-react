import "../assets/styles/banner.css";
import React, { useState } from "react";
import ContactModal from "./ModalContact";
import { Card } from "../Templates/Card.jsx";

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
      >
          <Card 
              name={photographerId.name}
              city={photographerId.city}
              country={photographerId.country}
              tagline={photographerId.tagline}
              nameTag="h1"
              cityTag="h2"
              tagLine="span"
            />
      </div>
      <button
        tabIndex="0"
        aria-disabled="false"
        aria-label={`Contact me ${photographerId.name}`}
        aria-labelledby="contactModalTitle"
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
