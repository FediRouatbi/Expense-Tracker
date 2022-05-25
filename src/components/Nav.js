import React from "react";
import "./nav.scss";
import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import logo from "../letter-m.png";
const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="" className="logo__img" />
        <span className="logo__text">Maglo</span>
      </div>

      <ul className="navigation">
        <li className="navigation__item">
          <FaHome className="navigation__item--logo" />
          <div className="navigation__item--text"> dashboard</div>
        </li>
        <li className="navigation__item">
          <ImStatsDots className="navigation__item--logo" />
          <div className="navigation__item--text">expenses</div>
        </li>
        <li className="navigation__item">
          <IoMdSettings className="navigation__item--logo" />
          <div className="navigation__item--text">settings</div>
        </li>
        <li className="navigation__item">
          <BiLogOut className="navigation__item--logo" />
          <div className="navigation__item--text">logout</div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
