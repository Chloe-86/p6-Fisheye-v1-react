
import React, {useRef, useEffect} from "react";
import "../assets/styles/PhotographersList.css";
import { useJsonDataContext } from "../context/JsonDataContext.jsx";
import { Link } from "react-router-dom";
import { Card } from "../Templates/Card.jsx";

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
            <Card 
              name={photographer.name}
              city={photographer.city}
              country={photographer.country}
              tagline={photographer.tagline}
              nameTag="h2"
            />
            <span>{`${photographer.price}€/jour`}</span>
          </article>
        </Link>
      ))}
    </>
  );
};

export default PhotographersList;
