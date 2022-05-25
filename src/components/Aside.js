import React from "react";
import "./aside.scss";
import { IoIosArrowDown } from "react-icons/io";
import img from "../f.png";
import Title from "./Title";
import Recurred from "./Recurred";
const Aside = () => {
  return (
    <aside className="aside">
      <div className="account">
        <img src={img} alt="" className="account__img" />
        <div className="account__name">Fedi Rouatbi</div>
        <IoIosArrowDown className="account__logo" />
      </div>
      <Title text="Recurring" />
      <div className="expense">
        <Recurred />
      </div>
    </aside>
  );
};

export default Aside;
