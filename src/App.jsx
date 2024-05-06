import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import Belt from "./pages/Belt/Belt";
import Bags from "./pages/bags/Bags";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Belt" element={<Belt />} />
          <Route path="/bags" element={<Bags />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
