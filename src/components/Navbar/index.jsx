import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import "./styles.scss";

export const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul className="menu">
        <Link to="puff">
          <li>PUFI PUFF</li>
        </Link>

        <Link to="rain">
          <li>PUFI RAIN</li>
        </Link>

        <Link to="cart">
          <li>PUFI CART</li>
        </Link>

        <Link to="nap">
          <li>PUFI NAP</li>
        </Link>
      </ul>
      <span>
        <p>Mi cuenta</p>
        <p>Mi compra</p>
      </span>
    </div>
  );
};
