import React from "react";
import Spend from "./Spend";
import "./Spendings.scss";

const Spendings = () => {
  return (
    <div className="spendings">
      <Spend data="Balance" />
      <Spend data="Income" />
      <Spend data="Expense" />
    </div>
  );
};

export default Spendings;
