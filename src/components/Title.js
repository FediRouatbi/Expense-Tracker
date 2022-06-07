import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./title.scss";
const Title = ({ text }) => {
  const navTo = useNavigate();
  return (
    <div className="title">
      <div className="title__text">{text} Expenses</div>
      <div className="title__view" onClick={() => navTo("/expenses")}>
        <div className="title__view--text">View All</div>
        <IoIosArrowForward className="title__view--icon" />
      </div>
    </div>
  );
};

export default Title;
