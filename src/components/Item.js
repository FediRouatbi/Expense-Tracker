import React from "react";
import "./item.scss";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
const Item = (props) => {
  return (
    <tr className="table__tr">
      <td className="table__tr--th disp" colSpan={3}>
        <div className="flexi">
          <div className="item__data--img">
            <img src="" alt="" />
          </div>
          <div className="item__data--about">
            <div className="item__data--about-name">iphone 13 Pro Max</div>
            <div className="item__data--about-business">Apple.inc</div>
          </div>
        </div>
      </td>
      <td className="item__type">Mobile</td>
      <td className="item__amount">$420.84</td>
      <td className="item__date">14 Apr 2022</td>
      {props.delete && (
        <>
          <td>
            <AiFillEdit className="icon" color="#4dabf7" />
          </td>
          <td>
            <MdDelete className="icon" size={20} color="#ff8787" />
          </td>
        </>
      )}
    </tr>
  );
};

export default Item;
