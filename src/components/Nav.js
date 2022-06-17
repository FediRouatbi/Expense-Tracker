import React, { useState } from "react";
import "./nav.scss";
import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import logo from "../letter-m.png";
import { IoMdSettings } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GetData } from "../context/AppContext";

const Nav = () => {
  const navTo = useNavigate();
  const [hidden, setHidden] = useState("");
  const { pathname } = useLocation();
  const { currentUser, signOutUser, setCurrentUser } = GetData();
  return (
    currentUser && (
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
                pathname === "/" ? "activelink" : ""
              }`}
              to={"/"}
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
            <a
              className="navigation__item"
              onClick={() => {
                signOutUser();
                setCurrentUser(null);
                navTo("/login");
              }}
            >
              <BiLogOut className="navigation__item--logo" />
              <div className="navigation__item--text"> Sign out</div>
            </a>
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
    )
  );
};

export default Nav;
