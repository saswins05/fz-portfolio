import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#173c4c] font-poppins text-white py-10 px-6 lg:px-20 flex flex-col items-center text-center lg:text-left"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-between gap-10">
        {/* Section Description */}
        <div className="lg:w-1/3">
          <h2 className="text-3xl font-extrabold text-[#2af4ed] mb-4">FZ TAHNATE</h2>
          <p className="text-lg text-gray-300">
            Formatrice passionnée, créant des expériences d’apprentissage uniques
            et engageantes en connectant théorie et pratique.
          </p>
        </div>

        {/* Liens Utiles */}
        <div className="lg:w-1/3">
          <h3 className="text-2xl font-bold text-[#a5c233] mb-4">Liens Utiles</h3>
          <ul className="space-y-2 text-lg">
            <li><a href="#" className="hover:text-[#2af4ed] transition">Accueil</a></li>
            <li><a href="#" className="hover:text-[#2af4ed] transition">À propos</a></li>
            <li><a href="#" className="hover:text-[#2af4ed] transition">Services</a></li>
            <li><a href="#" className="hover:text-[#2af4ed] transition">Contact</a></li>
          </ul>
        </div>

        {/* Réseaux Sociaux */}
        <div className="lg:w-1/3">
          <h3 className="text-2xl font-bold text-[#3f6f63] mb-4">Réseaux Sociaux</h3>
          <div className="flex gap-6 justify-center lg:justify-start">
            <a href="#" className="text-[#2af4ed] hover:text-white transition">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="#" className="text-[#a5c233] hover:text-white transition">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="text-[#3f6f63] hover:text-white transition">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-[#1e573a] hover:text-white transition">
              <Twitter className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="mt-8 text-gray-400 text-sm">
        © 2025 FZ TAHNATE - Tous droits réservés.
      </div>
    </motion.footer>
  );
};

export default Footer;
