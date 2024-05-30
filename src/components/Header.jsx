import React from "react";
import { NavLink } from "react-router-dom";
import bigLogo from "../assets/img/bigLogo.svg";
import "../assets/styles/header.css";
import "../assets/styles/PhotographersList.css"
import HeaderTemplate from "../Templates/HeaderTemplate";

const Header = () => {
  return (
    <HeaderTemplate
      logo={
        <NavLink to="/">
          <img className="logo" src={bigLogo} alt="logo" />
        </NavLink>}
        nav={<p>Nos photographes</p>}
    />
  );
};

export default Header;
