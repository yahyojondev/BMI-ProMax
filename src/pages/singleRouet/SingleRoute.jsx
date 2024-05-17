import React, { useState, useEffect, memo } from "react";
import starimg from "../../assets/images/rating.png";
import axios from "../../api";
import { NavLink, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Product from "../products/Product";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { productimg } from "../../static/router";

const SingleRoute = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const [count, setCount] = useState(1);

  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get("products")
      .then((res) => setData(res.data.products))
      .catch((res) => console.log(res));
  }, []);

  console.log(product);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((res) => console.log(res));
  }, []);

  return (
    <div className="singleRoute">
      <div className="container">
        <div className="singleRoute__wrapper">
          <div className="singleRoute__top">
            <div className="singleRoute__left">
              <div className="singleRoute__images">
                <div className="singleRoute__images__top">
                  <img src={product?.thumbnail} alt="" />
                </div>
                <div className="singleRoute__images__bottom">
                  <img src={product?.thumbnail} alt="" />
                  <img src={product?.thumbnail} alt="" />
                  <img src={product?.thumbnail} alt="" />
                  <img src={product?.thumbnail} alt="" />
                </div>
              </div>
              <div className="singleRoute__text__wrapper">
                <h2>{product?.title}</h2>
                <div className="seen__wrapper">
                  <img src={starimg} alt="" />
                  <p>{product?.stock} reviews</p>
                  <NavLink className="rewiev__link">Submit a review</NavLink>
                </div>
                <hr />
                <div className="price__limit__wrapper">
                  <p>${product?.price * count}</p>
                  <del>${product?.price * 2}</del>
                  <span>{product?.stock} % off</span>
                </div>
                <div className="stock__wrapper">
                  <p>Availability:</p>
                  <p>In stock</p>
                  <p>Category:</p>
                  <p>Accessories</p>
                  <p>Free shipping</p>
                </div>
                <hr />
                <div className="select__color">
                  <p>Select Color:</p>
                  <form>
                    <input type="radio" />
                    <input type="radio" />
                    <input type="radio" />
                    <input type="radio" />
                  </form>
                </div>
                <div className="select__color">
                  <p>Size:</p>
                  <select name="" id="">
                    <option value="XS">XS</option>
                    <option value="XL">XL</option>
                    <option value="M">M</option>
                  </select>
                </div>
                <hr />
                <div className="button__cart__wrapper">
                  <div className="buy__btn__wrapper">
                    <button
                      disabled={count <= 1}
                      onClick={() => setCount((p) => p - 1)}
                    >
                      -
                    </button>
                    <p>{count}</p>
                    <button onClick={() => setCount((p) => p + 1)}>+</button>
                  </div>
                  <div className="addcart__wrapper">
                    <IoCartOutline />
                    <button>Add To cart</button>
                  </div>
                  <FaRegHeart className="like__svg" />
                </div>
                <hr />
                <div className="facebok__twitter__wrapper">
                  <div className="facebook">
                    <FaFacebookF />
                    <p>Share on Facebook</p>
                  </div>
                  <div className=" facebook  Twitter">
                    <FaTwitter />
                    <p>Share on Twitter</p>
                  </div>
                </div>
              </div>
            </div>
            <Product data={data?.slice(5, 6)} />
          </div>
          <div className="singleRoute__bottom">
            <div className="tab__link">
              <NavLink>Product information</NavLink>
              <NavLink>Reviews</NavLink>
              <NavLink>Another tab</NavLink>
            </div>
            <div className="singleRoute__bottom__text">
              <p>
                air max are always very comfortable fit, clean and just perfect
                in every way. just the box was too small and scrunched the
                sneakers up a little bit, not sure if the box was always this
                small but the 90s are and will always be one of my favorites.
              </p>
              <p>
                air max are always very comfortable fit, clean and just perfect
                in every way. just the box was too small and scrunched the
                sneakers up a little bit, not sure if the box was always this
                small but the 90s are and will always be one of my favorites.
              </p>
              <p>
                air max are always very comfortable fit, clean and just perfect
                in every way. just the box was too small and scrunched the
                sneakers up a little bit, not sure if the box was always this
                small but the 90s are and will always be one of my favorites.
              </p>
            </div>
          </div>
          <h2 className="singleRoute__bottom__title">RELATED PRODUCTS</h2>
          <Product data={data?.slice(5, 9)} />
        </div>
      </div>
    </div>
  );
};

export default memo(SingleRoute);
