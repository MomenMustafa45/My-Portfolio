import React from "react";
import About from "../Pages/About";
import Hero from "./Hero";
import Services from "../Pages/Services";
import Portfolio from "../Pages/Portfolio";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </>
  );
};

export default Home;
