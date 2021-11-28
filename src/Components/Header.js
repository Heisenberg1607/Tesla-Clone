import React from "react";

import "../Components/header.css";
import logo from "../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";


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
    </div>
  );
}



export default Header;
