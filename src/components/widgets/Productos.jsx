import React from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { ProductoItem } from "./ProductoItem";
import "./sass/Productos.scss";

export const Productos = ({productoId=0}) => {
  
    const { data: products, loading } = useFetchProducts(productoId);

  return (
    <section className="widget-productos">
      <h2>Productos</h2>

      {loading && (
        <p className="animate__animated animate__flash">Cargando...</p>
      )}

      <div className="productos">
        {products.map((data) => (
          <ProductoItem key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
};
