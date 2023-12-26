import React from "react";
import Homepage from "../components/Homepage";
import Header from "../components/Header";
import BtnPage from "./BtnPage";
import RackerAgent3 from "../assets/images/png/MonalisaLui.png";
import ImgPage from "./ImgPage";

const Contact = () => {
  return (
    <div>
      <Header />
      <Homepage />
      <BtnPage name="button" />
      <ImgPage image={RackerAgent3} />
    </div>
  );
};

export default Contact;
