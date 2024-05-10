import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decCart, incCart, removeFromCart } from "../../context/CartSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Button, TextField } from "@mui/material";

const Cart = () => {
  let dispatch = useDispatch();
  let cart = useSelector((state) => state.cart.value);
  window.scrollTo(0, 0);

  const handleDecrement = (el) => {
    if (el.quantity < 1) {
      dispatch(removeFromCart(el));
    } else {
      dispatch(decCart(el));
    }
  };

  const cartitem = cart?.map((el) => (
    <div key={el.id} className="cart__title__wrapper">
      <div className="img__title">
        <button
          onClick={() => dispatch(removeFromCart(el))}
          className="delete__btn"
        >
          <FaRegTrashAlt />
        </button>
        <img src={el.images[0]} alt="" />
        <p>{el.title}</p>
      </div>
      <div className="cart__price__wrapper">
        <p className="cart__price">${el.price}</p>
        <div className="cart__incdec">
          <button onClick={() => handleDecrement(el)}>-</button>
          <span>{el.quantity}</span>
          <button onClick={() => dispatch(incCart(el))}>+</button>
        </div>
        <p className="cart__subtotal">${el.price * el.quantity}</p>
      </div>
    </div>
  ));

  const priceitem = cart?.map((el) => (
    <div key={el.id} className="cart__price__wrapper">
      <div>
        <p>Subtotal:</p>
        <p>${el.price * el.quantity}</p>
      </div>
      <hr />
      <div>
        <p>shipping:</p>
        <p>Free</p>
      </div>
      <hr />
      <div>
        <p>total:</p>
        <p>${el.price}</p>
      </div>
    </div>
  ));
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__wrapper">
          <h3 className="cart__creat">Your Cards</h3>
          <div className="cart__titles">
            <h3>Product</h3>
            <div className="cart__titles__wrapper">
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Subtotal</h3>
            </div>
          </div>
          <div className="car__content__wrapper">{cartitem}</div>
          <div className="cart__wrapper__bottom">
            <div className="cart__btns">
              <input
                placeholder="vaucher code"
                className="cart__btns__input"
                type="text"
              />
              <Button className="cart__btns__btn" variant="contained">
                Redeem
              </Button>
            </div>
            <div className="card__input__total">
              <div className="total__wrapper">
                <div className="subtotal__wrapper">
                  <p>Subtotal</p>
                  <p>$1961</p>
                </div>
                <div className="subtotal__wrapper">
                  <p>shipping free</p>
                  <p>$20</p>
                </div>
                <div className="subtotal__wrapper">
                  <p>Coupon</p>
                  <p>No</p>
                </div>
                <hr />
              </div>
              <div className="ToTal__wrapper">
                <h2>TOTal</h2>
                <p>$1961</p>
              </div>
              <NavLink className="to__payment__link" to={"/payment"}>
                Procees to
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Cart);
