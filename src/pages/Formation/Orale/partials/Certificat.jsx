import React from "react";
import { motion } from "framer-motion";

const Certificat = () => {
  return (
    <motion.section
      className="py-16 px-6 bg-[#173c4c] font-poppins text-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-extrabold text-[#2af4ed] mb-8">
        🎓 Finalisée par Certificat
      </h2>
      <div className="w-full flex justify-center">
        <img
          src={`${import.meta.env.BASE_URL}assets/orale/certificat.png`}
          alt="Certificat de Participation"
          className="rounded-lg shadow-lg w-full max-w-md object-cover"
        />
      </div>
    </motion.section>
  );
};

export default Certificat;
