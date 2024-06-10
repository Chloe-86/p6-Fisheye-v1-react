// import React from "react";
// import "../assets/styles/contactModal.css";
// import close from "../assets/img/icons/close.svg";

// const ContactModal = ({ show, handleClose, photographerId }) => {
//   return (
//     <div className={`modal modal__special ${show ? "show" : ""}`}>
//       <div className="modal-content modal-content__special">
//         <div>

//         </div>
//         <button
//           className="close lightbox_close"
//           onClick={handleClose}
//           aria-label="Fermer la modale"
//           aria-labelledby="close contact form"
//         >
//           <img  src={close} alt="Fermer" />
//         </button>
//         <div className="names">
//           <h1 className="title-contact">Contactez-moi</h1>
//           <p className="name">{photographerId.name}</p>
//         </div>
//         <form name="reserve" id="signup">
//           <div className="formData" id="nickName">
//             <label htmlFor="first">Prénom</label>
//             <input
//               className="text-control"
//               type="text"
//               id="first"
//               name="first"
//               minLength={2}
//               aria-labelledby="first name"
//             />
//             <span hidden>
//               Veuillez entrer 2 caractères ou plus pour le champ du prénom.
//             </span>
//           </div>
//           <div className="formData" id="name">
//             <label htmlFor="last">Nom</label>
//             <input className="text-control" type="text" id="last" name="last" aria-labelledby="last name" />
//             <span hidden>
//               Veuillez entrer 2 caractères ou plus pour le champ du nom.
//             </span>
//           </div>
//           <div className="formData" id="checkEmail">
//             <label htmlFor="email">E-mail</label>
//             <input
//               className="text-control"
//               type="email"
//               id="email"
//               name="email"
//               aria-labelledby="Email"
//             />
//             <span hidden>Veuillez entrer une adresse email correcte</span>
//           </div>
//           <div className="formData" id="textarea">
//             <label htmlFor="area">Votre message</label>
//             <textarea className="text-area" id="area" name="area" aria-labelledby="Your message" />
//             <span hidden>Veuillez entrer un message</span>
//           </div>
//           <input
//             className="btn-submit contact_button button"
//             type="submit"
//             value="Envoyer"
//             onClick={handleClose}
//             aria-labelledby="Send"
//           />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactModal;
import React, {useState} from "react";
import "../assets/styles/contactModal.css";
import close from "../assets/img/icons/close.svg";

const ContactModal = ({ show, handleClose, photographerId }) => {
  
  // const [send, setSend] = useState(false); 

  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState(''); 

  const handleClick =()=>{
    // setMessage(true);
  console.log(firstName)
  console.log(lastName)
  console.log(email)
  console.log(message)
  }
  return (
    <div
      className={`modal modal__special ${show ? "show" : ""}`}
      role="dialog"
      aria-labelledby="contactModalTitle"
      aria-modal="true"
    >
      <div className="modal-content modal-content__special">
        <button
          className="close lightbox_close"
          onClick={handleClose}
          aria-label="Fermer la modale"
        >
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
            <label htmlFor="first">Prénom</label>
            <input
              className="text-control"
              type="text"
              id="first"
              name="first"
              minLength={2}
              aria-labelledby="firstNameLabel"
              onChange={e => setFirstName(e.target.value)}
            />
            <span id="firstNameError" hidden>
              Veuillez entrer 2 caractères ou plus pour le champ du prénom.
            </span>
          </div>
          <div className="formData" id="lastNameField">
            <label htmlFor="last">Nom</label>
            <input
              className="text-control"
              type="text"
              id="last"
              name="last"
              aria-labelledby="lastNameLabel"
              onChange={e => setLastName(e.target.value)}
            />
            <span id="lastNameError" hidden>
              Veuillez entrer 2 caractères ou plus pour le champ du nom.
            </span>
          </div>
          <div className="formData" id="emailField">
            <label htmlFor="email">E-mail</label>
            <input
              className="text-control"
              type="email"
              id="email"
              name="email"
              aria-labelledby="emailLabel"
              onChange={e => setEmail(e.target.value)}
            />
            <span id="emailError" hidden>
              Veuillez entrer une adresse email correcte
            </span>
          </div>
          <div className="formData" id="messageField">
            <label htmlFor="area">Votre message</label>
            <textarea
              className="text-area"
              id="area"
              name="area"
              aria-labelledby="messageLabel"
              onChange={e => setMessage(e.target.value)}
            />
            <span id="messageError" hidden>
              Veuillez entrer un message
            </span>
          </div>
          <input
            className="btn-submit contact_button button"
            type="button"
            value="Envoyer"
            aria-labelledby="sendButtonLabel"
            onClick={e => handleClick()}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
