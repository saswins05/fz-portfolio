import React from "react";
import VideoPlayer from "../../../components/VideoPlayer";
import Card from "../../../components/Card";

const Methode5S = () => (
  <div className="py-16 px-6 bg-transparent backdrop-blur-md  rounded-md shadow-md text-white font-poppins">
    {/* Title */}
    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2af4ed] text-center mb-6">
      Méthode des 5S 🧩
    </h2>

    {/* Description */}
    <p className="lg:text-lg text-md text-gray-300 text-center mb-8">
      Formation interactive pour apprendre l'organisation efficace avec la méthode 5S. Animée avec des jeux pédagogiques pour une meilleure assimilation.
    </p>
  <br />
  <br />
    {/* Video Player */}
    <Card 
      title={'🔙 Retour en images'}
      description="

C'était plus qu'un simple atelier sur la méthode 5S 

C'était un moment de partage, d'apprentissage, et de collaboration. Ensemble, nous avons découvert comment un peu d'organisation peut faire des merveilles pour notre efficacité au quotidien.

Un grand merci à tous les participants pour avoir rendu cette session aussi productive qu'agréable. 🙌

à ISGI-Casablanca .
"
  link='https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_complaeyteabrtonabrpuzzle-isgi-atelier-activity-7231223459232518144-3vPg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE605xgBwEedca6xAR_u5cUlvppsDo7gks0'
    />
  </div>
);

export default Methode5S;
