// src/router/index.jsx
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";  
// Lazy-loaded pages
const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));

import ScrollToTop from "../utils/ScrollToTop";

function RoutesComponent() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default RoutesComponent;
