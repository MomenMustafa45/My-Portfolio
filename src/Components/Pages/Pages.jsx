import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Common/Header";
import Home from "../Home/Home";
import Services from "./Services";
import About from "./About.jsx";
import Portfolio from "./Portfolio";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  );
};

export default Pages;
