import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
      <div className="navigation">
      
        <NavLink to='/'>
        <li>Acceuil</li>
        </NavLink>
        <NavLink to='/A_Propos'>
        <li>A Propos</li>
        </NavLink>
    
      </div>
    );
};

export default Navigation;