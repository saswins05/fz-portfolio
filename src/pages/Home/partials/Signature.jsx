import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, PenTool, Smile } from "lucide-react";

const Signature = () => {
  const items = [
    {
      title: "Formations Dynamiques",
      description: "Des formations vivantes et pratiques pour un apprentissage immersif.",
      color: "bg-[#3f6f63]",
      icon: <BookOpen className="w-12 h-12 text-white" />,
    },
    {
      title: "Méthodes Participatives",
      description: "Des méthodes qui vous impliquent activement dans le processus d’apprentissage.",
      color: "bg-[#173c4c]",
      icon: <Users className="w-12 h-12 text-white" />,
    },
    {
      title: "Outils Concrets",
      description: "Des outils pratiques immédiatement utilisables dans vos projets.",
      color: "bg-[#2af4ed]",
      icon: <PenTool className="w-12 h-12 text-white" />,
    },
    {
      title: "Ambiance Inspirante",
      description: "Un cadre motivant qui favorise la progression et la créativité.",
      color: "bg-[#3f6f63]",
      icon: <Smile className="w-12 h-12 text-white" />,
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
      <h2 className="lg:text-5xl text-3xl font-extrabold text-[#a5c233]  text-center w-full mb-12">
        Ma Signature Pédagogique
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col
               items-center p-8 rounded-2xl 
               shadow-xl ${item.color} text-white`}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="lg:text-2xl text-[#a5c233]  text-xl text-center font-bold mb-2">{item.title}</h3>
            <p className="lg:text-lg text-md text-center">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Signature;