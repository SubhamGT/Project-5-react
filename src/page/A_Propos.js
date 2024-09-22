import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import '../assets/styles/pages/_proposListe.scss'; // Assure-toi que ce chemin est valide

const A_Propos = () => {
    const data = [
        {
            question: 'Fiabilité',
            answer: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
        },
        {
            question: 'Respect',
            answer: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraîne une exclusion de notre plateforme.',
        },
        {
            question: 'Service',
            answer: 'La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et bienveillance.',
        },
        {
            question: 'Sécurité',
            answer: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.',
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <Navigation />
            {/* Image banner */}
            <div className="imgprops">
            <div className="imgpropsc"></div>
            </div>

            {/* FAQ Section */}
            <div className="apropos">
                {data.map((item, i) => (
                    <div key={i} className="item">
                        <div
                            className={`title ${activeIndex === i ? 'active' : ''}`}
                            onClick={() => toggleAnswer(i)}
                        >
                            <h2>{item.question}</h2>
                        </div>
                        <div className={`content ${activeIndex === i ? 'active' : ''}`}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default A_Propos;
