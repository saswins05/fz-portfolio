// src/contexts/ThemeContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

// Créer le contexte
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Vérification initiale de l'état du mode sombre depuis localStorage
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? savedMode === "true" : false;
  });

  // Mettre à jour le mode sombre dans le localStorage et appliquer la classe `dark` sur le document
  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode ? "true" : "false");
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personnalisé pour utiliser le thème
export const useTheme = () => useContext(ThemeContext);
