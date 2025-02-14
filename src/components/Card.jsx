import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Card = ({ title, description = '', image, tags = [], link }) => {
  return (
    <motion.div
      className="bg-[#3f6f63] rounded-lg shadow-lg p-6 flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <h3 className="text-xl font-bold text-[#2af4ed] mb-3">{title}</h3>
      <p className="text-white text-sm mb-4 leading-relaxed">{description}</p>
      {tags.length > 0 && (
        <div className="mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-[#1e573a] text-[#2af4ed] text-xs font-medium rounded-full px-3 py-1 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#a5c233] hover:bg-[#1e573a] text-black font-semibold rounded-lg shadow-md transition-all duration-300"
        >
          Découvrir sur LinkedIn <ArrowRight className="w-4 h-4" />
        </a>
      )}
    </motion.div>
  );
};

export default Card;
