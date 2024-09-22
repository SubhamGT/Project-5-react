import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../logements.json'; // Import de ton fichier JSON

const FicheLogement = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const logement = data.find((logement) => logement.id === id); // Recherche le logement correspondant

  if (!logement) {
    return <div>Logement non trouvé</div>; // Si l'ID ne correspond à aucun logement
  }

  return (
    <div>
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>Description: {logement.description}</p>
      {/* Autres informations du logement */}
    </div>
  );
};

export default FicheLogement;
