import React from "react";
import { Navbar } from "../../components/Navbar";
import "../../styles/landingpage.scss";

export const LandingPage = () => {
  return (
    <div className="landingpage">
      <Navbar />
      <div className="description">
        <span className="title">
          <p>ESTÁR COMODO,</p>
          <p>NUNCA FUE TAN FACIL.</p>
        </span>
        <button className="shop">SHOP</button>
      </div>
    </div>
  );
};
