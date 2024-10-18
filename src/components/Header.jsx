import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header({ onSearch }) {
  return (
    <header id="header">
      <p className="logo">
        <img src={logo} alt="Recipe Book Logo" id="logo" />
        <span>Flavour Heaven</span>
      </p>
      <nav className="navbar">
        <Link to="/RL">Recipe Collection</Link>
      </nav>
    </header>
  );
}

export default Header;
