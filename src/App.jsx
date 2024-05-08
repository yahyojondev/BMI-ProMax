import { useState } from "react";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import Belt from "./pages/Belt/Belt";
import Bags from "./pages/bags/Bags";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import SingleRoute from "./pages/singleRouet/SingleRoute";
import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import Wishlist from "./pages/wishlist/Wishlist";
import Cart from "./pages/cart/Cart";
import Payment from "./pages/payment/Payment";

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
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/" element={<Auth />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="/singleRouet/:id" element={<SingleRoute />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
