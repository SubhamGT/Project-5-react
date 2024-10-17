import React, { useState } from "react"; // Importation de React et du hook useState pour gérer l'état du composant
import "../assets/styles/components/_Carousel.scss"; // Importation des styles spécifiques du carousel

const Carousel = ({ images }) => {
  // Déclaration du composant Carousel, qui reçoit un tableau d'images en tant que prop

  // currentIndex stocke l'index de l'image actuellement affichée, initialisé à 0 (la première image)
  const [currentIndex, setCurrentIndex] = useState(0);

  // isTransitioning permet de savoir si une transition entre les images est en cours pour éviter les changements multiples simultanés
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Fonction pour passer à la slide suivante
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 200);
  };

  // Fonction pour passer à la slide précédente
  const prevSlide = () => {
    if (isTransitioning) return; // Si une transition est en cours, on bloque la fonction
    setIsTransitioning(true); // On indique qu'une transition est en cours

    // Utilisation de setTimeout pour gérer la transition après 200ms
    setTimeout(() => {
      // Mise à jour de l'index de l'image pour revenir à l'image précédente
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      ); // Si on est à la première image, on revient à la dernière (effet de boucle)
      setIsTransitioning(false); // Une fois la transition finie, on débloque
    }, 200); // Durée de la transition en millisecondes
  };

  return (
    <div className="carousel">
      {/* Conteneur pour les images avec transformation pour faire défiler */}
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Déplacement en fonction de l'image active
          transition: "transform 0.5s ease-in-out", // Transition fluide de 0.5 seconde entre les images
        }}
      >
        {/* On parcourt le tableau d'images pour afficher chaque image */}
        {images.map((image, index) => (
          <img
            key={index} // Ajout d'une clé unique pour chaque élément de la liste
            src={image} // Chemin de l'image
            alt={`Slide ${index + 1}`} // Texte alternatif pour l'image
            className="carousel-image" // Classe CSS pour styliser l'image
          />
        ))}
      </div>

      {/* On affiche les flèches de navigation uniquement s'il y a plus d'une image */}
      {images.length > 1 && (
        <>
          <button className="carousel-button" onClick={prevSlide}>
            &#10094; {/* Flèche gauche */}
          </button>
          <button className="carousel-button" onClick={nextSlide}>
            &#10095; {/* Flèche droite */}
          </button>
        </>
      )}

      {/* Indicateur pour montrer la position actuelle dans le carrousel */}
      <div className="carousel-indicator">
        {currentIndex + 1}/{images.length}{" "}
        {/* Affiche le numéro de l'image actuelle sur le total */}
      </div>
    </div>
  );
};

export default Carousel; // Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers
