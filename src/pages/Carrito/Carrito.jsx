import React, { useEffect, useState, useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import CarritoItems from "./CarritoItems";
import CarritoResumen from "./CarritoResumen";

import "./sass/carrito.scss";

const Carrito = () => {
  const { removeItem, cartItems } = useContext(CartContext);

  return (
    <div className="carrito">
      <div className="breadcrumb">
          <p>Inicio</p>
          <i>/</i>
          <span>Carro de compras</span>
        </div>
      <section className="carrito-content">
        
        <CarritoItems />
        <CarritoResumen/>
      </section>
    </div>
  );
};

export default Carrito;
