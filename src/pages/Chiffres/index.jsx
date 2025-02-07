import React from "react";
import { motion } from "framer-motion";
import { Users, Clock, GraduationCap, UsersIcon, Heart } from "lucide-react";
import { DocumentIcon } from "@heroicons/react/24/solid";
const stats = [
  {
    title: "Depuis Février 2024",
    value: "+1000 Heures",
    description: "De formation délivrées avec passion et engagement",
    icon: <Clock className="w-12 h-12 text-[#3f6f63]" />,
  },
  {
    title: "Groupes Formés",
    value: "+40",
    description: "Accompagnés dans leur développement professionnel",
    icon: <Users className="w-12 h-12 text-[#3f6f63]" />,
  },
  {
    title: "Étudiants Formés",
    value: "+1000",
    description: "Guidés vers leurs objectifs avec engagement",
    icon: <GraduationCap className="w-12 h-12 text-[#3f6f63]" />,
  },
  {
    title: "CV Corrigés",
    value: "+700",
    description: "Plus de 700 CV Corrigés et optimisés",
    icon: <DocumentIcon className="w-12 h-12 text-[#3f6f63]" />,
  },
  {
    title: "Recommandation",
    value: "98%",
    description: "98% des étudiants recommandent cette simualtion",
    icon: <Heart className="w-12 h-12 text-[#3f6f63]" />,
  },
  {
    title: "Simulations",
    value: "+500",
    description: "+500 simualtions réalisées",
    icon: <UsersIcon className="w-12 h-12 text-[#3f6f63]" />,
  },
];

const Chiffres = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16  text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="lg:text-4xl text-3xln  font-extrabold text-[#2af4ed] mb-12 text-center">
        Mon Parcours en Chiffres 🧩
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="p-8 bg-transparent backdrop-blur-md 
            cursor-pointer rounded-xl shadow-lg flex flex-col items-center text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4}}
            whileHover={{scale: 1.02}}
            viewport={{ once: true }}
          >
            <div className="mb-4">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-[#a5c233]">{stat.value}</h3>
            <p className="text-lg font-semibold mt-2">{stat.title}</p>
            <p className="text-gray-300 mt-2">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Chiffres;
