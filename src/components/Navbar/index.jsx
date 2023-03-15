import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";
import nap from "../../assets/nap.png";
import puff from "../../assets/puff.png";
import rain from "../../assets/rain.png";
import { IoIosArrowDown } from "react-icons/io";
import "../../styles/navbar.scss";

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
        <li>
          <Link to="puff">
            <span className="spannav">
              <img src={puff} alt="pufi puff" />
              PUFI PUFF
            </span>
          </Link>
        </li>

        <li>
          <Link to="rain">
            <span className="spannav">
              <img src={rain} alt="pufi puff" />
              PUFI RAIN
            </span>
          </Link>
        </li>

        <li>
          <Link to="cart">
            <span className="spannav">
              <img src={cart} alt="pufi cart" />
              PUFI CART
            </span>
          </Link>
        </li>

        <li>
          <Link to="nap">
            <span className="spannav">
              <img src={nap} alt="pufi nap" />
              PUFI NAP
            </span>
          </Link>
        </li>
      </ul>
      <span className="user">
        <p>Mi cuenta
          <IoIosArrowDown />
        </p>
        <p>Mi compra</p>
      </span>
    </div>
  );
};
