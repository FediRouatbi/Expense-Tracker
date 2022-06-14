import React, { useState } from "react";
import "./nav.scss";
import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import logo from "../letter-m.png";
import { IoMdSettings } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [hidden, setHidden] = useState("");
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <nav className={`nav ${hidden}`}>
        <div className="logo">
          <img src={logo} alt="" className="logo__img" />
          <span className="logo__text">Maglo</span>
          <AiOutlineCloseCircle
            className="logo__close"
            onClick={() => {
              setHidden("hidden");
            }}
          />
        </div>

        <ul className="navigation">
          <Link
            className={`navigation__item ${
              pathname === "/home" ? "activelink" : ""
            }`}
            to={"/home"}
          >
            <FaHome className="navigation__item--logo" />

            <div className="navigation__item--text">dashboard</div>
          </Link>
          <Link
            className={`navigation__item ${
              pathname === "/expenses" ? "activelink" : ""
            }`}
            to={"/expenses"}
          >
            <ImStatsDots className="navigation__item--logo" />
            <div className="navigation__item--text">expenses</div>
          </Link>
          <Link
            className={`navigation__item ${
              pathname === "/settings" ? "activelink" : ""
            }`}
            to={"/settings"}
          >
            <IoMdSettings className="navigation__item--logo" />
            <div className="navigation__item--text">settings</div>
          </Link>
          <Link className="navigation__item" to={"/"}>
            <BiLogOut className="navigation__item--logo" />
            <div className="navigation__item--text"> Sign out</div>
          </Link>
        </ul>
      </nav>
      {hidden && (
        <AiOutlineMenu
          style={{ margin: "1em", cursor: "pointer" }}
          size={30}
          className="absolute top-2  left-2  animate-wiggle "
          onClick={() => {
            setHidden("");
          }}
        />
      )}
    </>
  );
};

export default Nav;
