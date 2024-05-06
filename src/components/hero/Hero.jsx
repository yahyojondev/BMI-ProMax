import React from "react";
import rasm from "../../assets/images/hero.png";

const Hero = ({ data }) => {
  return (
    <div className="hero">
      <img src={rasm} alt="" />
      <div className="container">
        <div className="hero__wrapper">
          <h1>Super Flash Sale 50% Off</h1>
        </div>
        <div className="hero__products__wrapper"></div>
      </div>
    </div>
  );
};

export default Hero;
