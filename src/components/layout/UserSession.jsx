import React, {useContext } from "react";

import { IconCart, IconUser } from "../../assets/icons";
import { useHistory } from "react-router-dom";
import "./sass/UserSession.scss";
import CartContext from "../../context/cart/CartContext";
import CarritoItems from "../../pages/Carrito/CarritoItems";
import { parseMoney } from "../../utils/util";

export const UserSession = () => {
  const { cartSumary, showHideCart, showCart } = useContext(CartContext);

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
      <div className="user_session__cart" onClick={() => showHideCart()}>
        <div className="user_session__cart_icons">
          <IconCart />
          <span className={`${cartSumary.totalItems > 0 ? "show" : ""}`}>
            {cartSumary.totalItems}
          </span>
        </div>
      </div>
      <div className={`user_session--cartsumary ${!showCart ? "hide" : ""}`}>
        <CarritoItems />
        <div className="user_session--actions">
          <div>
            <h3>Total a pagar:</h3>
            <hr />
            <h3>S/{parseMoney(cartSumary.subTotal)}</h3>
          </div>
          <br />
          <button className="user_session--goToCart" onClick={handleGotoCart}>
            IR AL CARRITO
          </button>
        </div>
      </div>
    </div>
  );
};
