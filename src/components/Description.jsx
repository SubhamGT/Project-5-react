import React from "react"; // Importation de React

// Composant fonctionnel Description qui reçoit une prop 'content'
const Description = ({ content }) => {
  return (
    <div className="description-container">
      {/* Checkbox pour gérer l'affichage/masquage du contenu de la description */}
      <input
        type="checkbox"
        id="toggle-description"
        className="toggle-description"
      />

      {/* Label associé à la checkbox, utilisé pour afficher le texte "Description" */}
      <label htmlFor="toggle-description" className="toggle-label">
        Description {/* Texte du label */}
      </label>

      {/* Contenu de la description, masqué ou affiché selon l'état de la checkbox */}
      <div className="description-content">
        <p>{content}</p> {/* Affichage du contenu de la prop 'content' */}
      </div>
    </div>
  );
};

// Exportation du composant pour une utilisation dans d'autres parties de l'application
export default Description;
