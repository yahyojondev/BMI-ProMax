import React, { memo } from "react";
import beltimg from "../../assets/images/empty.jpg";

const Belt = () => {
  return (
    <div className="belt">
      <img src={beltimg} alt="" />
    </div>
  );
};

export default memo(Belt);
