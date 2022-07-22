import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormatQuote } from "@mui/icons-material";
import { certification } from "../data/dummyData";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="testimonials hero">
        <div className="container">
          <Slider {...settings}>
            {certification.map((item) => (
              <div className="box" key={item.id}>
                <i data-aos="zoom-out-up">
                  <FormatQuote />
                </i>
                <p data-aos="zoom-out-up">{item.text}</p>
                <div className="img">
                  <img src={item.image} alt="hello" data-aos="zoom-out-right" />
                </div>
                <h3 data-aos="zoom-out-left">{item.name}</h3>
                <label data-aos="zoom-out">{item.post}</label>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
