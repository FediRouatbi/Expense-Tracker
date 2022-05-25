import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./title.scss";
const Title = ({ text }) => {
  return (
    <div className="title">
      <div className="title__text">{text} Expenses</div>
      <div className="title__view">
        <div className="title__view--text">View All</div>
        <IoIosArrowForward className="title__view--icon" />
      </div>
    </div>
  );
};

export default Title;
