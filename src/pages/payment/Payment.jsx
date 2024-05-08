import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decCart, incCart, removeFromCart } from "../../context/CartSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoLogoPaypal } from "react-icons/io5";
import { BsBank } from "react-icons/bs";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { FaArrowLeft } from "react-icons/fa6";

const BOT_Token = "7045092467:AAEu6fj_nLRJxl-0Gx3asRZZ7x2V-PCsqrk";
const Chat_ID = "-911010620";
//updates: https://api.telegram.org/bot7045092467:AAEu6fj_nLRJxl-0Gx3asRZZ7x2V-PCsqrk/getUpdates

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

  const [name, setName] = useState("");

  const handleOrder = (e) => {
    e.preventDefault();
    let url = ` https://api.telegram.org/bot${BOT_Token}/sendMessage?chat_id=${Chat_ID}&text=${name}`;
    let api = new XMLHttpRequest();
    api.open("Get", url, true);
    api.send();

    console.log(name);
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
        <div className="cart__wrapper payment">
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
        <div className="payment__wrapper">
          <div className="payment__link__wrapper">
            <NavLink to={"/cart"}>
              <FaArrowLeft className="left__link__svg" />
            </NavLink>
            <NavLink className="payment__exit">X</NavLink>
          </div>
          <h2>Make Payment</h2>
          <form className="payment__form">
            <div className="payment__form__left">
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="payment__input"
                id="outlined-basic"
                label="FirstName"
                variant="outlined"
              />
              <TextField
                className="payment__input"
                id="outlined-basic"
                label="Email address"
                variant="outlined"
              />
              <div className="select__wrapper">
                <h3>Select Method Of Payment</h3>
                <FormGroup className="formgroup">
                  <div className="form__wrapper">
                    <FormControlLabel
                      className="formControl"
                      label="Credit Card Or Debit"
                      control={<Checkbox defaultChecked />}
                    />
                    <FaRegCreditCard />
                  </div>
                  <div className="form__wrapper">
                    <FormControlLabel
                      className="formControl"
                      required
                      label="Paypal"
                      control={<Checkbox />}
                    />
                    <IoLogoPaypal />
                  </div>
                  <div className="form__wrapper">
                    <FormControlLabel
                      className="formControl"
                      label="Bank Transfer"
                      control={<Checkbox />}
                    />
                    <BsBank />
                  </div>
                </FormGroup>
              </div>
            </div>
            <div className="payment__form__right">
              <TextField
                className="payment__input"
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
              <textarea
                placeholder="Address form delivery"
                name=""
                className="payment__texarea"
                id=""
              ></textarea>
              <TextField
                className="payment__input"
                id="outlined-basic"
                label="Mobile Phone"
                variant="outlined"
              />
            </div>
          </form>
          <Button
            onClick={handleOrder}
            className="gotPayment__link"
            variant="contained"
          >
            Go to Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
