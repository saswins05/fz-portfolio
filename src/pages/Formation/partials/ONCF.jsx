import React from 'react'
import Card from '../../../components/Card';
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const badges = [
  {
    image: `${import.meta.env.BASE_URL}assets/oncf/badges/1.png`,
    description: "Un groupe calme et réfléchi, où règnent la sérénité et la sagesse."
  },
  {
    image: `${import.meta.env.BASE_URL}assets/oncf/badges/2.png`,
    description: "Énergie et dynamisme au rendez-vous ! Une classe expressive et motivée."
  },
  {
    image: `${import.meta.env.BASE_URL}assets/oncf/badges/3.png`,
    description: "Discrets mais déterminés, ces étudiants se démarquent par leur sérieux et leur persévérance."
  },
  {
    image: `${import.meta.env.BASE_URL}assets/oncf/badges/4.png`,
    description: "Un mélange parfait entre rigueur et bonne humeur, entre petites bêtises et travail acharné."
  }
];


function ONCF() {

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 px-6 bg-transparent backdrop-blur-md  rounded-md shadow-md text-white font-poppins">
      {/* Title */}
      <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3f6f63] text-center mb-6">
        FORMATION ONCF 🧩
      </h2>

      {/* Description */}
      <p className="lg:text-lg text-md text-[#3f6f63] text-center mb-8">
      Cette formation a été spécialement conçue pour les agents de gare de l’ONCF afin de renforcer leurs compétences en communication et en gestion du stress. À travers des ateliers ludiques et des jeux pédagogiques, les participants ont appris à mieux interagir avec les voyageurs, gérer les situations sous pression et améliorer leur qualité de service. L’approche dynamique et immersive a permis d’ancrer les apprentissages tout en favorisant un esprit d’équipe et une meilleure confiance en soi.
      </p>

      <br />
      <p className="lg:text-xl text-lg font-extrabold text-[#3f6f63] text-center mb-8">
      Vidéo récap 5min
      </p>
      <Card 
        title={'Vidéo récap 5min'}
        description={`Parcours Soft Skills : 3 jours d’échanges et de pratiques

Je suis ravie d'avoir animé un parcours de formation sur les Soft Skills pour les futurs agents de l’ONCF.

En seulement 3 jours, nos participants ont relevé des défis et ont développé des compétences essentielles pour évoluer dans un environnement en constante transformation.

🎥 Découvrez dans cette vidéo un aperçu de notre parcours de formation.

Un grand merci à Hanane TANHATE⚕️ pour sa vision inspirante et à Abdenasser Moussafi 👨🏻‍💻 pour le design exceptionnel. 👏

Merci à M. Ismail ZERRAI pour sa confiance, je suis fière de faire partie de cet établissement et d’avoir pu contribuer à cette belle initiative.
 `}
                tags={["#complète_ton_puzzle", "#ApprentissageÀDistance", '#ONCF', '#Formation']}
        link={"https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_complaeyteabrtonabrpuzzle-oncf-leadership-activity-7247207797904285698-JTuS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1jCNgBe5Fdt5hrcoGb2jldA_ObM709j2Y"}
        
      />
      <br />
      <br />
      <br />

      <p className="lg:text-xl text-lg font-extrabold text-[#3f6f63] text-center mb-8">
        Stickers spéciaux ONCF
      </p>

      <div className="w-full max-w-8xl">
        <Slider {...sliderSettings}>
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              <motion.img
                src={badge.image}
                alt={`Badge ${index + 1}`}
                className="w-50 h-50 sm:w-56 sm:h-56 
                md:w-64 md:h-64 object-contain mx-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <p className="text-sm lg:text-md ml-20 text-gray-200 mt-4 max-w-xs leading-normal">
                {badge.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  )
}

export default ONCF