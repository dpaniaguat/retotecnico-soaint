import React from "react";
import { Link } from "react-router-dom";
import { agregarProducto } from "../../utils/appCart";
import { UserSession } from "../layout/UserSession";

export const ProductoItem = ({ id, title, price, image }) => {
  
  const handleAddToCart = (id, title, price, image) => {

    const producto = {
      id, 
      titulo:title, 
      precio: price, 
      imagen: image,
      cantidad:1
    }
    agregarProducto(producto)
    
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
        <button className="producto-info__btnAddToCart" onClick={()=>handleAddToCart(id, title, price, image)}>
            Agregar al carrito
          </button>
      </div>
    
  );
};
