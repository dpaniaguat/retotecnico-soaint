import React, { useEffect, useState, useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import CarritoItems from "./CarritoItems";

import "./sass/carrito.scss";

const Carrito = () => {
  const { removeItem, cartItems } = useContext(CartContext);

  return (
    <div className="carrito">
      <section className="carrito-content">
        <div className="breadcrumb">
          <p>Inicio</p>
          <i>/</i>
          <span>Carro de compras</span>
        </div>
        {<CarritoItems />}
      </section>
    </div>
  );
};

export default Carrito;
