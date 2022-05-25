import React from "react";
import Title from "./Title";
import "./expenses.scss";
import Item from "./Item";
const Expenses = () => {
  return (
    <div className="expenses">
      <Title text="Recent" />
      <div className="expenses__title">
        <div className="expenses__title--column">name/business</div>
        <div className="expenses__title--column">type</div>
        <div className="expenses__title--column">amount</div>
        <div className="expenses__title--column">date</div>
      </div>
      <div className="expenses__items">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Expenses;
