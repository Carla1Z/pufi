import React from "react";
import { Navbar } from "../../components/Navbar";
import "../../styles/landingpage.scss";

export const LandingPage = () => {
  return (
    <div className="landingpage">
      <Navbar />
      <div className="description">
        <h1 className="title">ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL.</h1>
        <button>SHOP</button>
      </div>
    </div>
  );
};
