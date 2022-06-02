import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import img from "../f.png";
import "./sticky.scss";
const Sticky = () => {
  return (
    <div className="top">
      <div className="account">
        <img src={img} alt="" className="account__img" />
        <div className="account__name">Fedi Rouatbi</div>
        <IoIosArrowDown className="account__logo" />
      </div>
    </div>
  );
};

export default Sticky;
