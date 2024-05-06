import React from "react";
import { products } from "../../static/router";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Products = () => {
  const productsitem = products?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="product__img__wrapper">
        <img src={el.img} alt={el.title} />
        <div className="wishlist__wrapper">
          <FaRegHeart />
          <FiShoppingCart />
        </div>
      </div>
      <div className="product__card__content">
        <NavLink className="singleRoute__link" to={"/singleRouet"}>
          <h3>{el.title}</h3>
        </NavLink>
        <img src={el.stars} alt="" />
        <div className="price__wrapper">
          <p>{el.price}</p>
          <del>{el.oldprice}</del>
          <span>{el.limit}</span>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="products">
      <div className="container">
        <div className="products__wrapper">{productsitem}</div>
      </div>
    </div>
  );
};

export default Products;
