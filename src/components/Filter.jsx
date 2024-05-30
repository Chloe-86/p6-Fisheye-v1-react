import React from "react";
import "../styles/dropdown.css";
import arrow from "../assets/img/arrow.svg";

const Dropdown = ({ title, content, isVisible, onToggle, customClassName }) => {
  return (
    <>
      <div className="filter">
        <div>
          <p tabindex="0" aria-label="trier par">
            Trier par
          </p>
        </div>
        <div>
          {/* <img src="./assets/icons/svg/mini-arrow.svg" alt="fleche" tabindex="0" aria-label="cliquez pour ouvrir les choix du filtre"> */}
          {/* <ul >
        <li tabindex="0" data-active="popularity" id="pop">Popularité</li>
        <li tabindex="0" data-active="ASC" id="date">Date</li>
        <li tabindex="0" data-active="title" id="title">Titre</li>
      </ul> */}
        </div>
      </div>
      {/* <Dropdown title= {Popularité}/> */}
    </>
  );
};

export default Dropdown;
