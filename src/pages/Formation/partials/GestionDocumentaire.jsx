import React from "react";
import VideoPlayer from "../../../components/VideoPlayer";
import Card from "../../../components/Card";
const GestionDocumentaire = () => (
  <div className="py-16 bg-transparent backdrop-blur-md  rounded-md shadow-md text-white font-poppins">
    {/* Title */}
    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2af4ed] text-center mb-6">
      Formation Gestion Documentaire 🧩
    </h2>

    {/* Description */}
    <p className="lg:text-lg text-md text-gray-300 text-center mb-8">
      Conception et animation d'une formation sur les fondamentaux de la gestion documentaire, accompagnée des ateliers pratiques adaptés aux besoins des entreprises.
    </p>
    <br />
    <br />
      {/* Video Player */}
      <Card 
        title={'Vidéo récapitulatif'}
        image={`${import.meta.env.BASE_URL}assets/image.png`}
        description="TRANSFORMER LA GESTION DOCUMENTAIRE EN UN LEVIER DE PERFORMANCE ? C’EST POSSIBLE ! 📂✨

✅ Une formation interactive & immersive
✅ Un guide exclusif conçu pour l’entreprise
✅ Une équipe prête à révolutionner sa gestion documentaire

💡 Résultat ? Des documents organisés, un gain de temps maximal, et une productivité boostée ! 🎯
🔎 Et vous, êtes-vous prêt(e) à optimiser votre gestion documentaire ? 👇
📢 Mentionnez une personne qui aurait besoin d’un coup de boost ! 😉"
        link="https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_complaeyteabrtonabrpuzzle-gestiondocumentaire-activity-7295466546678620162-3LmL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE605xgBwEedca6xAR_u5cUlvppsDo7gks0"
      />
  </div>
);

export default GestionDocumentaire;
