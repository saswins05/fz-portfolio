// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#5bbf7b", // Exemple de couleur primaire
          secondary: "#f8b400", // Couleur secondaire
          darkBlue: "#3a4f7d", // Un bleu foncé pour mode sombre
          lightGreen: "#a7d8d1", // Vert plus léger
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
      },
    },
    darkMode: 'class',  
    plugins: [],
  };
  