import React from "react";
import Spend from "./Spend";
import "./Spendings.scss";
import { GrTableAdd } from "react-icons/gr";
import { Link } from "react-router-dom";

const Spendings = () => {
  return (
    <div className="spendings">
      <Spend data="Balance" />
      <Spend data="Income" />
      <Spend data="Expense" />
      <div className="flex justify-center items-center p-4 ">
        <Link
          to="/expenses"
          className="cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 transition-all ease-in-out   p-4 rounded-full bg-[#a5d8ff]"
        >
          <GrTableAdd size={27} />
        </Link>
      </div>
    </div>
  );
};

export default Spendings;
