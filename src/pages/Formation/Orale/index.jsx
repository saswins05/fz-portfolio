import React from 'react';
import Video from './partials/Video';
import Affiche from './partials/Affiche';
import Support from './partials/Support';
import Certificat from './partials/Certificat';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const SectionNumber = ({ number }) => (
  <motion.div
    className="text-center my-12"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-6xl font-bold text-[#2af4ed]">{number}</h2>
    <motion.div
      className="flex justify-center mt-4"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <ChevronDown className="w-8 h-8 text-[#a5c233] animate-bounce" />
    </motion.div>
  </motion.div>
);

function Orale() {
  return (
    <>
      <SectionNumber number={1} />
      <Video />
      <SectionNumber number={2} />
      <Affiche />
      <SectionNumber number={3} />
      <Support />
      <SectionNumber number={4} />
      <Certificat />
    </>
  );
}

export default Orale;
