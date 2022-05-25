import React from "react";
import { GiWallet } from "react-icons/gi";
import "./spend.scss";
const Spend = ({ data }) => {
  console.log(data);
  return (
    <div className="spend">
      <div className="spend__icon">
        <GiWallet />
      </div>
      <div className="spend__data">
        <div className="spend__data--text">{data} spending</div>
        <div className="spend__data--amount">$33565.11</div>
      </div>
    </div>
  );
};

export default Spend;
