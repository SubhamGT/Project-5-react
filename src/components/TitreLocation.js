import React from 'react';
import { NavLink } from 'react-router-dom'; // Assure-toi d'avoir importé NavLink
import data from '../logements.json'; // Vérifie le chemin vers le fichier JSON

const LogementList = () => {
  return (
    <div className="lc">
      <div className="Location">
        {data.slice(0, 6).map((logement) => (
          <div key={logement.id} className="logement-card">
            <div className="image-container">
              {/* Lien vers la fiche détaillée du logement */}
              <NavLink to={`/FicheLogement/${logement.id}`}>
                <img
                  src={logement.cover}
                  alt={logement.title}
                  className="logement-image"
                />
                <h2 className="logement-title">{logement.title}</h2>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogementList;
