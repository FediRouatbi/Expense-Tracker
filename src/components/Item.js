import React from "react";
import "./item.scss";
const Item = () => {
  return (
    <div className="item">
      <div className="item__data ">
        <div className="item__data--img">
          <img src="" alt="" />
        </div>
        <div className="item__data--about">
          <div className="item__data--about-name">iphone 13 Pro Max</div>
          <div className="item__data--about-business">Apple.inc</div>
        </div>
      </div>
      <div className="item__type">Mobile</div>
      <div className="item__amount">$420.84</div>
      <div className="item__date">14 Apr 2022</div>
    </div>
  );
};

export default Item;
