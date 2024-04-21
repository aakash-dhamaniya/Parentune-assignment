import React from "react";
import PropTypes from "prop-types";
import brand from "../assets/CryptoTracker.png"
import "./header.css"
import Logo from "./components/Logo";
import RightContainer from "./components/RightContainer";
import searchIcon from "../assets/searchIcon.png";
import burgerIcons from "../assets/burger.png";
function Header() {
  return (
    <div className="header">
      <Logo logo={brand} />
      <RightContainer icons={{ searchIcon, burgerIcons }} iconStyles={{ searchIcon: "search-icon", burgerIcon: "burger-icon" }}/>
    </div>
  );
}

Header.propTypes = {};

export default Header;
