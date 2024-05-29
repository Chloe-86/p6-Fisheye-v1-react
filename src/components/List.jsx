import React from 'react';
import PhotographerCard from '../Templates/PhotographerCard';
import jsonData from "../data/photographers.json";
import "../styles/main.css";

const PhotographersList = () => {
  const photographers = jsonData.photographers;

  if (!Array.isArray(photographers)) {
    console.error(
      "Le fichier JSON importé n'est pas un tableau.",
      photographers
    );
    return <div>Erreur: Les données ne sont pas valides.</div>;
  }

  return (
    <ul className="grid-container">
      {photographers.map((photographer) => (
        <PhotographerCard
          key={photographer.id}
          name={photographer.name}
          location={`${photographer.city}, ${photographer.country}`}
          price={`${photographer.price}€/jour`}
          image={require(`../assets/img/photographers/${photographer.portrait}`)}
        />
      ))}
    </ul>
  );
};

export default PhotographersList;
