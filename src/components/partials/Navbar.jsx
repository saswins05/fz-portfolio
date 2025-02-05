import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Gérer l'ouverture/fermeture du menu mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky font-poppins top-0 z-50 bg-transparent backdrop-blur-md py-4 shadow-md">
      <div className="flex justify-between items-center px-5 md:px-10">
        {/* Logo et Titre */}
        <Link
          to="/"
          className="text-[#2af4ed] font-bold text-xl transition-colors duration-300 hover:text-[#a5c233]"
        >
          FZ TAHNATE 🧩
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white hover:text-[#2af4ed] transition-colors duration-300"
          >
            Accueil
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-[#2af4ed] transition-colors duration-300"
          >
            À propos
          </Link>
          <Link
            to="/stats"
            className="text-white hover:text-[#2af4ed] transition-colors duration-300"
          >
            Chiffres
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-[#2af4ed] transition-colors duration-300"
          >
            Contact-moi
          </Link>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
}

export default Navbar;
