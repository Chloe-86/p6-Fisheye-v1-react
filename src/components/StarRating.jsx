
import React from 'react';
import '../styles/starRating.css';
import starFill from "../assets/img/starFill.svg";
import starEmpty from "../assets/img/starEmpty.svg";

const StarRating = ({rating}) => {
  const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        // Si l'indice est inférieur à la note, affiche une étoile pleine
        stars.push(<span key={i}><img src={starFill} alt="etoile pleine" /></span>);
      } else {
        // Sinon, affiche une étoile vide
        stars.push(<span key={i}><img src={starEmpty} alt="etoile vide" /></span>);
      }
    }

    return (
      <div className="stars">
        {stars}
      </div>
  );
};

export default StarRating;
