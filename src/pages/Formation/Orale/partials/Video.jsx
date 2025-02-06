import React from "react";
import { motion } from "framer-motion";
import { Button } from "@headlessui/react";
import { PlayCircle } from "lucide-react";

const Video = () => {
  return (
    <motion.section
      className="py-16 px-6 bg-[#173c4c] font-poppins text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src="/assets/orale/1.png"
            alt="Vidéo Pré-lancement"
            className="rounded-lg shadow-lg w-full object-cover"
          />
          <PlayCircle
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#a5c233] w-16 h-16"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-extrabold text-[#2af4ed] mb-4">
            🎥 Tu te reconnais dans cette vidéo ?
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            On a tous déjà vécu ce moment où le cerveau se met en pause et les jambes en mode jelly 🍮 devant la classe. Mais pas de panique ! Notre webinaire va te transformer en pro de l'oratoire ! 💪🎤
          </p>

          {/* Button */}
          <a
            href="https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_complaeyteabrtonabrpuzzle-exposaezoral-peurdescenes-activity-7232808819020496896-fVqy/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1jCNgBe5Fdt5hrcoGb2jldA_ObM709j2Y"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-[#a5c233] hover:bg-[#1e573a] text-black font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            Consulter Webinaire
          </a>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["#complète_ton_puzzle", "#exposéoral", "#peurdescenes", "#humour", "#etudiant"].map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-[#1e573a] text-[#2af4ed] text-xs font-medium rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Video;
