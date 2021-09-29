import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../common/Loading";
import { ProductoItem } from "./ProductoItem";
import "./sass/ProductosRecomendados.scss";

export const ProductosRecomendados = () => {
  
  const { loading, data } = useFetch( process.env.REACT_APP_API_URL);
  
  return (
    <section className="widget-productos-recomendados">
      <h3>Productos recomendados</h3>
      <div className="productos">
        {loading && <Loading texto="Cargando productos..." />}
        {data&& (data
          .sort(() => Math.random() - Math.random())
          .slice(0, 5)
          .map((data) => (
            <ProductoItem key={data.id} {...data} />
          )))}
      </div>
    </section>
  );
};
