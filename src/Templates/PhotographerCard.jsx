import React from 'react';
import '../styles/list.css'

const PhotographerCard = ({ name, location, price, image }) => {
  return (
    <li className="grid-item">
      <article className="card">
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{location}</p>
        <span>{price}</span>
      </article>
    </li>
  );
};

export default PhotographerCard;
