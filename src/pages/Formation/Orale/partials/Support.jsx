import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const supports = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: `Partie ${i + 1}/15`,
  description: `Découvrez la partie ${i + 1} de notre série de supports pédagogiques conçus pour améliorer votre prise de parole en public et renforcer votre confiance.`,
  image: "/assets/orale/1.png",
  link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119",
}));

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
    <section className=" bg-[#173c4c] font-poppins text-white">
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
                  src={support.image}
                  alt={support.title}
                  className="rounded-lg mb-4 object-cover w-full h-40"
                />
                <h3 className="text-xl font-bold text-[#2af4ed] mb-2">
                  {support.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {support.description}
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
