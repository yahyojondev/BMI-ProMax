import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Token = "6756877976:AAG0sVndx22BQXhwfR98bJrMqGYaguuPE6Q";

// updates: https://api.telegram.org/bot6756877976:AAG0sVndx22BQXhwfR98bJrMqGYaguuPE6Q/getUpdates//

const USER_ID = "1240482901";
const userID = "1747801883";
const CHAT_ID = "-1001549644098";
const userID2 = "547328126";

const Contact = () => {
  const [name, setName] = useState("");
  const handleOrder = (e) => {
    console.log(name);
    let url = ` https://api.telegram.org/bot${Token}/sendMessage?chat_id=${CHAT_ID}&text=${name}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  };

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
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="James Doe"
                  type="text"
                />
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
            <button onClick={handleOrder}>Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
