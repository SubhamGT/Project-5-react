import React from 'react';
import { NavLink } from 'react-router-dom'; // Ensure you've imported NavLink
import data from '../logements.json'; // Check the path to the JSON file

const LogementList = () => {
  return (
    <div className="lc">
      <div className="Location">
        {data.map((logement) => (
          <div key={logement.id} className="logement-card">
            <div className="image-container">
              {/* Link to the detailed fiche of the accommodation */}
              <NavLink to={`/FicheLogement/${logement.id}`}>
                <img
                  src={logement.cover}
                  alt={logement.title}
                  className="logement-image"
                />
                <h2 className="logement-title">{logement.title}</h2>
              </NavLink>
              {/* Displaying the location under the title */}
           
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogementList;
