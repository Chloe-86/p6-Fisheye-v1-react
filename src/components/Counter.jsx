import React from "react";
import "../assets/styles/counter.css"
import blackLike from "../assets/img/blacklike.svg"


const Counter = ({photographerId, newLikes}) => {
    const totalLikes = newLikes.reduce((acc, curr) => acc + curr, 0);
  
  return (
    <div className="likeWrapper">
      <article className="card-like">
              <div className="likes">
                <p>{totalLikes}</p>
                <img src={blackLike} className="clicklike" alt="coeur"></img>
              </div>
              <div>
              <p>{photographerId.price} € / jour</p>
            </div>
        </article>
    </div>
  );
};

export default Counter;