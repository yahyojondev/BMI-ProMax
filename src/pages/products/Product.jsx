import React, { memo } from "react";
import stars from "../../assets/images/star.png";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";
import { addToCart } from "../../context/CartSlice";
import { productimg } from "../../static/router";


const Product = ({ data }) => {
  const dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);

  const productItem = data?.map((el) => (
    <div key={el.id} className="product__card">
      <div className="product__card__wrapper">
        <img src={productimg[el.id - 1]?.link} alt="" />
        <div className="cart__wishlist">
          <button onClick={() => dispatch(toggleToWishes(el))}>
            {wishes.some((w) => w.id === el.id) ? <FaHeart /> : <FaRegHeart />}
          </button>
          <button onClick={() => dispatch(addToCart(el))}>
            <FiShoppingCart />
          </button>
        </div>
      </div>
      <hr />
      <div className="product__card__content">
        <NavLink to={`/singleRouet/${el.id}`}>
          <h3 className="product__card__title">
            {productimg[el.id - 1].title}
          </h3>
        </NavLink>
        <div className="rating__wrapper">
          <img src={stars} alt="" />
          <p>({el.stock})</p>
        </div>
        <div className="price__wrapper">
          <p>${el.price}</p>
          <del>(${el.price * 2})</del>
          <p>{el.stock}% off</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="product">
      <div className="container">
        <div className="product__wrapper">{productItem}</div>
      </div>
    </div>
  );
};

export default memo(Product);
