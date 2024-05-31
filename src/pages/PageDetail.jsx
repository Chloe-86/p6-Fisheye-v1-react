import React, { useState } from "react"; 
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Banner from "../components/Banner.jsx";
import MediasDisplay from "../components/MediasDisplay.jsx";
import HeaderTemplate from "../Templates/HeaderTemplate.jsx";
import { NavLink } from "react-router-dom";
import bigLogo from "../assets/img/bigLogo.svg";
import Counter from "../components/Counter.jsx";
import "../assets/styles/counter.css";
import Filter from "../components/Filter.jsx";

const PageDetail = () => {
  const { id } = useParams();
  const photographers = data.photographers;

  const medias = data.media;
  const photographerId = photographers.find((item) => item.id === parseInt(id));

  const mediasData = medias.filter(
    (media) => media.photographerId === parseInt(id)
  );

  // État local pour stocker les likes mis à jour
  const [updatedLikes, setUpdatedLikes] = useState(
    mediasData.map((photo) => photo.likes)
  );

  const updateLikes = (newLikes) => {
    setUpdatedLikes(newLikes);
  };

  // État local pour stocker les données triées
  const [sortedData, setSortedData] = useState(mediasData);
  // Fonction de rappel pour mettre à jour les données triées
  const updateSortedData = (sortedData) => {
    console.log("Updating Sorted Data:", sortedData);
    setSortedData(sortedData);
  };



  return (
    <>
      <HeaderTemplate
        logo={
          <NavLink to="/">
            <img className="logo" src={bigLogo} alt="logo" />
          </NavLink>
        }
      />
      <Banner photographerId={photographerId} />
      <Filter mediasData={mediasData} updateSortedData={updateSortedData} />
      <MediasDisplay  key={sortedData.map(media => media.id).join(',')}mediasData={sortedData} photographerId={photographerId} updateLikes={updateLikes}/>
      <Counter photographerId={photographerId} newLikes={updatedLikes} />
    </>
  );
};

export default PageDetail;
