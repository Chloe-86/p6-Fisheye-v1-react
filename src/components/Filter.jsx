
import React, { useState} from "react";
import arrow from "../assets/img/icons/mini-arrow.svg";
import "../assets/styles/filter.css";

const Filter = ({ mediasData, updateSortedData}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);

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
    const sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));
    return sortedData;
  };

  const [filters, setFilters] = useState([
    { id: "popularity", label: "Popularité", action: sortByPop },
    { id: "date", label: "Date", action: sortByDate },
    { id: "title", label: "Titre", action: sortByTitle },
  ]);

  const onToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleFilterClick = (filterId) => {
      const selectedFilter = filters.find((filter) => filter.id === filterId);
      const sortedData = selectedFilter.action(mediasData);
      updateSortedData(sortedData);
  
      setFilters((prevFilters) => {
        const updatedFilters = prevFilters.filter(
          (filter) => filter.id !== filterId
        );
        return [selectedFilter, ...updatedFilters];
      });
      setActiveFilter(filterId);
      setTimeout(() => {
        setIsOpen(false); 
      }, 0); 
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      onToggle()
      const activeFilterElement = document.querySelector(".dropList li");
      if (activeFilterElement) {
        activeFilterElement.focus();
      }//a refaire avec un useref(null)+useeffect focus
    }
  };

  const handleKeyPress = (e, filterId) => {
    if (e.key === "Enter") {
      handleFilterClick(filterId);
    }
  };

  return (
    <>
      <div className="filter">
        <div>
          <p aria-label="trier par">Trier par</p>
        </div>
        <div
          aria-expanded={isOpen}
          role="button"
          aria-haspopup="listbox"
          className="ref"
          onClick={onToggle}
        >
          <ul
          tabIndex="0"
            aria-activedescendant={activeFilter}
            aria-labelledby="sortByLabel"
            role="listbox"
            className={`dropList ${isOpen ? "open" : "closed"}`}
          >
            {filters.map((filter, index) => (
              <li
                key={filter.id}
                tabIndex= {"0"}
                data-active={filter.id}
                id={filter.id}
                onClick={() => handleFilterClick(filter.id)}
                onKeyDown={(e) => handleKeyPress(e, filter.id)}
                
              >
                {filter.label}
              </li>
            ))}
       
          </ul>
          <img className="arrow"
              onKeyDown={(e) => handleKeyEnter(e)}
              src={arrow}
              alt="fleche"
              tabIndex="0"
              aria-label="cliquez pour ouvrir les choix du filtre"
            />
        </div>
      </div>
    </>
  );
};

export default Filter;
