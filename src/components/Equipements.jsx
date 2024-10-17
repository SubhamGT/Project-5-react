import React from "react"; // Importation de React

// Composant fonctionnel Equipements qui prend une prop 'tagName'
const Equipements = ({ tagName }) => {
  return (
    <div className="equipment-item">
      {/* Affichage du contenu de la prop 'tagName' à l'intérieur du div */}
      {tagName}
    </div>
  );
};

// Exportation du composant pour qu'il soit utilisé dans d'autres parties de l'application
export default Equipements;
