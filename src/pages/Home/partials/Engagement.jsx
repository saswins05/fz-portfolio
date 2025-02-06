import React from "react";
import { motion } from "framer-motion";
import { Button } from "@headlessui/react";
import { Lightbulb } from "lucide-react";

const Engagement = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col
       lg:flex-row-reverse items-center gap-16 px-8 
       py-20 bg-[#3f6f63] rounded-lg shadow-lg font-poppins"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <motion.img
          src={`${import.meta.env.BASE_URL}assets/images/hero.jpeg`}
          alt="Engagement"
          className="w-96 h-96 rounded-lg object-cover shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>
      
      {/* Texte */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-5xl font-extrabold text-[#2af4ed] mb-6">Mon Engagement</h2>
        <p className="text-xl text-white leading-relaxed mb-8 flex items-center space-x-4">
          <Lightbulb className="text-[#a5c233] w-10 h-10" />
          <span>Rendre chaque formation utile et agréable.</span>
        </p>
        <motion.div
          transition={{ duration: 0.3 }}
        >
          <Button
            className="px-8 py-4 cursor-pointer
             bg-[#2af4ed] hover:bg-[#1e573a] text-black 
             font-semibold text-lg rounded-lg shadow-lg transition-all 
             duration-300"
          >
            Découvrir plus
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Engagement;
