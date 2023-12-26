import React from "react";
// import Homepage from "../components/Homepage";
import Header from "../components/Header";
import Product from "../components/Product";
import BtnPage from "./BtnPage";
import ImgPage from "./ImgPage";
import RackerAgent2 from "../assets/images/png/JonathonDoe.png";

const Services = () => {
  return (
    <div>
      <Header />
      {/* <Homepage /> */}
      <Product />
      <BtnPage name="click me" />
      <ImgPage image={RackerAgent2} />
    </div>
  );
};

export default Services;
