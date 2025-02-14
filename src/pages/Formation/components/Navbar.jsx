import React, { useState } from "react";
import { Link } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#3f6f63]   py-7 shadow-md font-poppins">
      <div className="flex justify-between items-center px-5 md:px-10">
       

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="methode-5s"
            smooth={true}
            className="text-white hover:underline cursor-pointer hover:text-[#2af4ed] transition-colors duration-300"
          >
            Méthode des 5S
          </Link>
          <Link
            to="gestion-documentaire"
            smooth={true}
            className="text-white hover:underline cursor-pointer hover:text-[#2af4ed] transition-colors duration-300"
          >
            Formation Gestion Documentaire
          </Link>
          <Link
            to="orale"
            smooth={true}
            className="text-white hover:underline cursor-pointer hover:text-[#2af4ed] transition-colors duration-300"
          >
            Maîtrisez votre Présentation Orale
          </Link>
          <Link
            to="boosters"
            smooth={true}
            className="text-white hover:underline cursor-pointer hover:text-[#2af4ed] transition-colors duration-300"
          >
            Les Boosters
          </Link>
          <Link
            to="oncf"
            smooth={true}
            className="text-white hover:underline cursor-pointer hover:text-[#2af4ed] transition-colors duration-300"
          >
            Formation ONCF
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <XMarkIcon className="w-8 h-8 text-[#a5c233]" />
            ) : (
              <Bars3Icon className="w-8 h-8 text-[#2af4ed]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute min-h-screen mt-18 inset-0 bg-[#173c4c] bg-opacity-90 z-40 flex flex-col items-start p-5 py-15 space-y-4">
          <Link
            to="methode-5s"
            smooth={true}
            className="text-white hover:underline cursor-pointer text-lg"
            onClick={toggleNavbar}
          >
            Méthode des 5S
          </Link>
          <Link
            to="gestion-documentaire"
            smooth={true}
            className="text-white hover:underline cursor-pointer text-lg"
            onClick={toggleNavbar}
          >
            Formation Gestion Documentaire
          </Link>
          <Link
            to="orale"
            smooth={true}
            className="text-white hover:underline cursor-pointer text-lg"
            onClick={toggleNavbar}
          >
            Maîtrisez votre Présentation Orale
          </Link>
          <Link
            to="boosters"
            smooth={true}
            className="text-white hover:underline cursor-pointer text-lg"
            onClick={toggleNavbar}
          >
            Les Boosters
          </Link>
          <Link
            to="oncf"
            smooth={true}
            className="text-white hover:underline cursor-pointer text-lg"
            onClick={toggleNavbar}
          >
            Formation ONCF
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
