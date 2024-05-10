import React, { memo } from "react";
import bagsimg from "../../assets/images/empty.jpg";

const Bags = () => {
  return (
    <div className="belt">
      <img src={bagsimg} alt="" />
    </div>
  );
};

export default memo(Bags);
