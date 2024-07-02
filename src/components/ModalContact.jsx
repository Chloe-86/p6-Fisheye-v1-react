import { useState, useEffect } from "react";
import "../assets/styles/contactModal.css";
import close from "../assets/img/icons/close.svg";

const ContactModal = ({ show, handleClose, photographerId }) => {
  
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState(''); 

  const handleClick = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(message);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (show) {
      document.addEventListener("keydown", handleKeyPress);
    } else {
      document.removeEventListener("keydown", handleKeyPress);
    }

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [show, handleClose]);

  return (
    <div className={`modal modal__special ${show ? "show" : ""}`} role="dialog" aria-modal="true">
      <div className="modal-content modal-content__special">
        <button className="close lightbox_close" onClick={handleClose} aria-label="Fermer la modale">
          <img src={close} alt="Fermer" />
        </button>
        <div className="names">
          <h1 id="contactModalTitle" className="title-contact">
            Contactez-moi
          </h1>
          <p className="name">{photographerId.name}</p>
        </div>
        <form name="reserve" id="signup">
          <div className="formData" id="firstNameField">
            <label id="firstLabel" htmlFor="first">Prénom</label>
            <input
              className="text-control"
              type="text"
              id="first"
              name="first"
              minLength={2}
              aria-labelledby="firstLabel"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <span id="firstNameError" hidden>Veuillez entrer 2 caractères ou plus pour le champ du prénom.</span>
          </div>
          <div className="formData" id="lastNameField">
            <label id="lastLabel" htmlFor="last">Nom</label>
            <input
              className="text-control"
              type="text"
              id="last"
              name="last"
              aria-labelledby="lastLabel"
              onChange={(e) => setLastName(e.target.value)}
            />
            <span id="lastNameError" hidden>Veuillez entrer 2 caractères ou plus pour le champ du nom.</span>
          </div>
          <div className="formData" id="emailField">
            <label id="emailLabel" htmlFor="email">E-mail</label>
            <input
              className="text-control"
              type="email"
              id="email"
              name="email"
              aria-labelledby="emailLabel"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span id="emailError" hidden>Veuillez entrer une adresse email correcte</span>
          </div>
          <div className="formData" id="messageField">
            <label id="messageLabel" htmlFor="area">Votre message</label>
            <textarea
              className="text-area"
              id="area"
              name="area"
              aria-labelledby="messageLabel"
              onChange={(e) => setMessage(e.target.value)}
            />
            <span id="messageError" hidden>Veuillez entrer un message</span>
          </div>
          <input
            className="btn-submit contact_button button"
            type="button"
            value="Envoyer"
            onClick={handleClick}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
