import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Validation } from "./validation";
import { ImageGrid } from "../../components/ImageGrid";
import { Footer } from "../../containers/Footer";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../../styles/espufi.scss";
import { postEmail } from "../../redux/actions";

export const Espufi = () => {
  const dispatch = useDispatch();
  const sendEmail = useSelector((state) => state.email);

  const [error, setError] = useState({});
  const [input, setInput] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
    setError(
      Validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(
      Validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    if (Object.keys(error).length === 0) {
      alert("Email enviado");
      console.log("handleSubmit: " + input);
      dispatch(postEmail(input));
      setInput({
        email: "",
      });
    } else {
      alert("No se pudo enviar el email, intente con un email valido");
    }
  };

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
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={(e) => handleChange(e)}
          className="input"
          placeholder="Ingresa tu email"
        />
        <button type="submit" className="btn">
          <AiOutlineArrowRight />
        </button>
        {error.email && <p className="error">{error.email}</p>}
      </form>
      <Footer />
    </div>
  );
};
