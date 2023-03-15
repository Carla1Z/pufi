import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import productrain from "../../assets/productrain.png";
import "../../styles/product.scss";

export const PufiRain = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return (
      <div className="product" id="rain">
        <img
          src="https://images.unsplash.com/photo-1513754991953-820561d659e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt="PufiRain"
        />
        <div>
          <img src={productrain} alt="rain" />
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
