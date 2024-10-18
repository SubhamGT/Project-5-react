import React from "react";

const Equipements = ({ tagName }) => {
  return (
    <div className="equipment-item">
      {/* Affichage du contenu de la prop 'tagName' à l'intérieur du div */}
      {tagName}
    </div>
  );
};

export default Equipements;
