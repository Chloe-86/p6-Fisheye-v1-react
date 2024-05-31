import React, { useState } from "react";
import arrow from "../assets/img/icons/mini-arrow.svg";
import "../assets/styles/filter.css";

const Filter = ({ mediasData, updateSortedData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    // Inverse l'état isOpen
    setIsOpen((prevIsOpen) => !prevIsOpen);
    const ul = document.querySelector(".filter ul");
    const isVisible = ul.classList.contains("visible");

    // Si la liste est déjà visible, met à jour isOpen en conséquence
    if (isVisible && !isOpen) {
      setIsOpen(true);
    }
  };


  const sortByDate = (data) => {
    const sortedData = [...data].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    return sortedData;
  };

  const sortByPop = (data) => {
    const sortedData = [...data].sort((a, b) => b.likes - a.likes);
    return sortedData;
  };

  const sortByTitle = (data) => {
    const sortedData = [...data].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    return sortedData;
  };

  const onclickSortByDate = () => {
    const sortedData = sortByDate(mediasData);
    updateSortedData(sortedData);
  };

  const onclickSortByPop = () => {
    const sortedData = sortByPop(mediasData);
    updateSortedData(sortedData);
   };

  const onclickSortByTitle = () => {
    const sortedData = sortByTitle(mediasData);
    updateSortedData(sortedData);
  };


  return (
    <>
      <div className="filter">
        <div>
          <p tabIndex="0" aria-label="trier par">
            Trier par
          </p>
        </div>
        <div className="ref" onClick={onToggle}>
          <img
            src={arrow}
            alt="fleche"
            tabIndex="0"
            aria-label="cliquez pour ouvrir les choix du filtre"
          ></img>
          <ul className={`${isOpen ? "visible" : ""}`}>
            <li
              tabIndex="0"
              data-active="popularity"
              id="pop"
              onClick={onclickSortByPop}
            >
              Popularité
            </li>
            <li
              tabIndex="0"
              data-active="ASC"
              id="date"
              onClick={onclickSortByDate}
            >
              Date
            </li>
            <li
              tabIndex="0"
              data-active="title"
              id="title"
              onClick={onclickSortByTitle}
            >
              Titre
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter;
