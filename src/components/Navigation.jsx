import React from "react";
//importer navlink
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navc">
      <div className="navigation">
        <NavLink
          to="/"
          //injecter une class quand est active
          className={({ isActive }) => (isActive ? "aktive" : "")}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/A_Propos"
          className={({ isActive }) => (isActive ? "aktive" : "")}
        >
          <li>A Propos</li>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
