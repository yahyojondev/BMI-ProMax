import React from "react";
import rasm from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={rasm} alt="" />
      <div className="container">
        <div className="hero__wrapper">
          <h1>Super Flash Sale 50% Off</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
