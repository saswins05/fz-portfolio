import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import ToggleMode from "./ToggleMode";

function Navbar() {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const accountMenuRef = useRef(null);


  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
        setAccountMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Navbar className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md bg-opacity-95 backdrop-blur-lg">
        <nav className="flex justify-between items-center px-1 lg:px-5 py-4">
          {/* Logo */}
          <Link to="/" className="text-primary dark:text-secondary py-2 px-4 rounded font-semibold text-lg">
            Fz Tahnate
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/about" className="text-gray-800 dark:text-white hover:text-orange-500 transition-all">
              About
            </Link>
          </div>

          {/* Mobile Menu & Toggles */}
          <div className="flex items-center space-x-4">
            <ToggleMode />
            <MobileMenu />
          </div>
        </nav>
      </Navbar>
    </>
  );
}

export default Navbar;
