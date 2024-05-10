import React, { memo } from "react";
import nothingimg from "../../assets/images/nothing2.webp";

const Nothing = () => {
  return (
    <div className="nothing">
      <img src={nothingimg} alt="" />
    </div>
  );
};

export default memo(Nothing);
