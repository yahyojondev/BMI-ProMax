import React from "react";
import { Button } from "@mui/material";
import Confetti from "react-confetti";
import { NavLink } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin">
      <Confetti width={window.innerWidth - 100} />;
      <div className="container">
        <div className="admin__wrapper">
          <h2>Admin Panel</h2>
          <div className="admin__text__wrapper">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur cupiditate inventore, deserunt magnam provident
              dolores blanditiis ullam iusto! Assumenda dolor quis itaque
              commodi tempore laudantium quam deleniti id consequatur. Minus
              delectus officia unde quam nulla ut. Odit quibusdam quis aut enim
              delectus blanditiis, quisquam quidem maiores suscipit.
              Dignissimos, ut repudiandae!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur cupiditate inventore, deserunt magnam provident
              dolores blanditiis ullam iusto! Assumenda dolor quis itaque
              commodi tempore laudantium quam deleniti id consequatur. Minus
              delectus officia unde quam nulla ut. Odit quibusdam quis aut enim
              delectus blanditiis, quisquam quidem maiores suscipit.
              Dignissimos, ut repudiandae!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur cupiditate inventore, deserunt magnam provident
              dolores blanditiis ullam iusto! Assumenda dolor quis itaque
              commodi tempore laudantium quam deleniti id consequatur. Minus
              delectus officia unde quam nulla ut. Odit quibusdam quis aut enim
              delectus blanditiis, quisquam quidem maiores suscipit.
              Dignissimos, ut repudiandae!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur cupiditate inventore, deserunt magnam provident
              dolores blanditiis ullam iusto! Assumenda dolor quis itaque
              commodi tempore laudantium quam deleniti id consequatur. Minus
              delectus officia unde quam nulla ut. Odit quibusdam quis aut enim
              delectus blanditiis, quisquam quidem maiores suscipit.
              Dignissimos, ut repudiandae!
            </p>
          </div>
          <NavLink to={"/login"}>
            <Button className="admin__btn" variant="contained">
              Log out
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Admin;
