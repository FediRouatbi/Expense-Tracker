import React from "react";
import { GiWallet } from "react-icons/gi";
import "./spend.scss";
const Spend = ({ data }) => {
  const style = {
    backgroundColor: data === "Total" && "#212529",
    color: data === "Total" && "white",
  };
  const walletColor = { color: data === "Total" && "#94d82d" };
  const backgroundWallet = { backgroundColor: data === "Total" && "#868e96" };
  return (
    <div className="spend" style={style}>
      <div className="spend__icon" style={backgroundWallet}>
        <GiWallet style={walletColor} />
      </div>
      <div className="spend__data">
        <div className="spend__data--text">{data} spending</div>
        <div className="spend__data--amount">$33565.11</div>
      </div>
    </div>
  );
};

export default Spend;
