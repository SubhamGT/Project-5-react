import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../logements.json';
import Navigation from '../components/Navigation';
import Equipements from '../components/Equipements';
import Tag from '../components/Tag';
import Toggle from '../components/Toggle'; 
import Carousel from '../components/Carousel'; // Import the Carousel component
import '../assets/styles/pages/_FicheLogement.scss';
import Foot from '../components/Foot'

const FicheLogement = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const logement = data.find((logement) => logement.id === id);
  const [openToggle, setOpenToggle] = useState(null); // État pour gérer quel toggle est ouvert

  useEffect(() => {
    if (!logement) {
      navigate('/Red.js'); 
    }
  }, [logement, navigate]);

  const handleToggle = (index) => {
    // Ferme le toggle actuellement ouvert ou ouvre le nouveau toggle
    setOpenToggle(openToggle === index ? null : index);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  if (!logement) {
    return null; 
  }

  return (
    <div className="pagelogement">
      <Navigation />
      <div className="alc">
        <div className="carouselc">
          <Carousel images={logement.pictures} /> 
        </div>
  
        <div className="host-info">
          <div className="titrea">
            <div className="lefta">
              <h2>{logement.title}</h2>
              <h3 className="logement-location">{logement.location}</h3>
              <div className="tagas">
                <div className="tags-container">
                  {logement.tags && logement.tags.map((tag, index) => (
                    <Tag key={index} tagName={tag} />
                  ))}
                </div>
              </div>
            </div>
            <div className="hc">
              <div className="hostp">
                <div className="hostnp">
                  <div className="host-name">{logement.host.name}</div>
                  <div className="host-picture"></div>
                </div>
                <div className="hostb">
                  <img src={logement.host.picture} alt={`${logement.host.name}`} />
                  <div className="hr"></div>
                </div>
              </div>
              <div className="rrating">
                <div className="rating">
                  <div className="rc">
                    {renderStars(logement.rating)} {/* Appel de la fonction pour afficher les étoiles */}
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div className="togc">
          <Toggle 
            question="Description" 
            answer={<div>{logement.description}</div>} 
            isOpen={openToggle === 0} // Vérifie si le premier toggle est ouvert
            onToggle={() => handleToggle(0)} // Passe l'index 0 pour le premier toggle
          />
          <Toggle 
            question="Équipements" 
            answer={
              logement.equipments.length > 0 ? (
                <div className="equipments-content">
                  {logement.equipments.map((equipment, index) => (
                    <Equipements key={index} tagName={equipment} />
                  ))}
                </div>
              ) : (
                <div>Aucun équipement disponible</div> 
              )
            } 
            isOpen={openToggle === 1} // Vérifie si le deuxième toggle est ouvert
            onToggle={() => handleToggle(1)} // Passe l'index 1 pour le deuxième toggle
          />
        </div>
      </div>
      <Foot></Foot>
    </div>
  );
};

export default FicheLogement;
