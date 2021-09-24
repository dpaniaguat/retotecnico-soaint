import React, { useState, useEffect } from "react";

import { IconCart, IconUser } from "../../assets/icons";
import Carrito from "../../pages/Carrito/Carrito";
import { leerDatosCarro } from "../../utils/appCart";
import { useHistory } from "react-router-dom";
import "./sass/UserSession.scss";

export const UserSession = () => {
  const [countItemsCart, setCountItemsCart] = useState(0);
  const [totalPago, setTotalPago] = useState(0);
  const [viewSumary, setViewSumary] = useState(false);

  let carro = [];

  setInterval(() => {
    carro = leerDatosCarro();
    if (carro) {
      setCountItemsCart(carro.reduce((a, b) => +a + +b.cantidad, 0));
      setTotalPago(carro.reduce((a, b) => +a + +b.cantidad*b.precio, 0))
    }
  }, 100);

  let history = useHistory();

  const handleGotoCart = () => {
    history.push("/carrito");
  };

  return (
    <div className="user_session">
      <div className="user_session__info">
        <IconUser />
      </div>
      <span>|</span>
      <div
        className="user_session__cart"
        onClick={() => setViewSumary(!viewSumary)}
      >
        <IconCart />
        <span>{countItemsCart}</span>
      </div>
      <div className={`user_session--cartsumary ${!viewSumary ? "hide" : ""}`}>
        {<Carrito renderCart={countItemsCart} />}
        <div className="user_session--actions">
          <p>
            <h3>Total a pagar:</h3>
            <hr />
            <h3>S/{totalPago}</h3>
          </p>
          <br />
          <button className="user_session--goToCart" onClick={handleGotoCart}>
            IR AL CARRITO
          </button>
        </div>
      </div>
    </div>
  );
};
