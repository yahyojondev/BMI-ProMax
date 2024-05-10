import React, { memo } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarTop = () => {
  const wishes = useSelector((state) => state.wishlist.value).length;
  const cartcount = useSelector((state) => state.cart.value).length;

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
            <NavLink className="cart__link" to={"/wishlist"}>
              <IoMdHeartEmpty className="navbartop__svg" />
              <span className="wishlist__length">{wishes}</span>
            </NavLink>
            <NavLink className="cart__link" to={"/cart"}>
              <FiShoppingCart className="navbartop__svg  cartsvg" />
              <span className="cart__length">{cartcount}</span>
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

export default memo(NavbarTop);
