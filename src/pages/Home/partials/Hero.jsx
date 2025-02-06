import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="relative min-h-screen flex flex-col lg:flex-row items-center
       justify-between px-6 lg:px-16 py-16 bg-[#173c4c] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Texte */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <motion.h1
          className="text-4xl lg:text-6xl font-extrabold text-[#2af4ed] leading-tight mb-6"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Assemblez <span className="text-[#a5c233]">votre savoir</span> <br />
          Pièce par pièce
        </motion.h1>
        <motion.p
          className="text-md lg:text-xl text-gray-300 italic mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          "L'éducation n'est pas la préparation à la vie, l'éducation est la vie même" - John Dewey
        </motion.p>
        <motion.div
          className="text-sm lg:text-xl text-[#2af4ed] mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Explorez mon portfolio… et attention à ne pas tomber amoureux de mes formations !
        </motion.div>
      </div>

      {/* Image et Puzzle Animation */}
      <div className="relative w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <motion.div
          className="relative w-80 h-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[0, 1, 2, 3].map((piece, index) => (
            <motion.div
              key={index}
              className="absolute w-40 h-40 bg-[#3f6f63] rounded-md shadow-lg"
              style={{ top: `${Math.floor(index / 2) * 50}%`, left: `${(index % 2) * 50}%` }}
              initial={{ x: index % 2 === 0 ? -100 : 100, y: index < 2 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: index * 0.4, duration: 0.8, ease: "easeInOut" }}
            />
          ))}
          <motion.img
            src={"/assets/images/hero.png"}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
