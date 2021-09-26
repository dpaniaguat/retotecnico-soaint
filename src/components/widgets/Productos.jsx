import React from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import Loading from "../common/Loading";
import { ProductoItem } from "./ProductoItem";
import "./sass/Productos.scss";

export const Productos = ( ) => {
  const { data: products, loading } = useFetchProducts(0);

  return (
    <section className="widget-productos">
      <div className="productos">
        {loading && <Loading texto="Cargando productos..." />}
        {products.map((data) => (
          <ProductoItem key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
};
