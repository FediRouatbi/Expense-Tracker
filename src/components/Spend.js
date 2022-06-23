import React from "react";
import { GiWallet } from "react-icons/gi";
import "./spend.scss";
import { GetData } from "../context/AppContext";
const Spend = ({ data }) => {
  const { allExpense } = GetData();
  const prices = allExpense.map((elm) => elm.price);
  let val = "";
  if (data === "Balance") val = prices.reduce((acc, curr) => acc + +curr, 0);
  if (data === "Income")
    val = prices
      .filter((elm) => +elm > 0)
      .reduce((acc, curr) => acc + +curr, 0);
  if (data === "Expense")
    val = prices
      .filter((elm) => +elm < 0)
      .reduce((acc, curr) => acc + +curr, 0);

  const style = {
    backgroundColor: data === "Balance" && "#212529",
    color: data === "Balance" && "white",
  };
  const walletColor = { color: data === "Balance" && "#94d82d" };
  const backgroundWallet = { backgroundColor: data === "Balance" && "#868e96" };
  return (
    <div className="spend" style={style}>
      <div className="spend__icon" style={backgroundWallet}>
        <GiWallet style={walletColor} />
      </div>
      <div className="spend__data">
        <div className="spend__data--text">{data.toUpperCase()} </div>
        <div className="spend__data--amount">
          ${data === "Balance" ? val : Math.abs(val)}
        </div>
      </div>
    </div>
  );
};

export default Spend;
