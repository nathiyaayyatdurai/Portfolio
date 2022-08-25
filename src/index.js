import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Styles
import "./assets/Styles.sass";
//Components/
import Landing from "./components/landingPage/Landing.js";
import Navigation from "./components/navigation/Navigation.js";
import About from "./components/About/About";
import Portfolio from "./components/portfolio/Portfolio.js";
import Contact from "./components/contact/Contact.js";

import reportWebVitals from "./reportWebVitals"; 

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

reportWebVitals();
