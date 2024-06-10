import React from "react";
import PhotographerList from "../components/PhotographerList";
// import Banner from "./Banner";
import { NavLink } from "react-router-dom";
import bigLogo from "../assets/img/icons/bigLogo.svg";
import "../assets/styles/header.css";
import "../assets/styles/PhotographersList.css"
import HeaderTemplate from "../Templates/HeaderTemplate";

const Home = () => {


  return (
    <>
    <HeaderTemplate 
      logo={
        <NavLink to="/" aria-label="Fisheye Home page">
          <img className="logo" src={bigLogo} alt="Fisheye logo" />
        </NavLink>}
        nav={<h1 tabIndex="0">Nos photographes</h1>}
    />
    <main>
    <section className="photographer_section grid-container home">
    <PhotographerList/> 
    </section>
    </main>
    </>
  );
};

export default Home;
