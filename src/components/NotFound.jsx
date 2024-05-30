import React from 'react';
import "../assets/styles/notfound.css"
import { NavLink } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className="error">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className='homeReturn' >Retourner à la page d'accueil</NavLink>
    </div>
  );
}

export default NotFound;
