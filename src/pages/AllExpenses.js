import React from "react";
import "./alllexpenses.scss";
import { MdLibraryAdd } from "react-icons/md";
import Item from "../components/Item";

const AllExpenses = () => {
  return (
    <div className="alllexpenses">
      <div className="add ">
        <input type="text" placeholder="search" />

        <div className="option">
          <label>Filter by :</label>
          <select className="select">
            <option value="name">name</option>
            <option value="type">type</option>
            <option value="amount">amount</option>
          </select>
          <input type="text" />
        </div>

        <MdLibraryAdd size={30} color="#4dabf7" className="icon" />
      </div>
      <table className="table">
        <thead>
          <tr className="table__tr">
            <th className="table__tr--th">Name/BUSINESS</th>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>DATE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Item delete={true} />
          <Item delete={true} />
          <Item delete={true} />
          <Item delete={true} />
          <Item delete={true} />
        </tbody>
      </table>
    </div>
  );
};

export default AllExpenses;
