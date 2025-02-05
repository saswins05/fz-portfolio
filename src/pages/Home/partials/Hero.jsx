// src/components/Hero.jsx
import React, { useState } from 'react';
import { Switch } from '@headlessui/react';  // Import du Switch pour changer de mode
import { motion } from 'framer-motion';  // Import de Framer Motion pour les animations
import { useTheme } from '../../../contexts/ThemeContext';  // Utilisation du ThemeContext pour le mode sombre

const Hero = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();  // Récupération du mode actuel
  const [enabled, setEnabled] = useState(isDarkMode);

  const handleChange = () => {
    setEnabled(!enabled);
    setIsDarkMode(!enabled);  // Met à jour le thème
  };

  return (
    <section className={`relative overflow-hidden ${enabled ? 'bg-gray-900 text-white' : 'bg-blue-500 text-black'} py-16`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-600 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <div className="container mx-auto text-center px-4 relative">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover my work and projects as I showcase my creativity and skills.
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Switch
            checked={enabled}
            onChange={handleChange}
            className={`${
              enabled ? 'bg-teal-600' : 'bg-gray-300'
            } relative inline-flex h-8 w-16 items-center rounded-full`}
          >
            <span className="sr-only">Enable dark mode</span>
            <span
              className={`${
                enabled ? 'translate-x-8' : 'translate-x-1'
              } inline-block h-6 w-6 transform rounded-full bg-white transition`}
            />
          </Switch>
        </motion.div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a
            href="#projects"
            className="text-lg text-teal-600 hover:underline transition duration-300"
          >
            Explore my work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
