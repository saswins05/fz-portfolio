import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ScrollToTop from "../utils/ScrollToTop";
import PuzzleLoader from "../components/PuzzleLoader";

// Lazy-loaded pages
const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Chiffres = React.lazy(() => import("../pages/Chiffres"));

function RoutesComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Force 3s loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {loading ? (
        <PuzzleLoader />
      ) : (
        <Suspense fallback={<PuzzleLoader />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/stats" element={<Chiffres />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </Router>
  );
}

export default RoutesComponent;
