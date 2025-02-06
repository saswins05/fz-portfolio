import React from "react";
import { motion } from "framer-motion";
import { Button } from "@headlessui/react";

const About = () => {
  return (
    <motion.div
      className="lg:min-h-screen flex flex-col lg:flex-row items-center gap-16 px-8 py-20 bg-[#3f6f63] rounded-lg shadow-lg font-poppins"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <motion.img
          src={"/assets/images/image.png"}
          alt="Hero"
          className="hidden lg:block w-150 h-150 object-cover rounded-b-3xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>
      
      {/* Texte */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="lg:text-5xl text-4xl font-extrabold text-[#2af4ed] mb-6">Mon Expertise</h2>
        <p className="text-xl text-white leading-relaxed mb-8">
          Je crée des ponts entre <span className="text-[#a5c233] font-bold">théorie et pratique</span>,
          entre savoir et savoir-faire, en utilisant des méthodes qui captent
          l'attention et stimulent la progression.
        </p>
        <motion.div
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            className="px-8 py-4 cursor-pointer bg-[#2af4ed] hover:bg-[#1e573a] text-black font-semibold text-lg rounded-lg shadow-lg transition-all duration-300"
          >
            En savoir plus
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
