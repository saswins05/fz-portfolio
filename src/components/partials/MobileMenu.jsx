import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function MobileMenu({ isOpen, toggleMenu }) {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        toggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggleMenu]);

  return (
    <div className="md:hidden relative">
      {/* Bouton Menu */}
      <button
        ref={buttonRef}
        className="text-white p-2 focus:outline-none"
        onClick={() => toggleMenu(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="w-8 h-8 text-[#a5c233]" />
        ) : (
          <Bars3Icon className="w-8 h-8 text-[#2af4ed]" />
        )}
      </button>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-3 w-48 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg rounded-md z-50"
          >
            <ul className="flex flex-col p-4 space-y-3">
              <li>
                <Link to="/" className="hover:text-[#2af4ed] transition-colors" onClick={() => toggleMenu(false)}>
                  En <br /><span className="text-sm">Général</span>
                </Link>
              </li>
              <li>
                <Link to="/formation" className="hover:text-[#2af4ed] transition-colors" onClick={() => toggleMenu(false)}>
                  Formation & <br /><span className="text-sm">Accompagnement</span>
                </Link>
              </li>
              <li>
                <Link to="/badge-excellence" className="hover:text-[#2af4ed] transition-colors" onClick={() => toggleMenu(false)}>
                  Badges <br /><span className="text-sm">d'excellence</span>
                </Link>
              </li>
              <li>
                <Link to="/educast-darija" className="hover:text-[#2af4ed] transition-colors" onClick={() => toggleMenu(false)}>
                Educast <br /><span className="text-sm">بالدراجة</span>
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
