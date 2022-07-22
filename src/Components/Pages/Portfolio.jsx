import { Visibility } from "@mui/icons-material";
import { Link } from "@mui/material";
import React, { useState } from "react";
import Heading from "../Common/Heading";
import { portfolio } from "../data/dummyData";

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];
const Portfolio = () => {
  const [list, setList] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setList(newItems);

    if (category === "all") {
      setList(portfolio);
    }
  };

  return (
    <>
      <article>
        <div className="container">
          <Heading title="Portfolio" />
          <div className="catButton">
            {category.map((item, i) => (
              <button
                className="primaryBtn"
                onClick={() => filterItems(item)}
                key={i}
                data-aos="zoom-out-down"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="content grid3">
            {list.map((item, i) => (
              <>
                <Link
                  href={item.url}
                  className="box"
                  target="_blank"
                  key={i}
                  data-aos="flip-right"
                >
                  <div className="img">
                    <img src={item.cover} alt="Hello" />
                  </div>
                  <div className="overLay">
                    <h3 className="overLayText">{item.title}</h3>
                    <span className="overLayText">{item.name}</span>
                    <Visibility color="primary" />
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default Portfolio;
