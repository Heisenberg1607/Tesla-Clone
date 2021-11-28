import React from "react";

import "../Components/header.css";
import logo from "../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  return (
    <div className="container">
      <a href=" ">
        <img src={logo} alt="TESLA" />
      </a>
      <div className="menu">
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
        <p>
          <a href="#">Model X</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p>
      </div>
      <div className="rightMenu">
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <MenuIcon />
      </div>
      <div className="Burger-nav">
        <div className="closeBtn">
          <CloseIcon className="closeBtn" />
        </div>

        <li>
          <a href="#">Existing library</a>
        </li>
        <li>
          <a href="#">Used library</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">CyberTruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Existing library</a>
        </li>
        <li>
          <a href="#">Existing library</a>
        </li>
        <li>
          <a href="#">Existing library</a>
        </li>
      </div>
    </div>
  );
}

export default Header;
