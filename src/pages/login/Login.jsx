import React, { useState, memo } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const API_URL = "https://fakestoreapi.com/auth/login";

const Login = () => {
  window.scrollTo(0, 0);

  const [username, setUsername] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = { username, password };
    axios
      .post(API_URL, user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        toast.success("Welcome to admin panel");
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ma'lumot yoki password xato");
      });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login__wrapper">
          <form onSubmit={handleSubmit}>
            <TextField
              value={username}
              onChange={(e) => setPassword(e.target.value)}
              className="login__input"
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login__input"
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <Button type="submit" className="login__btn" variant="contained">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(Login);
