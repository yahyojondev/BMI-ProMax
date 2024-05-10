import React, { memo } from "react";
import NavbarTop from "../navbartop/NavbarTop";
import NavbarBottom from "../navbarBottom/NavbarBottom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <NavbarTop />
          <NavbarBottom />
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
