import React from "react"; 
import { Link } from "react-router-dom";
import "../assets/styles/media.css";

const MediasCardTemplate = ({ name, image, title, likesNumber, heart, link, video, onClick }) => {

  const cardContent = (
    <>
      <div className="containerImage">
        {video ? (
          <video src={video} controls />
        ) : (
          <img aria-label="Cliquez ici pour ouvrir la lightbox" src={image} alt={name} onClick={onClick} />
        )}
        <div className="containerInfo">
          <p aria-label="titre">{title}</p>
          <div className="likes">
            <p>{likesNumber}</p>
            <img  className="clicklike" aria-label="Cliquez ici pour liker" src={heart} alt="coeur"/>

          </div>
        </div>
      </div>
    </>
  );

  return (
    <article className="card">
      {link ? (
        <Link className="wrapper" to={link}>
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </article>
  );
};

export default MediasCardTemplate;
