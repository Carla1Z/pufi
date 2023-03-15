import React from "react";
import { BsChevronRight } from "react-icons/bs";
import productpuff from "../../assets/productpuff.png";
import "../../styles/product.scss";

export const PufiPuff = () => {
  return (
    <div className="product" id="puff">
      <div>
        <img src={productpuff} alt="puff" />
        <h4>Pufi RAIN</h4>
        <p>Descripción del producto. Este es un texto simulado</p>
        <button>
          <BsChevronRight />
          ver mas
        </button>
      </div>
      <figure>
        <img
          src="https://images.unsplash.com/photo-1637782855823-5423b6afb07b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="PufiPuff"
        />
        <button className="shop">SHOP</button>
      </figure>
    </div>
  );
};
