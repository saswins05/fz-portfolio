import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const supports = [
  {
    id: 1,
    title: "Partie 01/15",
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_6-exprimez-vous-avec-impact-fztanhate-activity-7252966691037499393-Gh_R?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE605xgBwEedca6xAR_u5cUlvppsDo7gks0",
  },
  {
    id: 2,
    title: "Partie 02/15",
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_7-cr%C3%A9ez-des-visuels-accrocheursfztanhate-activity-7255503464112308224-uUC6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE605xgBwEedca6xAR_u5cUlvppsDo7gks0",
  },
  {
    id: 3,
    title: "Partie 03/15",
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_15-activity-7275797185873547264-RTbH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE605xgBwEedca6xAR_u5cUlvppsDo7gks0",
  },
  {
    id: 4,
    title: "Partie 04/15",
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_4",
  },
  {
    id: 5,
    title: "Partie 05/15",
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_15-activity-7275797185873547264-RTbH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE605xgBwEedca6xAR_u5cUlvppsDo7gks0",
  },
  {
    id: 6,
    title: "Partie 06/15",
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_6",
  },
  {
    id: 7,
    title: "Partie 07/15",
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_7",
  },
  {
    id: 8,
    title: "Partie 08/15",
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_8-engagez-votre-audiencefztanhate-activity-7258040138600005632-_qFh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE605xgBwEedca6xAR_u5cUlvppsDo7gks0",
  },
  {
    id: 9,
    title: "Partie 09/15",
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_9-ma%C3%AEtrisez-votre-chronom%C3%A8tre-activity-7260576820276641792-JruF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE605xgBwEedca6xAR_u5cUlvppsDo7gks0",
  },
  {
    id: 10,
    title: "Partie 10/15",
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_10-restez-zenfztanhate-activity-7263113644312350721-504y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE605xgBwEedca6xAR_u5cUlvppsDo7gks0",
  },
  {
    id: 11,
    title: "Partie 11/15",
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_11-faites-bonne-impressionfztanhate-activity-7265650315000008704-grwv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE605xgBwEedca6xAR_u5cUlvppsDo7gks0",
  },
  {
    id: 12,
    title: "Partie 12/15",
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_12-r%C3%A9ussisez-votre-pr%C3%A9sentationfztanhate-activity-7268187013286092800-0HtN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE605xgBwEedca6xAR_u5cUlvppsDo7gks0",
  },
  {
    id: 13,
    title: "Partie 13/15",
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_13-am%C3%A9liorez-vous-activity-7270723775782916097-j5vU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE605xgBwEedca6xAR_u5cUlvppsDo7gks0",
  },
  {
    id: 14,
    title: "Partie 14/15",
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_14%C3%A9vitez-les-pi%C3%A8ges-courants-activity-7273260398890336257-_Pzs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE605xgBwEedca6xAR_u5cUlvppsDo7gks0",
  },
  {
    id: 15,
    title: "Partie 15/15",
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_15-activity-7275797185873547264-RTbH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE605xgBwEedca6xAR_u5cUlvppsDo7gks0",
  },
];

const sliderSettings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
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
  arrows: false,
  dots: false,
};

const Support = () => {
  return (
    <section className="bg-[#173c4c] font-poppins text-white py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#2af4ed] mb-12 text-center">
          Supports Pédagogiques
        </h2>
        <Slider {...sliderSettings} className="overflow-hidden">
          {supports.map((support) => (
            <motion.div
              key={support.id}
              className="p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#3f6f63] rounded-lg shadow-lg p-6 flex flex-col justify-between h-full">
                <img
                  src={`${import.meta.env.BASE_URL}assets/orale/image.png`}
                  alt={support.title}
                  className="rounded-lg mb-4 object-cover w-full h-40"
                />
                <h3 className="text-xl font-bold text-[#2af4ed] mb-2">
                  {support.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Découvrez cette partie de nos supports pédagogiques.
                </p>
                <a
                  href={support.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto px-6 py-3 bg-[#a5c233] hover:bg-[#1e573a] text-black font-semibold rounded-lg shadow-md transition-all duration-300 text-center"
                >
                  Voir Plus
                </a>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Support;
