import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";
import CartContext from "../../context/cart/CartContext";
import { types } from "../../types/types";
import { agregarProducto, leerDatosCarro } from "../../utils/appCart";
import { UserSession } from "../layout/UserSession";

export const ProductoItem = ({ id, title, price, image }) => {

  const {addToCart}  = useContext(CartContext);

  const handleAddToCart = (id, title, price, image) => {
    const producto = {
      id,
      titulo: title,
      precio: price,
      imagen: image,
      cantidad: 1,
    };
    const productosLS = agregarProducto(producto);
    console.log('productosLS----->',productosLS)
    addToCart(productosLS);
  };

  return (
    <div className="producto" key={id}>
      <Link exact to={`/producto/${id}`}>
        <div className="producto-imagen">
          <img src={image} alt={title} />
        </div>
        <div className="producto-info">
          <h4 className="producto-info__title">{title}</h4>
          <p className="producto-info__precios">
            <span>S/{price}</span>
          </p>
        </div>
      </Link>
      <button
        className="producto-info__btnAddToCart"
        onClick={() => handleAddToCart(id, title, price, image)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
