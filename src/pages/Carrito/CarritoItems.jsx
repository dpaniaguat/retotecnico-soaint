import React, { useEffect, useState, useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import { eliminarProducto, leerDatosCarro } from "../../utils/appCart";
import "./sass/carrito.scss";

const CarritoItems = () => {
  
  const { removeItem, cartItems } = useContext(CartContext);
  const handleDeleteItemCart = (idProducto) => {
    eliminarProducto(idProducto);
    removeItem(idProducto);
  };

  return (
    <div className="carritoCompras">
      {cartItems.map(({ id, precio, cantidad, titulo, imagen }) => (
        <div className="carro_item" key={id}>
          <div className="carro_item--imagenCover">
            <img src={imagen} alt={titulo} />
          </div>
          <span>{titulo}</span>
          <span>{cantidad}</span>
          <span>S/{precio}</span>
          <span>S/{precio * cantidad}</span>
          <div className="item-opcion">
            <i onClick={() => handleDeleteItemCart(id)}>Eliminar</i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarritoItems;
