import { Link } from "@mui/material";
import React from "react";
import { social } from "../data/dummyData";

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item, i) => (
          <>
            <i key={i} data-aos="fade-in-zoom" className="socialIcons">
              <Link href={item.url} target="_blank">
                {item.icon}
              </Link>
            </i>
          </>
        ))}
        <p data-aos="zoom-in-right">All Rights Recieved</p>
      </footer>
    </>
  );
};

export default Footer;
