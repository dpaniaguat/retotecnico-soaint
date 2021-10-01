import React, { useContext,useState } from "react";
import { IconDelete } from "../../assets/icons";
import { CounterCart } from "../../components/common/CounterCart";
import CartContext from "../../context/cart/CartContext";
import { eliminarProducto } from "../../utils/appCart";
import { parseMoney } from "../../utils/util";
import "./sass/carrito.scss";

const CarritoItems = () => {

  const { removeItem, cartItems, showCart } = useContext(CartContext);

  const handleDeleteItemCart = (idProducto) => {
    eliminarProducto(idProducto);
    removeItem(idProducto);
  };
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="carritoCompras">
      {cartItems.map(({ id, precio, cantidad, titulo, imagen }) => (
        <div className="carro_item" key={id}>
          <div className="carro_item--imagenCover">
            <img src={imagen} alt={titulo} />
          </div>
          <div className={`carro_item--row ${showCart ? "sumary--" : ""}`}>
            <span>{titulo}</span>
            <CounterCart cantidadInicial={cantidad} id={id} title={titulo} price={precio} image={imagen} setClick={setIsClick} isclick={isClick} updCart={true}/>
             
            <span>S/{parseMoney(parseFloat(precio))}</span>
            <span>S/{parseMoney(parseFloat(precio) * cantidad)}</span>
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
