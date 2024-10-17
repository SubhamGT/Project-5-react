import React from 'react';
import Navigation from '../components/Navigation';
import _Acceil from "../assets/styles/pages/_Acceil.scss";
import TitreLocation from '../components/TitreLocation';
import Foot from '../components/Foot'


const Acceuil = () => {
    return (
        <div className="accc">
        <div className="acc">
                
           
         <Navigation />
            <div className="tete">
           
                <div className="hcont">
            <h1>Chez vous, partout et ailleurs</h1>
            </div>
    
            </div>
            <TitreLocation></TitreLocation>
    
            </div>
            <Foot></Foot> 
            </div>
            
    );
};

export default Acceuil;