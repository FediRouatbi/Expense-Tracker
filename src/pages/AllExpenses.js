import React, { useState } from "react";
import "./alllexpenses.scss";
import { MdLibraryAdd, MdSearch } from "react-icons/md";
import Item from "../components/Item";

const AllExpenses = () => {
  const [addExpense, setAddExpense] = useState(false);
  return (
    <div className="alllexpenses p-4 pt-16">
      <div className="flex w-3/4 items-center justify-between ">
        <div className="flex items-center gap-3">
          <label>Filter by :</label>
          <select className="">
            <option value="name">name</option>
            <option value="type">type</option>
            <option value="amount">amount</option>
          </select>
          <form className=" p-1 border-2 border-gray-800   rounded-xl ">
            <div className="flex items-center">
              <input
                type="text"
                className="text-lg  outline-none px-1 border-r-2 border-gray-800 "
              />
              <button className="cursor-pointer ">
                <MdSearch size={30} />
              </button>
            </div>
          </form>
        </div>

        <MdLibraryAdd
          size={30}
          className="icon text-sky-400"
          onClick={() => setAddExpense((prev) => !prev)}
        />
      </div>

      <form
        className={`flex my-8 w-3/4 justify-between ${
          addExpense ? "" : "hide"
        } `}
      >
        <input type="text" className="input" placeholder="Name/BUSINESS	" />
        <input type="text" className="input" placeholder="TYPE" />
        <input type="text" className="input" placeholder="AMOUNT" />
        <button className="bg-sky-400 hover:bg-sky-600 text-cyan-50 w-32 rounded-xl">
          ADD
        </button>
      </form>

      <table className="table 	">
        <thead>
          <tr className="table__tr ">
            <th className="table__tr--th">NAME/BUSINESS</th>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>DATE</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="overflow-auto">
          <Item delete={true} />
          <Item delete={true} />
          <Item delete={true} />
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
