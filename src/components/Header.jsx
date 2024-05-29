import React from "react";
import { NavLink} from "react-router-dom";
import bigLogo from "../assets/img/bigLogo.svg";
import "../styles/header.css";

const Header = () => {

  return (
      <header>
        <h1>
          <img className="logo" src={bigLogo} alt="logo" />
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/"  >Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/about" >A propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;
