import  { useState } from "react";
import arrow from "../assets/img/icons/mini-arrow.svg";
import "../assets/styles/filter.css";

const Filter = ({ mediasData, updateSortedData, newLikes}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);

  const integrateLikes = (data, likes) => {
    return data.map((item) => ({
      ...item,
      likes: likes[item.id]?.count || item.likes,
      liked: likes[item.id]?.liked || false,
    }));
  };

  const sortByDate = (data) => {
    const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
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
    const integratedData = integrateLikes(mediasData, newLikes);
    setTimeout(() => {
      integratedData.forEach((item) => {
        const element = document.querySelector(`.clicklike[data-id="${item.id}"]`);
        if (element && item.liked) {
          element.classList.add("liked");
        } else if (element && !item.liked) {
          element.classList.remove("liked");
        }
      });
    }, 0);
    
    const sortedData = selectedFilter.action(integratedData);
    updateSortedData(sortedData);
    setFilters((prevFilters) => {
      const updatedFilters = prevFilters.filter((filter) => filter.id !== filterId);
      return [selectedFilter, ...updatedFilters];
    });
    setActiveFilter(filterId);
    setTimeout(() => {
      setIsOpen(false);
    }, 0);

   };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      onToggle();
      const activeFilterElement = document.querySelector(".dropList li");
      if (activeFilterElement) {
        activeFilterElement.focus();
      }
    }
  };

  const handleKeyPress = (e, filterId) => {
    if (e.key === "Enter") {
      handleFilterClick(filterId);
    }
  };

  return (
    <>
        <div className="filter" role="region">
          <div>
            <p>Trier par</p>
          </div>
          <div className="ref" onClick={onToggle} >
          <img
              className={`arrow ${isOpen ? "open" : "closed"}`}
              onKeyDown={(e) => handleKeyEnter(e)}
              src={arrow }
              alt="fleche"
              tabIndex="0"
              aria-label="cliquez pour ouvrir les choix du filtre"
            />
            <ul tabIndex="0" aria-activedescendant={activeFilter} role="listbox" className={`dropList ${isOpen ? "open" : "closed"}`}>
              {filters.map((filter) => (
                <li
               
                  key={filter.id}
                  tabIndex="0"
                  data-active={filter.id}
                  id={filter.id}
                  onClick={() => handleFilterClick(filter.id)}
                  onKeyDown={(e) => handleKeyPress(e, filter.id)}
                >
                  {filter.label}
                </li>
              ))}
            </ul>
           
          </div>
        </div>
    </>
  );
};

export default Filter;