import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ScrollToTop from "../utils/ScrollToTop";
import PuzzleLoader from "../components/PuzzleLoader";
import Educast from "../pages/Educast";

// Lazy-loaded pages
const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Chiffres = React.lazy(() => import("../pages/Chiffres"));
const Formation = React.lazy(() => import("../pages/Formation"));
const Badges = React.lazy(() => import("../pages/Badges"));
const Results = React.lazy(() => import("../pages/Results"));


function RoutesComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // Force 3s loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename="/fz-portfolio"> {/* Ajoutez basename */}
      <ScrollToTop />
      {loading ? (
        <PuzzleLoader />
      ) : (
        <Suspense fallback={<PuzzleLoader />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/chiffres" element={<Chiffres />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/formation" element={<Formation />} />
              <Route path="/badges-excellence" element={<Badges />} />
              <Route path="/educast-darija" element={<Educast />} />
              <Route path="/results" element={<Results />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </Router>
  );
}

export default RoutesComponent;
