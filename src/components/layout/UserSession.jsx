import React, { useContext, useState, useEffect } from "react";

import { IconCart, IconUser } from "../../assets/icons";
import { useHistory } from "react-router-dom";
import "./sass/UserSession.scss";
import CartContext from "../../context/cart/CartContext";
import CarritoItems from "../../pages/Carrito/CarritoItems";
import { parseMoney } from "../../utils/util";
import img_payments from "../../assets/images/payments_list.webp";

export const UserSession = () => {

  const { cartSumary, showHideCart, showCart } = useContext(CartContext);

  const [isHiddenCartSumary, setIsHiddenCartSumary] = useState(false);

  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = "hidden";
      setIsHiddenCartSumary(true);
    } else {
      document.body.style.overflowY  = "auto";
    }
  }, [showCart]);

  let history = useHistory();

  const handleGotoCart = () => {
    showHideCart();
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
        <div
          className={`user_session--cover ${!showCart ? "" : "show"}`}
          onClick={() => showHideCart()}
        >
          cover
        </div>

        <div
          className={`user_session--cartsumary-data ${
            !showCart ? (isHiddenCartSumary ? "hide" : "") : "viewer"
          }`}
        >
          <div className="actions__header">
            <h4>Carrito</h4>
            <span onClick={() => showHideCart()}>X</span>
          </div>
          <div className="mini-carrito">
            <CarritoItems/>
          </div>

          <div className="user_session--goToCart">
            <div className="user_session--goToCart__amount">
              <span>Total a pagar: </span>

              <span> S/{parseMoney(cartSumary.subTotal)}</span>
            </div>
            <button
              className="user_session--goToCart__button"
              onClick={handleGotoCart}
            >
              IR AL CARRITO
            </button>
            <div className="user_session--goToCart__payments">
              <img src={img_payments} alt="payments" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
