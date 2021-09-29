import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";
import { agregarProducto } from "../../utils/appCart";
import { parseMoney } from "../../utils/util";

export const ProductoItem = ({ id, title, price, image }) => {
  const { addToCart, showHideCart } = useContext(CartContext);

  const handleAddToCart = (id, title, price, image) => {
    const producto = {
      id,
      titulo: title,
      precio: price,
      imagen: image,
      cantidad: 1,
    };
    const productosLS = agregarProducto(producto);

    addToCart(productosLS);

    /* 
    desactivar en caso no requiera mostrar el resumen del carrito 
    cada vez que se añade un producto
    */
    showHideCart();
  };

  return (
    <div className="producto" key={id}>
      <Link exact to={`/producto/${id}`}>
        <div className="producto-imagen">
          <img src={image} alt={title} />
        </div>
        <div className="producto-info">
          <h4 className="producto-info__title" title={title}>
            {title.toString().length > 25
              ? `${title.toString().slice(0, 20)}...`
              : title}
          </h4>
          <p className="producto-info__precios">
            <span>S/{parseMoney(price)}</span>
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
