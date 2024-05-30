import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import PhotographerCardTemplate from "../Templates/PhotographerCardTemplate";
import Banner from "../components/Banner.jsx";
import MediasDisplay from "../components/MediasDisplay.jsx";
import HeaderTemplate from "../Templates/HeaderTemplate.jsx"
import { NavLink } from "react-router-dom";
import bigLogo from "../assets/img/bigLogo.svg";


const PageDetail = () => {
  const { id } = useParams();
  const photographers = data.photographers;

  const medias = data.media;
  const photographerId = photographers.find((item) => item.id === parseInt(id));

  const mediasData = medias.filter(
    (media) => media.photographerId === parseInt(id)
  );

  return (
    <>
    <HeaderTemplate logo={
        <NavLink to="/">
          <img className="logo" src={bigLogo} alt="logo" />
        </NavLink>}/>
      <Banner photographerId={photographerId} />
      <MediasDisplay mediasData={mediasData} photographerId={photographerId} />
    </>
  );
};

export default PageDetail;
