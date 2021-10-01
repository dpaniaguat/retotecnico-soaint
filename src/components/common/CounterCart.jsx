import React, { useEffect, useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import { useCouter } from "../../hooks/useCouter";
import { useForm } from "../../hooks/useForm";
import { agregarProducto } from "../../utils/appCart";
import "./sass/CounterCart.scss";

export const CounterCart = React.memo(
  ({ cantidadInicial = 1, id, title, price, image, setClick, isclick, updCart=false,currentCounter }) => {

    const { counter, setCounter, increment, decrement } =
      useCouter(cantidadInicial);

    const [formValues, handleInputChange] = useForm({
      cantidad: cantidadInicial,
    });

    const { addToCart } = useContext(CartContext);

    const { cantidad } = formValues;

    useEffect(() => {
      if (isclick && updCart) {
        const producto = {
          id,
          titulo: title,
          precio: price,
          imagen: image,
          cantidad: counter,
        };

        const productosLS = agregarProducto(producto);

        addToCart(productosLS);
      }
      if(currentCounter instanceof Function){
        currentCounter(counter);
      }
     
    }, [counter]);

    useEffect(() => {
      setCounter(cantidad);
      setClick(true);
    }, [cantidad]);

    return (
      <div className="counter-content">
        <button
          disabled={`${counter <= 1 ? "disabled" : ""}`}
          onClick={() => decrement(1)}
          className={`counter-content__button incrementa ${counter <= 1 ? "disabled" : ""}`}
        >
          -
        </button>

        <input
          type="text"
          name="cantidad"
          value={counter}
          onChange={handleInputChange}
          className="counter-content__input"
        />
        <button
          onClick={() => increment(1)}
          className="counter-content__button decrementa"
        >
          +
        </button>
      </div>
    );
  }
);
