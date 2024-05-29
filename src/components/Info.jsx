import React, { useState } from "react";
import StarRating from '../components/StarRating';
import DropDown from "../components/DropDown";
import "../styles/template.css";
import '../styles/info.css'

const Info = ({item, id}) => {

    const [visibleDropdowns, setVisibleDropdowns] = useState([]);

    // Trouver l'élément correspondant dans le tableau de données en fonction de l'ID

  
    if (!item) {
      return <div>L'élément avec l'ID {id} n'existe pas.</div>;
    }

    const toggleVisibilite = (id) => {
        if (visibleDropdowns.includes(id)) {
          setVisibleDropdowns(visibleDropdowns.filter((item) => item !== id));
        } else {
          setVisibleDropdowns([...visibleDropdowns, id]);
        }
      };
      
      let location;

      if(item.location.includes('-')){
        let splitLocation = item.location.split('-');
        let newLocation = splitLocation.reverse();
        newLocation.splice(1,0,', ');
        location = newLocation.join('');
      }

  return (
    <>
      <div className="columns top">
        <div className="left-part">
          <h2 className="title red typo">{item.title}</h2>
          <p>{location}</p>
          <ul>
            {item.tags.map((tag, index) => (
              <li className="bg-red-white tag center" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="right-part">
          <div className="columns">
            <h2 className="name center">{item.host.name}</h2>
            <div className="cercle-profil">
              <img src={item.host.picture} alt={item.title} />
            </div>
          </div>

          <StarRating rating={item.rating} />
        </div>
      </div>
      <div className="columns space">
        <div className="left-part">
          <DropDown
            title="Description"
            content={item.description}
            isVisible={visibleDropdowns.includes("Description")}
            onToggle={() => toggleVisibilite("Description")}
            customClassName="title-bar"
          />
        </div>
        <div className="right-part">
          <DropDown
            title="Equipements"
            content={
              <ul className="equipements">
                {item.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
            isVisible={visibleDropdowns.includes("equipements")}
            onToggle={() => toggleVisibilite("equipements")}
            customClassName="title-bar"
          />
        </div>
      </div>
    </>
  );
};

export default Info;