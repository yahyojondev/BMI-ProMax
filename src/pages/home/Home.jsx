import React from "react";
import Hero from "../../components/hero/Hero";
import { NavLink } from "react-router-dom";
import Products from "../../components/products/Products";
import shopimages from "../../assets/images/shop.png";
import {
  Featuresproduct,
  newsproduct,
  shippingproduct,
} from "../../static/router";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const shippinItem = shippingproduct?.map((el) => (
    <div key={el.id} className="shipping__card">
      <img src={el.img} alt="" />
      <div className="shipping__card__content">
        <h3>{el.title}</h3>
        <p>{el.text}</p>
      </div>
    </div>
  ));

  const newsItem = newsproduct?.map((el) => (
    <div key={el.id} className="news__card">
      <img src={el.img} alt="" />
      <div className="news__card__content">
        <span>{el.sptext}</span>
        <h4>{el.title}</h4>
        <p>{el.text}</p>
      </div>
    </div>
  ));

  const featuresItem = Featuresproduct?.map((el) => (
    <div key={el.id} className="features__card">
      <img src={el.img} alt="" />
      <div className="features__card__content">
        <h4>{el.title}</h4>
        <img src={el.stars} alt="" />
        <div className="price__wrapper">
          <p>${el.price}</p>
          <del>${el.oldPrice}</del>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="home">
      <Hero />
      <div className="product__wrapper__home">
        <div className="products__top">
          <div className="container">
            <h2>BEST SELLER</h2>
            <ul className="products__top__list">
              <li>
                <NavLink className="product__top__link">All</NavLink>
              </li>
              <li>
                <NavLink className="product__top__link">Bags</NavLink>
              </li>
              <li>
                <NavLink className="product__top__link">Sneakers</NavLink>
              </li>
              <li>
                <NavLink className="product__top__link">Belt</NavLink>
              </li>
              <li>
                <NavLink className="product__top__link">Sunglasses</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Products />
      </div>
      <div className="shopNow">
        <div className="container">
          <div className="shopNow__wrapper">
            <div className="shopNow__wrapper__left">
              <h2>Adidas Men Running Sneakers</h2>
              <p>Performance and design. Taken right to the edge.</p>
              <NavLink to={"/payment"}>SHOP NOW</NavLink>
            </div>
            <img src={shopimages} alt="" />
          </div>
        </div>
      </div>
      <div className="shipping">
        <div className="container">
          <div className="shipping__wrapper">{shippinItem}</div>
        </div>
      </div>
      <div className="news">
        <div className="container">
          <div className="news__wrapper">
            <h3>LATEST NEWS</h3>
            <div className="news__card__wrapper">{newsItem}</div>
          </div>
        </div>
      </div>
      <div className="news">
        <div className="container">
          <div className="features__wrapper">
            <h3>FEATURED PRODUCTS</h3>
            <div className="news__card__wrapper">{featuresItem}</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="search__wrapper">
          <div className="input_wrapper">
            <input placeholder="search query" type="text" />
            <button>Search</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
