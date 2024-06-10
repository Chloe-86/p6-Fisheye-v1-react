import React from 'react';
import "../assets/styles/notfound.css"
import { NavLink } from 'react-router-dom';
import HeaderTemplate from '../Templates/HeaderTemplate.jsx';
import bigLogo from '../assets/img/icons/bigLogo.svg'

const NotFound = () => {
  return (
    <div className="error">
      <HeaderTemplate
        logo={
          <NavLink to="/">
            <img className="logo" src={bigLogo} alt="logo" />
          </NavLink>
        }
      />
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className='homeReturn' >Retourner à la page d'accueil</NavLink>
    </div>
  );
}

export default NotFound;
