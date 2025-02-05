import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PuzzleLoader = () => {
  const [assembled, setAssembled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAssembled(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#173c4c] relative">
      <motion.div
        className="relative w-48 h-48 md:w-64 md:h-64 grid grid-cols-2 grid-rows-2 gap-2"
        initial={{ scale: 0.5, rotate: 180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className="w-24 h-24 md:w-32 md:h-32 rounded-md shadow-lg"
            style={{ backgroundColor: assembled ? "#2af4ed" : ["#2af4ed", "#a5c233", "#3f6f63", "#1e573a"][index] }}
            initial={{ x: index % 2 === 0 ? -50 : 50, y: index < 2 ? -50 : 50, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default PuzzleLoader;
