import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const NavbarTop = () => {
  return (
    <div className="navbartop">
      <div className="container">
        <div className="navbartop__wrapper">
          <select name="" id="" className="navbartop__wrapper__select">
            <option value="EN">EN</option>
            <option value="RU">RU</option>
          </select>
          <div className="navbartop__wrapper__left">
            <NavLink to={"/login"}>
              <IoPersonSharp className="navbartop__svg" />
            </NavLink>
            <NavLink to={"/wishlist"}>
              <IoMdHeartEmpty className="navbartop__svg" />
            </NavLink>
            <NavLink to={"/cart"}>
              <FiShoppingCart className="navbartop__svg" />
            </NavLink>
            <NavLink className="navbartop__text" to={"/contact"}>
              Items
            </NavLink>
            <NavLink>
              <IoSearchOutline className="navbartop__svg" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
