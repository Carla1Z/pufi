import React from "react";
import { BsChevronRight } from "react-icons/bs";
import productrain from "../../assets/productrain.png";
import "../../styles/product.scss";

export const PufiRain = () => {
  return (
    <div className="product" id="rain">
      <figure>
        <img
          src="https://images.pexels.com/photos/1451040/pexels-photo-1451040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="PufiRain"
        />
        <button className="shop">SHOP</button>
      </figure>
      <div>
        <img src={productrain} alt="cart" />
        <h4>Pufi RAIN</h4>
        <p>Descripción del producto. Este es un texto simulado</p>
        <button>
          <BsChevronRight />
          VER MAS
        </button>
      </div>
    </div>
  );
};
