import React from "react";
import Title from "./Title";
import "./expenses.scss";
import Item from "./Item";
const Expenses = () => {
  return (
    <div className="expenses pt-16 overflow-hidden">
      <Title text="Recent" />
      <table className="table">
        <thead>
          <tr className="table__tr">
            <th className="table__tr--th">name/business</th>
            <th>type</th>
            <th>amount</th>
            <th>date</th>
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
