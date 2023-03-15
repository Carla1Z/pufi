import React from "react";
import footer from "../../assets/footer.png";
import qr from "../../assets/qr.png";
import security from "../../assets/security.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import "../../styles/footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <img src={footer} alt="footer logo" />
      <ul>
        <li>PUFI RAIN</li>
        <li>PUFI PUFF</li>
        <li>PUFI CART</li>
        <li>PUFI NAP</li>
      </ul>
      <ul>
        <li>CONTACTO</li>
        <li>AYUDA</li>
        <li>CÓMO COMPRAR</li>
        <li>TÉRMINOS & CONDICIONES</li>
      </ul>
      <div className="purchase">
        COMPRA 100% SEGURA
        <figure>
          <img src={qr} alt="qr" />
          <img src={security} alt="security" />
          <span className="securityspan">
            <p>COMPRÁ CON</p>
            <p>LA GARANTÍA</p>
            <p>DE PUFI</p>
          </span>
        </figure>
      </div>
      <div className="network">
        SEGUINOS EN
        <figure>
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
        </figure>
      </div>
    </div>
  );
};
