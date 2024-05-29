import React from "react";
import "../styles/banner.css"

const Banner = ({photographerId}) => {
  return (
    <div className="banner">
        <p>{photographerId.name}</p>
        <p>{`${photographerId.city}, ${photographerId.country}`}</p>
      <p></p>
      <span>{photographerId.tagline}</span>
    <button>Contactez-moi</button>
   <img src= {require(`../assets/img/photographers/${photographerId.portrait}`)} alt="" />
  </div>
  );
};

export default Banner;
