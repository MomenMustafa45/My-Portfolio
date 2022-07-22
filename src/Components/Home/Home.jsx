import React from "react";
import About from "../Pages/About";
import Hero from "./Hero";
import Services from "../Pages/Services";
import Portfolio from "../Pages/Portfolio";
import Testimonials from "../Pages/Testimonials";
import Contact from "../Pages/Contact";
import ScrollButton from "../Common/ScrollButton";

const Home = () => {
  return (
    <div className="homeContainer">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <ScrollButton />
    </div>
  );
};

export default Home;
