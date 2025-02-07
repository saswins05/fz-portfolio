import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const badges = [
  {
    image: `${import.meta.env.BASE_URL}assets/badges/1.png`,
    description: "Un groupe calme et réfléchi, où règnent la sérénité et la sagesse."
  },
  {
    image: `${import.meta.env.BASE_URL}assets/badges/2.png`,
    description: "Énergie et dynamisme au rendez-vous ! Une classe expressive et motivée."
  },
  {
    image: `${import.meta.env.BASE_URL}assets/badges/3.png`,
    description: "Discrets mais déterminés, ces étudiants se démarquent par leur sérieux et leur persévérance."
  },
  {
    image: `${import.meta.env.BASE_URL}assets/badges/4.png`,
    description: "Un mélange parfait entre rigueur et bonne humeur, entre petites bêtises et travail acharné."
  },
  {
    image: `${import.meta.env.BASE_URL}assets/badges/5.png`,
    description: "Une vraie famille : solidaire, chaleureuse et toujours prête à s’entraider."
  }
];

const Stickers = () => {
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
    <motion.div
      className="lg:min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20 bg-[#173c4c] rounded-lg shadow-lg font-poppins"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2af4ed] mb-6 text-center">
        Stickers 🧩
      </h2>
      <p className="text-sm lg:text-md text-white mb-12 text-center max-w-2xl">
      Méthode pédagogique innovante utilisant des stickers pour valoriser les progrès des étudiants. Un outil qui matérialise leurs accomplissements et crée des souvenirs positifs de leur parcours.
      </p>

      {/* Slider */}
      <div className="w-full max-w-6xl">
        <Slider {...sliderSettings}>
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              <motion.img
                src={badge.image}
                alt={`Badge ${index + 1}`}
                className="w-50 rounded-md shadow-md h-50 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain mx-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <p className="text-sm lg:text-md ml-10 text-gray-200 mt-4 max-w-xs leading-normal">
                {badge.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Stickers;
