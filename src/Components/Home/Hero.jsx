import React from "react";
import TypewriterComponent from "typewriter-effect";
import { home } from "../data/dummyData";

const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((item, i) => (
          <div className="heroContainer" key={i}>
            <h3 className="fontSize" data-aos="fade-right">
              {item.text}
            </h3>
            <h1>
              <TypewriterComponent
                options={{
                  strings: [`${item.name}`, `${item.post}`, `${item.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos="fade-left">{item.desc}</p>
            <button className="primaryBtn">Download CV</button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Hero;
