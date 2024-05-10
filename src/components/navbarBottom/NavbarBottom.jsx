import React, { useState } from "react";
import navbarbottomlogo from "../../assets/images/Icon.png";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarBottom = () => {
  const [show, setShow] = useState("");
  return (
    <div className="navbarbottom">
      <div className="container">
        <div className="navbarbottom__wrapper">
          <NavLink to={"/"} className="navbarbottom__wrapper__left">
            <img src={navbarbottomlogo} alt="" />
            <h3>E-Comm</h3>
          </NavLink>
          <ul className="navbarbottom__list  ${show}">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/Belt"}>Belt</NavLink>
            </li>
            <li>
              <NavLink to={"/bags"}>Bags</NavLink>
            </li>
          </ul>
          <GiHamburgerMenu
            onClick={() => setShow((p = p + showbtn))}
            className="navbarbottom__burger"
          />
        </div>
        <ul className="navbarbottom__list__toggle show">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/Belt"}>Belt</NavLink>
          </li>
          <li>
            <NavLink to={"/bags"}>Bags</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarBottom;
