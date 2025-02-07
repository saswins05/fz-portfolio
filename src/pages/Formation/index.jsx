import React from "react";
import Navbar from "./components/Navbar";
import Orale from "./partials/Orale";
import Methode5S from "./partials/Methode5S";
import GestionDocumentaire from "./partials/GestionDocumentaire";
import Boosters from "./partials/Boosters";
import ONCF from "./partials/ONCF";

function Formation() {
  return (
    <div>
      <Navbar />

      {/* Sections */}
      <section id="methode-5s" className="py-16 px-6  text-white">
        <Methode5S />
      </section>

      <section id="gestion-documentaire" className="py-16 px-6 text-white">
        <GestionDocumentaire />
      </section>

      <section id="orale" className="py-16 px-6 bg-[#173c4c] text-white">
        <Orale />
      </section>

      <section id="boosters" className="py-16 px-6 bg-[#2af4ed] text-white">
        <Boosters />
      </section>

      <section id="oncf" className="py-16 px-6 bg-[#a5c233] text-white">
        <ONCF />
      </section>
    </div>
  );
}

export default Formation;
