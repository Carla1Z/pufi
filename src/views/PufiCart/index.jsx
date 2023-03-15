import React from "react";
import { BsChevronRight } from "react-icons/bs";
import productcart from "../../assets/productcart.png";
import "../../styles/product.scss";

export const PufiCart = () => {
  return (
    <div className="product" id="cart">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1570913196444-6f013e478152?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="PufiCart"
        />
        <button className="shop">SHOP</button>
      </figure>
      <div>
        <img src={productcart} alt="cart" />
        <h4>Pufi RAIN</h4>
        <p>Descripción del producto. Este es un texto simulado</p>
        <button>
          <BsChevronRight />
          ver mas
        </button>
      </div>
    </div>
  );
};
