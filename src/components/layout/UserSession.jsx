import React, { useState, useEffect, useContext } from "react";

import { IconCart, IconUser } from "../../assets/icons";
import { useHistory } from "react-router-dom";
import "./sass/UserSession.scss";
import CartContext from "../../context/cart/CartContext";
import CarritoItems from "../../pages/Carrito/CarritoItems";

export const UserSession = () => {
  const [countItemsCart, setCountItemsCart] = useState(0);
  const [totalPago, setTotalPago] = useState(0);
  const [viewSumary, setViewSumary] = useState(false);

  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    if (cartItems) {
      setCountItemsCart(cartItems.reduce((a, b) => +a + +b.cantidad, 0));
      setTotalPago(cartItems.reduce((a, b) => +a + +b.cantidad * b.precio, 0));
    }
  }, [cartItems]);

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
          <span className={`${countItemsCart > 0 ? "show" : ""}`}>
            {countItemsCart}
          </span>
      </div>
      <div className={`user_session--cartsumary ${!viewSumary ? "hide" : ""}`}>
        {<CarritoItems renderCart={countItemsCart} />}
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
