import React from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import Loading from "../common/Loading";
import { ProductoItem } from "./ProductoItem";
import "./sass/ProductosRecomendados.scss";

export const ProductosRecomendados = () => {
  const { data: products, loading } = useFetchProducts(0);

  return (
    <section className="widget-productos-recomendados">
      <h3>Productos recomendados</h3>
      <div className="productos">
        {loading && <Loading texto="Cargando productos..." />}
        {products
          .sort(() => Math.random() - Math.random())
          .slice(0, 5)
          .map((data) => (
            <ProductoItem key={data.id} {...data} />
          ))}
      </div>
    </section>
  );
};
