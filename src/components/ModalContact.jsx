import React from "react";
import "../assets/styles/contactModal.css";
import close from "../assets/img/icons/close.svg";

const ContactModal = ({ show, handleClose, photographerId }) => {
  return (
    <div className={`modal modal__special ${show ? "show" : ""}`}>
      <div className="modal-content modal-content__special">
        <div>

        </div>
        <button
          className="close lightbox_close"
          onClick={handleClose}
          aria-label="Fermer la modale"
        >
          <img src={close} alt="Fermer" />
        </button>
        <div className="names">
          <p className="title-contact">Contactez-moi</p>
          <p className="name">{photographerId.name}</p>
        </div>
        <form name="reserve" id="signup">
          <div className="formData" id="nickName">
            <label htmlFor="first">Prénom</label>
            <input
              className="text-control"
              type="text"
              id="first"
              name="first"
              minLength={2}
            />
            <span hidden>
              Veuillez entrer 2 caractères ou plus pour le champ du prénom.
            </span>
          </div>
          <div className="formData" id="name">
            <label htmlFor="last">Nom</label>
            <input className="text-control" type="text" id="last" name="last" />
            <span hidden>
              Veuillez entrer 2 caractères ou plus pour le champ du nom.
            </span>
          </div>
          <div className="formData" id="checkEmail">
            <label htmlFor="email">E-mail</label>
            <input
              className="text-control"
              type="email"
              id="email"
              name="email"
            />
            <span hidden>Veuillez entrer une adresse email correcte</span>
          </div>
          <div className="formData" id="textarea">
            <label htmlFor="area">Votre message</label>
            <textarea className="text-area" id="area" name="area" />
            <span hidden>Veuillez entrer un message</span>
          </div>
          <input
            className="btn-submit contact_button button"
            type="submit"
            value="Envoyer"
            onClick={handleClose}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
