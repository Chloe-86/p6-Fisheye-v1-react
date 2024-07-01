
import React, { useState, useEffect } from "react";
import "../assets/styles/counter.css";
import blackLike from "../assets/img/icons/blacklike.svg";

const Counter = ({ photographerId, newLikes }) => {
  const [likes, setLikes] = useState(newLikes);
  const [totalLikes, setTotalLikes] = useState(0);

  useEffect(() => {
    setLikes(newLikes);
  }, [newLikes]);

  useEffect(() => {
    // Mettre à jour totalLikes lorsque likes change
    if (Array.isArray(likes)) {
      // Si likes est un tableau, calculer la somme des nombres
      const sumLikes = likes.reduce((acc, curr) => acc + curr, 0);
      setTotalLikes(sumLikes);
    } else if (typeof likes === "object" && likes !== null) {
      // Si likes est un objet, calculer la somme des counts s'ils existent
      const likesArray = Object.values(likes).map((like) => like.count);
      const sumLikes = likesArray.reduce((acc, curr) => acc + curr, 0);
      setTotalLikes(sumLikes);
    }
  }, [likes]);

  return (
    <div className="likeWrapper">
      <article className="card-like">
        <h5 class="visually-hidden">Compteurd de likes</h5>
        <div className="likes">
          <p>{totalLikes}</p>
          <img src={blackLike} className="clicklike" alt="coeur" />
        </div>
        <div>
          <p>{photographerId.price} € / jour</p>
        </div>
      </article>
    </div>
  );
};

export default Counter;
