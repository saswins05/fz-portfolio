import React from "react";
import VideoPlayer from "../../../components/VideoPlayer";

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

    {/* Subtitle */}
    <h3 className="lg:text-2xl text-xl font-bold text-[#2af4ed] text-center mb-4">
      Vidéo récapitulatif
    </h3>

    {/* Video Player */}
    <div className="flex justify-center">
      <div className="rounded-xl shadow-lg max-w-4xl w-full">
        <VideoPlayer
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
          autoPlay={true}
          controls={true}
          loop={true}
          muted={false}
          width="100%"
        />
      </div>
    </div>
  </div>
);

export default GestionDocumentaire;
