import React, { useState, useRef, useEffect } from "react";
import "../assets/styles/components/Toggle.scss"; // Assure-toi que le fichier SCSS est bien importé
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"; // Import de l'icône chevron

const Toggle = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px"); // Gère dynamiquement la hauteur
  const contentRef = useRef(null); // Référence vers l'élément contenu

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Définit la hauteur dynamique lorsque le toggle est ouvert
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="item">
      {/* Titre de la section avec gestion de l'état "active" */}
      <div
        className={`title ${isOpen ? "active" : ""}`}
        onClick={handleToggle}
        aria-expanded={isOpen} // Accessibilité
        role="button" // Indique que c'est un bouton pour l'accessibilité
      >
        {question}
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`chevron-icon ${isOpen ? "rotate" : ""}`} // Classe pour gérer la rotation
        />
      </div>

      {/* Contenu avec animation de hauteur dynamique */}
      <div
        ref={contentRef} // Référence de l'élément contenu
        className={`content ${isOpen ? "active" : ""}`}
        style={{ maxHeight: height, transition: "max-height 0.3s ease" }} // Animation fluide
      >
        <div>{answer}</div> {}
      </div>
    </div>
  );
};

export default Toggle;
