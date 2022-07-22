import { Button, Link, Typography } from "@mui/material";
import axios from "axios";

import React, { useState } from "react";
import Heading from "../Common/Heading";
import { contact } from "../data/dummyData";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const [errorMessage, setErrorMessage] = useState(false);

  const onChangeHandler = (e, id) => {
    if (id === "name") {
      setState({ ...state, name: e.target.value });
    } else if (id === "email") {
      setState({ ...state, email: e.target.value });
    } else if (id === "subject") {
      setState({ ...state, subject: e.target.value });
    } else if (id === "body") {
      setState({ ...state, body: e.target.value });
    }
  };

  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=momenmustafa201@gmail.com&su=${state.subject}&body=${state.body}&bcc=${state.email}`;

  const sendMailHandler = () => {
    const name = state.name.length > 3;
    const email =
      state.email.length > 3 &&
      state.email.includes("@") &&
      state.email.includes(".com");
    const subject = state.subject.length > 4;
    const body = state.body.length > 6;

    if (name && email && subject && body) {
      window.open(url);
    } else {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 4000);
      console.log(errorMessage);
    }

    // window.open(url);
    console.log(email);
  };

  return (
    <>
      <div className="contact">
        <div className="container">
          <Heading title="Keep In Touch" />
          {errorMessage && (
            <>
              <Typography color="#9F6000">Please fill the inputs</Typography>
              <Typography color="#9F6000">
                Notice: Email input should includes '@' and '.com'
              </Typography>
            </>
          )}
          <div className="content flexsb">
            <div className="right">
              <form>
                <div className="flexContact">
                  <input
                    type="text"
                    placeholder="Name"
                    data-aos="zoom-in-down"
                    id="name"
                    onChange={(e) => onChangeHandler(e, "name")}
                  />
                  <input
                    type="email"
                    placeholder="example@example.com"
                    data-aos="zoom-in-up"
                    onChange={(e) => onChangeHandler(e, "email")}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  data-aos="zoom-in-up"
                  onChange={(e) => onChangeHandler(e, "subject")}
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  data-aos="zoom-in-down"
                  onChange={(e) => onChangeHandler(e, "body")}
                ></textarea>
                <Button
                  data-aos="zoom-in-down"
                  onClick={sendMailHandler}
                  style={{ backgroundColor: "#e0a80d", color: "black" }}
                >
                  Submit
                </Button>
              </form>
            </div>
            <div className="left">
              {contact.map((item, i) => (
                <div className="box" key={i} data-aos="zoom-in-down">
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
