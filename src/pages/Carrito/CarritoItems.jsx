import React, { useContext } from "react";
import { IconDelete } from "../../assets/icons";
import CartContext from "../../context/cart/CartContext";
import { eliminarProducto } from "../../utils/appCart";
import "./sass/carrito.scss";

const CarritoItems = () => {
  
  const { removeItem, cartItems, showCart } = useContext(CartContext);

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
          <div className={`carro_item--row ${showCart ? "sumary--" : ""}`}>
            <span>{titulo}</span>
            <span>{cantidad}</span>
            <span>S/{precio}</span>
            <span>S/{precio * cantidad}</span>
          </div>
          <div className="item-opcion" onClick={() => handleDeleteItemCart(id)}>
            <IconDelete />
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarritoItems;
