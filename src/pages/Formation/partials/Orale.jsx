import React from 'react'
import OraleContenue from '../Orale/OraleContenue'

function Orale() {
  return (
    <>
      {/* Title */}
      <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2af4ed] text-center mb-6">
      Maîtrisez votre Présentation Orale 🧩
      </h2>

      {/* Description */}
      <p className="lg:text-lg text-md text-gray-300 text-center mb-8">
      Initiative pédagogique proposée en début d'année sur Teams. Ce webinaire aide les étudiants à développer leur confiance et leurs compétences en communication orale. Organisé chaque Septembre sur Teams pour  préparer les étudiants aux exigences académiques et professionnelles.
      </p>
      <OraleContenue />
    </>
  )
}

export default Orale