import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Common/Header";
import Home from "../Home/Home";
import Services from "./Services";
import About from "./About.jsx";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "../Common/Footer";

const Pages = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/certification" element={<Testimonials />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
