import React from 'react';
import '../assets/styles/pages/_Err.scss';
import Navigation from '../components/Navigation';
import { NavLink } from 'react-router-dom';

const Red = () => {
  return (
    <div className="err">
      <Navigation />
      <div className="errb">
        <h1>404</h1>
        <br />
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <br />
        <NavLink to='/'>
          <button className="return-button">Retour à la page d'accueil</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Red;
