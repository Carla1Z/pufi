import React from "react";
import { ImageGrid } from "../../components/ImageGrid";
import { Footer } from "../../containers/Footer";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../../styles/espufi.scss";

export const Espufi = () => {
  return (
    <div className="espufi">
      <span className="span">
        <p>INSTAGRAM</p>
        <p>#ESPUFI</p>
      </span>
      <ImageGrid />
      <span className="span">
        <p>NEWSLETTER</p>
        <p>SUSCRIBITE</p>
        <p>Y enterate de todas las novedades</p>
      </span>
      <form className="form">
        <input type="text" className="input" placeholder="Ingresa tu email" />
        <button type="submit" className="btn">
          <AiOutlineArrowRight />
        </button>
      </form>
      <Footer />
    </div>
  );
};
