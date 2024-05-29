import React, { useState } from "react";
import Banner from "./Banner";
import DropDown from "./DropDown";


const About = () => {
  const [visibleDropdowns, setVisibleDropdowns] = useState([]);

  const toggleVisibilite = (id) => {

    if (visibleDropdowns.includes(id)) {
      setVisibleDropdowns(visibleDropdowns.filter(item => item !== id));
    } else {
      setVisibleDropdowns([...visibleDropdowns, id]);
    }
  };

  return (
    <div>
      <Banner />
    <div className="wrapper-dropdown">
      <DropDown
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        isVisible={visibleDropdowns.includes("fiabilite")}
        onToggle={() => toggleVisibilite("fiabilite")}
        
      />
      <DropDown
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        isVisible={visibleDropdowns.includes("respect")}
        onToggle={() => toggleVisibilite("respect")}
      
      />
      <DropDown
        title="Service"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        isVisible={visibleDropdowns.includes("Service")}
        onToggle={() => toggleVisibilite("Service")}
       
      />
      <DropDown
        title="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        isVisible={visibleDropdowns.includes("Sécurité")}
        onToggle={() => toggleVisibilite("Sécurité")}
       
      />
    </div>
    </div>
    
  );
};

export default About;
