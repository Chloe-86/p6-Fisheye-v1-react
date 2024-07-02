import "../assets/styles/banner.css";
import { useState } from "react";
import ContactModal from "./ModalContact"; // eslint-disable-line no-unused-vars
import { Card } from "../Templates/Card.jsx"; // eslint-disable-line no-unused-vars


const Banner = ({ photographerId }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
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
          src={require(`../assets/img/photographers/${photographerId.portrait}`)}//eslint-disable-line no-undef
          alt={photographerId.name}
        />
      </div>
    </div>
  );
};

export default Banner;
