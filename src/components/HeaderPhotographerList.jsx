import React from "react";
import PhotographerCardTemplate from "../Templates/PhotographerCardTemplate";
import data from "../data/data.json";
import "../assets/styles/main.css";
import "../assets/styles/PhotographersList.css";

const PhotographersList = () => {
  const photographers = data.photographers;

  if (!Array.isArray(photographers)) {
    console.error(
      "Le fichier JSON importé n'est pas un tableau.",
      photographers
    );
    return <div>Erreur: Les données ne sont pas valides.</div>;
  }

  return (
    <>
        {photographers.map((photographer) => (
          <PhotographerCardTemplate
            key={photographer.id}
            name={photographer.name}
            location={`${photographer.city}, ${photographer.country}`}
            price={`${photographer.price}€/jour`}
            tag={photographer.tagline}
            image={require(`../assets/img/photographers/${photographer.portrait}`)}
            link={`../pages/${photographer.id}`}
            customClassName={photographer.name.split(' ')[0].trim()}
          />
        ))}
    </>
  );
};

export default PhotographersList;
