import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Common/Heading";
import { about } from "../data/dummyData";

const About = () => {
  return (
    <>
      <section className="about">
        {about.map((item, i) => (
          <div className="container flex" key={i}>
            <div className="left">
              <img src={item.cover} alt="cover" data-aos="fade-down-right" />
            </div>
            <div className="right" data-aos="fade-down-left">
              <Heading title="About" />
              <p>{item.desc}</p>
              <p>{item.desc1}</p>
              <p>{item.desc2}</p>

              <div>
                <Link to="/contact">Lets do something together</Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default About;
