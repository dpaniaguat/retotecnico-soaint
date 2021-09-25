import React, { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import "./sass/carritoResumen.scss";

const CarritoResumen = () => {
  const { cartSumary, showHideCart, showCart } = useContext(CartContext);

  return (
    <div className="carrito-resumen">
      Resumen de compra
      <div className="sumaryCart">
        <div className="totalItems">
          <h4>Total items</h4>
          <span>{cartSumary.totalItems}</span>
        </div>
        <div className="cupones"></div>
        <div className="sumary_elements">
          <div className="sumary__element">
            <span>Subtotal</span>
            <strong>S/{cartSumary.subTotal}</strong>
          </div>
          <div className="sumary__element">
            <span>Descuento</span>
            <strong>S/0.00</strong>
          </div>
          <div className="sumary__element">
            <span>Total</span>
            <strong>S/{cartSumary.subTotal}</strong>
          </div>
        </div>
        <div className="sumary__button">
            <button>
                IR A PAGAR
            </button>
        </div>
      </div>
    </div>
  );
};

export default CarritoResumen;
