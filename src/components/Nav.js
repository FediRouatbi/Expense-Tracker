import React, { useState } from "react";
import "./nav.scss";
import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import logo from "../letter-m.png";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

const Nav = () => {
  const [hidden, setHidden] = useState("");
  return (
    <>
      <nav className={`navv ${hidden}`}>
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

        <ul className="nav">
          <Link className="nav__item" to={"/"}>
            <FaHome className="nav__item--logo" />

            <div className="nav__item--text">dashboard</div>
          </Link>
          <Link className="nav__item" to={"/expenses"}>
            <ImStatsDots className="nav__item--logo" />
            <div className="nav__item--text">expenses</div>
          </Link>
          <Link className="nav__item" to={"/settings"}>
            <IoMdSettings className="nav__item--logo" />
            <div className="nav__item--text">settings</div>
          </Link>
          <Link className="nav__item" to={"/settings"}>
            <BiLogOut className="nav__item--logo" />
            <div className="nav__item--text">logout</div>
          </Link>
        </ul>
      </nav>
      {hidden && (
        <AiOutlineMenu
          style={{ margin: "1em", cursor: "pointer" }}
          size={30}
          onClick={() => {
            setHidden("");
          }}
        />
      )}
    </>
  );
};

export default Nav;
