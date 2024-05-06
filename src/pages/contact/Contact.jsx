import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="contact__wrapper">
            <div className="contact__left">
              <h1>Get in touch</h1>
              <NavLink>contact@e-comm.ng</NavLink>
              <NavLink>+234 4556 6665 34</NavLink>
              <NavLink>20 Prince Hakerem Lekki Phase 1, Lagos.</NavLink>
            </div>
            <form className="contact__right">
              <div className="input__wrapper">
                <p>Full Name</p>
                <input placeholder="James Doe" type="text" />
              </div>
              <div className="input__wrapper">
                <p>Email</p>
                <input placeholder="jamesdoe@gmail.com" type="text" />
              </div>
              <div className="input__wrapper">
                <p>Mesaage</p>
                <textarea placeholder="Type your message" type="text" />
              </div>
            </form>
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
    </>
  );
};

export default Contact;
