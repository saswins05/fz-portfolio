import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setAccountMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="md:hidden relative" ref={menuRef}>
      {/* Hamburger Button */}
      <button
        className="text-gray-800 dark:text-white p-2 rounded focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <XMarkIcon className="w-8 h-8 text-orange-500" /> : <Bars3Icon className="w-8 h-8 text-orange-500" />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-3 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md"
          >
            <ul className="flex flex-col p-4 space-y-3">
              <li>
                <Link
                  to="/]"
                  className="text-gray-800 dark:text-white hover:text-orange-500 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Acceuil
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-800 dark:text-white hover:text-orange-500 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenu;
