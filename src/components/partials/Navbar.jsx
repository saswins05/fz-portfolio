import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Gérer l'ouverture/fermeture du menu mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky font-poppins top-0 z-50 
    bg-transparent backdrop-blur-md py-4 shadow-md">
      <div className="flex justify-between items-center px-5 md:px-10">
        {/* Logo et Titre */}
        <Link
          to="/"
          className="text-[#2af4ed] font-bold text-xl transition-colors duration-300 hover:text-[#a5c233]"
        >
          FZ TANHATE 🧩
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-20">
          <Link
            to="/"
            className="text-white hover:text-[#2af4ed] transition-colors duration-300"
          >
            En <br /><span className="text-sm">Général</span>
          </Link>
          <Link
            to="/chiffres"
            className="text-white hover:text-[#2af4ed] transition-colors duration-300"
          >
            Parcours <br /><span className="text-sm">En chiffres</span>
          </Link>
          <Link
            to="/formation"
            className="text-white hover:text-[#2af4ed] transition-colors duration-300"
          >
            Formation & <br /><span className="text-sm">Accompagnement</span>
          </Link>
          <Link
            to="/badges-excellence"
            className="text-white hover:text-[#2af4ed] transition-colors duration-300"
          >
            Badges <br /><span className="text-sm">d'excellence</span>
          </Link>
          <Link
            to="/educast-darija"
            className="text-white hover:text-[#2af4ed] transition-colors duration-300"
          >
            Educast <br /><span className="text-sm">بالدراجة</span>
          </Link>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
}

export default Navbar;
