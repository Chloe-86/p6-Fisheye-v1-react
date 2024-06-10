
import React, {useRef, useEffect} from "react";
import "../assets/styles/PhotographersList.css";
import { useJsonDataContext } from "../jsonDataContext.js";
import { Link } from "react-router-dom";

const PhotographersList = () => {

  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current && focusRef.current.focus();
  }, []);

 
  const { jsonData } = useJsonDataContext();

  // Si les données ne sont pas encore disponibles, affichez un message de chargement
  if (!jsonData) {
    return <div>Loading...</div>;
  }

  const photographers = jsonData.photographers;
  
  return (
    <>
      {photographers.map((photographer) => (
        <Link
          key={photographer.id}
          to={`../pages/${photographer.id}`}
          aria-label={`${photographer.name}, ${photographer.city}, ${photographer.country}, ${photographer.tagline}, ${photographer.price}€/jour. Appuyez sur Entrée pour voir la page de ${photographer.name}`}
        >
          <article className="card grid-item" ref={focusRef}>
            <div className={`photo ${photographer.name.split(" ")[0].trim()}`}>
              <img
                src={require(`../assets/img/photographers/${photographer.portrait}`)}
                alt={photographer.name}
              />
            </div>
            <h2>{photographer.name}</h2>
            <h3>{`${photographer.city}, ${photographer.country}`}</h3>
            <p>{photographer.tagline}</p>
            <span>{`${photographer.price}€/jour`}</span>
          </article>
        </Link>
      ))}
    </>
  );
};

export default PhotographersList;
