import React from "react";
import { NavLink } from "react-router-dom";
import footerlogo from "../../assets/images/Icon.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import imgwrapper from "../../assets/images/Brands.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top">
            <ul className="footer__top__list">
              <li className="footer__top__item">
                <div>
                  <img className="footer__lofo" src={footerlogo} alt="" />
                  <p>E-Comm</p>
                </div>
                <ul className="footer__top__item__list">
                  <li className="footer__top__item__list__item">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever.Since the 1500s, when an unknown
                    printer.
                  </li>
                </ul>
              </li>
              <li className="footer__top__item">
                <h4>Follow Us</h4>
                <ul className="footer__top__item__list">
                  <li className="footer__top__item__list__item">
                    Since the 1500s, when an unknown printer took a galley of
                    type and scrambled.
                  </li>
                  <li className="footer__top__item__list__item">
                    <FaFacebook />
                    <FaTwitter />
                  </li>
                </ul>
              </li>
              <li className="footer__top__item">
                <h4>Contact Us</h4>
                <ul className="footer__top__item__list">
                  <li className="footer__top__item__list__item">E-Comm ,</li>
                  <li className="footer__top__item__list__item">
                    4578 Marmora Road,
                  </li>
                  <li className="footer__top__item__list__item">
                    Glasgow D04 89GR
                  </li>
                </ul>
              </li>
              <li className="footer__top__item">
                <h4>Infomation</h4>
                <ul className="footer__top__item__list">
                  <li className="footer__top__item__list__item">About Us</li>
                  <li className="footer__top__item__list__item">Infomation</li>
                  <li className="footer__top__item__list__item">
                    Privacy Policy
                  </li>
                  <li className="footer__top__item__list__item">
                    Terms & Conditions
                  </li>
                </ul>
              </li>
              <li className="footer__top__item">
                <h4>Service</h4>
                <ul className="footer__top__item__list">
                  <li className="footer__top__item__list__item">About Us</li>
                  <li className="footer__top__item__list__item">Infomation</li>
                  <li className="footer__top__item__list__item">
                    Privacy Policy
                  </li>
                  <li className="footer__top__item__list__item">
                    Terms & Conditions
                  </li>
                </ul>
              </li>
              <li className="footer__top__item">
                <h4>My Account</h4>
                <ul className="footer__top__item__list">
                  <li className="footer__top__item__list__item">About Us</li>
                  <li className="footer__top__item__list__item">Infomation</li>
                  <li className="footer__top__item__list__item">
                    Privacy Policy
                  </li>
                  <li className="footer__top__item__list__item">
                    Terms & Conditions
                  </li>
                </ul>
              </li>
              <li className="footer__top__item">
                <h4>Our Offers</h4>
                <ul className="footer__top__item__list">
                  <li className="footer__top__item__list__item">About Us</li>
                  <li className="footer__top__item__list__item">Infomation</li>
                  <li className="footer__top__item__list__item">
                    Privacy Policy
                  </li>
                  <li className="footer__top__item__list__item">
                    Terms & Conditions
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="footer__bottom">
            <hr className="footer__line" />
            <div className="footer__bottom__wrapper">
              <NavLink className="footer__bottom__link">
                © 2018 Ecommerce theme by www.bisenbaev.com
              </NavLink>
              <img src={imgwrapper} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
