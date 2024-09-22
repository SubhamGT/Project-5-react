import React from 'react';
import Navigation from '../components/Navigation';
import _Acceil from "../assets/styles/pages/_Acceil.scss"
import TitreLocation from '../components/TitreLocation';
import  Loggr  from '../assets/styles/pages/Loggr.scss';
import FichieLogement from './FicheLogement';

const Acceuil = () => {
    return (
        <div>
           <Navigation />
            <div className="tete">
                <div className="hcont">
            <h1>Chez Vous, partout et ailleurs</h1>
            </div>
    
            </div>
            <TitreLocation></TitreLocation>
            </div>

    );
};

export default Acceuil;