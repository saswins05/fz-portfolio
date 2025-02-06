import React from "react";
import { motion } from "framer-motion";
import { Button } from "@headlessui/react";
import { Calendar, Clock, Monitor } from "lucide-react";

const Affiche = () => {
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
        <div className="w-full lg:w-1/2">
          <img
            src={`${import.meta.env.BASE_URL}assets/orale/2.png`}
            alt="Affiche Webinaire"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-extrabold text-[#2af4ed] mb-4">
            🎙️ Rappel Webinaire ce soir ! 🎙️
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            N'oubliez pas de nous rejoindre ce soir à <strong>20h00</strong> pour notre webinaire gratuit sur Teams ! Vous découvrirez des astuces clés pour réussir vos exposés oraux et éviter les erreurs courantes.
          </p>
          <ul className="text-gray-300 text-sm mb-6 space-y-2">
            <li className="flex items-center gap-2">
              <Calendar className="text-[#a5c233] w-5 h-5" />
              <span>📅 Aujourd'hui, 06 Septembre 2024</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="text-[#a5c233] w-5 h-5" />
              <span>🕗 20h00 (heure locale)</span>
            </li>
            <li className="flex items-center gap-2">
              <Monitor className="text-[#a5c233] w-5 h-5" />
              <span>💻 En LIVE sur Teams</span>
            </li>
          </ul>
          <a
            href="https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_rappel-webinaire-ce-soir-ma%C3%AEtrisez-activity-7237746413340676096-KCCc/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAB1jCNgBe5Fdt5hrcoGb2jldA_ObM709j2Y"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-[#a5c233] hover:bg-[#1e573a] text-black font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            Inscrivez-vous ici
          </a>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["#webinaire", "#présentation", "#confiance", "#Teams"].map((tag, index) => (
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

export default Affiche;
