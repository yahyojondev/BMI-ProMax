import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "../products/Product";
import axios from "../../api";
import emptyimg from "../../assets/images/empty.jpg";

const Wishlist = () => {
  const wishes = useSelector((state) => state.wishlist.value);
  // console.log(wishes);
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get("products")
      .then((res) => setData(res.data.products))
      .catch((res) => console.log(res));
  }, []);

  return (
    <div className="wishlist">
      <div className="container">
        <div className="wishlist__wrapper">
          <h1>Wishlist</h1>
          {wishes.length ? (
            <Product title={`Wishlist (${wishes.length})`} data={wishes} />
          ) : (
            <img className="empty__imges" src={emptyimg} alt="" />
          )}
        </div>
        <Product data={data?.slice(5, 9)} />
      </div>
    </div>
  );
};

export default Wishlist;
