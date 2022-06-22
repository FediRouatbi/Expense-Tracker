import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import user from "../data/user.jpg";
import "./sticky.scss";
import { Link } from "react-router-dom";
import { GetData } from "../context/AppContext";

const Sticky = () => {
  const { currentUser, signOutUser } = GetData();
  const [open, setOpen] = useState(false);

  const toogle = () => {
    setOpen((prev) => !prev);
  };

  return (
    currentUser && (
      <div className="absolute top-4 right-6 z-30">
        <button
          className="text-black bg-gray-300 focus:ring-4 focus:outline-none focus:ring-sky-200 font-medium rounded-lg text-sm px-4 py-2 flex justify-center items-center gap-2  "
          type="button"
          onClick={() => toogle()}
        >
          <img
            src={currentUser?.photoURL || user}
            alt=""
            className="w-8 h-8 rounded-full"
          />
          <div> {currentUser?.displayName}</div>

          <IoIosArrowDown />
        </button>

        <div
          className={`z-10 ${
            open ? "" : "hidden"
          } bg-white divide-y divide-gray-100 rounded shadow w-38 dark:bg-gray-700`}
        >
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link
                onClick={() => toogle()}
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                onClick={() => toogle()}
                to="/expenses"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Expenses
              </Link>
            </li>
            <li>
              <Link
                onClick={() => toogle()}
                to="/settings"
                className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </Link>
            </li>
            <li>
              <a
                onClick={() => {
                  toogle();
                  signOutUser();
                }}
                className=" cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default Sticky;
