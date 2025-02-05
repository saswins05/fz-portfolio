import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Gamepad2, PenTool, Activity, Users } from "lucide-react";

const MeDistingue = () => {
  const distinctions = [
    {
      title: "Apprentissage Ludique",
      description: "Participant à des jeux pédagogiques pour une immersion totale.",
      color: "bg-[#3f6f63]",
      icon: <Gamepad2 className="w-12 h-12 text-white" />,
    },
    {
      title: "Outils Créatifs",
      description: "Utilisant des outils interactifs pour favoriser l'engagement.",
      color: "bg-[#173c4c]",
      icon: <PenTool className="w-12 h-12 text-white" />,
    },
    {
      title: "Mise en Pratique",
      description: "Appliquer immédiatement les concepts appris.",
      color: "bg-[#2af4ed]",
      icon: <Activity className="w-12 h-12 text-white" />,
    },
    {
      title: "Échange et Partage",
      description: "Apprentissage collaboratif à travers des interactions enrichissantes.",
      color: "bg-[#3f6f63]",
      icon: <Users className="w-12 h-12 text-white" />,
    },
  ];

  return (
    <motion.div
      className="min-h-screen font-poppins flex flex-wrap justify-center items-center gap-8 px-8 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="lg:text-5xl text-[#a5c233]  text-3xl font-extrabold text-center w-full mb-12">
        Ce qui me distingue
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {distinctions.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col items-center p-8 rounded-2xl shadow-xl ${item.color} text-white`}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="lg:text-2xl text-[#a5c233]  text-xl text-center  font-bold mb-2">{item.title}</h3>
            <p className="text-lg text-center">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MeDistingue;
