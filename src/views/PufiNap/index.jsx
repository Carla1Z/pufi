import React from "react";
import { BsChevronRight } from "react-icons/bs";
import productnap from "../../assets/productnap.png";
import "../../styles/product.scss";

export const PufiNap = () => {
  return (
    <div className="product" id="nap">
      <div>
        <img src={productnap} alt="nap" />
        <h4>Pufi RAIN</h4>
        <p>Descripción del producto. Este es un texto simulado</p>
        <button>
          <BsChevronRight /> más info
        </button>
      </div>
      <figure>
        <img
          src="https://images.unsplash.com/photo-1520206183501-b80df61043c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt="PufiNap"
        />
        <button className="shop">SHOP</button>
      </figure>
    </div>
  );
};
