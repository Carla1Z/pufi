import React from "react";
import logo from "../../assets/logo.png";
import "./styles.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul className="menu">
        <li>PUFI PUFF</li>
        <li>PUFI RAIN</li>
        <li>PUFI CART</li>
        <li>PUFI NAP</li>
      </ul>
      <span>
        <p>Mi cuenta</p>
        <p>Mi compra</p>
      </span>
    </div>
  );
};
