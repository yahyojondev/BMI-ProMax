import React, { useState, memo } from "react";
// import navbarbottomlogo from "../../assets/images/logonav.png";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarBottom = () => {
  const [show, setShow] = useState("");
  return (
    <div className="navbarbottom">
      <div className="container">
        <div className="navbarbottom__wrapper">
          <NavLink to={"/"} className="navbarbottom__wrapper__left">
            {/* <img src={navbarbottomlogo} alt="" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
            </svg>
            <h3>ProMax</h3>
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

export default memo(NavbarBottom);
