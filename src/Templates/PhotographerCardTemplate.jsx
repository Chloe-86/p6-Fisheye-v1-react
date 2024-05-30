import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/PhotographersList.css";

const PhotographerCardTemplate = ({ name, location, price, image, tag, link }) => {
  const cardContent = (
    <React.Fragment>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{location}</h3>
      <p>{tag}</p>
      <span>{price}</span>

    </React.Fragment>
  );

  return (
      <article className="card grid-item">
        {link ? (
          <Link to={link}>
            {cardContent}
          </Link>
        ) : (
          cardContent
        )}
      </article>
  );
};

export default PhotographerCardTemplate;
