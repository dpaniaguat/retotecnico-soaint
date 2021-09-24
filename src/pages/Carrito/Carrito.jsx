import React, { useEffect, useState } from "react";
import { eliminarProducto, leerDatosCarro } from "../../utils/appCart";
import "./sass/carrito.scss";

const Carrito = ({renderCart}) => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    setCarrito(leerDatosCarro());
  }, [renderCart]);

  const handleDeleteItemCart = (idProducto) => {
    console.log("eliminando id del carro", idProducto);
    eliminarProducto(idProducto);
    setCarrito(leerDatosCarro());
  };

  return (
    <div className="carritoCompras">
      {carrito.map(({ id, precio, cantidad, titulo, imagen }) => (
        <div className="carro_item" key={id}>
          <div className="carro_item--imagenCover">
            <img src={imagen} alt={titulo} />
          </div>
          <span>{titulo}</span>
          <span>S/{precio}</span>
          <span>{cantidad}</span>
          <span>S/{precio * cantidad}</span>
          <div className="item-opcion">
            <i onClick={() => handleDeleteItemCart(id)}>Eliminar</i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carrito;
