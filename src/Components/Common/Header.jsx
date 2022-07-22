import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLink } from "../data/dummyData";
import logo from "../../assets/logo.jpg";
import { Menu } from "@mui/icons-material";

const Header = () => {
  const [responsive, setResponsive] = useState(false);

  const responsiveHandler = () => {
    setResponsive(!responsive);
  };
  return (
    <>
      <header>
        <div className="container flexsb ">
          <div className="logo" data-aos="zoom-in-right">
            <Link to="/">
              <img src={logo} alt="logo" width={50} height={50} />
            </Link>
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navLink.map((links, i) => {
              return (
                <Link
                  to={links.url}
                  key={i}
                  onClick={responsiveHandler}
                  data-aos="zoom-in-left"
                >
                  {links.text}
                </Link>
              );
            })}
          </div>
          <button className="toggle" onClick={responsiveHandler}>
            <Menu className="icon"></Menu>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
