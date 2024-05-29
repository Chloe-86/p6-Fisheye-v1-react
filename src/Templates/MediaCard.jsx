import React from "react";
import { Link } from "react-router-dom";
import "../styles/list.css";

const MediasCard = ({ name, image, title, likesNumber, heart, link, video}) => {
  const cardContent = (
    <>
       {video ? <video src={video} controls /> : <img src={image} alt={name} />}
      <p>{title}</p>
      <p>{likesNumber}</p>
      <span>{heart}</span>
    </>
  );

  return (
    <li className="grid-item">
      <article className="card">
        {link ? (
          <Link className="wrapper" to={link}>
            {cardContent}
          </Link>
        ) : (
          cardContent
        )}
      </article>
    </li>
  );
};

export default MediasCard;