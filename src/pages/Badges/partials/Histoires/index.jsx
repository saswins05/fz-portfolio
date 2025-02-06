import React from "react";
import { motion } from "framer-motion";
import { Button } from "@headlessui/react";
import { ArrowRight } from "lucide-react";

const histoires = [
  {
    id: 1,
    title: "📝 Histoire N°01",
    image: "/assets/histoires/1.png",
    description:
      "Aujourd'hui, une belle leçon de professionnalisme... À mes deux champions du jour @Mohamed Moussaid et Ilyass El guedem. En 30 minutes chrono, vous m'avez surpris, et je suis fière de vous ! Écoute ✓ Action ✓ Résultat ✓",
    tags: [
      "#CompleteTonPuzzle 🧩",
      "#Professionnalisme",
      "#FièreDeVous",
      "#TravailBienFait"
    ],
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_completetonpuzzle-professionnalisme-fiaeyredevous-activity-7247708940233244673-btty/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1jCNgBe5Fdt5hrcoGb2jldA_ObM709j2Y",
  },
  {
    id: 2,
    title: "📝 Histoire N°02",
    image: "/assets/histoires/2.png",
    description:
      "Une leçon de persévérance... Bravo à mes deux champions, TARIK ABOULOUAFA et Ilyas Nasri ! En un clin d'œil, vous avez trouvé une solution à votre imprévu et l’avez mise en œuvre sans hésitation. Quelle détermination !",
    tags: [
      "#CompleteTonPuzzle 🧩",
      "#Persévérance",
      "#FièreDeVous",
      "#TravailBienFait"
    ],
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_completetonpuzzle-persaezvaezrance-fiaeyredevous-activity-7248850311501479936-4Kzy/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1jCNgBe5Fdt5hrcoGb2jldA_ObM709j2Y",
  },
  {
    id: 3,
    title: "Découvrez l’histoire inspirante de Imane Narjis ✨",
    image: "/assets/histoires/3.png",
    description:
      "Elle a surpris tout le monde lors d’un shooting professionnel en trouvant l’équilibre parfait entre son style unique et les attentes du monde professionnel. Une belle leçon d’adaptabilité et de confiance en soi. 🌟",
    tags: [
      "#Professionnalisme",
      "#Inspiration",
      "#SoftSkills",
      "#Diversité",
    ],
    link: "https://www.linkedin.com/posts/fatima-ezzahra-t-074146119_professionnalisme-inspiration-softskills-activity-7251758266437746688--QNW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1jCNgBe5Fdt5hrcoGb2jldA_ObM709j2Y",
  },
];

const Histoires = () => {
  return (
    <section className="py-16 px-6 bg-[#173c4c] font-poppins">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2af4ed] mb-12 text-center">
        Histoires Inspirantes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {histoires.map((histoire) => (
          <motion.div
            key={histoire.id}
            className="bg-[#3f6f63] rounded-lg shadow-lg p-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={histoire.image}
              alt={histoire.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-[#2af4ed] mb-3">
              {histoire.title}
            </h3>
            <p className="text-white text-sm mb-4 leading-relaxed">
              {histoire.description}
            </p>
            <div className="mb-4">
              {histoire.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-[#1e573a] text-[#2af4ed] text-xs font-medium rounded-full px-3 py-1 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={histoire.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#a5c233] hover:bg-[#1e573a] text-black font-semibold rounded-lg shadow-md transition-all duration-300"
            >
              Découvrir sur LinkedIn <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Histoires;