import React from "react";
import Title from "./Title";
import "./expenses.scss";
import Item from "./Item";
const Expenses = () => {
  return (
    <div className="expenses">
      <Title text="Recent" />
      <table className="table">
        <thead>
          <tr className="table__tr">
            <th className="table__tr--th">name/business</th>
            <th className="table__tr--th">type</th>
            <th className="table__tr--th">amount</th>
            <th className="table__tr--th">date</th>
          </tr>
        </thead>
        <tbody>
          <Item />

          <Item />

          <Item />

          <Item />
        </tbody>
      </table>
    </div>
  );
};

export default Expenses;
