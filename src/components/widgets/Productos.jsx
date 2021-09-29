import React from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import Loading from "../common/Loading";
import { ProductoItem } from "./ProductoItem";
import "./sass/Productos.scss";

export const Productos = ({ viewHeaderCounter = false }) => {
  const { data: products, loading } = useFetchProducts(0);

  return (
    <section className="widget-productos">

      {viewHeaderCounter && <div className="header-count"><h2>
        Mostrando {products.length} Productos
        </h2></div>}

      <div className="productos">
        {loading && <Loading texto="Cargando productos..." />}
        {products.map((data) => (
          <ProductoItem key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
};
