import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import PhotographerCard from "../Templates/PhotographerCard";
import "../styles/list.css";
import Banner from "../components/Banner.jsx";
import MediasDisplay from "../components/MediasDisplay.jsx";

const PageDetail = () => {
  const { id } = useParams();
  const photographers = data.photographers;

  const medias = data.media;
  // Récupérer l'ID à partir des paramètres de l'URL
  const photographerId = photographers.find(
    (item) => item.id === parseInt(id)
  );

  const mediasData = medias.filter(
    (media) => media.photographerId === parseInt(id)
  );

  return (
    <>
      <Banner photographerId={photographerId} />
      <MediasDisplay mediasData={mediasData} photographerId={photographerId} />
    </>
  );
};

export default PageDetail;
